alert("Bienvenido al sistema de gestion \n de stock y ventas")

let con = true;
const array_sales = new Array()
let array_cars = new Array()
array_cars.push(new Car((array_cars.length + 1), "Chevrolet", "Cruze 1.4T Ltz AT 4P", 2020, 158000))
array_cars.push(new Car((array_cars.length + 1), "Peugeot", "207 1.4T HDI Allure 5P", 2016, 256000))
array_cars.push(new Car((array_cars.length + 1), "Toyota", "Corolla SEG 1.8 CVT", 2018, 5690333))

const array_custumers = new Array()
array_custumers.push(new Customer((array_custumers.length + 1), "Lucas", "Badino", 39472312, true))
array_custumers.push(new Customer((array_custumers.length + 1), "Pedro", "Castillo", 25369147, false))
array_custumers.push(new Customer((array_custumers.length + 1), "Santiago", "Baigorria", 17734808, true))
let mensaje = "Ingrese opcion a realizar:"
mensaje += "\n 1- Consultar Stock"
mensaje += "\n 2- Agregar Vehiculo"
mensaje += "\n 3- Consultar Cliente"
mensaje += "\n 4- Agregar Clientes"
mensaje += "\n 5- Realizar una venta"
mensaje += "\n 6- Ventas realizadas"
mensaje += "\n 7- Eliminar auto"
let men_cars = "Estos son los vehiculos en stock"
let men_cust = "Clientes: "
array_cars.forEach(e => men_cars += `\n ${e.get_info()}`)
array_custumers.forEach(e => men_cust += `\n ${e.get_info()}`)
if (con) {
    flag2 = true
    do {
        option = parseInt(prompt(mensaje))
        switch (option) {
            case 1: {
                show_stock()
                break;
            }

            case 2: {
                flag = true
                while (flag) {
                    flag = confirm("Desea agregar otro vehiculo? ")
                    if (flag) {
                        request_data_cars()
                        add_cars(brand, model, year, price)
                    }
                }
                show_stock()
                break;
            }
            case 3: {
                show_cust()
                break;
            }
            case 4: {
                flag = true
                while (flag) {
                    flag = confirm("Desea agregar otro cliente? ")
                    if (flag) {
                        request_data_customer()
                        add_cust(name, last_name, dni, false)
                    }
                }
                show_cust()
                break;
            }
            case 5: {
                sell()
                break;

            }
            case 6: {
                array_sales.forEach(e => document.write(e.get_info()));
                flag2 = false


                break;
            }
            case 7: {
                opcion = parseInt(prompt("ingresa un valor a eliminar"))
                delete_car(opcion)
                show_stock()
                break;
            }
            default: {
                flag2 = false
                break;

            }
        }


    } while (flag2)
}

function request_data_cars() {
    brand = prompt("Ingrese la marca: ")
    model = prompt("Ingrese el modelo-version: ")
    year = parseInt(prompt("Ingrese el año: "))
    price = parseInt(prompt("Ingrese el precio: "))

    while (!brand || !model || isNaN(year) || isNaN(price)) {
        alert("Datos incorrectos")
        brand = prompt("Ingrese la marca: ")
        model = prompt("Ingrese el modelo-version: ")
        year = parseInt(prompt("Ingrese el año: "))
        price = parseInt(prompt("Ingrese el precio: "))
    }
}
function add_cars(brand, model, year, price) {
    new_car = new Car((array_cars.length + 1), brand, model, year, price)
    array_cars.push(new_car)
    men_cars += ` \n ${new_car.get_info()}`
    alert(`El vehiculo agregado es: \n ${new_car.get_info()}`)
}
function show_stock() {
    alert(men_cars)
}
function show_cust() {
    alert(men_cust)
}

function request_data_customer() {
    name = prompt("Ingrese el nombre: ")
    last_name = prompt("Ingrese el apellido: ")
    dni = parseInt(prompt("Ingrese el numero de dni: "))

    while (!name || !last_name || isNaN(dni)) {
        alert("Datos incorrectos")
        name = prompt("Ingrese el nombre: ")
        last_name = prompt("Ingrese el apellido: ")
        dni = parseInt(prompt("Ingrese el numero de dni: "))
    }
}
function add_cust(name, last_name, dni, is_client) {
    new_cust = new Customer((array_custumers.length + 1), name, last_name, dni, is_client)
    array_custumers.push(new_cust)
    men_cust += ` \n ${new_cust.get_info()}`
    alert(`Felicitaciones a agregado a: \n ${new_cust.get_info()}`)
}
function saled_done(new_sale) {
    alert(`Operacion comfirmadad bajo el comprobante ${array_sales.length + 2} \n ${car_selected.get_info()}
    Vendido \n Comprado por ${cust_selected.get_info()} 
    \n El Dia ${new_sale.date} a las ${new_sale.time}`)
}
function sell() {
    let car_to_sell = parseInt(prompt(`Ingrese el vehiculo a vender:\n${men_cars}`))
    while (isNaN(car_to_sell) || car_to_sell <= 0 || car_to_sell >= array_cars.length + 1) {
        car_to_sell = parseInt(prompt(`Error, dato incorrecto. \nIngrese el vehiculo a vender:\n${men_cars}`))
    }
    let cus_to_buy = parseInt(prompt(`Ingrese el cliente comprador:\n${men_cust}`))
    while (isNaN(cus_to_buy) || cus_to_buy <= 0 || cus_to_buy >= array_custumers.length + 1) {
        cus_to_buy = parseInt(prompt(`Error, dato incorrecto. \nIngrese el cliente comprador:\n${men_cust}`))
    }
    car_selected = array_cars.find((e) => e.id == car_to_sell)
    cust_selected = array_custumers.find((e) => e.id == cus_to_buy)
    check = confirm(`${cust_selected.get_info()} va a comprar el vehiculo\n ${car_selected.get_info()} \n Desea Continuar?`)
    if (check) {
        delete_car(car_to_sell)
        new_sale = new Sales(cust_selected, car_selected)
        array_sales.push(new_sale)
        saled_done(new_sale)
    } else {
        alert("Venta Cancelada!!!")
    }
}

function delete_car(opcion) {
    
    array_cars = array_cars.filter(e => e.id != opcion)
    men_cars = "Estos son los vehiculos en stock: "
    array_cars.forEach(e => men_cars += `\n ${e.get_info()}`)

}