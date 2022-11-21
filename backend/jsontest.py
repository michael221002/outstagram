

import json

def readJson(name, array=""):
    
    if array == "":
        f = open('data.json', 'r')
        data = json.load(f)
        return data
    else:
        list = []
        f = open('data.json', 'r')
        data = json.load(f)
        for i in data[array]:
            list.append(i)
        f.close()
        return list

def writetoJsonArray(name, array, data):
    with open(name,'r+') as file:
        file_data = json.load(file)
        file_data[array].append(data)
        file.seek(0)
        json.dump(file_data, file, indent = 4)

def newJsonArray(name, array, data):
    with open(name,'r+') as file:
        file_data = json.load(file)
        file_data[array] = data
        file.seek(0)
        json.dump(file_data, file, indent = 4)


#test = readJson("data.json", array="data")
#for i in test:
#    print(i)

#y = {"name": "Windows", "preis": 90, "typ": "software"}

#writetoJsonArray("data.json", "data", y)

#test = readJson("data.json", array="data")
#for i in test:
#    print(i)

newJsonArray("data.json", "test", [{"Username": "test", "Password": "1234"}])

