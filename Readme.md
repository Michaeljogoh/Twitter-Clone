## Twitter Clone - Node.js

 Node twitter is an effort to rewrite some of Twitter's functionality using modern javascript based toolchain. It was mostly an effort to learn Node.js and trying to reverse engineer some of twitter's feature.


In this project, I preferred Node.js in Back-end, mongoDB as Service, object document mapper (ODM) mongoose. I'm deploying my project to heroku.



started listening on http://localhost:7000/ in your terminal we are connected to mongoDB!!!🤪
if there is this command, it means its backend is working fine.


Running backend
* cd backend
* npm i
* npm start
* npm watch #run with nodemon for development
Run npm install on the root folder and it will set up a pre-commit hook to lint the staged files. You will also have two lint commands, npm run lint and npm run lint-staged that you can run on the root folder.

These commands run the individual lint and lint-staged scripts in both the frontend and the backend folders, and they will respect individual configurations of these folders.

UML Diagram
Class Diagram(Plant Uml)


![129368881-67e96d9b-2346-49d2-a288-05bae52aef1f (1)](https://user-images.githubusercontent.com/87239482/180251020-ee564220-6454-465b-b424-cced640b4f6e.png)





Request end-points
GET  http://localhost:3000/ HTTP/1.1


###

DELETE  http://localhost:3000/users/611390360384a2befbbc7466 HTTP/1.1

###

GET http://localhost:3000/users/6113b3d9e2c6234211727249

###

POST    http://localhost:3000/users/617e978514928da134c12366/tweets HTTP/1.1
content-type: application/json

{"body": "This is a test tweet."}

###

PATCH   http://localhost:3000/users/6113a464e332bd183bf840d2 HTTP/1.1
content-type: application/json

{"name": "Cihat"}

###

PATCH   http://localhost:3000/users/611546eebd96a6a5e85c821d/following HTTP/1.1
content-type: application/json

{"userToFollowId": "6113dc26306ad96bcd30b251"}

###

PATCH   http://localhost:3000/users/612cea71e2e1167e4e1547ce/like HTTP/1.1
content-type: application/json

{"likeTweetId": "612cea85e2e1167e4e1547d1"}

###

PATCH   http://localhost:3000/users/6113dc26306ad96bcd30b251/retweet HTTP/1.1
content-type: application/json

{"retweetId": "6113de87306ad96bcd30b50b"}
