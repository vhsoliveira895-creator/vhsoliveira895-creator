pedidos = [
    {"produto": "Fone", "qtd": 2, "preco": 89.9},
    {"produto": "Cabo", "qtd": 1, "preco": 19.9},
]


def total_pedido(itens):
    return sum(item["qtd"] * item["preco"] for item in itens)


def resumo(itens):
    linhas = [f"{i['qtd']}x {i['produto']}" for i in itens]
    return " | ".join(linhas), total_pedido(itens)


if __name__ == "__main__":
    texto, valor = resumo(pedidos)
    print(texto)
    print(f"Total: R$ {valor:.2f}")
