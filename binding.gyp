{
    "targets": [
        {
            "target_name": "hasherbeamhash",
            "sources": [
                "src/blake/blake2b.cpp",
                "src/beamHashIII_imp.cpp",
                "src/equihashR_imp.cpp",
                "hasherbeamhash.cc"
            ],
            "include_dirs": [
                ".",
                "/usr/local/boost",
                "src",
                "<!(node -e \"require('nan')\")"
            ],
            "cflags": [
                "-fexceptions",
                "-std=c++17"
            ],
            'cflags!': [ '-fno-exceptions' ],
            "cflags_cc": [
                "-fexceptions",
                "-std=c++17"
            ],
            'cflags_cc!': [ '-fno-exceptions' ],
            'conditions': [
                    ['OS=="mac"', {
                      'xcode_settings': {
                        'GCC_ENABLE_CPP_EXCEPTIONS': 'YES'
                      }
                    }]
            ]
        }
    ]
}