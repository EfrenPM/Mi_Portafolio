<template>
  <div class="group relative bg-stone-900/40 border-l-4 border-stone-800 p-6 rounded-r-2xl shadow-sm hover:border-amber-600 hover:bg-stone-800/60 transition-all duration-500 overflow-hidden">
    
    <!-- Decoración de fondo (Número de nivel sutil) -->
    <span class="absolute -right-2 -bottom-2 text-6xl font-black text-stone-100/5 italic pointer-events-none group-hover:text-amber-500/10 transition-colors">
      {{ habilidad.nivel }}%
    </span>

    <div class="flex items-center gap-5">
      <!-- Icono con contenedor estilo "moneda" -->
      <div class="flex-shrink-0 w-14 h-14 bg-stone-950 border border-stone-800 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 group-hover:border-amber-900 transition-all duration-300">
        <i :class="[habilidad.logo, 'text-2xl text-amber-600 group-hover:text-amber-400 transition-colors']"></i>
      </div>

      <div class="flex-grow">
        <h3 class="font-black text-stone-200 uppercase tracking-tighter text-lg leading-tight group-hover:text-amber-500 transition-colors">
          {{ habilidad.nombre }}
        </h3>
        <p class="text-[10px] font-mono text-stone-500 uppercase tracking-[0.2em]">
          {{ habilidad.nivel >= 80 ? 'Maestría' : 'Competente' }}
        </p>
      </div>
    </div>

    <!-- Descripción refinada -->
    <p class="mt-4 text-xs text-stone-400 leading-relaxed font-medium min-h-[2.5rem]">
      {{ habilidad.descripcion }}
    </p>

    <!-- Indicador de nivel minimalista (Puntos en lugar de barra) -->
    <div class="mt-4 flex gap-1">
      <div 
        v-for="i in 5" 
        :key="i" 
        :class="[
          'h-1 flex-grow rounded-full transition-all duration-700',
          (habilidad.nivel / 20) >= i ? 'bg-amber-600 shadow-[0_0_8px_rgba(217,119,6,0.4)]' : 'bg-stone-800'
        ]"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITarjetaHabilidad } from '../models/CV';

defineProps<{ habilidad: ITarjetaHabilidad }>();
</script>
