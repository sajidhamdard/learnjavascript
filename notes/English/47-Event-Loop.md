### Event Loop in JavaScript ?

The event loop is a key mechanism in JavaScript that allows it to work with non-blocking I/O operations while maintaining a single-threaded execution model. 

The event loop continuously checks for new events, such as user input or network responses, in a queue called the "event queue". When an event occurs, it's added to the end of the queue. The event loop then retrieves the first event from the queue and passes it to the "call stack" for execution.

The call stack is a data structure that keeps track of function calls in the program. When a function is called, it's added to the top of the stack, and when it returns, it's removed from the top of the stack. Each function is executed in order, one at a time, until the stack is empty.

When an event handler is added to the event queue, it's not immediately executed. Instead, it waits for the call stack to be empty before being executed. This ensures that the current function finishes executing before any event handlers are executed.

In summary, the event loop is a critical component of JavaScript that allows it to handle asynchronous operations efficiently. By using the event queue and call stack, JavaScript can perform non-blocking I/O operations while maintaining a single-threaded execution model.

