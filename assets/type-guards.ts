let foo: number | (() => number)

if (typeof foo === "number") {
    foo.toExponential(2)
} else {
    foo().toExponential(2)
}