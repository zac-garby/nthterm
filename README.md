# nthterm
A function to find the nth term of a sequence.

## Usage

```javascript
var nthterm = require('nthterm');
  
// Linear
nthterm([1, 2, 3]); //=> n
nthterm([5, 7, 9, 11, 13]); //=> 2n+3

// Works with quadratics, too!
nthterm([4, 8, 14, 22]); //=> n²+n+1
```
