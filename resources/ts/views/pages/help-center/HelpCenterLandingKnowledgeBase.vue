<script setup lang="ts">
import type {
  HelpCenterCategoriesType,
} from '@/@fake-db/types'

interface Props {
  categories: HelpCenterCategoriesType[]
}

const props = defineProps<Props>()

const totalArticles = (category: HelpCenterCategoriesType) => {
  return category.subCategories.map(subCategory => subCategory.articles.length).reduce((partialSum, a) => partialSum + a, 0)
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      lg="10"
      class="mx-auto mb-8"
    >
      <VRow>
        <VCol
          v-for="article in props.categories"
          :key="article.title"
          cols="12"
          sm="6"
          md="4"
        >
          <VCard :title="article.title">
            <template #prepend>
              <VAvatar
                rounded
                size="34"
                :color="article.avatarColor"
                variant="tonal"
              >
                <VIcon
                  size="24"
                  :icon="article.icon"
                />
              </VAvatar>
            </template>

            <VCardText>
              <ul
                class="ps-6"
                style="list-style: disc ;"
              >
                <li
                  v-for="item in article.subCategories"
                  :key="item.title"
                  class="text-primary mb-2"
                >
                  <RouterLink
                    :to="{
                      name: 'pages-help-center-category-subcategory',
                      params: { category: article.slug, subcategory: item.slug },
                    }"
                  >
                    {{ item.title }}
                  </RouterLink>
                </li>
              </ul>

              <div class="mt-4">
                <RouterLink
                  :to="{
                    name: 'pages-help-center-category-subcategory',
                    params: { category: article.slug, subcategory: article.subCategories[0].slug },
                  }"
                  class="font-weight-semibold"
                >
                  {{ totalArticles(article) }} Articles
                </RouterLink>
              </div>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>
