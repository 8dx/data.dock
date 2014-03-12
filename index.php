<html>
  <head>
    <title>YOU SHOULD NOT SEE THIS</title>
    <link rel="stylesheet" href="res/css/main.css">
  </head>
  <body>
    DOCUMENTATION FOR SOME SHIT<br />
    FUCKING CAN I GET SOME YAML OR SOME SHIT PLS<br />
    also cocks
    <form>
	<textarea id="yaml" placeholder="YAML goes here." class='yaml-container' autofocus></textarea>
    </form>
    <input type='button' value='DOC ME PLS' />
    <div id='container'>
    </div>
    <script src='res/js/js-yaml.min.js'></script>
    <script src='res/js/markdown.js'></script>
    <script src='res/js/wysi-parser-advanced.js'></script>
    <script src='//cdnjs.cloudflare.com/ajax/libs/wysihtml5/0.3.0/wysihtml5.min.js'></script>
    <script src='//cdnjs.cloudflare.com/ajax/libs/kineticjs/5.0.1/kinetic.min.js'></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src='//cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.0/js/toastr.min.js'></script>
    <script>
	$(function() {
		var editor = new wysihtml5.Editor("yaml", { // id of textarea element
		  parserRules:  wysihtml5ParserRules // defined in parser rules set 
		});
		
	})
    </script>
  </body>
</html>
