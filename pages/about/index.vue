<script lang="ts">
import { ref, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const msg = ref('hello about page!')
    return { msg }
  }
})
</script>

<template>
  <div class="about">
    <h3>This is about page</h3>
    <p>{{ msg }}</p>
  </div>
</template>