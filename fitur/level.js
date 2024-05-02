let handler = m => m;

handler.before = function (m) {
    let user = global.db.data.users[m.sender];
    let role = _dapatkanRole(user.level);
    user.role = role;
    return true;
};

function _dapatkanRole(level) {
    let roles = {
        1: 'Kang Sapu Sapu',
        3: 'Murid',
        7: 'Murid Senior',
        9: 'Osis',
        11: 'Ketua Osis',
        13: 'Rekrutan',
        15: 'Junior Researcher',
        17: 'Senior Researcher',
        19: 'Sepuh Researcher',
        21: 'Direktur Researcher',
        23: 'Manajer Researcher',
        25: 'CEO Researcher',
        27: 'Badan Keamanan Direktur Researcher',
        29: 'CO Asisstant CO Founder Researcher'
    };

    let role = 'head of space';
    for (let lvl in roles) {
        if (level >= lvl) {
            role = roles[lvl];
        }
    }

    return role;
}

module.exports = handler;￼Enter
