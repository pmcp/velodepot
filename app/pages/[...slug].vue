<template>
  <div class="prose mx-auto mt-12">
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1 class="mb-20">{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>

<!--    <nuxt-content-->
<!--      :document="page"-->
<!--      class="prose w-full" />-->
  </div>
</template>

<!--<script>-->
<!--export default {-->
<!--  async asyncData({ $content, params, error }) {-->
<!--    let page;-->
<!--    try {-->
<!--      page = await $content("pages", params.slug).fetch();-->
<!--    } catch (e) {-->
<!--      error({ message: "Page not found" });-->
<!--    }-->
<!--    return {-->
<!--      page-->
<!--    };-->
<!--  }-->
<!--};-->
<!--</script>-->
