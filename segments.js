// makeSegment(). Принимает на вход две точки и возвращает отрезок.
// getMidpointOfSegment(). Принимает на вход отрезок и возвращает точку находящуюся на середине отрезка.
// getBeginPoint(). Принимает на вход отрезок и возвращает точку начала отрезка.
// getEndPoint(). Принимает на вход отрезок и возвращает точку конца отрезка.

export const makeDecartPoint = (x, y) => {
  return {x, y};
}

export const makeSegment = (beginPoint, endPoint) => {
    const segment = { beginPoint, endPoint };

    const x = beginPoint.x - endPoint.x;
    const y = beginPoint.y - endPoint.y;

    const xPow = Math.pow(x, 2);
    const yPow = Math.pow(y, 2);

    const d = xPow + yPow;

    segment.distance = Math.sqrt(d);

    return segment;
}

export const getMidpointOfSegment = (segment) => {
    const x = (segment.beginPoint.x + segment.endPoint.x) / 2;
    const y = (segment.beginPoint.y + segment.endPoint.y) / 2;

    return {x, y};
}

export const getBeginPoint = (segment) => {
    return segment.beginPoint;
}

export const getEndPoint = (segment) => {
    return segment.endPoint;
}