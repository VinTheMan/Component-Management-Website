<script setup lang="ts">
import { useThemeConfig } from '@core/composable/useThemeConfig'
import type { ThemeSwitcherTheme } from '@layouts/types'
import { themeConfig } from '@themeConfig'

const props = defineProps<{
  themes: ThemeSwitcherTheme[]
}>()

const { theme, isVerticalNavSemiDark } = useThemeConfig()
const { state: currentThemeName, next: getNextThemeName, index: currentThemeIndex } = useCycleList(props.themes.map(t => t.name), { initialValue: theme.value })

const changeTheme = () => {
  const nextTheme = getNextThemeName();
  if (nextTheme === "semi-dark") {
    isVerticalNavSemiDark.value = true;
    localStorage.setItem(`${themeConfig.app.title}-isVerticalNavSemiDark`, "true");
    theme.value = "light";
  } // if
  else {
    isVerticalNavSemiDark.value = false;
    localStorage.setItem(`${themeConfig.app.title}-isVerticalNavSemiDark`, "false");
    theme.value = nextTheme;
  } // else

  // console.log(theme.value); // test
} // changeTheme

// Update icon if theme is changed from other sources
watch(theme, val => {
  currentThemeName.value = val
})
</script>

<template>
  <IconBtn @click="changeTheme">
    <VIcon size="22" :icon="props.themes[currentThemeIndex].icon" />
    <VTooltip activator="parent" open-delay="1000">
      <span class="text-capitalize">{{ currentThemeName }}</span>
    </VTooltip>
  </IconBtn>
</template>
