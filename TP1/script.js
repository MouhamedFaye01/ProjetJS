// <!-- <div class="left">

// <
// div class = "haut"
// id = "haut" >
//     <
//     i class = "fa-solid fa-pen-to-square" > < /i> <
//     i class = "fa-solid fa-trash-can"
// id = "supp"
// onclick = "supprimer('delete','note1')" > < /i> <
//     /div>

// <
// div class = "bas"
// id = "bas" >
//     <
//     textarea class = "text"
// name = ""
// id = "text" > < /textarea> <
//     /div>

// <
// /div>



function AlgorithmeNote() {
    // --------------------------------Création du bouton-------------------------------------//
    const BtnClick = document.querySelector('.section1');
    BtnClick.addEventListener('click', () => {

        // --------------------------------Création d'une nouvelle note-------------------------------------//

        const section2 = document.getElementById('section2');
        const Left = document.createElement('div');
        const Haut = document.createElement('div');
        const Bas = document.createElement('div');
        const Icone1 = document.createElement('i');
        const Icone2 = document.createElement('i');
        const Text = document.createElement('textarea');

        // --------------------------------Organisation des éléments-------------------------------------//

        section2.appendChild(Left);
        Left.appendChild(Haut);
        Haut.appendChild(Icone1);
        Haut.appendChild(Icone2);
        Left.appendChild(Bas);
        Bas.appendChild(Text);

        // --------------------------------Ajout de style des éléments-------------------------------------//

        Left.setAttribute('class', 'left');
        Haut.setAttribute('class', 'haut');
        Icone1.setAttribute('class', 'fa-solid fa-pen-to-square ');
        Icone2.setAttribute('class', 'fa-solid fa-trash-can');
        Bas.setAttribute('class', 'bas');
        Text.setAttribute('class', 'text');
        Text.setAttribute('id', 'text');

        // --------------------------------Suppression note-------------------------------------//
        Icone2.addEventListener('click', () => {
                section2.removeChild(Left);

            })
            // --------------------------------Edit note-------------------------------------//

        Icone1.addEventListener('click', () => {
            Text.toggleAttribute('disabled')
            Text.focus();

        })


    }, false);
}
AlgorithmeNote();