const convert = (...dates) => {
    const result = [];

    for (const date of dates) {
        const d = new Date(date);
        result.push(d.toDateString());
    }

    console.log(result);
    return result;
}

export default convert;