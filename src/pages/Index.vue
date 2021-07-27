<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">{{global.title}}</h1>
        <h2 class="hero-subtitle">
          {{global.subtitle}}
        </h2>
      </div>
      <!-- projects -->
      <div class="projects" data-v-50cbff3e="">
        <div class="project" data-v-50cbff3e=""
          v-for="project in projects"
          :key="project.id"
        >
          <g-link
            :to="`/projects/${project.id}`"
            class="project-link"
            data-v-50cbff3e=""
            ><img
              :alt="project.alt"
              :src="project.img2560.url"
              width="2560"
              :data-src="project.img2560.url"
              :data-srcset="srcSet(project)"
              data-sizes="(max-width: 2560px) 100vw, 2560px"
              class="thumbnail g-image g-image--lazy g-image--loaded"
              data-v-50cbff3e=""
              :srcset="srcSet(project)"
              sizes="(max-width: 2560px) 100vw, 2560px"
            /><noscript data-v-50cbff3e=""
              ><img
                :src="project.img2560.url"
                class="thumbnail g-image g-image--loaded"
                width="2560"
                :alt="project.alt"
            /></noscript>
            <h3 class="project-title" data-v-50cbff3e="">{{project.title}}</h3>
            <div class="categories" data-v-50cbff3e="">
              <span
                v-for="category in project.categories"
                :key="category.name"
               class="category" data-v-50cbff3e="">{{category.name}}</span
              >
            </div>
          </g-link>
        </div>
      </div>
    </div>

    <!-- journals -->
    <div data-v-460714ac="">
      <div class="latest-journals-heading container" data-v-460714ac="">
        <span class="label" data-v-460714ac="">Latest and greatest</span>
      </div>
      <div class="latest-journals" data-v-460714ac="">
        <div class="container" data-v-460714ac="">
          <g-link
            :to="`/journals/${journal.id}`"
            class="journal"
            data-v-460714ac=""
            v-for="journal in journals"
            :key="journal.id"
          >
            <h3 class="journal-title" data-v-460714ac="">
              {{journal.title}}
            </h3> </g-link
          >
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query{
  projects:allStrapiProject{
    edges{
      node{
        id
        alt
        title
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
  }
  journals:allStrapiJournal{
    edges{
      node{
				id
        title
      }
    }
  }
  globals:allStrapiGlobal{
    edges{
      node{
        title
        subtitle
      }
    }
  }
}
</page-query>



<script>
export default {
  name:'Home',
  metaInfo: {
    title: "Home",
  },
  computed:{
    projects(){
      return this.$page.projects.edges.map(edge=>edge.node)
    },
    journals(){
      return this.$page.journals.edges.map(edge=>edge.node)
    },
    global(){
      return this.$page.globals.edges[0].node
    }
  },
  methods:{
    srcSet(project){
      return `${project.img480.url} 480w, ${project.img1024.url} 1024w, ${project.img1920.url} 1920w, ${project.img2560.url} 2560w`
    },
  }
};
</script>

<style>

</style>
