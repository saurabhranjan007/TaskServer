const basicAuth = require('basic-auth')

const Authentication = (req, res, next) => {
    console.log(`Authenticating...`);

    try {
        // Un-Auth Requests 
        const unauthorized = (res) => {
            console.log(`Un-Auth fired!`);
            // res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            return res.status(400).json({
                Message: 'Un-Authenticated Request..'
            })
        }

        const auth = basicAuth(req); 
        console.log(`username: ${auth.name} || password: ${auth.pass}`);

        if(!auth || !auth.name || !auth.pass) {
            console.log(`Inside !statement: ${auth}`);
            return unauthorized(res); 
        }

        // Auth Requests 
        if(auth.name === 'admin' && auth.pass === 'password') {
            console.log(`Inside Auth`);
            return next();
        } else {
            return unauthorized(res); 
        }

    } catch (err) {
        console.error(`Error: ${err.message}`);

        return res.status(400).json({
            Message: 'Error Authenticating Request',
            Error: err.message, 
        })
    }
}

exports.Authentication = Authentication; 