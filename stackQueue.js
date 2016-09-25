// http://www.i-programmer.info/programming/javascript/1674-javascript-data-structures-stacks-queues-and-deques.html

// Stack is an interface that adheres to the "Last-In First-Out" (LIFO) mantra. In a stack, you can only push (add) or pop (remove.) 
// In JavaScript function call, it is also stack related. Function A calls Function B calls Function C

var stack=new Array();
stack.push("A");
stack.push("B");
stack.push("C"
alert(stack.pop());
alert(stack.pop());
alert(stack.pop());



//it is very common to treat an array as a stack and then convert back to normal array
// but if you really want to only treat it as a stack
// then you have to encapsulate an Array and expose only the push and pop methods.

function Stack()
{
 this.stack =new Array();
 this.pop = function(){
  return this.stack.pop();
 }
 this.push=function(item){
  this.stack.push(item);
 }
}

var stack=new Stack();
stack.push("A");
stack.push("B");
stack.push("C");

alert(stack.pop());
alert(stack.pop());
alert(stack.pop());





