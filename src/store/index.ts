
export const initialState = { count: 0, formValue: '',  userName: "demo" };

export function reducer(state: any, action: any) {

    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'userName':
            return { ...state, userName: action.payload }
        default:
            throw new Error();
    }
}