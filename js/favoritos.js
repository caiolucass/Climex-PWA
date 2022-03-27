const taskList = document.getElementById('lists-container');

window.addEventListener('load', () => {
  const lists = getListsFromLocalStorage();

  if (!lists.length) return emptyStateMessage();

  lists.forEach((list) => {
    const listElement = createList(list);
    taskList.appendChild(listElement);
  });
});

function emptyStateMessage() {
  const emptyState = document.createElement('section');
  emptyState.classList.add('empty-state');
  emptyState.innerHTML = `
    <h2>Você ainda nao tem um clima favorito adicionado.</h2>
    <p>Clique no botao para adicionar aos favoritos.</p>
    <a class="primary-btn" href="/new-list.html">Favoritos</a>
  `;
  taskList.remove();
  document.body.appendChild(emptyState);
}

function createList(list) {
  const li = document.createElement('li');
  li.setAttribute(
    'onclick',
    `window.location.href = '/list.html?id=${list.id}'`,
  );
  li.innerHTML = `
      <section class="list-data">
        <h2 class="limitted-text">${list.name}</h2>
        <p class="limitted-text">${list.description}</p>
      </section>
      <aside class="list-actions">${list.tasks.length || 0}</aside>
    `;
  return li;
}