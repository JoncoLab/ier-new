const functions = require("firebase-functions"),
    admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

exports.openPage = functions.https.onRequest((request, response) => {
    let page = request.body.page,
        cookie = request.cookies === undefined ?
            "" :
            request.cookies.page;

    if (cookie !== page && typeof page === "string" && page.trim() !== "") {
        cookie = page;
        response
            .cookie(
                "page",
                cookie,
                {
                    path: "/",
                    domain: "international-economic-relati.firebaseapp.com",
                    secure: true,
                    signed: false
                }
            )
            .status(200)
            .send(page);
    } else {
        response.status(500).send();
    }
});
