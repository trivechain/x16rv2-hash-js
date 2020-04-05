const x16rv2hash = require('./index');

const blockHeaderToBuffer = (blockHeader) => {
    const buf = Buffer.concat([
        Buffer.from(blockHeader.versionHex, 'hex').reverse(),
        Buffer.from(blockHeader.previousblockhash, 'hex').reverse(),
        Buffer.from(blockHeader.merkleroot, 'hex').reverse(),
        Buffer.from(blockHeader.time.toString('16'), 'hex').reverse(),
        Buffer.from(blockHeader.bits, 'hex').reverse(),
        Buffer.from(blockHeader.nonce.toString('16'), 'hex').reverse()
    ]);
    return buf;
}

test('Block 500,000 of Trivechain should return correct hash', () => {
    const blockHeader = blockHeaderToBuffer({
        "hash": "00000000000df20f2ee32d4cecc2ab9f9fe41e231e588fe6d86d5c2a04b03346",
        "confirmations": 198170,
        "height": 500000,
        "version": 536870912,
        "versionHex": "20000000",
        "merkleroot": "2a4323f349f60ffeb0903024216a0466032396593248866ec4c51ce09e8c833d",
        "time": 1573232302,
        "mediantime": 1573231907,
        "nonce": 1064040722,
        "bits": "1c0b912c",
        "difficulty": 22.13144078305147,
        "chainwork": "000000000000000000000000000000000000000000000005f4c3d4380b2287e9",
        "previousblockhash": "0000000006f160e51229a3fb7f6dfa7c17c5b7f282213f298fe982dc4dcd1ba6",
        "nextblockhash": "000000000b5231862827e194f964989c7205b82f2b22bbf5fc12f22af8d864f2",
        "chainlock": true
    })
    const hash = x16rv2hash.x16rv2(blockHeader);
    expect(hash.reverse().toString('hex')).toBe('00000000000df20f2ee32d4cecc2ab9f9fe41e231e588fe6d86d5c2a04b03346');
});

test('Block 600,000 of Trivechain should return correct hash', () => {
    const blockHeader = blockHeaderToBuffer({
        "hash": "000000000147d6d1ddac3b5055188aa88f7b761f0dc50f4523c172bca6d4b2c4",
        "confirmations": 98209,
        "height": 600000,
        "version": 536870912,
        "versionHex": "20000000",
        "merkleroot": "c4934b9cf12fc01c780e3436aaa71d2f1f11b7d2edcfb193b23e079b4a4b847f",
        "time": 1579554129,
        "mediantime": 1579553937,
        "nonce": 660706262,
        "bits": "1c0c8835",
        "difficulty": 20.4272976655331,
        "chainwork": "000000000000000000000000000000000000000000000005f4df83500ad49a9f",
        "previousblockhash": "000000000a269e4a478d628840cd5b2a19868e118d92d4880a31a6bdad56a520",
        "nextblockhash": "0000000007c147147f37501548184eb7a71e1411b6bc885a9d578894ce87d60a",
        "chainlock": true
      })
    const hash = x16rv2hash.x16rv2(blockHeader);
    expect(hash.reverse().toString('hex')).toBe('000000000147d6d1ddac3b5055188aa88f7b761f0dc50f4523c172bca6d4b2c4');
});