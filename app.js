const yargs = require("yargs");
const notes = require('./notes.js')

yargs.command({
    command: "add",
    describe: "Add note",
    builder: {
        title: {
            describe: "Title of the added note",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Content of to be added",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
})



// REMOVE COMMAND

yargs.command({
    command: "remove",
    describe: "Removing notes",
    builder: {
        title: {
            describe: "Title of note to remove",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    } 
})


// LIST COMMAND

yargs.command({
    command: 'list',
    describe: 'Listing the note',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Get to read a list',
    builder: {
        title: {
            describe: 'Title of the list to read',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.getNotes(argv.title);
    }
})

yargs.parse();