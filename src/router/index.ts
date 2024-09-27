import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/Homepage.vue'
import OfferView from '../views/Offerpage.vue'
import DroplistView from '../views/Droplistpage.vue'
import ReferView from '../views/Referpage.vue'
import LoginView from '../views/Loginpage.vue'
import TermsView from '../views/TermsConditions.vue'
import PrivacyPolicyView from '../views/PrivacyPolicy.vue'
import ProfileView from '../views/Profilepage.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/offers', component: OfferView },
  { path: '/droplist', component: DroplistView },
  { path: '/refer', component: ReferView },
  { path: '/login', component: LoginView },
  { path: '/profile', component: ProfileView },
  { path: '/terms-conditions', component: TermsView },
  { path: '/privacy-policy', component: PrivacyPolicyView },
]

let key = localStorage.getItem('accepted-key');

const router = createRouter({
  history: createMemoryHistory(key ?? '#'),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
  routes,
})

export default router;