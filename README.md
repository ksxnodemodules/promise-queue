
# promise-queue
Create queuing JavaScript Promise objects

## Requirements

 * Node >= 6.0.0

## Example

```javascript
var PromiseQueue = require('promise-queue')
var {
    addPromise,
    getLastPromise
} = new PromiseQueue({
    init: 'init value'
})
getLastPromise()
    .onfulfill(first => console.log({first}))
[0, 1, 2, 3, 5, 6, 7, 8, 9]
    .forEach(current => addPromise((prev, resolve) => {
        console.log({prev, current})
        resolve(current)
    }))
getLastPromise()
    .onfulfill(last => console.log({last}))
```

Result:

```
{first: 'init value'}
{current: 0, prev: 'init value'}
{current: 1, prev: 0}
{current: 2, prev: 1}
{current: 3, prev: 2}
{current: 4, prev: 3}
{current: 5, prev: 4}
{current: 6, prev: 5}
{current: 7, prev: 6}
{current: 8, prev: 7}
{current: 9, prev: 8}
{last: 9}
```

## License

[MIT](https://github.com/ksxnodemodules/my-licenses/blob/master/MIT.md) © [Hoàng Văn Khải](https://github.com/KSXGitHub)
