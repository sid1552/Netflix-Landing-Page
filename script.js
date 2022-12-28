const tabitems = document.querySelectorAll('.tab-item');
const tabcontentitems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectitem(e) {
  removeborder();
  removeshow();
  //Add border to current tab
  this.classList.add('tab-border');
  // Grab content item from DOM
  const tabcontentitem = document.querySelector(`#${this.id}-content`);
  //Add show class
  tabcontentitem.classList.add('show');
}

function removeborder() {
  tabitems.forEach((item) => item.classList.remove('tab-border'));
}
function removeshow() {
  tabcontentitems.forEach((item) => item.classList.remove('show'));
}

// Listen for tab clicked
tabitems.forEach((item) => item.addEventListener('click', selectitem));
