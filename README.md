# SWTripAdvisor

You need insert your postgres configuration in config/config.json

npm i
./node_modules/.bin/sequelize db:migrate
node ./bin/www


/// quick test

1.
curl -X POST \
  http://localhost:3000/planets \
  -d '{
	"name": "Geonosis"
}'

expected object from swarapi that already saved in db

2.
curl -X GET \
  http://localhost:3000/planets
  
expected all planets with comments from db

3.
curl -X GET \
  http://localhost:3000/planets/1
  
expected planet with local id === 1

4.
curl -X POST \
  http://localhost:3000/planets/3/comment \
  -d '{
	"score": 4,
	"text": "fine plannet"
}'

expected comment object with planetId
