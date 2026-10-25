<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>();
</script>

<template>
  <header class="row items-end justify-between q-mb-lg q-gutter-y-sm">
    <div>
      <h1 class="text-h5 text-weight-bold q-my-none">{{ title }}</h1>
      <p v-if="subtitle" class="lc-muted q-mb-none q-mt-xs">{{ subtitle }}</p>
    </div>
    <div class="row q-gutter-sm">
      <slot />
    </div>
  </header>
</template>
