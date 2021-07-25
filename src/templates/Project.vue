<template>
  <Layout :style="{
    color:project.color || 'black'
  }">
  <div data-v-7f3c42a8="" class="project">
    <div data-v-7f3c42a8="" class="container">
      <div data-v-7f3c42a8="" class="project-header">
        <h1 data-v-7f3c42a8="" class="project-title">{{project.title}}</h1>
        <div data-v-7f3c42a8="" class="project-info">
          <div data-v-7f3c42a8="" class="categories-container">
            <div data-v-7f3c42a8="" class="categories">
              <span data-v-7f3c42a8="" class="label">Categories</span
              ><span
                v-for="category in project.categories"
                :key="category.name"
               data-v-7f3c42a8="" class="category">{{category.name}}</span
              >
            </div>
          </div>
          <div data-v-7f3c42a8="" class="year-container">
            <span data-v-7f3c42a8="" class="label">Year</span>
            <div data-v-7f3c42a8="">2019</div>
          </div>
        </div>
      </div>
      <div data-v-7f3c42a8="" class="content">
        <div v-html="content"></div>
        <p>
          <img
              :alt="project.alt"
              :src="GRIDSOME_API_URL+project.img2560.url"
              width="2560"
              :data-src="GRIDSOME_API_URL+project.img2560.url"
              :data-srcset="srcSet"
              data-sizes="(max-width: 2560px) 100vw, 2560px"
              class=" g-image g-image--lazy g-image--loaded"
              data-v-50cbff3e=""
              :srcset="srcSet"
              sizes="(max-width: 2560px) 100vw, 2560px"
            /><noscript data-v-50cbff3e=""
              ><img
                :src="GRIDSOME_API_URL+project.img2560.url"
                class="thumbnail g-image g-image--loaded"
                width="2560"
                :alt="project.alt"
            /></noscript>
        </p>
      </div>
    </div>
  </div>
</Layout>

</template>

<page-query>
query($id:ID!){
  project:strapiProject(id:$id){
    id
    alt
    title
    content
    color
    categories{
      name
    }
    img480{
      url
    }
    img1024{
      url
    }
    img1920{
      url
    }
    img2560{
      url
    }
  }
}

</page-query>


<script>
import markdownIt from 'markdown-it'
export default {
  name:'Project',
  metaInfo:{
    title:'Project'
  },
  computed:{
    project(){
      return this.$page.project
    },
    srcSet(){
      return `${this.GRIDSOME_API_URL+this.project.img480.url} 480w, ${this.GRIDSOME_API_URL+this.project.img1024.url} 1024w, ${this.GRIDSOME_API_URL+this.project.img1920.url} 1920w, ${this.GRIDSOME_API_URL+this.project.img2560.url} 2560w`
    },
    content(){
      const md=new markdownIt()
      const html=md.render(this.project.content)
      return html
    }
  }
};
</script>

<style>
</style>