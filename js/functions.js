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
    const expenseAmount = document.querySelector('input#cantidad').value;
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
};

export default eventListeners;