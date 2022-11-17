<template>
  <div>{{data.pagenewUiCollection.items[0].page}}</div>
  <!-- <p v-for="(item, i) in items " :key="i">{{item.slug}}</p> -->
</template>

<script setup>

const query = gql`
  query getPL {
    pagenewUiCollection {
      items {
        page
      }
    }
  }
`
const { data }  = await useAsyncQuery(query, { limit: 2 })

</script>


