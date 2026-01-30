<template>
  <section id="about" class="pt-12 pb-16">
    <!-- Contenedor con diseño orgánico y tonos tierra -->
    <div class="relative bg-stone-900 border border-stone-800 p-10 rounded-3xl shadow-2xl overflow-hidden">
      
      <!-- Decoración de fondo para romper la simetría -->
      <div class="absolute -top-10 -right-10 w-40 h-40 bg-amber-900/20 rounded-full blur-3xl"></div>

      <div class="flex flex-col-reverse md:flex-row gap-12 items-center relative z-10">
        
        <div class="flex-1">
          <span class="text-amber-500 font-mono text-sm tracking-widest uppercase mb-2 block">Presentación</span>
          <h1 class="text-4xl md:text-6xl font-black mb-4 text-stone-100 tracking-tight">
            {{ info.name }}
          </h1>
          
          <!-- Badge dinámico en lugar de simple texto -->
          <div class="inline-block px-3 py-1 rounded-full bg-amber-900/30 border border-amber-700/50 text-amber-400 text-sm font-medium mb-6">
            {{ info.title }}
          </div>
          
          <!-- Texto con espaciado mejorado y colores suaves -->
          <div class="space-y-5 text-stone-400 leading-relaxed max-w-2xl">
            <p v-html="formatText(info.summaryP1)"></p>
            <p v-html="formatText(info.summaryP2)"></p>
            <p class="text-stone-300 italic border-l-2 border-amber-600 pl-4" v-html="formatText(info.summaryP3)"></p>
          </div>
        </div>

        <!-- Imagen con máscara geométrica distinta para evitar copias -->
        <div class="relative group">
          <div class="absolute inset-0 bg-amber-600 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-300"></div>
          <img 
            :src="info.photoUrl" 
            :alt="info.name" 
            class="relative rounded-2xl h-64 w-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-stone-800"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import cvData from '../data/cv.json';
import { ref } from 'vue';

const info = ref(cvData.personalInfo);

const formatText = (text) => {
  // Ahora el resaltado será en color ámbar en lugar de solo negrita
  return text.replace(/\*(.*?)\*/g, '<strong class="text-amber-500 font-semibold">$1</strong>');
};
</script>
