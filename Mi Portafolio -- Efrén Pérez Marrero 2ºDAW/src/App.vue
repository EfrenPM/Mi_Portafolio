<template>
  <!-- Base en Stone-950: un tono tierra casi negro, mucho más cálido que el slate -->
  <div class="min-h-screen bg-stone-950 text-stone-200 font-sans flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
    
    <!-- Navbar Rediseñada: Estilo Isla Flotante -->
    <header class="fixed top-0 w-full z-50 px-6 py-4">
      <nav class="max-w-5xl mx-auto bg-stone-900/80 backdrop-blur-xl border border-stone-800/50 rounded-2xl px-6 py-3 flex justify-between items-center shadow-2xl">
        
        <!-- Logo con Identidad Ocre -->
        <router-link to="/about" class="group flex items-center gap-2">
          <div class="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center font-black text-stone-900 transform group-hover:rotate-12 transition-transform">E</div>
          <span class="text-xl font-black tracking-tighter text-stone-100 uppercase">Efrén</span>
        </router-link>

        <!-- Enlaces con micro-interacciones -->
        <div class="hidden md:flex items-center gap-1">
          <router-link 
            v-for="link in navigation" 
            :key="link.path" 
            :to="link.path"
            class="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-amber-500 hover:bg-stone-800/50 transition-all duration-300"
            active-class="text-amber-500 bg-stone-800"
          >
            {{ link.name }}
          </router-link>
        </div>

        <!-- Indicador de estado/disponibilidad (Toque único) -->
        <div class="hidden lg:flex items-center gap-2 px-3 py-1 bg-amber-900/20 border border-amber-800/30 rounded-full">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span class="text-[10px] font-bold text-amber-500 uppercase tracking-tighter">Disponible</span>
        </div>
      </nav>
    </header>

    <!-- Espaciador para el header fixed -->
    <div class="h-24"></div>

    <main class="flex-grow w-full">
      <router-view v-slot="{ Component }">
        <transition 
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>

    <!-- Footer con estilo editorial -->
    <footer class="py-12 border-t border-stone-900 bg-stone-950 text-center">
      <div class="flex justify-center gap-4 mb-4 text-stone-600">
        <!-- Iconos o links sociales aquí -->
      </div>
      <p class="text-stone-600 text-[10px] uppercase tracking-[0.4em] font-medium">
        &copy; 2026 — Efrén Pérez Marrero <span class="text-stone-400"></span>
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const navigation = [
  { name: 'Bio', path: '/about' },
  { name: 'Obras', path: '/projects' },
  { name: 'Stack', path: '/skills' },
  { name: 'Carrera', path: '/experience' },
  { name: 'Contacto', path: '/contact' },
];
</script>

<style>
/* Personalización de la barra de scroll para que combine con el ocre */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0c0a09; /* stone-950 */
}
::-webkit-scrollbar-thumb {
  background: #78350f; /* amber-900 */
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #d97706; /* amber-600 */
}
</style>
