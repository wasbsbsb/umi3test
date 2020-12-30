import React, { useReducer } from 'react'
import { Select } from 'antd';
import cls from './index.less'
import { initialState, reducer } from '@/store/index.ts'



const { Option } = Select;




export default function (props: any) {

    const list = [{
        name: "fw123",
        code: "qq1"
    },
    {
        name: "fw456",
        code: "qq2"
    }, {
        name: "fw789",
        code: "qq3"
    }]

    const [store, dispatch] = useReducer(reducer, initialState);

    const handleChange = (value: any) => dispatch({ type: "userName", payload: value });



    return (
        <div className={cls.t}>
            <div className={cls.s}>
                <Select placeholder="请选择" style={{ width: 120 }} onChange={handleChange}>
                    {list.map((e: any) => {
                        return <Option key={e.code} value={e.name}>{e.name}</Option>
                    })}
                </Select>

            </div>
            <div className={cls.text}>
                <p>
                    假设有什么数据需要更改传递；
                </p>
                <p className={cls.user}>
                    user: {store.userName}
                </p>
                <p className={cls.user}>
                    user: {store.userName}
                </p>

            </div>
        </div>
    )
}