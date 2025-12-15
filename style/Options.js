document.addEventListener("DOMContentLoaded", function(){

    /*----------------------------------------Niveau-------------------*/

    let niveau = document.getElementById("niveau");

    let option1= document.createElement("option");
    option1.value="primaire";
    option1.textContent="Primaire";


   let option2= document.createElement("option");
    option2.value="secondaire";
    option2.textContent="Secondaire";

    let option3= document.createElement("option");
    option3.value="cégep";
    option3.textContent="Cégep";

    niveau.appendChild(option1);
    niveau.appendChild(option2);
    niveau.appendChild(option3);

    niveau.addEventListener("change", function () {
        console.log(this.value);
        
    });

    /*----------------------------------------Province------------------------*/

    let province = document.getElementById("province");

    let option4= document.createElement("option");
    option4.value="Québec";
    option4.textContent="Québec";

   let option5= document.createElement("option");
    option5.value="Alberta";
    option5.textContent="Alberta";

     let option6= document.createElement("option");
    option6.value="Colombie-Britannique";
    option6.textContent="Colombie-Britannique";

     let option7= document.createElement("option");
    option7.value="Manitoba";
    option7.textContent="Manitoba";

    let option8= document.createElement("option");
    option8.value="Nouveau-Brunswick";
    option8.textContent="Nouveau-Brunswick";

    let option9= document.createElement("option");
    option9.value="Terre-Neuve-et-Labrador";
    option9.textContent="Terre-Neuve-et-Labrador";

     let option10= document.createElement("option");
    option10.value="Npuvelle-Écosse";
    option10.textContent="Npuvelle-Écosse";

      let option11= document.createElement("option");
    option11.value="Ontario";
    option11.textContent="Ontario";

     let option12= document.createElement("option");
    option12.value="Île-du-Prince-Édouard";
    option12.textContent="Île-du-Prince-Édouard";


  let option13= document.createElement("option");
    option13.value="Saskatchewan";
    option13.textContent="Saskatchewan";

    province.appendChild(option4);
    province.appendChild(option5);
    province.appendChild(option6);
    province.appendChild(option7);
    province.appendChild(option8);
    province.appendChild(option9);
    province.appendChild(option10);
    province.appendChild(option11);
    province.appendChild(option12);
    province.appendChild(option13);


    province.addEventListener("change", function () {
        console.log(this.value);

});



/*---------------------------------------------------------------Verification du mot du passe--------------------------------------*/


let mdp = document.getElementById("mdp");


let Caraceteres = document.getElementById("Caraceteres");
let Majuscule = document.getElementById("Majuscule");
let Chiffre = document.getElementById("Chiffre");

mdp.addEventListener("input", function () {


    if(this.value.length >=8) {
        Caraceteres.style.color ="green";
    } else {
        Caraceteres.style.color = "red";
    }


    if (/[A-Z]/.test(this.value)) {
        Majuscule.style.color= "green";
    } else {
        Majuscule.style.color= "red";
    }

   if (/[0-9]/.test(this.value)) {
    Chiffre.style.color ="green";
   } else {
    Chiffre.style.color="red";
   }


});
});