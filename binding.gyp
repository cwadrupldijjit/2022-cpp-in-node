{
    # Custom variables that can be provided to the gyp build command
    "variables": {
        
    },
    # Targets you wish to build to; if you just want one output, then one should work
    "targets": [{
        "target_name": "my_node_addon",
        "include_dirs": [
            "src",
            "src/entities",
            "src/utilities",
            "src/lib",
            "<!(node -e \"require('nan')\")",
        ],
        # This is a list of ALL included files
        "sources": [
            "cpp/index.cc",
        ],
        "cflags_cc": [
            "-fexceptions",
            "-std=c++17",
            "-pthread",
        ],
        "conditions": [
            ["OS=='win'", {
                # windows-specific config; msvs flags, etc
                "defines": [
                    "_OS_WIN",
                ],
                "msvs_settings": {
                    "VCCLCompilerTool": {
                        "AdditionalOptions": ["-std:c++17", '/EHsc'],
                        'ExceptionHandling': 1,
                    },
                },
            }],
            ["OS=='mac'", {
                # mac-specific config; xcode/clang flags, etc
                "defines": [
                    "_OS_MAC",
                ],
                'cflags_cc': ['-fexceptions', '-std=c++17', '-pthread'],
                'xcode_settings': {
                    'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
                    'OTHER_CFLAGS': ['-std=c++17', '-mmacosx-version-min=10.13', '-pthread'],
                },
            }],
            ["OS!='win' and OS!='mac'", {
                # linux-specific config; gcc flags, etc.
                "defines": [
                    "_OS_LINUX",
                ],
            }],
        ],
    }],
}
