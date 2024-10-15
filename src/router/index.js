// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Fees from '../views/Fees.vue';
import Venue from '../views/Venue.vue';
import Schedule from '../views/Schedule.vue';
import Participants from '../views/Participants.vue';
import Registration from '../views/Registration.vue';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/participants', name: 'Participants', component: Participants },
  { path: '/schedule', name: 'Schedule', component: Schedule },
  { path: '/registration', name: 'Registration', component: Registration },
  //{ path: '/contact', name: 'Contact', component: Contact },
  //{ path: '/fees', name: 'Fees', component: Fees },
  { path: '/venue', name: 'Venue', component: Venue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
