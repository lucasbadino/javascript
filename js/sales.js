class Sales{
    constructor(customer, car){
        this.date = new Date().toLocaleDateString();
        this.time = new Date().toLocaleTimeString();
        this.customer = customer;
        this.car = car;
    }

    get_info(){
        return `<br> Fecha operacion ${this.date} <br> Hora operacion ${this.time} <br> Comprador: ${this.customer.get_info()} <br> Vehiculo vendido: ${this.car.get_info()}`
    }
}