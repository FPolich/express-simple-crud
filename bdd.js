const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password: '1234',
    port: 5432
})

//GET ALL BY ID

const getAll = (request, response) => {
    pool.query("SELECT * FROM tabla_ejemplo ORDER BY id ASC", (error, results) =>{
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//GET BY ID

const getById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM tabla_ejemplo WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//POST
const create = (request, response) => {
    const { titulo, genero, anio } = request.body
    const queryRequest = "INSERT INTO tabla_ejemplo (titulo, genero, anio) VALUES ($1, $2, $3)"
    pool.query(queryRequest,[titulo, genero, anio], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Added by ID: ${results.insertId}`)
    })
  }

//PUT

const update = (request, response) => {
    const id = parseInt(request.params.id)
    const { titulo, genero, anio } = request.body
  
    pool.query(
      'UPDATE tabla_ejemplo SET titulo = $1, genero = $2, anio = $3 WHERE id = $4',
      [titulo, genero, anio, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Modified by ID: ${id}`)
      }
    )
  }


//DELETE 

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM tabla_ejemplo WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Deleted with ID: ${id}`)
    })
  }

  module.exports = {
      getAll,
      getById,
      deleteUser,
      create,
      update,
  }