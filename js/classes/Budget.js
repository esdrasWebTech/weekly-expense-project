class Budget {
    constructor( budget ){
        this.budget = Number(budget);
        this.remaining = Number(budget);
        this.expenses = [];
    }

    newExpense( expense ){
        this.expenses = [ ...this.expenses, expense ];
        console.log( this.expenses );
    }
};

export default Budget;