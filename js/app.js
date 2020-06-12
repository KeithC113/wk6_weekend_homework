//load the DOM
//log the 3 elements of information submitted in the form
//  these elements are held within the event
// create a new item via create element function which contains the 3 bits of info
//add the item to beneath the actor list heading
//  appendchild on to the list
//clear the form input fields for next input

document.addEventListener('DOMContentLoaded',() => {
// console.log('JavaScript loaded');

// create new item list in the DOM
  const newItemForm = document.querySelector('#new-item-form')
// the variable listens out for the submit event, then calls function HNIFS
  newItemForm.addEventListener('submit', handleNewItemFormSubmit)
});

const handleNewItemFormSubmit = function(event){
  event.preventDefault();

// make a new list item with the 3 elements of information from the event
const actorListItem = createActorListItem(event.target)

// get the items from the actor list
const actorList = document.querySelector('#actor-list');

// add the new item to below the actor list passing the new item (ln 22)
actorList.appendChild(actorListItem)
};
// this function creates the new actor list item
const createActorListItem  = function(form){
  const actorListItem = document.createElement('li')
  actorListItem.classList.add('actor-list-item')

  const name = document.createElement('h2');
  name.textContent = form.title.value;
  actorListItem.appendChild(name)

  const film = document.createElement('h3');
  film.textContent = form.film.value;
  actorListItem.appendChild(film);

  const year = document.createElement('p');
  year.textContent = form.year.value;
  actorListItem.appendChild(year);

  // needs returned
  return actorListItem;

};
