<template>
  <div>{{data}}</div>
  <!-- <p v-for="(item, i) in items " :key="i">{{item.slug}}</p> -->
</template>

<script lang="ts" setup>

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


