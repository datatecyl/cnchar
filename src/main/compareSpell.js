let _cnchar = null;
const toneCodes = [];

initToneCodes();

function initToneCodes (__cnchar) {
    _cnchar = __cnchar;
    'aoeiuvn'.split('').forEach(item => {
        const code = item.charCodeAt(0);
        for (let i = 1; i <= 4; i++) {
            toneCodes.push(code + i * 0.1);
        }
    });
}

function getToneCodes (char) {
    const index = _cnchar._.tones.indexOf(char);
    if (index === -1) {
        return -1;
    }
    return toneCodes[index];
}

function getCharCode (char, tone = false) {
    if (!tone) {
        return char.charCodeAt(0);
    }
    const code = getToneCodes(char);
    if (code === -1) {
        return char.charCodeAt(0);
    }
    return code;
}

// 比较拼音大小的方法考虑移到cnchar工具方法中

module.exports = {initToneCodes, getCharCode};