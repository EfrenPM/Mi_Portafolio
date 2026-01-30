<template>
  <section id="contact" class="min-h-[80vh] flex items-center justify-center py-20 px-6 bg-stone-950">
    <div class="max-w-4xl w-full grid md:grid-cols-2 gap-0 overflow-hidden rounded-3xl shadow-2xl border border-stone-800">
      
      <!-- Panel de Información (Izquierda) -->
      <div class="bg-amber-700 p-10 flex flex-col justify-between text-stone-100">
        <div>
          <h2 class="text-4xl font-black mb-4">Hablemos.</h2>
          <p class="text-amber-100/80 mb-8">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy disponible para nuevas oportunidades.
          </p>
        </div>
        
        <div class="space-y-4">
          <div class="flex items-center gap-4 group">
            <div class="p-3 bg-amber-800/50 rounded-lg group-hover:bg-amber-600 transition-colors">
              <svg xmlns="http://www.w3.org" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="font-medium">hola@tuemail.com</span>
          </div>
        </div>
      </div>

      <!-- Panel del Formulario (Derecha) -->
      <div class="bg-stone-900 p-10">
        <form @submit.prevent class="space-y-5">
          <div class="group">
            <label class="block text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Nombre Completo</label>
            <input 
              type="text" 
              class="w-full bg-stone-800/50 border-b-2 border-stone-700 p-3 text-stone-100 focus:border-amber-600 focus:bg-stone-800 outline-none transition-all"
              placeholder="Ej. Alex Rivera"
            >
          </div>

          <div class="group">
            <label class="block text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Email</label>
            <input 
              type="email" 
              class="w-full bg-stone-800/50 border-b-2 border-stone-700 p-3 text-stone-100 focus:border-amber-600 focus:bg-stone-800 outline-none transition-all"
              placeholder="tu@correo.com"
            >
          </div>

          <div class="group">
            <label class="block text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Mensaje</label>
            <textarea 
              rows="3" 
              class="w-full bg-stone-800/50 border-b-2 border-stone-700 p-3 text-stone-100 focus:border-amber-600 focus:bg-stone-800 outline-none transition-all resize-none"
              placeholder="Cuéntame sobre tu idea..."
            ></textarea>
          </div>

          <button class="group relative w-full py-4 bg-stone-100 text-stone-950 font-bold rounded-xl overflow-hidden transition-all hover:pr-8">
            <span class="relative z-10">ENVIAR AHORA</span>
            <div class="absolute right-0 top-0 h-full w-0 bg-amber-500 group-hover:w-full transition-all duration-300"></div>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
