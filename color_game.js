//program will stop executing after error

//alert("connected");

/* var colors = [
"rgb(255, 0, 7)",
"rgb(223, 32, 123)",
"rgb(255, 0, 7)",
"rgb(223, 32, 123)",
"rgb(255, 0, 7)",
"rgb(223, 32, 123)"
] */

var h1=document.querySelectorAll("h1");

var colors=generate_random_colors(6);

var squares = document.querySelectorAll(".square");
squares[0].style.backgroundColor = "blue";

//var pickcolor = colors[1];
//math.random select number between[0,1)

var pickcolor = pickrandomcolor();

var rgb = document.getElementById("rgb");
rgb.textContent=pickcolor;
var message = document.getElementById("message");

//function for changing all colors after selecting correct choice


for(var i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	//add click listeners
	squares[i].addEventListener("click",function(){
		//alert("clicked");
		//this is used to point current object
		if(this.style.backgroundColor == pickcolor)
		{
			//alert("correct");
			message.textContent = "correct";
			changecolors(pickcolor);
			h1[0].style.backgroundColor = pickcolor;
		}
		else
		{
			//alert(this.style.backgroundColor);
			//alert(pickcolor);
			this.style.backgroundColor="black";
			message.textContent = "try again";
		}
	})
}

function generate_random_colors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr[i]=random_color();
	}
	return arr;
}
function random_color()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb"+"("+r+", "+g+", "+b+")";
}

function pickrandomcolor()
{
	return colors[Math.floor(Math.random()*colors.length)];
}

function changecolors(color)
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}  