// String literal types
let directions: "north" | "south" | "east" | "west";
directions = "north";

// Numeric literal types
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;

// Combining with other types
type SuccessResponse = {
    status: "success";
    data: any;
};
type ErrorResponse = {
    status: "error";
    message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;