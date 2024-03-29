<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

defineEmits<{
  (e: 'toggleComposeDialogVisibility'): void
}>()

const folders = [
  {
    title: 'Inbox',
    prependIcon: 'bx-envelope',
    to: { name: 'apps-email' },
    badge: { content: '21', color: 'primary' },
  },
  {
    title: 'Sent',
    prependIcon: 'bx-send',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'sent' },
    },
  },
  {
    title: 'Draft',
    prependIcon: 'bx-pencil',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'draft' },
    },
    badge: { content: '1', color: 'warning' },
  },
  {
    title: 'Starred',
    prependIcon: 'bx-star',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'starred' },
    },
  },
  {
    title: 'Spam',
    prependIcon: 'bx-error-circle',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'spam' },
    },
    badge: { content: '6', color: 'error' },
  },
  {
    title: 'Trash',
    prependIcon: 'bx-trash-alt',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'trashed' },
    },
  },
]

const labels = [
  {
    title: 'Personal',
    color: 'success',
    to: {
      name: 'apps-email-label',
      params: { label: 'personal' },
    },
  },
  {
    title: 'Company',
    color: 'primary',
    to: {
      name: 'apps-email-label',
      params: { label: 'company' },
    },
  },
  {
    title: 'Important',
    color: 'warning',
    to: {
      name: 'apps-email-label',
      params: { label: 'important' },
    },
  },
  {
    title: 'Private',
    color: 'error',
    to: {
      name: 'apps-email-label',
      params: { label: 'private' },
    },
  },
]
</script>

<template>
  <div class="d-flex flex-column h-100">
    <!-- 👉 Compose -->
    <div class="pa-5">
      <VBtn
        block
        @click="$emit('toggleComposeDialogVisibility')"
      >
        Compose
      </VBtn>
    </div>

    <!-- 👉 Folders -->
    <PerfectScrollbar
      :options="{ wheelPropagation: false }"
      class="h-100"
    >
      <ul class="email-filters-labels py-2">
        <RouterLink
          v-for="folder in folders"
          :key="folder.title"
          v-slot="{ isActive, href, navigate }"
          class="d-flex align-center cursor-pointer"
          :to="folder.to"
          custom
        >
          <li
            v-bind="$attrs"
            :href="href"
            :class="isActive && 'email-filter-active text-primary'"
            class="d-flex align-center cursor-pointer"
            @click="navigate"
          >
            <VIcon
              :icon="folder.prependIcon"
              class="me-3"
              size="22"
            />
            <span>{{ folder.title }}</span>

            <VSpacer />

            <VChip
              v-if="folder.badge?.content"
              size="small"
              :color="folder.badge.color"
            >
              <span class="text-xs font-weight-medium">{{ folder.badge.content }}</span>
            </VChip>
          </li>
        </RouterLink>
      </ul>

      <ul class="email-filters-labels">
        <!-- 👉 Labels -->
        <li class="text-xs d-block text-uppercase text-disabled mt-5 py-0">
          LABELS
        </li>

        <RouterLink
          v-for="label in labels"
          :key="label.title"
          v-slot="{ isActive, href, navigate }"
          class="d-flex align-center"
          :to="label.to"
          custom
        >
          <li
            v-bind="$attrs"
            :href="href"
            :class="isActive && 'email-label-active text-primary'"
            class="cursor-pointer"
            @click="navigate"
          >
            <VBadge
              inline
              dot
              :color="label.color"
              class="me-4"
            />
            <span>{{ label.title }}</span>
          </li>
        </RouterLink>
      </ul>
    </PerfectScrollbar>
  </div>
</template>

<style lang="scss">
.email-filters-labels {
  > li {
    position: relative;
    margin-block-end: 4px;
    padding-block: 4px;
    padding-inline: 20px;
  }

  .email-filter-active,
  .email-label-active {
    &::after {
      position: absolute;
      background: currentcolor;
      block-size: 100%;
      content: "";
      inline-size: 3px;
      inset-block-start: 0;
      inset-inline-start: 0;
    }
  }
}
</style>
