 `res.wirte(chunk)`, 当数据直接发送到操作系统内核缓存区，返回 `true`，先缓存到系统内存时返回 `false`

 exports.objName=objName || module.exports=objName  
 module.exports===export
 reqiure('moduleName').objName

1. module.exports 初始值为一个空对象 {}
2. exports 是指向的 module.exports 的引用
3. require() 返回的是 module.exports 而不是 exports



#### exports = module.exports = {...}

我们经常看到这样的写法：

```
exports = module.exports = {...}
```

上面的代码等价于:

```
module.exports = {...}
exports = module.exports
```

原理很简单：module.exports 指向新的对象时，exports 断开了与 module.exports 的引用，那么通过 exports = module.exports 让 exports 重新指向 module.exports。



运行以下命令：

```
npm config set save-exact true
```

这样每次 `npm i xxx --save` 的时候会锁定依赖的版本号，相当于加了 `--save-exact` 参数。