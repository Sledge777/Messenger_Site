<template>
  <div class="wrappe">
    <div v-for="(message, index) in messages" :key="index" class="message">
      <strong>{{ message.sendername }}</strong>: {{ message.content }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['messages'],
  mounted() {
  }
};
</script>

<style scoped>
.wrappe {
  overflow-y: auto;
  flex-grow: 1;
  padding: 10px;
}

.message {
  margin-bottom: 10px;
  background-color: #444;
  padding: 5px;
  border-radius: 5px;
}
</style>