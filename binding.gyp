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
                "src",
                "<!(node -e \"require('nan')\")"
            ],
            "cflags": [
                "-fexceptions",
                "-std=c++17"
            ],
            "cflags_cc": [
                "-fexceptions",
                "-std=c++17"
            ]
        }
    ]
}