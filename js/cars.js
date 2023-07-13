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
}