// miniprogram/pages/login/login.js
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
  formSubmit:function(e){
    const db=wx.cloud.database({
      env: 'kangkang-i08jm'
    })
    let user=e.detail.value.no
    let pwd=e.detail.value.pwd
    db.collection("users").where({
      _id:user,
      password:pwd
    }).get({
      success:res=>{
        if(res.data.length==0){
          wx.showToast({
            title: '登录失败请查看用户名和密码',
            icon: 'none'
          })
        }else{
          wx.showToast({
            title: '登录成功'
          })
          wx.redirectTo({
            url: '../pages02/page02',
          })
        }
        
      },
      fail: err => {
        wx.showToast({
          icon: "none",
          title: '查看记录失败',
        })
      }
    })
    if(user=="" | pwd==""){
      wx.showToast({
        //title: '登录失败',
      })
    }
    //let username=e
  },
  reg:function(e){
    wx.navigateTo({
      url: '../register/register',
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

  }
})