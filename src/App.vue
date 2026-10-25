<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar();

$q.iconMapFn = (name) => {
  if (name.startsWith('sym_') || name.startsWith('img:') || name.includes(' ')) return undefined;
  return { icon: `sym_r_${name}` };
};
</script>

<template>
  <router-view />
</template>
