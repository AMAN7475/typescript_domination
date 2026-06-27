//primitives
let username :string = "Aman";
let age :number = 29;
let isAddress :boolean = true;

//arrays
let numbers :number[] = [1,2,3,4];
let string :string[] = ["Aman","Sunny"];

//tuples
let person :[string, number] = ["Aman", 29];

//enum
enum Color {
    red,
    green,
    blue,
}
let favouriteColor :Color = Color.blue;

//any (avoid when possible)
let randomValue :any = 10;
randomValue = "Aman";
randomValue = "true";

//unknown (safer than any)
let userInput :unknown = 10;
userInput = "Sunny";


//void (for functions that don't return)
function susbcribe(message: string):void {
    console.log(message);
}

//normal function
function unsusbcribe(message: string) {
    console.log(message);
    return "hello";
}

//Null and Undefined
let nullValue :null = null;
let undefinedValue :undefined = undefined;