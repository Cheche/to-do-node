const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');

// uncomment the next line if you need to see a list of arguments received
// console.log('Arguments received',argv);

let command = argv._[0];

switch (command) {
    case 'new':
        let td = toDo.create(argv.description);
        console.log('create new to-do', td);
        break

    case 'list':
        let list = toDo.getList();
        for (let td of list) {
            console.log('======== To-Do ======='.green);
            console.log(`Desc: ${td.description}`);
            console.log(`Completed: ${td.completed}`);
        }
        break;

    case 'update':
        let updated = toDo.update(argv.description, argv.completed);
        console.log('update a to-do item status?:', updated );
        break;

    case 'delete':
            let deleted = toDo.erase(argv.description);
            console.log('item deleted?:', deleted );
            break;

    default:
        console.log('unknown option');
        break;
}