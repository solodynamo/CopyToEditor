'use strict';
var script = document.createElement("script");
script.type = "text/javascript";
script.innerHTML = "\n" +
    "var loc = window.location.hostname;\n" +
    "var stackoverflowRegex = new RegExp('stackoverflow.com', 'g');\n" +
    "var cssTricksRegex = new RegExp('css-tricks.com', 'g');\n" +
    "var mozillaRegex = new RegExp('mozilla', 'g');\n" +
    "var twitterRegex = new RegExp('twitter.com', 'g');\n" +
    "var w3sRegex = new RegExp('w3schools', 'g');\n" +
    "if (loc.match(stackoverflowRegex) || loc.match(mozillaRegex)) {\n" +
    "Array.from(document.getElementsByTagName('pre'))\n" +
    ".forEach(function (block) {\n" +
    "block.addEventListener('dblclick', function (event) {\n" +
    "var range = document.createRange();\n" +
    "range.selectNode(block);\n" +
    "try {\n" +
    "window.getSelection().addRange(range);\n" +
    "document.execCommand('copy');\n" +
    "window.getSelection().removeAllRanges();\n" +
    "block.style.border = '5px dashed #D81159';\n" +
    "setTimeout(function () {\n" +
    "return block.style.border = 'none';\n" +
    "}, 500);\n" +
    "} catch (err) {\n" +
    "console.log('Failed to copy', err);\n" +
    "}\n" +
    "});\n" +
    "});\n" +
    "}\n" +
    "if (loc.match(twitterRegex)) {\n" +
    "Array.from(document.getElementsByClassName('js-tweet-text-container'))\n" +
    ".forEach(function (block) {\n" +
    "block.addEventListener('dblclick', function (event) {\n" +
    "var range = document.createRange();\n" +
    "range.selectNode(block);\n" +
    "try {\n" +
    "window.getSelection().addRange(range);\n" +
    "document.execCommand('copy');\n" +
    "window.getSelection().removeAllRanges();\n" +
    "block.style.border = '5px dashed #D81159';\n" +
    "setTimeout(function () {\n " +
    "return block.style.border = 'none';\n" +
    "}, 500);\n" +
    "} catch (err) {\n" +
    "console.log('Failed to copy', err);\n" +
    "}\n" +
    "});\n" +
    "});\n" +
    "}\n" +
    "if(loc.match(w3sRegex)) {\n" +
    "Array.from(document.getElementsByClassName('w3-code'))\n" +
    ".forEach(function (block) {\n" +
    "block.addEventListener('dblclick', function (event) {\n" +
    "var range = document.createRange();\n" +
    "range.selectNode(block);\n" +
    "try {\n" +
    "window.getSelection().addRange(range);\n" +
    "document.execCommand('copy');\n" +
    "window.getSelection().removeAllRanges();\n" +
    "block.style.border = '5px dashed #D81159';\n" +
    "setTimeout(function () {\n" +
    "return block.style.border = 'none';\n" +
    "}, 500);\n" +
    "} catch (err) {" +
    "console.log('Failed to copy', err);" +
    "}" +
    "});" +
    "});" +
    "}" +
    "if(loc.match(cssTricksRegex)) {\n" +
    "Array.from(document.getElementsByTagName('code'))\n" +
    ".forEach(function (block) {\n" +
    "block.addEventListener('dblclick', function (event) {\n" +
    "var range = document.createRange();\n" +
    "range.selectNode(block);\n" +
    "try {\n" +
    "window.getSelection().addRange(range);\n" +
    "document.execCommand('copy');\n" +
    "window.getSelection().removeAllRanges();\n" +
    "block.style.border = '5px dashed #D81159';\n" +
    "setTimeout(function () {\n" +
    "return block.style.border = 'none';\n" +
    "}, 500);\n" +
    "} catch (err) {\n" +
    "console.log('Failed to copy', err);" +
    "}" +
    "});" +
    "});" +
    "}"
window.onload = document.head.appendChild(script);
