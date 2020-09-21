let navigationBar
Page({
  onLoad: function (options) {
    navigationBar = this.selectComponent("#navigationBar")
  },

  back2home() {
    wx.navigateBack({
      delta: 1,
    })
  },
  onPageScroll: function (e) {
    var scrollTop = e.scrollTop
    navigationBar.setOpacity(scrollTop, 200)
  }
})
