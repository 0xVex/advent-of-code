file = open('input.txt', 'r')
input = file.readlines()
counter = 0
most_cals = 0
for line in input:
    number = line.strip()
    if not number:
        if counter > most_cals:
            most_cals = counter
        counter = 0
    else:
        counter += int(number)
print(most_cals)        
file.close()