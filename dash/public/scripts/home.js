(function(){
    const rows = document.querySelectorAll('fl-body row');

    for(const i in points){
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', graphPoints(graphWidth, graphHeight, points[i]));
        rows[i].children[2].firstElementChild.appendChild(path);
    }
})();
