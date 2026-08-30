# HTML5

Nível: iniciante. Estruturo páginas com seções, links, formulário e mídia.

Exemplo: esqueleto de uma landing (sem CSS).

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CellTech — exemplo</title>
  </head>
  <body>
    <header>
      <a href="#inicio">CellTech</a>
      <nav>
        <a href="#produtos">Produtos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
    <main id="inicio">
      <h1>Acessórios para o seu celular</h1>
      <p>Página de prática com HTML semântico.</p>
    </main>
    <section id="contato">
      <h2>Contato</h2>
      <form>
        <label for="nome">Nome</label>
        <input id="nome" name="nome" type="text" required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  </body>
</html>
```

Arquivo: [exemplos/pagina.html](./exemplos/pagina.html)

Onde já usei: [CellTech](https://github.com/vhsoliveira895-creator/meu-primeiro-site.) (`index.html`).
