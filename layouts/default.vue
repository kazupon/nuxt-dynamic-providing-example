<script lang="ts">
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
import { provide, defineComponent, onUnmounted } from '@nuxtjs/composition-api'
import mitt from 'mitt'
import { Events } from '../helpers/events'
import { EventKey } from '../helpers/keys'

import type { Emitter } from 'mitt'

export default defineComponent({
  components: {
    TheHeader,
    TheFooter
  },
  setup() {
    const emitter = mitt<Events>()

    // provide event emitter for child components
    provide<Emitter<Events>>(EventKey, emitter)

    // lisntening event from child components
    emitter.on('create', (payload: Events['create']) => {
      console.log('create', payload)
      // TODO: something todo ...
    })

    onUnmounted(() => {
      emitter.off('create')
    })

    return {}
  }
})
</script>

<template>
  <div class="container">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
