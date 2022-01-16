import calculateDistance from "../points.js";

test('Distance', () => {
    const point1 = [0, 0];
    const point2 = [3, 4];

    expect(calculateDistance(point1,point2)).toEqual(5);
});