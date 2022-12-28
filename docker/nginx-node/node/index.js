const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 5555;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database:'nodedb'
};

app.get('/', (req, res) => {
  createTablePeople(res)
});

app.listen(PORT, () => {
  console.log('App running in ' + PORT);
});

async function createTablePeople(res) {
    const connection = mysql.createConnection(config);
    const sql = `create table if not exists peoples(
      id int primary key auto_increment,
      name varchar(255)not null
  )`;
      
    connection.query(sql);
    console.log(`CREATE TABLE PEOPLE!`);    
   await createPeople(res, connection);
}

async function createPeople(res, connection) {
  const sql = `INSERT INTO peoples(name) values('thigo gladstone')`;
    
  connection.query(sql);
  console.log(`NSERT INTO PEOPLE!`);    
  await getPeople(res, connection);
}

async function getPeople(res, connection) {    
  const sql = `SELECT id, name FROM peoples`;  
  
 await connection.query(sql, (error, results, fields) => {
    if (error) {
      throw error
    };
    
    let table = '<table>';
    table += '<tr><th>Id</th><th>Name</th></tr>';
    for(let people of results) {      
      table += `<tr><td>${people?.id}</td><td>${people?.name}</td></tr>`;
    }

    table += '</table>';    
    res.send('<h1>Full Cycle Rocks!</h1>' + table);    
  });   
  connection.end();
}