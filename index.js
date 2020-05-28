'use strict'

const beamhash = require('bindings')('hasherbeamhash.node');

module.exports = {

    /**
     * Verify BeamHashII solution.
     *
     * @param inputBuf {Buffer}
     * @param nonceBuf {Buffer}
     * @param solutionBuf {Buffer}
     * @returns {boolean} True if valid, otherwise false.
     */
    verify2: verify2,

    /**
     * Verify BeamHashIII solution.
     *
     * @param inputBuf {Buffer}
     * @param nonceBuf {Buffer}
     * @param solutionBuf {Buffer}
     * @returns {boolean} True if valid, otherwise false.
     */
    verify3: verify3
};


function verify2(inputBuf, nonceBuf, solutionBuf) {

    _expectBuffer(inputBuf, 'inputBuf', 32);
    _expectBuffer(nonceBuf, 'nonceBuf', 8);
    _expectBuffer(solutionBuf, 'solutionBuf', 104);

    return beamhash.verify2(inputBuf, nonceBuf, solutionBuf);
}


function verify3(inputBuf, nonceBuf, solutionBuf) {

    _expectBuffer(inputBuf, 'inputBuf', 32);
    _expectBuffer(nonceBuf, 'nonceBuf', 8);
    _expectBuffer(solutionBuf, 'solutionBuf');

    return beamhash.verify3(inputBuf, nonceBuf, solutionBuf);
}


function _expectBuffer(buffer, name, size) {
    if (!Buffer.isBuffer(buffer))
        throw new Error(`"${name}" is expected to be a Buffer. Got ${(typeof buffer)} instead.`);

    if (size && buffer.length !== size)
        throw new Error(`"${name}" is expected to be exactly ${size} bytes. Got ${buffer.length} instead.`);
}