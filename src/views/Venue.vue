<template>
  <div>
    <h1 class="text-2xl font-bold text-center">{{ $t('venue.title') }}</h1>
    <div class="mt-8 space-y-4">
      <p class="text-justify text-lg">
        {{ $t('venue.content_1') }}
      </p>
      <img src="/src/assets/venue.png" alt="venue" class="w-full" />
      <p class="text-justify text-lg">
        {{ $t('venue.content_2') }}
      </p>
      <p>
        <a :href="$t('venue.link_2')" target="_blank" class="text-blue-500 underline">pku_map_direction.pdf</a>
      </p>
      <p class="text-justify text-lg">
        {{ $t('venue.content_3') }}
      </p>

      <p>
        <a :href="$t('venue.link_3')" target="_blank"
          class="text-blue-500 underline">http://kavli.pku.edu.cn/visitor-info/maps</a>
      </p>

      <p class="text-justify text-lg">
        {{ $t('venue.hotel') }}
      </p>

      <p>
        <a :href="$t('venue.hotel_link')" download target="_blank"
          class="text-blue-500 underline">{{ $t('venue.hotel_link_text') }}</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
p {
  text-indent: 2em;
}</style>