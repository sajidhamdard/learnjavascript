# Separation of Concerns

### What is separation of concerns principle?

"Separation of Concerns" ek programming principle hai jisme developers ko apne code ko alag-alag sections mein divide karne ki salah di jati hai, jisme har section ka apna alag kaam hota hai. JavaScript mein ye principle alag-alag levels par apply kiya ja sakta hai jaise presentation aur content ko alag rakhna aur business logic ko user interface se separate karna.

Ek udaharan ke roop mein, maan lo ki aap ek web application bana rahe hain jisme users notes create aur edit kar sakte hain. Separation of concerns principle ko apply karne ke liye, aap apna code in sections mein divide kar sakte hain:

1. User interface: Is section mein application ke sabhi visual aspects handle kiye jaate hain jaise notes ko screen par dikhana aur unse interaction karne ki suvidha dena. Isme user input validation bhi handle ki jaati hai.

2. Business logic: Is section mein application ke behind-the-scenes logic ko handle kiya jaata hai jaise notes create, update, aur delete karna. Isme data validation bhi handle ki jaati hai.

3. Data storage: Is section mein notes ko database ya local storage mein store aur retrieve karna handle kiya jaata hai.

In concerns ko alag-alag rakhne se, har section ko independently develop aur maintain kar sakte hain, jisse code ko samajhna, test karna aur modify karna aasaan ho jata hai.

### How to link JavaScript file in html ?

JavaScript ko HTML mein link karne ke liye aapko <script> tag ka upyog karna hota hai. Yahan par main ek example share kar raha hoon jis mein main ek JavaScript file ko HTML page ke sath link kar raha hoon:

1. Sabse pehle aapko apna JavaScript file ko create karna hoga. Aap iske liye notepad, Visual Studio Code ya kisi bhi text editor ka upyog kar sakte hain.

2. Jab aap apna JavaScript file create kar lete hain, tab aapko usko save karna hoga. Aapko file name ke end mein ".js" extension add karna hoga. Jaise ki "script.js".

3. Ab HTML page ko open karein aur head section mein <script> tag ka upyog karein. Iske baad src attribute mein apne JavaScript file ka path dena hoga. Yeh path relative ho sakta hai ya absolute bhi ho sakta hai.

4.Yahan par maine ek JavaScript file "script.js" banaya hai aur use "index.html" mein link kiya hai.

```javascript
<!DOCTYPE html>
<html>
<head>
	<title>JavaScript file ko HTML se link kaise karein</title>
	<script src="script.js"></script>
</head>
<body>
	<h1>Welcome to my website</h1>
</body>
</html>
```

Is example mein, humne <script> tag ka upyog kiya aur usmein src attribute mein "script.js" ka path diya hai. Agar script.js file index.html file se alag folder mein hai toh aapko path ko accordingly update karna hoga.
