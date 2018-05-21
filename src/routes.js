import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import HarbourItems from './components/harbouritems/Stocks.vue';

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/portfolio', component: Portfolio },
    { path: '/portfolio/:id', component: Portfolio, name: 'harbourItemEdit' },
    { path: '/harbouritems', component: HarbourItems },
    { path: '*', redirect: '/' }
];