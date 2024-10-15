<!-- src/views/Fees.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold text-center">{{ $t('fees.title') }}</h1>
    <div class="mt-8 space-y-4">
      <p
        v-for="(paragraph, index) in content"
        :key="index"
        class="text-justify text-lg"
      >
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fees',
  computed: {
    content() {
      return this.$i18n.messages[this.$i18n.locale].fees.content;
    },
  },
};
</script>

<style scoped>
p {
  text-indent: 2em;
}</style>
