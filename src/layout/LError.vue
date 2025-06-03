<template>
  <div class="absolute inset-0 flex items-center justify-center bg-white px-4">
    <div class="text-center space-y-8 max-w-md w-full">
      <!-- 404 номер -->
      <div class="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[96px] text-gray-900">
        404
      </div>

      <!-- Заголовок и описание -->
      <div class="space-y-4">
        <h1 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] text-gray-800">
          Такой страницы не найдено.
        </h1>
        <p class="text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-gray-600">
          ...может быть страница которую вы ищите не найдена или никогда не существовала.
        </p>
      </div>

      <!-- Кнопка возвращения -->
      <router-link to="/">
        <button
            class="mx-auto block px-6 mt-4 py-2 md:py-3 rounded-2xl text-lg sm:text-xl md:text-2xl bg-purple-300 hover:bg-purple-400 text-purple-900 focus:outline-none transition-colors duration-300"
        >
          Назад в главную страницу
        </button>
      </router-link>
    </div>
  </div>
</template>
