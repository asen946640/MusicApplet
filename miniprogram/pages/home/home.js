// pages/home/home.js
const MAX_LIMIT = 15
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switerImgUrl: [
      {
      url: 'http://p1.music.126.net/oeH9rlBAj3UNkhOmfog8Hw==/109951164169407335.jpg',
      },
      {
      url: 'http://p1.music.126.net/xhWAaHI-SIYP8ZMzL9NOqg==/109951164167032995.jpg',
      },
      {
      url: 'https://p1.music.126.net/b_uXL1Dz3oH7jLoVZ2wytA==/109951165048659374.jpg',
      }
    ],
    playlist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getplaylist()
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
    this._getplaylist()
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
    this._getplaylist()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //触底加载歌单数据
    this._getplaylist()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  _getplaylist() {
    wx.showLoading()
    wx.cloud.callFunction({
      name: 'music',
      data: {
        start: this.data.playlist.length,
        count: MAX_LIMIT,
        $url : 'playlist'
      }
    }).then(res => {
      this.setData( {
        playlist: this.data.playlist.concat(res.result.data)
      })
      wx.hideLoading()
    })
  }
})