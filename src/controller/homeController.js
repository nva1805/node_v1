import pool from "../config/connectDB";
import alert from 'alert';



let homeController = async (req, res) => {
    // execute will internally call prepare and query
    // =================== connection with no promise =============================
    // let data = [];
    // console.log('7');
    // connection.execute(
    //     'SELECT * FROM `users`',
    //     function (err, results, fields) {
    //         console.log('result', results); // results contains rows returned by server
    //         // console.log(fields); // fields contains extra meta data about results, if available
    //         results.map((row) => {
    //             data.push({
    //                 id: row.id,
    //                 name: row.name,
    //                 email: row.email,
    //                 password: row.password,
    //                 address: row.address
    //             })
    //         })
    //         return res.render('index.ejs', { dataUser: data })
    //     }
    // );

    // =================== connection with promise =============================

    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    console.log('rendering home page');
    return res.render('index.ejs', { dataUser: rows })
}


let getDetailPage = async (req, res) => {
    let userID = req.params.userID
    let [user] = await pool.execute('select * from `users` where id = ?', [userID])
    return res.send(JSON.stringify(user))
}

let createNewUser = async (req, res) => {
    // console.log('request body', req.body); //follow name in input tag
    // res.send('send new page')
    let { name, password, email, address } = req.body
    if (name && password && email && address) {
        await pool.execute(`INSERT INTO users (name, email, password, address)
        VALUES (?, ?, ?, ?)`, [name, email, password, address]);
    } else {
        alert("message")
    }

    return res.redirect('/')
}

let deleteUser = async (req, res) => {
    let userID = req.body.userId
    await pool.execute(`DELETE FROM users WHERE id = ?`, [userID])
    return res.redirect('/')
}

let getEditPage = async (req, res) => {
    let id = req.params.id
    let [user] = await pool.execute('select * from users where id = ?', [id])
    return res.render('update.ejs', { dataUser: user[0] });
}

let updateUser = async (req, res) => {
    let { name, email, address, id } = req.body
    let update = await pool.execute(`UPDATE users
    SET name = ?, address = ?, email = ?
    WHERE id= ?`, [name, address, email, id])
    return res.redirect('/')
}


export { homeController, getDetailPage, createNewUser, deleteUser, getEditPage, updateUser }