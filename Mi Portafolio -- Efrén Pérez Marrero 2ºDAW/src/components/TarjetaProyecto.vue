<template>
  <div class="group relative bg-stone-900 border border-stone-800 rounded-3xl p-8 hover:bg-stone-800/40 transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden">
    
    <!-- Elemento decorativo de fondo: Código de proyecto -->
    <div class="absolute -right-4 -top-4 font-mono text-[120px] font-black text-stone-100/[0.02] pointer-events-none group-hover:text-amber-500/[0.03] transition-colors">
      {{ proyecto.id || 'PRJ' }}
    </div>

    <div>
      <!-- Cabecera con Badge de Categoría -->
      <div class="flex justify-between items-start mb-6">
        <div class="p-3 bg-amber-900/20 border border-amber-800/30 rounded-2xl">
          <svg xmlns="http://www.w3.org" class="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <span class="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Build v1.0</span>
      </div>

      <h3 class="text-2xl font-black text-stone-100 mb-4 group-hover:text-amber-500 transition-colors uppercase italic tracking-tighter">
        {{ proyecto.title }}
      </h3>
      
      <p class="text-stone-400 mb-8 leading-relaxed font-medium">
        {{ proyecto.description }}
      </p>
    </div>

    <!-- Acciones con estilo de "Ficha Técnica" -->
    <div class="pt-6 border-t border-stone-800 flex items-center justify-between">
      <a 
        :href="proyecto.link" 
        target="_blank" 
        class="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-amber-600 hover:text-amber-400 transition-all group/link"
      >
        <span>Explorar Código</span>
        <div class="w-8 h-8 rounded-full border border-amber-900 flex items-center justify-center group-hover/link:bg-amber-600 group-hover/link:text-stone-900 transition-all">
          <i class="pi pi-github text-[10px]"></i>
        </div>
      </a>
      
      <!-- Detalle visual extra -->
      <div class="h-2 w-2 rounded-full bg-stone-700 animate-pulse"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITarjetaProyecto } from '../models/CV';

defineProps<{ proyecto: ITarjetaProyecto }>();
</script>
