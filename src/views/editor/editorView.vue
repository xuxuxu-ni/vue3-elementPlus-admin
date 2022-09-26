<template>
  <div class="editor-wrap">
    <div id="toolbar-container"></div>
    <div id="container">
      <div id="editor">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CkEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn.js'
import {onMounted, ref} from 'vue'

let docEditor: any = ref('')


onMounted(() => {


  return CkEditor.create(document.getElementById('editor')!, {
    language: 'zh-cn',
    toolbar: {
      items: [
        'heading',
        '|',
        'fontfamily',
        'fontsize',
        '|',
        'alignment',
        '|',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'bold',
        'italic',
        'strikethrough',
        'underline',
        '|',
        'link',
        '|',
        'outdent',
        'indent',
        '|',
        'bulletedList',
        'numberedList',
        '|',
        'insertTable',
        '|',
        'uploadImage',
        'blockQuote',
        '|',
        'undo',
        'redo', //重做
      ],
      shouldNotGroupWhenFull: true, //当设置为true时，工具栏将停止分组项目，并让他们换行。
    },
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells',]
    }
  })
    .then((editor) => {
      const toolbarContainer = document.querySelector('#toolbar-container')

      toolbarContainer?.appendChild(editor.ui.view.toolbar.element!)

      editor.setData('<p>&nbsp;</p><h2 style="text-align:center;"><span style="font-family:Georgia, serif;">The Flavorful Tuscany Meetup</span></h2><h3 style="text-align:center;"><span style="color:hsl(210,75%,60%);font-family:Georgia, serif;">Welcome letter</span></h3><p>Dear Guest,</p><p>We are delighted to welcome you to the annual <i>Flavorful Tuscany Meetup</i> and hope you will enjoy the programme as well as your stay at the <a href="https://ckeditor.com">Bilancino Hotel</a>.</p><p>Please find attached the full schedule of the event.</p><blockquote><p>The annual Flavorful Tuscany meetups are always a culinary discovery. You get the best of Tuscan flavors during an intense one-day stay at one of the top hotels of the region. All the sessions are lead by top chefs passionate about their profession. I would certainly recommend to save the date in your calendar for this one!</p><p>Angelina Calvino, food journalist</p></blockquote><p>Please arrive at the <a href="https://ckeditor.com">Bilancino Hotel</a> reception desk at least <strong>half an hour earlier</strong> to make sure that the registration process goes as smoothly as possible.</p><p>We look forward to welcoming you to the event.</p><figure class="image image_resized image-style-block-align-left" style="width:180px;"><img src="https://ckeditor.com/docs/ckeditor4/latest/examples/assets/image/signature.png" alt="Victoria Valc signature"></figure><p><strong>Victoria Valc</strong></p><p><strong>Event Manager</strong><br><strong>Bilancino Hotel</strong></p><p>&nbsp;</p><h3 style="text-align:center;"><span style="color:hsl(210,75%,60%);font-family:Georgia, serif;">The Flavorful Tuscany Meetup Schedule</span></h3><figure class="table"><table><thead><tr><th colspan="2"><span style="color:hsl(0,0%,100%);">Saturday, July 14</span></th></tr></thead><tbody><tr><td>9:30 AM - 11:30 AM</td><td><p><strong>Americano vs. Brewed - “know your coffee”</strong> with:&nbsp;</p><ul><li>Giulia Bianchi</li><li>Stefano Garau</li><li>Giuseppe Russo</li></ul></td></tr><tr><td>1:00 PM - 3:00 PM</td><td><p><strong>Pappardelle al pomodoro</strong> - live cooking</p><p>Incorporate the freshest ingredients&nbsp;<br>with Rita Fresco</p></td></tr><tr><td>5:00 PM - 8:00 PM</td><td><strong>Tuscan vineyards at a glance</strong> - wine-tasting&nbsp;<br>with Frederico Riscoli</td></tr></tbody></table></figure><p>&nbsp;</p>') //复制表格数据到编辑器
      editor.getData() //获取
      docEditor.value = editor //展示
    })
    .catch((error: any) => {
      console.error(error)
    })
})
</script>
<style>
#toolbar-container .ck-toolbar {
  background: #fafafa;
}
</style>
<style scoped>
.editor-wrap {
  background: #ffffff;
  padding: 30px;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 12%);
}
#container {
  max-height: 600px;
  overflow: auto;
  padding-top: 20px;
  background: #e3e8ed;
}
.ck-editor__editable[role="textbox"] {
  /* editing area */
  width: 800px;
  min-height: 800px;
  margin: 0 auto;
  background: #ffffff;
}
.ck-content .image {
  /* block images */
  max-width: 80%;
  margin: 20px auto;
}
</style>
