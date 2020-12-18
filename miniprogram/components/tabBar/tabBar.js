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
            "iconPath": "http://img.winnshier.cn/tabbar-file-common.png",
            "selectedIconPath": "http://img.winnshier.cn/file-common-filling.png"
          },
          {
            "text": "日程",
            "iconPath": "http://img.winnshier.cn/tabbar-layout.png",
            "selectedIconPath": "http://img.winnshier.cn/layout-filling.png"
          },
          {
            "text": "我的",
            "iconPath": "http://img.winnshier.cn/tabbar-user.png",
            "selectedIconPath": "http://img.winnshier.cn/user-filling.png"
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
