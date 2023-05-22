/* 1	function setBackground() {
    2	    console.log( "click" );
    3	}
    4	 
    5	document.getElementById( "link" ).addEventListener("click", setBackground );
     */
    console.log(`ustaw tlo elementow HTML`);

    const setBackground = () => {
        let p1 = document.querySelector('.first');
        let p2 = document.querySelector('.last');

        p1.classList.toggle('bg-red');
        p2.classList.toggle('bg-yellow');



        /* p1.style.backgroundColor = 'red';
        p2.style.backgroundColor = 'yellow'; */


   }

    let btnSetBackrground = document.getElementById('set-background');
    btnSetBackrground.addEventListener('click', setBackground);
