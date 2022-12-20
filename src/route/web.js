import express from 'express'
import { createNewUser, deleteUser, getDetailPage, getEditPage, homeController, updateUser } from '../controller/homeController'


let router = express.Router()
const webRoute = (app) => {
    router.get('/', homeController)
    router.get('/detail/user/:userID', getDetailPage)
    router.post('/create-new-user', createNewUser)
    router.post('/delete-user', deleteUser)
    router.get('/edit-user/:id', getEditPage)
    router.post('/update-user', updateUser)

    router.get('/about', (req, res) => {
        res.send('about')
    })
    return app.use('/', router)
}

export default webRoute