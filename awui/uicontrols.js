{/* <ul class="navigator-menubar">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
      </ul> */}


module.exports = function CreateNavigator(navName, navItems, floatDirection = 'left') {
  // Initialize and declear the parent element.
  let nav = document.getElementById(navName);

  // Check if the user changed the float direction.
  if (floatDirection === 'right') {
    nav.style.setProperty('--navigator-float', 'right');
  } else {
    nav.style.setProperty('--navigator-float', 'left');
  }

  nav.innerHTML = '<ul class="navigator-menubar">';

  let item = document.getElementsByClassName('navigator-menubar');

  console.log(navItems.Items);
  
  nav.innerHTML += '</ul>';
  
}

