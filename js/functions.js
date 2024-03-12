
// Loading document

function eventListeners(){
    document.addEventListener('DOMContentLoaded', getBudget);
};

// Get the user budget

function getBudget (){
    const budget = Number(prompt('¿Cuál es tu presupuesto?'));


    //Budget validation
    if( budget === '' || budget === null || isNaN(budget) || budget <= 0){
        window.location.reload();
    }else{
        console.log( budget );
    }
};

export default eventListeners;