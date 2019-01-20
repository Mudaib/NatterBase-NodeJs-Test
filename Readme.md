This is a test project done for Natterbase. You can use Postman to test the apis.

To test, first download or clone the repo;
Type into the cmd of the project directory 'npm install' to install all dependencies
To run it type into the cmd 'nodemon app'

Using Postman to test:
All the api endpoints are:
POST/login
    localhost:8080/login
    - Enter the key: username, value: admin
                key: password:admin, value:admin
      in the x-www-form-urlencoded in the Body tab
Then copy the token generated and paste it into
key: x-access-token, value:your generated token in the header tab of your Postman.

GET/countries
    localhost:8080/countries

PUT/countries
    - Add country like this e.g localhost:8080/countries/Niger

DELETE/countries
    - Delete a country like this e.g localhost:8080/countries/Nigeria