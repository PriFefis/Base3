// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );
BrowserPolicy.content.allowOriginForAll( 'localhost:3000' );

BrowserPolicy.content.allowOriginForAll('*.gstatic.com');
BrowserPolicy.content.allowOriginForAll('*.googleapis.com');
BrowserPolicy.content.allowOriginForAll('*.google-analytics.com/');
BrowserPolicy.content.allowEval('ajax.googleapis.com');
BrowserPolicy.content.allowOriginForAll('*.google.com');
BrowserPolicy.content.allowOriginForAll("cdn.mxpnl.com");

BrowserPolicy.content.allowSameOriginForAll();
BrowserPolicy.content.allowDataUrlForAll();
