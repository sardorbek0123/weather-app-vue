<template>
  <section class="p-4 max-w-md mx-auto">
    <button @click="$router.back()" class="mb-4 text-blue-500">← Назад</button>

    <div v-if="loading" class="text-center">Загрузка…</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else-if="cityData" class="space-y-4">
      <h2 class="text-2xl font-semibold">
        {{ cityData.name }}, {{ cityData.sys.country }}
      </h2>

      <div class="flex items-center gap-4">
        <img
            :src="`https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`"
            alt="icon"
            class="w-16 h-16"
        />
        <div>
          <p class="text-4xl">{{ cityData.main.temp.toFixed() }}°C</p>
          <p class="text-sm text-gray-600">{{ cityData.weather[0].description }}</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <div>
          <span>Макс: {{ cityData.main.temp_max.toFixed() }}°</span>
        </div>
        <div>
          <span>Мин: {{ cityData.main.temp_min.toFixed() }}°</span>
        </div>
      </div>

      <div class="text-sm text-gray-600">
        <p>Ветер: {{ cityData.wind.speed }} м/с</p>
        <p>Влажность: {{ cityData.main.humidity }}%</p>
        <p>Видимость: {{ cityData.visibility }} м</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useWeatherStore } from '@/store/weather';
import type { City } from '@/types';

const route = useRoute();
const weatherStore = useWeatherStore();

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
