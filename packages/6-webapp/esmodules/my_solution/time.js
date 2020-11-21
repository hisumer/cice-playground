export default function () {
  console.log('imported time.js')
}

export function getTime() {
  // let today = new Date()
  let time = Date.now()
  console.log(time)
}
