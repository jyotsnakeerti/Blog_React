import mysql from "mysql"

export const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Keerti@20415",
    database:"blog"
})