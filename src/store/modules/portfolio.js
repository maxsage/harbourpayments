const state = {
    funds: 10000,
    harbouritems: []
};

const mutations = {
    'INCREASE_PERCENTAGE'(state, {stockId, quantity, stockPrice}) {
        const record = state.harbouritems.find(element => element.id == stockId);
        if (record) {
            record.quantity += quantity;
            console.log(record.quantity);
        } else {
            state.harbouritems.push({
                id: stockId,
                price: quantity
            });
        }
        //state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.harbouritems.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.harbouritems.splice(state.harbouritems.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds;
        state.harbouritems = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio (state, getters) {
        return state.harbouritems.map(stock => {
            const record = getters.harbouritems.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds (state) {
      return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}