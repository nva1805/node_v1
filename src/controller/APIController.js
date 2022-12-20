import pool from "../config/connectDB";



const getAllUSer = async (req, res) => {
    let [row] = await pool.execute('select * from users')
    res.status(200).json({
        message: 'ok',
        data: row
    })
}

const createNewUser = async (req, res) => {
    let { name, password, email, address } = req.body
    console.log(name, password, '15');
    if (!name || !password || !email || !address) {
        return res.status(200).json({
            message: 'missing data'
        })
    }
    await pool.execute(`INSERT INTO users (name, email, password, address)
        VALUES (?, ?, ?, ?)`, [name, email, password, address]);


    res.status(200).json({
        message: 'ok'
    })
}

const updateData = async (req, res) => {
    let { name, email, address, id } = req.body

    let update = await pool.execute(`UPDATE users
    SET name = ?, address = ?, email = ?
    WHERE id= ?`, [name, address, email, id])
}

const deleteData = async (req, res) => {

    let userID = req.params.id
    await pool.execute(`DELETE FROM users WHERE id = ?`, [userID])
    return res.status(200).json({
        message: 'ok'
    })
}

export { getAllUSer, createNewUser, updateData, deleteData }