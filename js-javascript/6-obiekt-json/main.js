let jsonPracownicy = {
    "pracownicy": [
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};

for (let pracownik of jsonPracownicy.pracownicy) {
    console.log(pracownik.lastName + " "+  pracownik.firstName)
    console.log(`pracownik: ${pracownik.lastName}   ${pracownik.firstName}`)
}


/* bezimienna funkcja strzalkowa */

jsonPracownicy.pracownicy.forEach((pracownik, index) => {
    console.log(pracownik.lastName + " "+  pracownik.firstName)
    console.log(`pracownik: ${pracownik.lastName}   ${pracownik.firstName} posiada index ${index}`)
} )

