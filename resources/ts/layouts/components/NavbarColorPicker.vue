<script setup lang="ts">
import NavBarPalette from '@core/components/Palette.vue'
import { useTheme } from 'vuetify'
import { staticPrimaryColor } from '@/plugins/vuetify/theme'
import { themeConfig } from '@themeConfig'

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

</script>

<template>
  <NavBarPalette />
</template>
