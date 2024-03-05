<script lang="ts" setup>
import NavBarI18n from '@core/components/I18n.vue'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import type { I18nLanguage } from '@layouts/types'

const { isAppRtl } = useThemeConfig()

const i18nCompLanguages: I18nLanguage[] = [
  {
    label: 'English',
    i18nLang: 'en',
  },
  {
    label: 'Français',
    i18nLang: 'fr',
  },
  {
    label: 'عربي',
    i18nLang: 'ar',
  },
  {
    label: '繁體中文',
    i18nLang: 'cht',
  },
  {
    label: '简体中文',
    i18nLang: 'chs',
  },
]

// set the layout to the right
const handleLangChange = (lang: string) => {
  isAppRtl.value = lang === 'ar'
}
</script>

<template>
  <NavBarI18n
    :languages="i18nCompLanguages"
    @change="handleLangChange"
  />
</template>
