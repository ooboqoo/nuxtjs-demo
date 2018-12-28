<template>
  <div>
    <h1>Play Vuex</h1>
    <div>
      <h4>root state</h4>
      state.counter {{ $store.state.counter }}
      <button @click="$store.commit('increment')"> +1 </button>
    </div>
    <div>
      <h4>modules/todos</h4>
      state.todos {{ $store.state.todos }}
    </div>
    <div>
      <h4>modules/simpleModule</h4>
      state.counter {{ $store.state.simpleModule.counter }}
      <button @click="$store.commit('simpleModule/increment')"> +1 </button>
    </div>
    <div>
      <h4>modules/anotherModule</h4>
      state.counter {{ $store.state.anotherModule.counter }}
      <button @click="$store.commit('anotherModule/increment')"> +1 </button>
    </div>
  </div>
</template>
