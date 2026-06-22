function addEnvolvido(){
  const list = document.getElementById('envolvidos-list');
  if(!list) return;
  const row = document.createElement('div');
  row.className = 'envolvido-row';
  row.innerHTML = `<input name="envolvido_tipo[]" list="tipos-env" placeholder="Tipo: Motorista, Ajudante..."><input name="envolvido_nome[]" list="nomes" placeholder="Nome"><button type="button" onclick="this.parentElement.remove()">×</button>`;
  list.appendChild(row);
}
window.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('envolvidos-list');
  if(list && list.children.length === 0){ addEnvolvido(); }
});
