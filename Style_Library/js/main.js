var protocolo = (String(window.location).indexOf("file:") > -1) ? "http:" : "";

requirejs.config({
	
  //base url for modules	
  baseUrl: 'Style_Library/js',
  
  //Specify custom paths
  paths:{ 
		jQuery: 'libs/jquery/jquery.min',
		"some": "some/v1.0"
	},
  
  /*define the mandatory sequences of dependencies.
  "oh, sei que é assincrono, mas carregue nesta ordem".*/
  shim: {
		  'source1': ['dependency1','dependency2'],
		  'source2': ['source1']
		}
});