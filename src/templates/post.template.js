export function renderPost(post, optins = {}) {
    const tag = post.type === 'news'
        ? '<li class="tag tag-blue tag-rounded">Новость</li>'
        : '<li class="tag tag-grey tag-rounded">Заметка</li>'

    const button = (JSON.parse(localStorage.getItem('favorites')) || []).includes(post.id)
        ? `<button class="button-round button-small button-danger"  data-id="${post.id}">Удалить</button>`
        : `<button class="button-round button-small button-primary"  data-id="${post.id}">Сохранить</button>` 

    return `<div class="panel">
    <div class="panel-head">
      <p class="panel-title">${post.title}</p>
      <ul class="tags">
        ${tag}
      </ul>
    </div>
    <div class="panel-body">
      <p class="multi-line">${post.fulltext}</p>
    </div>
    <div class="panel-footer w-panel-footer">
      <small>${post.date}</small>
      ${optins.withButton ? button : ''}
    </div>
  </div>`
}