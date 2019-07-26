
// parse table
const tables = document.querySelectorAll("table");
const data  = parseTable(tables);

console.log(data);






function parseTable(tables) {
    let tableElements = [];
    
    for (var table of tables) {
        tableElements.push(table);
        
      }
    return tableElements;
}
