// You can check if an array contains a particular item using toContain:

// ref: https://facebook.github.io/jest/docs/using-matchers.html#content;




let shoppingList = ['kleenex', 'trash bags', 'paper towels', 'beer'];

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
})
