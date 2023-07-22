import {createStore} from 'vuex';

export default createStore({
    state: {
        sender: {
            amount: 0,
            card: "1111 1111 1111 1111",
            userName: "John Doe",
            unit: "RUB",
          },
          receiver: {
            name: "Bitcoin",
            amount: 0,
            cashelog: "K454KJD98KD",
            unit: "BTC",
          },
    },
    mutations: {
        changeData(state, data) {
            state.sender = data.sender;
            state.receiver = data.receiver;
        }
    }
});