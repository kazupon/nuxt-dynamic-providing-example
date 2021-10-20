let transactionId = 0

export async function getTransactionId() {
  return new Promise<number>((resolve) => {
    console.log('get transaction id', transactionId)
    setTimeout(() => {
      transactionId++
      resolve(transactionId)
    }, 1000)
  })
}
