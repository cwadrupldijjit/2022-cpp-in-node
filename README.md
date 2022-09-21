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
  - `gdb` (if you want to run it using VS Code)
  - Some C++ libraries that the system might be missing (might end up installing what the errors suggest)

The included `.vscode/c_cpp_properties.json` and `.vscode/launch.json` are for use with VS Code and the [C++ extension (by Microsoft)](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) from the extension marketplace.  If you want to use the tasks how they're currently set up in the project (and using VS Code), you will also need to install the [Tasks Shell Input extion](https://marketplace.visualstudio.com/items?itemName=augustocdias.tasks-shell-input) or replace anything that says `${input:nodeLocation*}` with the path to the node binary you want to use.  I strongly recommend that you restart your editor (or at least reload the window) after you've installed those extensions to be sure that everything has been set up correctly.

### Building

If you used `npm` to install, then you can simply run `npm run build` and it will run everything you need.

However, with `yarn` and `pnpm`, you will need to run both the `configure` and `build` commands yourself.

This should first run to make sure that everything is ready to build and then it will compile and emit the binary executable into the `build/Release` folder.

### Running

Simply start the program using Node:

- For the CommonJS version, `node index.cjs`
- For the ESM version, `node index.js`

If you'd prefer to run the program using the built-in debugger for VS Code, you will need to follow the directions in the next section.

### Debugging

Since it's sometimes easiest to track down where bugs are coming from via a debugger, it might be crucial to have a debugger setup, particularly with the structure of C++ (or, at least, from past experience, C++ is hard to fix if you're not sure how to read the error messages or know where to go to make fixes).  Thankfully, you can do this by hooking up the debugger for your platform of choice.  The `.vscode/launch.json` has some configurations that you should be able to just run provided you already have the prerequisites from above and are using VS Code with the C/C++ extension installed.  In that case, browse the debug configuration dropdown in the debug panel on the left (or right if you switched it) and find the relevant operating system and toolchain.

Otherwise, you might need to do some research on the tools that work best for you to debug.  I haven't done exhaustive testing with other IDEs and tooling.

That said, the setup this project is using includes:

- MSVS Build Tools on Windows (which comes with a debugger)
- LLDB on Mac (which comes bundled with XCode)
- GDB in Linux (which will need to be installed separately)

As with many other languages, the debuggers rely on a debug-specific build to ensure that the compiled code maps to the source code.  The project's scripts pass the debug argument to node-gyp and that means that the code will build to the `build/Debug` folder instead of the `build/Release` folder.  Make sure you point to the correct executable with your debugger of choice if you intend to use it outside of the VS Code debugger.

#### A note about the debugging setup for Linux

I've had many struggles with making sure the version of Node is correct on Linux.  If you've installed a version of Node that is older, you need to make sure that it's not found on your PATH or if it is, there is another version available before it.  This project might not work at all for versions of Node prior to 18.
