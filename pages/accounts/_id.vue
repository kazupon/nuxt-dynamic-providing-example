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
    console.log('props', props)
    const data = inject(`transaction_${props.id}`, null)
    console.log('data', data)

    const msg = ref(`This is account ${props.id} (transaction: ${props.transaction})`)
    watchEffect(() => {
      console.log('efferct', props.transaction)
    })
    return { msg }
  }
})
</script>

<template>
  <div>
    <p><NuxtLink :to="`/details/${id}`">{{ msg }}</NuxtLink></p>
  </div>
</template>
