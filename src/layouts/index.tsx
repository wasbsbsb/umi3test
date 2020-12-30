import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { history } from 'umi';

const { Header, Footer, Content } = Layout;



const List = [
    {
        name: "首页",
        key: "/"
    }, {
        name: "路由跳转",
        key: "/list"
    }, {
        name: "redux",
        key: "/charts"
    }, {
        name: "xxxx",
        key: "/x"
    }
]


export default (props: any) => {
    const [current, setCount] = useState(history.location.pathname);

    const changeSelect = (item: any) => {
        setCount(item.key);
        history.push(item.key);
    }

    return (
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal" onSelect={e => { changeSelect(e) }} selectedKeys={[current]} >
                    {
                        List.map(e => <Menu.Item key={e.key}>{e.name}</Menu.Item>)
                    }
                </Menu>
            </Header>
            <Layout>
                <Content style={{ padding: '18px' }}>
                    {props.children}
                </Content>
            </Layout>
            <Footer>
            </Footer>
        </Layout >
    )
}