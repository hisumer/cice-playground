export class PrintPosts {
  constructor() {}

  async printPost() {
    try {
      const posts = await Promise.all([this.#getPost(1), this.#getPost(2), this.#getPost(3)])
      this.#printResult(posts)
    } catch (err) {
      alert('bad ')
      console.log(err)
    }
  }

  async #getPost(post) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
    const result = await response.json()
    return result
  }

  #printResult(data) {
    const titles = Array.isArray(data) ? data.map(post => post.title) : [data]
    titles.forEach(title => {
      const li = document.createElement('li')
      const postsElement = document.querySelector('#posts')
      li.innerText = title
      postsElement.appendChild(li)
    })
  }
}
