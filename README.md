# Express-handlebars demo
# basert på eksempel fra https://github.com/express-handlebars/express-handlebars

# kjøres med > npm install, og > npm start
# Server vil lytte på port 3000. 

# Caveat: legg merke til at app.js er byttet med 
# server.js i deres eksempel /basic/ package.json
# Her kjøres > npm start
# (til node app.js)

# Også så har /basic/ package.json bare express 4.17.1 installert,
# men så importerer de { engine } fra "../../dist/index.js" merkelig nok
# bruker heller import som i app.js eksempel på hovedside
# så > npm i express,
# > npm i express-handlebars 

# Merk også at package.json setter "type":"module" for å bruke import

