class Customer{
    constructor(id, name, last_name, dni, is_client){
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.dni = dni;
        this.is_client = is_client;
    }


    get_info(){
        return `${this.id}El Sr/ra :${this.last_name.toUpperCase()} - ${this.name.toUpperCase()}` 
    }
}