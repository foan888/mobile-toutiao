// 此文件专门处理postcss插件
module.exports = {
  // 所有的postcss插件
  plugins: {
    // //   自动给css样式加前缀的属性 display:flex  => 自动其他浏览器的前缀
    // autoprefixer: {},
    // 'postcss-pxtorem': {
    //   rootValue: 37.5, // 基准值 font-size: 30px  =>  300/ rootValue = rem
    //   propList: ['*'] // 包括哪些文件  所有的文件都转化rem
    //   // selectorBlackList: [] // 不进行px转换的选择器
  // }
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 16, // 结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      propList: ['*']

    }
  }
}
