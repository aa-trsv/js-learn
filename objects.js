const fill = (company, params, data) => {
    const newCompany = {};

    if (params.length === 0) {
        Object.assign(newCompany, data);
    } else {
        Object.assign(newCompany, company);
    }

    for (const param of params) {
        newCompany[param] = data[param];
    }

    console.log(newCompany);
    return newCompany;
}

export default fill;