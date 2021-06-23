const {expect, test, describe} = require("@jest/globals");
const {returnTwo, greeting, add, multiply, divide, subtract, isFortnite} = require("./function");

test("ReturnTwo equals 2", function(){
    expect(returnTwo()).toBe(2);
})

test("Greeting", function(){
    expect(greeting("Aiden")).toBe("Hello, Aiden.");
    expect(greeting("Bob")).toBe("Hello, Bob.");
})

describe("Calculations", function(){
    test("Add", function(){
        expect(add(1, 2)).toBe(3);
        expect(add(5, 9)).toBe(14);
    })
    test("Multiply", function(){
        expect(multiply(2, 3)).toBe(6);
    })
})

test("Is this player a fornite player?", function(){
    expect(isFortnite("Ninja")).toBe(true);
})
