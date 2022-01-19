import _ from 'lodash';

class Truncater {
    static defaultConfig = {
        length: Infinity,
        separator: '...'
    }

    constructor(config = Truncater.defaultConfig) {
        this.length = config.length;
        this.separator = config.separator;
    }

    truncate(string, config) {
        if (!_.has(config, 'length')) {
            config.length = this.length;
        }
        if (!_.has(config, 'separator')) {
            config.separator = this.separator;
        }
        if (string.length > config.length) {
            let newString = string.substr(0, config.length);
            return `${newString}${config.separator}`;
        }

        return string;
    }

}

export default Truncater;