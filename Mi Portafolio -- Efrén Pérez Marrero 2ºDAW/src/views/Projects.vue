<template>
  <section id="projects" class="min-h-screen bg-stone-950 py-24 px-6 relative overflow-hidden">
    <!-- Decoración de fondo difuminada -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-orange-900/10 rounded-full blur-[120px]"></div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div class="max-w-2xl">
          <div class="flex items-center gap-2 mb-4">
            <span class="w-12 h-[2px] bg-amber-600"></span>
            <span class="text-amber-500 font-mono text-xs tracking-[0.3em] uppercase">Selección de trabajos</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-stone-100 tracking-tighter">
            PROYECTOS<span class="text-amber-600">.</span>
          </h2>
        </div>
        <p class="text-stone-500 font-medium max-w-xs border-l border-stone-800 pl-6">
          Explora una colección de soluciones digitales enfocadas en la experiencia de usuario y el rendimiento.
        </p>
      </div>

      <!-- Grid Asimétrico: Usamos auto-rows para que no todas las tarjetas midan lo mismo si quieres -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
        <TarjetaProyecto 
          v-for="(proy, index) in proyectos" 
          :key="proy.id" 
          :proyecto="proy"
          :class="index % 2 !== 0 ? 'md:mt-12' : ''" 
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import cvData from '../data/cv.json';
import TarjetaProyecto from '../components/TarjetaProyecto.vue';
import type { ITarjetaProyecto } from '../models/CV';

const proyectos = cvData.projects as ITarjetaProyecto[];
</script>
