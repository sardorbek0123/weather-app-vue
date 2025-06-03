import {defineStore} from "pinia";
import axios from "axios";
import {reactive, ref} from "vue";

export const useWeatherStore = defineStore('weather', () => {
    const key = import.meta.env.VITE_WEATHER_API_KEY as string;
    const baseUrl = import.meta.env.VITE_WEATHER_URL as string;

    const cities = reactive([])
    const forecast = reactive([])

    async function getWeather(city: string) {
        await axios.get(`${baseUrl}/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
        .then(res => {
            cities.push(res.data)
            cities.sort((a, b) => a.name.localeCompare(b.name))
        })
        .catch(err => {
            console.log(err)
        })
    }

    function clearCities() {
        cities.splice(0, cities.length)
    }

    async function getCityById(id: string) {
        await axios.get(`${baseUrl}/data/2.5/weather?id=${id}&units=metric&appid=${key}`)
        .then(res => {
            cities.push(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    }

    async function getForecast(lat: number, lon: number, cnt: 10) {
        await axios.get(`${baseUrl}/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${key}`)
        .then(res => {
            forecast.push(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }




    return {
        getWeather,
        cities,
        getCityById,
        getForecast,
        clearCities
    }
})