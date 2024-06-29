""" 
Adeeb Khan
Monday, June 24, 2024
Lab 14
"""

# declaring variables
print("Welcome to Python")
num1 = 12
num2 = -9
sum = num1 + num2
fullname = "Peter Pan"
checkmood = True

# print variables and string in one print
print(f"Welcome to Python {fullname}. The sum of {num1} and {num2} is {sum}")

# collect data from the keyboard
h = float(input("Enter a Height: "))
w = float(input("Enter a Width: "))
# calculate the hypotenuse
hyp = (h**2 + w**2)**0.5
hyp = round(hyp,2)

print(f"The collected height is {h} and width is {w}. The calculated hypotenuse is {hyp}")

print("------------ Example 2: String ----------")
msg = "Hello World"
lengthmsg = len(msg)
check1 = "m" in msg
check2 = "o" in msg


print(f"The messager has {lengthmsg} characters.")
print(f"The character in index 6 is {msg[6]}")
print(f"Is letter 'm' in msg? {check1}")
print(f"Is letter 'o' in msg? {check2}")

print("\n---------- Example 3: Control Flow ----------")
# check if someone's age is greater than or equal to 21

age = 23

if age >= 21:
    print("You are an adult")
else:
    print("You are underage")

print("\n---------- Example 4: Control Flow ----------")

grade1 = float(input("Enter Grade 1: "))
grade2 = float(input("Enter Grade 2: "))

average = (grade1 + grade2) / 2

if average >= 90 and average <= 100:
    gpa = "A"
elif average >= 80 and average < 90:
    gpa = "B"
elif average >= 70 and average < 80:
    gpa = "C"
elif average >= 60 and average < 70:
    gpa = "D"
elif average > 100:
    gpa = "Undefined"
else:
    gpa = "F"

print(f"The average grade is {average} with a gpa of {gpa}")

print("\n---------- Example 5: For Loop ----------")
# print from 0 to 5, exclusive (meaning not including the 5 in the loop count)
for x in range(0,5):
    print(x)

print("\n---------- Example 6: For loop from -3 to 3 ----------")
# print from -3 to 3
for m in range(-3,4):
    print(m)

print("\n---------- Example 7: For loop from 9 to 0----------")
#print from 9 to 1 decrement by 2
for n in range(9,-1,-2):
    print(n)

print("\n---------- Example 8: For Loop in a List ----------")
animals = ["fish", "cat", "dog"]

for animal in animals:
    print(animal)

print("\n---------- Example 9: While Loop ----------")
# print from 1 to 5 --> 1 2 3 4 5
n = 1
while n<= 5:
    print(n)
    n+=1
    if n == 3:
        break
    n+=1
else:
    print("End of Program")
