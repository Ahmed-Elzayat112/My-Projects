const addForm = document.querySelector('.add');
const ul = document.querySelector('.list');
const search = document.querySelector('.search input');


const addList = (todo) => {
    const li = `
        <li class="list-group-item justify-content-between d-flex align-items-center">
            <span>${todo}</span>
            <i class="fa-solid fa-trash delete"></i>
        </li>
    `;
    ul.innerHTML += li;
};

addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = addForm.Add.value.trim();

    if (todo.length) {
        addList(todo);
    }
    addForm.reset();
});

ul.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const searchList = (term) => {
    console.log(
      Array.from(ul.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add("filtered"))
    );
        
    
    Array.from(ul.children)
      .filter((todo) => todo.textContent.toLowerCase().includes(term))
      .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    searchList(term);
});