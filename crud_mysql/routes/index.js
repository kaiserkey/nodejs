'use strict'

const express = require('express'),
        router = express.Router(),
        Movies = require('../models/movies')

function err404(req, res, next){
    let err = new Error(),
            locals = {
                title: 'Error 404',
                description: 'Recurso no encontrado',
                error: err
            }
    err.status = (err.status || 404);
    res.render('error', locals)
    next()
}

router
    .use( Movies )
    .get('/', (req, res)=>{
        res.end('<h1>Terminada la configuracion de la app en express</h1>')
    })
    .get('/home', (req,res,next)=>{
        req.getConnection((err, Movies)=>{
            if(err){
                next(new Error('Error al buscar los datos'))
            }else{
                Movies.query('SELECT * FROM movie', (err, rows)=> {
                    res.render('index', { data: rows })
                })
            }
        })
    })
    .get('/agregar', (req,res)=>{ res.render('newMovie', { title: 'Agregar Pelicula'}) })
    .post('/add', (req,res,next)=>{
        req.getConnection((err, Movies)=>{

            const movie = {
                title: req.body.title,
                released: req.body.released,
                rating: req.body.rating,
                image: req.body.image
            }
            Movies.query('INSERT INTO movie SET ?', movie, (err, rows)=>{
                return err ? next(new Error('Error no se pudieton insertar los datos')) : res.redirect('/home')
            })
        })
    })
    .get('/actualizar/:id', (req,res)=>{
        let movie_id = req.params.id
        req.getConnection((err, Movies)=>{
            Movies.query('SELECT * FROM movie WHERE movie_id = ?', movie_id, (err, rows)=>{
                if(err){
                    throw(err)
                }else{
                    res.render('updateMovie', { movie: rows, title: 'Actualizar Pelicula' })
                }
            })
        })
    })
    .post('/actualizar', (req,res)=>{
        req.getConnection((err, Movies)=>{
            const movie = {
                title: req.body.title,
                released: req.body.released,
                rating: req.body.rating,
                image: req.body.image
            }
            Movies.query('UPDATE movie SET ? WHERE movie_id = ?', [movie, req.body.movie_id], (err, rows)=>{
                return err ? res.redirect('/actualizar') : res.redirect('/home')
            })
        })
    })
    .post('/eliminar/:id', (req,res, next)=>{
        req.getConnection((err, Movies)=>{
            Movies.query('DELETE FROM movie WHERE movie_id = ?', req.params.id, (err, rows)=>{
                return err ? next(new Error('registro no encontrado')) : res.redirect('/home')
            })
        })
    })
    .use(err404)

module.exports = router