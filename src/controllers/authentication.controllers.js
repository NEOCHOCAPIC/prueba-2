import { pool } from '../../Database/db.js'

export const signup = (req, res) => {
  res.render('auth/signup')
}
export const login = (req, res) => {
  res.render('auth/login')
}
export const postLogin = (req, res) => {
  console.log(req.body)
  res.send('datos recibidos')
}
export const postSignup = async (req, res) => {
  
  const {nombre, email, contraseña} = req.body
  const newUser = {
    nombre,
    email,
    contraseña
  }
  await pool.query('INSER INTO Usuario SET ?', [newUser])

  console.log(nombre, email, contraseña)
  console.log(req.body)

  res.send('Datos recibidos')
}
