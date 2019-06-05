// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toggleLeft1() {
    this.setData({
      showLeft1: !this.data.showLeft1
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that=this;
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index',
      method: 'GET',
      data: {//这里写你要请求的参数
        key: '3bd02593a189ef630a412b08c221a738',
        'type':'toutiao'
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          news: res.data,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })
      }
    })
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
  sh:function(){
    var that = this;
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index',
      method: 'GET',
      data: {//这里写你要请求的参数
        key: '3bd02593a189ef630a412b08c221a738',
        'type': 'shehui'
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          news: res.data,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })
      }
    })
  },
  gj: function () {
    var that = this;
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index',
      method: 'GET',
      data: {//这里写你要请求的参数
        key: '3bd02593a189ef630a412b08c221a738',
        'type': 'guoji'
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          news: res.data,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })
      }
    })
  },
  ty: function () {
    var that = this;
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index',
      method: 'GET',
      data: {//这里写你要请求的参数
        key: '3bd02593a189ef630a412b08c221a738',
        'type': 'tiyu'
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          news: res.data,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })
      }
    })
  },
  kj: function () {
    var that = this;
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index',
      method: 'GET',
      data: {//这里写你要请求的参数
        key: '3bd02593a189ef630a412b08c221a738',
        'type': 'keji'
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          news: res.data,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })
      }
    })
  },
  ss: function () {
    var that = this;
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index',
      method: 'GET',
      data: {//这里写你要请求的参数
        key: '3bd02593a189ef630a412b08c221a738',
        'type': 'shishangi'
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          news: res.data,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })
      }
    })
  },
})