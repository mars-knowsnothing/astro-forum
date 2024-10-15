<!-- src/views/Home.vue -->
<template>
  <div>
    <!--
    <h1 class="text-2xl font-bold text-center">{{ $t('home.title') }}</h1>
    -->
    <div class="mt-8 space-y-6">
      <p v-for="(paragraph, index) in content" :key="index" class="text-justify text-lg leading-relaxed">
        {{ paragraph }}
      </p>
      <p class="text-justify text-lg font-bold leading-relaxed">{{ $t('home.list_1_title') }}</p>
      <p class="text-justify text-lg leading-relaxed">{{ $t('home.list_1') }}</p>
      <p class="text-justify text-lg font-bold leading-relaxed">{{ $t('home.list_2_title') }}</p>
      <p class="text-justify text-lg leading-relaxed">{{ $t('home.list_2') }}</p>
    </div>   
    <!-- <h4 class="text-xl font-bold mt-8">{{ $t('home.section_1_title') }}</h4>
    <div class="mt-8 space-y-6">
      <p v-for="(paragraph, index) in section_1_content" :key="index" class="text-justify text-lg leading-relaxed">
        {{ paragraph }}
      </p>
    </div>
        <h4 class="text-xl font-bold mt-8">{{ $t('home.section_2_title') }}</h4>
    <p v-for="(paragraph, index) in section_2_content" :key="index" class="text-justify text-lg leading-relaxed">
      {{ paragraph }}
    </p>
    <h4 class="text-xl font-bold mt-8">{{ $t('home.section_3_title') }}</h4>
    <p v-for="(paragraph, index) in section_3_content" :key="index" class="text-justify text-lg leading-relaxed">
      {{ paragraph }}
    </p>
    <h2 class="text-xl font-bold mt-8">{{ $t('home.section_4_title') }}</h2>
    <p v-for="(paragraph, index) in section_4_content" :key="index" class="text-justify text-lg leading-relaxed">
      {{ paragraph }}
    </p>
    <h2 class="text-xl font-bold mt-8">{{ $t('home.section_5_title') }}</h2>
    <p v-for="(paragraph, index) in section_5_content" :key="index" class="text-justify text-lg leading-relaxed">
      {{ paragraph }}
    </p>
    -->

  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    content() {
      return this.$i18n.messages[this.$i18n.locale].home.content;
    },
    section_1_content() {
      return this.$i18n.messages[this.$i18n.locale].home.section_1_content;
    },
    section_2_content() {
      return this.$i18n.messages[this.$i18n.locale].home.section_2_content;
    }
  },
};
</script>

<style scoped>
p {
  text-indent: 2em;
}
</style>
