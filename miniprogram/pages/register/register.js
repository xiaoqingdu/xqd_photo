// miniprogram/pages/register/register.js
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
  registerForm:function(e){
    const db=wx.cloud.database({
      env: 'kangkang-i08jm'
    })
    let user_info=e.detail.value
    let user=user_info.user
    let pwd=user_info.pwd
    if(user=="" | pwd==''){
      wx.showToast({
        title: '用户名密码为空',
        icon:'none'
      })
    }else{
      this.add(db,user_info)
    }
  },
  add:function(db,user_info){
    db.collection('users').add({
      data:{
        _id:user_info.user,
        password:user_info.pwd
      },
      success: res => {
        wx.showToast({
          title: '新增记录成功',
        })
        wx.redirectTo({
          url: '../pages02/page02',
        })
      },
      fail: err => {
        wx.showToast({
          title: '新增失败',
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

  }
})