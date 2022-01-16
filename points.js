const calculateDistance = ([x1,y1], [x2,y2]) => {
    const x = x1 - x2;
    const y = y1 - y2;

    const xPow = Math.pow(x, 2);
    const yPow = Math.pow(y, 2);

    const d = xPow + yPow;
    const l = Math.sqrt(d);

    console.log(l);
    return l;
}

export default calculateDistance;