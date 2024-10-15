<!-- src/App.vue -->
<template>
  <div>
    <!-- 顶部菜单栏 -->
    <nav class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- 语言切换器 -->
          <div>
            <button @click="toggleLanguage" class="text-white">
              {{ toggleLanguageText }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Banner 图像 -->
    <div class="relative">
      <img src="./assets/banner.jpg" alt="Banner" class="w-full h-40 object-cover" />
      <!-- 可选：半透明背景层 -->
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <!-- 文字层 -->
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 v-if="Array.isArray(bannerText)" class="text-white text-3xl md:text-5xl font-bold text-center">
          {{ bannerText[0] }}
        </h1>
        <h2 v-if="Array.isArray(bannerText) && bannerText[1]" class="text-white text-xl md:text-3xl mt-4 text-center">
          {{ bannerText[1] }}
        </h2>
      </div>
    </div>


    <!-- 选项卡导航 -->
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto">
        <div class="flex">
          <router-link v-for="tab in tabs" :key="tab.name" :to="tab.route"
            class="flex-1 py-4 text-center text-gray-700 hover:text-blue-500 text-xl font-bold"
            :class="$route.path === tab.route ? 'border-b-2 border-blue-500 text-blue-500' : ''">
            {{ $t(tab.label) }}
          </router-link>
        </div>
      </div>
    </div>
    <!-- 内容区域 -->

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view />
    </div>
    <!-- 底部 Footer -->
    <footer class="bg-gray-800 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="flex justify-center">
            <div class="w-full max-w-xs">
              <img src="./assets/image_1.jpg" alt="Footer Image 1" class="rounded-lg object-cover" />
            </div>
          </div>
          <div class="flex justify-center">
            <div class="w-full max-w-xs">
              <img src="./assets/image_2.jpg" alt="Footer Image 1" class="rounded-lg object-cover" />
            </div>
          </div>
          <div class="flex justify-center">
            <div class="w-full max-w-xs">
              <img src="./assets/image_3.jpg" alt="Footer Image 1" class="rounded-lg object-cover" />
            </div>
          </div>
          <div class="flex justify-center">
            <div class="w-full max-w-xs">
              <img src="./assets/image_4.jpg" alt="Footer Image 1" class="rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </div>
  </footer>
</div></template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tabs: [
        { name: 'Home', route: '/', label: 'tabs.home' },
        { name: 'Schedule', route: '/schedule', label: 'tabs.schedule' },
        { name: 'Registration', route: '/registration', label: 'tabs.registration' },
        //{ name: 'Fees', route: '/fees', label: 'tabs.fees' },
        //{ name: 'Contact', route: '/contact', label: 'tabs.contact' },
        { name: 'Venue', route: '/venue', label: 'tabs.venue' },
      ],
    };
  },
  computed: {
    bannerText() {
      return this.$i18n.messages[this.$i18n.locale].home.bannerText;
    },
    toggleLanguageText() {
      // 根据当前语言，返回相应的提示文本
      return this.$t('toggleLanguage');
    },
  },
  methods: {
    toggleLanguage() {
      // 切换语言
      if (this.$i18n.locale === 'zh') {
        this.$i18n.locale = 'en';
      } else {
        this.$i18n.locale = 'zh';
      }
    },
  }
};
</script>

<style>
footer {
  border-top: 1px solid #ccc;
}

footer div div div img {
  transition: transform 0.3s ease;
}

footer div div div img:hover {
  transform: scale(1.1);
}

/* 确保图片容器保持 16:9 的比例 */
.w-full {
  width: 100%;
}

.max-w-xs {
  max-width: 320px;
  /* 您可以根据需要调整最大宽度 */
  aspect-ratio: 16 / 9;
  /* 固定 16:9 的比例 */
}

footer div div div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 确保图片完全覆盖容器 */
}</style>
