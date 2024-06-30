"""
Adeeb Khan
Tuesday, June 25
"""
print("\n ========== Functions ==========")

# define a function that takes two numbers and returns the sum of them

def addition(x,y):
    return x+y

# calling function addition()
result = addition(2,5)
print(result)
print(addition(8,-10))

# define a function to calculate the area of a rectangle using the length and the width
def arearectangle(length, width):
    area = length * width
    return area

# calling function arearectangle
print(f"The area of a rectangle is {arearectangle(3,5)}")

# define a function to check if a number is positive negative or zero
def numSign(num):
    try:
        if num > 0:
            return "Positive"
        elif num < 0:
            return "Negative"
        elif num == 0:
            return "Zero"
        else:
            return "Invalid Number"
    except:
        print("Undefined! Please Enter a Valid Number")
    
# calling function isPositive()
n = 9
print(f"The number {n} is {numSign(n)}")

# define a function that checks if a number is even
def isEven(num):
    try:
        return num % 2 == 0
    except:
        return "Invalid Number Passed"

# calling function isEven()   
x = "Peter Pan"
print(f"Is the number even? {isEven(x)}")

print("\n ========== Classes ==========")
class MyClass:
    # attribute
    i = 12345 

    # method (function)
    def testing():
        return "Hello World!"
    

# calling class MyClass
    
# step 1) Create the instance class property  
newClass = MyClass()

# step 2) call the instance 
instanceProperty = newClass.i

# step 3) call the instance class method
instanceMethod = newClass.testing()

# print result
print(f"Instance class property {instanceProperty}")
print(f"Instance class method {instanceMethod}")

print("\n ========== Car Class Example ==========")
class Car:
    # instantiation object
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    # method to return the information of the car
    def get_descriptive_car(self):
        return (f"{self.year}, {self.make}, {self.model}")
    

# create an instance of the class Car
newCar = Car("Audi", "a4", 2020)

# access method get_descriptive_car
car_description = newCar.get_descriptive_car()
print(car_description)







