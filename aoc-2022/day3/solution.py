input = open('input.txt', 'r')
rucksacks = input.readlines()
input.close()

sum = 0
priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

for rucksack in rucksacks:
    half = len(rucksack)/2
    first, second = rucksack[:half], rucksack[half:]
    for letter in first:
        if letter in second:
            sum += priorities.index(letter) + 1
            break

print(sum)
