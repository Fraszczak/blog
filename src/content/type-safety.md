---
title: TypeScript and type safety part 1 - type safety and type validity.
author: pf
publishDate: 2023-04-10
slug: 2023-04-10-by-pFraszczak
description: You can read about what type safety and type validity. In computer science, type safety and type validity is the degree to which a programming language discourages or prevents type errors.
coverImage: /images/posts/type-script/type-safety.jpg
tags:
  - type-safety
  - type-validity
  - TypeScript-series
---

## Introduction

Type safety and correctness is the degree to which a programming language discourages or prevents type errors.

In programming languages with type safety, the compiler or interpreter enforces type compatibility during compilation or program execution. This helps to detect type mismatch errors before program execution, or during initial testing, preventing potential problems.

Behaviours classified as type errors by a given programming language are usually those that result from attempts to perform operations on values that are not of the appropriate data type, such as adding a string to an integer, where there is no definition for how to handle this case. This classification is partly based on opinion.

## History of type-safety

Type safety is a concept in programming languages that ensures that operations on variables and values are performed only when the types of these variables and values match the expected types. In languages with type safety, the compiler or interpreter enforces type compatibility during compilation or program execution. This helps to detect type mismatch errors before program execution, preventing potential problems.

For example, in a type-safe language, you cannot add a number to a string or divide a number by a string. Attempting to perform such an operation would result in a type error.

Type safety became a popular concept with the development of high-level programming languages that introduced abstractions at the data type level. Earlier languages such as assembly or C were not type-safe, meaning that the programmer was responsible for controlling data types and their compatibility while writing code.

The first programming language to introduce the concept of type safety was Algol 68, created in 1968. However, it was the ML (Meta Language) that initiated the revolution in the field of type safety. In ML, data types were explicitly declared, and the type system was based on a type inference algorithm that automatically determined the type of variable based on the value with which it was associated.

Another significant programming language that introduced type safety was Java, created by Sun Microsystems in 1995. In Java, data types are strictly controlled by the compiler, eliminating many type mismatch errors.

Currently, most modern programming languages, such as Python, Ruby, C#, Kotlin, Swift, Go, and Rust, have built-in type safety mechanisms, making it easier to write safe and reliable code.

## Major categories of type systems

Programming languages ​​use different typing systems that determine how variables, functions, and objects are typed and what operations can be performed on them.

### Static typing

Static typing is the process of determining the types of variables and values during program compilation. In programming languages with static typing, type errors are detected during the compilation phase, preventing many errors during program execution. In such languages, variables and values have a specified type at the time of declaration, allowing for precise type control by the compiler.
Examples of languages ​​with a static type system include Java, C++, C#, and Kotlin.

```javascript
function addNumbers(x: number, y: number): number {
  return x + y;
}

const result = addNumbers(1, 2); // result is inferred to be of type number

// The following line would result in a compilation error, because "hello" is not a number:
// const invalidResult = addNumbers(1, "hello");
```

_In this example, the **addNumbers** function takes two number arguments and returns a number value. **During compilation, TypeScript checks that all values ​​passed to the function are of type number**. If you try to pass an argument of the wrong type (such as "hello" instead of number), TypeScript throws a compile error._

### Dynamic typing

Dynamic typing is the process of determining the types of variables and values during program execution. In programming languages with dynamic typing, types are determined at the time of assigning a value to a variable, rather than at the time of declaration. This process allows for more flexible programming, but can lead to type-related errors during program execution.
Examples of languages ​​with a dynamic type system include Python, JavaScript, and Ruby.

TypeScript is a statically typed language, so there is no built-in support for dynamic typing. However, TypeScript supports some cases of dynamic typing, such as:

```typescript
let x: any = "hello";
x = 42; // x is now of type "number"
x = true; // x is now of type "boolean"
```

*In this example, the variable **x** is declared as **type any**, which means that it can hold a value of any type. When we assign a value of type **string** to it, the variable is of type string. When we assign a value of type **number** to it, the variable becomes of type number and then *of type boolean\*.

**\*Using any causes TypeScript to treat the variable as dynamic typing because it does not attempt static type parsing**. However, the use of any is generally discouraged, as it loses many of the benefits of static typing, such as early error detection and improved code readability.\*

### Strong and week type typing

Languages are often colloquially referred to as strongly typed or weakly typed. In fact, there is no universally accepted definition of what these terms mean. In general, there are more precise terms to represent the differences between type systems that lead people to call them _strong_ or _weak_.

However, if I had to somehow distinguish languages ​​using these terms, I would say that strongly typed languages ​​require explicit type conversions and do not allow implicit conversions between different types. In such languages, the compiler or interpreter forces operations to be performed only on compatible types.
C is an example of a strongly typed language.

Weakly typed languages, on the other hand, allow values ​​to be automatically converted between different types, which can lead to errors because it is not always clear what conversions are performed.
JavaScript is an example of a weakly typed language.

### Nominal typing

Nominal typing is a way of defining data types in programming languages, in which the type of given object is determined by its name or identifier, rather than by its structure or properties.

In nominal typing, each data type is strictly defined by its name or identifier, which is assigned to it at the time of declaration. This allows for checking whether two variables are of the same type by comparing their names or identifiers.

Java is an example of a language with nominal typing. In Java, each class, interface, and primitive type has a unique name that unambiguously specifies its type. This makes it possible to check whether two objects are of the same type by comparing their class names. For example, if we have two variables of type String, we can check if they are of the same type by comparing their class names, which are "java.lang.String".

In TypeScript, typing is structured, but you can simulate nominal typing by using interfaces. Code example in TypeScript showing nominal typing using interfaces.

```typescript
interface Animal {
  name: string;
}

class Dog {
  constructor(
    public name: string,
    public breed: string,
  ) {}
}

function printAnimalName(animal: Animal) {
  console.log(animal.name);
}

const myDog = new Dog("Buddy", "Golden Retriever");
printAnimalName(myDog); // Compilation error: Argument of type 'Dog' is not assignable to parameter of type 'Animal'.
```

_In this example, we have the **Animal** interface, which requires the object to have a **name** property of string type. We also have a **Dog** class that has **name** and **breed** properties. We want to pass an instance of the **Dog** class to the **printAnimalName** function, which expects an argument of type **Animal**. However, since typing is nominal and **Dog** is not exactly the same type as **Animal**, we get a compile error._

### Structural typing

Structural typing is a way of defining data types in programming languages, in which the type of given object is determined by its structure or properties, rather than by its name or identifier.

In structural typing, two objects are considered to be of the same type if their structure and properties are identical. This allows for the use of polymorphism without the need for inheritance from base classes or implementation of interfaces.

An example of a language with structural typing is TypeScript, which is based on JavaScript but adds static typing. In TypeScript, types are defined based on the structure of an object, rather than its name or identifier. This allows for the creation of interfaces that define the structure of an object, rather than its name, enabling the use of polymorphism and the creation of generic functions without the need for inheritance from base classes.

```typescript
interface Person {
  name: string;
  age: number;
}

function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

const john = { name: "John", age: 30 };
const jane = { name: "Jane", age: 25 };
const jack = { name: "Jack", age: 40, address: "123 Main St" };

console.log(greet(john)); // Hello, John! You are 30 years old.
console.log(greet(jane)); // Hello, Jane! You are 25 years old.
console.log(greet(jack)); // Hello, Jack! You are 40 years old.
```

*In this example, we define a **Person** interface that has two properties: **name** of type string and **age** of type *number. Next, we define a **greet** function that takes a Person object and returns a greeting string containing the person's name and age.\*

_We create three objects: **john**, **jane**, and **jack**. **john** and **jane** have exactly the same properties as **Person**, so we can use them as arguments to **greet** with no problem. **jack** has an additional address property, but since **TypeScript** bases typing on the structure of the object and not on its name, the **greet** function will still work correctly and display the greeting with the name and Jack's age._

### Duck typing

Duck typing is a concept in programming that is closely related to structural typing. It is a type of dynamic typing in which an object's suitability for use is determined by whether it can perform the required methods or has the required properties, rather than by its actual type.

The term "duck typing" comes from the phrase **_"if it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck."_** In other words, if an object behaves like a certain type, it is considered to be of that type, regardless of its actual type.

Duck typing is commonly used in scripting languages such as Python and Ruby, where it allows for greater flexibility and less explicit typing. However, it can also lead to errors if an object is not properly checked for the required properties or methods, which can cause runtime errors.

```typescript
interface Animal {
  makeSound(): void;
}

class Dog implements Animal {
  sound: string;
  constructor() {
    this.sound = "Woof!";
  }
  makeSound(): void {
    console.log(this.sound);
  }
}

class Cat implements Animal {
  sound: string;
  constructor() {
    this.sound = "Meow!";
  }
  makeSound(): void {
    console.log(this.sound);
  }
}

function makeSound(animal: Animal): void {
  animal.makeSound();
}

const dog: Dog = new Dog();
const cat: Cat = new Cat();

makeSound(dog); // call makeSound() on Dog type object
makeSound(cat); // call makeSound() on Cat type object

const duck = {
  makeSound: () => console.log("Quack!"),
};

makeSound(duck); // call makeSound() on Duck type object
```

_With duck typing, typing is more flexible and does not require exact type declaration, allowing for more natural and flexible programming._

### Gradual typing

Gradual typing allows types to be introduced incrementally into existing code, allowing developers to take advantage of both static and dynamic typing features. An example of a programming language that supports gradual typing is TypeScript.

```typescript
// Dynamic typing
let x: any = "hello";
x = 42; // Poprawne

// Static typing
function add(a: number, b: number) {
  return a + b;
}

// Gradual typing
function multiply(a: number, b: any): number {
  return a * b;
}

const result = multiply(2, 3); // Correct
const anotherResult = multiply(2, "3"); // Compilation error
```

_In this example, we see three different approaches to typing variables and functions. The variable **x** is of type **any**, which means it can hold a value of any type. The **add** function is statically typed, which means that its arguments and return value are strictly defined._

_The multiply function is an example of gradual typing. The first argument is statically typed as a number, but the second argument is of type **any**, which means it can be a value of any type. The returned value is again statically typed as a number._

_The result of the first multiply call is correct because both arguments are numbers. In the second function call, the second argument is a string, which causes a compilation error._

## Summary

Typing systems in programming languages ​​play a key role in ensuring code security and correctness. Static, dynamic, nominal, structural, strong, and weak typings are different approaches to achieve a similar result. Each of these approaches has its advantages and disadvantages, and choosing the right typing system depends on the needs of the project and the preferences of the developer.

TypeScript, which is a superstructure of JavaScript, offers many tools that allow for safer programming thanks to the use of static typing, but at the same time allows for flexible use of dynamic JavaScript functionalities. In addition, gradual typing in TypeScript allows you to gradually introduce static typing into projects already written in JavaScript, making it easier to switch to a more secure way of programming.

In the next part, we'll learn more about how programming languages ​​use type systems to ensure the safety and validity of programs. What is inference and what is type intersection, we will find out what happens to TypeScript members when the code compiles.
