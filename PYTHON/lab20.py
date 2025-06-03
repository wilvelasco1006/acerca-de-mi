'''
Escribe una función llamada `bienvenida` que tome un nombre como parámetro y salude a
la persona por su nombre.

'''
def bienvenida(nombre):
    print(f"Hola {nombre}, bienvenido al programa de Python.")

bienvenida("Pedro")

'''
Escribe una función llamada `area_circulo` que tome el radio de un círculo como parámetro
y retorne su área. 

'''
def area_circulo(radio):
    area = 3.14159 * radio ** 2
    return area

print("El área del círculo es: " + str(area_circulo(3)))

'''
Escribe una función llamada `descuento` que tome el precio de un producto y un
porcentaje de descuento. La función debe retornar el precio final después de aplicar el
descuento. Si no se proporciona el porcentaje de descuento, debe asumir que es 10%.
precio=int(input("Ingrese el precio: "))

'''
precio_producto = int(input("Ingrese el precio: "))
def descuento(precio_producto, porcentaje_descuento = 10):
    
    descuento = precio_producto * (porcentaje_descuento / 100)
    return precio_producto - descuento

print(f"El precio final, con un descuento de {10}% es: " + str(descuento(precio_producto)))

'''
Escribe una función llamada `mayor_valor` que acepte un número arbitrario de argumentos
y retorne el mayor valor.
'''
def mayor_valor(*numeros):
    return max(numeros)

print("El mayor valor es: " + str(mayor_valor(2, 3, 1, 5, 4)))

'''
Escribir un programa que defina por asignación una lista de 6 enteros en el bloque
principal del programa. Elaborar tres funciones, la primera recibe la lista y retorna la
suma de todos sus elementos, la segunda recibe la lista y retorna el mayor valor y la
última recibe la lista y retorna el menor.
'''

enteros = [2,4,6,8,10,12]

def suma_enteros(enteros):
    return sum(enteros)

print("La suma de los enteros es: " + str(suma_enteros(enteros)))

def mayor_enteros(enteros):
    return max(enteros)
print("El mayor valor de los enteros es: " + str(mayor_enteros(enteros)))

def menor_enteros(enteros):
    return min(enteros)
print("El menor valor de los enteros es: " + str(menor_enteros(enteros)))

'''
Escribir una función que reciba una lista de string y nos retorne el que tiene más
caracteres. Si hay más de uno con dicha cantidad de caracteres debe retornar el que
tiene un valor de componente más baja.
'''
palabras=["enero", "febrero", "marzo", "abril", "mayo", "junio", "Dicieeeembre"]

def mas_caracteres(palabras):
    return max(palabras, key = len) # key=len permite que se compare la longitud de las palabras
print("La palabra con más caracteres es: " + mas_caracteres(palabras))

