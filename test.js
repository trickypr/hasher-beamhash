const beamhash = require('./index');

verify2Valid();
verify2Invalid();
verify3Valid();
verify3Invalid();


function verify2Valid() {

    console.log('Verify valid BeamHashII');

    const inputBuf = Buffer.from('f08e259aa23e1f517393a9e8d4634f9893b4058bf474233a9102e94ffee5fbb6', 'hex');
    const nonceBuf = Buffer.from('17dfb4348b000000', 'hex');
    const outputBuf = Buffer.from('01eb634242b17097be184f8225097425449eaad1167b585a1ee2053f5ec67529c07abec863f2c10c979dc7b41b01c258f8733fdd01f78bc60a7dd08de06465cd86025c6946c6ded03300c419323f08158c872f6a9168bc1467317509929d4500807102a69c48f7f4', 'hex');

    const isValid = beamhash.verify2(inputBuf, nonceBuf, outputBuf);

    if (isValid) {
        console.log('PASS');
    }
    else {
        console.log('FAIL');
        process.exit(-1);
    }
}


function verify2Invalid() {

    console.log('Verify invalid BeamHashII');

    const inputBuf = Buffer.from('f08e259aa23e1f517393a9e8d4634f9893b4058bf474233a9102e94ffee5fbb6', 'hex');
    const nonceBuf = Buffer.from('17dfb4348b000000', 'hex');
    const outputBuf = Buffer.alloc(104, 0);

    const isValid = beamhash.verify2(inputBuf, nonceBuf, outputBuf);

    if (isValid) {
        console.log('FAIL');
        process.exit(-1);
    }
    else {
        console.log('PASS');
    }
}


function verify3Valid() {

    console.log('Verify valid BeamHashIII');

    const inputBuf = Buffer.from('fc40996a518c221384c9f2542ca811cd66c4ccddb001ef40b9f9ba059c20352e', 'hex');
    const nonceBuf = Buffer.from('b32c7d4f07a3001c', 'hex');
    const outputBuf = Buffer.from('0fc81c684be229c36b844ef8299a9744dbb8727276bff8cbd610fa7414fb6cfd67b92586f84f8bffaeeb99266994d79da3fb026a24128b84901f244b08ee6b6b954372fcb0a7d33318da6bf1854ae48f94fe8af2d3147bdc7302cc12daa1a306511122a700000000', 'hex');

    const isValid = beamhash.verify3(inputBuf, nonceBuf, outputBuf);

    if (isValid) {
        console.log('PASS');
    }
    else {
        console.log('FAIL');
        process.exit(-1);
    }
}


function verify3Invalid() {

    console.log('Verify invalid BeamHashIII');

    const inputBuf = Buffer.from('fc40996a518c221384c9f2542ca811cd66c4ccddb001ef40b9f9ba059c20352e', 'hex');
    const nonceBuf = Buffer.from('b32c7d4f07a3001c', 'hex');
    const outputBuf = Buffer.alloc(104, 0);

    const isValid = beamhash.verify3(inputBuf, nonceBuf, outputBuf);

    if (isValid) {
        console.log('FAIL');
        process.exit(-1);
    }
    else {
        console.log('PASS');
    }
}