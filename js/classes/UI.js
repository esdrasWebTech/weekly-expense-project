import { totalBudget, remainingBudget, mainContent, form, btnSubmit } from "../selectors.js";

class  UI {
    insertBudget ( budgetUser ){

        //extracting values from budgetUser Object
        const { budget, remaining } = budgetUser;

        //adding HTML 
        totalBudget.textContent = budget;
        remainingBudget.textContent = remaining;
    }

    insertAlert( message, type ){

        //create HTML Alert
        const divAlert = document.createElement( 'div' );
        divAlert.classList.add( 'text-center', 'alert' );
        divAlert.textContent = message;

        // validating type Alert
        if( type === 'error' ){

            divAlert.classList.add( 'alert-danger' );
        }else{

            divAlert.classList.add( 'alert-success' );
        };

        // adding HTML
        mainContent.insertBefore( divAlert, form );
        btnSubmit.setAttribute( 'disabled', '' );

        //remove Alert
        setTimeout( () =>{

            divAlert.remove();
            btnSubmit.removeAttribute( 'disabled' );
        }, 3000 );
    }

};

export default UI;