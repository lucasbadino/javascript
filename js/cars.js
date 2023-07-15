class Car {
    constructor(id, brand, model, year, price) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.sold = false;

    }


    get_info(){
        return `${this.id} - ${this.brand} - ${this.model} año: ${this.year}- Precio $ ${this.price}` 
    }
    get_info_voucher(){
        return `${this.brand} - ${this.model} año: ${this.year}<br>En el valor de:  $${this.price}` 
    }
}