var request = require('request');
var parameter = {
    'tanent_id' : '',
    'client_id': '',
    'scope' : 'user.read',
    'redirect_url' :'http://localhost:3000/authcode',
    'grant_type' : 'authorization_code',
    'client_secret' : ''
};



function GetBearToken(req , res){
    var code = req.query.code;
    const url = 'https://login.microsoftonline.com/'+parameter.tanent_id+'/oauth2/v2.0/token';
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Authorization': 'Bearer ' + accessToken
    };
    const formData = {
        'client_id': parameter.client_id,
        'scope' : parameter.scope,
        'code' : code,
        'redirect_uri' : parameter.redirect_url,
        'grant_type' : parameter.grant_type,
        'client_secret' : parameter.client_secret
    };
    request.post({
        url: url,
        form: formData,
        headers: headers

    }, function (err, result, body) {
        if (err) return reject(err); 
        console.log(err);
        const bodyObj = JSON.parse(body);
        //resolve(bodyObj.token);
        res.render('p1' , {
            token: JSON.stringify(bodyObj)
        });
    });

    
}

module.exports = {    

    GetBearToken
    
}