/*
DOM (Document Object Model) , web page का object-oriented representation है जिसे scripting language like JavaScript के through change किया जा सकता है।

Simple भाषा में कहें तो , ये web pages को Objects और Nodes में represent करते हैं। कोई भी web page एक document है जो कि browser window या HTML Sources के रूप में हो सकता है।

यह simply web page को represent करता है , जो कि HTML के लिए programming interface है , जिससे कि programming languages like JavaScript इससे connect हो सकें और need के according manipulate कर सकें।

और जब भी कोई web page load होता है , browser automatically उस page के लिए Document Object Model create कर देता है।
चूंकि , DOM HTML के लिए एक Object और Nodes में represent है तो उसे कुछ तरह से समझ सकते हैं।

JavaScript Document Object Model

हालाँकि जब HTML को as a Object represent किया जाता है तो हर Object की कुछ Properties और methods होते हैं।

Methods के through किसी भी तरह की event , action या task perform करते हैं।
और Properties के through , Element Object ( HTML Elements ) के attributes की value set या get करते हैं।

हालाँकि, जैसा आपने अभी पढ़ा कि DOM HTML के लिए programming interface है , जिससे कि programming languages like JavaScript इससे connect हो सकें और need के according manipulate कर सकें।

JavaScript use करके Document में manipulate किये जाने वाले कुछ major task इस प्रकार हैं।

    Document में नया Element Add कर सकते हैं।
    Document में से Existing Element को Remove कर सकते हैं।
    Elements के text को modify कर सकते हैं।
    Elements के attributes को add कर सकते हैं या उनकी values को modify कर सकते हैं।
    सभी Elements पर CSS Style Apply कर सकते हैं।
    Document में सभी तरह की Events (like : click , hover , keyup, onchange etc . ) Easily Handle कर सकते हैं।
    किसी भी तरह के Element के लिए New Event Add भी कर सकते हैं।
*/
/*
Document में HTML Elements को find करने के लिए मुख्य रूप से इस प्रकार करते हैं -

    Select Element By ID
    Select Elements By Class Name
    Select Elements By Tag Name
    And Query Selectors


==========JS getElementById==========

document.getElementById(id) method का use HTML Elements में define की गयी ID के according element को select कर सकते हैं।

इस method के trough element select करने पर single element Object मिलता है , क्योंकि ID किसी भी element पर unique ही होती है, same ID को आप एक से ज्यादा elements पर नहीं लगा सकते हैं अगर document में Element present है तो इसका Object मिलता है, otherwise null .

See Example -*/

//File : DomElembyId.html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript DOM Elements</title>
  </head>
  <body>
    <p id="mypara">This is a simple paragraph</p>
  <script type="text/javascript"> 
    /* select elemnt and print it on console so that we can undertand well */
    let myapar = document.getElementById('mypara');
    console.log(mypara);
  </script> 
  </body>
</html>

/*
==========JS getElementsByClassName==========

getElementsByClassName(class_name) की help से वो सभी elements select करते हैं , जिन पर pass की गयी class लगी है। क्योंकि same class कई elements पर हो सकती है।

class के according elements select करने पर Elements NodeList मिलती है जो कि Array की तरह ही behave करती है। which means index के according एक particular element को access कर सकते हैं। हाँ ,सभी elements के लिए normal methods और properties लगभग same ही होंगी।

For Example -*/

File : DomElembyClassName.html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript DOM getElementsByClassName</title>
  </head>
  <body>
    <p class="testClass">This is first paragraph</p>
    <p class="testClass">This is second paragraph</p>
    <div class="testClass">This is third paragraph</div>
    <span class="testClass">This is fourth paragraph</span>
    <strong class="testClass">This is fifth paragraph</strong>
    <script type="text/javascript"> 
    let elements = document.getElementsByClassName('testClass');
        /*print it on console and see the difference*/
        console.log(elements);
        /* 
          however Nodelist behave like array . means you can access elemnt by index
          elements[0] for first element
          elements[1] for second element ....and so on
          also you can iterate it using for loop , for of loop or each
        */
     </script>  
  </body>
</html>


/*

==========JS getElementsByTagName==========

getElementsByTagName() का use HTML tag name के according elements को select करने के लिए use किया जाता। हालाँकि यहाँ भी HTML Document में मौजूद सभी Tags select हो रहे हैं , इसलिए getElementsByClassName() की तरह ही getElementsByTagName() भी Elements की NodeList return होती है।
For Example -

<script type="text/javascript">	
  /*select all <p> elements in document*/
  let p_elements = document.getElementsByTagName('p');

  /*select all <div> elements in document*/
  let div_elements = document.getElementsByTagName('div');

  /*select all anchors <a> elements in document*/
  let a_elements = document.getElementsByTagName('a'); 

  /*select all <img> elements in document*/
  let img_elements = document.getElementsByTagName('img'); 
</script>
 */

/*
==========JS Query Selectors==========

JavaScript का use करके CSS की तरह भी elements select कर सकते हैं। इसके लिए दो methods हैं -

    querySelector(selector)
    querySelectorAll(selector)


querySelector document में first matched element return करता है , pass किया जाने वाला selector कुछ भी हो सकता सकता है className , Id , Tag anything . ।

जबकि querySelectorAll document में present सभी matched element की NodeList return करता है।
For Example -

<script type="text/javascript">	
  /* select first <p> element */
  let p_element = document.querySelector('p');

  /* select first element with myClass */
  let class_element = document.querySelector('myClass');

  /*select all <p> elements in document*/
  let p_elements = document.querySelectorAll('p');

  /*select all elements with myClass*/
  let class_elements = document.querySelectorAll('.myClass');
</script>

इनके अलावा भी elements को select करने के तरीके है , आप किसी भी Element console में print कराकर आसानी से सभी functions बारे में जान सकते हैं।
/*


/*


 innerHTML & innerText ये दो Property DOM ( Document Object Model ) manipulation के लिए बहुत ही important हैं ,इस topic में आप इन्ही के बारे में details में पढ़ेंगे।
JS innerText

innerText का use selected element की text value return करता है या selected element के लिए new text value set करता है।

means अगर <p><span>Para Text </span></p> की innerText get करें तो हमें सिर्फ इसके अंदर की text value यानि "Para Text" ही मिलेगी , और new value set करने के लिए simple text value assign करके change कर सकते हैं ।

JS innerText Example

File : js_innerText.html


<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript innerText Example</title>
  </head>
  <body>
    <div id="mydiv">
      <p>Simple Paragraph <strong>Strong Text</strong></p>
    </div>
    <!-- here we will set text value-->
    <div class="result_div"></div>
    <script type="text/javascript"> 
      /* step 1 : select mydiv*/
      let div = document.getElementById('mydiv');
      /*step 2 : now select targeted div result_div*/
      let result_div = document.querySelector('.result_div');
      /*step 3 : finally set the text value in new div*/
      result_div.innerText = div.innerText;
    </script> 
  </body>
</html>


/*Example में आप देख सकते हैं कि div के अंदर के elements थे लेकिन हमें सिर्फ उसकी text value मिली , इसे आप inpect element करके भी देख सकते हैं।
 */

/*
==========jS innerHTML==========

वही अगर innerHTML की बात की जाए तो यह selected element के अंदर के Tags के साथ HTML Value return करती है या new HTML Value set करती है ।

Means अगर same element <p><span>Para Text </span></p> की innerHTML value get की जाए तो हमें "<span>Para Text </span>"  मिलेगा।
JS innerHTMl Example

File : js_innerHTML.html
Copy Fullscreen

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript innerHTML Example</title>
  </head>
  <body>
    <div id="mydiv">
      <p>Simple Paragraph <strong>Strong Text</strong></p>
    </div>
    <!-- here we will set text value-->
    <div class="result_div"></div>
    <script type="text/javascript"> 
      let div = document.getElementById('mydiv');
      let result_div = document.querySelector('.result_div');
      /* set html value in result_div*/
      result_div.innerHTML = div.innerHTML;
      /* now change html value of div element*/
      div.innerHTML = '<h3>This is new Value</h3>';
    </script> 
  </body>
</html>

/*Same Example में mydiv element से innerHTML value निकालकर result_div में set किया, फिर mydiv element में new HTML value को assign किया गया है। Inspect करके आप देख सकते हैं कि mydiv element में <p> element की जगह new HTML Value <h3> है।

 */

/*


Event किसी भी हो रहे Action के लिए एक signal है, जिससे पता चलता है कि कोई action perform हुई है । या simply कह सकते हैं कि Events actions या occurrence होती हैं।

For Example -

    Page का browser में load होना एक event है।
    किसी भी Element / Tag पर mouse hover करना या mouse को element से हटना event है।
    Element / Tag को select करना Event है।
    Keyboard में कोई button press करना event है।
    किसी input box में लिखना Event है।
    Select Element में से option select करना Event है।
    Form को submit करना event है।

JavaScript में ऐसी बहुत सी Events हैं , उनमे से कुछ General & Daily bases पर use होने वाली events इस प्रकार हैं। 
 
 
onload जब Browser में page load होता है तब यह event होती है।

onmouseover	किसी भी element पर mouse hover करते हैं , तब यह event होती है।

onmouseout	जब element के ऊपर mouse को हटाते हैं।

onclick	किसी Element पर click करने पर यह event occur होती है।

onchange	किसी select list में से कोई particular element select / change करने पर यह 
event occur होती है।

onkeydown	Keyboard में कुछ लिखने के लिए key press करते ही यह event occur होती है।

onkeypress	और के press करने के बाद input में character लिखते ही यह event होती है।

onkeyup	और जब key press करने के बाद button को release किया जाता है, यह event तब होती है।

onreset	Form reset होने पर यह event होती है।

onsubmit	Form के submit होने पर यह event occur होती है।

onresize	window के resize करने पर यह event होती है।

onscroll	Page scroll करने पर यह event होती है।

onbeforeprint	किसी page को print करने के लिए print dialog box open होने से पहले होती है।

onafterprint	Page print हो जाने के बाद यह event occur होती है।

❕ Important
Web Events Core JavaScript Language का part नहीं हैं , ये Browser APIs का part होती हैं जो कि Browser में inbuilt होती है।
*/

/*
 ==========Event handling===========
 किसी event को handle करने के लिए basically उस event को एक handler assign कर दिया जाता है। जहां handler कुछ और नहीं बल्कि एक Function होता है जो event के होने पर run होता है।

❕ Important
Web Events Core JavaScript Language का part नहीं हैं , ये Browser APIs का part होती हैं जो कि Browser में inbuilt होती है।

वैसे तो event handle करने के कई तरीके हैं , उनमे से कुछ main methods इस प्रकार हैं।
Handle Events Using HTML Attribute

इस type के event handlers को HTML Tags में ही एक attribute की तरह से define (on) किया जाता है।

File : html_attr_evennts.html
*/

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Event Handling</title>
  </head>
  <body>
    <button onclick="alert('You clicked')">click Event</button>  
    <button onmouseover="alert('Mouse over me')">mouseover</button>  
    <button onmouseout="alert('You just remove the mouse')">mouseout</button>

    <!-- now access the current element's  html -->
    <button onclick ="alert(this.innerHTML)"><b>Get HTML</b></button> 
    <!-- and try to eccess only text inside it -->
    <button onclick ="alert(this.innerText)"><b>Get Only Text</b></button> 
    <!-- try to change it's text value -->
    <button onclick ="this.innerText='This is new value' ">Click me to change</button> 
  </body>
</html> 

/*
ऊपर दिए गए example में events को handle किया गया है। इस type की events को handle करते समय ध्यान रहे कि हमेशा dual quote के अंदर single quote use करें। और Single quote के अंदर dual quote .

इसके साथ साथ current element को access करने के लिए this keyword का use किया गया है , जो कि current element को present करता है।

हालाँकि Example में सभी events को HTML Attribute में ही Handle किया गया , यह आप तब use कर सकते हैं जब आपको बहुत छोटे Tasks करने हो।

बड़े Tasks के लिए आप JavaScript Function call कर सकते हैं , और उस Function के अंदर आप अपनी Need के According Logic Apply हैं।
For Example -
*/
<!-- call a function with element Object on click -->
<button onclick="count(this)">You Clicked 0 Times</button>  
<script type="text/javascript">
  let number = 0;
  function count(element){
    number++;
    element.innerText = `You Clicked ${number} Times`;
  }
</script> 


/*
Explanation : इस Example में onclick event पर एक JavaScript Function call किया गया , और उस Function के अंदर Logic लिखा गया है। Function को call करते समय उसमे Current Element का Object Pass किया गया है , जिससे कि उस Element को Properties ( like : Text, HTML, या Attribute ) को get / set किया जा सके।
Assigning Handler Using DOM Property

HTML Attribute में Events को Handle करना काफी पुराना तरीका है , और इस तरह से Projects में Events Handle करना अच्छी Practice भी नहीं है। हम Handler को उस element को Assign भी कर सकते हैं।
See Example :*/

<button id="count_button">You Clicked 0 Times</button>  
<script type="text/javascript">
  let number = 0;
  count_button.onclick = function (){
    number++;
    count_button.innerText = `You Clicked ${number} Times`;
  }
</script>



/*
Explanation - One more thing , JavaScript में किसी element में defined ID के name से ही direct Element को select करके Event Handler Assign कर सकते हैं जैसे की ऊपर Example में दिखाया गया है।

ये handlers ठीक बैसे ही assign होते हैं , जैसे कि किसी variable में function Assign करना जिन्हे Anonymous Functions कहते हैं।

❕ Important
जब Event Handler को DOM Property के through assign करें तो इस बात का हमेशा ध्यान रहे कि Event Handler Function selected elements के बाद ही हो , other wise JS Error Generate कर देगी। क्योंकि JavaScript Scripting Language है , और हम defined ID के name से ही direct Element को select करते हैं।

जबकि HTML Attribute में function call करने पर वह function तभी call होता है जब कोई event होती है। इसलिए इस case में उस Function को Selected Element से पहले या बाद में कही भी रख सकते हैं।

 */



/*
 ========== Event Listener ==========

Basically Event Listeners , किसी selected Element में Event Attach या Detach करते हैं।

जैसा कि आपने पढ़ा कि Events आप कई तरह से Handle कर सकते हैं , HTML Attribute या DOM Property में Assign करके। इसके अलावा आप Event Listeners के Through किसी particular Element के लिए एक या एक से ज्यादा Events Add / Remove भी कर सकते हैं।

Element में Event Attach या Detach करने के लिए normally दो function use हैं -

addEventListener
removeEventListener

JS addEventListener

addEventListener() Function किसी selected Element में Event Attach करता है।
JS addEventListener Syntax

selected_element.addEventListener(event_name, callback_function, event_bubbling);

Parameters

event_name | required : First Parameter Event का name होता है जो कि mandatory है , जिसे Attach करना चाहते हैं , यहाँ event का name में on prefix नहीं करते हैं। For Eg. onclick की जगह सिर्फ click लिखते हैं और इसी तरह दूसरी events.

callback_function | required : Second Parameter Callback Function , ये भी mandatory है।

event_bubbling | optional : Third Parameter Event Bubbling है जो कि boolean value होती है , हालाँकि यह Optional है।

JS addEventListener Example

File : addEventListener.html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Add EventListener</title>
  </head>
  <body>
    <button class="change_bg">You Clicked 0 Times</button>  
    <script type="text/javascript">
      /*because we are getting Node List */
      let button_elem = document.getElementsByClassName('change_bg')[0];
      let number = 0;
      button_elem.addEventListener('click', function()
      {
        button_elem.innerText = `You Clicked ${++number} Times`;
      });
    </script>
  </body>
</html>



/*
JS removeEventListener

removeEventListener किसी selected element में से Attach की हुई Event को Detach / Remove करता है।
JS removeEventListener Example

File : removeEventListener.html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript removeEventListener</title>
  </head>
  <body>
    <button id="add_listener">You Clicked 0 Times</button> 
    <script type="text/javascript">
      let add_listener_btn = document.getElementById('add_listener');
      let number = 0;
      /*add listener*/
      add_listener_btn.addEventListener('click', function()
      {
        /*increment every time by one*/
        number++;

        /*remove click event listener if value is mora than 5*/
        if(number <= 5)
        {
          add_listener_btn.innerText = `You Clicked ${number} Times`;
        }
        else
        {        
          add_listener_btn.removeEventListener('click', function(){});
        }
      });
    </script>
  </body>
</html>
/*
दिए गए Example में जैसे ही number of clicks 5 से ज्यादा होंगे वैसे ही Button से click Event Listener Detach / Remove हो जायेगा और Button से click event work करना बंद कर देगी।
 */


/*
इस topic में JavaScript की help से एक simple calculator बनाएंगे।

Calculator बनाने के लिए simply पहले HTML में user interface तैयार करते हैं। End user को show करने के लिए।

File : js_calculator.html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Making Simple Calculator</title>

    <!-- style -->
    <style type="text/css">
      .main{
        width:402px;
        height: 257px;
        display: flex;
        justify-content: center;
      }
      .c-body {
        width: 400px;
        height: 255px;
        background: #ccc;
        border: 1px solid;
      }
      .c-num{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
      .c-operator{
        flex-shrink: 1;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
      }
      .c-row{
        display: flex;
        flex-flow: row;
      }
      .c-operator [id^='numid']{
        width: 90px;
        flex-direction: initial;
      }
      [id^='numid'] {
        display: flex;
        flex-shrink: 1;
        background: #fff;
        margin: 4px;
        width: 80px;
        justify-content: center;
        cursor: pointer;
        flex-direction: inherit;
      }
      .c-minputs .inbox{
        display: block;
        width: 100%;
      }
      [id^='numid']:hover{
        background: #f5f5f5;
      }
    </style>
  </head>
  <body>
    <!-- making result space -->
    <div class="main">
      <div class="c-body">
        <div class="c-minputs">
          <input id="intop" type="number" class="topin inbox" disabled>
          <input id="inbottom" type="number" class="bottomin inbox" placeholder="Enter Number">
        </div>
        <div class="c-row">
          <div class="c-num">

          </div>
          <div class="c-operator">
            <span class="numb" id="numidplus" onclick="set_data('plus')">+</span>
            <span class="numb" id="numidminus" onclick="set_data('minus')">-</span>
            <span class="numb" id="numiddiv" onclick="set_data('divi')">/</span>
            <span class="numb" id="numidmul" onclick="set_data('mul')">*</span>
            <span class="numb" id="numidans" onclick="set_answer('answer')">=</span>
            <span class="numb" id="numidclr" onclick="set_data('clr')">Clear</span>
          </div>
        </div>
      </div>
    </div>

    <script type="text/javascript">
      var cnum = document.getElementsByClassName('c-num')[0];
      var cope = document.getElementsByClassName('c-operator')[0];
      var inp_top = document.getElementById('intop');
      var inbottom = document.getElementById('inbottom');
      var newinbottom, numberHtml='';
      var newinbottom2;
      var sign;
      /* printing numbers 1 to 9 & 0 */
      for(i=0;i<10;i++)
      {
        numberHtml +='<span class="numb" value="'+i+'" id="numid'+i+'" onclick="puton('+i+')">'+i+'</span>';
      }
 
     cnum.innerHTML = numberHtml;
     document.getElementById('numid0').style.order = "1";
      function puton(numb)
      {
        inbottom.value += numb ;
      }

      function set_answer(answer)
      {
        if(inbottom.value ==''){
           alert('Type number');
        }
        else if(sign == "plus"){
            newinbottom2 = inbottom.value;
            inp_top.value = inbottom.value;
            inbottom.value = parseInt(newinbottom) + parseInt(newinbottom2);   
        }
        else if(sign == "minus"){
           newinbottom2 = inbottom.value;
           inp_top.value = inbottom.value;
           inbottom.value = newinbottom - newinbottom2;
        }else if(sign == "divi"){
            newinbottom2 = inbottom.value;
            inp_top.value = inbottom.value;
            inbottom.value = newinbottom / newinbottom2;
        }else if(sign == "mul"){
            newinbottom2 = inbottom.value;
            inp_top.value = inbottom.value;
            inbottom.value = newinbottom * newinbottom2;
        }
        sign ='';
      }

      function set_data(opra){
        switch (opra) {
          case 'clr':
            inp_top.value =''
            inbottom.value ='';
            newinbottom='';
            newinbottom='';
            sign ='';
            break;
          case 'plus':
            newinbottom = inbottom.value;
            inp_top.value = inbottom.value;
            inbottom.value = '';
            sign = "plus";
            break;
          case 'minus' : 
            newinbottom = inbottom.value;
            inp_top.value = inbottom.value;
            inbottom.value = '';
            sign = "minus";
            break;
          case 'divi':
            newinbottom = inbottom.value;
            inp_top.value = inbottom.value;
            inbottom.value = '';
            sign = "divi";
            break;
          case 'mul':
            newinbottom = inbottom.value;
            inp_top.value = inbottom.value;
            inbottom.value = '';
            sign = "mul";
            break;
          default:
            ans();
            break;
        }
      }
    </script>
  </body>
</html>


/*
Explanation:

   1. Example में simply सबसे पहले Calculator buttons के लिए HTML Code लिखा , then CSS apply करके थोड़ा सा beautiful बनाया जिससे buttons Calculator की तरह दिखें।

   2. उसके बाद सभी तरह के possible values को store करने के लिए variables define किये , और उनकी initial value 0 set कर दी। 0 से 9 तक buttons के लिए for loop का use किया गया है।

    3. Action button के लिए Attribute Event handler assign कर दिया , जिससे button click करने पर set_data() function call हो सके। Function में हर एक button के लिए different - different argument pass किया गया है जिससे कि यह पता लगाया जा सके कि कौन सी action perform होगी।

    4. जैसे कि set_data('plus') के लिए Addition होगा और set_data('clr') के लिए input & result को clear करने के लिए।

    5.अब जैसे ही function call होगा सभी input से value को get किया , then उन values को initialize किये गए variables में set कर दिया। और फिर जैसे ही Result Button (=) पर click किया जायेगा , values के according result को show करा दिया गया है।

 */

