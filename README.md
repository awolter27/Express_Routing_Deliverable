# Express_Routing_Deliverable

## Frasier App

### Make sure you shut down your previous app

1. be sure to have `control c` your previous app if you were running one before starting this new activity

### 🥉We Do: Building a basic Express App

1. Create a new directory inside your labs dir called "frasier"
2. `cd` into `frasier`
3. perform an npm init, specify `server.js` as your entry
4. install express `npm i express`, tell npm to save express as a dependency in package.json
5. create a `server.js` file
6. inside `server.js`, require express and save it to a variable named `express`
7. create a variable named `app`, and set it equal to `express()`
8. have app listen on port 3000
    - once it's listening, log "Hello, Seattle. I'm listening..."
9. test it by going to [http://localhost:3000](http://localhost:3000/)

### 🥉Creating Routes

1. create a GET route for `/frasier`
    - it should send a response of "Once in prep school, the Existentialist Club once named me 'Most Likely to Be'"
2. test the `/frasier` route by going to [http://localhost:3000/frasier](http://localhost:3000/frasier)
3. create a GET route for `/niles`
    - it should send a response of "You know, sometimes I wonder if I'm not just in psychiatry for the money"
4. test the /niles route by going to [http://localhost:3000/niles](http://localhost:3000/niles)
5. create a GET route for `/daphne`
    - it should send a response of "Well, have fun. I'm off to stick my head in the oven."
6. test the `/daphne` route by going to [http://localhost:3000/daphne](http://localhost:3000/daphne)
7. create a GET route for `/roz`
    - it should send a response of "Let me make it easy for you. Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!"
8. test the `/roz` route by going to [http://localhost:3000/roz](http://localhost:3000/roz)
9. create a GET route for `/martin`
    - it should send a response of "You may think it's tough being middle-aged, but think about me. I got a son who's middle-aged."
10. test the `/martin` route by going to [http://localhost:3000/martin](http://localhost:3000/martin)

**Are URLs case sensitive? Let's test:**

1. create a GET route for `/Scrappy`
- it should send a response of "woof"

**test the `/Scrappy` route by going to...**

- [http://localhost:3000/scrappy](http://localhost:3000/scrappy) - what happened?
- [http://localhost:3000/Scrappy](http://localhost:3000/Scrappy) - what happened?

## 💪 You Do: Simpsons App

Refer back to previous section and notes/demos for steps, if necessary

1. `cd` back to your student labs dir
2. Create a directory called `simpsons`
3. Get a basic express server running
    - Install express
    - No routes
    - Just have the app listen
4. Test to make sure it works in the browser
5. Create a route for Homer - `http://localhost:4000/homer`
6. Test the Homer route
7. Create a route for Marge
8. Test the Marge route
9. Create a route for Bart
10. Test the Bart route
11. Create a route for Lisa
12. Test the Lisa route
13. Create a route for Maggie
14. Test the Maggie route
15. Create a route for Snowball II (spaces won't work, so just make it one word or add dashes in between each word)
16. Test the Snowball II route
17. Create a route for Santa's Little Helper (apostrophes won't work, so just remove it in the route)
18. Test the Santa's Little Helper route