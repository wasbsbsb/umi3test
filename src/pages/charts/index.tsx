
import React from "react"

import { connect } from 'umi'

import { Form, Input, Button, Select, message } from 'antd';
import Detail from '@/components/detail'



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


class charts extends React.Component {



    render() {
        const { userName }: any = this.props;

        const onFinish = (values: any) => {
            this.props.dispatch({
                type: 'user/change',
                payload: values,
            })
        };

        const onFinishFailed = () => {
            message.error('请把表单完善')
        };

        return <div>

            <h2 style={{ textAlign: "center" }}>{userName}</h2>

            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                 </Button>
                </Form.Item>
            </Form>


            <Detail />
            <Detail />
            <Detail />
            <Detail />



        </div>
    }
}

export default connect((state: any) => {
    return { userName: state.user.userName }
})(charts);


