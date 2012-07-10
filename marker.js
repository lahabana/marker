/*
Copyright (c) 2012 Charly Molter <charly.molter@gmail.com
https://github.com/lahabana/marker

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function( $ ) {

	var createMarkup = function(that) {
		var data = $(that).data('marker');

		$(that).addClass(data.classMain);

		var titleContainer = $("<div>").addClass(data.classTitleContainer);
		var title = $("<div>"+ data.title + "</div>").addClass(data.classTitle);
		$(titleContainer).append(title);
		$(that).append(titleContainer);
		
		var catMainContainer = $("<ul/>").addClass(data.classMainCatContainer);
		// We create the html for each category
		var totalCoef = 0;
		$.each(data.categories, function(idx, val) {
			var catContainer = $("<li>").addClass(data.classCatContainer);
			$(catContainer).append($("<div>" + val.name + "</div>").addClass(data.classCatTitle));
			$(catContainer).append($("<div>" + val.mark + "</div>").addClass(data.classMark));
			$(catMainContainer).append(catContainer);
			if (val.coef) {
				data.total += val.mark * val.coef;
				totalCoef += val.coef;
			} else {
				data.total += val.mark;
				totalCoef += 1;
			}
		});
		$(that).append(catMainContainer);

		// We add the total score
		$(titleContainer).append($("<div>" + data.total / totalCoef + "</div>").addClass(data.classTotal));
		// This is to put the left bar to the size of the right bar
		var wantedHeight = $(catMainContainer).height();
		$(titleContainer).height(wantedHeight);
		$(title).width(wantedHeight);
	};

	var methods = {
	    init : function( options ) {

	        return this.each(function(){    
	         
	        	// If the plugin hasn't been initialized yet
	        	if (!$(this).data('marker')) {
					$(this).data('marker', $.extend({
						title: "",
						categories: [],// each category is a json like: {name: "js", mark: 4, coef: 3}
						classMain: "marker-main", // class added to the main element
						classTitle: "marker-title", // class of the element that contains the text
						classTotal: "marker-total", // class of the element that contains the total
						classTitleContainer: "marker-title-container", // class of the element that contains the title and the mark
						classCatContainer: "marker-cat", 
						classMainCatContainer: "marker-cat-container",
						classCatTitle: "marker-cat-name",
						classMark: "marker-cat-mark",
						total: 0 // total number of points (sum of all mark for each category)
					}, options));

					// We create the actual html
					createMarkup(this);
				}
				
	    	});
		}
	};

	  $.fn.marker = function( method ) {	    
	    if ( methods[method] ) {
	      	return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	      	return methods.init.apply( this, arguments );
	    } else {
	      	$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
	    }

		};
})( jQuery );