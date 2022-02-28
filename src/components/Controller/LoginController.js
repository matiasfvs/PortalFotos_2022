const sql = require('mssql')
const config = require('../config/dbConfig')


module.exports = function (res,req,next) {
    
    const pool = new sql.ConnectionPool(config)
    const conn = pool

    conn
    .connect()
    .then(
        function () {
            const request = new sql.Request(conn)

            const query = 'select * from [dbo].[mobile_fotos_clientes]'
            console.log(query)

            new Promise((resolve)=>{
                resolve(functionQuery(query,conn))
                })
                .then((respuesta)=>{
                    res.json(respuesta)
                })
                .catch((respuesta)=>{
                    res.json('problema en la red',respuesta)
                })
            
        })
            .catch(function (err){
                console.log('Error 2')
                res.json({mensaje:'Error', desc_error:err})
                conn.close()
            })
        
        async function functionQuery(query,conn){
            return await conn.query(query).then((res_sql) =>{

            return new Promise((resolve)=>{
                resolve(res_sql.recordset[0])
            })
            .then((respuesta)=>{
                console.log('respuesta OK',respuesta)
                return respuesta
            })
            .catch((respuesta)=>{
                console.log('respuesta error', respuesta)
            })

            })
        }
    }