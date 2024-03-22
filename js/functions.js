import { form } from "./selectors.js";
import Budget from "./classes/Budget.js";
import UI from "./classes/Ui.js";

//instances 

let budgetUser;
const insertHTML = new UI();

// Loading document

function eventListeners() {
    document.addEventListener('DOMContentLoaded', getBudget);
    form.addEventListener('submit', addExpense);
};

// Get the user budget

function getBudget() {
    const budget = prompt('¿Cuál es tu presupuesto?');


    //Budget validation
    if (budget === '' || budget === null || isNaN(budget) || budget <= 0) {
        window.location.reload();
    } else {

        //insert HTML
        budgetUser = new Budget(budget);
        insertHTML.insertBudget(budgetUser);
    }
};

// add Expense

function addExpense(event) {
    event.preventDefault();

    //selecting form fields
    const expenseAmount = Number(document.querySelector('input#cantidad').value);
    const expenseName = document.querySelector('input#gasto').value;

    //validating form
    if (expenseName === '' || expenseAmount === '') {

        insertHTML.insertAlert('Ambos campos son obligatorios', 'error');
        return;

    } else if (Number(expenseName)) {

        insertHTML.insertAlert('La descripción no puede contener solo números', 'error');
        return;

    } else if (expenseAmount <= 0 || isNaN(expenseAmount)) {

        insertHTML.insertAlert('La cantidad insertada no es válida', 'error');
        return;

    } else {

        insertHTML.insertAlert('Gasto agregado', 'success');

        //restarting form
        form.reset();
    }

    //generating expense object

    const expense = { expenseName, expenseAmount, id: Date.now() }; 

    //adding expense to the budgetUser

    budgetUser.newExpense( expense );

    //inserting HTML of the expenses in the list

    const { expenses, remaining } = budgetUser;

    insertHTML.newExpenseList( expenses );

    //updating the HTML of the remaining budget

    insertHTML.updatingRemaining( remaining );

    //check the budget and the remaining

    insertHTML.checkBudget( budgetUser );
};


//Remove expenses from the list 

export function deleteExpense( id ){
    budgetUser.deleteExpense( id );
};

//show new expense list and apply reimbursement to budget

export function updatedExpenseList( updatedExpenses ){
    insertHTML.newExpenseList( updatedExpenses );
    budgetUser.calculateRemaining( updatedExpenses );
    insertHTML.insertBudget( budgetUser );
    insertHTML.checkBudget( budgetUser );
};

export default eventListeners;