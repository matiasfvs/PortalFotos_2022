module.exports = {
    user:'sa',
    password:'sasa',
    server:'192.168.0.22',
    database:'GDS_DIARIAS_CL',
    authentication: { type: 'default', options: { userName: 'sa', password: 'sasa' } },
    connectionTimeout: 300000,
    requestTimeout: 300000,
    options: { encrypt: false, enableArithAbort: true, abortTransactionOnError: true }
}