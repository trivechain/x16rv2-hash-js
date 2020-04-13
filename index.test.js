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
        "versionHex": "20000000",
        "merkleroot": "2a4323f349f60ffeb0903024216a0466032396593248866ec4c51ce09e8c833d",
        "time": 1573232302,
        "nonce": 1064040722,
        "bits": "1c0b912c",
        "previousblockhash": "0000000006f160e51229a3fb7f6dfa7c17c5b7f282213f298fe982dc4dcd1ba6"
    })
    const hash = x16rv2hash.x16rv2(blockHeader);
    expect(hash.reverse().toString('hex')).toBe('00000000000df20f2ee32d4cecc2ab9f9fe41e231e588fe6d86d5c2a04b03346');
});

test('Block 600,000 of Trivechain should return correct hash', () => {
    const blockHeader = blockHeaderToBuffer({
        "versionHex": "20000000",
        "merkleroot": "c4934b9cf12fc01c780e3436aaa71d2f1f11b7d2edcfb193b23e079b4a4b847f",
        "time": 1579554129,
        "nonce": 660706262,
        "bits": "1c0c8835",
        "previousblockhash": "000000000a269e4a478d628840cd5b2a19868e118d92d4880a31a6bdad56a520",
    })
    const hash = x16rv2hash.x16rv2(blockHeader);
    expect(hash.reverse().toString('hex')).toBe('000000000147d6d1ddac3b5055188aa88f7b761f0dc50f4523c172bca6d4b2c4');
});

test('Block 707,667 of Trivechain should return correct hash', () => {
    const blockHeader = blockHeaderToBuffer({
        "versionHex": "20000000",
        "merkleroot": "456924aa740d1f2f93e121d128353893577b290fe0fa19e25f62055c5e9febf3",
        "time": 1586751468,
        "nonce": 2634815767,
        "bits": "1d00ee45",
        "previousblockhash": "000000004b1164be85db4152ad6aedb1ca10ccddf879042e6dd49838723c5b56"
    })
    const hash = x16rv2hash.x16rv2(blockHeader);
    expect(hash.reverse().toString('hex')).toBe('000000007769f5c63a6a3a0b1e7316870b362b4c68394b0986993fce55b72fb2');
});