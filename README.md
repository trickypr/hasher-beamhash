hasher-beamhash
===============

This is a Node module for simple hashing and verifying [Beam coin](https://beam.mw) proof-of-work solutions. 
Most of the native code comes from or is adapted from [Beam source code](https://github.com/BeamMW/beam/tree/master/3rdparty/crypto).

This module has been developed and tested on [Node v10.17](https://nodejs.org/) and 
[Ubuntu 16.04](http://releases.ubuntu.com/16.04/) for the [Beam mining pool](https://mintpond.com/#!/beam) at [MintPond](https://mintpond.com).

## Install ##
__Install as Dependency in NodeJS Project__
```bash
# Install from Github NPM repository

sudo apt-get install build-essential
sudo apt-get install libboost-dev
npm config set @mintpond:registry https://npm.pkg.github.com/mintpond
npm config set //npm.pkg.github.com/:_authToken <MY_GITHUB_AUTH_TOKEN>

npm install @mintpond/hasher-beamhash@0.1.1 --save
```
[Creating a personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

__Install & Test__
```bash
# Install nodejs v10
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install nodejs -y

# Download hasher-beamhash
git clone https://github.com/MintPond/hasher-beamhash

# build
cd hasher-beamhash
npm install

# test
npm test
``` 

## Usage ##
__Verify BeamHashII__
```javascript
const beamhash = require('@mintpond/hasher-beamhash');

/**
 * Verify a BeamHashII solution.
 *
 * @param inputBuf {Buffer}
 * @param nonceBuf {Buffer}
 * @param solutionBuf {Buffer}
 * @returns {boolean} True if valid, otherwise false.
 */
const isValid = beamhash.verify2(inputBuf, nonceBuf, solutionBuf);

if (isValid) {
    console.log('Valid solution');
}
else {
    console.log('Invalid solution');
}
```

__Verify BeamHashIII__
```javascript
const beamhash = require('@mintpond/hasher-beamhash');

/**
 * Verify a BeamHashIII solution.
 *
 * @param inputBuf {Buffer}
 * @param nonceBuf {Buffer}
 * @param solutionBuf {Buffer}
 * @returns {boolean} True if valid, otherwise false.
 */
const isValid = beamhash.verify3(inputBuf, nonceBuf, solutionBuf);

if (isValid) {
    console.log('Valid solution');
}
else {
    console.log('Invalid solution');
}
```

## Dependencies ##
In Ubuntu:
```
   sudo apt-get install build-essential
   sudo apt-get install libboost-dev
```