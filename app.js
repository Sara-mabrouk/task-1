
const yargs = require('yargs')
const students = require('./student')
yargs.command({
    command: 'add',
    describe: 'Add a new students',
    builder: {
        name: {
            describe: 'Students name',
            type: 'string',
            demandOption: true
        },
        ID: {
            describe: 'Students ID',
            type: 'number',
            demandOption: true


        },
        marks: {
            describe: 'Students marks',
            type: 'array',
            demandOption: true            
        }
    },
    handler: () => {
        students.addStudents(yargs.argv.name, yargs.argv.ID, yargs.argv.marks);
    }
// 
}
)
yargs.parse()