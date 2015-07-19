var elixir = require('laravel-elixir');
elixir.config.sourcemaps = false;

elixir(function(mix) {

    //Copy JS Libraries
    mix.copy('bower_components/jquery/dist/jquery.js', 'resources/assets/js/vendor/jquery.js');
    mix.copy('bower_components/underscore/underscore.js', 'resources/assets/js/vendor/underscore.js');

    //Copy CSS Libraries
    mix.copy('bower_components/normalize-css/normalize.css', 'resources/assets/css/vendor/normalize.css');
    mix.copy('bower_components/skeleton/css/skeleton.css', 'resources/assets/css/vendor/skeleton.css');

    //Process Sass files
    mix.sass('app.sass', 'resources/assets/css/app.css');

    //Concatenate Css files
    mix.styles([
        'vendor/normalize.css',
        'vendor/skeleton.css',
        'app.css'
    ], 'public/css/all.css');


    //Concatenate Scripts
    mix.scripts([
        'vendor/jquery.js',
        'vendor/underscore.js',
        'app.js'
    ]);

});