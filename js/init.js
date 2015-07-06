"use strict";

var renderedObject = [];

/*Game Application, creates canvas and controls it, if supported*/
var GameApplication = (function(global){
	var doc = global.document, 
		win = global.window,
		canvas, ctx, lastTime,
        nRenderedObjects = 0;
	canvas = doc.createElement('canvas');
	ctx = canvas.getContext('2d');
		
	/*Function checks if action script is supported or not*/
	function isCanvasSupported(){
  		var tempcanvas = document.createElement('canvas');
  		return !!(canvas.getContext && canvas.getContext('2d'));
	}

	/* Initialize the canvas, if not supported go to webpage instead */
	function init() {
        //lastTime = Date.now();
		if(isCanvasSupported()) {
			canvas.width = 1305;
			canvas.height = 735;
			$("#pageBody").prepend(canvas);
			main();	
		}
		else {
			document.location.href = "../pages/Home.html";
			console.log("Your browser does not support canvas");
		}
	}
	
	/*Main Loop*/
	function main() {
		
		//Time
		var now = Date.now(),
		dt = (now - lastTime) / 1000.0;

        //Clear frame buffer
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        update(dt); //Update Function
        render(); //Render Function

        lastTime = now; //Set the new time per frame

        //Recursive
        win.requestAnimationFrame(main);
    }
    
    function update(dt) {
    	
    }
    
    function render() {
        nRenderedObjects = renderedObject.length;
        for (var i = 0; i < nRenderedObjects; ++i) {
            renderedObject[i].render();
        }
    }

	global.canvas = canvas;
    global.ctx = ctx;

	init();
})(this);

//Object base class, can be animated
var AObject = function (x, y, sprite) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.frame = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 0;
};

AObject.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var halfScreen = function (x, y, sprite) {
    sprite = sprite || 'testBG';
    x = x || 0;
    y = y || 0;
    AObject.call(this, x, y, sprite);
};

halfScreen.prototype = Object.create(AObject.prototype);
halfScreen.prototype.constructor = halfScreen;

halfScreen.prototype.render = function () {
    ctx.drawImage(images[this.sprite], this.x, this.y);
};

document.addEventListener('click', function (event) {
    //var x = event.pageX - canvas.offsetLeft;
    //var x = event.pageY - canvas.offsetLeft;
    console.log("Hello");
}, false);

renderedObject.push(new halfScreen(0, 0));

$("#navPanel").click(function () {
    if (document.getElementById("navPanel").className == "close") {
        document.getElementById("navPanel").className = "open";
        document.getElementById("navMenu").style.width = "200px";
    }
    else if (document.getElementById("navPanel").className == "open") {
        document.getElementById("navPanel").className = "close";
        document.getElementById("navMenu").style.width = "0px";
    }
});

$(document).ready(function () {

    /*var hash = window.location.hash.substr(1);
    var href = $('.PAGE').each(function () {
        var href = $(this).attr('href');
        if (hash == href.substr(0, href.length - 5)) {
            var toLoad = hash + '.html #pageBody';
            $('#pageBody').load(toLoad)
        }
    });*/

    /*

    $('.PAGE').click(function () {
        var toLoad = $(this).attr('href') + ' #pageBody';
        $('#pageBody').hide('fast', loadContent);
        $('#load').remove();
        $('#currentPage').append('<span id="load">LOADING...</span>');
        $('#load').fadeIn('normal');
        console.log($(this).attr('href').substr(0, $(this).attr('href').length));
        window.location.hash = $(this).attr('href').substr(0, $(this).attr('href').length-5);
       // window.history.pushState('object or string', 'Title', '/new-url'); 
        //window.history.replaceState('object or string', 'Title', '/another-new-url'); 
        function loadContent() {
            $('#pageBody').load(toLoad, '', showNewContent())
        }
        function showNewContent() {
            $('#pageBody').show('normal', hideLoader());
        }
        function hideLoader() {
            $('#load').fadeOut('normal');
        }
        return;
    });

    $(".PAGE").click(function () {
        if (document.getElementById("transitionPage").className != "isLoading") {
            document.getElementById("transitionPage").className = "isLoading";
            $("#transitionPage").fadeIn(240);
            document.getElementById("navPanel").className = "close";
            document.getElementById("navMenu").style.width = "0px";
            $("#transitionPage").fadeIn(300, function () {
                setTimeout(function () {
                    $("#transitionPage").fadeOut(200, function () {
                        document.getElementById("transitionPage").className = "isReady";
                        return;
                    });
                }, 600);
            });
        }
        return false;
    });
    */
});