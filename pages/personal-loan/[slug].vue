<template>
  <h1 class="text-3xl m-4">Personal Loan:</h1>
  <h2 class="text-xl m-2">{{ data.pagepersonalLoan.calculator.header }}</h2>
  <p class="text-l m-1"></p>
</template>
<script setup>
import { ref } from "vue";

const route = useRoute();
const slug = ref(route.params.slug);
const personalLoanContent = gql`
  query getPLContent($slug: String!) {
    pagepersonalLoan (slug: $slug) {
      calculator {
        header
        subheader
      }
    }
  }
`
const variables = { slug: slug.value }
const { data }  = await useAsyncQuery(personalLoanContent, variables);
console.log('====================================');
console.log(variables);
console.log('====================================');
</script>