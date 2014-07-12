var hbs = require('express-hbs'),
    _ = require('lodash'),
    downsize = require('downsize'),
    blogVariable = require('../../../core/server/config/theme');

module.exports = function() {

    //This block allows configuration to be available in the hb templates.
    var blogConfig = blogVariable();
    var config = require('./config') || {};
    blogConfig.theme = config;
    //console.log(JSON.stringify(blogConfig));

    ////Custom hb helpers////

    hbs.registerHelper('excerpt', function (options) {
        var truncateOptions = (options || {}).hash || {},
            excerpt = String(this.html);

        excerpt = excerpt.replace(/(\r\n|\n|\r)+/gm, ' ');

        var more = excerpt.indexOf('<!--more-->');
        if(more > -1) {

            excerpt = excerpt.substring(0, more);
            //Chop punctuation marks
            excerpt = excerpt.replace(/\W+$/, '') + '...';
        }
        else {
            excerpt = excerpt.replace(/<\/?[^>]+>/gi, '');

            truncateOptions = _.pick(truncateOptions, ['words', 'characters']);
            _.keys(truncateOptions).map(function (key) {
                truncateOptions[key] = parseInt(truncateOptions[key], 10);
            });

            if (!truncateOptions.words && !truncateOptions.characters) {
                truncateOptions.words = 50;
            }
            console.log(downsize(excerpt, truncateOptions));
            excerpt = downsize(excerpt, truncateOptions) + '...';
        }

        return new hbs.handlebars.SafeString(excerpt);
    });

    hbs.registerHelper('ifCond', function (v1, operator, v2, options) {

        switch (operator) {
            case '==':
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case '!=':
                return (v1 != v2) ? options.fn(this) : options.inverse(this);
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
            case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
            case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    });

};
