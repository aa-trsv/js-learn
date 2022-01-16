export const makeDecartPoint = (x, y) => ({ x, y });

export const makeRectangle = (point, width, height) => ({ point, width, height });

const getStartPoint = (rectangle) => rectangle.point;

const getWidth = (rectangle) => rectangle.width;

const getHeight = (rectangle) => rectangle.height;

export const containsOrigin = (rectangle) => {
    const point = getStartPoint(rectangle);
    const width = getWidth(rectangle);
    const height = getHeight(rectangle);

    if (point.x === 0 || point.y === 0) {
        return false;
    }

    if (Math.abs(point.x) === width || Math.abs(point.y) === height) {
        return false;
    }

    if (point.x > 0 || Math.abs(point.x) > width) {
        return false;
    }

    if (point.y < 0 || Math.abs(point.y) > height) {
        return false;
    }

    return true;
}
