<template>
  <ul class="flex flex-col">
    <li class="text-xl mx-6 my-2" v-for="(item, i) in data.pagepersonalLoanCollection.items" :key="i" >
      <NuxtLink :to="`/personal-loan/${item.slug}`">{{item.slug}}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>

const personalLoans = gql`
  query {
    pagepersonalLoanCollection {
      items {
        slug
      }
    }
  }
`
const { data } = await useAsyncQuery(personalLoans)


</script>


