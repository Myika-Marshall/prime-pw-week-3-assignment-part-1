console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let comidaArray = ['nachos', 'soup','pizza','sunflower seeds'];

// 1.b. TODO: Log your array of foods to the console with a message, similar
//      to the example above


console.log('My Favorite foods:', comidaArray);

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array?
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Number of favorite foods:', comidaArray.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array

console.log('My Second Favorite food is', comidaArray[1]);
// 3.b. TODO: Log the last animal in the array using it's array index

console.log(comidaArray[3]);
// 3.c. (STRETCH) TODO: Log the last animal by using the array length,
//      instead of the exact index number of the last item



// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
comidaArray.push('candy corn');
console.log('Added candy corn to the end of favorite foods.', comidaArray);


// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array &
//      log both the food removed and the updated array
let removedComida = comidaArray.pop();
console.log('Removed', removedComida);
console.log('My favorite foods are now', comidaArray);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
comidaArray.unshift('chilli');
console.log(`Added chilli to the beginng of my Array: ${comidaArray}`);

//That was cool!!!^^^^^//

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array &
//     log both the food removed and the updated array
removedComida = comidaArray.shift();
console.log('Removed chilli', removedComida);
console.log('My favorite Food List now reads', comidaArray);
