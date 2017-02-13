# Fetch polyfill modified to use with iViewer 4.

## Usage

    CF.fetch(url, options)
        .then( function(response) {
            return response.json();
            // return response.text();
        })
        .then( function(data) {
            // do something with text or json data
        })
        .catch( function(error) {
            // catch errors here
        });
        
