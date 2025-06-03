<template>
  <router-link
      :to="`/city/${city?.id}`"
      class="p-3 rounded-3xl cursor-pointer bg-blue-100 hover:bg-blue-200 transition-300"
      @click="$emit('click')"
  >
    <div class="flex items-center justify-between">
      <div >
        <div class="flex items-center gap-1">
          <LocationIcon class="w-4 h-4"/>
          <p class="text-lg">{{ city?.name }}</p>
        </div>
        <span class="block text-sm">
          {{city?.sys?.country}}
        </span>
      </div>
      <div class="flex items-end">
        <img class="w-10 h-10" :src="`https://openweathermap.org/img/wn/${city?.weather[0]?.icon}@2x.png`" alt="">
        <span class="text-xl  text-center">
          {{city?.main?.temp.toFixed()}}°
        </span>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div>
        <span class="text-sm">
          вт, 3 июня в 23:46
        </span>
      </div>
      <div>
        <span class="text-sm">
          {{city?.main?.temp_max.toFixed()}}° / {{city?.main?.temp_min.toFixed()}}°
        </span>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import LocationIcon from "@/components/Icons/Location.vue";
import type {City} from "@/types";

defineProps({
  city: Object as () => City
  }
)
</script>
