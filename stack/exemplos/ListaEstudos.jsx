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
