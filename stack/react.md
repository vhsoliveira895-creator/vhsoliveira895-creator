# React

Nível: iniciante. Componentes, estado (`useState`) e lista na tela. Ainda não sou sênior nem “full stack engineer”.

Exemplo: lista de estudos com botão para marcar como feito.

```jsx
import { useState } from "react";

function ListaEstudos() {
  const [itens, setItens] = useState([
    { id: 1, texto: "HTML e CSS", feito: true },
    { id: 2, texto: "JavaScript", feito: false },
    { id: 3, texto: "React", feito: false },
  ]);

  function alternar(id) {
    setItens((atual) =>
      atual.map((item) =>
        item.id === id ? { ...item, feito: !item.feito } : item
      )
    );
  }

  return (
    <ul>
      {itens.map((item) => (
        <li key={item.id}>
          <button type="button" onClick={() => alternar(item.id)}>
            {item.feito ? "OK" : "Pendente"} — {item.texto}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListaEstudos;
```

Arquivo: [exemplos/ListaEstudos.jsx](./exemplos/ListaEstudos.jsx)

Estou praticando React no VS Code. Quando o projeto React estiver no GitHub com README, eu coloco o link aqui.
