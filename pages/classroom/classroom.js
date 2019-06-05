const app = getApp()
Page({
  data: {
    list:[],
    llist:[],
    addlist: [],
    showLeft1: false,
    showLeft2: false,
  },
  toggleLeft1() {
    this.setData({
      showLeft1: !this.data.showLeft1
    });
  },
  //筛选教学楼区域函数
  toggleLeft2() {
    if(app.globalData.area==''){
      wx.showToast({
        title: '请先选择教学楼',
        icon:'none'
      })
    }
    else{
    this.setData({
      showLeft2: !this.data.showLeft2
    });}
  },
onLoad: function () {
  let that=this;
  wx.request({
    url: 'http://152.136.154.73:5000/',
    method: 'GET',
    data: {//请求参数
    },
    headers: {

      'Content-Type': 'application/json'
    },
    success: function (res) {
      console.log(res)
      //将获取到的json数据，存在名字叫zhihu的这个数组中
      that.setData({
        list: res.data,
        addlist:res.data
        //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
      })
    }
  })
  var json=that.data.list;
  var arr = [];
  for (var i = 0; i < json.length; i++) {
    if (json[i].cs == 0) {
      json[i].cs = '无课';
      arr.push(json[i]);
    }
    else {
      json[i].cs = '有课';
      arr.push(json[i]);
    }
  }
  this.setData({
    //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
    llist: arr,
  });
  },
  //筛选教学楼函数
  sortboyi: function () {
    var json = this.data.llist;
    var arr = [];
    for (var i = 0; i < json.length; i++) {
      if (json[i].bld == 1) {
        arr.push(json[i]);
      }
    }
    app.globalData.area= 1;
    this.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      addlist: arr,
    });
  },
  sortboer: function () {
    var json = this.data.llist;
    var arr = [];
    for (var i = 0; i < json.length; i++) {
      if (json[i].bld == 2) {
        arr.push(json[i]);
      }
    }
    app.globalData.area = 2;
    this.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      addlist: arr,
    });
  },
  sortbosan: function () {
    var json = this.data.llist;
    var arr = [];
    for (var i = 0; i < json.length; i++) {
      if (json[i].bld == 3) {
        arr.push(json[i]);
      }
    }
    app.globalData.area = 3;
    let that = this;
    that.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      addlist: arr
    });
  },
  sortbosi: function () {
    var json = this.data.llist;
    var arr = [];
    for (var i = 0; i < json.length; i++) {
      if (json[i].bld == 4) {
        arr.push(json[i]);
      }
    }
    app.globalData.area = 4;
    let that = this;
    that.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      addlist: arr
    });
  },
  sortbowu: function () {
    var json = this.data.llist;
    var arr = [];
    for (var i = 0; i < json.length; i++) {
      if (json[i].bld == 5) {
        arr.push(json[i]);
      }
    }
    app.globalData.area = 5;
    let that = this;
    that.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      addlist: arr
    });
  },
  //筛选区域函数
  sorta: function () {
    var json = this.data.llist;
    var arr = [];
    for (var i = 0; i < json.length; i++) {
      if (json[i].dst == 'A' && json[i].bld == app.globalData.area) {
        arr.push(json[i]);
      }
    }
    let that = this;
    that.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      addlist: arr
    });
  },
  sortb: function () {
    var json = this.data.llist;
    var arr = [];
    for (var i = 0; i < json.length; i++) {
      if (json[i].dst == 'B'&&json[i].bld == app.globalData.area) {
        arr.push(json[i]);
      }
    }
    let that = this;
    that.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      addlist: arr
    });
  },
  sortc: function () {
    var json = this.data.llist;
    var arr = [];
    for (var i = 0; i < json.length; i++) {
      if (json[i].dst == 'C' && json[i].bld == app.globalData.area) {
        arr.push(json[i]);
      }
    }
    let that = this;
    that.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      addlist: arr
    });
  },
  cancel:function(){
    app.globalData.area='';
    this.setData({
      addlist: this.data.llist,
    })
  },
  cancel1: function () {
    var json = this.data.llist;
    var arr = [];
    for (var i = 0; i < json.length; i++) {
      if (json[i].bld == app.globalData.area) {
        arr.push(json[i]);
      }
    }
      this.setData({
        //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
        addlist: arr,
      });
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自习去这些教室就对了',
      path: 'pages/classroom/classroom',
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
  },
  onPullDownRefresh: function () {
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: 'http://152.136.154.73:5000/',
      method: 'GET',
      data: {//请求参数
      },
      headers: {

        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          list: res.data,
          addlist: res.data
        });
        // 设置数组元素
        console.log(that.data.moment);
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
      }
    })
    var json = this.data.list;
    var arr = [];
    for (var i = 0; i < json.length; i++) {
      if (json[i].cs == 0) {
        json[i].cs = '无课';
        arr.push(json[i]);
      }
      else {
        json[i].cs = '有课';
        arr.push(json[i]);
      }
    };
    that.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      addlist: arr,
      llist: arr
    });
  }
})
 