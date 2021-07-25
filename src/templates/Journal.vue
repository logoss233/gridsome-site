<template>
  <Layout>
    <div data-v-2a0eef53="" class="journal">
      <div data-v-2a0eef53="" class="container journal-container">
        <div data-v-2a0eef53="" class="journal-header">
          <h1 data-v-2a0eef53="" class="journal-title">Gridsome with Forestry CMS</h1>
          <div data-v-2a0eef53="" class="journal-meta">
            <div data-v-2a0eef53="" class="journal-author"><span data-v-2a0eef53="" class="label">Author</span><span
                data-v-2a0eef53="" class="author-name">Nichlas W. Andersen</span></div>
            <div data-v-2a0eef53="" class="journal-date"><span data-v-2a0eef53="" class="label">Date</span>
              <div data-v-2a0eef53="">7. June 2019</div>
            </div>
            <div data-v-2a0eef53="" class="journal-time"><span data-v-2a0eef53="" class="label">Time</span><span
                data-v-2a0eef53="">1 min read</span></div>
          </div>
        </div>
        <div data-v-2a0eef53="" class="journal-content">
          <h4 id="use-forestry-as-a-cms-for-gridsome"><a href="#use-forestry-as-a-cms-for-gridsome"
              aria-hidden="true"><span class="icon icon-link"></span></a>Use Forestry as a CMS for Gridsome</h4>
          <p><a href="https://forestry.io" target="_blank" rel="nofollow noopener noreferrer">Forestry</a> is a
            git-based headless CMS that allows editorial teams to work on Jamstack sites.</p>
          <p>It comes with a slick user interface that empowers editors to edit CommmonMark, YAML, and JSON files.</p>
          <p>Forestry UI was designed by <strong>Nichlas W. Andersen</strong>.</p>
          <p>You can import this starter to Forestry and start editing and creating posts or projects right away.</p>
          <p>Forestry also comes with instant previews, for you to preview your content before publishing.</p>
          <p>When you save content in <strong>Forestry</strong>, it's committed back to your Git repository. If you link
            your repository to a service like <strong>Netlify</strong> or <strong>Vercel</strong>, on every push, your
            site will be deployed over to a CDN network.</p>
          <p>Enjoy the best development and user experience! 🚀</p>
          <p><img class="g-image g-image--lazy g-image--loaded"
              src="/assets/static/ian-dooley-281897-unsplash.42db587.4ee4f858cbb8392c2cc4019598c07dcd.jpg" width="2560"
              data-srcset="/assets/static/ian-dooley-281897-unsplash.82a2fbd.4ee4f858cbb8392c2cc4019598c07dcd.jpg 480w, /assets/static/ian-dooley-281897-unsplash.cbab2cf.4ee4f858cbb8392c2cc4019598c07dcd.jpg 1024w, /assets/static/ian-dooley-281897-unsplash.2665e34.4ee4f858cbb8392c2cc4019598c07dcd.jpg 1920w, /assets/static/ian-dooley-281897-unsplash.42db587.4ee4f858cbb8392c2cc4019598c07dcd.jpg 2560w"
              data-sizes="(max-width: 2560px) 100vw, 2560px"
              data-src="/assets/static/ian-dooley-281897-unsplash.42db587.4ee4f858cbb8392c2cc4019598c07dcd.jpg"
              srcset="/assets/static/ian-dooley-281897-unsplash.82a2fbd.4ee4f858cbb8392c2cc4019598c07dcd.jpg 480w, /assets/static/ian-dooley-281897-unsplash.cbab2cf.4ee4f858cbb8392c2cc4019598c07dcd.jpg 1024w, /assets/static/ian-dooley-281897-unsplash.2665e34.4ee4f858cbb8392c2cc4019598c07dcd.jpg 1920w, /assets/static/ian-dooley-281897-unsplash.42db587.4ee4f858cbb8392c2cc4019598c07dcd.jpg 2560w"
              sizes="(max-width: 2560px) 100vw, 2560px"><noscript><img class="g-image g-image--lazy g-image--loaded"
                src="/assets/static/ian-dooley-281897-unsplash.42db587.4ee4f858cbb8392c2cc4019598c07dcd.jpg"
                width="2560"></noscript></p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id:ID!){
  journal(id:$id){
    id
    title
  }
}

</page-query>


<script>
export default {
  name:'Journal',
  metaInfo:{
    
  }
}
</script>

<style>

</style>