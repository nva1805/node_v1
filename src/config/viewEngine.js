import express from "express";
import path from 'path'


const viewEngine = (app) => {
    app.use(express.static('./src/public'))
    app.set('view engine', 'ejs')
    app.set('views', './src/views');
}

export default viewEngine
