class Sales{
    constructor(customer, car){
        this.date = new Date().toLocaleDateString();
        this.time = new Date().toLocaleTimeString();
        this.customer = customer;
        this.car = car;
    }
}