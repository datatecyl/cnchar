const dict = require('./stroke-count-jian.json');

const arg = {simple: 'simple', trad: 'trad', array: 'array'};
let _ = {};// 工具方法
 
function initStrokeToWord (cnchar) {
    cnchar.strokeToWord = strokeToWord;
    cnchar.type.strokeToWord = arg;
    _ = cnchar._;
}

function strokeToWord (...args) {
    const count = args[0];
    if (typeof count !== 'number' || parseInt(count) !== count || count <= 0) {
        throw new Error('strokeToWord: 输入必须是正整数');
    }
    args = args.splice(1);
    _.checkArgs('strokeToWord', args);
    let res = '';
    const argRes = {
        simple: _.has(args, arg.simple),
        trad: _.has(args, arg.trad),
    };
    if (!argRes.simple && !argRes.trad) {
        argRes.simple = argRes.trad = true;
    }
    if (argRes.simple) {
        res += base(count, dict); // 简体
    }
    if (argRes.trad && _.dict.getTradCount) {
        res += base(count, _.dict.getTradCount()); // 繁体
    }
    if (_.has(args, arg.array)) {
        return res.split('');
    }
    return res;
}

function base (count, dict) {
    if (typeof dict[count] === 'undefined')
        return '';
    return dict[count];
}

module.exports = initStrokeToWord;
