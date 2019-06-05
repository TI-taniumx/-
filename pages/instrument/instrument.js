// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  gotomovie:function(){
    wx.navigateTo({
      url: '/pages/movies/movies',
    })
  },

  gotoweather:function(){
    wx.navigateTo({
      url: '/pages/weather/weather',
    })
  },

  gotopost:function(){
    wx.navigateTo({
      url: '/pages/post/post',
    })
  },
  
  gotobus:function(){
    wx.navigateTo({
      url: '/pages/bus/bus',
    })
  },

  gotohot:function()
  {
    wx.navigateTo({
      url: '/pages/hot/hot',
    })
  },

  gotohis: function () {
    wx.navigateTo({
      url: '/pages/his/his',
    })
  },

  gotonews: function () {
    wx.navigateTo({
      url: '/pages/news/news',
    })
  },
  

  
})