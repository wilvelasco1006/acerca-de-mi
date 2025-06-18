""""
Paso 1. Sintaxis Básica y Operaciones Simples
- Escribir un programa que imprima un mensaje en la consola.
- Declarar variables de diferentes tipos (int, float, str) y realizar operaciones
matemáticas simples.
- Concatenar cadenas de texto y utilizar funciones básicas como print() y input().
"""

# Creacion de variables
nombre = "Wilmer" # String
apellido = "Ulcue" # String
edad = 19 # Integer
esHombre = True # Boolean
altura = 1.75 # Float

# Captura de datos
nombre = input("Ingresa tu nombre : ")
edad = int(input("Ingresa tu edad : "))
# Impresion de datos
print(f"Hola {nombre}, tienes {edad} años.")

print("====================================================================================================")

# Operaciones matemáticas simples
num1 = int(input("Realicemos operaciones con dos números\nIngresa el primer numero: "))
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

""""
Paso 2. Condicionales y Bucles

-Crear un script que pida al usuario un número y determine si es par o impar
utilizando condicionales (if, else).
- Implementar un bucle for para iterar sobre una lista de números e imprimir sus
cuadrados.
- Usar un bucle while para solicitar repetidamente la entrada del usuario hasta que
se cumpla una condición específica.

"""
print("====================================================================================================")

num = int(input("Miremos si el numero que ingreses es par o impar\nPorfavor Ingresa un numero: "))
if num % 2 == 0:
    print(f"El numero {num} es par.")
else:
    print(f"El numero {num} es impar.")

print("====================================================================================================")



lista = int(input("Vamos a crear una lista de numeros, para luego imprimir sus cuadrados.\n" \
"Por favor ingresa la cantidad de números de la lista: "))

numeros = []
i = 0
while i < lista:
    number = int(input(f"Ingresa el numero {i+1}: "))
    numeros.append(number)
    i += 1

print(f"Esta es la lista de numeros que creaste!! {numeros}")
print("Los cuadrados de los numeros ingresados son:")
for n in numeros:
    print(n**2)

""""
Paso 3. Listas y Diccionarios
- Crear una lista de elementos, como nombres de estudiantes, y mostrar cada uno
utilizando un bucle.
- Crear un diccionario simple que almacene información de contacto (nombre,
correo) y mostrar sus claves y valores.
- Implementar un script que permita al usuario agregar elementos a una lista o
actualizar valores en un diccionario

"""
print("====================================================================================================")

students = ["wilmer", "cristian","josé","juan","luisa"]

print("Esta es la lista de estudiantes: ", students)

print("Lista de nombres:\n")
for n in students:
    print(n)

print("====================================================================================================")

contacto = {
    "Wilmer": "wilmer@gmail.com",
    "Cristian": "cristian@gmail.com",
    "José": "jose@gmail.com",
    "Juan": "juan@gmail.com",
    "Luisa": "luisa@gmail.com"
}

print("Este es el diccionario de contacto:")
for clave, valor in contacto.items():
    print(f"{clave} -> {valor}")

while True:
    opcion = input("¿Quieres añadir un contacto? (s/n): ").lower()
    if opcion != 's':
        break
    nombre = input("Nombre del contacto: ")
    correo = input("Correo del contacto: ")
    contacto[nombre] = correo
    print("Contacto añadido.")

print("Diccionario final de contacto:")
for clave, valor in contacto.items():
    print(f"{clave} -> {valor}")

""""
Paso 4. Script de Resolución de Problemas Simples
- Desarrollar un programa que simule una calculadora básica, permitiendo al usuario
realizar sumas, restas, multiplicaciones y divisiones. (Este ya esta hecho arriba)
- Crear un juego de adivinanza donde el programa genere un número aleatorio y el
usuario deba adivinarlo, recibiendo pistas de "mayor" o "menor" en cada intento.

"""
import random
print("====================================================================================================")

print(f"Bienvenido {nombre} a este juego de adivinar, la computadora generara un\n" \
"numero entre 0 y 20, tu mision sera adivinar cual numero escogió la computadora, el te dara pistas")
numero_aleatorio = random.randint(0, 20)
intentos = 0

while True:
    intento = int(input("Ingresa el numero entre 0 y 20: "))
    intentos += 1
    if intento < numero_aleatorio:
        print("El numero es mayor.")
    elif intento > numero_aleatorio:
        print("El numero es menor.")
    else:
        print(f"Felicidades! {nombre} Adivinaste el numero {numero_aleatorio} en {intentos} intentos.")
        break
