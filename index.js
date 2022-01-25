import axios from 'axios';

const fn = async () => {
    const data = {
        "SessionID": "is4XKBONWwGn6frWsp1Sc5mlodHJWc6R"
    };
    const response = await axios.post('test.tu', data);
}

fn();