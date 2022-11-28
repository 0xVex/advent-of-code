from input import input

zeroCounter = 0
oneCounter = 0
index = 0
finalBinary = ""

for bit in range(len(input[1])):
    for binary in input:
        if binary[index] == "0":
            zeroCounter += 1
        else: 
            oneCounter += 1       
    if zeroCounter > oneCounter:
        finalBinary += "0"
    else:
        finalBinary += "1"
    zeroCounter = 0
    oneCounter = 0
    index += 1

print (f"Result is: {finalBinary}")