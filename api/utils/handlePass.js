const bcrypt = require('bcrypt')

const encrypt = async (pass) => {
    const hash = await bcrypt.hash(pass, 7)
    return hash
};

const compare = async (pass, hash) => {
    const comp = await bcrypt.compare(pass, hash)
    return comp
};


module.exports = { encrypt, compare };