// requires
const fs = require('fs');
const colors = require('colors');

// array of ToDo items
let listToDo = [];


// save array listToDo on db/data.json
const saveDB = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json', data, (e) => {
        if(e) throw new Error('Data was not saved',e);
    })
}


// load data from db/data.json on arrat listToDo
const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}


// function new to-do item
const create = (description) => {
    
    loadDB();

    let td = {
        description,
        completed: false
    };

    listToDo.push(td);
    
    saveDB();

    return td;
}


// list all to-do
const getList = () => {
    loadDB();
    return listToDo;
}



// change status of any item in the ToDo list
const update = (description, completed = true) => {
    
    loadDB();
    let index = listToDo.findIndex( td => td.description === description);

    if ( index >= 0 ) { // item found
        listToDo[index].completed = completed;
        saveDB();
        return true;
    } else { // item not found
        return false;
    }
};



// delete an item in the to-do list
const erase = (description) => {
    loadDB();
    let newListToDo = listToDo.filter( task => task.description !== description );

    if (newListToDo.length === listToDo.length) { // item not found, not erase
        return false;
    } else { // item erase
        listToDo = newListToDo;
        saveDB();
        return true;
    }
}



// export functions
module.exports = {
    create,
    getList,
    update,
    erase
}