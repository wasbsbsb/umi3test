import React, { useState, useReducer } from 'react'
import { initialState, reducer } from '@/store/index'



export default (props: any) => {
    const [InputValue] = useState()
    const [state, dispatch] = useReducer(reducer, initialState);

    return <div>{state.count}</div>
}