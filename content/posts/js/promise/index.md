---
slug: promisea+
title: 手写PromiseA+实现
author: 袁官东
date: 2020-04-30
hero: ./hero.webp
excerpt: 如何自己实现promiseA+规范，手写一个promise实现
---
<div className={'img-desc'}>图：Nguyen Nhut</div>


## 1、使用class

平常用 promise 的时候, 是通过 new 关键字来 new Promise(), 所以咱们应该用构造函数或者 class 来实现. 都 2021 年了, 咱们就用 class 来实现一下吧.

```js
class MPromise {
  constructor() {}
}
```

## 2. 定义三种状态类型

```js
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
```

## 3. 设置初始状态

```js
class MPromise {
  constructor() {
    // 初始状态为pending
    this.status = PENDING;
    this.value = null;
    this.reason = null;
  }
}
```

## 4. resolve 和 reject 方法

4.1. 根据A+的规范, 这两个方法是要更改 status 的, 从 pending 改到 fulfilled/rejected.
4.2. 注意两个函数的入参分别是 value 和 reason.

```js
class MPromise {
  constructor() {
    // 初始状态为pending
    this.status = PENDING;
    this.value = null;
    this.reason = null;
  }

  resolve(value) {
    if (this.status === PENDING) {
      this.value = value;
      this.status = FULFILLED;
    }
  }

  reject(reason) {
    if (this.status === PENDING) {
      this.reason = reason;
      this.status = REJECTED;
    }
  }
}
```

## 5. promise入参

5.1. 入参是一个函数, 函数接收 resolve 和 reject 两个参数.
5.2. 注意在初始化 promise 的时候, 就要执行这个函数, 并且有任何报错都要通过 reject 抛出去

```js
class MPromise {
  constructor(fn) {
    // 初始状态为pending
    this.status = PENDING;
    this.value = null;
    this.reason = null;

    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }

  resolve(value) {
    if (this.status === PENDING) {
      this.value = value;
      this.status = FULFILLED;
    }
  }

  reject(reason) {
    if (this.status === PENDING) {
      this.reason = reason;
      this.status = REJECTED;
    }
  }
}
```

## 6. then 方法

6.1. then 接收两个参数, onFulfilled 和 onRejected

```js
then(onFulfilled, onRejected) {}
```

6.2. 检查并处理参数, 之前提到的如果不是 function, 就忽略. 这个忽略指的是原样返回 value 或者 reason.

```js
isFunction(param) {
    return typeof param === 'function';
}

then(onFulfilled, onRejected) {
    const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
        return value
    }
    const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
        throw reason;
    };
}
```

6.3. 要知道.then 的返回值整体是一个 promise, 所以咱们先用 promise 来包裹一下, 其他逻辑待会再实现.

```js
then(onFulfilled, onRejected) {
    const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
        return value
    }
    const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
        throw reason;
    };
    const promise2 = new MPromise((resolve, reject) => {})
    return promise2
}

```

6.4. 根据当前 promise 的状态, 调用不同的函数

```js
then(onFulfilled, onRejected) {
    const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
        return value
    }
    const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
        throw reason;
    };
    const promise2 = new MPromise((resolve, reject) => {
        switch (this.status) {
            case FULFILLED: {
                realOnFulfilled()
                break;
            }
            case REJECTED: {
                realOnRejected()
                break;
            }
        }
    })
    return promise2

}
```

6.5. 这样写, 是在 then 函数被调用的瞬间就会执行. 那这时候如果 status 还没变成 fulfilled 或者 rejected 怎么办, 很有可能还是 pending 的. 所以我们需要一个状态的监听机制, 当状态变成 fulfilled 或者 rejected 后, 再去执行 callback.

6.5.1. 那么我们首先要拿到所有的 callback, 然后才能在某个时机去执行他. 新建两个数组, 来分别存储成功和失败的回调, 调用 then 的时候, 如果还是 pending 就存入数组.

   ```js
   FULFILLED_CALLBACK_LIST = [];
   REJECTED_CALLBACK_LIST = [];

   then(onFulfilled, onRejected) {
   const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
       return value
   }
   const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
       throw reason;
   };
   const promise2 = new MPromise((resolve, reject) => {
       switch (this.status) {
           case FULFILLED: {
               realOnFulfilled()
               break;
           }
           case REJECTED: {
               realOnRejected()
               break;
           }
           case PENDING: {
               this.FULFILLED_CALLBACK_LIST.push(realOnFulfilled)
               this.REJECTED_CALLBACK_LIST.push(realOnRejected)
           }
       }
   })
   return promise2

   }
   ```

6.5.2. 在 status 发生变化的时候, 就执行所有的回调. 这里咱们用一下 es6 的 getter 和 setter. 这样更符合语义, 当 status 改变时, 去做什么事情. (当然也可以顺序执行, 在给 status 赋值后, 下面再加一行 forEach)

   ```js
   _status = PENDING;

   get status() {
       return this._status;
   }

   set status(newStatus) {
       this._status = newStatus;
       switch (newStatus) {
           case FULFILLED: {
               this.FULFILLED_CALLBACK_LIST.forEach(callback => {
                   callback(this.value);
               });
               break;
           }
           case REJECTED: {
               this.REJECTED_CALLBACK_LIST.forEach(callback => {
                   callback(this.reason);
               });
               break;
           }
       }
   }
   ```

## 7. then 的返回值
上面只是简单说了下, then 的返回值是一个 Promise, 那么接下来具体讲一下返回 promise 的 value 和 reason 是什么.

7.1. 如果 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 必须拒绝执行，并返回拒因 e。(这样的话, 我们就需要手动 catch 代码，遇到报错就 reject)

```js
then(onFulfilled, onRejected) {
    const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
        return value
    }
    const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
        throw reason;
    };
    const promise2 = new MPromise((resolve, reject) => {
        const fulfilledMicrotask = () => {
            try {
                realOnFulfilled(this.value);
            } catch (e) {
                reject(e)
            }
        };
        const rejectedMicrotask = () => {
            try {
                realOnRejected(this.reason);
            } catch (e) {
                reject(e);
            }
        }

        switch (this.status) {
            case FULFILLED: {
                fulfilledMicrotask()
                break;
            }
            case REJECTED: {
                rejectedMicrotask()
                break;
            }
            case PENDING: {
                this.FULFILLED_CALLBACK_LIST.push(fulfilledMicrotask)
                this.REJECTED_CALLBACK_LIST.push(rejectedMicrotask)
            }
        }
    })
    return promise2
}
```

7.2 如果 onFulfilled 不是函数且 promise1 成功执行， promise2 必须成功执行并返回相同的值

7.3 如果 onRejected 不是函数且 promise1 拒绝执行， promise2 必须拒绝执行并返回相同的据因。

需要注意的是，如果 promise1 的 onRejected 执行成功了，promise2 应该被 resolve

这里咱们其实已经在参数检查的时候做过了, 也就是这段代码

```js
const realOnFulfilled = this.isFunction(onFulfilled)
  ? onFulfilled
  : (value) => {
      return value;
    };
const realOnRejected = this.isFunction(onRejected)
  ? onRejected
  : (reason) => {
      throw reason;
    };
```

7.4 如果 onFulfilled 或者 onRejected 返回一个值 x ，则运行 resolvePromise 方法

```js
then(onFulfilled, onRejected) {
    const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
        return value
    }
    const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
        throw reason;
    };
    const promise2 = new MPromise((resolve, reject) => {
        const fulfilledMicrotask = () => {
            try {
                const x = realOnFulfilled(this.value);
                this.resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
                reject(e)
            }
        };
        const rejectedMicrotask = () => {
            try {
                const x = realOnRejected(this.reason);
                this.resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
                reject(e);
            }
        }

        switch (this.status) {
            case FULFILLED: {
                fulfilledMicrotask()
                break;
            }
            case REJECTED: {
                rejectedMicrotask()
                break;
            }
            case PENDING: {
                this.FULFILLED_CALLBACK_LIST.push(fulfilledMicrotask)
                this.REJECTED_CALLBACK_LIST.push(rejectedMicrotask)
            }
        }
    })
    return promise2
}
```

## 8. resolvePromise

```js
resolvePromise(promise2, x, resolve, reject) {
    // 如果 newPromise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 newPromise
    // 这是为了防止死循环
    if (promise2 === x) {
        return reject(new TypeError('The promise and the return value are the same'));
    }

    if (x instanceof MPromise) {
        // 如果 x 为 Promise ，则使 newPromise 接受 x 的状态
        // 也就是继续执行x，如果执行的时候拿到一个y，还要继续解析y
        queueMicrotask(() => {
            x.then((y) => {
                this.resolvePromise(promise2, y, resolve, reject);
            }, reject);
        })
    } else if (typeof x === 'object' || this.isFunction(x)) {
        // 如果 x 为对象或者函数
        if (x === null) {
            // null也会被判断为对象
            return resolve(x);
        }

        let then = null;

        try {
            // 把 x.then 赋值给 then
            then = x.then;
        } catch (error) {
            // 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
            return reject(error);
        }

        // 如果 then 是函数
        if (this.isFunction(then)) {
            let called = false;
            // 将 x 作为函数的作用域 this 调用
            // 传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise
            try {
                then.call(
                    x,
                    // 如果 resolvePromise 以值 y 为参数被调用，则运行 resolvePromise
                    (y) => {
                        // 需要有一个变量called来保证只调用一次.
                        if (called) return;
                        called = true;
                        this.resolvePromise(promise2, y, resolve, reject);
                    },
                    // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
                    (r) => {
                        if (called) return;
                        called = true;
                        reject(r);
                    });
            } catch (error) {
                // 如果调用 then 方法抛出了异常 e：
                if (called) return;

                // 否则以 e 为据因拒绝 promise
                reject(error);
            }
        } else {
            // 如果 then 不是函数，以 x 为参数执行 promise
            resolve(x);
        }
    } else {
        // 如果 x 不为对象或者函数，以 x 为参数执行 promise
        resolve(x);
    }
}
```

## 9. onFulfilled 和 onRejected 是微任务

   咱们可以用 queueMicrotask 包裹执行函数

```js
const fulfilledMicrotask = () => {
  queueMicrotask(() => {
    try {
      const x = realOnFulfilled(this.value);
      this.resolvePromise(promise2, x, resolve, reject);
    } catch (e) {
      reject(e);
    }
  });
};
const rejectedMicrotask = () => {
  queueMicrotask(() => {
    try {
      const x = realOnRejected(this.reason);
      this.resolvePromise(promise2, x, resolve, reject);
    } catch (e) {
      reject(e);
    }
  });
};
```

## 10. 简单写点代码测试一下

```js
const test = new MPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 1000);
}).then(console.log);

console.log(test);

setTimeout(() => {
  console.log(test);
}, 2000);
```


## 11. catch 方法

```js
catch (onRejected) {
    return this.then(null, onRejected);
}
```

## 12. promise.resolve
将现有对象转为 Promise 对象，如果 Promise.resolve 方法的参数，不是具有 then 方法的对象（又称 thenable 对象），则返回一个新的 Promise 对象，且它的状态为 fulfilled。
注意这是一个静态方法, 因为咱们是通过 Promise.resolve 调用的, 而不是通过实例去调用的.

```js
static resolve(value) {
    if (value instanceof MPromise) {
        return value;
    }

    return new MPromise((resolve) => {
        resolve(value);
    });
}
```

## 13. promise.reject
返回一个新的 Promise 实例，该实例的状态为 rejected。Promise.reject 方法的参数 reason，会被传递给实例的回调函数。

```js
static reject(reason) {
    return new MPromise((resolve, reject) => {
        reject(reason);
    });
}
```

## 14. promise.race
`const p = Promise.race([p1, p2, p3]);`

该方法是将多个 Promise 实例，包装成一个新的 Promise 实例。
只要 p1、p2、p3 之中有一个实例率先改变状态，p 的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给 p 的回调函数。

```js
static race(promiseList) {
    return new MPromise((resolve, reject) => {
        const length = promiseList.length;

        if (length === 0) {
            return resolve();
        } else {
            for (let i = 0; i < length; i++) {
                MPromise.resolve(promiseList[i]).then(
                    (value) => {
                        return resolve(value);
                    },
                    (reason) => {
                        return reject(reason);
                    });
            }
        }
    });

}
```

写段测试代码

```js
const test = new MPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 1000);
});

const test2 = new MPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(222);
  }, 2000);
});

const test3 = new MPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(333);
  }, 3000);
});

MPromise.race([test, test2, test3]).then(console.log);
```


# 其他方法

* 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
* 如果所有Promise都成功，则返回成功结果数组
* 如果有一个Promise失败，则返回这个失败结果

```js
static all(promises) {
    const result = []
    let count = 0
    return new MyPromise((resolve, reject) => {
        const addData = (index, value) => {
            result[index] = value
            count++
            if (count === promises.length) resolve(result)
        }
        promises.forEach((promise, index) => {
            if (promise instanceof MyPromise) {
                promise.then(res => {
                    addData(index, res)
                }, err => reject(err))
            } else {
                addData(index, promise)
            }
        })
    })
}

```

# race

* 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
* 哪个Promise最快得到结果，就返回那个结果，无论成功失败

```js
static race(promises) {
    return new MyPromise((resolve, reject) => {
        promises.forEach(promise => {
            if (promise instanceof MyPromise) {
                promise.then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
            } else {
                resolve(promise)
            }
        })
    })
}

```

# allSettled

* 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
* 把每一个Promise的结果，集合成数组，返回

```js
static allSettled(promises) {
    return new Promise((resolve, reject) => {
        const res = []
        let count = 0
        const addData = (status, value, i) => {
            res[i] = {
                status,
                value
            }
            count++
            if (count === promises.length) {
                resolve(res)
            }
        }
        promises.forEach((promise, i) => {
            if (promise instanceof MyPromise) {
                promise.then(res => {
                    addData('fulfilled', res, i)
                }, err => {
                    addData('rejected', err, i)
                })
            } else {
                addData('fulfilled', promise, i)
            }
        })
    })
}
```


# any

any与all相反

* 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
* 如果有一个Promise成功，则返回这个成功结果
* 如果所有Promise都失败，则报错

```js
    static any(promises) {
        return new Promise((resolve, reject) => {
            let count = 0
            promises.forEach((promise) => {
                promise.then(val => {
                    resolve(val)
                }, err => {
                    count++
                    if (count === promises.length) {
                        reject(new AggregateError('All promises were rejected'))
                    }
                })
            })
        })
    }
}
```