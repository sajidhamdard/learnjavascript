# ========== String functions ==========

### slice():

array method में start और end index से नए array को return किया जाता है |
start : इस index से slice की शुरुआत होती है | यहाँ पर अगर negative index होता है तो array के end से slice किया जाता है |
end : इस index पर slice का end होता है | ये optional होता है | यहाँ ये दिया नहीं जाता तो start से array के सभी elements return किये जाते है |

- for example

```
var str = "Hello World!";
document.write(str.slice(3, 9) + "<br />"); //lo Wor
document.write(str.slice(3, -2) + "<br />"); //lo Worl
document.write(str.slice(-3, -1)); //ld
```

### substring():

substring method से String से दिए हुए startindex से endindex तक substring को return किया जाता है |

- Parameter :
  startIndex : यहाँ पर starting index दी जाती है |
  endIndex : यहाँ पर end Index दी जाती है | ये optional होता है |

- Example for substring()

```
var str = "Hello World!";
document.write(str.substring(1) + "<br />"); //ello World!
document.write(str.substring(1, 6) + "<br />"); //ello
```

### substr():

substr method से String से दिए हुए index से उसके दिए हुए length तक substring को return किया जाता है |

- Parameter :
  startIndex : यहाँ पर starting index दी जाती है |
  length : यहाँ पर substring की length दी जाती है | ये optional होता है |
  Example for substr()

```
var str = "Hello World!";
document.write(str.substr(1) + "<br />");
document.write(str.substr(1, 6) + "<br />");
```

### replace():

method से दिए हुए string या regular expression को newvalue से replace किया जाता है |
substring/regexp : यहाँ पर जिस string या regular expression को replace करना है वो string यहाँ पर आता है |

- Parameter :
  newValue : String को replace करके आनेवाली नयी string यहाँ पर आती है |
  अगर String replace नहीं होता तो original string return होता है |

- for example:

```
var str = "Hello World!";
document.write(str.replace("World", "Rakesh")); //Hello Rakesh!
```

### repeat():

method से दिए हुए numbers तक string को return किया जाता है |

- Parameter :
  count_str : यहाँ पर जितनी बार string को repeat करना है वो number यहाँ पर आता है |

- for example:

```
var str = "Hello World!";
document.write(str.repeat(4)); //Hello World!Hello World!Hello World!Hello World!
```

### toUpperCase():

method से दिए हुए string को uppercase string में return किया जाता है |

- for example:

```
var str = "Hello World!";
document.write(str.toUpperCase() + "<br />"); //HELLO WORLD!
```

### toLowerCase():

method से दिए हुए string को lowercase string में return किया जाता है |

```
var str = "Hello World!";
document.write(str.toLowerCase() + "<br />"); //hello world!
```

### concat():

method से एक से ज्यादा string को मुख्य string से जोड़ा जाता है |

- for example:

```
var str1 = "Hello ";
var str2 = "World!";
document.write(str1.concat(str2)); //Hello World!
```

### trim():

method से String की शुरुआत और आखिरी whitespaces को trim किया जाता है |

- for example:

```
var str = "    Hello World!          ";
document.write(str.trim());
```

### split():

method से दिए हुए character से string को split array return किया जाता है |
seperator:यहाँ पर जिस character से seperate किया जाता है वो character यहाँ पर दिया जाता है | ये character string में include नन्ही होता |

- limit : split करने की संख्या यहाँ पर दी जाती है |

- for example:

```

var str = "Hello World!";
document.write(str.split("l", 4) + "<br />"); //He,,o Wor,d!
document.write(str.split(" ") + "<br />"); //Hello,World!

```

### indexOf():

method से दिए हुए characters का first occurrence का index return किया जाता है

- str.indexOf(searchValue, startIndex)
- searchValue : यहाँ पर वो character या string आता है जिसका index return किया जाता है |
- startIndex : जहा से शुरुआत करनी है वो index यहाँ पर आता है | ये optional होता है | default value '0' होती है |

indexOf() जब कोई value search नहीं होती तो -1 return होता है |

- for example:

```

var str = "Hello World!";
document.write(str.indexOf("l", 6)); //9

```

### lastIndexOf():

method से दिए हुए characters का last occurrence का index return किया जाता है |

- Syntax for lastIndexOf()
  str.lastIndexOf(searchValue, startIndex)

- Parameter :
- searchValue : यहाँ पर वो character या string आता है जिसका index return किया जाता है |
- startIndex : जहा से शुरुआत करनी है वो index यहाँ पर आता है | ये optional होता है | default value '0' होती है | String के उलटी दिशा से index start होता है |
  lastIndexOf() जब कोई value search नहीं होती तो -1 return होता है |

- for example:

```

var str = "Hello World!";
document.write(str.lastIndexOf("l", 6)); //3

```

### startsWith():

method से दिए हुए String की शुरुआत दिए हुए character या substring से हुई है या नहीं हुई है ये boolean value में return किया जाता है |

- Syntax for startsWith()
  str.startsWith(startStr, startIndex)

- Parameter :

- startStr : यहाँ पर starting substring दिया जाता है |
- startIndex : जहा से start करना है वो inde यहाँ पर दी जाती है | ये optional होता है | इसकी default value '0' होती है |

- for example:

```

var str = "Hello World!";
document.write(str.startsWith("Hello") + ""); //true
document.write(str.startsWith("World", 6) + ""); //true

```

### endsWith():

method से दिए हुए character या substring से string की end हुई है या नहीं ये boolean value में return करता है |

-Syntax for endsWith()

str.endsWith(endStr)

- Parameter :
- endStr : ये end substring होती है |
- for example:

```

var str = "Hello World!";
document.write(str.endsWith("!")); //true

```

### search():

method से दिए हुए regular expression से string को search किया जाता है |

- Syntax for search()
- str.search(regexp)
- Parameter :
- regexp : यहाँ पर regular expression दिया जाता है, अगर string दिया जाता है तो वो regular expression में convert हो जाता है |

जब search found होता है तो उसका index return किया जाता है अगर found नहीं होता तो -1 value return होती है |

- for example:

```

var str = "Hello World!";
document.write(str.search("World"));

```
