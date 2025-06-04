<template>
  <main class="bg-gradient-to-b from-[#3E2D8F] to-[#9D52AC]">
    <section class="p-4 mx-auto w-full min-h-screen relative">
      <button @click="$router.back()" class="mb-4 text-purple-500 absolute">← Back</button>

      <div v-if="loading" class="text-center">Загрузка…</div>

      <div v-else-if="error" class="text-red-500">{{ error }}</div>

      <div v-else-if="cityData">
        <img class="w-24 h-24 mx-auto p-1 rounded-2xl bg-gray-50/10" :src="`https://openweathermap.org/img/wn/${cityData?.weather[0]?.icon}@2x.png`" alt="">

        <p class="text-5xl text-white text-center mt-2">
          {{cityData?.main?.temp.toFixed()}}°
        </p>

        <p class="text-3xl text-white text-center mt-2">
          {{cityData?.name}}
        </p>

        <div class="flex gap-5 justify-center mt-1">
          <span class="text-lg text-white">Max: {{cityData?.main?.temp_max.toFixed()}}°</span>
          <span class="text-lg text-white">Min: {{cityData?.main?.temp_min.toFixed()}}°</span>
        </div>
        <img src="../assets/images/House.png" alt="photo" class="mx-auto mt-6">
        <!--   Hourly forecast     -->
        <div class="bg-gradient-to-bl from-[#3E2D8F] to-[#9D52AC] shadow-md max-w-md rounded-xl mx-auto">
          <div class="px-4 py-2 flex justify-between border-b border-gray-200/50">
            <span class="text-lg text-white">
              Today
            </span>
            <span class="text-lg text-white">
              July, 21
            </span>
          </div>
          <div class="px-8 py-4 flex justify-between">
            <div v-for="forecast in hourlyForecasts" :key="forecast" class="">
              <p class="text-white text-center">
                {{forecast.temp.toFixed()}}°C
              </p>
              <img :src="forecast.img" alt="" class="w-10 h-10">
              <p class="text-white text-center">
                {{forecast.hour}}
              </p>
            </div>
          </div>
        </div>

        <!--    Daily forecast    -->
        <div class="max-w-md mx-auto mt-8">
          <p class="text-xl text-white">
            7-Day Forecast
          </p>
          <div class="relative">
            <swiper
                :slides-per-view="4"
                :navigation="true"
                :modules="modules"
                class="mt-6"
                space-between="16"
            >
              <swiper-slide
                  v-for="forecast in dailyForecasts"
                  :key="forecast"
                  class="rounded-full px-2 py-8 bg-gradient-to-b from-[#3E2D8F] to-[#8E78C8]"
              >
                <p class="text-xl text-white text-center">
                  {{forecast.temp.toFixed()}}°C
                </p>
                <img :src="forecast.img" alt="photo" class="mx-auto"/>
                <p class="text-xl text-white text-center">
                  {{forecast.day}}
                </p>
              </swiper-slide>
            </swiper>
          </div>
        </div>


        <!--     Air Quality   -->
        <div class="max-w-md mx-auto">
          <div class="bg-gradient-to-br from-[#3E2D8F] to-[#9D52AC] rounded-2xl p-5 text-white shadow-md mt-4">
            <div class="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" stroke-width="2"/>
                <path d="M12 0V9.6" stroke="white" stroke-width="2"/>
                <path d="M12 14.4V24" stroke="white" stroke-width="2"/>
                <path d="M0 12H9.6" stroke="white" stroke-width="2"/>
                <path d="M14.4 12H24" stroke="white" stroke-width="2"/>
              </svg>
              <span class="text-sm font-thin uppercase">air quality</span>
            </div>

            <h2 class="text-2xl font-semibold mb-3">3-Low Health Risk</h2>

            <div class="h-px bg-white/30 mb-4"></div>

            <div class="flex items-center justify-between">
              <span class="text-sm font-medium">See more</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useWeatherStore } from '@/store/weather';
import type { City } from '@/types';
import Sunny from "@/assets/images/Sunny.png"
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

const route = useRoute();
const weatherStore = useWeatherStore();

const modules = [Navigation]

const hourlyForecasts = [
  {
    hour: '15.00',
    img: Sunny,
    temp: 24.59,
  },
  {
    hour: '16.00',
    img: Sunny,
    temp: 25.39,
  },
  {
    hour: '17.00',
    img: Sunny,
    temp: 26.45,
  },
  {
    hour: '18.00',
    img: Sunny,
    temp: 23.15,
  }
]

const dailyForecasts = [
  {
    day: 'Mon',
    img: Sunny,
    temp: 24.59,
  },
  {
    day: 'Tue',
    img: Sunny,
    temp: 25.39,
  },
  {
    day: 'Wed',
    img: Sunny,
    temp: 26.45,
  },
  {
    day: 'Thu',
    img: Sunny,
    temp: 23.15,
  },
  {
    day: 'Fri',
    img: Sunny,
    temp: 25.39,
  },
  {
    day: 'Sat',
    img: Sunny,
    temp: 26.45,
  },
  {
    day: 'Sun',
    img: Sunny,
    temp: 23.15,
  }
]


const cityId = route.params.id as string;

const cityData = ref<City | null>(null);
const error = ref<string | null>(null);
const loading = ref(true);

onMounted(async () => {
  try {
    weatherStore.clearCities();

    await weatherStore.getCityById(cityId);

    const found = weatherStore.cities.find(
        (c: City) => String(c.id) === cityId
    );
    if (found) {
      cityData.value = found;
    } else {
      error.value = 'Город не найден в сторе после загрузки';
    }
  } catch (e: any) {
    error.value = e.response?.data?.message || e.message || 'Не удалось загрузить данные';
  } finally {
    loading.value = false;
  }
});
</script>
