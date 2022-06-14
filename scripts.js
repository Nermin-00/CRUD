document.addEventListener('DOMContentLoaded', function () {
    loadHTMLTable([])
})
//T1
function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');
    
    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }
    
}