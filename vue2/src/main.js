import Vue from "vue";

var app = new Vue({
  data: {
    todos: [],
    title: "Vuejs Test sample"
  },
  watch: {
    todos: {
      handler: function(data) {
        console.log(data);
      },
      deep: true
    }
  },

  methods: {
    add: function(a, b) {
      return a + b;
    }
  }
});

app.$mount("#app");

export default app;
