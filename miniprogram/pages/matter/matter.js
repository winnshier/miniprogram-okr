// miniprogram/pages/matter/matter.js
import store from '../../store'
import create from '../../utils/create'

// 引入插件安装器
import plugin from '../..//components/calendar/plugins/index'

// 设置代办
import todo from '../../components/calendar/plugins/todo'
// 禁用/启用可选状态
import selectable from '../../components/calendar/plugins/selectable'
// 农历相关功能
import solarLunar from '../../components/calendar/plugins/solarLunar/index'
import holidays from '../../components/calendar/plugins/holidays/index'
// import preset from '../../components/calendar/plugins/preset/index'
import timeRange from '../../components/calendar/plugins/time-range'

plugin
  .use(todo)
  .use(solarLunar)
  .use(selectable)
  .use(holidays)
  .use(timeRange)

create(store, {

    /**
     * 页面的初始数据
     */
    data: {
        calendarConfig: {
            // multi: true,
            // theme: 'elegant',
            markToday: '今',
            showLunar: true,
            showFestival: true,
            showHolidays: true,
            // chooseAreaMode: true,
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // console.log(this.store);
        // const calendar = this.selectComponent('#calendar').calendar
        // console.log(calendar);
        // calendar.chooseDateArea(['2021-06-20', '2021-06-30'])
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})