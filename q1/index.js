/*

VERSÃO 1

const title_table_book = document.querySelector('.title_table_book')
const title_table_pag = document.querySelector('.title_table_pag')
const td = Array.from(document.querySelectorAll('td'))

title_table_book.addEventListener('click', () => {
    Array.from(document.querySelectorAll('td')).forEach((element) => {
        element.style.backgroundColor = element.classList.contains('title_book') ? 'blue' : element.style.backgroundColor;
    })
})

title_table_pag.addEventListener('click', () => {
    Array.from(document.querySelectorAll('td')).forEach((element) => {
        element.style.backgroundColor = element.classList.contains('pag_book') ? 'green' : element.style.backgroundColor;
    })
})

td.forEach((e)=>{
    e.addEventListener('click',()=>{
        td.forEach((e)=>{
            e.style.backgroundColor='initial'
        })
    })
})

*/

/* versão 2 */

const title_table_book = document.querySelector('.title_table_book');
const title_table_pag = document.querySelector('.title_table_pag');
const tdElements = document.querySelectorAll('td');

const updateBackgroundColor = (className, color) => {
    tdElements.forEach(element => {
        element.style.backgroundColor = element.classList.contains(className) ? color : element.style.backgroundColor;
    });
};

title_table_book.addEventListener('click', () => {
    updateBackgroundColor('title_book', 'blue');
});

title_table_pag.addEventListener('click', () => {
    updateBackgroundColor('pag_book', 'green');
});

tdElements.forEach(element => {
    element.addEventListener('click', () => {
        tdElements.forEach(td => {
            td.style.backgroundColor = 'initial';
        });
    });
});