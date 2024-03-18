class Budget {
    constructor( budget ){
        this.budget = Number(budget);
        this.remaining = Number(budget);
        this.expenses = [];
    }
};

export default Budget;