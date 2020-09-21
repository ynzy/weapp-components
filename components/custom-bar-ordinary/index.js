// components/custom-bar/index.js
let app = getApp()
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

  },
  attached: function () {
    let { systemInfo, Custom, StatusBar } = app.globalData
    let headerPosi = Custom // 胶囊位置信息
    console.log(Custom);
    let btnPosi = headerPosi.top - StatusBar // 胶囊的实际位置top
    console.log(btnPosi);
    // 返回按钮位置 = 胶囊top + 胶囊height一半 + 胶囊的实际位置top一半(这里没想明白为什么要加top的一半)
    let backTop = headerPosi.top + headerPosi.height / 2 + btnPosi / 2
    let btnRight = systemInfo.screenWidth - headerPosi.right// 胶囊距离右侧的宽度 = 屏幕宽度 - 胶囊right
    this.setData({
      btnRight,
      backTop
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
