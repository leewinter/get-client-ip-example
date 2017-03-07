var dns = require('dns');

module.exports = {
    getHostname : (ip, cb) => {
        ip = ip == '::1' ? '127.0.0.1' : ip;
        dns.reverse(ip, (err, domains)=>{
            if (err) {
                console.log(err.toString());
                return;
            }
            var result = {
                ip: ip,
                domains: domains
            };
            console.log(result);
            cb(result);  
        });        
    }
};