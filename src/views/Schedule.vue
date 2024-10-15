<!-- src/views/Schedule.vue -->
<template>
  <!--<h1 class="text-2xl font-bold text-center">{{ $t('schedule.title') }}</h1>-->
  <div class="mt-8 space-y-6">
    <p v-for="(paragraph, index) in content" :key="index" class="text-justify text-lg leading-relaxed">
      {{ paragraph }}
    </p>
    <h1 class="text-2xl font-bold">{{ $t('schedule.subTitle') }}</h1>
    <ul>
      <li v-for="(item, index) in schedule" :key="index" class="text-justify text-lg leading-relaxed">{{ item }}</li>
    </ul>
  </div>
  
  <div class="mt-8 space-y-6">
   
  </div>
</template>
  
<script>
export default {
  name: 'Schedule',
  computed: {
    content() {
      return this.$i18n.messages[this.$i18n.locale].schedule.content;
    },
    schedule() {
      return this.$i18n.messages[this.$i18n.locale].schedule.schedule;
    }
  }
};
</script>
  
<style scoped>
p {
  text-indent: 2em;
}
</style>
  