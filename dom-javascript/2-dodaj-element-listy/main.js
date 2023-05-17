document.getElementById('addItemBtn').addEventListener('click', function() {
    var itemsList = document.getElementById('items');  // Pobranie listy elementów
    var itemCount = itemsList.getElementsByTagName('li').length;  // Pobranie ilości istniejących elementów
  
    var newItem = document.createElement('li');  // Tworzenie nowego elementu li
    newItem.textContent = 'Item ' + (itemCount + 1);  // Ustawienie tekstu dla nowego elementu
    newItem.classList.add('item');  // Dodanie klasy 'item' do nowego elementu
  
    itemsList.appendChild(newItem);  // Dodanie nowego elementu do listy
  });
  