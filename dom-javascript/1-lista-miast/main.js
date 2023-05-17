let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];


let list = document.createElement('ol');


cities.forEach(city => {
  let listItem = document.createElement('li');
  listItem.textContent = city;
  listItem.classList.add('city');
  list.appendChild(listItem);
});

document.getElementById('cities-list').appendChild(list);