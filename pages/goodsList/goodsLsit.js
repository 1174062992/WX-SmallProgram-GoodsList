// pages/goodsList/goodsLsit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    routers: [
      {
        name: '东方明珠',
        integral:"69999积分",
        exchange:"30天兑换849件",
        icon: '/images/东方明珠.png',
        code: '10'
      },
      {
        name: '中央电视台总部大楼',
        integral: "9999积分",
        exchange: "30天兑换89件",
        icon: '/images/中央电视台总部大楼.png',
        code: '11'
      },
      {
        name: '伦敦桥',
        integral: "19999积分",
        exchange: "30天兑换9件",
        icon: '/images/伦敦桥.png',
        code: '10'
      },
      {
        name: '俄罗斯红场',
        integral: "99积分",
        exchange: "30天兑换3件",
        icon: '/images/俄罗斯红场.png',
        code: '11'
      },
      {
        name: '凯旋门',
        integral: "3478积分",
        exchange: "30天兑换39件",
        icon: '/images/凯旋门.png',
        code: '10'
      },
      {
        name: '埃菲尔铁塔',
        integral: "36999积分",
        exchange: "30天兑换100件",
        icon: '/images/埃菲尔铁塔.png',
        code: '11'
      },
      {
        name: '天坛',
        integral: "23999积分",
        exchange: "30天兑换8件",
        icon: '/images/天坛.png',
        code: '10'
      },
      {
        name: '天安门',
        integral: "9积分",
        exchange: "30天兑换9件",
        icon: '/images/天安门.png',
        code: '11'
      },
      {
        name: '悉尼歌剧院',
        integral: "59积分",
        exchange: "30天兑换109件",
        icon: '/images/悉尼歌剧院.png',
        code: '10'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
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
  
  }
})