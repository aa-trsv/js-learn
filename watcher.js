import { stat } from 'fs'

class File {
    constructor() {
        this.lastChangeTime = 0;
    }

    setLastChangeTime(time) {
        this.lastChangeTime = time;
    }

    getLastChangeTime() {
        return this.lastChangeTime;
    } 

    checkChangeFile(filepath, id, cb) {
        stat(filepath, (err, stats) => {
            if (err) {
                cb(err);
                clearInterval(id);
                return;
            }
            
            if (this.getLastChangeTime() === 0) {
                this.setLastChangeTime(stats.mtimeMs);
            } 
    
            if (this.getLastChangeTime() !== stats.mtimeMs) {
                cb(id); 
            }
        })
    }
}

const watch = (filepath, timeout, cb) => {
    const file = new File();
    const id = setInterval(() => file.checkChangeFile(filepath, id, cb), timeout);
    return id;
}

export default watch;