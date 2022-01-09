const is = (com1, com2) => {

    if (com1.name !== com2.name ) {
        return false;
    } else if (com1.state !== com2.state ) {
        return false;
    } else if (com1.website !== com2.website ) {
        return false;
    }

    return true;
}

export default is;