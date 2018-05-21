import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'ADD_NEW_ITEM' (state) {
        // state.stocks.forEach(stock => {
        //     stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        // });
        state.stocks.push({
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
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    addNewHarbourItem: ({commit}) => {
        commit('ADD_NEW_ITEM');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};