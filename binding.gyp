{
    "targets": [
        {
            "target_name": "x16rv2hash",
            "sources": [
                "multihashing.cc",
				'x16rv2.c',
				'sha3/blake.c',
				'sha3/bmw.c',
				'sha3/groestl.c',
				'sha3/jh.c',
				'sha3/keccak.c',
				'sha3/skein.c',
				'sha3/cubehash.c',
				'sha3/echo.c',
				'sha3/luffa.c',
				'sha3/simd.c',
				'sha3/hamsi.c',
				'sha3/hamsi_helper.c',
				'sha3/fugue.c',
				'sha3/shavite.c',
				'sha3/shabal.c',
				'sha3/whirlpool.c',
				'sha3/sha2big.c',
				'sha3/tiger.c',
            ],
            "include_dirs": [
                "<!(node -e \"require('nan')\")"
            ],
            "cflags_cc": [
                "-std=c++11"
            ],
        }
    ]
}



