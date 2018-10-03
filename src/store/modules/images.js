import {router} from '../../main';
import api from '../../api/imgur';

const state = {
    images: []
};

const getters = {
    allImages: (state) => {
        return state.images;
    }
};

const actions = {
    async fetchImages({rootState, commit}){
        const {token} = rootState.auth; // same as const token = rootState.auth.token;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    },
    async uploadImages({rootState}, images){
        const {token} = rootState.auth;
        await api.upload(images, token);
        router.push('/');
    }
}

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}