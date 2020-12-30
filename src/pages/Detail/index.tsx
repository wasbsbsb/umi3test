import React from 'react'
import { Card, Button } from 'antd';
import { history } from 'umi';




export default class Detail extends React.Component {


    render() {
        return (
            <div>
                <div style={{ marginBottom: '18px' }}>
                    <Button onClick={() => { history.push('/') }}> 返回</Button>
                </div >
                <Card title="详情卡片" style={{ width: 300 }}>
                    <div>
                        name：{history.location.query.name}
                    </div>
                </Card>
            </div>
        )
    }
}