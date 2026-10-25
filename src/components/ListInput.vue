<script setup lang="ts">
const model = defineModel<string[]>({ default: () => [] });
defineProps<{ label: string; hint?: string }>();
</script>

<template>
  <q-select
    v-model="model"
    :label="label"
    :hint="hint ?? 'Digite e aperte Enter para adicionar'"
    outlined
    dark
    multiple
    use-chips
    use-input
    hide-dropdown-icon
    new-value-mode="add-unique"
    input-debounce="0"
  />
</template>
