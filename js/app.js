let costumer = {
    table:'',
    hour:'',
    dishes:[]
}

const btnSaveCostumer = document.querySelector('#guardar-cliente')
btnSaveCostumer.addEventListener('click',saveCostumer)

function saveCostumer() {
    const table = document.querySelector('#mesa').value
    const hour = document.querySelector('#hora').value

    const emptyFields = [table,hour].some( field => field === '')

    if(emptyFields){

        const alertExists = document.querySelector('.alert-danger')
        if(!alertExists){
            const alert = document.createElement('DIV')
            alert.classList.add('d-block','text-center','alert','alert-danger')
            alert.textContent = 'Are Fields are Required'
            document.querySelector('.modal-body form').appendChild(alert)

            setTimeout(() => {
                alert.remove()
            }, 3000);
        }

        return;

      
    }

    costumer = {...costumer, table, hour}
    
    const modalForm = document.querySelector('#formulario')
    const modalBootstrap = bootstrap.Modal.getInstance(modalForm)
    modalBootstrap.hide()

    showOrders()

    getDishes()
}

function showOrders(){
    const hiddenSections = document.querySelectorAll('.d-none')
    hiddenSections.forEach(section => section.classList.remove('d-none'))
}

function getDishes(){
    const url = 'http://localhost:4000/dishes'
    
    fetch(url)
        .then(response => response.json())
        .then(result => showDishes(result))
        .catch(error => console.log(error))
}

function showDishes(dishes){
    const content = document.querySelector('#platillos .contenido')
    
    dishes.forEach(dish => {
        const row = document.createElement('DIV')
        row.classList.add('row')

        const name = document.createElement('DIV')
        name.classList.add('col-md-4')
        name.textContent = dish.name

        row.appendChild(name)
        content.appendChild(row)
    });
}