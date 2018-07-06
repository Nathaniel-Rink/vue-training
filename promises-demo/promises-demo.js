//https://developers.google.com/web/fundamentals/primers/promises#whats-all-the-fuss-about

function get(url) {

	// Each time get is called, it will return a new promise - (like a "didISucceedOrFail()")
	return new Promise(

		// When I call this, the new promise is expecting a callback with two arguments
		//A method for success, and a method for failure
		(resolve, reject) => {

			// each get call is going to do stuff like a normal get(url) function

			var req = new XMLHttpRequest();
			req.open('GET', url);
			req.onload = function() {
				if (req.status == 200) {

					//Look! Here the method fulfilled successfully
					//so call the resolve function passed in when I used get
					resolve(req.response);
				}
				else {

					//Look! here the method encountered an error
					//so call the reject function passed into the Promise
					reject(Error(req.statusText));
				}
			};

			// Look! Here is another way the req could go wrong, so I'm rejecting it with another error
			req.onerror = function() {
				reject(Error("Network Error"));
			};

			// Now that everything is set up for the httpRequest, enact it
			req.send();
		});
}

//Here I'm implementing a get method

// The function get(url):
// takes my url
// does a request
// And returns the promise
var myFirstPromise = get('story.json');

//Now I can pass in my callback to this new promise using then
myFirstPromise.then(

	//the promise calls this above because it's the resolve param I passed in
	//the resolve function is getting passed req.response as its argument
	(response) => {
		console.log("Success!", response);
	},

	//similarly with the reject method I passed in
	(error) => {
		console.error("Failed!", error);
	});


/** The params passed in have arbitrary names, like any other method **/

function fetchThisUrlThenReturnAPromise(url) {

	// Each time get is called, it will return a new promise - (like a "didISucceedOrFail()")
	return new Promise(

		// When I call this, the new promise is expecting a callback with two arguments
		//A method for success, and a method for failure
		(AMethodToCallOnSuccess, AMethodToCallOnFailure) => {

			// each get call is going to do stuff like a normal get(url) function

			var req = new XMLHttpRequest();
			req.open('GET', url);
			req.onload = function() {
				if (req.status == 200) {

					//Look! Here the method fulfilled successfully
					//so call the resolve function passed in when I used get
					AMethodToCallOnSuccess(req.response);
				}
				else {

					//Look! here the method encountered an error
					//so call the reject function passed into the Promise
					AMethodToCallOnFailure(Error(req.statusText));
				}
			};

			// Look! Here is another way the req could go wrong, so I'm rejecting it with another error
			req.onerror = function() {
				AMethodToCallOnFailure(Error("Network Error"));
			};

			// Now that everything is set up for the httpRequest, enact it
			req.send();
		});
}

//Here I'm implementing a get method

// The function get(url):
// takes my url
// does a request
// And returns the promise
var mySecondPromise = fetchThisUrlThenReturnAPromise('story.json');

function callMeIfSuccess(myResponse){
	console.log("Success!", myResponse);
}
function callMeIfFail(myResponse){
	console.log("Success!", myResponse);
}


//Now I can pass in my callback to this new promise using then
mySecondPromise.then(
	callMeIfSuccess,
	callMeIfFail
)
