

import wepy from 'wepy'

export default class Home extends wepy.mixin {
    data = {
        //分类数据
        cateList:[]
    }

    config = {
    }

    methods = {

    }

    //获取分类数据
    async getCatesList() {
        const {data} = await wepy.get('/categories')
        //console.log(data);
        if (data.meta.status !== 200) {
            return wepy.baseToast()
        }
        this.cateList = data.message
        this.$apply()
    }

    onLoad() {
        this.getCatesList();
        
    }
}



