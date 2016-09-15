var animConteurStatues;
var animSrpiteStatues;
var fullHp;

var spriteStatues = function() {
  var positionConteneurSpriteStatues = parseFloat($('.conteneurSpriteStatues').css('left'));
  var positionActuelLeftStatues = parseFloat($('.spriteStatues').css('left'));

  var sensSpriteStatues = 50;
  var tropADroiteStatues = 0;
  var tropAGaucheStatues = -520;

  var sensConteneurSpriteStatues = 5;
  var conteneurSpriteTropAGaucheStatues = -100;
  var conteneurSpriteTropADroiteStatues = 900;
  var tierHp = '33px'; // ou pas
  var hpStatues = 100;

  // Animation du sprite dans son conteneur
  var monAnimSpriteStatues = function() {
    // actualisation de la positionActuelLeft
    positionActuelLeftStatues = parseFloat($('.spriteStatues').css('left'));
    if(positionActuelLeftStatues == tropADroiteStatues) {
      // choix du sens +- = -
      sensSpriteStatues = -65;
    } if (positionActuelLeftStatues == tropAGaucheStatues) {
      // choix su sens ++ = +
      sensSpriteStatues = 65;
    };
  // Deplacement PERMANENT
  $('.spriteStatues').css('left', positionActuelLeftStatues + sensSpriteStatues + 'px');
  };

  // Animation du conteneurSprite
  var AnimConteneurSpriteStatues = function() {
    fullHp = parseFloat($('.vieActuel').css('width'));
    // pour les colisions
    if(positionPersoGauche >= positionConteneurSpriteStatues - 55 && positionPersoGauche <= positionConteneurSpriteStatues - 45) { // si la position du perso jouable est a -de50px de l'animation de l'enemi:
      if(spriteInConteneur.css('top') == '-448px' || spriteInConteneur.css('top') == '-320px') { // si le perso jouable est en position d attaque alors
        hpStatues = hpStatues - 100; // il a 100hp il en perd 100(autrement dit one shot)
        $('.spriteStatues').fadeOut(500).delay(100).fadeIn(500); // pour faire clignoter le burger quand il est toucher
        if(hpStatues <= 0) { // si je tue le burger
          $('.cacheSpriteStatues').css('display','none');
          $('.conteneurSpriteStatues').css('left', '900px');
          clearInterval(animConteurStatues);
          clearInterval(animSrpiteStatues);
          $('#mongo').addClass('mongoMoov');
          $('#node').addClass('nodeMoov');
          setTimeout(voirBouton, 3000); // le bouton continuer reaparait apres 3sec
        }
      }
      else { // sinon
        hpJoueur = hpJoueur - 100; // la c'est le jouable qui perd ces hp
        // reduit la barre de vie de moitier
        $('.spriteMe').fadeOut(500).delay(100).fadeIn(500); // faire clignoter mon perso quand toucher
        if(hpJoueur <= 1) { // si hp du perso tombe a 0 alors
          maMort();// animation de mon perso qui die +
          $('.loose').css('opacity',1); // je fait apparaitre la div loose et
          $('.retry').css('opacity',1); // le bouton ressayer
          clearInterval(animConteurStatues);
          clearInterval(animSrpiteStatues);
          // le retry est sur pageJeux js
        }
      }
    }

    positionConteneurSpriteStatues = parseFloat($('.conteneurSpriteStatues').css('left'));
    // si le conteneur du sprite est trop a droite (hors ecran) alors :
    if(positionConteneurSpriteStatues == conteneurSpriteTropADroiteStatues) {
      sensConteneurSpriteStatues = -5;
      // scaleX(1) pour dire a mon sprite d'aller dans son sens normal
      $('.spriteStatues').css('transform', 'scaleX(1)');
      // si le conteneur du sprite est trop a gauche (hors ecran) alors:
    } if(positionConteneurSpriteStatues == conteneurSpriteTropAGaucheStatues) {
        sensConteneurSpriteStatues = 5;
        // scaleX(-1) pour dire a mon sprite d aller dans le sens inverse de sa base
        $('.spriteStatues').css('transform', 'scaleX(-1)');
    };
    // Deplacement permanent du conteneur
    $('.conteneurSpriteStatues').css('left', positionConteneurSpriteStatues + sensConteneurSpriteStatues + 'px');
  };
  // interval pour deplacer le conteneur entier (donne l'impression de mouvement des perso)
  animConteurStatues = setInterval(AnimConteneurSpriteStatues, 100);
  // interval pour deplacer les sprite dans le conteneur est donc l'animé
  animSrpiteStatues = setInterval(monAnimSpriteStatues, 100);
};

var opaciter0SpriteStatues = function() {
  $('.conteneurSpriteStatues').css('opacity', 0);
  $('.spriteStatues').css('opacity', 0);
};

var opaciter1SpriteStatues = function() {
  $('.conteneurSpriteStatues').css('opacity', 1);
  $('.spriteStatues').css('opacity', 1);
};
