/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/3/19
 * Description: 文件描述
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    // eslint-config-prettier 的缩写
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier的缩写
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'generator-star-spacing': 'off',
    indent: [2, 2], //缩进风格
    'no-multiple-empty-lines': [1, { max: 2 }], //空行最多不能超过2行
    camelcase: 2, //强制驼峰法命名
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
    'no-func-assign': 2, // 禁止重复的函数声明
    'newline-after-var': 2, //变量声明后是否需要空一行
    'no-undef': 2, //不能有未定义的变量
    'key-spacing': [2, { beforeColon: false, afterColon: true }], //对象字面量中冒号的前后空格
    'no-redeclare': 2, //禁止重复声明变量
    eqeqeq: [2, 'allow-null'], // 使用 === 替代 ==
    quotes: [1, 'single', 'avoid-escape'], // 单引号
    semi: [2, 'never'], // 不使用分号
    'comma-dangle': [0, 'never'], // 对象字面量项尾不能有逗号
    'no-unused-vars': 2, // 不能有声明后未被使用的变量或参数
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-invalid-this': 2, //禁止无效的this，只能用在构造器，类，对象字面量
    'no-var': 2, //禁用var，用let和const代替
    'new-cap': [
      2,
      {
        newIsCap: true, // 构造函数方法名必须大写
        capIsNew: false, // 构造函数不需要一定使用new
      },
    ], // 构造函数大写限制
    'new-parens': 2, // 要求调用无参构造函数时带括号
    'prettier/prettier': 0,
    // 禁止出现console
    'no-console': 'warn',
    // 禁用debugger
    'no-debugger': 'warn',

    // 禁止出现空语句块
    'no-empty': 'warn',
    // 禁止不必要的括号
    'no-extra-parens': 'off',

    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 'warn',
    // 强制所有控制语句使用一致的括号风格
    curly: 'warn',
    // 要求 switch 语句中有 default 分支
    'default-case': 'warn',
    // 强制尽可能地使用点号
    'dot-notation': 'warn',
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 'warn',
    // 禁止使用多个空格
    'no-multi-spaces': 'warn',
    // 禁止不必要的 catch 子句
    'no-useless-catch': 'warn',
    // 禁止多余的 return 语句
    'no-useless-return': 'warn',
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'off',
    // 允许delete变量
    'no-delete-var': 'off',
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 'warn',
    // 要求操作符周围有空格
    'space-infix-ops': 'warn',
    'vue/multi-word-component-names': 0,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
