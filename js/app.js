// Variables

const expenseAddForm = document.querySelector('form#agregar-gasto');
const expenseList = document.querySelector('#gastos ul'); 


// Events

function eventListeners (){
    document.addEventListener('DOMContentLoaded', askBudget )
};

eventListeners();


// Classes

class UI {
    insertBudget(quantity){

        //extract budget quantity in object
       const {budget, remaining} = quantity;

       document.querySelector('#total').textContent = budget;
       document.querySelector('#restante').textContent = remaining;
    }
}

class Budget {
    constructor(budgetUser){
        this.budget = Number(budgetUser);
        this.remaining = Number(budgetUser);
        this.expense = []; 
    };
};

// Instances


const userInterface = new UI(); 
let budget;


// Functions 

function askBudget (){
    const budgetUser = prompt("¿Cuál es tu presupuesto?");

    // Budget data validation
    if ( budgetUser === "" || budgetUser <= 0 || budgetUser === null || isNaN(budgetUser) ){
        window.location.reload();
    }

    budget = new Budget(budgetUser);

    // insert HTML of the Budget
    userInterface.insertBudget(budget);
};