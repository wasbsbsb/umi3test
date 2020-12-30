export default {
    namespace: "user",
    state: {
        userName: "我是redux内部的一些XXXXXdata",
        form: {}
    },

    reducers: {

        change(state: any, action: any) {
            return { ...state, form: action.payload }
        }
    }
};