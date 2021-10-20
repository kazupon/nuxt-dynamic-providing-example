<script lang="ts">
import { ref, inject, provide, defineComponent, useFetch, watch } from '@nuxtjs/composition-api'
import { EventKey } from '../helpers/keys'
import { getTransactionId } from '../helpers/service'

export default defineComponent({
  setup(props) {
    console.log('Accounts.vue setup', props)

    // use event emitter to emit event for layout component
    const emitter = inject(EventKey)
    if (emitter == null) {
      throw new Error('Need to provide the event emitter layout components')
    }

    // WIP: we need to resolve trasaction id correctly ...
    const _transactionId = ref<number>(-1)
    const transactionId = ref<number>(0)

    const { fetch, fetchState } = useFetch(async () => {
      _transactionId.value = await getTransactionId()
    })

    watch(fetchState, (val, old) => {
      if (!val.pending) {
        transactionId.value = _transactionId.value
      }
    })
    console.log('transctionId', transactionId.value, fetchState)

    // provide something data with transaction id
    const somethingData = {
      account: '0x1234567890123456789012345678901234567890', 
    }
    // WIP: we need to resolve trasaction id correctly ...
    provide(`transaction_${transactionId.value}`, somethingData)

    const name = ref('')
    const accountIds = ref([1, 2, 3])

    // create account requesting ...
    const onCreateAccount = () => {
      emitter.emit('create', {
        account: '0x1234567890123456789012345678901234567890',
        transaction: transactionId.value,
        name: name.value
      })
    }

    return { name, accountIds, transactionId, onCreateAccount }
  }
})
</script>

<template>
  <div class="accounts">
    <h3>This is accounts creating page</h3>
    <form>
      <input type="input" v-model="name" />
    </form>
    <ul>
      <li v-for="id in accountIds" :key="id">
        <NuxtChild :id="id" :transaction="transactionId" />
      </li>
    </ul>
    <button type="button" @click="onCreateAccount">create</button>  
  </div>
</template>