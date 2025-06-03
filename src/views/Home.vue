<template>
  <div class="container py-10 grid gap-4 grid-cols-2">
    <CityShimmer v-if="loading" v-for="i in 10"/>
    <CityCard v-else v-for="city in weatherStore.cities" :city="city" :key="city.id" />
  </div>
</template>

<script setup lang="ts">
import CityCard from "@/components/Card/City.vue";
import {useWeatherStore} from "@/store/weather";
import {onMounted, computed, ref} from "vue";
import CityShimmer from "@/components/Card/CityShimmer.vue";

const weatherStore = useWeatherStore();
const cityList = [
  { id: 1, name: 'New York, USA',        lat: 40.7128,   lon: -74.0060 },
  { id: 2, name: 'London, UK',           lat: 51.5074,   lon: -0.1278 },
  { id: 3, name: 'Tokyo, Japan',         lat: 35.6895,   lon: 139.6917 },
  { id: 4, name: 'Sydney, Australia',    lat: -33.8688,  lon: 151.2093 },
  { id: 5, name: 'Cairo, Egypt',         lat: 30.0444,   lon: 31.2357 },
  { id: 6, name: 'Rio de Janeiro, Brazil', lat: -22.9068, lon: -43.1729 },
  { id: 7, name: 'Moscow, Russia',       lat: 55.7558,   lon: 37.6173 },
  { id: 8, name: 'Paris, France',        lat: 48.8566,   lon: 2.3522 },
  { id: 9, name: 'Cape Town, South Africa', lat: -33.9249, lon: 18.4241 },
  { id: 10, name: 'Toronto, Canada',     lat: 43.6532,   lon: -79.3832 },
  { id: 11, name: 'Mumbai, India',       lat: 19.0760,   lon: 72.8777 },
  { id: 12, name: 'Buenos Aires, Argentina', lat: -34.6037, lon: -58.3816 },
  { id: 13, name: 'Beijing, China',      lat: 39.9042,   lon: 116.4074 },
  { id: 14, name: 'Los Angeles, USA',    lat: 34.0522,   lon: -118.2437 },
  { id: 15, name: 'Dubai, UAE',          lat: 25.2048,   lon: 55.2708 },
];
const loading = ref(true)

onMounted(async () => {
  weatherStore.clearCities()

  try {
    const promises = cityList.map((city) =>
        weatherStore.getWeather(city.name)
    );
    await Promise.all(promises);
  } catch (e) {
    console.error("Ошибка при загрузке погоды:", e);
  } finally {
    loading.value = false;
  }
})
</script>

<style scoped>

</style>