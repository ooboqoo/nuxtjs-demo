/*!
 * 这里曾尝试用 'simple-module.js' 的命名方式, 但这样使用时就非常尴尬 `$store.state['simple-module'].counter`
 */

export const state = () => ({
  counter: 10
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
