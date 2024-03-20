class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.remaining = Number(budget);
        this.expenses = [];
    }

    newExpense(expense) {

        //adding new expense in the expenses array
        this.expenses = [...this.expenses, expense];

        this.calculateRemaining( this.expenses );
    }

    calculateRemaining( expenses ) {

        const remaining = expenses.reduce( ( total, expenseObject ) => total + expenseObject.expenseAmount, 0 );
        
        //updating remaining
        this.remaining = this.budget - remaining;
    }
};

export default Budget;