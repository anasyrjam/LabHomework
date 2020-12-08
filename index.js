const data = [
    {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.78,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" },
                    { "id": "1002", "type": "Chocolate" },
                    { "id": "1003", "type": "Blueberry" },
                    { "id": "1004", "type": "Devil's Food" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5007", "type": "Powdered Sugar" },
                { "id": "5006", "type": "Chocolate with Sprinkles" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    },
    {
        "id": "0002",
        "type": "donut",
        "name": "Raised",
        "ppu": 0.55,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    },
    {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "ppu": 0.26,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" },
                    { "id": "1002", "type": "Chocolate" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    }
]
var array = []
for (var i of data) {
    for (var j of i["topping"]) {
        if (!array.includes(j["type"])) {
            array.push(j["type"])
        }
    }
}
console.log(array);
var array2 = []
for (var i of data) {
    for (var j of i["batters"]["batter"]) {
        if (!array2.includes(j["type"])) {
            array2.push(j["type"])
        }
    }
}
console.log(array2);
var sum = 0
for (var i of data) {
    sum += i["ppu"]
}
var avrg = sum / data.length
console.log(avrg);
console.log(sum);

var all_id = []
for (var i of data) {
    all_id.push(i.id)
    for (var j of i["topping"]) {
        if (!all_id.includes(j.id)) {
            all_id.push(j.id)
        }
    }
    for (var k of i["batters"]["batter"]) {
        if (!all_id.includes(k.id)) {
            all_id.push(k.id)
        }
    }
}
console.log(all_id);
