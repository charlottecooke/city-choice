import Vuex from 'vuex';

export interface IState {
    locales: string[];
    locale: string;
}

export default () => new Vuex.Store<IState>({
    state: {
        locales: ['en'],
        locale: 'en'
    },
    mutations: {
    },
    modules: {
    }
});
