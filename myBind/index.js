const a = {
  name: 'a',
  sayName1: function () {
    return {
      name: this.name,
      args: arguments
    }
  }
}

const b = {
  name: 'b',
  sayName2: function () {
    // console.log(this.name, arguments)
  }
}

Function.prototype.myApply = function (context, args) {
  var symbol = Symbol('newContext')
  context[symbol] = this
  var val = eval('context[symbol]('+ (args || []).join(',') +')')
  delete context[symbol]
  return val
}

Function.prototype.myBind = function(context, args1) {
  var symbol = Symbol('newContext')
  context[symbol] = this
  return function (args2) {
    var val = eval('context[symbol]('+ (args1 || []).concat(args2 || []).join(',') +')')
    delete context.fn
    return val
  }
}

const preBSayName = a.sayName1.myBind(b, [1])
