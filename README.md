#Live List using React and Firebase

An app to showcase live communication using React plus Firebase through the [ReactFire module](https://github.com/firebase/reactfire).

<img src="https://github.com/ViniciusTavares/LiveListWithReactAndFirebase/blob/master/src/static/img/logo.png" />

###Required

* NodeJS and NPM installeds on your OS.
* A supported browser (it works on mobile browsers too).

If you don't know the ES6 syntax, I recommend to take a look at a brief introdution about it. It will be fast and will help you a lot with news knowledges.  

###Installing npm modules
```
npm install
```

The index file is located in "src/static/". Remember that you need to prepare a http enviroment for testing this app. once everythink is ready the main page should looks like this screenshot:
<img src="https://github.com/ViniciusTavares/LiveListWithReactAndFirebase/blob/master/src/static/img/sample.png" />

###The fastest way to run this app
There's a start task for bundling the code and starting the server. Run:
```
npm start
```
The two topics below are not required.

###Preparing the enviroment using "http-server" (optional)

Whether you haven't had an enviroment working yet, you can use the http-server that is a simple module to prepare a http enviroment to you.  
I recommend to you saving it as a dev dependency:
```
npm install http-server --save-dev
node_modules/.bin/http-server src/static
```

Or whether you prefer install it globally:
```
npm install http-server -g
http-server src/static
```

###Regenerating the bundle (optional)
I used webpack to handle my modules's dependencies and bundle them. The command below should generates the bundle again:
```
$ node_modules/.bin/webpack -p
```
PS: You can change production mode to development mode just doing this:
```
$ node_modules/.bin/webpack -d
```

###Useful links:

[Introdution to ES6](https://learn.co/lessons/introduction-to-es6)  
[Official Babel post about React on ES6+](https://babeljs.io/blog/2015/06/07/react-on-es6-plus)  
[WebPack's official docs](https://webpack.github.io/)  

Any doubts? Any issues? Give me some feedbacks, please! :)
