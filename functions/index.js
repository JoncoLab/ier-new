const functions = require("firebase-functions"),
    admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

exports.openPage = functions.https.onRequest((request, response) => {
    const page = request.xhr ?
        request.body.page :
        request.path.slice(1);

    let cookie = request.cookies.page;

    if (cookie !== page) {
        cookie = page;
        response.cookie("page", cookie, {secure: true});
        response.status(200).send(page);
    } else {
        response.status(200).send();
    }
});

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
