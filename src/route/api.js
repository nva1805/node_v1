import express from 'express'
import { createNewUser, deleteData, getAllUSer, updateData } from '../controller/APIController'


let router = express.Router()

const APIRoute = (app) => {
    router.get('/users', getAllUSer)
    router.post('/create-user', createNewUser)
    router.put('/update-user', updateData)
    router.delete('/delete-user/:id', deleteData)


    return app.use('/api-v1', router)
}

export default APIRoute