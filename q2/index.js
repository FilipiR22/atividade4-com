const select = document.querySelector('#select_number')
const campos = document.querySelector('.campos')

select.addEventListener('change',(e)=>{
    campos.innerHTML=' '
    for(let i=0;i<e.target.value;i++){
        const input = document.createElement('input')
        campos.appendChild(input)
    }
})