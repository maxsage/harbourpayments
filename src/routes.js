import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import HarbourItems from './components/harbouritems/HarbourItems.vue';
import EditHarbourItem from './components/harbouritems/EditHarbourItem.vue';

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/portfolio', component: Portfolio },
    { path: '/portfolio/:id', component: Portfolio },
    { path: '/harbouritems', component: HarbourItems },
    { path: '/editharbouritem/:id', component: EditHarbourItem, name: 'harbourItemEdit' },

    { path: '*', redirect: '/' }
];