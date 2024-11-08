### what is Event Loop

Event Loop JavaScript में एक महत्वपूर्ण concept है, जो की इसका रनटाइम environment द्वारा प्रबंधित किया जाता है।

Event Loop उन events को track करता है जो queue में आ गए हैं और उन्हें handle करता है। Event Loop एक infinite loop होता है जो की constantly running रहता है।

जब कोई event, जैसे की click event, timer event या HTTP request की response, trigger होता है तो उसे callback function में डाला जाता है। फिर Event Loop उन callbacks को execute करता है जो queue में हैं।

यदि कोई callback long-running हो तो Event Loop नॉन-ब्लॉकिंग होने की guarantee देता है।

यहां एक example है:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 2000);

setTimeout(() => {
  console.log("Timeout 2");
}, 1000);

console.log("End");
```

इस example में, सबसे पहले "Start" print होगा। फिर setTimeout function के callbacks को queue में डाला जाएगा। 2 seconds बाद, "Timeout 1" print होगा और 1 second बाद "Timeout 2" print होगा। अंत में, "End" print होगा।

इस example में, Event Loop ने callbacks को queue में FIFO (First-In-First-Out) order में execute किया है।
