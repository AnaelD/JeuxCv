var animConteurMcDO;
var animSrpiteMcDo;
var fullHp;

var spriteMcDo = function() {
  var positionConteneurSprite = parseFloat($('.conteneurSpriteMcDo').css('left'));
  var positionActuelLeft = parseFloat($('.spriteMcDo').css('left'));

  var sensSprite = 50;
  var tropADroite = 0;
  var tropAGauche = -200;

  var sensConteneurSprite = 5;
  var conteneurSpriteTropAGauche = -100;
  var conteneurSpriteTropADroite = 900;
  var tierHp = '33px'; // nop
  var hpBurger = 100;

  // Animation du sprite dans son conteneur
  var monAnimSprite = function() {
    // actualisation de la positionActuelLeft
    positionActuelLeft = parseFloat($('.spriteMcDo').css('left'));
    if(positionActuelLeft == tropADroite) {
      // choix du sens +- = -
      sensSprite = -50;
    } if (positionActuelLeft == tropAGauche) {
      // choix su sens ++ = +
      sensSprite = 50;
    };
  // Deplacement PERMANENT
  $('.spriteMcDo').css('left', positionActuelLeft + sensSprite + 'px');
  };

  // Animation du conteneurSprite
  var AnimConteneurSprite = function() {
    fullHp = parseFloat($('.vieActuel').css('width'));
    // pour les colisions
    if(positionPersoGauche >= positionConteneurSprite - 55 && positionPersoGauche <= positionConteneurSprite - 45) { // si la position du perso jouable est a -de50px de l'animation de l'enemi:
      if(spriteInConteneur.css('top') == '-448px' || spriteInConteneur.css('top') == '-320px') { // si le perso jouable est en position d attaque alors
        hpBurger = hpBurger - 100; // il a 100hp il en perd 100(autrement dit one shot)
        $('.spriteMcDo').fadeOut(500).delay(100).fadeIn(500); // pour faire clignoter le burger quand il est toucher
        if(hpBurger <= 0) { // si je tue le burger
          $('.cacheSpriteMcdo').css('display','none');
          $('.conteneurSpriteMcDo').css('left', '900px');
          clearInterval(animConteurMcDO);
          clearInterval(animSrpiteMcDo);
          $('#bootstrap').addClass('bootstrapMoov');
          $('#express').addClass('expressMoov');
          setTimeout(voirBouton, 3000); // le bouton continuer reaparait apres 3sec
          //pour colision dans l'autre sens positionPersoGauche <= positionConteneurSprite + 64 && positionPersoGauche >= positionConteneurSprite + 50
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
          clearInterval(animConteurMcDO);
          clearInterval(animSrpiteMcDo);
        }
      }
    }

    positionConteneurSprite = parseFloat($('.conteneurSpriteMcDo').css('left'));
    // si le conteneur du sprite est trop a droite (hors ecran) alors :
    if(positionConteneurSprite == conteneurSpriteTropADroite) {
      sensConteneurSprite = -5;
      // scaleX(1) pour dire a mon sprite d'aller dans son sens normal
      $('.spriteMcDo').css('transform', 'scaleX(1)');
      // si le conteneur du sprite est trop a gauche (hors ecran) alors:
    } if(positionConteneurSprite == conteneurSpriteTropAGauche) {
        sensConteneurSprite = 5;
        // scaleX(-1) pour dire a mon sprite d aller dans le sens inverse de sa base
        $('.spriteMcDo').css('transform', 'scaleX(-1)');
    };
    // Deplacement permanent du conteneur
    $('.conteneurSpriteMcDo').css('left', positionConteneurSprite + sensConteneurSprite + 'px');
  };
  // interval pour deplacer le conteneur entier (donne l'impression de mouvement des perso)
  animConteurMcDO = setInterval(AnimConteneurSprite, 100);
  // interval pour deplacer les sprite dans le conteneur est donc l'animé
  animSrpiteMcDo = setInterval(monAnimSprite, 100);
};

var opaciter0SpriteMcdo = function() {
  $('.conteneurSpriteMcDo').css('opacity', 0);
  $('.spriteMcDo').css('opacity', 0);
};

var opaciter1SpriteMcdo = function() {
  $('.conteneurSpriteMcDo').css('opacity', 1);
  $('.spriteMcDo').css('opacity', 1);
};
