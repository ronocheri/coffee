const config = {
    user: 'ron',
    password: 'ron3151993',
    server: 'localhost', 
    database: 'coffeeDB',
    options:
    {
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        },
        encrypt: true,
        trustServerCertificate: true,
        enableArithAort: true,
        instancename:'SQLEXPRESS'
    },
    port:1433 
};


module.exports=config;
