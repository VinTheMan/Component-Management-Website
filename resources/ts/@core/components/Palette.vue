<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { useTheme } from 'vuetify';
import { AppContentLayoutNav } from '@layouts/enums'
import { staticPrimaryColor } from '@/plugins/vuetify/theme';
import { useThemeConfig } from '@core/composable/useThemeConfig';
import { themeConfig } from '@themeConfig';

const { appContentLayoutNav } = useThemeConfig()

// 👉 Primary Color
const vuetifyTheme = useTheme()

const initialThemeColors = JSON.parse(JSON.stringify(vuetifyTheme.current.value.colors))
const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

// ℹ️ It will set primary color for current theme only
const setPrimaryColor = (color: string) => {
  const currentThemeName = vuetifyTheme.name.value

  vuetifyTheme.themes.value[currentThemeName].colors.primary = color

  // ℹ️ We need to store this color value in localStorage so vuetify plugin can pick on next reload
  localStorage.setItem(`${themeConfig.app.title}-${currentThemeName}ThemePrimaryColor`, color)

  // ℹ️ Update initial loader color
  localStorage.setItem(`${themeConfig.app.title}-initial-loader-color`, color)
}

/*
  ℹ️ This will return static color for first indexed color
  If we don't make first (primary) color as static then when another color is selected then we will have two theme colors with same hex codes and it will show two check marks
*/
const getBoxColor = (color: string, index: number) => index ? color : staticPrimaryColor


interface Props {
  togglerIcon?: string
}

const props = withDefaults(defineProps<Props>(), {
  togglerIcon: 'bx-palette',
})

const router = useRouter()
</script>

<template>
  <IconBtn>
    <VIcon size="22" :icon="props.togglerIcon" />
    <VMenu activator="parent" offset="14px" location="bottom end" :close-on-content-click="false">
      <VCard>
        <VCardItem class="palette-section">
          <!-- 👉 Primary color -->
          <div class="d-flex gap-x-4">
            <div v-for="(color, index) in colors" :key="color"
              style="width: 2.5rem; height: 2.5rem; border-radius: 0.5rem; transition: all 0.25s ease;"
              :style="{ backgroundColor: getBoxColor(initialThemeColors[color], index) }"
              class="cursor-pointer d-flex align-center justify-center"
              :class="{ 'elevation-4': vuetifyTheme.current.value.colors.primary === getBoxColor(initialThemeColors[color], index) }"
              @click="setPrimaryColor(getBoxColor(initialThemeColors[color], index))">
              <VFadeTransition>
                <VIcon
                  v-show="vuetifyTheme.current.value.colors.primary === (getBoxColor(initialThemeColors[color], index))"
                  icon="bx-check" color="white" />
              </VFadeTransition>
            </div>
          </div>
        </VCardItem>
        <VDivider />
        <VCardItem class="palette-section">
          <VRadioGroup class="flex-center" v-model="appContentLayoutNav" inline>
            <VRadio v-for="[key, val] in Object.entries(AppContentLayoutNav)" :key="key" class="large-radio"
              :true-icon="(val === 'vertical') ? 'bx-grid-vertical' : 'bx-grid-horizontal'"
              :false-icon="(val === 'vertical') ? 'bx-grid-vertical' : 'bx-grid-horizontal'" :value="val">
            </VRadio>
          </VRadioGroup>
        </VCardItem>
      </VCard>
    </VMenu>
  </IconBtn>
</template>

<style lang="scss">
.palette-section {
  padding: 14px !important;
}

.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.large-radio {
  font-size: 2.5rem;
}
</style>
