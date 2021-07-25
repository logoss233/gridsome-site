<template>
  <Layout>
    <div data-v-da896d1e="" class="container">
      <div data-v-da896d1e="" class="journal-hero">
        <h1 data-v-da896d1e="" class="journal-header">
          a wise person once said...
        </h1>
      </div>
    </div>
    <a
      data-v-da896d1e=""
      href="/journal/gridsome-forestry-cms/"
      class="journal-post"
      v-for="journal in journals"
      :key="journal.id"
    >
      <div data-v-da896d1e="" class="container journal">
        <h2 data-v-da896d1e="" class="journal-title">
          {{journal.title}}
        </h2>
        <p data-v-da896d1e="" class="journal-excerpt">
          {{journal.excerpt}}
        </p>
      </div>
    </a>
  </Layout>
</template>

<page-query>
query{
  journals:allJournal{
    edges{
      node{
				id
        title
        excerpt
      }
    }
  }
}
</page-query>


<script>
export default {
  name: "Journals",
  metaInfo: {
    title: "Journal",
  },
  computed: {
    journals() {
      return this.$page.journals.edges.map((edge) => edge.node);
    },
  },
};
</script>

<style>
</style>