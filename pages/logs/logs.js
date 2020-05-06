
import store from '../../store'
import create from '../../utils/create'

const util = require('../../utils/util.js')

create(store, {
  data: {
    logs: []
  },
  onLoad: function () {
    setTimeout(function () {
      store.data.bbb = '成功在登录页进行更新bbb'
      //这里只能用 store.update 而不是 this.update
      store.update()
    },10000)
  }
})
