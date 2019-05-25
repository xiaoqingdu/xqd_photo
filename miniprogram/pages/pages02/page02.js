// miniprogram/pages/pages02/page02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database({
      env: 'kangkang-i08jm'
    })
    db.collection("books").get({
      success:res=>{
        this.setData({
          books:res.data
        })
      },
      fail:err=>{
        wx.showToast({
          icon: "none",
          title: '查看记录失败',
        })
      }
      })
  },

  goSet: function() {
    wx.redirectTo({
      url: '../set/set',
    })
  },
  onDel: function(e) {
    let id = e.currentTarget.dataset.id
    const db = wx.cloud.database({
      env: 'kangkang-i08jm'
    })
    db.collection("books").doc(id).remove({
      success: res => {
        wx.showToast({
          title: '删除成功',
          })
        this.onLoad()
      },
      fail: err => {
        wx.showToast({
          title: '删除失败',
          })
        }
      })
    this.onLoad()
  },
  onUpdate:function(e){
    let id=e.currentTarget.dataset.id
    wx.redirectTo({
      url: '../set/set?id='+id,
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