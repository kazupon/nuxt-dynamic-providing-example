<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, { emit }) {
    const msg = ref('This is top page')
    emit('transaction', 'home')
    return { msg }
  }
})
</script>

<template>
  <h2>{{ msg }}</h2>
</template>
