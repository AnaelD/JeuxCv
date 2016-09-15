var positionPersoGauche; // var pour la position de mon perso dans l'ecran (servira pour les colision)
var monAttaque; // var pour ma fonction attaque
var hpJoueur; // var pour conteur de hp
var spriteInConteneur; // var pour position de ma div sur le sprite (top) et donc quel animation va etre lancer
var maMort; // var pour ma fonction mourir
var pourCombat;

var persoJouable = function() {

  spriteInConteneur = $('.spriteMe'); // var pour appeler mon sprite
  var poseLeftInCont; //
  var meTropADroite = 0;
  var meTropAGauche = -320;
  var nbFrameAttak = 6;
  var nbFrameMort = 5;
  hpJoueur = 100;
  pourCombat =1;

  maMort = function(){
    fullHp = $('.vieActuel').animate({width: fullHp - 100 + 'px'}, 500, 'linear');
    spriteInConteneur.css('left','0px');
    spriteInConteneur.css('top', '-512px');
    // actualisation de la positionActuelLeft , pour toujours partir du 1er mouvement
    for(var i = 0;i < nbFrameMort;i++) {
      setTimeout(function() {
        poseLeftInCont = parseInt(spriteInConteneur.css('left'));
        spriteInConteneur.css('left', poseLeftInCont - 64);
      }, i *100)
    }
  };

  monAttaque = function() {
    spriteInConteneur.css('left','0px');
    // actualisation de la positionActuelLeft , pour toujours partir du 1er mouvement
    for(var i = 0;i < nbFrameAttak;i++) {
      setTimeout(function() {
        poseLeftInCont = parseInt(spriteInConteneur.css('left'));
        spriteInConteneur.css('left', poseLeftInCont - 64);
        if(parseInt(poseLeftInCont) <= -320) {
          spriteInConteneur.css('left','0px'); // je repart de zero (boucle)
        }
      }, i * 100)
    }
  };

  $(document).keydown(function(e) { // function sur les touche avec en argument l'evenement
    if (e.which == 37) { // touche gauche
      spriteInConteneur.css('top', '-64px'); // sprite de marche tourner vers la gauche
      positionPersoGauche = parseInt($('.conteneurSpriteMoi').css('left'));
      poseLeftInCont = parseInt(spriteInConteneur.css('left'));
      spriteInConteneur.css('left', poseLeftInCont - 64); // faut bien bouger
      if (parseInt(poseLeftInCont) == -512) { // si j atteint les -512 left (fin du sprite de marche) :
        spriteInConteneur.css('left','0px'); // je repart de zero (boucle)
      }
      if (positionPersoGauche > -10) // tant que je suis pas a 10px de la gauche de lecran alors en appuyant sur la touche gauche je me deplace de 5px
        $('.conteneurSpriteMoi').css('left', positionPersoGauche - 5);
    }

    if (e.which == 39) { // touche droite
      spriteInConteneur.css('top', '-192px'); // sprite de marche tourner vers la droite
      positionPersoGauche = parseInt($('.conteneurSpriteMoi').css('left'));
      poseLeftInCont = parseInt(spriteInConteneur.css('left'));
      spriteInConteneur.css('left', poseLeftInCont - 64);
      if(parseInt(poseLeftInCont) == -512) { // si j atteint les -512 left (fin du sprite de marche) :
        spriteInConteneur.css('left', '0px'); // je repart de zero (boucle)
      }
      if(positionActuelDuFondLeft <= -6300 && positionActuelDuFondLeft >= -8095) { // quand je suis sur les fonds ordi alors
        if(positionPersoGauche > 470) {// si je suis a + de X px sur la double page alors
          $('.fondBouge').css('left', positionActuelDuFondLeft - 10 + 'px'); // je deplace le fond
          positionActuelDuFondLeft = parseFloat($('.fondBouge').css('left')); // et je re stock l'info de position
          positionPersoGauche -= 5; // dire a mon perso d'arreter de se deplacer vu que l'ecran bouge deja..
          $('.conteneurSpriteMoi').css('left', positionPersoGauche);
        }
        if(positionPersoGauche == 460){
          // je fait apparaitre un otres sprites ordi et
          $('.cacheSpriteOrdi2').css('opacity', 1);
          $('.cacheSpriteOrdi2').css('display', 'inline-block');
          // j'appel la fonction qui fait bouger mon conteneur et mon sprite Ordi
          setTimeout(spriteOrdi2,200);
        }
      }
      if (positionPersoGauche < 850 ) {// tant que je suis pas a 10px de la gauche de lecran alors en appuyant sur la touche gauche je me deplace de 5px
          $('.conteneurSpriteMoi').css('left', positionPersoGauche + 5);
      }
    }

    if(e.which == 13) { // QUAND J APPUIE SUR ENTREE :
      if(spriteInConteneur.css('top') == '-192px') { // si mon perso est tourner vers la droite alors
        spriteInConteneur.css('top', '-448px'); // je me place sur srptite d'attque vers la droite
        // pour colision:

      }
      if(spriteInConteneur.css('top') == '-64px') { // si mon perso est tourner vers la gauche alors
        spriteInConteneur.css('top', '-320px'); // je me place sur sprite d'attaque vers la gauche
        // pour colision:

      }
      if(spriteInConteneur.css('top') == '-448px'){ // si je suis a la hauteur du sprite l'attak vers la droite alors
        if(pourCombat == 1) {
          monAttaque(); // fonction d'animation de l attaque a drotie
          positionPersoGauche = parseInt($('.conteneurSpriteMoi').css('left')); // je place ma position left en chiffre dans la variable positionPersoGauche
        }
        pourCombat = 0;
      }
      if(spriteInConteneur.css('top') == '-320px'){ // si je suis a la hauteur de l'attak vers la gauche alors
        if(pourCombat == 1) {
          monAttaque(); // fonction d'animation de l attaque a gauche
        }
        pourCombat = 0;
      }
    }

  });
  $(document).keyup(function(e) {
    pourCombat = 1;
  })

};
