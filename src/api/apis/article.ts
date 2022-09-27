/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/9/27
 * Description: 文件描述
 */
import axios from '../axios'

export default {
  // 发表文章
  fetchAddArticle (data: { title: string,
    sort: string,
    top: boolean,
    content_html: string,
    thumbnail: string,
    banner: string}) {
    return axios.post('/article/addArticle', data)
  },
  // 文章列表
  fetchArticleList (data: {currentPage: string,
    pageSize: string,
    sort: string}) {
    return axios.post('/article/articleList',data)
  },

  // 删除文章
  fetchDelArticle (data: {
    id: string
  }) {
    return axios.post('/article/delArticle', data)
  },
  // 图片上传
  fetchUploadImg () {
    return axios.post('/editor/uploadImg')
  }

}
