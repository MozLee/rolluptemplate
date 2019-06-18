console.log(`hello word`)
console.log(`gggg`)
const getName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name)
    }, 3000)
  })
}
(async function () {
  let a = await getName('lixin')
  let b = await getName('ddddd')
  console.log(a, b)
})()
