import { totalBudget, remainingBudget, mainContent, form, btnSubmit, listGroup, remainingField } from "../selectors.js";
import { deleteExpense } from "../functions.js";

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

    newExpenseList( expenses ){

        //clear HTML of the list
        this.clearHTML();

        //iterate on the expense arrangement
        expenses.forEach( expense => {

            const { expenseName, expenseAmount, id } = expense;

            //create expense item HTML

            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.dataset.id = id;
            listItem.textContent = expenseName;

            const listItemSpan = document.createElement('span');
            listItemSpan.classList.add('badge', 'badge-primary', 'badge-pill');
            listItemSpan.innerHTML = `$${expenseAmount}`;

            listItem.appendChild( listItemSpan );

            //create delete button HTML

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger borrar-gasto';
            deleteBtn.innerHTML = 'Borrar &times';
            deleteBtn.onclick = () =>{

                //getting expense id
                deleteExpense( id );
            };

            listItem.appendChild( deleteBtn );

            //add expense item HTML in the list

            listGroup.appendChild( listItem );

        });

    }

    clearHTML(){
        
        while( listGroup.firstChild ){

            listGroup.removeChild( listGroup.firstChild );
        }
    }

    updatingRemaining( remaining ){
        
        remainingBudget.textContent = remaining;
    }

    checkBudget( budgetUser ){

        const { budget, remaining } = budgetUser;

        if( ( budget / 4 ) > remaining ){

            remainingField.classList.remove('alert-success', 'alert-warning');
            remainingField.classList.add('alert-danger');

        }else if( ( budget / 2 ) > remaining ){

            remainingField.classList.remove('alert-success');
            remainingField.classList.add('alert-warning');

        }

        //budget exhausted alert

        if ( remaining <= 0 ){

            this.insertAlert( 'El presupuesto se ha agotado', 'error' );

            setTimeout( () =>{

                btnSubmit.disabled = true;
            }, 3000)
        }
    }

};

export default UI;