import React, { useState, useEffect } from 'react';
import cls from './index.less'
import { history } from 'umi';


import { Table, Button, Modal, message } from 'antd';
import TitleBox from '@/components/titlebox'

import { getlist } from '@/server/index'

// 函数组件
export default () => {

  const [selectedRows, setSelectdList] = useState({ selectedRowKeys: [], selectList: [] });

  const [state, setData] = useState({ list: [], loading: false });


  const rowSelection = {
    onChange: (selectedRowKeys: any, selectList: any) => {
      setSelectdList({ selectedRowKeys, selectList })
    },
  };

  const ButtonList = [
    {
      name: '新增名单',
      cli() {
        // 假设走接口
        if (state.loading) return message.info('加载中，请稍候');
        const data: any = {
          key: `${state.list.length}`,
          name: 'John Brown ' + state.list.length,
          age: 32 + state.list.length,
        };
        setData({ ...state, list: [...state.list, data] })
        message.success('添加成功')
      }
    },
    {
      name: '名单提交',
      cli() {
        if (!selectedRows.selectList.length) return message.error('请先勾选进行名单提交');
        const modal = Modal.info({
          title: '名单提交',
          content: `确认要提交${selectedRows.selectList.map((e: any) => e.name).join()}`,
          onOk: (r) => { message.success('提交成功'); r(true) }
        });
      }
    }
  ]


  useEffect(() => {
    setData({ ...state, loading: true })
    const getl = async () => {
      const res: any = await getlist()
      setData({ list: res, loading: false })
    }
    getl()
  }, []);


  const columns = [
    {
      title: 'name',
      key: 'name',
      dataIndex: 'name',
      render: (e: any) => <a onClick={() => { history.push({ pathname: '/Detail', query: { name: e } }); }}>{e}</a>

    },
    {
      title: 'age',
      key: 'age',
      dataIndex: 'age',
    },
    {
      title: 'Action',
      key: 'action',
      render: (e: any) => {
        return <Button onClick={() => {
          const list = state.list.filter((v: any) => e.key !== v.key)
          setData({ ...state, list })
        }}>删除</Button>
      }
    },
  ];


  return <div>

    <TitleBox />

    {ButtonList.map((e: any) => {
      return <Button key={e.name} className={cls.btn} onClick={e.cli}> {e.name}</Button>
    })}

    <Table pagination={false} className={cls.tab} rowSelection={{
      type: 'checkbox',
      ...rowSelection,
    }} columns={columns} loading={state.loading} dataSource={state.list} />
  </div>
}



