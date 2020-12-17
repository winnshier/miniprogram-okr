// components/tabBar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        list: [{
            "text": "事项",
            "iconPath": "../../images/tabbar-file-common.png",
            "selectedIconPath": "../../images/tabbar-file-common-filling.png"
        },
        {
            "text": "日程",
            "iconPath": "../../images/tabbar-layout.png",
            "selectedIconPath": "../../images/tabbar-layout-filling.png"
        },
        {
            "text": "我的",
            "iconPath": "../../images/tabbar-user.png",
            "selectedIconPath": "../../images/tabbar-user-filling.png"
        }]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        tabChange(e) {
            console.log(e)
        }
    }
})
