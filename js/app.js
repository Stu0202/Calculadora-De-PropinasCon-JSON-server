let costumer = {
    hour:'',
    table:'',
    plates:[]
}

const btnSaveCostumer = document.querySelector('#guardar-cliente')
btnSaveCostumer.addEventListener('click',saveCostumer)

function saveCostumer() {
    const table = document.querySelector('#mesa').value
    const hour = document.querySelector('#hora').value

    const emptyFields = [table,hour].some( field => field === '')

    if(emptyFields){
        console.log('There are empty fields');
    }
}