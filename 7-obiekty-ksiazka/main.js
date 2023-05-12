class Ksiazka {
    constructor(tytul, autor, przeczytana) {
      this.tytul = tytul;
      this.autor = autor;
      this.przeczytana = przeczytana;
    }
  
    opiszKsiazke() {
      if (this.przeczytana) {
        return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i jest przeczytana.`;
      } else {
        return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i nie jest przeczytana.`;
      }
    }
  }
  
  let ksiazka1 = new Ksiazka("Harry Potter", "Rowling", true);
  let ksiazka2 = new Ksiazka("Wiedzmin", "Sapkowski", true);
  let ksiazka3 = new Ksiazka("Potop", "Sienkiewicz", false);
  let arrayBooks = [ksiazka1, ksiazka2, ksiazka3];
  console.log(arrayBooks);
  
  const iloscPzeczytanych = (tablica) => {
    let suma = 0;
    tablica.forEach((element) => {
      if (element.przeczytana) {
        suma++;
      }
      console.log(element.opiszKsiazke());
    });
  
    return suma;
  };
  
  let iloscPrzeczytanychKsiazek = iloscPzeczytanych(arrayBooks);
  console.log(`Ilość przeczytanych książek: ${iloscPrzeczytanychKsiazek}`);
  