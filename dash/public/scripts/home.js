
(function(){
    const rows = document.querySelectorAll('fl-body row');

    for(const i in uniqueVisitors){
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', graphPoints(graphWidth, graphHeight, uniqueVisitors[i]));
        rows[i].children[2].firstElementChild.appendChild(path);
        rows[i].children[2].appendChild(document.createTextNode(uniqueVisitors[i].reduce((sum, value) => sum + value, 0)));
    }
})();
