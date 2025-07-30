(function(){
    const div = document.querySelectorAll('radio-section div');

    for(const i in points){
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', graphPoints(graphWidth, graphHeight, points[i]));
        div[i].children[1].appendChild(path);
        //rows[i].children[2].appendChild(document.createTextNode(points[i].reduce((sum, value) => sum + value, 0)));
    }
})();
