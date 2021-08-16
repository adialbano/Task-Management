// Append a close button for each task
const myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Removes task from list
const close = document.getElementsByClassName("close");
var i;    // var because value ++
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Event listener on button linked to the function that selects UL and removes all children on a loop


function removeLista() {
  const lista = document.querySelector('#myUL');
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
}
}


// Mark as done
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Add button
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {   // checks if there is any input
    alert("You must write something to add to task management list!");
  } else {
    document.getElementById("myUL").appendChild(li);   //appends the info the the list
  }
  document.getElementById("myInput").value = "";   //clears the text input field

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("x");
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