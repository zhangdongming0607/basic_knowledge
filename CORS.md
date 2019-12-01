# Cross Origin Resource Sharing

## overview

* works by adding new HTTP headers
* need "preflight" request but simple request, by OPTION request

## simple request
should meet all the following conditions
* one of method: `GET` `HEAD` `POST`
* CORS only allow following header
  * Accept
  * Accept-Language
  * Content-Language
  * Content-Type
  ...
* only allow Content-Type list
  * application/x-www.-form-urlencoded
  * multipart/form-data
  * text/plain
* No event listeners are registered on any XMLHttpRequestUpload object used in the request;
  these are accessed using the XMLHttpRequest.upload property.
* no `ReadableStream` object
## demo
### preflight request
* request
Access-Control-Request-Method: POST    
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
* response
Access-Control-Allow-Origin: http://foo.example  
Access-Control-Allow-Methods: POST, GET, OPTIONS   
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type    
Access-Control-Max-Age: 86400  

### actual request

* request
* response  
Access-Control-Allow-Origin: http://foo.example

### credentials
by default, in cross-site XMLHttpRequest or Fetch invocations, browsers will not send credentials
needs withCredentials = true

If request include credentials, `Access-Control-Allow-Origin: * `will fail

### The HTTP response headers
* Access-Control-Allow-Origin
* Access-Control-Expose-Headers
The Access-Control-Expose-Headers header lets a server whitelist headers that browsers are allowed to access.
* Access-Control-Max-Age
* Access-Control-Allow-Credentials
* Access-Control-Allow-Methods
* Access-Control-Allow-Headers

### The HTTP request headers
* Origin
* Access-Control-Request-Method
* Access-Control-Request-Headers

  
  
  
  
