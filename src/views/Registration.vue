<!-- src/views/Registration.vue -->
<template>
    <div>
        <h1 class="text-2xl font-bold text-center">{{ $t('registration.title') }}</h1>
        <div class="mt-8 space-y-4">
            <!--
            <p v-for="(item, index) in content" :key="index" class="text-justify text-lg">
                {{ item }}
            </p>
            -->
            <div v-for="(item, index) in content" :key="index">
                <!-- 如果 item 是数组类型 -->
                <p v-if="Array.isArray(item)" class="text-justify text-lg">
                    <!-- 显示第一个元素 -->
                    {{ item[0] }}
                    <!-- 如果数组长度大于 1，显示第二个元素为 <a> 标签 -->
                    <a v-if="item[1]" :href="item[1]" class="text-blue-500 underline">
                        {{ item[1] }}
                    </a>
                </p>
                <!-- 如果 item 不是数组类型 -->
                <p v-else class="text-justify text-lg">
                    {{ item }}
                </p>
            </div>
            <!-- 如果有注册二维码，可以在此处添加 -->
            <div class="flex  mt-8">
                <img src='/src/assets/qr_code.jpg' alt="qrcode" class="w-64 h-64" />
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Registration',
    computed: {
        content() {
            return this.$i18n.messages[this.$i18n.locale].registration.content;
        }
    },
};
</script>
  
<style scoped>
p {
    text-indent: 2em;
}

img {
    /* 缩进 */
    margin-left: 2em;
}
</style>
  