# SilverStripe Bootstrap Theme v1.2.0

A theme using SASS versions of Twitter Bootstrap and Font Awesome, and Bower and Grunt. Adapted from jeffwhitfield/silverstripe-bootstrap-theme (less), taking (simplified) grunt-inspiration from XploreNet/bootstripe.

## Quick installation steps

- Install add-on via Composer (`composer require micschk/silverstripe-bootstrap-sass-basetheme dev-master`) OR clone/download a copy from the repository.
- Extract/copy/move it to a theme directory of your choice while removing the .git/ directory from this directory.
- From the new theme directory, run `npm install` and `bower install` from the command line.
- Update `Gruntfile.js` and set `config.themeName` to the new directory name.
- Run `grunt build` to generate an initial compile of the SASS files to CSS. 
- Update your SilverStripe configuration to use your new theme.

NOTES:
- All SASS, JS & IMG source files are located in src/, they are compiled/optimized and concatenated into the dist/ directory
- Template files are left untouched in the templates directory, where Silverstripe expects them
- The css/editor.css file is just there to be included in the CMS and pull in build/css/editor.css if there
- All JS is included in templates/Includes/Javascripts.ss, scripts may break when including them from the Silverstripe php Require::javascript system. Dont use the silverstripe Require::javascript system.

## How to use

### Bower
The theme uses Bower for management of front-end dependencies. You'll need to run the `bower install` command from within your theme directory to install Bootstrap, Font Awesome, Modernizr & jQuery (modern & legacy). 
```
$ bower install
```
If you require specific versions for these components, update the `bower.json` config file prior to installing the components. You can later update these dependencies by running `bower update`.

### Grunt (/compass)
While you could use basic compass to compile your sass to css (basic configuration included), it's recommended to use the Grunt taskrunner instead. [http://gruntjs.com/](Grunt) allows you to automate repetitive tasks in Javascript syntax (like minification, compilation, unit testing, linting, etc). The included Gruntfile.js contains extra functionality like running prefixer after compilation (adds browser prefixes to required css3). This gruntfile takes its inspiration from XploreNet/bootstripe (simplified). You can change or add your own tasks if you like, it's even possible to handle deployment via grunt [](grunt-shipit).

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

While you're developing just run `grunt` from the theme directory and you'll get live reload in your browser. Assuming you've installed the plugin for [Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/livereload/).

Then to create a production version, running `grunt build` will create an optimised version of your theme using a.o. uglify to compress the css & javascript.


# Tools
Largely copied/adapted from XploreNet/bootstripe

### Custom Fonts

If you need to use a custom, say from [Google Fonts](https://www.google.com/fonts), there are two places you need to include it.

First is as a `<link>` in the head of `src/templates/Page.ss` (or as an @include in your scss file).

The second is if you want the font to appear in the CMS while editing pages, in which case include as a css `@import` at the top of `src/sass/editor.scss`.

You can then override the Bootstrap font variables to apply your font as required.

### Favicons

Replace `src/favicon.png` with a favicon of your choice and it will be automatically converted to the appropriate formats. `templates/Includes/Icons.ss` has the correct code to include all the generated versions.

It's recommended to use a 512 x 512 pixel as your source for your favicon, with a transparent background.
Some versions of the favicon will apply a background colour which is defined in `Gruntfile.js`.

### Responsive Images

A Sass mixin is provided to apply a background image appropriate for the various breakpoints to any css class.

1. Save your image into `src/images/backgrounds`, preferably at 4,096px wide or greater.
2. In your css class definition apply the mixin `@include responsive-bg(image_name);` without the extension (generated images are all jpg).
3. Apply your own background sizing to your class, e.g. `background-size: cover;`.

During Grunt compilation a new version of the image will be generated for each breakpoint, and for high-DPI devices.
The mixin will apply the generated images with the `background-image` property as appropriate.

The generated images are designed to be displayed full-width at the given breakpoint, so this system is ideal for banners or carousels.

License
-------

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
