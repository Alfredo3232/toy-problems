function calculator(a, b, sign) {
    let val = 0;
    switch (sign) {
        case "+":
            if (typeof a !== "number" && typeof b !== "number") return "unknown value";

            val = a + b;
            return val;
        case "-":
            if (typeof a !== "number" && typeof b !== "number") return "unknown value";

            val = a - b;
            return val;
        case "*":
            if (typeof a !== "number" && typeof b !== "number") return "unknown value";

            val = a * b;
            return val;
        case "/":
            if (typeof a !== "number" && typeof b !== "number") return "unknown value";

            val = a / b;
            return val;
        default:
            return "unknown value";
    }
}
