
const data = [
    {
        key: 'test1',
        name: 'John Brown',
        age: 32,
    },
    {
        key: 'age',
        name: 'Jim Green',
        age: 42,
    },
];



// 假设这里是请求接口列
// 假设获取接口；
export const getlist = (url = {}, param = {}) => {
    return new Promise((rs) => setTimeout(() => { rs(data) }, 2000))
}



