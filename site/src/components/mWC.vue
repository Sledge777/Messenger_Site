<template>
    <div class="message-container">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <strong>{{ message.sendername }}</strong>: {{ message.content }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['messages'], // Получаем сообщения через props
    mounted() {
    }
  };
  </script>
  
  <style scoped>
  .message-container {
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