<template>
  <span>{{ message }}</span>
</template>

<script>
export default {
  data() {
    return {
      message: "Preparing Vue!"
    };
  },
  created() {
    this.message = "Hello from Vue!";
  }
};
</script>
