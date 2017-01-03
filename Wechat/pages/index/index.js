//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello wangweiwei',
    smm: "smm",
    userInfo: {},
    arr:[{name:"张三",age:10},{name:"wang", age: 20}],
    remoteInfo:'',
    myImage: null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  myTap: function(){
    this.setData({smm:"我是中国人"});
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用远程数据

    wx.request({
      url: 'https://raw.githubusercontent.com/jiangzy27/how_to_react/master/score.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-types': 'application/json'
      }, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data)
        that.setData({remoteInfo:res.data.data})
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

    //选择图片，如果是手机就打开相册
    // wx.chooseImage({
    //   count: 9, // 最多可以选择的图片张数，默认9
    //   sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
    //   sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
    //   success: function(res){
    //     // success,返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
    //     var tempFilePaths = res.tempFilePaths;
    //     console.log(tempFilePaths);
    //     that.setData({myImage: tempFilePaths})
    //   },
    //   fail: function() {
    //     // fail
    //   },
    //   complete: function() {
    //     // complete
    //   }
    // })

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
