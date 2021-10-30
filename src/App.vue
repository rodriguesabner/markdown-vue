<template>
  <div id="app">
    <div class="top-content">
      <h1>
        Markdown WPP
      </h1>
      <label>
        Tente escrever uma mensagem utilizando o markdown igual ao do whatsapp
      </label>
    </div>

    <form @submit.prevent="sendMessage">
      <input
          style="margin-top: 1em"
          placeholder="Escreva a sua mensagem"
          v-model="message"
      />

      <button
          type="submit"
          style="margin-left: 10px; padding: 10px; cursor:pointer;"
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
          :id="index"
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
  mounted() {
    formatWppMarkdown(this.$refs.message);
  },
  data: () => {
    return {
      messagesList: ["oi", "*oi*", "*oi*", "*oi*", "*oi*"],
      message: "",
      formatWppMarkdown
    }
  },
  watch: {},
  methods: {
    handleFormat(idElement) {
      setTimeout(() => {
        formatWppMarkdown(null, idElement);
      }, 10);
    },
    async sendMessage() {
      if (this.message) {
        this.messagesList.push(this.message);
        this.message = "";

        const lastIndex = this.messagesList.length - 1;
        this.handleFormat(lastIndex);
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  background: #fff;
  overflow: hidden;
}

#app {
  display: block;
  overflow: auto;
  height: 100%;
  max-height: 100vh;

  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 540px;
  margin: 0 auto;
}

.top-content {
  padding: 2em;
  color: #333;
}

h1 {
  color: #42b983;
  font-family: "Roboto Mono", serif;
}

button {
  background: #42b983;
  border-radius: 4px;
  outline: 0;
  border: 0;
  padding: 0 2em !important;
  height: 54px;
  color: #000;
  font-weight: 500;
  text-transform: uppercase;
}

input {
  padding: 0 10px;
  outline: 0;
  background: transparent;
  border: 2px solid #F2F4F6;
  border-radius: 4px;
  height: 54px;
  color: #333;
}

ul {
  width: 100%;
  list-style-type: none;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 3em;
}

li {
  width: 50%;
  text-align: start;
  color: #333;
  padding: 10px;
  background: #F2F4F6;
  border-radius: 4px;
  margin: auto;
  margin-top: 1em;
}
</style>
