function graphPoints(width, height, points){
    const stepX = width / (points.length - 1);
    const maxValue = Math.max(...points);

    let d = '';

    points.forEach((value, index) => {
        const x = index*stepX;
        const y = height-(value/maxValue)*height;
        d += (index === 0 ? 'M' : 'L')+x.toFixed(2)+','+y.toFixed(2)+' ';
    });

    return d.trim();
}
