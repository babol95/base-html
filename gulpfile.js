var elixir = require('laravel-elixir');
elixir.config.sourcemaps = false;

elixir(function(mix) {


    /**
     * Cette section permet de copier les librairies téléchargés via bower
     * Une fois téléchargé la librairie ce situe dans le dossier bower components
     * Il faut la copier dans le dossier resource/assets/js/vendor/nom-de-librairie.js
     */
    //Copy JS Libraries
    mix.copy('bower_components/jquery/dist/jquery.js', 'resources/assets/js/vendor/jquery.js');
    mix.copy('bower_components/underscore/underscore.js', 'resources/assets/js/vendor/underscore.js');
    mix.copy('bower_components/WOW/dist/wow.js', 'resources/assets/js/vendor/wow.js');
    //mix.copy('bower_components/une-librairie.js', 'resources/assets/js/vendor/une-librairie.js');

    /**
     * Cette section permet de copier les librairies téléchargés via bower
     * Une fois téléchargé la librairie ce situe dans le dossier bower components
     * Il faut la copier dans le dossier resource/assets/css/vendor/nom-de-librairie.css
     */
    //Copy CSS Libraries
    mix.copy('bower_components/normalize-css/normalize.css', 'resources/assets/css/vendor/normalize.css');
    mix.copy('bower_components/skeleton/css/skeleton.css', 'resources/assets/css/vendor/skeleton.css');
    //mix.copy('bower_components/une-librairie.css', 'resources/assets/css/vendor/une-librairie.css');

    /**
     * Cette section permet de copier les librairies téléchargés via bower
     * Une fois téléchargé la librairie ce situe dans le dossié bower components
     * Il faut la copier dans le dossier resource/assets/sass/vendor/nom-de-librairie/*
     */
    //Copy SASS Libraries
    mix.copy('bower_components/bourbon/app/assets/stylesheets', 'resources/assets/sass/vendor/bourbon');
    //mix.copy('bower_components/une-librairie', 'resources/assets/sass/vendor/une-librairie');

    /**
     * Cette commande compile un ficher css à partir du sass
     */
    //Process Sass files
    mix.sass('app.sass', 'resources/assets/css/app.css');

    /**
     * Cette commande copie toute les librairies CSS plus le code CSS personel en un seul fichier qui sera disponible dans le dossier public/css/all.css
     */
    //Concatenate Css files
    mix.styles([
        'vendor/normalize.css',
        'vendor/skeleton.css',
        //'un-autre-fichier.css',
        'app.css'
    ], 'public/css/all.css');


    /**
     * Cette commande copie toute les librairies JS plus le code JS personel en un seul fichier qui sera disponible dans le dossier public/js/all.js
     */
    //Concatenate Scripts
    mix.scripts([
        'vendor/jquery.js',
        'vendor/underscore.js',
        'vendor/wow.js',
        //'un-autre-fichier.js',
        'app.js'
    ]);

});