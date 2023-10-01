const planetDescriptions = {
    soleil: {
        nom: "Soleil",
        taille: "1 391 000 km de rayon, 109 fois plus grande que la Terre",
        revolution: "27 jours, soit 0,074 année terrestre",
        vitesse: "617,3 km/s",
        distance: "0 UA (unités astronomiques) du Soleil",
        lumiere: "la lumière du soleil met environ 8 minutes à nous atteindre",
        funFact: "La vraie couleur du Soleil, observée par les astronautes est le blanc : la lumière du Soleil est un mélange de toutes les couleurs. Mais le bleu est emprisonné par l’atmosphère terrestre. Le mélange des couleurs qui passent à travers et qui atteignent nos yeux donne donc du jaune !",
        satellites: []
    },
    mercure: {
        nom: "Mercure",
        taille: "2 439,7 km de rayon, 0,382 fois plus petite que la Terre",
        revolution: "88 jours, soit 0,24 année terrestre",
        vitesse: "47,87 km/s",
        distance: "0,39 UA (unités astronomiques) du Soleil",
        lumiere: "la lumière du soleil met environ 5 minutes et 30 secondes à l'atteindre",
        funFact: "Si Mercure est la planète la plus proche du Soleil, elle n'est pas la plus chaude de notre système solaire. Il s'agit en fait de Vénus, avec une température moyenne de 462 degrés à sa surface. Mercure, contrairement à Vénus, n'a quasiment pas d'atmosphère et ne peut donc pas se réchauffer grâce à l'effet de serre.",
        satellites: []
    },
    venus: {
        nom: "Venus",
        taille: "6 051,8 km de rayon, 0,949 fois la taille de la Terre",
        revolution: "225 jours, soit 0,615 année terrestre",
        vitesse: "35,02 km/s",
        distance: "0,72 UA (unités astronomiques) du Soleil",
        lumiere: "la lumière du soleil met environ 7 minutes à l'atteindre",
        funFact: "Si sur Terre une journée dure 24 heures et une année environ 365 jours, sur Vénus une année dure moins longtemps qu'une journée. La planète met en effet plus de temps à faire un tour sur elle-même qu'à faire un tour complet autour du Soleil.",
        satellites: []
    },
    terre: {
        nom: "Terre",
        taille: "6 371 km de rayon",
        revolution: "365 jours",
        vitesse: "29,78 km/s",
        distance: "1 UA (unité astronomique) du Soleil",
        lumiere: "la lumière du soleil met environ 8 minutes à nous atteindre",
        funFact: "Nous verrons toujours la même face de la Lune depuis la Terre. Notre satellite naturel a en effet une rotation synchrone avec notre planète, c'est-à-dire qu'elle met autant de temps pour faire un tour sur elle-même qu'à faire un tour complet autour de la Terre.",
        satellites: ["Lune"]
    },
    mars: {
        nom: "Mars",
        taille: "3 389,5 km de rayon, 0,532 fois la taille de la Terre",
        revolution: "687 jours, soit 1,88 année terrestre",
        vitesse: "24,077 km/s",
        distance: "1,52 UA (unités astronomiques) du Soleil",
        lumiere: "la lumière du soleil met environ 12 minutes et 30 secondes à l'atteindre",
        funFact: "Mars est parfois appelée la \"planète rouge\" en raison de la présence en abondance d’oxyde de fer (mieux connue sous le nom de rouille), sur le sol et sur les roches, qui lui donne cette apparence si particulière dans le ciel étoilé. D’ailleurs, les Romains avaient remarqué la couleur rougeâtre de la planète, qu’ils comparaient à celle d’un champ de bataille couvert de sang, et lui ont par conséquent donné le nom de leur dieu de la Guerre.",
        satellites: ["Phobos", "Deimos"]
    },
    jupiter: {
        nom: "Jupiter",
        taille: "69 911 km de rayon, 11,2 fois plus grande que la Terre",
        revolution: "12 ans",
        vitesse: "13,07 km/s",
        distance: "5,20 UA (unités astronomiques) du Soleil",
        lumiere: "la lumière du soleil met environ 43 minutes et 30 secondes à l'atteindre",
        funFact: "Jupiter est si grosse qu'elle pourrait accueillir l'ensemble des autres planètes du système solaire réunies.",
        satellites: ["Io", "Europe", "Ganymède", "Callisto"]
    },
    saturne: {
        nom: "Saturne",
        taille: "58 232 km de rayon, 9,14 fois plus grande que la Terre",
        revolution: "29,5 ans",
        vitesse: "9,68 km/s",
        distance: "9,58 UA (unités astronomiques) du Soleil",
        lumiere: "la lumière du soleil met environ 1 heure et 23 minutes à l'atteindre",
        funFact: "Vous n'imaginez pas à quel point les anneaux de Saturne sont plats. Tenez-vous bien, s'ils ont un diamètre d'environ 360 000 kilomètres, ils ne font pas plus de 10 mètres d'épaisseur.",
        satellites: ["Titan", "Encelade", "Rhéa", "Dioné", "Téthys"]
    },
    uranus: {
        nom: "Uranus",
        taille: "25 362 km de rayon, 3,96 fois plus grande que la Terre",
        revolution: "84 ans",
        vitesse: "6,8 km/s",
        distance: "19,18 UA (unités astronomiques) du Soleil",
        lumiere: "la lumière du soleil met environ 2 heures et 40 minutes à l'atteindre",
        funFact: "Uranus est la seule planète de notre système solaire dont le nom est dérivé de la mythologie grecque, plutôt que de la mythologie romaine comme les autres planètes. Son nom est une version latinisée du dieu grec du ciel, Ouranos. Cela rend Uranus unique parmi les planètes, car elle est la seule à porter le nom d'un personnage de la mythologie grecque.",
        satellites: ["Miranda", "Ariel", "Umbriel", "Titania", "Oberon"]
    },
    neptune: {
        nom: "Neptune",
        taille: "24 622 km de rayon, 3,86 fois plus grande que la Terre",
        revolution: "165 ans",
        vitesse: "5,43 km/s",
        distance: "30,07 UA (unités astronomiques) du Soleil",
        lumiere: "la lumière du soleil met environ 4 heures et 10 minutes à l'atteindre",
        funFact: "Neptune est invisible à l'œil nu; il ne peut être visualisé qu'à l'aide d'un télescope. Il a été découvert à l'Observatoire de Berlin en 1846 après une prédiction mathématique. Cela en fait la seule planète non découverte empiriquement. Galilée l'avait observé en 1612 mais l'avait incorrectement identifié comme une étoile fixe. La planète est nommée d'après le dieu romain de la mer.",
        satellites: ["Triton", "Protée", "Néréide", "Halimède", "Sao"]
    }
};
