import Budget from "./classes/Budget.js";
import UI from "./classes/Ui.js";

//instances 

let budgetUser;
const insertHTML = new UI();

// Loading document

function eventListeners(){
    document.addEventListener('DOMContentLoaded', getBudget);
};

// Get the user budget

function getBudget (){
    const budget = prompt('¿Cuál es tu presupuesto?');


    //Budget validation
    if( budget === '' || budget === null || isNaN(budget) || budget <= 0){
        window.location.reload();
    }else{

        //insert HTML
        budgetUser = new Budget( budget );
        insertHTML.createHTML( budgetUser );
    }
};

export default eventListeners;