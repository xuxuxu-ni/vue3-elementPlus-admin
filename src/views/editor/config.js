/**
 * Created by WebStorm.
 * User: HP
 * Date: 2020/7/23
 * Description: 文件描述
 */
/*
    配置信息
*/

const emrConfig = {

  // 默认菜单配置
  menus: {
    menuEdit: [
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'justify', // 对齐方式
      'quote', // 引用
      'undo', // 撤销
      'redo' // 重复
    ],
    menuInsert: [
      'link', // 插入链接
      'list', // 列表
      'emoticon', // 表情
      'image', // 插入图片
      'table', // 表格
      'video', // 插入视频
      'code', // 插入代码
    ],
    menuControl: [
      'label', // 标签控件
      'text', // 文本控件
      'select', // 下拉选项控件
      'date', // 时间日期控件
      'radio', // 单选控件
      'checkbox', // 复选控件
      'edittype', // 编辑模式
      'designtype', // 编辑模式
      'readonly', // 只读模式
      'preview', // 预览模式
      'trace', // 预览模式
      'save', // 保存
      'separate', // 分隔符
      'medicineFormula', // 医学公式
    ]
  },

  fontNames: [
    '宋体',
    '微软雅黑',
    'Arial',
    'Tahoma',
    'Verdana'
  ],

  colors: [
    '#000000',
    '#eeece0',
    '#1c487f',
    '#4d80bf',
    '#c24f4a',
    '#8baa4a',
    '#7b5ba1',
    '#46acc8',
    '#f9963b',
    '#ffffff'
  ],

  // // 语言配置
  // lang: {
  //     '设置标题': 'title',
  //     '正文': 'p',
  //     '链接文字': 'link text',
  //     '链接': 'link',
  //     '插入': 'insert',
  //     '创建': 'init'
  // },

  // 表情
  emotions: [
    {
      // tab 的标题
      title: '默认',
      // type -> 'emoji' / 'image'
      type: 'image',
      // content -> 数组
      content: [
        {
          alt: '[坏笑]',
          src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
        },
        {
          alt: '[舔屏]',
          src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
        },
        {
          alt: '[污]',
          src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3c/pcmoren_wu_org.png'
        }
      ]
    },
    {
      // tab 的标题
      title: '新浪',
      // type -> 'emoji' / 'image'
      type: 'image',
      // content -> 数组
      content: [
        {
          src: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif',
          alt: '[草泥马]'
        },
        {
          src: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif',
          alt: '[神马]'
        },
        {
          src: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/fuyun_thumb.gif',
          alt: '[浮云]'
        }
      ]
    },
    {
      // tab 的标题
      title: 'emoji',
      // type -> 'emoji' / 'image'
      type: 'emoji',
      // content -> 数组
      content: '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😓 😪 😴 🙄 🤔 😬 🤐'.split(/\s/)
    },
    // {
    //     // tab 的标题
    //     title: '手势',
    //     // type -> 'emoji' / 'image'
    //     type: 'emoji',
    //     // content -> 数组
    //     content: ['🙌', '👏', '👋', '👍', '👎', '👊', '✊', '️👌', '✋', '👐', '💪', '🙏', '️👆', '👇', '👈', '👉', '🖕', '🖐', '🤘']
    // }
  ],

  // 编辑区域的 z-index
  zIndex: 10000,

  // 是否开启 debug 模式（debug 模式下错误会 throw error 形式抛出）
  debug: false,

  // 插入链接时候的格式校验
  linkCheck: function (text, link) {
    // text 是插入的文字
    // link 是插入的链接
    return true // 返回 true 即表示成功
    // return '校验失败' // 返回字符串即表示失败的提示信息
  },

  // 插入网络图片的校验
  linkImgCheck: function (src) {
    // src 即图片的地址
    return true // 返回 true 即表示成功
    // return '校验失败'  // 返回字符串即表示失败的提示信息
  },

  // 粘贴过滤样式，默认开启
  pasteFilterStyle: true,

  // 粘贴内容时，忽略图片。默认关闭
  pasteIgnoreImg: false,

  // 对粘贴的文字进行自定义处理，返回处理后的结果。编辑器会将处理后的结果粘贴到编辑区域中。
  // IE 暂时不支持
  pasteTextHandle: function (content) {
    // content 即粘贴过来的内容（html 或 纯文本），可进行自定义处理然后返回
    return content
  },

  // onchange 事件
  // onchange: function (html) {
  //     // html 即变化之后的内容
  //     console.log(html)
  // },

  // 是否显示添加网络图片的 tab
  showLinkImg: true,

  // 插入网络图片的回调
  linkImgCallback: function (url) {
    // console.log(url)  // url 即插入图片的地址
  },

  // 默认上传图片 max size: 5M
  uploadImgMaxSize: 5 * 1024 * 1024,

  // 配置一次最多上传几个图片
  // uploadImgMaxLength: 5,

  // 上传图片，是否显示 base64 格式
  uploadImgShowBase64: false,

  // 上传图片，server 地址（如果有值，则 base64 格式的配置则失效）
  // uploadImgServer: '/upload',

  // 自定义配置 filename
  uploadFileName: '',

  // 上传图片的自定义参数
  uploadImgParams: {
    // token: 'abcdef12345'
  },

  // 上传图片的自定义header
  uploadImgHeaders: {
    // 'Accept': 'text/x-json'
  },

  // 配置 XHR withCredentials
  withCredentials: false,

  // 自定义上传图片超时时间 ms
  uploadImgTimeout: 10000,

  // 上传图片 hook
  uploadImgHooks: {
    // customInsert: function (insertLinkImg, result, editor) {
    //     console.log('customInsert')
    //     // 图片上传并返回结果，自定义插入图片的事件，而不是编辑器自动插入图片
    //     const data = result.data1 || []
    //     data.forEach(link => {
    //         insertLinkImg(link)
    //     })
    // },
    before: function (xhr, editor, files) {
      // 图片上传之前触发

      // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
      // return {
      //     prevent: true,
      //     msg: '放弃上传'
      // }
    },
    success: function (xhr, editor, result) {
      // 图片上传并返回结果，图片插入成功之后触发
    },
    fail: function (xhr, editor, result) {
      // 图片上传并返回结果，但图片插入错误时触发
    },
    error: function (xhr, editor) {
      // 图片上传出错时触发
    },
    timeout: function (xhr, editor) {
      // 图片上传超时时触发
    }
  },

  // 是否上传七牛云，默认为 false
  qiniu: false,

  // 上传图片自定义提示方法
  // customAlert: function (info) {
  //     // 自定义上传提示
  // },

  // // 自定义上传图片
  // customUploadImg: function (files, insert) {
  //     // files 是 input 中选中的文件列表
  //     // insert 是获取图片 url 后，插入到编辑器的方法
  //     insert(imgUrl)
  // }
}

export default emrConfig

