const data = [
    {
        "ID": "1",
        "Food": "Tea",
        "size": "1 cup",
        "fat": "2.9",
        "Cholesterol( mgs)": "10.0",
        "calorie": "70.0",
        "protein": "3.1",
        "carbs": "8.3"
    },
    {
        "ID": "2",
        "Food": "Coffee",
        "size": "1 cup",
        "fat": "2.9",
        "Cholesterol( mgs)": "10.0",
        "calorie": "164.0",
        "protein": "4.4",
        "carbs": "15.8"
    },
    {
        "ID": "3",
        "Food": "Beer, Regular",
        "size": "350 ml",
        "fat": "0.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "150.0",
        "protein": "0.0",
        "carbs": "9.0"
    },
    {
        "ID": "4",
        "Food": "kachori",
        "size": "1 small",
        "fat": "15.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "200.0",
        "protein": "4.0",
        "carbs": "18.4"
    },
    {
        "ID": "5",
        "Food": "patty",
        "size": "1 piece",
        "fat": "15.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "260.0",
        "protein": "0.9",
        "carbs": "10.2"
    },
    {
        "ID": "6",
        "Food": "samosa",
        "size": "1 big/ 65 gms",
        "fat": "13.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "210.0",
        "protein": "3.0",
        "carbs": "22.6"
    },
    {
        "ID": "7",
        "Food": "Chat",
        "size": "1 plate ",
        "fat": "12.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "210.0",
        "protein": "11.0",
        "carbs": "46.0"
    },
    {
        "ID": "8",
        "Food": "Namkeen",
        "size": "2 tsp",
        "fat": "5.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "85.0",
        "protein": "2.4",
        "carbs": "7.0"
    },
    {
        "ID": "9",
        "Food": "Mathri",
        "size": "50 gms",
        "fat": "15.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "200.0",
        "protein": "2.4",
        "carbs": "16.8"
    },
    {
        "ID": "10",
        "Food": "pizza",
        "size": "1 slice",
        "fat": "2.1",
        "Cholesterol( mgs)": "15.0",
        "calorie": "150.0",
        "protein": "10.0",
        "carbs": "21.0"
    },
    {
        "ID": "11",
        "Food": "popcorn",
        "size": "1 cup",
        "fat": "0.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "25.0",
        "protein": "0.8",
        "carbs": "4.7"
    },
    {
        "ID": "12",
        "Food": "dhokla",
        "size": "1 piece",
        "fat": "0.5",
        "Cholesterol( mgs)": "0.0",
        "calorie": "75.0",
        "protein": "3.6",
        "carbs": "8.4"
    },
    {
        "ID": "13",
        "Food": "milk( cow)",
        "size": "225 ml",
        "fat": "8.2",
        "Cholesterol( mgs)": "28.0",
        "calorie": "134.0",
        "protein": "7.0",
        "carbs": "10.0"
    },
    {
        "ID": "14",
        "Food": "paneer",
        "size": "25 gms",
        "fat": "6.5",
        "Cholesterol( mgs)": "22.3",
        "calorie": "80.0",
        "protein": "4.6",
        "carbs": "0.3"
    },
    {
        "ID": "15",
        "Food": "cheddar cheese",
        "size": "25 gm",
        "fat": "8.3",
        "Cholesterol( mgs)": "26.0",
        "calorie": "102.5",
        "protein": "6.8",
        "carbs": "0.4"
    },
    {
        "ID": "16",
        "Food": "ice cream",
        "size": "100 gms",
        "fat": "10.0",
        "Cholesterol( mgs)": "41.0",
        "calorie": "259.0",
        "protein": "2.0",
        "carbs": "21.5"
    },
    {
        "ID": "17",
        "Food": "roti",
        "size": "1 piece",
        "fat": "0.5",
        "Cholesterol( mgs)": "0.0",
        "calorie": "85.0",
        "protein": "3.0",
        "carbs": "17.4"
    },
    {
        "ID": "18",
        "Food": "parantha",
        "size": "1 piece",
        "fat": "10.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "180.0",
        "protein": "4.5",
        "carbs": "24.0"
    },
    {
        "ID": "19",
        "Food": "puri",
        "size": "1 piece",
        "fat": "5.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "167.0",
        "protein": "6.1",
        "carbs": "34.7"
    },
    {
        "ID": "20",
        "Food": "Plain rice",
        "size": "100 gms",
        "fat": "0.5",
        "Cholesterol( mgs)": "0.0",
        "calorie": "110.0",
        "protein": "2.2",
        "carbs": "22.2"
    },
    {
        "ID": "21",
        "Food": "Pulao rice",
        "size": "150 gms",
        "fat": "10.5",
        "Cholesterol( mgs)": "0.0",
        "calorie": "180.0",
        "protein": "5.2",
        "carbs": "32.6"
    },
    {
        "ID": "22",
        "Food": "Kichri",
        "size": "100 gms",
        "fat": "7.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "215.0",
        "protein": "4.2",
        "carbs": "25.4"
    },
    {
        "ID": "23",
        "Food": "Idli",
        "size": "2 pieces",
        "fat": "0.6",
        "Cholesterol( mgs)": "0.0",
        "calorie": "155.0",
        "protein": "5.0",
        "carbs": "30.2"
    },
    {
        "ID": "24",
        "Food": "Dosa Plain",
        "size": "85 gms",
        "fat": "7.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "154.0",
        "protein": "3.6",
        "carbs": "21.7"
    },
    {
        "ID": "25",
        "Food": "Upma",
        "size": "130 gms",
        "fat": "9.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "171.0",
        "protein": "4.4",
        "carbs": "24.3"
    },
    {
        "ID": "26",
        "Food": "bread white",
        "size": "25 gms",
        "fat": "0.1",
        "Cholesterol( mgs)": "0.0",
        "calorie": "54.0",
        "protein": "1.7",
        "carbs": "11.4"
    },
    {
        "ID": "27",
        "Food": "bread brown",
        "size": "25 gms",
        "fat": "0.3",
        "Cholesterol( mgs)": "0.0",
        "calorie": "68.0",
        "protein": "2.5",
        "carbs": "13.7"
    },
    {
        "ID": "28",
        "Food": "corn flakes",
        "size": "20 gms",
        "fat": "0.4",
        "Cholesterol( mgs)": "0.0",
        "calorie": "80.0",
        "protein": "1.2",
        "carbs": "20.1"
    },
    {
        "ID": "29",
        "Food": "potato curry",
        "size": "100 gms",
        "fat": "6.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "120.0",
        "protein": "1.8",
        "carbs": "15.5"
    },
    {
        "ID": "30",
        "Food": "Onion",
        "size": "25 gms",
        "fat": "0.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "23.0",
        "protein": "0.6",
        "carbs": "4.9"
    },
    {
        "ID": "31",
        "Food": "mushroom",
        "size": "1/2 cup",
        "fat": "0.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "10.0",
        "protein": "0.8",
        "carbs": "1.1"
    },
    {
        "ID": "32",
        "Food": "egg boiled",
        "size": "1 piece",
        "fat": "6.0",
        "Cholesterol( mgs)": "280.0",
        "calorie": "80.0",
        "protein": "6.3",
        "carbs": "0.6"
    },
    {
        "ID": "33",
        "Food": "egg fried",
        "size": "1 piece",
        "fat": "11.0",
        "Cholesterol( mgs)": "280.0",
        "calorie": "120.0",
        "protein": "6.8",
        "carbs": "1.5"
    },
    {
        "ID": "34",
        "Food": "egg scrambled",
        "size": "1 piece",
        "fat": "10.0",
        "Cholesterol( mgs)": "285.0",
        "calorie": "130.0",
        "protein": "7.0",
        "carbs": "1.5"
    },
    {
        "ID": "35",
        "Food": "Fried chicken",
        "size": "1 piece",
        "fat": "43.7",
        "Cholesterol( mgs)": "20.0",
        "calorie": "563.0",
        "protein": "7.7",
        "carbs": "2.5"
    },
    {
        "ID": "36",
        "Food": "Chicken curry",
        "size": "150 gms",
        "fat": "7.7",
        "Cholesterol( mgs)": "95.0",
        "calorie": "163.0",
        "protein": "17.9",
        "carbs": "4.6"
    },
    {
        "ID": "37",
        "Food": "fish curry",
        "size": "1 katori",
        "fat": "9.7",
        "Cholesterol( mgs)": "30.0",
        "calorie": "158.0",
        "protein": "14.5",
        "carbs": "3.5"
    },
    {
        "ID": "38",
        "Food": "prawns curry",
        "size": "145 gms",
        "fat": "7.0",
        "Cholesterol( mgs)": "160.0",
        "calorie": "139.0",
        "protein": "15.4",
        "carbs": "5.6"
    },
    {
        "ID": "39",
        "Food": "apple",
        "size": "1 piece",
        "fat": "0.5",
        "Cholesterol( mgs)": "0.0",
        "calorie": "60.0",
        "protein": "0.2",
        "carbs": "15.0"
    },
    {
        "ID": "40",
        "Food": "mango",
        "size": "1 piece",
        "fat": "0.4",
        "Cholesterol( mgs)": "0.0",
        "calorie": "120.0",
        "protein": "1.0",
        "carbs": "28.4"
    },
    {
        "ID": "41",
        "Food": "banana",
        "size": "1 piece",
        "fat": "0.3",
        "Cholesterol( mgs)": "0.0",
        "calorie": "100.0",
        "protein": "1.2",
        "carbs": "27.5"
    },
    {
        "ID": "42",
        "Food": "coconut",
        "size": "1 piece",
        "fat": "0.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "155.0",
        "protein": "1.5",
        "carbs": "4.4"
    },
    {
        "ID": "43",
        "Food": "orange",
        "size": "1 piece",
        "fat": "0.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "65.0",
        "protein": "0.9",
        "carbs": "14.3"
    },
    {
        "ID": "44",
        "Food": "peanuts",
        "size": "30 gms",
        "fat": "16.8",
        "Cholesterol( mgs)": "0.0",
        "calorie": "170.0",
        "protein": "7.7",
        "carbs": "4.8"
    },
    {
        "ID": "45",
        "Food": "cashewnuts",
        "size": "30 gms",
        "fat": "16.7",
        "Cholesterol( mgs)": "0.0",
        "calorie": "178.0",
        "protein": "5.5",
        "carbs": "9.9"
    },
    {
        "ID": "46",
        "Food": "butter",
        "size": "5 gms",
        "fat": "4.1",
        "Cholesterol( mgs)": "12.0",
        "calorie": "35.0"
    },
    {
        "ID": "47",
        "Food": "gulab jamun",
        "size": "1 pieces",
        "fat": "15.0",
        "Cholesterol( mgs)": "31.0",
        "calorie": "280.0",
        "protein": "2.5",
        "carbs": "22.1"
    },
    {
        "ID": "48",
        "Food": "rasgulla",
        "size": "1 pieces",
        "fat": "0.4",
        "Cholesterol( mgs)": "1.8",
        "calorie": "110.0",
        "protein": "3.4",
        "carbs": "10.3"
    },
    {
        "ID": "49",
        "Food": "jalebi",
        "size": "100 gms",
        "fat": "15.0",
        "Cholesterol( mgs)": "0.0",
        "calorie": "263.0",
        "protein": "2.2",
        "carbs": "30.6"
    },
    {
        "ID": "50",
        "Food": "chocolate",
        "size": "25 gms",
        "fat": "9.0",
        "Cholesterol( mgs)": "5.0",
        "calorie": "145.0",
        "protein": "1.7",
        "carbs": "13.9"
    }
]

export default data;