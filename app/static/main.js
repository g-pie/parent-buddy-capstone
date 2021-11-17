// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Double click to change text
document.querySelectorAll("ul li").forEach(function(node){
	node.ondblclick=function(){
    // Slice off the close button from the task text
		var val=this.innerText.slice(0, -1);
    // Create input box to edit text
		var input=document.createElement("input");
		input.value=val;
		input.onblur=function(){
			var val=this.value;
      var newTask=this.parentNode;
			newTask.innerText=val;
      // Append a close button to the task again
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.appendChild(txt);
      span.className = "close";
      span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
      newTask.appendChild(span);     
		}
		this.innerText="";
		this.appendChild(input);
		input.focus();
	}    
});
