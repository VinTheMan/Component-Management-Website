<script lang="ts" setup>
const currentPage = ref(1)
</script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="$vuetify.display.smAndUp ? 7 : 4"
  />
</template>
