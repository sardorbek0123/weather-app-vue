<template>
  <router-link
      :to="`/city/${city?.id}`"
      class="block p-3 sm:p-4 md:p-6 rounded-3xl cursor-pointer bg-gradient-to-br from-violet-500 to-fuchsia-500 transition-colors hover:opacity-95"
      @click="$emit('click')"
  >
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <div>
        <div class="flex items-center gap-1">
          <LocationIcon class="w-4 h-4 text-gray-100" />
          <p class="text-base sm:text-lg md:text-xl font-semibold text-gray-100">
            {{ city?.name }}
          </p>
        </div>
        <span class="block text-xs sm:text-sm text-gray-300">
          {{ city?.sys?.country }}
        </span>
      </div>

      <div class="flex items-end gap-2 mt-2 sm:mt-0">
        <img
            class="w-8 h-8 sm:w-10 sm:h-10"
            :src="`https://openweathermap.org/img/wn/${city?.weather[0]?.icon}@2x.png`"
            alt="weather-icon"
        />
        <span class="text-lg sm:text-xl md:text-2xl font-bold text-gray-100">
          {{ city?.main?.temp.toFixed() }}°
        </span>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mt-3">
      <div>
        <span class="text-xs sm:text-sm text-gray-300">
          вт, 3 июня в 23:46
        </span>
      </div>
      <div class="mt-1 sm:mt-0">
        <span class="text-xs sm:text-sm text-gray-300">
          {{ city?.main?.temp_max.toFixed() }}° / {{ city?.main?.temp_min.toFixed() }}°
        </span>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import LocationIcon from "@/components/Icons/Location.vue";
import type { City } from "@/types";

defineProps({
  city: Object as () => City
});
</script>

<style scoped>
</style>
