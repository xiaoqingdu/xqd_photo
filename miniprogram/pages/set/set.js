// miniprogram/pages/set/set.js
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
    if(options.id){
      const db=wx.cloud.database({
        env: 'kangkang-i08jm'
      })
      db.collection("books").where({
        _id:options.id
      }).get({
        success:res=>{
          this.setData({
            book:res.data[0]
          })
        },
        fail:err=>{
          console.log(err)
        }
      })
    }
  },

  comfirm:function(e){
    const db=wx.cloud.database({
      env: 'kangkang-i08jm'
    })
    let book=e.detail.value
    if(book.id==""){
      this.add(db,book)
    }else{
      this.update(db,book)
    }
  },
  add:function(db,book){
    db.collection("books").add({
      data: {
        name: book.name,
        author: book.author,
        price: parseFloat(book.price)
      },
      success:res=>{
        wx.showToast({
          title: '新增记录成功',
        })
        wx.redirectTo({
          url: '../pages02/page02',
        })
      },
      fail:err=>{
        wx.showToast({
          title: '新增失败',
        })
      }
    })
  },

  update:function(db,book){
    db.collection("books").doc(book.id).update({
      data: {
        name: book.name,
        author: book.author,
        price: parseFloat(book.price)
      },success:res=>{
        wx.showToast({
          title: '修改记录成功',
        })
        wx.navigateTo({
          url: '../pages02/page02',
        })
      },fail:err=>{
        wx.showToast({
          title: '修改失败',
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