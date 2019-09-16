export const state = () => ({
    token: ''
})

export const mutations = {
    init(state, token) {
        state.token = token
    }
}

export const getters = {}
export const actions = {
    login({commit}, u) {
        return this.$login(u).then(({token}) => {
            if (token) {
                commit('init', token)
                return true;
            }
            return false;
        })
    }
}