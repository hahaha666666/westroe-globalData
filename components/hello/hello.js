
import create from '../../utils/create'

// components/hello/hello.js
create({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    abc : '',
    pureProp: '',
    bbb:'bbb'
  },

  ready: function () {
    // this.store.onChange = function(info){
    //   console.log(info)
    // }

    setTimeout(() => {
      this.store.data.bbb = '在组件中修改全局变量bbb'
      this.update()
    }, 2000)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
