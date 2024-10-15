<!-- src/views/Contact.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold text-center">{{ $t('contact.title') }}</h1>
    <div class="mt-8 space-y-4">
      <div v-for="(item, index) in content" :key="index">
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
  </div>
</template>

<script>
export default {
  name: 'Contact',
  computed: {
    content() {
      return this.$i18n.messages[this.$i18n.locale].contact.content;
    },
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
  },
};
</script>

<style scoped>
p {
  text-indent: 2em;
}

ul {
  text-indent: 4em;
}

</style>

