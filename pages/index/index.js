//index.js
//获取应用实例
const app = getApp()
var common = require('../../utils/util.js');
var arr;
Page({
  data: {
    imgUrls: [
      'http://i1.bvimg.com/686943/98ef1204035e29e8.png',
      'http://i1.bvimg.com/686943/f377ce9e9148f5e2.jpg',
      'http://i1.bvimg.com/686943/8b542c871d128830.jpg'
     ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",
    weather: {},
    weatherData: {},
    indexData: {},
    his:[],
    news:[],
    date: common.formatdate(new Date())
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var date = common.formatdate(new Date())
    let that = this;
  
    wx.request({
      url: 'https://api.shenjian.io/todayOnhistory/queryEvent',
      method: 'GET',
      data: {//这里写你要请求的参数
        appid : '785266e35fdf5d827996496b14ec662e',
        date:date,
      },
      headers: {
        'key': '064ad080e69ab05906a5d74897def78f',
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          his: res.data,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

        })
      }
    })
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


    console.log("当加载天气页面的时候", that.data);
    common.loadWeatherData(function (data) {
      that.setData({
        weather: data.results[0],
        weatherData: data.results[0].weather_data,
        indexData: data.results[0].index
        
      });

    });

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  gotoweather:function(){
    wx.navigateTo({
      url: '/pages/weather/weather',
    })
  },

  gotohis:function(){
    wx.navigateTo({
      url: '/pages/his/his',
    })
  },

  gotonews:function(){
    wx.navigateTo({
      url: '/pages/news/news',
    })
  },
  gotoclass:function(){
    wx.navigateTo({
      url: '/pages/classroom/classroom',
    })
  }
   


    
  
})
