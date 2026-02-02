# JavaScript for Python Developers - Quick Reference

## Variables

```python
# Python
name = "Sourav"           # Can reassign
PI = 3.14159              # Convention only, can still change
```

```javascript
// JavaScript
let name = "Sourav";      // Can reassign
const PI = 3.14159;       // Cannot reassign (use by default!)
var oldWay = "avoid";     // Old syntax, has scoping issues
```

## Functions

```python
# Python
def greet(name):
    return f"Hello, {name}!"

# Lambda
double = lambda x: x * 2
```

```javascript
// JavaScript - Multiple ways!

// Traditional function
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function (preferred in React)
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Arrow function - short form (implicit return)
const greet = (name) => `Hello, ${name}!`;
const double = (x) => x * 2;
```

## Template Strings

```python
# Python f-strings
name = "Sourav"
message = f"Hello, {name}! You have {2 + 3} messages."
```

```javascript
// JavaScript template literals (backticks!)
const name = "Sourav";
const message = `Hello, ${name}! You have ${2 + 3} messages.`;
```

## Arrays (Lists)

```python
# Python
fruits = ["apple", "banana", "cherry"]
fruits.append("date")
fruits[0]  # "apple"
len(fruits)  # 4
```

```javascript
// JavaScript
const fruits = ["apple", "banana", "cherry"];
fruits.push("date");
fruits[0];  // "apple"
fruits.length;  // 4
```

## Objects (Dictionaries)

```python
# Python
person = {
    "name": "Sourav",
    "age": 28,
    "skills": ["Python", "JS"]
}
person["name"]  # "Sourav"
person.get("name")  # "Sourav"
```

```javascript
// JavaScript
const person = {
  name: "Sourav",        // Keys don't need quotes (usually)
  age: 28,
  skills: ["Python", "JS"]
};
person.name;             // "Sourav" (dot notation preferred)
person["name"];          // "Sourav" (bracket notation also works)
```

## Destructuring (Unpacking)

```python
# Python
person = {"name": "Sourav", "age": 28}
name = person["name"]
age = person["age"]

# Or with tuple
x, y = (10, 20)
```

```javascript
// JavaScript - much more powerful!

// Object destructuring
const person = { name: "Sourav", age: 28 };
const { name, age } = person;  // Creates name="Sourav", age=28

// Array destructuring
const [x, y] = [10, 20];

// In function parameters
function greet({ name, age }) {
  return `${name} is ${age}`;
}
greet(person);
```

## Loops & Iteration

```python
# Python
fruits = ["apple", "banana"]

# for loop
for fruit in fruits:
    print(fruit)

# List comprehension
upper_fruits = [fruit.upper() for fruit in fruits]

# With index
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
```

```javascript
// JavaScript

// for...of loop (like Python's for...in)
for (const fruit of fruits) {
  console.log(fruit);
}

// .map() - like list comprehension
const upperFruits = fruits.map(fruit => fruit.toUpperCase());

// .map() with index
fruits.map((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// .forEach() - when you don't need return value
fruits.forEach(fruit => console.log(fruit));
```

## Conditionals

```python
# Python
if age >= 18:
    status = "adult"
elif age >= 13:
    status = "teen"
else:
    status = "child"

# Ternary
status = "adult" if age >= 18 else "minor"
```

```javascript
// JavaScript
if (age >= 18) {
  status = "adult";
} else if (age >= 13) {
  status = "teen";
} else {
  status = "child";
}

// Ternary (very common in JSX!)
const status = age >= 18 ? "adult" : "minor";

// && short-circuit (common in React)
const message = isLoggedIn && "Welcome back!";
// If isLoggedIn is true, message = "Welcome back!"
// If isLoggedIn is false, message = false
```

## Null/None Handling

```python
# Python
value = None
if value is None:
    value = "default"

# Or
value = some_value or "default"
```

```javascript
// JavaScript has null AND undefined!
let value = null;       // Explicitly nothing
let value2;             // undefined (not assigned)

// Nullish coalescing (??): only for null/undefined
const result = value ?? "default";

// OR operator (||): for any falsy value
const result = value || "default";

// Optional chaining (?.)
const name = user?.profile?.name;  // Won't crash if user or profile is null
```

## Imports/Exports

```python
# Python
# file: utils.py
def helper():
    pass

PI = 3.14

# file: main.py
from utils import helper, PI
import utils
```

```javascript
// JavaScript (ES Modules)

// file: utils.js
export function helper() {}
export const PI = 3.14;
export default function mainThing() {}  // One default per file

// file: main.js
import { helper, PI } from './utils';    // Named imports
import mainThing from './utils';          // Default import
import * as utils from './utils';         // Import all as object
```

## Async/Await

```python
# Python
import asyncio

async def fetch_data():
    await asyncio.sleep(1)
    return "data"

async def main():
    result = await fetch_data()
    print(result)

asyncio.run(main())
```

```javascript
// JavaScript
async function fetchData() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return "data";
}

async function main() {
  const result = await fetchData();
  console.log(result);
}

main();  // Just call it (JS handles the event loop)

// Or with .then()
fetchData().then(result => console.log(result));
```

## React Hooks Quick Reference

```javascript
// useState - reactive state
const [count, setCount] = useState(0);
setCount(5);              // Set to 5
setCount(prev => prev + 1);  // Increment based on previous

// useEffect - side effects
useEffect(() => {
  // Runs after render
  console.log("Component mounted or updated");
  
  return () => {
    // Cleanup function (runs before next effect or unmount)
    console.log("Cleaning up");
  };
}, [dependency]);  // Only re-run if 'dependency' changes

// useRef - mutable reference that doesn't cause re-render
const inputRef = useRef(null);
// Attach to DOM: <input ref={inputRef} />
// Access: inputRef.current.focus();
```

## Common Gotchas

```javascript
// 1. Equality: use === not ==
"5" == 5;   // true (type coercion - BAD!)
"5" === 5;  // false (strict equality - GOOD!)

// 2. this keyword - arrow functions don't have their own 'this'
// Use arrow functions in React to avoid 'this' issues

// 3. Array/Object are reference types
const arr1 = [1, 2, 3];
const arr2 = arr1;      // Same reference!
arr2.push(4);           // arr1 is also [1, 2, 3, 4]!

// To copy:
const arr3 = [...arr1];  // Spread operator creates new array
const obj2 = {...obj1};  // Spread for objects too

// 4. Truthy/Falsy
// Falsy: false, 0, "", null, undefined, NaN
// Everything else is truthy (including [], {}, "0")
```
