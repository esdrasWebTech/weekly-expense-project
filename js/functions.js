
// Loading document

function eventListeners(){
    document.addEventListener('DOMContentLoaded', getBudget);
};

// Get the user budget

function getBudget (){
    prompt('¿Cuál es tu presupuesto?');
};

export default eventListeners;