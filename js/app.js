// Variables

const expenseForm = document.querySelector('form#agregar-gasto');
const expenseList = document.querySelector('#gastos ul'); 
const primaryContent = document.querySelector('div.contenido.primario');


// Events

function eventListeners (){
    document.addEventListener('DOMContentLoaded', askBudget )
    expenseForm.addEventListener('submit', addExpense);
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

    alertMessage(message, type){

        const containerMessage = document.createElement('div');
        containerMessage.classList.add('text-center', 'alert');

        //validating type message 

        if (type == 'error'){
            containerMessage.classList.add('alert-danger');
        }else{
            containerMessage.classList.add('alert-success');
        };

        // adding alert message
        containerMessage.textContent = message;

        //insert alert message HTML
        primaryContent.insertBefore(containerMessage, expenseForm);

        //delete alert message
        setTimeout( () =>{
            containerMessage.remove();
        }, 3000 );
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


function addExpense (event){
    event.preventDefault();

    const expenseName = document.querySelector('input#gasto').value;
    const amountExpense = document.querySelector('input#cantidad').value; 


    // Form validation 

    if ( expenseName === "" || amountExpense === "" ){

        userInterface.alertMessage('Ambos campos son obligatorios','error');

        return;

    } else if( amountExpense <= 0 || isNaN(amountExpense) ){

        userInterface.alertMessage('Cantidad no válida','error');

        return;

    };

    console.log("Agregando gasto...");
};