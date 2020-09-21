const { statusBarHeight } = wx.getSystemInfoSync();
Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    opacity: Number,
    title: String,
    showBackBtn: {
      type: Boolean,
      value: false
    },
    textColor: {
      type: String,
      value: '#333'
    },
    sticky: {
      type: Boolean,
      value: true
    }
  },
  data: {
    top: 0,
    showBack: false,
    showBar: true
  },
  methods: {
    onClickBack() {
      wx.navigateBack();
    }
  },
  attached() {
    const pages = getCurrentPages();
    const { showBackBtn } = this.data;

    this.setData({
      showBack: showBackBtn && pages && pages.length > 1,
      top: statusBarHeight,
    });
  }
});
