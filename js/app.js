// Variables

const expenseAddForm = document.querySelector('form#agregar-gasto');
const expenseList = document.querySelector('#gastos ul'); 


// Events

function eventListeners (){
    document.addEventListener('DOMContentLoaded', askBudget )
};

eventListeners();


// Classes




// Functions 

function askBudget (){
    const budgetUser = prompt("¿Cuál es tu presupuesto?");

    console.log(Number(budgetUser));

    // Budget data validation

    if ( budgetUser === "" || budgetUser <= 0 || budgetUser === null || isNaN(budgetUser) ){
        window.location.reload();
    }
};