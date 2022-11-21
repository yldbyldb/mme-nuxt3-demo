<template>
  <NuxtLayout name="custom">
    <h1 class="text-3xl m-4">Personal Loan:</h1>
    <h2 class="text-xl m-2">{{ pageData.page }} ---> {{ pageData.calculator.header }} ---> {{ pageData.calculator.subheader }}</h2>
    <p class="text-l m-1"></p>
    <img :src="pageData.headerWithImage.img.url" alt="">
  </NuxtLayout>
</template>
<script setup>
import { ref } from "vue";

const route = useRoute();
const slug = ref(route.params.slug);
const personalLoanContent = gql`
  query getPLContent($slug: String!) {
    pagepersonalLoanCollection (where: {slug: $slug}){
      items {
        page
        calculator {
          header
          subheader
        }
        headerWithImage {
          img {
            url
          }
        }
      }
    }
  }
`
const variables = { slug: slug.value }
const { data }  = await useAsyncQuery(personalLoanContent, variables);
const pageData = data.value.pagepersonalLoanCollection.items[0]
console.log('====================================');
console.log(data.value.pagepersonalLoanCollection.items[0].page);
console.log('====================================');

</script>

<script>
export default {
  layout: false,
};
</script>