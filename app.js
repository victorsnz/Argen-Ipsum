let contentQuote = document.querySelector('.quote');
let contentAuthor = document.querySelector('.author');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    var newQuote = [];
    var newAuthor = [];

    let lorem =[
        {"quote":"No tiene nada de malo ser un periodista de segunda selección que vive contando intimidades ajenas y faltando el respeto a todo el mundo, y cuando digo de segunda selección, lo digo por un periodista que no mide sus palabras y lastima con lo que dice. También me duele que me digan que soy el rating de ShowMatch, por favor, yo no manejo el rating... yo manejo un Rolls Royce.",
        "by":"Ricardo Fort","lenght":"medium"
    },
        {"quote":"—Si está caliente, lo acabaron de usar.\n—No. Pero se le está quemando lo que está adentro ¿De quién es esto?\n—No, salta solo.\n...\n—¿Qué hiciste? ¡MAMÁ! ¡SACÁ LA MANO DE AHÍ, CARAJO!\n—No, estoy con el pan, nada más.\n—¡ACABA DE CORTAR LA LECTRICIDAD PORQUE METISTE UN CUTU-CUCHILLO Y TE PODÉS QUEDAR ELECTRIFICADA, LOCA!\n—Ah, bueno, no importa. De algo hay que morir.\n—Yo notepocreer...\n—Saqué el pan, Ricardo.\n—¡MAMÁ, CORTASTE TODA LA LOZ. TOCASTE ALGO...!",
        "by":"Ricardo Fort","lenght":"long"
    },
        {"quote":"ALGUIEN LE PUEDE DECIR EL PAPEL LAMENTABLE QUE ESTA HACIENDO??",
        "by":"Ricardo Fort (en Twitter)","lenght":"short"
    },
        {"quote":"—Ojo con lo que me vas a poner Polino, te lo pido por favor, eh. En serio te digo, antes de agarrar la paletita. Porque te tuve cinco meses, aguantandote de que me tirabas pálidas, que nunca confiaste en mí, vengo al lugar en donde siempre soñe estar y tambien no le pones onda a las cosas que yo hago y digo... ¿Vos sabés lo dificil que es treparse allá arriba? ¿Vos sabes, Polino, que dificil que es? a mí me gustaría que vos un día te subas acá arriba.\n—Yo estoy para juzgarte, no estoy para hacer la performance.\n—¿Pero, qué tiene que ver? es re dificil bailar y subirse acá. No me podés decir las barbaridades que me decís, nunca me valoras nada, nunca valoras mi esfuerzo ni mi trabajo.\nYo estuve cinco meses encerrado para estar acá, para estar parado en esta pista, y vos me decís que hagas nada no le gusta... No me podes decir eso, te lo pido por favor.\n—Mi puntaje hoy es un... UNO.\n—¡NOOO, NOOO, NOOO, UN UNO, NOOO! ¿Cómo un unooo?",
        "by":"Mariano de la Canal","lenght":"long"
    },
        {"quote":"ME ROMPISTE LA FOTO DE WANDAAAAAA!! SOS UNA PORQUERÍAAAAA...\nUNA MALA PERSONAAA!!",
        "by":"Mariano de la Canal","lenght":"short"
    },
        {"quote":"—Hemos traído un dinosaurio de la patagonia...\n—¿En serio? ¿Vivo?\n—...No, jajajaja. Esperemos que no reviva.\n—Bueno, podía ser, no sé...",
        "by":"Susana Gimenez","lenght":"short"
    },
        {"quote":"—Con esta cámara no. Corte, corte, corte... Así, yo no. Así, no. De perfil. Allá, no. No me gusta. No me gusta. Retoquenme el pelo, por favor... No me gusta... Voy a estar una hora acá. Yo soy una mujer grande; no puedo estar aquí, luchando...\n¡Qué barbaridad! ¡Qué barbaridad!\n—Denle un vaso de agua ¡Por favor!\n—No, qué agua, ¿Qué se creen, que soy una estúpida, yo? Tengo el cerebro muy bien.\n...\n—Mirá... Hace tres días que estoy grabando copetes y tres días que estoy repitiendo... Qué barbaridad! Dios mío! Esa técnica de mierda, este tipo que me arruinó un año de trabajo, que nunca apretaba el botón que tenía que apretar. Es indignante! Juegan con la salud de uno. Ustedes se creen que uno tiene veinte años... ¡DEMASIADO ESFUERZO HAGO! ¡CARAJO! ¡MIERDA!",
        "by":"Mirtha Legrand","lenght":"long"
    },
        {"quote":"...Se va a licitar un sistema de vuelos espaciales, mediante el cual desde una plataforma que quizá se instale en la provincia de Córdoba. Esas naves espaciales, con todas las seguridades habidas y por haber, van a salir de la atmósfera, se van a remontar a la estratósfera, y desde ahí elegir el lugar a donde quieran ir. De tal forma, que en una hora y media podremos estar desde Argentina en Japón, Corea o en cualquier parte del mundo. Y por supuesto, los vuelos hacia otros planetas, el día que se detecte, de que en otros planetas también hay vida.","by":"Carlos Menem","lenght":"long"
    },
        {"quote":"—Usted avaló la bomba a la AMIA.\n—¡No, no puede decir semejante barbaridad! Mire, la verdad...\n—Usted avaló la bomba a la AMIA.\n—De la única persona que uno esperaría semejante barbaridad, es de usted. ¡Usted no puede decir semejante barbaridad!\n—Nos conocemos bien, eh...\n—¡No! ¡No puede decir eso!\n—Nos conocemos bien.\n—Usted tiene que arrepentirse de lo que dijo.\n—No, no me voy a arrepentir.\n—¡Usted se tiene que arrepentir porque yo no hice nada de eso!\n—Bueeenoooo... Tranquiloooo\n—¿Cómo puede decir eso?\n—Noooo... Eso noooooo...\n—¿Cómo vas a decir eso, Judío hijo de puta?","by":"Alberto Samid vs Mauro Viale","lenght":"long"
    },
        {"quote":"Puede fallar... puede fallar.",
        "by":"Tusam",
        "lenght":"short"
    },
        {"quote":"Papá Noel no se va a morir.",
        "by":"Rodolfo Barili","lenght":"short"
    },
        {"quote":"—¿Hola?\n—Hola, ¿Oscár?\n—¿Quién habla?\n—Yo, Cristina, ¡Pelotudo!",
        "by":"Cristina Fernandez de Kirchner","lenght":"short"
    },
        {"quote":"Huy qué pregunta... Huy, qué pregunta...",
        "by":"Cristina Fernandez de Kirchner","lenght":"short"
    },
        {"quote":"No alcanzaba a comprender la escena... me parecía brutal, me parecía grotesca y no entendía qué había pasado. Y después tuve una gran indignación y un gran enojo, pero mucho. Mucho, mucho, mucho... Y después me vino como una cosa, como de tristeza, de angustia...",
        "by":"Cristina Fernandez de Kirchner","lenght":"medium"
    },
        {"quote":"Hay lugares donde falta el agua, y lugares donde sobra.",
        "by":"Maurcio Macri","lenght":"short"
    },
        {"quote":"¡NO SE INUNDA MAAAAS!",
        "by":"Mauricio Macri","lenght":"short"
    },
        {"quote":"No puede haber tanta maldad, mi amor.",
        "by":"Silvio Soldán","lenght":"short"
    },
        {"quote":"O la matás de chiquita o la discriminas después.",
        "by":"Rocío Marengo","lenght":"short"
    },
        {"quote":"Se equivocó señorita. No tiene bebida alcohólica. Tiene Gatorade.",
        "by":"Carlos Bilardo","lenght":"short"
    },
        {"quote":"Y dicen que soy aburrido...",
        "by":"Fernando de la Rua","lenght":"short"
    },
        {"quote":"Si querés llorar, llorá.",
        "by":"Moria Casan","lenght":"short"
    },
        {"quote":"El decorado, se calla.",
        "by":"Moria Casan","lenght":"short"
    },
        {"quote":"Bueno mamita, hacé lo que se te cante...",
        "by":"Moria Casan","lenght":"short"
    },
        {"quote":"A mí me gusta tanto la noche, que al día le pondría un toldo.",
        "by":"Hector \"Bambino\" Veira","lenght":"short"
    },
        {"quote":"Como te ven te tratan, y si te ven mal, te maltratan.",
        "by":"Mirtha Legrand","lenght":"short"
    },
        {"quote":"—Bueno, Georgina. ¿Te vas a tirar hoy? Con psiquiatra, sin psiquiatra. Pero te vas a tirar, eh. ¿Vino tu mamá a verte?\n—No, \'mi mamá a verme\' es un poco dificil, porque está ciega.\n—Ah, ¡tu mamá es ciega! JAJAJA",
        "by":"Marley y Georgina Barbarossa","lenght":"medium"
    }
    ]
        
    let ALorem = lorem[Math.floor(Math.random()*lorem.length)];
    let randomQuote = ALorem.quote;
    let randomAuthor = ALorem.by;
    newQuote.push(randomQuote);
    newAuthor.push(randomAuthor);
    contentQuote.innerText = newQuote.join(' ');
    contentAuthor.innerText = newAuthor.join(' ');

});