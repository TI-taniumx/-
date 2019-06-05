var App = getApp();
var common = require('../../utils/util.js');

Page({
  data: {
    weather: {},
    weatherData: {},
    indexData: {}
  },
  onLoad: function () {
    var that = this;
    console.log("当加载天气页面的时候", that.data);
    common.loadWeatherData(function (data) {
      that.setData({
        weather: data.results[0],
        weatherData: data.results[0].weather_data,
        indexData: data.results[0].index

      });

    });

  },
  getUserFortune: function () {
    wx.navigateTo({
      url: '../fortune-result/fortune-result',
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '看看最近天气吧',
      path: 'pages/weather/weather',
      success: function (res) {
        // 转发成功
        wx.showShareMenu({
          // 要求小程序返回分享目标信息
          withShareTicket: true
        });
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }

})
