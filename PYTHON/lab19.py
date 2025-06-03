# Condicionales
"""
Escribir un programa que solicite al usuario un número por teclado y determine si es par o
impar. Mostrar un mensaje adecuado en cada caso.

"""
num = int(input("Ingresa un numero: "))
if num % 2 == 0:
    print(f"El numero {num} es par.")
else:
    print(f"El numero {num} es impar.")

"""
Escribir un programa que pida ingresar por teclado un número positivo de uno, dos o tres
dígitos (1..999) mostrar un mensaje indicando si el número tiene uno, dos o tres dígitos.

"""
numero = int(input("Ingresa un numero positivo (1-999): "))
if 1 <= numero < 10:
    print(f"El numero {numero} tiene un digito.")
elif 10 <= numero < 100:
    print(f"El numero {numero} tiene dos digitos.")
elif 100 <= numero < 1000:
    print(f"El numero {numero} tiene tres digitos.")
else:
    print("El numero no esta en el rango permitido.")

# Bucles

"""
Bucle while: En una empresa trabajan n empleados cuyos sueldos oscilan entre $1000000 y
$5000000, realizar un programa que lea los sueldos que cobra cada empleado e informe
cuántos empleados cobran entre $1000000 y $3000000 y cuántos cobran más de $3000000.
Además el programa deberá informar el total que gasta la empresa en sueldos al personal.

"""
n = int(input("Cuantos empleados tiene la empresa: "))
conta1 = 0  # Empleados con sueldo entre $1000000 y $3000000
conta2 = 0  # Empleados con sueldo mayor a $3000000
gastos = 0  # Total gastos en sueldos
empleados = 1  # Contador de empleados
# Bucle while para leer los sueldos de los empleados
while empleados <= n:
    sueldo = float(input("Ingrese el sueldo del empleado: "))
    if sueldo < 1000000 or sueldo > 5000000:
        print("Sueldo fuera de rango permitido.")
    else:
        if sueldo <= 3000000:
            conta1 += 1
        else:
            conta2 += 1
        gastos += sueldo
        empleados += 1
print(f"Total empleados entre $1000000 y $3000000: {conta1}")
print(f"Total empleados mayores a $3000000: {conta2}")
print(f"Total gastos en sueldos: {gastos}")

"""
Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos
en el plano. Informar cuántos puntos se han ingresado en el primer, segundo, tercer y cuarto
cuadrante. Al comenzar el programa se pide que se ingrese la cantidad de puntos a procesar.
"""
# Bucle for
cant1=0
cant2=0
cant3=0
cant4=0
n=int(input("Cantidad de puntos:"))
for f in range(n):
    x=int(input("Ingrese coordenada x:"))
    y=int(input("Ingrese coordenada y:"))
    # continuar con el condicional
    if x > 0 and y > 0:
        cant1 += 1  # Primer cuadrante
    elif x < 0 and y > 0:
        cant2 += 1  # Segundo cuadrante
    elif x < 0 and y < 0:
        cant3 += 1  # Tercer cuadrante
    elif x > 0 and y < 0:
        cant4 += 1  # Cuarto cuadrante

print(f"Puntos en el primer cuadrante: {cant1}")
print(f"Puntos en el segundo cuadrante: {cant2}")
print(f"Puntos en el tercer cuadrante: {cant3}")
print(f"Puntos en el cuarto cuadrante: {cant4}")

"""
Crear un diccionario que almacene los nombres de tres estudiantes y sus respectivas
calificaciones. Escribir un programa que imprima el nombre del estudiante con la calificación
más alta.
"""
# Diccionarios
estudiantes = {
    "Wilmer" : 97.0,
    "Steven" : 90.0,
    "Miguel" : 95.0,
}
print("Calificaciones de los estudiantes:")
for nombre, calificacion in estudiantes.items():
    print(f"{nombre}: {calificacion}")
nombre_max = max(estudiantes, key = estudiantes.get)
print(f"El estudiante con la calificación más alta es {nombre_max} con una calificación de {estudiantes[nombre_max]}.")

estudiante = input("Ingrese el nombre del estudiante: ")
calificacion = float(input(f"Ingrese la calificación de {estudiante}: "))

estudiantes.update({estudiante: calificacion})
print("Calificaciones actualizadas de los estudiantes:")
for nombre, calificacion in estudiantes.items():
    print(f"{nombre}: {calificacion}")

nombre_max = max(estudiantes, key = estudiantes.get)
print(f"Ahora el estudiante con la calificación más alta es {nombre_max} con una calificación de {estudiantes[nombre_max]}.")
