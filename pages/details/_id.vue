<script lang="ts">
import { useRoute, defineComponent, watch, inject, ref, Ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute()
    type T = Ref<{ id: string, value: Record<string, any>}>
    const scopeValue = inject<T>('transaction-account', ref({ id: '', value: {} }))
    watch(scopeValue, (val, old) => {
      console.log('watch scopeValue', val, old)
    })
    console.log('route', route, scopeValue)
    return { scopeValue }
  }
})
</script>

<template>
  <p>This is inject value: {{ scopeValue }}</p>
</template>
