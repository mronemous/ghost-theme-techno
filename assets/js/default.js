(function ($) {
    "use strict";

		function AppViewModel() {
			
			$.extend(this, window.techno);
		}
	
    function initSearch() {

        var Search = function() {
            var me = this;

            this.input = $('.site-nav .search');
            this.result = $('.site-nav .search-result');
            this.defaultBody = $('.default-body');
            this.nav = $('.site-nav .navbar');

            this.input.ghostHunter({results: '.site-nav .search-result .dummy',
                onKeyUp: true,
                zeroResultsInfo: false,
                info_template: "",
                result_template: "",
                onComplete: function(resultsData) {

                    var title = me.result.find('.panel-title');
                    var list = me.result.find('.list-group');

                    title.text('Number of posts found: ' + resultsData.length);

                    list.empty();
                    var data, items = [];
                    for(var i=0; i < resultsData.length; i++) {
                        data = resultsData[i];
                        items.push('<li class="list-group-item"><a href="' + data.link + '#top">' + data.title + '</a></li>');
                    }
                    list.append(items.join(''));

                    if(resultsData.length > 0) {
                        me.active();
                    }
                    else {
                        me.inactive();
                    }
                }
            });

            this.input.keypress(function(event) {
                if(event.keyCode == 13 || event.keyCode == 8) {
                    me.input.blur();
                }
            });


            this.result.on('click', '.close', function(e) {
                e.preventDefault();
                me.input.val('');
                me.inactive();
            });
        };

        Search.prototype.active = function() {
            this.result.show();
            this.defaultBody.hide();
            this.nav.addClass('search-active');
        };
        Search.prototype.inactive = function() {
            this.result.hide();
            this.defaultBody.show();
            this.nav.removeClass('search-active');
        };

        var search = new Search();
    }

    $(document).ready(function(){

        $(".post-content").fitVids();
        $(".site-head").parallax("70%", 0.2);

        initSearch();

        hljs.initHighlightingOnLoad();
			
				// Activates knockout.js
				ko.applyBindings(new AppViewModel());
    });

}(jQuery));

