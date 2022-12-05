file = open('input.txt', 'r')
input = file.readlines()
counter = 0
sums = []
for line in input:
    number = line.strip()
    if not number:
        sums.append(counter)
        counter = 0
    else:
        counter += int(number)
sums.sort(reverse=True)
top3 = sums[0] + sums[1] + sums[2]
print(top3)        
file.close()