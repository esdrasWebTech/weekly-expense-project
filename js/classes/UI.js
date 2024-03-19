import { totalBudget, remainingBudget } from "../selectors.js";

class  UI {
    insertBudget ( budgetUser ){

        //extracting values from budgetUser Object
        const { budget, remaining } = budgetUser;

        //adding HTML 
        totalBudget.textContent = budget;
        remainingBudget.textContent = remaining;

    }
}

export default UI;