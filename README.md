# C++ in Node
<p style="font-size: .75em">From the UtahJS conference, September 2022</p>

## How to use this project

This project is meant to help with your first forays into C++ Node bindings.  This project was also designed to go hand-in-hand with the presentation given on September 23, 2022 during the UtahJS conference.  The video of the presentation is [\<HERE>]() and the slide deck can be found [\<HERE>]().

This repository has several branches--take a look at them.  There are several branches that can be checked out that demonstrate different techniques such as building a debug version (accompanied with a debug configuration for [VS Code](https://code.visualstudio.com)), different configuration options, and a basic project prepared prior to the conference.  The solution as presented at the conference will be found under the branch name `solution-from-conference`.  Feel free to look at any branch to see if there is anything that can help you if you're trying to find a solution for problems you encounter

## Now for the technical part

### Prerequisites

This project can only really be used on computers that can handle compilation of C/C++ code.  If your system resources turn out to be a bottleneck, it might be better to try running this on a different device.

You have the ability to use any of `npm`, `yarn`, or `pnpm` to install the dependencies in this repository.  Any other alternative has not been tested, but you should be able to use one if you prefer.

Since C++ compilation is different per system, you will have to install the right dependencies for your operating system.  This project was tested with the following:

- All OSes:
  - Python 3+
  - Node 18+
- Windows:
  - MS Visual Studio Build Tools (ensuring that it includes C++ build tooling)
- Mac:
  - XCode (which should install the `clang` cli)
- Linux:
  - `gcc`
  - Perhaps some C++ libraries that the system is missing (might end up being a trial-and-error problem)

The included `.vscode/c_cpp_properties.json` and `.vscode/launch.json` are for use with VS Code and the C++ extension (by Microsoft) from the extension marketplace.

### Building

If you used `npm` to install, then you can simply run `npm run build` and it will run everything you need.

However, with `yarn` and `pnpm`, you will need to run both the `configure` and `build` commands yourself.

This should first run to make sure that everything is ready to build and then it will compile and emit the binary executable into the `build/Release` folder.

### Running

Simply start the program using Node:

- For the CommonJS version, `node index.cjs`
- For the ESM version, `node index.js`
