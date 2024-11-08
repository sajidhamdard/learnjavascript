### BOM Window object

BOM Window object in Javascript एक global object होता है जो ब्राउज़र के विंडो को represent करता है। यह ऑब्जेक्ट सभी विंडो-related methods और properties जैसे alert(), confirm() आदि को support करता है।

इस ऑब्जेक्ट में बहुत सारी मेथड और प्रॉपर्टी होती हैं। कुछ उनमें से हैं:

- alert(): यह message box show करता है जिसमें Ok button होता है।
- confirm(): यह message box show करता है जिसमें Ok और Cancel button होते हैं।
- prompt(): यह message box show करता है जिसमें user से input लेता है।
- window.open(): यह एक नयी विंडो open करता है।
- window.close(): यह current विंडो को close करता है।
- setInterval(): यह function को specific time interval में repeat करता है।
- setTimeout(): यह function को specific time interval के बाद run करता है।

एक example के रूप में, यदि हमें उपयोगकर्ता से confirm message box के माध्यम से confirmation लेनी हो तो हम निम्नलिखित code का उपयोग कर सकते हैं:

```
if (confirm("Are you sure you want to delete this item?")) {
    // delete the item
} else {
    // do nothing
}
```

इस code में, confirm() method का उपयोग message box show करने के लिए किया गया है जो user से confirmation के बारे में पूछता है। उपयोगकर्ता जब Ok button को click करता है, तब if block में वहाँ कुछ code execute होता है और जब Cancel button को click करता है तब else block में कुछ code execute होता है।

### BOM History object

Iska upyog aap kisi bhi webpage ke history se sambandhit kaam karne ke liye kar sakte hain, jaise ki pichhli webpage par jaana ya agle webpage par jaana.

Here is an example of how to use the BOM History object in JavaScript:

```
// Add a new entry to the browser history
history.pushState({page: 1}, "Page 1", "?page=1");

// Navigate back to the previous page
history.back();

// Navigate forward to the next page
history.forward();

// Replace the current entry in the history with a new one
history.replaceState({page: 2}, "Page 2", "?page=2");

// Get the number of entries in the browser history
var numOfEntries = history.length;
```

Is example mein, `pushState()` method ka upyog kiya gaya hai ek naye entry ko browser history mein add karne ke liye, `back()` method ka upyog kiya gaya hai pichhle webpage par jaane ke liye, `forward()` method ka upyog kiya gaya hai agle webpage par jaane ke liye, `replaceState()` method ka upyog kiya gaya hai current entry ko nayi entry se replace karne ke liye, aur `length` property ka upyog kiya gaya hai browser history mein maujood entries ki sankhya ko jaanne ke liye.
