const app = getApp()
Component({
  options: {
    addGlobalClass: true,
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    systemInfo: app.globalData.systemInfo,
    Custom: app.globalData.Custom,
    CustomBar: app.globalData.CustomBar,
    opacity: 0
  },
  attached() {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    setOpacity: function (scrollTop, maxTop) {
      var opacity = 0
      if (scrollTop <= maxTop) {
        opacity = scrollTop / maxTop
      } else {
        opacity = 1
      }
      this.setData({
        opacity: opacity
      })
    },
    back2home: function () {
      wx.navigateBack({
        delta: 1,
      })
    },
  }
})
