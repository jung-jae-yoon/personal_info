const Table=require('cli-table3');
const record=[
    //['Name', 'Github Link', 'Github Static Page Link']
];
var table=new Table({
    head: ['Name', 'Github Link', 'Github Static Page Link']
});
record.forEach(function(record){
    table.push(record);
});
console.log(table.toString());