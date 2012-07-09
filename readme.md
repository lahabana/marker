Marker
========

This is a simple jQuery plug-in to create cool looking markers

Dependency
--------

jQuery

Syntax
========
The only parameters are the title and the an array of categories and their mark.

If you suppose you have a div with a class "bing" to render a marker just do:

	$(".bing").marker({title: "graphismes", categories: [{
				name: "Sequences videos, intros, etc.",
				mark: 2
			},{
				name: "Fluidite",
				mark: 2
			},{
				name: "Qualite des dessins",
				mark: 3
			},{
				name: "Qualite des textures",
				mark: 2
			},{
				name: "Cohérence entre theme et graphisme",
				mark: 2
			},{
				name: "Continuite de la qualite graphique",
				mark: 1
			},{
				name: "Reglages des graphismes",
				mark: 1
			},{
				name: "Details de l'environnement",
				mark: 2
	}]});

And the default stylesheet will give:
	
![The rendered marker](https://github.com/lahabana/marker/blob/master/demo.png?raw=true)

