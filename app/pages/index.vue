<script setup lang="ts">
import { Button as UiButton } from '@/components/ui/button'
</script>

<template>
  <section class="p-6 space-y-4">
    <h1 class="text-2xl font-semibold">Welcome</h1>
    <div class="flex flex-wrap gap-3">
      <UiButton>Default</UiButton>
      <UiButton variant="secondary">Secondary</UiButton>
      <UiButton variant="outline">Outline</UiButton>
    </div>
  </section>
</template>
