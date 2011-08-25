#Notifly

Dim The Lights (DTL) is a jQuery plugin which allows you to darken the area around any element. 

##Usage

Include the CSS and Javascript files in the &lt;head&gt;

	<head>
		<link href="jquery.dimlights.css" type="text/css" rel="stylesheet" />

		<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
		<script src="jquery.dimlights.js" type="text/javascript"></script>
	</head>

Call DTL anywhere using $.notifly()

    $("#some_elem").click(function() {

        $.dimTheLights();

    });

##Example

**[Main example](http://jordan-adams.co.uk/dimthelights)**

Feel free to send me other examples.

##Settings

**opacity** - How much to darken by. Accepts 0-1 and defaults to 0.75.

**background** - The background to apply to the element after. Accepts any CSS valid colour.

**classes** - Any additional classes to apply to the element. Accepts an array of strings such as ['rounded', 'shadow', 'red_border']

##Issues & Bugs

Report any issues using one of the following:

* Github's issue tracker
* Twitter: @JordanCallumA
* Email: jordan_callum@live.co.uk