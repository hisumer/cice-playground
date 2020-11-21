// export default function () {
//     return Promise('imported prompt.js')
// }

export function loadModule() {
  let modulePath = prompt('Which module to load?')

  $('.app-img-404').fadeOut()
  $('.app-img-run').fadeIn()

  import('./' + modulePath + '.js')
    .then(obj => {
      obj.default()
    })
    .catch(err => {
      $('.app-img-run').fadeOut()
      $('.app-img-404').fadeIn()
      let msg = typeof err === 'string' ? msg : 'err import module'
      alert(msg)
      //   console.log(err)
    })
}
