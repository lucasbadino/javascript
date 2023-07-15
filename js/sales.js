class Sales{
    constructor(customer, car){
        this.id = Math.round(Math.random()* 1000000)
        this.date = new Date().toLocaleDateString();
        this.time = new Date().toLocaleTimeString();
        this.customer = customer;
        this.car = car;
    }

    get_info(){
        return `<br>Operacion bajo en comprobante n°: ${this.id}<br> Fecha operacion ${this.date} <br> Hora operacion ${this.time} <br> Comprador: ${this.customer.get_info_voucher()} <br> Vehiculo vendido: ${this.car.get_info_voucher()} <br> <br>`
    }
    
}

class Cars_saled{
    constructor(id, car){
        this.id = id;
        this.car = car
    }

    get_info(){
        return `<br> Venta Nº:${this.id} - ${this.car.brand} - ${this.car.model} año :${this.car.year} <br>`
    }
}
