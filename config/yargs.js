const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of the task to be completed'
};

const completed = {
    default: true,
    alias: 'c',
    desc: 'Mark how completed or pending a task'
};

const argv = require('yargs')
                .command('new','Add a new item in the to-do list', { description })
                .command('update','Edit the item in the to-do list as completed', { description, completed })
                .command('delete','Delete an item in the to-do list', {description })
                .help()
                .argv;



module.exports = {
    argv
};