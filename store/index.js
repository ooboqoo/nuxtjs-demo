/*!
 * 一级目录必须带 index.js
 * 虽然可以将 actions mutations 单独拆分成文件也能正确识别，但这样做，同级的其他文件就不会被识别未模块了
 */

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
