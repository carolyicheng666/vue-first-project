<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input v-model="newItem" @keyup.enter="addNew()">
    <ul>
      <li v-for="item in items" :class="{finished: item.isFinished}" @click="toggleFinish(item)">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
import Storage from './storage'
console.log(Storage)
export default {
  data: function() {
    return {
      title: 'title is a todo list',
      items: Storage.fetch(),
      newItem: ''
    }
  },
  watch: {
    items: {
      handler: function(items) {
        Storage.save(items)
      },
      deep: true
    }
  },
  methods: {
    toggleFinish: function(item) {
      item.isFinished = !item.isFinished
    },
    addNew: function() {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
}
.finished {
  text-decoration: underline;
}
li {
  cursor: pointer;
}
</style>
