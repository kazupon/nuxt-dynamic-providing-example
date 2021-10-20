<script lang="ts">
import { ref, defineComponent, inject, watchEffect } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true
    },
    transaction: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const data = inject(`transaction_${props.transaction}`, null)
    console.log('inject data with transaction id', data)

    const msg = ref(`This is account ${props.id} (transaction: ${props.transaction})`)
    return { msg }
  }
})
</script>

<template>
  <div>
    <p><NuxtLink :to="`/details/${id}`">{{ msg }}</NuxtLink></p>
  </div>
</template>
