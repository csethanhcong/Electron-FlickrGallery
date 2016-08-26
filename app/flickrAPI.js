var Flickr = require('flickrapi');
var request = require('request');
var flickrOptions = {
      api_key: 'cf4240cf4fb55f4ac1dc34d1e1963c32',
      secret: '1a90af05b077b9fa',
      nobrowser: true,
    };

function authenticate() {
	Flickr.authenticate(flickrOptions, function(error, flickr) {
	 	console.dir(flickr.options);


	 //  	flickr.photos.search({
		//   user_id: flickr.options.user_id,
		//   page: 1,
		//   per_page: 500
		// }, function(err, result) {
		//   console.dir(result);
		// });
		// 
		// 
		// 
		// 
		// flickr.people.getPhotos({
		//   api_key: ...
		//   user_id: <your own ID>
		//   authenticated: true,
		//   page: 1,
		//   per_page: 100
		// }, function(err, result) {
		//   /*
		//     This will now give all public and private results,
		//     because we explicitly ran this as an authenticated call
		//   */
		// });
		
	});
}

function search(keyword) {
	var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrOptions.api_key + '&tags=' + encodeURIComponent(keyword) + '&format=json&nojsoncallback=1';
	
	request(apiUrl, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.dir(body);
	  }
	})
}

search('hello');