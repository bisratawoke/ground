const Pool = require('pg').Pool
const pool = new Pool({

    host: 'postgres-test',

    user: 'postgres',

    password: 'postgres',

    database: 'postgres',

    port: 5432


})

let id = 0;

module.exports = {

    createPost : (req,res,next) => {

        id = id + 1 
        pool.query(

            'insert into post (id,name,content) values($1,$2,$3)',

            [id,req.body.name,req.body.content],

            (err,result) => {

                if(err) {

                    console.log(err)
                    return res.json(err)

                }

                console.log("this is the result of create\r\n")

                console.log(result)

                res.result = result

                next()
            }



        )



    },
    
    getPost : (req,res,next) => {

        pool.query(

            'select * from post where id=$1',

            [req.params.id],

            (err,result) => {

                if(err) {

                    return res.json(err)

                }


                res.result = result

                console.log("this is the result of get one\r\n")

                console.log(result)

                next()

            }

        )

    },

    getAllPost : (req,res,next) => {

        pool.query(

            'select * from post',

            (err,result) => {

                if(err) {

                    return res.json(err)

                }


                res.result = result

                console.log("this is the result of get all\r\n")

                console.log(result)

                next()

            }

        )


    },
}