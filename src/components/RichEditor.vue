<script setup lang="ts">
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Youtube from '@tiptap/extension-youtube';
import StarterKit from '@tiptap/starter-kit';
import { EditorContent, useEditor, type JSONContent } from '@tiptap/vue-3';
import { useQuasar } from 'quasar';
import { onBeforeUnmount, ref, watch } from 'vue';
import { useNotify } from '@/composables/useNotify';
import { mediaApi } from '@/services/api';

const props = defineProps<{ json?: unknown; html?: string }>();
const emit = defineEmits<{ change: [value: { json: JSONContent; html: string }] }>();
const $q = useQuasar();
const notify = useNotify();
const fileInput = ref<HTMLInputElement | null>(null);

const editor = useEditor({
  content: (props.json as JSONContent | undefined) ?? props.html ?? '',
  extensions: [
    StarterKit.configure({ heading: { levels: [2, 3] } }),
    Link.configure({ openOnClick: false, autolink: true }),
    Image.configure({ inline: false }),
    Youtube.configure({ nocookie: true, width: 640, height: 360 }),
    Placeholder.configure({ placeholder: 'Conte como foi a palestra, o curso ou a mentoria…' }),
  ],
  editorProps: { attributes: { class: 'lc-prose' } },
  onUpdate: ({ editor: instance }) =>
    emit('change', { json: instance.getJSON(), html: instance.getHTML() }),
});

watch(
  () => props.json,
  (value) => {
    if (!editor.value || !value) return;
    if (JSON.stringify(editor.value.getJSON()) !== JSON.stringify(value)) {
      editor.value.commands.setContent(value as JSONContent, false);
    }
  },
);

onBeforeUnmount(() => editor.value?.destroy());

function promptLink() {
  $q.dialog({
    title: 'Link',
    prompt: { model: editor.value?.getAttributes('link').href ?? '', type: 'url' },
    dark: true,
    cancel: true,
  }).onOk((href: string) => {
    if (!href) editor.value?.chain().focus().unsetLink().run();
    else editor.value?.chain().focus().setLink({ href, target: '_blank' }).run();
  });
}

function promptVideo() {
  $q.dialog({
    title: 'Vídeo do YouTube',
    prompt: { model: '', type: 'url' },
    dark: true,
    cancel: true,
  }).onOk((src: string) => src && editor.value?.commands.setYoutubeVideo({ src }));
}

async function onImage(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;
  try {
    const media = await mediaApi.upload(file, 'blog');
    editor.value?.chain().focus().setImage({ src: media.url, alt: file.name }).run();
  } catch (error) {
    notify.error(error);
  } finally {
    if (fileInput.value) fileInput.value.value = '';
  }
}

const tools = [
  {
    icon: 'format_bold',
    label: 'Negrito',
    run: () => editor.value?.chain().focus().toggleBold().run(),
    active: 'bold',
  },
  {
    icon: 'format_italic',
    label: 'Itálico',
    run: () => editor.value?.chain().focus().toggleItalic().run(),
    active: 'italic',
  },
  {
    icon: 'title',
    label: 'Título',
    run: () => editor.value?.chain().focus().toggleHeading({ level: 2 }).run(),
    active: 'heading',
  },
  {
    icon: 'format_list_bulleted',
    label: 'Lista',
    run: () => editor.value?.chain().focus().toggleBulletList().run(),
    active: 'bulletList',
  },
  {
    icon: 'format_list_numbered',
    label: 'Lista numerada',
    run: () => editor.value?.chain().focus().toggleOrderedList().run(),
    active: 'orderedList',
  },
  {
    icon: 'format_quote',
    label: 'Citação',
    run: () => editor.value?.chain().focus().toggleBlockquote().run(),
    active: 'blockquote',
  },
  {
    icon: 'code',
    label: 'Código',
    run: () => editor.value?.chain().focus().toggleCodeBlock().run(),
    active: 'codeBlock',
  },
  { icon: 'link', label: 'Link', run: promptLink, active: 'link' },
  { icon: 'image', label: 'Imagem', run: () => fileInput.value?.click(), active: '' },
  { icon: 'smart_display', label: 'YouTube', run: promptVideo, active: '' },
  {
    icon: 'undo',
    label: 'Desfazer',
    run: () => editor.value?.chain().focus().undo().run(),
    active: '',
  },
  {
    icon: 'redo',
    label: 'Refazer',
    run: () => editor.value?.chain().focus().redo().run(),
    active: '',
  },
];
</script>

<template>
  <div class="lc-editor lc-card">
    <div class="lc-editor__toolbar row q-gutter-xs">
      <q-btn
        v-for="tool in tools"
        :key="tool.icon"
        dense
        flat
        round
        size="sm"
        :icon="tool.icon"
        :color="tool.active && editor?.isActive(tool.active) ? 'primary' : 'grey-5'"
        @click="tool.run"
      >
        <q-tooltip>{{ tool.label }}</q-tooltip>
      </q-btn>
    </div>
    <EditorContent :editor="editor" class="lc-editor__content" />
    <input ref="fileInput" type="file" accept="image/*" hidden @change="onImage" />
  </div>
</template>

<style lang="scss">
.lc-editor__toolbar {
  padding: 8px;
  border-bottom: 1px solid var(--lc-border);
  position: sticky;
  top: 0;
  background: var(--lc-surface);
  z-index: 1;
}

.lc-editor__content {
  padding: 16px 20px;
}

.lc-prose {
  min-height: 360px;
  outline: none;
  font-size: 16px;
  line-height: 1.75;

  > * + * {
    margin-top: 0.9em;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.25;
  }

  h3 {
    font-size: 1.2rem;
  }

  blockquote {
    border-left: 3px solid $primary;
    padding-left: 16px;
    color: var(--lc-muted);
  }

  img {
    max-width: 100%;
    border-radius: 10px;
  }

  pre {
    background: var(--lc-surface-raised);
    padding: 12px 16px;
    border-radius: 8px;
  }

  a {
    color: #ff6b78;
  }

  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
    border-radius: 10px;
  }

  p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
    color: var(--lc-muted);
  }
}
</style>
