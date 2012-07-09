
(function( $ ) {

	var createMarkup = function(that) {
		var data = $(that).data('marker');

		$(that).addClass(data.classMain);

		var titleContainer = $("<div>").addClass(data.classTitleContainer);
		$(titleContainer).append($("<div>"+ data.title + "</div>").addClass(data.classTitle));
		$(that).append(titleContainer);
		
		var catMainContainer = $("<ul/>").addClass(data.classMainCatContainer);
		$.each(data.categories, function(idx, val) {
			var catContainer = $("<li>").addClass(data.classCatContainer);
			$(catContainer).append($("<div>" + val.name + "</div>").addClass(data.classCatTitle));
			$(catContainer).append($("<div>" + val.mark + "</div>").addClass(data.classMark));
			$(catMainContainer).append(catContainer);
			data.total += val.mark;
		});
		$(that).append(catMainContainer);
		$(titleContainer).append($("<div>" + data.total + "</div>").addClass(data.classTotal));
		$(titleContainer).height($(catMainContainer).height());
	};

	var methods = {
	    init : function( options ) {

	        return this.each(function(){    
	         
	        	// If the plugin hasn't been initialized yet
	        	if (!$(this).data('marker')) {
					$(this).data('marker', $.extend({
						title: "",
						categories: [],// each categorie is a json like: {name: "", mark: ""}
						classMain: "marker-main",
						classTitle: "marker-title",
						classTotal: "marker-total",
						classTitleContainer: "marker-title-container",
						classCatContainer: "marker-cat",
						classMainCatContainer: "marker-cat-container",
						classCatTitle: "marker-cat-name",
						classMark: "marker-cat-mark",
						total: 0
					}, options));
				}
				console.log($(this).data('marker'));
				createMarkup(this);
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