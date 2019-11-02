// 在index.wpy中全局导入这个用来封装方法的js
import wepy from 'wepy'
const baseUrl = 'https://uinav.com/api/public/v1'


// title 提示信息的文字  icon 提示信息的图标
// 封装获取信息失败方法
wepy.baseToaset = function (title='获取数据失败',icon='none') {
    wepy.showToast({
        title,
        icon
    })
}


// 封装get请求
wepy.get = function (path,data={}) {
    return wepy.request({
        url:baseUrl + path,
        data
    })
}


// 封装post请求
wepy.post = function (path,data={}) {
    return wepy.request({
        url:baseUrl + path,
        data,
        method:'post'
    })
}