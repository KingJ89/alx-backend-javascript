export default function getResponseFromAPI()
{
  return new Promise((resolve, reject) => {
    // Simulating an API response after 2 seconds
	  setTimeout(() => {
	    resolve('API response success');
    }, 2000);
	  
	  // Optional: You could also reject the promise if needed
	 // reject(new Error('API response failure'));
});
}

