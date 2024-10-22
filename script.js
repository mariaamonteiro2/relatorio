// Relatório de Turnos
document.getElementById('turno-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const turno = document.getElementById('turno').value;
    const tarefas = document.getElementById('tarefas').value;
    const materiais = document.getElementById('materiais').value;

    const lista = document.getElementById('lista-relatorios');
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>Turno:</strong> ${turno}<br>
        <strong>Tarefas:</strong> ${tarefas}<br>
        <strong>Materiais Usados:</strong> ${materiais}
    `;
    lista.appendChild(li);

    document.getElementById('turno-form').reset();
});

// Gestão de Estoque
const estoque = {};

// Atualiza a tabela de estoque
function atualizarTabelaEstoque() {
    const tabelaEstoque = document.getElementById('tabela-estoque');
    tabelaEstoque.innerHTML = '';  // Limpa a tabela antes de adicionar os novos dados

    for (const material in estoque) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${material}</td>
            <td>${estoque[material]}</td>
            <td>
                <button onclick="removerMaterial('${material}')">Remover</button>
            </td>
        `;
        tabelaEstoque.appendChild(tr);
    }
}

// Adiciona ou atualiza materiais no estoque
document.getElementById('estoque-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeMaterial = document.getElementById('material-nome').value;
    const quantidadeMaterial = parseInt(document.getElementById('material-quantidade').value);

    // Verifica se o material já existe no estoque e atualiza a quantidade
    if (estoque[nomeMaterial]) {
        estoque[nomeMaterial] += quantidadeMaterial;  // Soma a nova quantidade
    } else {
        estoque[nomeMaterial] = quantidadeMaterial;  // Adiciona um novo material
    }

    atualizarTabelaEstoque();

    // Limpa o formulário de estoque
    document.getElementById('estoque-form').reset();
});

// Remove materiais do estoque
function removerMaterial(material) {
    delete estoque[material];
    atualizarTabelaEstoque();
}