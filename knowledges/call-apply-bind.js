

// call
//call
Function.prototype.call = function(context){
  if(typeof this !== 'function'){
      throw new TypeError('error')
  }
  context = context || window;
  context.fn = this;
  const args = [...argument].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

//apply
Function.prototype.call = function(context){
  if(typeof this !== 'function'){
      throw new TypeError('error')
  }
  context = context || window;
  context.fn = this;
  const result = [];
  if(arguments){
     result = context.fn(...arguments) 
  }else{
      result = context.fn()
  }
  return result
}

//bind
Function.prototype.call = function(context,obj){
  if(typeof this !== 'function'){
      throw new TypeError('error')
  }
  context = context || window;
  context.fn = this;
  var args = Array.prototype.slice.call(arguments,1)
  return function(){
      var params = Array.prototype.slice(arguments);
      context.fn(obj,args.concat(...params))
  }
}