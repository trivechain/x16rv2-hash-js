import x16rv2_hash, os, sys, time, binascii

def dectohex(decimal):
  hexnonce = str(hex(decimal)).replace('0x','')
  while len(hexnonce) < 8:
    hexnonce = '0' + hexnonce
  
  return binascii.unhexlify(str(hexnonce))

blockheader = {
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
  "chainlock": True
}
buf = binascii.unhexlify(blockheader["versionHex"])[::-1] + binascii.unhexlify(blockheader["previousblockhash"])[::-1] + binascii.unhexlify(blockheader["merkleroot"])[::-1] + dectohex(blockheader["time"])[::-1] + binascii.unhexlify(blockheader["bits"])[::-1] + dectohex(blockheader["nonce"])[::-1]

# Block Header of 500,000
header = '00000020a61bcd4ddc82e98f293f2182f2b7c5177cfa6d7ffba32912e560f106000000003d838c9ee01cc5c46e8648325996230366046a21243090b0fe0ff649f323432aae9ec55d2c910b1c12f96b3f'
assert binascii.hexlify(buf) == header

target = "0000ffff00000000000000000000000000000000000000000000000000000000"
targetbin = binascii.unhexlify(target)

hashbin = x16rv2_hash.getPoWHash(binascii.unhexlify(header))[::-1]

assert hashbin < targetbin
assert str(binascii.hexlify(hashbin)) == '00000000000df20f2ee32d4cecc2ab9f9fe41e231e588fe6d86d5c2a04b03346'

print("Everything passed")

