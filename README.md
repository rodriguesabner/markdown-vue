# WPPConnect Markdown

## Exemplo de uso - JS
```js
 import {FormatMarkdownService} from "wppconnect-markdown/services";

 mounted() {
    formatMarkdownService(this.$refs.message); 
    //vai atualizar todas as msgs existentes
  },
  data: () => {
    return {
      FormatMarkdownService: formatMarkdownService,
      messagesList: [
        "mensagem 0", 
        "*mensagem 1*", 
        "*mensagem 2*", 
        "*mensagem 3*", 
        "*mensagem 4*"
      ],
      message: "",
    }
  },
  methods: {
    handleFormat() {
        const lastIndex = this.messagesList.length - 1;
        formatMarkdownService(null, lastIndex);
    },
    async sendMessage() {
      if (this.message) {
        this.messagesList.push(this.message);
        this.message = "";
        
        this.handleFormat();
      }
    }
  }
```