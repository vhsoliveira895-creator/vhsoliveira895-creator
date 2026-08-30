# SQL

Nível: iniciante. `SELECT`, `WHERE`, `JOIN` simples e agregação. Não é DBA.

Exemplo: estoque e vendas (PostgreSQL / SQLite).

```sql
CREATE TABLE produtos (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL,
  preco NUMERIC(10, 2) NOT NULL
);

CREATE TABLE vendas (
  id INTEGER PRIMARY KEY,
  produto_id INTEGER NOT NULL,
  quantidade INTEGER NOT NULL,
  FOREIGN KEY (produto_id) REFERENCES produtos (id)
);

INSERT INTO produtos (id, nome, preco) VALUES
  (1, 'Fone Bluetooth', 89.90),
  (2, 'Cabo USB-C', 19.90);

INSERT INTO vendas (id, produto_id, quantidade) VALUES
  (1, 1, 2),
  (2, 2, 5);

SELECT
  p.nome,
  SUM(v.quantidade) AS unidades,
  SUM(v.quantidade * p.preco) AS faturamento
FROM vendas v
JOIN produtos p ON p.id = v.produto_id
GROUP BY p.nome
ORDER BY faturamento DESC;
```

Arquivo: [exemplos/consulta.sql](./exemplos/consulta.sql)
