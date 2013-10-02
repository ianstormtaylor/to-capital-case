# to-capital-case

  Convert a string to a capital case.

## Installation

    $ component install ianstormtaylor/to-capital-case
    $ npm install to-capital-case

## Example

```js
var capital = require('to-capital-case');

capital('camelCase');       // "Camel Case"
capital('space case');      // "Space Case"
capital('snake_case');      // "Snake Case"
capital('dot.case');        // "Dot Case"
capital('some*weird[case'); // "Some Weird Case"
```

## API

### toCapitalCase(string)
  
  Returns the capital-case variant of a `string`.

## License

  MIT
