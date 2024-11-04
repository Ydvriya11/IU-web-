// Define the function for which we want to find the root.
function f(x) {
    return x * x - 4; // The function: f(x) = x^2 - 4
}

// Define the derivative of the function.
function df(x) {
    return 2 * x; // The derivative of f(x), which is 2x
}

// Set the initial guess for the root.
let x0 = 3;

// Set a tolerance level to determine when the approximation is close enough to the root.
const tolerance = 0.0001;

// Maximum number of iterations to prevent infinite loops.
const maxIterations = 100;

// Initialize variables for the current estimate and iteration count.
let x = x0;
let iterations = 0;

// Perform the Newton-Raphson iteration process.
while (Math.abs(f(x)) > tolerance && iterations < maxIterations) {
    // Update the approximation using Newton's formula: x = x - f(x) / f'(x)
    x = x - f(x) / df(x);
    iterations++;
}

// Check if the approximation is close enough to be considered a root.
if (Math.abs(f(x)) <= tolerance) {
    console.log(⁠ Root found at x = ${x} after ${iterations} iterations. ⁠);
} else {
    console.log(⁠ Root not found within ${maxIterations} iterations. ⁠);
}

