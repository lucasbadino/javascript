alert("Bienvenido al sistema de gestion \n de stock y ventas")
// variable con para comfirmar ingreso al sistema
let con = true;
//arreglos simuladores de base de datos y pusheos de info
const array_sales = new Array()
let array_cars = new Array()
array_cars.push(new Car((array_cars.length + 1), "Chevrolet", "Cruze 1.4T Ltz AT 4P", 2020, 158000))
array_cars.push(new Car((array_cars.length + 1), "VW", "Amarok 2.0 TDI 4X2 Trendline", 2012, 10256000))
array_cars.push(new Car((array_cars.length + 1), "Peugeot", "207 1.4T HDI Allure 5P", 2016, 256000))
array_cars.push(new Car((array_cars.length + 1), "Toyota", "Corolla SEG 1.8 CVT", 2018, 5690333))

const array_custumers = new Array()
array_custumers.push(new Customer((array_custumers.length + 1), "Lucas", "Badino", 39472312, true))
array_custumers.push(new Customer((array_custumers.length + 1), "Pedro", "Castillo", 25369147, false))
array_custumers.push(new Customer((array_custumers.length + 1), "Santiago", "Baigorria", 17734808, true))
//mensaje de selector de operacion
let mensaje = "Ingrese opcion a realizar:"
mensaje += "\n 1- Consultar Stock"
mensaje += "\n 2- Agregar Vehiculo"
mensaje += "\n 3- Consultar Cliente"
mensaje += "\n 4- Agregar Clientes"
mensaje += "\n 5- Realizar una venta"
mensaje += "\n 6- Ventas realizadas"
mensaje += "\n 7- Eliminar auto del stock"
mensaje += "\n 8- Salir"
// mensajes para mostrar stock y clientes 
let men_cars = "Estos son los vehiculos en stock"
let men_cust = "Clientes: "

//for each para recorrer y cargar en mensaje el stock y clientes actuales
array_cars.forEach(e => men_cars += `\n ${e.get_info()}`)
array_custumers.forEach(e => men_cust += `\n ${e.get_info()}`)


if (con) {
    flag2 = false
    do {
        option = parseInt(prompt(mensaje))
        switch (option) {
            // mostrar stock
            case 1: {
                chose = parseInt(prompt("ingrese: \n 1-Ordenar por precio \n -2 Ordenar por Marca \n 3-No Ordenar"))
                while (isNaN(chose) || chose < 1 || chose > 3) {
                    chose = parseInt(prompt("Valor incorrecto \n ingrese: \n 1-Ordenar por precio \n -2 Ordenar por Marca \n 3-No Ordenar"))
                }
                order_items(chose)
                show_stock()
                break;
            }
            // agregar vehiculo
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
            // mostrar clientes 
            case 3: {
                show_cust()
                break;
            }
            // agregar cliente
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
            // realizar venta 
            case 5: {
                sell()
                break;

            }
            // consultar ventas 
            case 6: {
                if (array_sales.length > 0) {
                    array_sales.forEach(e => document.write(e.get_info()));
                } else {
                    alert("no hubo ventas")
                }

                flag2 = true


                break;
            }
            // eliminar un vehiculo de stock
            case 7: {
                opcion = parseInt(prompt("ingresa un valor a eliminar"))
                delete_car(opcion)
                show_stock()
                break;
            }
            // salir del programa
            case 8: {
                flag2 = confirm("Realmente Quiere Salir?")
                break;
            }
            default: {
                alert("valor ingresado no valido!")
                flag2 = confirm("Quiere Salir del sistema?")
                break;

            }
        }


    } while (!flag2)
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
    alert(`Operacion comfirmadad bajo el comprobante ${new_sale.id} \n ${car_selected.get_info()}
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
function order_items(e) {
    if (e == 1) {
        array_cars.sort(function (a, b) {
            if (a.price > b.price) {
                return 1
            }
            if (a.price < b.price) {
                return -1
            }
            return 0
        })
        men_cars = "Los Vehiculos en stock son: "
        array_cars.forEach(e => men_cars += `\n ${e.get_info()}`)
    }
    if (e == 2) {
        array_cars.sort(function (a, b) {
            if (a.brand > b.brand) {
                return 1
            }
            if (a.brand < b.brand) {
                return -1
            }
            return 0
        })
        men_cars = "Los Vehiculos en stock son: "
        array_cars.forEach(e => men_cars += `\n ${e.get_info()}`)

    }
    if (e == 3) {
        array_cars.sort(function (a, b) {
            if (a.id > b.id) {
                return 1
            }
            if (a.id < b.id) {
                return -1
            }
            return 0
        })
        men_cars = "Los Vehiculos en stock son: "
        array_cars.forEach(e => men_cars += `\n ${e.get_info()}`)
    }

}
