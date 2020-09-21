//app.js
App({
  globalData: {
    userInfo: null
  },
  onLaunch: function () {
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.systemInfo = e  // 系统状态栏信息
        this.globalData.StatusBar = e.statusBarHeight;  // 状态栏高度
        let capsule = wx.getMenuButtonBoundingClientRect(); // 菜单按钮信息
        if (capsule) {
          this.globalData.Custom = capsule;
          // 导航栏高度 = 胶囊bottom + 胶囊top - 状态栏高度
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  }
})