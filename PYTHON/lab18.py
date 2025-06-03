# Creacion de variables
nombre = "Juan" # String
apellido = "Perez" # String
edad = 30 # Integer
esHombre = True # Boolean

# Captura de datos
nombre = input("Ingresa tu nombre : ")
edad = int(input("Ingresa tu edad : "))
# Impresion de datos
print(f"Hola {nombre}, tienes {edad} años.")

# Operaciones con variables
num1 = int(input("Ingresa el primer numero: "))
num2 = int(input("Ingresa el segundo numero: "))
suma = num1 + num2
resta = num1 - num2
multiplicacion = num1 * num2
division = 0
if num2 == 0:
    division = "Error: Division por cero no permitida, vuelva a intentarlo."
else:
    division = num1 / num2



print(f"La suma de {num1} y {num2} es: {suma}")
print(f"La resta de {num1} y {num2} es: {resta}")
print(f"La multiplicacion de {num1} y {num2} es: {multiplicacion}")
print(f"La division de {num1} y {num2} es: {division}")


# Listas
tienda = ["Pan", "Leche", "Huevos", "Carne", "Verduras", True, False, 123, 45.67, 0]
# acceso a elementos
print(f"El primer elemento de la lista es: {tienda[0]}")
# modificacion de elementos
tienda[9] = "Wilmer"
tienda.append("Ulcue")
print(tienda)
# eliminacion de elementos
tienda.remove("Carne")
print(f"La lista despues de eliminar 'Carne' es: {tienda}")

# Diccionarios
tienda_dict = {
    "Pan": 2.500,
    "Leche": 5.000,
    "Huevos": 12.000,
    "Carne": 13.000,
    "Verduras": 3.000
}
print(tienda_dict)
tienda_dict["Pan"] = 4.500  # Modificar el precio del pan

tienda_dict.update({"Arroz": 4.000})  # Agregar un nuevo producto

print(tienda_dict)
