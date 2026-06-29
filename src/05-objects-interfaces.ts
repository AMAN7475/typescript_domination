// Interface
interface User {
    name: string;
    age: number;
    email?: string; //optional property
    readonly id: number; //readonly property
}

// Object type annotation
let user: User = {
    name: "Aman",
    age: 29,
    id: 101,
};

// user.id = 2;

// Interface with methods
interface Product {
    name: string;
    price: number;
    getDiscount(percent:number): number;
}

let laptop: Product = {
    name: "Macbook Pro",
    price: 2000,
    getDiscount(percentage: number): number {
        return this.price * (percentage / 100);
    },
}