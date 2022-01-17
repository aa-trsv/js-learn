const each = (obj, fn) => {
    const newObj = {
        obj,
        fn
    }
    return newObj.obj.map((item) => {
        newObj.fn.call(item);
    });
}

export default each;