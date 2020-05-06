import store from '../../store'
import create from '../../utils/create'

const app = getApp()

create(store, {

  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  data: {
    motto: null,
    userInfo: null,
    hasUserInfo: null,
    canIUse: null,
    b: { arr: [ ] },
    fullName: null,
    pureProp: null,
    aaa: '私有数据，不放在store'
  },

  onShow() {
    this.update()
  },

  onLoad: function () {
    setTimeout(function(){
      store.data.bbb = '成功在首页进行更新bbb'
      //这里只能用 store.update 而不是 this.update
      store.update()
    },7000)
  
  },

  getUserInfo: function(e) {
    wx.getSetting({
      success(auth_res) {
        if (auth_res.authSetting["scope.userInfo"]) {
          app.globalData.userInfo = e.detail.userInfo
          store.update({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
          })
        }
      }
    })

  },
  onRandom:function(evt){
    this.store.data.pureProp = evt.detail.rd
    this.update()
  }
})