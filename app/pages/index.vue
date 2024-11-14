<template>
  <div class="prose mx-auto mt-12">
    <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl pb-12">
      {{ page.title }}
    </h1>
    <ContentDoc path="/home" class="prose w-full mb-40" />
  </div>

  <!--  This nav is here so Nuxt crawls all pages-->
  <nav class="h-0 overflow-hidden opacity-0">
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>


</template>

<script setup>
const { data: page } = await useAsyncData('home', () => queryContent('home').findOne())
</script>
