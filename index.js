const Table=require('cli-table3');
const record=[
    //['Name', 'Github Link', 'Github Static Page Link']
    ['이현재', 'https://github.com/dlguswo333', 'http://dlguswo333.github.io/']
];
var table=new Table({
    head: ['Name', 'Github Link', 'Github Static Page Link']
});
record.forEach(function(record){
    table.push(record);
});
console.log(table.toString());