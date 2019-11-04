// 抽离逻辑
import wepy from 'wepy'

export default class Home extends wepy.mixin {
    data = {
        // 存放轮播图数据
        swiperData:[],
        // 存放分类数据
        cateData:[],
        // 存放楼层数据
        floorData:[]
    }

    config = {
    }

    methods = {
        goGoodsDetail(url) {
            wepy.navigateTo({
                url
            })
        }
    }

    //获取轮播图数据
    async getSwiperData() {
        const {data:res} = await wepy.get('/home/swiperdata')
        if (res.meta.status!=200) {
            //失败提示处理
            return wepy.baseToaset()
        }
        this.swiperData = res.message
        this.$apply()  
    }



    //获取分类数据
    async getCateData() {
        const {data} = await wepy.get('/home/catitems')         
        if (data.meta.status !== 200) {
            return wepy.baseToaset()
        }
        this.cateData = data.message
        this.$apply()
    }


    //获取楼层数据
    async getFloorData() {
        const {data} = await wepy.get('/home/floordata')
        if (data.meta.status != 200) {
            return wepy.baseToaset()
        }
        this.floorData = data.message
        this.$apply()
    }



    // 页面开始加载
    onLoad() {
        // 加载轮播图
        this.getSwiperData()
        // 加载分类
        this.getCateData()
        // 加载楼层
        this.getFloorData()
        
    }
}