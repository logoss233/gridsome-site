<template>
  <Layout>
    <div data-v-2a0eef53="" class="journal">
      <div data-v-2a0eef53="" class="container journal-container">
        <div data-v-2a0eef53="" class="journal-header">
          <h1 data-v-2a0eef53="" class="journal-title">Gridsome with Forestry CMS</h1>
          <div data-v-2a0eef53="" class="journal-meta">
            <div data-v-2a0eef53="" class="journal-author"><span data-v-2a0eef53="" class="label">Author</span><span
                data-v-2a0eef53="" class="author-name">{{journal.writer.name}}</span></div>
            <div data-v-2a0eef53="" class="journal-date"><span data-v-2a0eef53="" class="label">Date</span>
              <div data-v-2a0eef53="">{{dayStr}}</div>
            </div>
            <div data-v-2a0eef53="" class="journal-time"><span data-v-2a0eef53="" class="label">Time</span><span
                data-v-2a0eef53="">{{journal.time}} min read</span></div>
          </div>
        </div>
        <div data-v-2a0eef53="" class="journal-content" v-html="content">
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id:ID!){
  journal:strapiJournal(id:$id){
    id
    title
    excerpt
    content
    time
    writer{
      name
    }
    published_at
  }
}

</page-query>


<script>
import markdownIt from 'markdown-it'
import dayjs from 'dayjs'
export default {
  name:'Journal',
  computed:{
    journal(){
      return this.$page.journal
    },
    content(){
      const md=new markdownIt()
      let html=''
      try{
        //给图片地址前面加上api地址
        let c=this.journal.content
        //![film1920.jpg](/uploads/film1920_2a2fb7effd.jpg)
        // const reg=/(!\[.+?\.jpg\]\()(\/.+?\.jpg\))/g
        // c=c.replace(reg,"$1"+this.GRIDSOME_API_URL+"$2")
        html=md.render(c)
      }catch(err){
        console.log("处理markdown错误",err)
      }
      return html
    },
    dayStr(){
      return dayjs(this.journal.published_at).format('DD.MMMM YYYY')
    }
  },
  metaInfo:{
    title:'Journal'
  }
}
</script>

<style>

</style>