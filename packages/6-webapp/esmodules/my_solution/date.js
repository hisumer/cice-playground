export default function () {
  console.log('imported date.js')
}

export function getTime() {
  let today = new Date()
  let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  console.log(date)
}
