<template>
  <section id="skills" class="min-h-screen bg-stone-900 py-24 px-6 relative">
    <!-- Patrón de puntos sutil para el fondo -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#d97706 1px, transparent 1px); background-size: 30px 30px;"></div>

    <div class="max-w-5xl mx-auto relative z-10">
      <div class="mb-16">
        <h2 class="text-amber-600 font-mono text-sm tracking-[0.4em] uppercase mb-3">Capacidades</h2>
        <h1 class="text-4xl md:text-5xl font-light text-stone-100 italic">
          Mi arsenal <span class="font-black not-italic text-amber-500">tecnológico.</span>
        </h1>
      </div>
      
      <!-- Layout tipo Listado Refinado -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <TarjetaHabilidad 
          v-for="(s, i) in habilidades" 
          :key="i" 
          :habilidad="s" 
          class="transform transition-all duration-300 hover:-translate-y-1"
        />
      </div>

      <!-- Footer decorativo opcional -->
      <div class="mt-20 pt-8 border-t border-stone-800 flex justify-between items-center text-stone-500 text-xs font-mono uppercase tracking-widest">
        <span>Actualizado 2026</span>
        <span>Aprendizaje continuo</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import cvData from '../data/cv.json';
import TarjetaHabilidad from '../components/TarjetaHabilidad.vue';
import type { ITarjetaHabilidad } from '../models/CV';

const habilidades = cvData.skills as ITarjetaHabilidad[];
</script>
