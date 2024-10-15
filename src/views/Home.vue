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
      <div v-for="(item, index) in list_1" :key="index">
        <!-- 如果 item 是字符串，显示为段落 -->
        <p v-if="!isList(item)" class="text-justify text-lg">
          <span v-html="itemWithLinks(item)"></span>
        </p>
        <!-- 如果 item 是列表，显示为无序列表 -->
        <ul v-else class="list-disc list-inside space-y-2">
          <li v-for="(listItem, idx) in item" :key="idx">
            <span v-html="itemWithLinks(listItem)"></span>
          </li>
        </ul>
      </div>
      <p class="text-justify text-lg font-bold leading-relaxed">{{ $t('home.list_2_title') }}</p>
      <div v-for="(item, index) in list_2" :key="index">
        <!-- 如果 item 是字符串，显示为段落 -->
        <p v-if="!isList(item)" class="text-justify text-lg">
          <span v-html="itemWithLinks(item)"></span>
        </p>
        <!-- 如果 item 是列表，显示为无序列表 -->
        <ul v-else class="list-disc list-inside space-y-2">
          <li v-for="(listItem, idx) in item" :key="idx">
            <span v-html="itemWithLinks(listItem)"></span>
          </li>
        </ul>
      </div>
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
    },
    list_1() {
      return this.$i18n.messages[this.$i18n.locale].home.list_1;
    },
    list_2() {
      return this.$i18n.messages[this.$i18n.locale].home.list_2;
    }
  },
  methods: {
    isList(item) {
      return Array.isArray(item);
    },
    itemWithLinks(item) {
      // 检测并转换网址和邮箱为可点击链接
      let text = item;

      // 转换邮箱为邮件链接
      const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,})/g;
      text = text.replace(emailRegex, (email) => {
        return `<a href="mailto:${email}" class="text-blue-500 underline">${email}</a>`;
      });

      // 转换 http 开头的 URL 为链接
      const urlRegex = /(http[s]?:\/\/[^\s]+)/g;
      text = text.replace(urlRegex, (url) => {
        return `<a href="${url}" target="_blank" class="text-blue-500 underline">${url}</a>`;
      });
      
      return text;
    },
  }
};
</script>

<style scoped>
p {
  text-indent: 2em;
}
</style>
