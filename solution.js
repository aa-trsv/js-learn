const reverse = (segment) => {
    const reverseSegment = {
        beginPoint: {
            x: segment.endPoint.x,
            y: segment.endPoint.y
        },
        endPoint: {
            x: segment.beginPoint.x,
            y: segment.beginPoint.y
        }
    }

    return reverseSegment;
}

export default reverse;