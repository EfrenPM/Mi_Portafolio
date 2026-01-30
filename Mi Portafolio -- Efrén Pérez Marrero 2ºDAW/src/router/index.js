import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import Skills from '../views/Skills.vue';
import Experience from '../views/Experience.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', redirect: '/about' }, // Redirige la raíz a "Sobre mí"
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/experience', name: 'Experience', component: Experience },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
