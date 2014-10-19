Techno Theme for Ghost
==================

A free boilerplate responsive theme for [Ghost](https://ghost.org) blogging platform.  The theme is easy to setup for non-technical bloggers.  It also includes components to better support technical blogs (hence the name Techno).  The theme uses hot technologies that many developers are interested in.

Techno was originally based on the work of Karlo Espiritu's Bastard theme.  Thank you Karlo for starting this theme.

Here are the enhancements added to Bastard

- General refactor and cleanup (opinionated)
- [Disqus](http://disqus.com/)
- [Ghosthunter](https://github.com/i11ume/ghostHunter) for blog search.
- [Bootswatch](http://bootswatch.com/) allows easy integration of custom bootstrap themes.
- Navigation menu was changed to use a basic Bootstrap 3 fixed top navigation bar.

Techno theme was built using [Bootstrap 3](http://getbootstrap.com/), [SASS](http://sass-lang.com), [Font Awesome](http://fortawesome.github.io/Font-Awesome/), [Bower](http://bower.io/), [Knockout](http://knockoutjs.com), and [Grunt](http://gruntjs.com/). Grunt is used to automate tasks for compiling and minifying the theme components and Bower to manage package dependencies. You can use the theme as is, or customize it by editing the `default.js` and `/assets/sass/*.scss` files.

## Demo

I'm using this theme for my personal site, [ronemous.com](http://ronemous.com)

## Theme Features

* Clean and well-documented code
* Developed using Bootstrap 3, SASS, Font Awesome, Grunt, and Bower ( popular technologies that many developers know )
* Organized CSS3 stylesheets using [SASS](http://sass-lang.com)
* Fully responsive layout
* Retina display ready, looks great on any device or resolution
* Full screen cover page with parallax effect
* Syntax highlighting using Highlight.js
* One file css/js for performance optimization
* Automatic linting, compiling, and minification of SCSS and JS files using Grunt
* Automatic image file size optimization using IMGMin and SVGMin
* Easily update theme dependencies using Bower package manager
* Google Analytics integrated
* Includes FitVids.Js for fluid video embeds
* Integration with Disqus
* Ghosthunter for blog searching
* Bootswatch themeable
* It's free:)

## Using Techno Theme

1. Copy the theme folder inside `/content/themes` of Ghost.
1. Customize the details in themes/techno/assets/js/config.js
2. Update images/cover.jpg
3. Update images/favicon.ico
4. Restart Ghost and then go to Ghost's Settings (http://your.domain.com/ghost/settings/general/). Choose "Techno" from the theme dropdown menu and save your changes.
5. Write some really awesome posts!

## Customizing Techno Theme (Developers)

Techno theme uses Grunt to lint, compile, and concatenate the javascript and [SASS](http://sass-lang.com/) components. Customize the theme by editing the `assets/js/default.js` and `sass/*` files. Run `grunt` to compile your changes or use the `grunt watch` while you build your own theme.

1. Clone ghost to your machine.
2. Do the basic setup above against your local copy of ghost.
3. Run `bower install` to install package dependencies.
4. Run `npm install` to install Grunt components.
5. Run `grunt watch` to start watching for file changes or run `grunt` to build your latest changes.
6. Make your changes by updating `/sass/*`, `/assets/*`, and `*.hbs` files of the theme.
7. If you have new images for the theme, just place them inside `image_sources` folder and Grunt will handle the optimization automatically and store the optimized version inside `assets/images/`.
8. npm start --development at ghost root will run a local server.
9. Hack away! If you have a useful addition please contribute to the github repo.

To customize the bootswatch theme
- Copy the theme into sass/bootswatch/[theme name]
- Change the style.scss file to use the new theme
<pre>
@import "bootswatch/[theme name]/variables";
@import "bootswatch/[theme name]/bootswatch";
</pre>

## Resources & Dependencies

- [Bastard Theme](https://github.com/karloespiritu/Bastard)
- [Bootstrap Sass](https://github.com/twbs/bootstrap-sass)
- [Knockout](http://knockoutjs.com)
- [Bootswatch](https://github.com/thomaspark/bootswatch)
- [Font Awesome Icons](http://fortawesome.github.io/Font-Awesome/icons/)
- [Grunt: The JavaScript Task Runner](http://gruntjs.com)
- [Bower: A package manager for the web](http://bower.io)
- [Sass - Syntactically Awesome Stylesheets](http://sass-lang.com/)
- [HighlightJs - Syntax highlighting for the Web](http://highlightjs.org)
- [FitVids.Js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds](http://fitvidsjs.com/)
- [Disqus](http://disqus.com/)
- [Ghosthunter](https://github.com/i11ume/ghostHunter)


## License

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)
