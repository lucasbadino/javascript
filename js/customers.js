class Customer{
    constructor(id, name, last_name, dni, is_client){
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.dni = dni;
        this.is_client = is_client;
    }


    get_info(){
        return `Nº Cliente: ${this.id} -Pertenece a: ${this.last_name.toUpperCase()} - ${this.name.toUpperCase()}` 
    }
    get_info_voucher(){
        return `${this.last_name.toUpperCase()} ${this.name.toUpperCase()} - Cliente Nº: ${this.id}` 
    }
}