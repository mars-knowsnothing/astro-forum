<!-- src/components/Footer.vue -->
<template>
  <footer class="bg-gray-800 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div v-for="(image, index) in images" :key="index" class="flex justify-center">
          <div class="w-full max-w-xs">
            <img :src="image" alt="Footer Image" class="rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
  
<script>
import image1 from '../assets/image_1.jpg';
import image2 from '../assets/image_2.jpg';
import image3 from '../assets/image_3.jpg';
import image4 from '../assets/image_4.jpg';

export default {
  name: 'Footer',
  data() {
    return {
      images: [
        // 使用相对路径加载图片
        image1,image2,image3,image4
      ],
    };
  },
};
</script>
  
<style scoped>
footer {
  border-top: 1px solid #ccc;
}

img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.1);
}
/* 确保图片容器保持 16:9 的比例 */
.w-full {
  width: 100%;
}

.max-w-xs {
  max-width: 320px; /* 您可以根据需要调整最大宽度 */
  aspect-ratio: 16 / 9; /* 固定 16:9 的比例 */
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保图片完全覆盖容器 */
}
</style>
  