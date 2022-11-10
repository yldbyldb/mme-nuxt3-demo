<template>
  <p>{{data}}</p>
  <!-- <p v-for="(item, i) in items " :key="i">{{item.slug}}</p> -->
</template>

<script lang="ts" setup>
// const { $contentfulClient } = useNuxtApp()
// const { data } = await useAsyncData('entries', async () => {
//   return await $contentfulClient.getEntries({
//     limit: 10,
//   })
// })
// console.log('====================================');
// console.log(data.value.items);
// console.log('====================================');
// const items = data.value.items

// // const { $assertion } = useNuxtApp()
// $assertion.assertEntries(items)
// const query = gql`
//   query getShips($limit: Int!) {
//     ships(limit: $limit) {
//       id
//       name
//     }
//   }
// `
const query = gql`
  query getPL {
    pagenewUiCollection {
      items {
        page
      }
    }
  }
`
const  data  = await useAsyncQuery(query, { limit: 2 })
// const items = data.pagepersonalLoanCollection.items

console.log('====================================');
console.log(data + "!!!");
console.log('====================================');
</script>


