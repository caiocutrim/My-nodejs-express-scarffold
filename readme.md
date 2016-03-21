### My nodejs/express scarfold
This is my personal initial configuration to start in my node.js/express project, feel free to add some settings and open issues for construct suggestions.

![expressandnode](http://www.softwaresecured.com/wp-content/uploads/2015/04/express-js.jpg)


The dependecy tree directories
```ASCII
.
├── bin
│   └── www
├── configurations
│   └── express.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── readme.md
└── server
    ├── controllers
    ├── events
    ├── models
    ├── routes
    │   ├── index.js
    │   └── users.js
    ├── services
    └── views
        ├── error.ejs
        ├── index.ejs
        ├── layouts
        └── partials
            ├── footer.ejs
            ├── head.ejs
            └── header.ejs

```
To init this project you need to check if you have node and npm installed
then run this command:

```bash
npm install # to install all project dependencies
```

If you want to run the developer mode you need to install first nodemon
```bash
sudo npm install -g nodemon
```
then run
```bash
# into you project
npm run dev
```
This scarfolding try to following the DDD(domain driven design)

License is really boring... this project is really free and don't make sense have a lot of descripted rights!

Author: [Caio Cutrim](http://github.com/caiocutrim)
