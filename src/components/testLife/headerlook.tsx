import React, { Component } from "react"
import { Button, Tag, Drawer } from 'antd'
import cls from './index.less'

interface props {
    dataName: String,
    name: Number
}



class HeaderLook extends Component<props> {

    constructor(props: any) {
        super(props)
        console.log('constructor')
    }


    state = {
        count: 1,
        visible: false,
        list: [2]
    }


    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentDidCatch() {
        console.log('componentDidCatch')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }


    static getDerivedStateFromProps(props: any, state: any) {
        // 修改state、props 无需setstate 就能直接修改初始结果

        console.log(props, state, 'getDerivedStateFromProps')

        return null
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')

        return true
    }


    showDrawer = () => {
        this.setState({ visible: true })
    };
    onClose = () => {
        this.setState({ visible: false })
    };


    render() {

        console.log('render')

        const { dataName, name } = this.props;

        return (<div>

            <Button onClick={() => {
                console.log(this.props)
                this.setState({ visible: true })
            }}>{dataName}</Button>

            <Tag color="red">{this.state.count}</Tag>

            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}

            >
                <Button onClick={
                    () => {

                        const count = this.state.count + 1;
                        let list = this.state.list;

                        console.log(list.push(this.state.count + 1))

                        this.setState({
                            count,
                        })
                    }
                }>点击我加 {this.state.count}</Button>
                {
                    this.state.list.map((e, i) => {
                        return <p key={e + i} className={cls.p} >{e}</p>
                    })
                }

            </Drawer>
        </div >)
    }
}


export default HeaderLook;