import Vue from 'vue';
import Vuex from 'vuex';

import harbouritems from './modules/harbouritems';
import portfolio from './modules/portfolio';

import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        harbouritems,
        portfolio
    }
});