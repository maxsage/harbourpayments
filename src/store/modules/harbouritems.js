import harbouritems from '../../data/harbouritems';

const state = {
    harbouritems: []
};

const mutations = {
    'SET_STOCKS' (state, harbouritems) {
        state.harbouritems = harbouritems;
    },
    'ADD_NEW_ITEM' (state) {
        // state.harbouritems.forEach(stock => {
        //     stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        // });
        state.harbouritems.push({
            id: 6,
            code: 'T310152420T1822',
            unit: 'per day',
            name: 'Visitor Slipway - Up to 4 metres (13ft)',
            fundCode: '04',
            vatCode: 'SR',
            narrative: 'Visitor Slipway',
            harbour: 'Torquay',
            category: 'Visitor Slipway',
            price: 10.00 },)
    }
};

const actions = {
    increasePercentage: ({commit}, order) => {
        commit('INCREASE_PERCENTAGE', order);
    },
    initHarbourItems: ({commit}) => {
        commit('SET_STOCKS', harbouritems);
    },
    addNewHarbourItem: ({commit}) => {
        commit('ADD_NEW_ITEM');
    }
};

const getters = {
    harbouritems: state => {
        return state.harbouritems;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};