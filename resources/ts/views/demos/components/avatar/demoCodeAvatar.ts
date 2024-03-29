export const colors = {
  ts: `<template>
  <div class="demo-space-x">
    <VAvatar color="primary">
      <span>PI</span>
    </VAvatar>

    <VAvatar color="secondary">
      <span class="text-white">SE</span>
    </VAvatar>

    <VAvatar color="success">
      <span>SU</span>
    </VAvatar>

    <VAvatar color="info">
      <span>IN</span>
    </VAvatar>

    <VAvatar color="warning">
      <span>WA</span>
    </VAvatar>

    <VAvatar color="error">
      <span>ER</span>
    </VAvatar>
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-x">
    <VAvatar color="primary">
      <span>PI</span>
    </VAvatar>

    <VAvatar color="secondary">
      <span class="text-white">SE</span>
    </VAvatar>

    <VAvatar color="success">
      <span>SU</span>
    </VAvatar>

    <VAvatar color="info">
      <span>IN</span>
    </VAvatar>

    <VAvatar color="warning">
      <span>WA</span>
    </VAvatar>

    <VAvatar color="error">
      <span>ER</span>
    </VAvatar>
  </div>
</template>
`,
}

export const group = {
  ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
</script>

<template>
  <div class="v-avatar-group">
    <VAvatar :size="44">
      <VImg :src="avatar1" />
      <VTooltip
        activator="parent"
        location="top"
      >
        John Doe
      </VTooltip>
    </VAvatar>

    <VAvatar :size="44">
      <VImg :src="avatar2" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Jennie Obrien
      </VTooltip>
    </VAvatar>

    <VAvatar :size="44">
      <VImg :src="avatar3" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Peter Harper
      </VTooltip>
    </VAvatar>

    <VAvatar :size="44">
      <VImg :src="avatar4" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Vivian Padilla
      </VTooltip>
    </VAvatar>

    <VAvatar :size="44">
      <VImg :src="avatar5" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Scott Wells
      </VTooltip>
    </VAvatar>

    <VAvatar :size="44">
      <VImg :src="avatar6" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Angel Bishop
      </VTooltip>
    </VAvatar>
  </div>
</template>
`,
  js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
</script>

<template>
  <div class="v-avatar-group">
    <VAvatar :size="44">
      <VImg :src="avatar1" />
      <VTooltip
        activator="parent"
        location="top"
      >
        John Doe
      </VTooltip>
    </VAvatar>

    <VAvatar :size="44">
      <VImg :src="avatar2" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Jennie Obrien
      </VTooltip>
    </VAvatar>

    <VAvatar :size="44">
      <VImg :src="avatar3" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Peter Harper
      </VTooltip>
    </VAvatar>

    <VAvatar :size="44">
      <VImg :src="avatar4" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Vivian Padilla
      </VTooltip>
    </VAvatar>

    <VAvatar :size="44">
      <VImg :src="avatar5" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Scott Wells
      </VTooltip>
    </VAvatar>

    <VAvatar :size="44">
      <VImg :src="avatar6" />
      <VTooltip
        activator="parent"
        location="top"
      >
        Angel Bishop
      </VTooltip>
    </VAvatar>
  </div>
</template>
`,
}

export const icons = {
  ts: `<template>
  <div class="demo-space-x">
    <VAvatar color="primary">
      <VIcon
        size="24"
        icon="bx-home"
      />
    </VAvatar>

    <VAvatar color="secondary">
      <VIcon
        size="24"
        icon="bx-cloud"
      />
    </VAvatar>

    <VAvatar color="success">
      <VIcon
        size="24"
        icon="bx-bell"
      />
    </VAvatar>

    <VAvatar color="info">
      <VIcon
        size="24"
        icon="bx-user"
      />
    </VAvatar>

    <VAvatar color="warning">
      <VIcon
        size="24"
        icon="bx-error"
      />
    </VAvatar>

    <VAvatar color="error">
      <VIcon
        size="24"
        icon="bx-message"
      />
    </VAvatar>
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-x">
    <VAvatar color="primary">
      <VIcon
        size="24"
        icon="bx-home"
      />
    </VAvatar>

    <VAvatar color="secondary">
      <VIcon
        size="24"
        icon="bx-cloud"
      />
    </VAvatar>

    <VAvatar color="success">
      <VIcon
        size="24"
        icon="bx-bell"
      />
    </VAvatar>

    <VAvatar color="info">
      <VIcon
        size="24"
        icon="bx-user"
      />
    </VAvatar>

    <VAvatar color="warning">
      <VIcon
        size="24"
        icon="bx-error"
      />
    </VAvatar>

    <VAvatar color="error">
      <VIcon
        size="24"
        icon="bx-message"
      />
    </VAvatar>
  </div>
</template>
`,
}

export const images = {
  ts: `<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
</script>

<template>
  <div class="demo-space-x">
    <VAvatar>
      <VImg :src="avatar1" />
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar2" />
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar3" />
    </VAvatar>
    <VAvatar>
      <VImg :src="avatar4" />
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar5" />
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar6" />
    </VAvatar>
  </div>
</template>
`,
  js: `<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
</script>

<template>
  <div class="demo-space-x">
    <VAvatar>
      <VImg :src="avatar1" />
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar2" />
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar3" />
    </VAvatar>
    <VAvatar>
      <VImg :src="avatar4" />
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar5" />
    </VAvatar>

    <VAvatar>
      <VImg :src="avatar6" />
    </VAvatar>
  </div>
</template>
`,
}

export const rounded = {
  ts: `<template>
  <div class="demo-space-x">
    <VAvatar
      rounded="0"
      color="primary"
    >
      <VIcon
        size="24"
        icon="bx-user"
      />
    </VAvatar>

    <VAvatar
      rounded="sm"
      color="secondary"
    >
      <VIcon
        size="24"
        icon="bx-user"
      />
    </VAvatar>

    <VAvatar
      rounded
      color="success"
    >
      <VIcon
        size="24"
        icon="bx-user"
      />
    </VAvatar>

    <VAvatar
      rounded="lg"
      color="info"
    >
      <VIcon
        size="24"
        icon="bx-user"
      />
    </VAvatar>

    <VAvatar
      rounded="xl"
      color="warning"
    >
      <VIcon
        size="24"
        icon="bx-user"
      />
    </VAvatar>

    <VAvatar color="error">
      <VIcon
        size="24"
        icon="bx-user"
      />
    </VAvatar>
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-x">
    <VAvatar
      rounded="0"
      color="primary"
    >
      <VIcon
        size="24"
        icon="bx-user"
      />
    </VAvatar>

    <VAvatar
      rounded="sm"
      color="secondary"
    >
      <VIcon
        size="24"
        icon="bx-user"
      />
    </VAvatar>

    <VAvatar
      rounded
      color="success"
    >
      <VIcon
        size="24"
        icon="bx-user"
      />
    </VAvatar>

    <VAvatar
      rounded="lg"
      color="info"
    >
      <VIcon
        size="24"
        icon="bx-user"
      />
    </VAvatar>

    <VAvatar
      rounded="xl"
      color="warning"
    >
      <VIcon
        size="24"
        icon="bx-user"
      />
    </VAvatar>

    <VAvatar color="error">
      <VIcon
        size="24"
        icon="bx-user"
      />
    </VAvatar>
  </div>
</template>
`,
}

export const sizes = {
  ts: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      size="x-small"
    >
      <small>PI</small>
    </VAvatar>

    <VAvatar
      color="secondary"
      size="small"
    >
      <span>PI</span>
    </VAvatar>

    <VAvatar color="success">
      <span>PI</span>
    </VAvatar>

    <VAvatar
      color="info"
      size="large"
    >
      <span class="text-h6 text-white">PI</span>
    </VAvatar>

    <VAvatar
      color="error"
      size="x-large"
    >
      <span class="text-h5 text-white">PI</span>
    </VAvatar>
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      size="x-small"
    >
      <small>PI</small>
    </VAvatar>

    <VAvatar
      color="secondary"
      size="small"
    >
      <span>PI</span>
    </VAvatar>

    <VAvatar color="success">
      <span>PI</span>
    </VAvatar>

    <VAvatar
      color="info"
      size="large"
    >
      <span class="text-h6 text-white">PI</span>
    </VAvatar>

    <VAvatar
      color="error"
      size="x-large"
    >
      <span class="text-h5 text-white">PI</span>
    </VAvatar>
  </div>
</template>
`,
}

export const tonal = {
  ts: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      variant="tonal"
    >
      <span>PI</span>
    </VAvatar>
    <VAvatar
      color="secondary"
      variant="tonal"
    >
      <span>SE</span>
    </VAvatar>
    <VAvatar
      color="success"
      variant="tonal"
    >
      <span>SU</span>
    </VAvatar>
    <VAvatar
      color="info"
      variant="tonal"
    >
      <span>IN</span>
    </VAvatar>
    <VAvatar
      color="warning"
      variant="tonal"
    >
      <span>WA</span>
    </VAvatar>
    <VAvatar
      color="error"
      variant="tonal"
    >
      <span>ER</span>
    </VAvatar>
  </div>
</template>
`,
  js: `<template>
  <div class="demo-space-x">
    <VAvatar
      color="primary"
      variant="tonal"
    >
      <span>PI</span>
    </VAvatar>
    <VAvatar
      color="secondary"
      variant="tonal"
    >
      <span>SE</span>
    </VAvatar>
    <VAvatar
      color="success"
      variant="tonal"
    >
      <span>SU</span>
    </VAvatar>
    <VAvatar
      color="info"
      variant="tonal"
    >
      <span>IN</span>
    </VAvatar>
    <VAvatar
      color="warning"
      variant="tonal"
    >
      <span>WA</span>
    </VAvatar>
    <VAvatar
      color="error"
      variant="tonal"
    >
      <span>ER</span>
    </VAvatar>
  </div>
</template>
`,
}
