let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate() {
    console.log('beforeCreate', this.message)
  },
  created() {
    console.log('created', this.message)
  },
  beforeMount() {
    console.log('beforeMount', this.$el)
  },
  mounted() {
    console.log('mounted', this.$el)
  },
  beforeUpdate() {
    console.log('beforeUpdated() function called!')
  },
  updated() {
    console.log('updated() function called!')
  },
  beforeUnmount() {
    console.log('beforeUnmount() function called!')
  },
  unmounted() {
    console.log('unmounted() function called!')
  }
})

vm.mount('#app')
// setTimeout(() => {
//   vm.mount('#app')
// }, 3000)
