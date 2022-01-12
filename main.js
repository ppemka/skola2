async function loadIntoTable(url, table) {
const tableHead = tableHead = table.querySelector("thead");
const tableHead = tableBody = table.querySelector("tbody");
const response = await fetch(url);
const data = await response.json();

console.log(data)
}

loadIntoTable("./data.json", document.querySelector("table"));