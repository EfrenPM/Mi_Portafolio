<template>
  <section id="experience" class="min-h-screen bg-stone-950 py-24 px-6">
    <div class="max-w-4xl mx-auto">
      
      <!-- Encabezado con Estilo de Botón PDF Rediseñado -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span class="text-amber-600 font-mono text-xs tracking-[0.3em] uppercase block mb-2">Historial Profesional</span>
          <h2 class="text-5xl font-black text-stone-100 uppercase italic tracking-tighter">Recorrido<span class="text-amber-500">.</span></h2>
        </div>
        
        <button 
          @click="descargarPDF" 
          class="group flex items-center gap-3 bg-stone-100 hover:bg-amber-500 text-stone-950 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300"
        >
          <span class="relative">Descargar Resumen</span>
          <svg xmlns="http://www.w3.org" class="h-4 w-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      <!-- Timeline con Estilo "Steps" Moderno -->
      <div class="grid gap-12 relative">
        <!-- Línea decorativa sutil -->
        <div class="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-amber-600/50 via-stone-800 to-transparent ml-[15px] md:ml-0 md:left-1/2"></div>

        <div v-for="(exp, i) in experiencias" :key="i" 
             :class="['relative flex flex-col md:flex-row gap-8 items-start', i % 2 === 0 ? 'md:flex-row-reverse' : '']">
          
          <!-- Punto de anclaje central (solo visible en desktop) -->
          <div class="absolute left-0 md:left-1/2 w-8 h-8 bg-stone-950 border-4 border-amber-600 rounded-full z-10 -ml-[16px] hidden md:block"></div>

          <!-- Contenido de la Experiencia -->
          <div :class="['w-full md:w-[45%] p-6 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-amber-900/50 transition-colors shadow-xl ml-8 md:ml-0']">
            <span class="text-amber-500 font-mono text-xs font-bold mb-1 block">{{ exp.periodo }}</span>
            <h3 class="text-xl font-bold text-stone-100 mb-1">{{ exp.puesto }}</h3>
            <p class="text-stone-400 font-semibold text-sm mb-4 uppercase tracking-wider">{{ exp.empresa }}</p>
            <p class="text-stone-500 text-sm leading-relaxed border-t border-stone-800 pt-4 italic">
              {{ exp.descripcion }}
            </p>
          </div>
        </div>
      </div>

      <!-- Banner de Contacto Final Estilo "Dark Card" -->
      <div class="mt-24 p-1 rounded-3xl bg-gradient-to-r from-amber-900/20 via-amber-600/40 to-amber-900/20">
        <div class="bg-stone-900 rounded-[22px] p-12 text-center">
          <h3 class="text-stone-400 text-sm uppercase tracking-[0.2em] mb-4">¿Buscas un perfil similar?</h3>
          <a :href="'mailto:' + 'efreperez.m@gmail.com'" class="text-2xl md:text-4xl font-black text-stone-100 hover:text-amber-500 transition-colors break-all">
            efreperez.m@gmail.com
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import cvData from '../data/cv.json';

const experiencias = cvData.experience;
const descargarPDF = () => {
  // Podrías usar librerías como jspdf si quieres algo más pro
  window.print();
};
</script>
