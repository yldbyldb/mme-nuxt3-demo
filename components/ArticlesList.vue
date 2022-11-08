<script setup>
const { $contentfulClient } = useNuxtApp()
const { data } = await useAsyncData('entries', async () => {
  return await $contentfulClient.getEntries({
    limit: 10,
  })
})
console.log('====================================');
console.log(data.value.items);
console.log('====================================');
const items = data.value.items

// const { $assertion } = useNuxtApp()
// $assertion.assertEntries(items)

</script>

<template>

  <h2>{{items[0].fields.content}}</h2>
</template>


