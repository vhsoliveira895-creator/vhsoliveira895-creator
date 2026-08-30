# JavaScript

Nível: iniciante. Uso JS no front (eventos, DOM, arrays) e para lógica simples.

Exemplo: filtrar produtos e formatar preço.

```javascript
const produtos = [
  { nome: "Fone Bluetooth", preco: 89.9 },
  { nome: "Cabo USB-C", preco: 19.9 },
  { nome: "Carregador", preco: 49.9 },
];

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function buscar(lista, texto) {
  const q = texto.trim().toLowerCase();
  return lista.filter((item) => item.nome.toLowerCase().includes(q));
}

const resultado = buscar(produtos, "cabo");
console.log(resultado.map((p) => `${p.nome} — ${formatarPreco(p.preco)}`));
```

Arquivo: [exemplos/javascript.js](./exemplos/javascript.js)

Onde já usei: landing [CellTech](https://github.com/vhsoliveira895-creator/meu-primeiro-site.) (`js/`).
