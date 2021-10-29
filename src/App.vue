<template>
  <div id="app">
    <h1>
      Markdown WPP
    </h1>
    <label>
      Tente escrever uma mensagem utilizando o markdown igual ao do whatsapp
    </label>

    <form @submit.prevent="sendMessage">
      <input
          style="margin-top: 1em"
          placeholder="Escreva a sua mensagem"
          v-model="message"
      />

      <button
          type="submit"
          style="margin-left: 10px; padding: 10px"
      >
        Enviar Mensagem
      </button>
    </form>

    <ul>
      <li
          ref="message"
          class="textRef"
          v-for="(messages, index) of messagesList"
          :key="index"
      >
        {{ messages }}
      </li>
    </ul>
  </div>
</template>

<script>

import formatWppMarkdown from "./util/markdown";

export default {
  name: 'App',
  data: () => {
    return {
      messagesList: [],
      message: "",
      formatWppMarkdown
    }
  },
  // **oi**
  watch: {},
  methods: {
    sendMessage() {
      this.messagesList.push(this.message);
      this.message = "";
      this.formatWppMarkdown(this.$refs.message)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
}

input {
  padding: 10px;
  outline: 0;
}
</style>
