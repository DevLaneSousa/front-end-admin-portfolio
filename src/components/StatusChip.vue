<script setup lang="ts">
import { STATUS_COLORS, STATUS_LABELS } from '@/composables/format';

defineProps<{ status: string }>();
</script>

<template>
  <q-chip
    dense
    square
    :color="STATUS_COLORS[status] ?? 'grey-8'"
    text-color="white"
    class="text-weight-medium"
  >
    {{ STATUS_LABELS[status] ?? status }}
  </q-chip>
</template>
