import TestService from "./testService"
import SimpleService from "./simpleService";

// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testHandle: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(TestService);
    let test1 = new TestService('test1');
    let test3 = new SimpleService();
    // console.log(test1);
    // console.log(test1.abc);
    let test2 = new TestService('test2');
    // console.log(test2);
    // console.log(test2.abc);
    // console.log(test1 === test2);
    // console.log(typeof test1);
    // console.log(test1 instanceof TestService);
    // console.log(test3 instanceof SimpleService);
    // console.log(test3);
    this.setData({ testHandle: test1.abc });
    this.test(test1);
  },

  test(obj) {
    console.log(obj);
    console.log(obj.abc + '+aaa');
    obj.append('bbb');
    // obj.('aaa');
    console.log(obj);
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