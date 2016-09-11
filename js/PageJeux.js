// code du background du jeux
var positionActuelDuFondLeft;
var voirBouton;
$(document).ready(function() {

  // je lance la fonction de mon perso jouable une seul fois au tout debut (meme s il est cacher)
  persoJouable();

  positionActuelDuFondLeft = parseFloat($('.fondBouge').css('left'));
  var nbClick = 0;
  // fonction qui fait apparaitre mon persoJouable
  var monApparition = function() {
    $('.cacheSpriteMoi').css('display', 'inline-block');
  };
  // fonction pour faire apparaitre le bouton continuer (et l utilise dans des timeout)
  voirBouton = function() {
    $('.boutonContinuer').css('display','inline-block');
  }
  // pour commencer
  $('.start').click(function(){
    $('.start').css('display','none');
    $('.defilement').css('display','block');
  })

  // bouton pour lire le texte
  $('.defilement').click(function(){
    nbClick = nbClick + 1; // compteur qui s'incremente de 1 a chaque fois que je click sur suite
    $('#un').addClass('defile'); // je rajoute la class qui fait defile le 1er teste
    $('.defilement').css('display','none'); // je fait disparaitre le bouton suite
    setTimeout(voirBouton, 1000); // je fait apparaitre le bouton continuer au bout de 5sec.
    if(nbClick == 2) { // si c'est la 2eme fois que je click sur suite alors
      $('#deux').addClass('defile'); // je met la classe defile sur le 2eme texte
    }
    if(nbClick == 3){
      $('#trois').addClass('defile');
    }
    if(nbClick == 4){
      $('#quatre').addClass('defile');
    }
    if(nbClick == 5){
      $('#cinq').addClass('defile');
    }
  })
  // qunad je click sur le bouton lets cook:
  $('.fight1').click(function() {
    $('.beforeCombat1').css('display','none'); // je fait disp les explication et le bouton puis
    $('.conteneurSpriteMoi').css('left', '10px'); // mon perso repart a gauche
    // J'enleve le css qui cacher mon sprite et
    monApparition();
    // j'enleve aussi celui du sprite mcdo
    $('.cacheSpriteMcdo').css('opacity', 1);
    $('.cacheSpriteMcdo').css('display', 'inline-block');
    // j'appel la fonction qui fait bouger mon conteneur et mon sprite McDO
    spriteMcDo();
    // ainsi que celle de mon perso jouable
  });
  // quandd je click sur le bouton lets fix:
  $('.fight2').click(function() {
    $('.beforeCombat2').css('display','none'); // je fait disp les explication et le bouton puis
    $('.conteneurSpriteMoi').css('left', '10px'); // mon perso repart a gauche
    // J'enleve le css qui cacher mon sprite et
    monApparition();
    // je fait apparaitre les sprites ordi et
    $('.cacheSpriteOrdi').css('opacity', 1);
    $('.cacheSpriteOrdi').css('display', 'inline-block');
    // j'appel la fonction qui fait bouger mon conteneur et mon sprite Ordi
    spriteOrdi();
  });
  // quandd je click sur le bouton lets restore:
  $('.fight3').click(function() {
    $('.beforeCombat3').css('display','none'); // je fait disp les explication et le bouton puis
    $('.conteneurSpriteMoi').css('left', '10px'); // mon perso repart a gauche
    // J'enleve le css qui cacher mon sprite et
    monApparition();
    // je fait apparaitre les sprites statue et
    $('.cacheSpriteStatues').css('opacity', 1);
    $('.cacheSpriteStatues').css('display', 'inline-block');
    // j'appel la fonction qui fait bouger mon conteneur et mon sprite statue
    spriteStatues();
  });

  // ce qu'il ce passe quand je click sur le boutonContinuer :
  $('.boutonContinuer').click(function() {
    $('.boutonContinuer').css('display','none');// a chaque fois que je click sur le bouton continuer il fait ce qu'il a a faire puis disparait
    // si la position de me fond se trouve entre 0 et - 10800 alors
    if(positionActuelDuFondLeft <= 0 && positionActuelDuFondLeft > -10800) {
      // a chaque click l'opaciter de l'image de fond(qui est une LONGUEEE image avec tous mes background) passe a 0 (en 2sec) et
      $('.fondBouge').animate({opacity: 0}, 500, 'linear', function() { // 2000 normalmeent
        // je deplace l'image de fond de -900 pixel vers la gauche (pour mettre en place le nouveau background)
        $('.fondBouge').css('left', positionActuelDuFondLeft - 900 + 'px');
      })
      // puis je rechange l'opaciter a 1(tjr en 2sec) pour faire apparaitre le nouveau background
      $('.fondBouge').animate({opacity: 1}, 500, 'linear', function() { // 2000 normalement
        positionActuelDuFondLeft = parseFloat($('.fondBouge').css('left'));
      })
      // quand j'arrive sur la fenetre bresil
      if(positionActuelDuFondLeft == 0) {
        $('#un').css('display','none'); // j efface le 1er texte
        $('#deux').css("display",'block'); // je fait apparaitre le 2eme texte
        $('.defilement').css('display','block'); // je fait apparaitre le bouton suite
        $('#meteor').addClass('meteorMoov');
      }
      // quand j'arrive sur la fenetre ville 1
      if(positionActuelDuFondLeft == -900){
        $('#deux').css("display",'none'); // j'efface le 2eme texte
        $('.defilement').css('display','none'); // j efface le bouton suite
        $('.boutonContinuer').css('display','block');
        monApparition(); // j 'apparait (pour rien, pas d'enemi)'
        $('#angular').addClass('angularMoov');
      }
      // ville 2
      if(positionActuelDuFondLeft == -1800){
        $('.boutonContinuer').css('display','block');
        $('#ajax').addClass('ajaxMoov');
      }
      // Mexique
      if(positionActuelDuFondLeft == -2700){
        $('.cacheSpriteMoi').css('display','none'); // disparait
        $('.conteneurSpriteMoi').css('left', '10px'); // repart a gauche
        $('.boutonContinuer').css('display','none');
        $('#trois').css("display",'block');
        $('.defilement').css('display','block');
        $('#htmlCss').addClass('htmlCssMoov');
      }
      // fondMcdo 1
      if (positionActuelDuFondLeft == -3600) {
        $('.defilement').css('display','none'); // j'eface le bouton suite
        $('#trois').css('display','none'); // et le texte aussi
        $('.beforeCombat1').css('display','block'); // je fait apparaitre ma div avec explication + bouton lets cook
      }
      // quand j'arrive sur le fondMcdo 2 alors je fait un :
      if ( positionActuelDuFondLeft == -4500) {
        // je fait disparaitre le bouton continuer
        $('.boutonContinuer').css('display','none');
        // Mon perso
        $('.cacheSpriteMoi').css('display','none'); // disparait
        $('.conteneurSpriteMoi').css('left', '10px'); // repart a gauche
        monApparition(); // et reaparait
        // repartir de la droite (apres 2 sec, temps d'animation du fond matrix) au changement de Fond.
        setTimeout(spriteMcDo,2000);
        $('.cacheSpriteMcdo').css('display','inline-block');
      }
      // Si je depasse -4500, je quite les fonds McDo et j'arrive sur europe
      if (positionActuelDuFondLeft == -5400) {
        // je fait redisparaitre l'anim mcdo
        $('.cacheSpriteMcdo').css('display', 'none');
        // clear interval de mcdo (conteneur et sprite)
        clearInterval(animConteurMcDO);
        clearInterval(animSrpiteMcDo);
        $('#jQuery').addClass('jQueryMoov');
        // Mon perso
        $('.cacheSpriteMoi').css('display','none'); // disparait
        $('.conteneurSpriteMoi').css('left', '10px'); // repart a gauche
        // et
        $('.boutonContinuer').css('display','none'); // bouton continuer disparait
        $('#quatre').css("display",'block'); // le texte apparait
        $('.defilement').css('display','block'); //et le bouton suite aussi
      }
      // si j'atteint -6300 (le fond Tech INfo)
      if (positionActuelDuFondLeft == -6300) {
        // je fait :
        $('.defilement').css('display','none'); // disp le bouton suite
        $('#quatre').css('display','none'); // et le texte aussi
        // puis je fait apparaitre le bouton2 pour ce jeux:
        $('.beforeCombat2').css('display','block'); // je fait apparaitre ma div avec explication + bouton let's fix
      }
      if(positionActuelDuFondLeft < -6300 && positionActuelDuFondLeft > -8100){
        positionActuelDuFondLeft = -8100;
      }
      // si je depasse -8100 je quite les fonds ordi et donc
      // j'atteint les fond musée
      if(positionActuelDuFondLeft == -8100){
        $('.defilement').css('display','none'); // disp le bouton suite
        $('#quatre').css('display','none'); // et le texte aussi
        // je fait disparaitre l anim ordi
        $('.cacheSpriteOrdi').css('opacity', 0);
        // clear interval de mes animation (conteneur et sprite)
        clearInterval(animConteurOrdi);
        clearInterval(animSrpiteOrdi);
        // je fait apparaitre le bouton3 pour ce jeux:
        $('.beforeCombat3').css('display','block'); // je fait apparaitre ma div avec explication + bouton let's restaure
      }
      // musée 2
      if(positionActuelDuFondLeft == -9000){
        $('.boutonContinuer').css('display','none'); // bouton continuer disparait
        //mon perso
        $('.cacheSpriteMoi').css('display','none'); // disparait
        $('.conteneurSpriteMoi').css('left', '10px'); // repart a gauche
        $('.spriteStatues').css('left', '0px'); // remet la statue au debut de son anim
        monApparition(); // et reaparait
        setTimeout(spriteStatues,2000);
        $('.cacheSpriteStatues').css('display','inline-block');
      }
      // colombie
      if(positionActuelDuFondLeft == -9900){
        $('.boutonContinuer').css('display','none'); // bouton continuer disparait
        $('#cinq').css("display",'block'); // le texte apparait
        $('.defilement').css('display','block'); //et le bouton suite aussi
        $('.cacheSpriteMoi').css('display','none'); // vire joueur
      }
    } else {
      // sinon (quand je suis plus entre 0 et -10800) je reste fix sur la position -10800
      positionActuelDuFondLeft = -10800;
      // et
      $('.boutonContinuer').css('display','none'); // bouton continuer disparait
      $('#cinq').css("display",'none'); // le texte disparait

      $('.defilement').css('display','none'); //et le bouton suite aussi
      // puis mon cv apparait (pas encore sur de comment)
      $('.fondBouge').animate({opacity: 0});
      // ici je doit faire apparaitre mon cv........
      $('#cvAnael').addClass('cvAnaelMoov');
      $('#cvAnael').css('opacity',1);
    }
  });

});
