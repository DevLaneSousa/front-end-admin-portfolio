<script setup lang="ts">
import { computed } from 'vue';
import ListInput from '@/components/ListInput.vue';
import { filledCount, type EnglishField, type EnglishValues } from '@/lib/translations';

const model = defineModel<EnglishValues>({ required: true });
const props = defineProps<{
  fields: EnglishField[];
  source: Record<string, unknown>;
  defaultOpen?: boolean;
}>();

const filled = computed(() => filledCount(model.value, props.fields));

function original(key: string): string {
  const value = props.source[key];
  const text = Array.isArray(value) ? value.join(' · ') : String(value ?? '');
  if (!text.trim()) return 'PT: (vazio)';
  return `PT: ${text.length > 120 ? `${text.slice(0, 120)}…` : text}`;
}

function text(key: string): string {
  const value = model.value[key];
  return typeof value === 'string' ? value : '';
}

function list(key: string): string[] {
  const value = model.value[key];
  return Array.isArray(value) ? value : [];
}

function set(key: string, value: string | string[] | null) {
  model.value = { ...model.value, [key]: value ?? '' };
}
</script>

<template>
  <q-expansion-item
    class="lc-english lc-span"
    dark
    :default-opened="defaultOpen ?? filled === 0"
    header-class="lc-english__header"
  >
    <template #header>
      <q-item-section avatar>
        <span class="lc-english__flag lc-mono">EN</span>
      </q-item-section>
      <q-item-section>
        <q-item-label>Versão em inglês</q-item-label>
        <q-item-label caption>
          Aparece quando o visitante escolhe EN. Campo vazio usa o português.
        </q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-badge
          :color="filled === fields.length ? 'positive' : filled ? 'orange-8' : 'grey-8'"
          :label="`${filled}/${fields.length}`"
        />
      </q-item-section>
    </template>

    <div class="lc-form-grid q-pt-md">
      <template v-for="field in fields" :key="field.key">
        <ListInput
          v-if="field.type === 'list'"
          :model-value="list(field.key)"
          :label="`${field.label} (EN)`"
          :hint="original(field.key)"
          class="lc-span"
          @update:model-value="set(field.key, $event)"
        />
        <q-input
          v-else
          :model-value="text(field.key)"
          :type="field.type === 'textarea' ? 'textarea' : 'text'"
          :autogrow="field.type === 'textarea'"
          :label="`${field.label} (EN)`"
          :hint="original(field.key)"
          :class="{ 'lc-span': field.span || field.type === 'textarea' }"
          outlined
          dark
          @update:model-value="set(field.key, $event as string)"
        />
      </template>
    </div>
  </q-expansion-item>
</template>
