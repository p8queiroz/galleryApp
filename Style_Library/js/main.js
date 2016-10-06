var protocolo = (String(window.location).indexOf("file:") > -1) ? "http:" : "";

requirejs.config({
	
  /*
	Base url for modules	
  */
  baseUrl: 'Style_Library/js',
  
  /*
	Specify custom paths
  */
  paths:{ 
		jQuery: 'libs/jquery/jquery.min',
		"some": "some/v1.0"
	},
  
  /*
    Define the mandatory sequences of dependencies.
    "I know you are asynchronous, but load with this sequence".
  */
  shim: {
		  'source1': ['dependency1','dependency2'],
		  'source2': ['source1']
		}
});