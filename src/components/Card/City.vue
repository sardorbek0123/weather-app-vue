<template>
  <div
      class="p-3 rounded-3xl cursor-pointer bg-gray-100 hover:bg-gray-200 transition-300"
      @click="$emit('click')"
  >
    <div class="flex items-center justify-between">
      <div >
        <div class="flex items-center gap-1">
          <LocationIcon class="w-4 h-4"/>
          <p class="text-lg">{{ city }}</p>
        </div>
        <span class="block text-sm">
          Узбекистан
        </span>
      </div>
      <div class="flex items-end">
        <MoonCloud class="w-10 h-10 text-gray-600"/>
        <span class="text-xl  text-center">
          26°
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
          34° / 21°
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LocationIcon from "@/components/Icons/Location.vue";
import MoonCloud from "@/components/Icons/MoonCloud.vue";

defineProps({
  city: {
    type: String,
    required: true,
  }
})
</script>
