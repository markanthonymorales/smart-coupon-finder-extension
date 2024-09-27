<script setup lang="ts">
  import Loader from "./views/components/Loader.vue";
  import Navigation from "./views/components/Navigation.vue";
</script>
<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <KeepAlive :exclude="['Checkout']">
        <Suspense>
          <component :is="Component" />
          <template #fallback>
            <Loader />
          </template>
        </Suspense>
      </KeepAlive>
      <Navigation />
    </template>
  </RouterView>
</template>
