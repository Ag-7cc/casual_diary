var Api = require( '../../utils/api.js' );

Page( {
  data: {
     text:"这是一个页面"
  },
  onLoad: function( options ) {
    // 页面初始化 options为页面跳转所带来的参数
    this.fetchData();
  },
  fetchData: function() {
    var that = this;
    // 处理参数
    var paramsObj = {};
    paramsObj.timestamp = new Date().getTime();

    wx.request( {
      url: Api.getUserById( 1, paramsObj ),
      success: function( res ) {
        that.setData( {
          user: res.data.user
        })
      }
    });
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})
