const getDomainInfo = (url) => {
    const domain = {};

    if (url.startsWith('http://')) {
        domain.scheme = 'http';
        domain.name = replaceSchemaByUrl(url, domain.scheme);
    }
    else if (url.startsWith('https://')) {
        domain.scheme = 'https';
        domain.name = replaceSchemaByUrl(url, domain.scheme);
    }
    else {
        domain.scheme = 'http';
        domain.name = url;
    }

    console.log(domain);
}

const replaceSchemaByUrl = (url, schema) => {
    return url.replace(`${schema}://`, '');
}

export default getDomainInfo;