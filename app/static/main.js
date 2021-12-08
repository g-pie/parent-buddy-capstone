// Create a "close" button and append it to each list item

function comparator(a, b) {
  if (parseInt(a.dataset.priority, 10) < parseInt(b.dataset.priority,10))
      return -1;
  if (parseInt(a.dataset.priority,10) > parseInt(b.dataset.priority,10))
      return 1;
  return 0;
}

// Function to sort Data
function SortData() {
  var indexes = document.querySelectorAll("[data-priority]");
  var indexesArray = Array.from(indexes);
  console.log(indexesArray);
  let sorted = indexesArray.sort(comparator);
  sorted.forEach(e =>
      document.querySelector("#myUL").appendChild(e));
}
SortData();
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
    let links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute('rel') == 'stylesheet') {
            let href = links[i].getAttribute('href')
                                    .split('?')[0];
              
            let newHref = href + '?version=' 
                        + new Date().getMilliseconds();
              
            links[i].setAttribute('href', newHref);
        }
    }
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
  var inputPriority = document.getElementById("myPriority").value;
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else if(inputPriority == ""){
    alert("you must input a priority");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  li.dataset.priority = inputPriority;
  SortData();
  document.getElementById("myInput").value = "";
  console.log(inputPriority);
  document.getElementById("myPriority").value = "";
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
