// Union types (OR)
type status = "pending" | "approved" | "rejected"

function setStatus (status: status): void {
    console.log (`Status set to: ${status}`);
}

setStatus("approved")

//Intersection types (AND)
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle

let myCircle: ColorfulCircle = {
    color: "red",
    radius: 10
}