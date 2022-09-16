<template>
  <div>
    <h3>框架内除了包含element ui自带的图标外还预装了Font Awesome图标库</h3>

    <div style="clear: both"></div>
    <p class="text"><span class="name">Font Awesome图标</span>本框架已经内置该图标库675个图标,不需要另外引入安装,可以直接使用,使用方法直接通过设置类名为 'fa fa-iconName' 来使用即可。例如：<span class="code">&lt;i class="fa fa-camera-retro"&gt;&lt;/i&gt;</span></p>
    <p class="text">使用 fa-lg (33%递增)、fa-2x、 fa-3x、fa-4x，或者 fa-5x 类 来放大图标,例如：<span class="code">&lt;i class="fa fa-camera-retro fa-2x"&gt;&lt;/i&gt;</span></p>
    <p class="text">使用 fa-spin 类来使任意图标旋转，还可以使用 fa-pulse 来使其进行8方位旋转,例如：<span class="code">&lt;i class="fa fa-camera-retro fa-2x"&gt;&lt;/i&gt;</span></p>
    <div>
      <ul class="ele-icoo">
        <li>
          <span>
            <i class="fa fa-server"></i>
            <span class="iconame">fa-server</span>
          </span>
        </li>
        <li>
          <span>
            <i class="fa fa-tags"></i>
            <span class="iconame">fa-tags</span>
          </span>
        </li>
        <li>
          <span>
            <i class="fa fa-spinner fa-pulse"></i>
            <span class="iconame">spinner</span>
          </span>
        </li><li>
          <span>
            <i class="fa fa-spinner fa-spin"></i>
            <span class="iconame">fa-spinner</span>
          </span>
        </li>
        <li>
          <span>
            <i class="fa fa-circle-o-notch fa-spin"></i>
            <span class="iconame">fa-circle-o-notch</span>
          </span>
        </li><li>
          <span>
                <i class="fa fa-cog fa-spin"></i>
            <span class="iconame">fa-cog</span>
          </span>
        </li>
        <li>
          <span>
            <a target="_blank" href="http://fontawesome.dashgame.com/">更多Font Awesome图标</a>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Index'
})
</script>

<style lang="scss">
  .name{
    font-size: 26px;
    color: #666666;
    display: block;
    margin-bottom: 10px;
    margin-top: 24px;
  }
  .code{
    background-color: #e5e8ec;
    padding: 0 4px;
    border: 1px solid #ced1dc;
    border-radius: 4px;
  }
  .text{
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    margin: 5px 0px;
  }
  .ele-icoo{
    max-width: 100%;
    li{
      float: left;
      width: 12.5%;
      text-align: center;
      height: 120px;
      line-height: 120px;
      color: #666;
      font-size: 13px;
      transition: color .15s linear;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      margin-right: -1px;
      margin-bottom: -1px;
      span{
        display: inline-block;
        line-height: normal;
        vertical-align: middle;
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
        color: #99a9bf;
        i{
          display: block;
          font-size: 32px;
          margin-bottom: 15px;
          color: #606266;
          code{
            display: inline-block;
            padding: 0 3px;
            height: 1em;
            color: #606266;
          }
        }
      }
    }
  }
</style>
