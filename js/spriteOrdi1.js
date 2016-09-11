var animConteurOrdi;
var animSrpiteOrdi;
var fullHp;

var spriteOrdi = function() {
  var positionConteneurSpriteOrdi = parseFloat($('.conteneurSpriteOrdi').css('left'));
  var positionActuelLeftOrdi = parseFloat($('.spriteOrdi').css('left'));

  var sensSpriteOrdi = 124;
  var tropADroiteOrdi = 0;
  var tropAGaucheOrdi = -496;

  var sensConteneurSpriteOrdi = 5;
  var conteneurSpriteTropAGaucheOrdi = 0;
  var conteneurSpriteTropADroiteOrdi = 900;
  var tierHp = '33px'; // non utiliser a l'heure actuel
  var hpOrdi = 100;

  // Animation du sprite dans son conteneur
  var monAnimSpriteOrdi = function() {
    // actualisation de la positionActuelLeft
    positionActuelLeftOrdi = parseFloat($('.spriteOrdi').css('left'));
    if(positionActuelLeftOrdi == tropADroiteOrdi) {
      // choix du sens +- = -
      sensSpriteOrdi = -124;
    } if (positionActuelLeftOrdi == tropAGaucheOrdi) {
      // choix su sens ++ = +
      sensSpriteOrdi = 124;
    };
  // Deplacement PERMANENT
  $('.spriteOrdi').css('left', positionActuelLeftOrdi + sensSpriteOrdi + 'px');
  };

  // Animation du conteneurSprite
  var animConteneurSpriteOrdi = function() {
    // pour les colisions
    if(positionPersoGauche >= positionConteneurSpriteOrdi - 55 && positionPersoGauche <= positionConteneurSpriteOrdi - 45) { // si la position du perso jouable est a -de50px de l'animation de l'enemi:
      if(spriteInConteneur.css('top') == '-448px' || spriteInConteneur.css('top') == '-320px') { // si le perso jouable est en position d attaque alors
        hpOrdi = hpOrdi - 100; // il a 100hp il en perd 100(autrement dit one shot)
        $('.spriteOrdi').fadeOut(500).delay(100).fadeIn(500); // pour faire clignoter l'ordi quand il est toucher
        if(hpOrdi <= 0) { // si je tue l ordi
          $('.cacheSpriteOrdi').css('display','none');
          $('.conteneurSpriteOrdi').css('left', '900px');
          clearInterval(animConteurOrdi);
          clearInterval(animSrpiteOrdi);
          $('#javascript').addClass('javascriptMoov');
          //setTimeout(voirBouton, 3000); // le bouton continuer est sur le 2eme enemi
        }
      }
      else { // sinon
        hpJoueur = hpJoueur - 100; // la c'est le jouable qui perd ces hp
         // reduit la barre de vie de  moitier
        $('.spriteMe').fadeOut(500).delay(100).fadeIn(500); // faire clignoter mon perso quand toucher
        if(hpJoueur <= 1) { // si hp du perso tombe a 0 alors
          maMort();// animation de mon perso qui die +
          $('.loose').css('opacity',1); // je fait apparaitre la div loose et
          $('.retry').css('opacity',1); // le bouton ressayer
          clearInterval(animConteurOrdi);
          clearInterval(animSrpiteOrdi);
          $('.retry').click(function() { // au click sur le bouton reesayer sa
            $('.loose').css('opacity',0); // je fait disparaitre la div loose et
            $('.retry').css('opacity',0); // le bouton ressayer
             // je vire l anim mcdo
            $('.cacheSpriteOrdi').css('display','none');
            $('.conteneurSpriteOrdi').css('left', '900px');
            // et celle du perso
            $('.cacheSpriteMoi').css('display','none'); // disparait
            $('.conteneurSpriteMoi').css('left', '10px'); // repart a gauche
            // puis
            $('.beforeCombat2').css('display','block'); // me ramene au debut du fight ordi (2)
            fullHp = $('.vieActuel').css('width','100px');
            hpJoueur = 100;
          })
        }
      }
    }

    positionConteneurSpriteOrdi = parseFloat($('.conteneurSpriteOrdi').css('left'));
    // si le conteneur du sprite est trop a droite (hors ecran) alors :
    if(positionConteneurSpriteOrdi == conteneurSpriteTropADroiteOrdi) {
      sensConteneurSpriteOrdi = -5;
      // scaleX(1) pour dire a mon sprite d'aller dans son sens normal
      $('.spriteOrdi').css('transform', 'scaleX(1)');
      // si le conteneur du sprite est trop a gauche (hors ecran) alors:
    } if(positionConteneurSpriteOrdi == conteneurSpriteTropAGaucheOrdi) {
        sensConteneurSpriteOrdi = 5;
        // scaleX(-1) pour dire a mon sprite d aller dans le sens inverse de sa base
        $('.spriteOrdi').css('transform', 'scaleX(-1)');
    };
    // Deplacement permanent du conteneur
    $('.conteneurSpriteOrdi').css('left', positionConteneurSpriteOrdi + sensConteneurSpriteOrdi + 'px');
  };
  // interval pour deplacer le conteneur entier (donne l'impression de mouvement des perso)
  animConteurOrdi = setInterval(animConteneurSpriteOrdi, 100);
  // interval pour deplacer les sprite dans le conteneur est donc l'animé
  animSrpiteOrdi = setInterval(monAnimSpriteOrdi, 100);
};

var opaciter0SpriteOrdi = function() {
  $('.conteneurSpriteOrdi').css('opacity', 0);
  $('.spriteOrdi').css('opacity', 0);
};

var opaciter1SpriteOrdi = function() {
  $('.conteneurSpriteOrdi').css('opacity', 1);
  $('.spriteOrdi').css('opacity', 1);
};



/// 2eme ordi enemi ///////////////////////////////

var spriteOrdi2 = function() {
  var positionConteneurSpriteOrdi2 = parseFloat($('.conteneurSpriteOrdi2').css('left'));
  var positionActuelLeftOrdi2 = parseFloat($('.spriteOrdi2').css('left'));

  var sensSpriteOrdi2 = 124;
  var tropADroiteOrdi2 = 0;
  var tropAGaucheOrdi2 = -496;

  var sensConteneurSpriteOrdi2 = 5;
  var conteneurSpriteTropAGaucheOrdi2 = 0;
  var conteneurSpriteTropADroiteOrdi2 = 900;
  var tierHp = '33px'; // non utiliser a l'heure actuel
  var hpOrdi2 = 100;

  // Animation du sprite dans son conteneur
  var monAnimSpriteOrdi2 = function() {
    // actualisation de la positionActuelLeft
    positionActuelLeftOrdi2 = parseFloat($('.spriteOrdi2').css('left'));
    if(positionActuelLeftOrdi2 == tropADroiteOrdi2) {
      // choix du sens +- = -
      sensSpriteOrdi2 = -124;
    } if (positionActuelLeftOrdi2 == tropAGaucheOrdi2) {
      // choix su sens ++ = +
      sensSpriteOrdi2 = 124;
    };
  // Deplacement PERMANENT
  $('.spriteOrdi2').css('left', positionActuelLeftOrdi2 + sensSpriteOrdi2 + 'px');
  };

  // Animation du conteneurSprite
  var animConteneurSpriteOrdi2 = function() {
    // pour les colisions
    if(positionPersoGauche >= positionConteneurSpriteOrdi2 - 55 && positionPersoGauche <= positionConteneurSpriteOrdi2 - 45) { // si la position du perso jouable est a -de50px de l'animation de l'enemi:
      if(spriteInConteneur.css('top') == '-448px' || spriteInConteneur.css('top') == '-320px') { // si le perso jouable est en position d attaque alors
        hpOrdi2 = hpOrdi2 - 100; // il a 100hp il en perd 100(autrement dit one shot)
        $('.spriteOrdi2').fadeOut(500).delay(100).fadeIn(500); // pour faire clignoter l'ordi quand il est toucher
        if(hpOrdi2 <= 0) { // si je tue l ordi
          $('.cacheSpriteOrdi2').css('display','none');
          $('.conteneurSpriteOrdi2').css('left', '900px');
          clearInterval(animConteurOrdi2);
          clearInterval(animSrpiteOrdi2);
          $('#photoshop').addClass('photoshopMoov');
          setTimeout(voirBouton, 3000); // le bouton continuer reaparait apres 3sec
        }
      }
      else { // sinon
        hpJoueur = hpJoueur - 100; // la c'est le jouable qui perd ces hp
         // reduit la barre de vie de  moitier
        $('.spriteMe').fadeOut(500).delay(100).fadeIn(500); // faire clignoter mon perso quand toucher
        if(hpJoueur <= 1) { // si hp du perso tombe a 0 alors
          maMort();// animation de mon perso qui die +
          $('.loose').css('opacity',1); // je fait apparaitre la div loose et
          $('.retry').css('opacity',1); // le bouton ressayer
          clearInterval(animConteurOrdi2);
          clearInterval(animSrpiteOrdi2);
          $('.retry').click(function() { // au click sur le bouton reesayer sa
            $('.loose').css('opacity',0); // je fait disparaitre la div loose et
            $('.retry').css('opacity',0); // le bouton ressayer
             // je vire l anim mcdo
            $('.cacheSpriteOrdi2').css('display','none');
            $('.conteneurSpriteOrdi2').css('left', '900px');
            // et celle du perso
            $('.cacheSpriteMoi').css('display','none'); // disparait
            $('.conteneurSpriteMoi').css('left', '10px'); // repart a gauche
            // puis
            $('.beforeCombat2').css('display','block'); // me ramene au debut du fight ordi (2)
            fullHp = $('.vieActuel').css('width','100px');
            hpJoueur = 100;
          })
        }
      }
    }

    positionConteneurSpriteOrdi2 = parseFloat($('.conteneurSpriteOrdi2').css('left'));
    // si le conteneur du sprite est trop a droite (hors ecran) alors :
    if(positionConteneurSpriteOrdi2 == conteneurSpriteTropADroiteOrdi2) {
      sensConteneurSpriteOrdi2 = -5;
      // scaleX(1) pour dire a mon sprite d'aller dans son sens normal
      $('.spriteOrdi2').css('transform', 'scaleX(1)');
      // si le conteneur du sprite est trop a gauche (hors ecran) alors:
    } if(positionConteneurSpriteOrdi2 == conteneurSpriteTropAGaucheOrdi2) {
        sensConteneurSpriteOrdi2 = 5;
        // scaleX(-1) pour dire a mon sprite d aller dans le sens inverse de sa base
        $('.spriteOrdi2').css('transform', 'scaleX(-1)');
    };
    // Deplacement permanent du conteneur
    $('.conteneurSpriteOrdi2').css('left', positionConteneurSpriteOrdi2 + sensConteneurSpriteOrdi2 + 'px');
  };
  // interval pour deplacer le conteneur entier (donne l'impression de mouvement des perso)
  animConteurOrdi2 = setInterval(animConteneurSpriteOrdi2, 100);
  // interval pour deplacer les sprite dans le conteneur est donc l'animé
  animSrpiteOrdi2 = setInterval(monAnimSpriteOrdi2, 100);
};

var opaciter0SpriteOrdi = function() {
  $('.conteneurSpriteOrdi2').css('opacity', 0);
  $('.spriteOrdi2').css('opacity', 0);
};

var opaciter1SpriteOrdi = function() {
  $('.conteneurSpriteOrdi2').css('opacity', 1);
  $('.spriteOrdi2').css('opacity', 1);
};
