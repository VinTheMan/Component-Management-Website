<script lang="ts" setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useChat } from './useChat'
import { useChatStore } from '@/views/apps/chat/useChatStore'
import { avatarText } from '@core/utils/formatters'

const emit = defineEmits<{
  (e: 'close'): void
}>()

// composables
const store = useChatStore()
const { resolveAvatarBadgeVariant } = useChat()

const userStatusRadioOptions = [
  { title: 'Online', value: 'online', color: 'success' },
  { title: 'Away', value: 'away', color: 'warning' },
  { title: 'Do not disturb', value: 'busy', color: 'error' },
  { title: 'Offline', value: 'offline', color: 'secondary' },
]
</script>

<template>
  <template v-if="store.profileUser">
    <!-- Close Button -->
    <div class="pt-2 me-2 text-end">
      <IconBtn @click="$emit('close')">
        <VIcon
          class="text-medium-emphasis"
          icon="bx-x"
          size="28"
        />
      </IconBtn>
    </div>

    <!-- User Avatar + Name + Role -->
    <div class="text-center px-6">
      <VBadge
        location="bottom right"
        offset-x="7"
        offset-y="4"
        bordered
        :color="resolveAvatarBadgeVariant(store.profileUser.status)"
        class="chat-user-profile-badge mb-4"
      >
        <VAvatar
          size="84"
          variant="tonal"
          :class="`text-${resolveAvatarBadgeVariant(store.profileUser.status)}`"
        >
          <VImg
            v-if="store.profileUser.avatar"
            :src="store.profileUser.avatar"
          />
          <span
            v-else
            class="text-3xl"
          >{{ avatarText(store.profileUser.fullName) }}</span>
        </VAvatar>
      </VBadge>
      <h2 class="mb-1 text-high-emphasis font-weight-medium text-base">
        {{ store.profileUser.fullName }}
      </h2>
      <p class="text-capitalize text-medium-emphasis text-sm">
        {{ store.profileUser.role }}
      </p>
    </div>

    <!-- User Data -->
    <PerfectScrollbar
      class="ps-chat-user-profile-sidebar-content pb-5 px-5"
      :options="{ wheelPropagation: false }"
    >
      <!-- About -->
      <div class="my-5 text-medium-emphasis">
        <span
          for="textarea-user-about"
          class="text-sm text-disabled"
        >ABOUT</span>
        <VTextarea
          id="textarea-user-about"
          v-model="store.profileUser.about"
          auto-grow
          class="mt-1"
          rows="4"
        />
      </div>

      <!-- Status -->
      <div class="mb-6">
        <span class="text-sm text-disabled">STATUS</span>
        <VRadioGroup
          v-model="store.profileUser.status"
          class="mt-1"
        >
          <VRadio
            v-for="radioOption in userStatusRadioOptions"
            :key="radioOption.title"
            :label="radioOption.title"
            :value="radioOption.value"
            :color="radioOption.color"
          />
        </VRadioGroup>
      </div>

      <!-- Settings -->
      <div class="text-medium-emphasis">
        <span class="text-sm text-disabled">SETTINGS</span>
        <div class="d-flex align-center mb-3 mt-2">
          <VIcon
            class="me-3"
            icon="bx-check-circle"
          />
          <span class="me-auto">Two-step Verification</span>
        </div>
        <div class="d-flex align-center mb-3">
          <VIcon
            class="me-3"
            icon="bx-bell"
          />
          <span class="me-auto">Notification</span>
        </div>
        <div class="d-flex align-center mb-3">
          <VIcon
            class="me-3"
            icon="bx-user"
          />
          <span>Invite Friends</span>
        </div>
        <div class="d-flex align-center">
          <VIcon
            class="me-3"
            icon="bx-trash"
          />
          <span>Delete Account</span>
        </div>
      </div>

      <!-- Logout Button -->
      <VBtn
        color="primary"
        class="mt-6"
      >
        Logout
      </VBtn>
    </PerfectScrollbar>
  </template>
</template>
