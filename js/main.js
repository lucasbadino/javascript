//arreglos simuladores de base de datos y pusheos de info

let array_sales = new Array()
let array_cars_saled = new Array()
let array_cars = new Array()
let array_custumers = new Array()
let array_users = new Array()
let array_user_on_active = new Array()

array_cars.push(new Car((array_cars.length + 1), "Chevrolet", "Cruze 1.4T Ltz AT 4P", 2020, 158000))
array_cars.push(new Car((array_cars.length + 1), "Toyota", "Hilux 4x2 SRV Manual", 2012, 8900000))
array_cars.push(new Car((array_cars.length + 1), "Fiat", "Pulse 1.0T Audance", 2011, 9620000))
array_cars.push(new Car((array_cars.length + 1), "Bmw", "Serie M4 S", 2015, 6900000))
array_cars.push(new Car((array_cars.length + 1), "VW", "Amarok 2.0 TDI 4X2 Trendline", 2012, 10256000))
array_cars.push(new Car((array_cars.length + 1), "Peugeot", "207 1.4T HDI Allure 5P", 2016, 256000))
array_cars.push(new Car((array_cars.length + 1), "Toyota", "Corolla SEG 1.8 CVT", 2018, 5690333))

array_custumers.push(new Customer((array_custumers.length + 1), "Lucas", "Badino", 39472312, true))
array_custumers.push(new Customer((array_custumers.length + 1), "Pedro", "Zapata", 25369147, false))
array_custumers.push(new Customer((array_custumers.length + 1), "Jose", "Almada", 41258000, true))
array_custumers.push(new Customer((array_custumers.length + 1), "Agustin", "Martinez", 21563002, false))
array_custumers.push(new Customer((array_custumers.length + 1), "Lorenzo", "Peralta", 10933000, true))
array_custumers.push(new Customer((array_custumers.length + 1), "Santiago", "Baigorria", 17734808, true))

// usuarios disponibles para ingresar al sistema

array_users.push(new User((array_users.length + 1), "lucas", "lucas123"))
array_users.push(new User((array_users.length + 1), "juan", "juan123"))
array_users.push(new User((array_users.length + 1), "marcos", "marcos123"))
array_users.push(new User((array_users.length + 1), "pablo", "pablo123"))


//mensaje de selector de operacion
let mensaje = "Ingrese opcion a realizar:"
mensaje += "\n 1- Consultar Stock"
mensaje += "\n 2- Agregar Vehiculo"
mensaje += "\n 3- Consultar Cliente"
mensaje += "\n 4- Agregar Clientes"
mensaje += "\n 5- Realizar una venta"
mensaje += "\n 6- Ventas realizadas"
mensaje += "\n 7- Eliminar auto del stock"
mensaje += "\n 8- Consultar Vehiculos Vendidos"
mensaje += "\n 9- Salir"

// mensajes para mostrar stock y clientes 

let men_cars = "Estos son los vehiculos en stock"
let men_cust = "Clientes: "

//for each para recorrer y cargar en mensaje el stock y clientes actuales

array_cars.forEach(e => men_cars += `\n ${e.get_info()}`)
array_custumers.forEach(e => men_cust += `\n ${e.get_info()}`)

//comienso de ejecucion del sistema 

alert("Bienvenido al sistema de gestion \n de stock y ventas")
let usuario = prompt("ingresa tu usuario")
let contraseña = prompt("ingresa tu contraseña")
let val_user = val_user_pass(usuario, contraseña)
let counter = 1
while (!val_user) {
    if (counter < 3) {
        counter++
        alert("Usuario o contraseña incorrecta")
        usuario = prompt("ingresa tu usuario")
        contraseña = prompt("ingresa tu contraseña")
        val_user = val_user_pass(usuario, contraseña)
    }else{
        alert("Usuario Bloqueado")
        break;
    }
    
}

if (val_user) {
    flag2 = false
    do {
        option = parseInt(prompt(mensaje))
        switch (option) {
            // mostrar stock
            case 1: {
                chose = parseInt(prompt("ingrese: \n 1- Ordenar por precio \n 2- Ordenar por Marca \n 3- No Ordenar"))
                while (isNaN(chose) || chose < 1 || chose > 3) {
                    chose = parseInt(prompt("Valor incorrecto \n ingrese: \n 1- Ordenar por precio \n 2- Ordenar por Marca \n 3- No Ordenar"))
                }
                order_items(chose)
                show_stock()
                order_by_id()
                break;
            }
            // agregar vehiculo
            case 2: {
                flag = true
                request_data_cars()
                add_cars(brand, model, year, price)
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
                request_data_customer()
                add_cust(name, last_name, dni, false)

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
                    flag2 = true
                } else {
                    alert("No hay ventas registradas")
                }
                break;
            }
            // eliminar un vehiculo de stock
            case 7: {
                opcion = parseInt(prompt("ingresa un valor a eliminar \n " + men_cars))
                let i = val_id(array_cars, opcion)
                while (i) {
                    opcion = parseInt(prompt("Valor incorrecto \n ingresa un valor a eliminar \n " + men_cars))
                    i = val_id(array_cars, opcion)
                }
                delete_car(opcion)
                show_stock()
                break;
            }
            //vehiculos vendidos
            case 8: {
                array_sales.forEach(e => {
                    array_cars_saled.push(new Cars_saled(array_cars_saled.length + 1, e.car))
                })
                if (array_cars_saled.length != 0) {
                    men_car_saled = ""
                    array_cars_saled.forEach((e) => men_car_saled += e.get_info())
                    document.write(men_car_saled)
                    flag2 = true
                } else {
                    alert("No hay ventas registradas")
                }

                break;
            }
            // salir del programa
            case 9: {
                flag2 = confirm("Desea Salir?")
                break;
            }
            default: {
                alert("valor ingresado no valido!")
                flag2 = confirm("Quiere Salir del sistema?")
                break;

            }
        }


    } while (!flag2)
}else{
    alert("Recargue la pagina para desbloquear su usuario")
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
    alert(`Operacion comfirmadad bajo el comprobante Nº:${new_sale.id} \n ${car_selected.get_info()}
    Vendido \n Comprado por ${cust_selected.get_info()} 
    \n El Dia ${new_sale.date} a las ${new_sale.time}`)
}
function sell() {
    car_to_sell = parseInt(prompt(`Ingrese el vehiculo a vender:\n${men_cars}`))
    a = val_id(array_cars, car_to_sell)
    while (a) {
        car_to_sell = parseInt(prompt(`Error, dato incorrecto. \nIngrese el vehiculo a vender:\n${men_cars}`))
        a = val_id(array_cars, car_to_sell)
    }
    let cus_to_buy = parseInt(prompt(`Ingrese el cliente comprador:\n${men_cust}`))
    a = val_id(array_custumers, cus_to_buy)
    while (isNaN(cus_to_buy) || cus_to_buy <= 0 || cus_to_buy >= array_custumers.length + 1) {
        cus_to_buy = parseInt(prompt(`Error, dato incorrecto. \nIngrese el cliente comprador:\n${men_cust}`))
        a = val_id(array_custumers, cus_to_buy)
    }
    car_selected = array_cars.find((e) => e.id == car_to_sell)
    cust_selected = array_custumers.find((e) => e.id == cus_to_buy)
    check = confirm(`${cust_selected.get_info_voucher()} \n Va a comprar el vehiculo\n ${car_selected.get_info_voucher()} \n Desea Continuar?`)
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

function order_by_id() {
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

function val_id(array, option) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == option) {
            return false;
        }
    }
    return true;
}
function val_user_pass(user, pass) {
    for (let i = 0; i < array_users.length; i++) {
        if (user == array_users[i].user) {
            if (pass == array_users[i].password)
                return true;
        }
    }
    return false;
}
