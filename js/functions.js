import { form, expenseName, expenseAmount } from "./selectors.js";
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

    //validating form
    if (expenseName.value === '' || expenseAmount.value === '') {

        insertHTML.insertAlert('Ambos campos son obligatorios', 'error');
        return;

    } else if (Number(expenseName.value)) {

        insertHTML.insertAlert('La descripción no puede contener solo números', 'error');
        return;

    } else if (expenseAmount.value <= 0 || isNaN(expenseAmount.value)) {

        insertHTML.insertAlert('La cantidad insertada no es válida', 'error');
        return;

    } else {

        insertHTML.insertAlert('Gasto agregado', 'success');

        //restarting form
        form.reset();
    }
};

export default eventListeners;