/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/9/27
 * Description: 文件描述
 */
const modules: any = {}
const files = import.meta.globEager('./apis/*.ts')

Object.keys(files).forEach((fileName) => {
  const name = fileName.replace(/\.\/apis\/|\.ts/g, '')

  modules[name] = files[fileName].default
})

export default modules
