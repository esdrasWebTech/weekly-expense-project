// Variables

const expenseAddForm = document.querySelector('form#agregar-gasto');
const expenseList = document.querySelector('#gastos ul'); 


// Events

function eventListeners (){
    document.addEventListener('DOMContentLoaded', askBudget )
};

eventListeners();


// Classes

class Budget {
    constructor(budget){
        this.budget = Number(budget);
        this.remaining = Number(budget);
        this.expense = []; 
    };
};

let budget;


// Functions 

function askBudget (){
    const budgetUser = prompt("¿Cuál es tu presupuesto?");

    // Budget data validation

    if ( budgetUser === "" || budgetUser <= 0 || budgetUser === null || isNaN(budgetUser) ){
        window.location.reload();
    }

    budget = new Budget(budgetUser);
    console.log(budget);
};