#include <node.h>
#include <node_buffer.h>
#include <v8.h>
#include <stdint.h>
#include <iostream>
#include "nan.h"
#include "src/equihashR.h"
#include "src/beamHashIII.h"

using namespace node;
using namespace v8;

#define THROW_ERROR_EXCEPTION(x) Nan::ThrowError(x)

static BeamHash_III BeamHashIII;


bool verifyPoWScheme(PoWScheme &scheme, const char *input_ptr, const char *nonce64_ptr, Local <Object> solution) {

    const char *solution_ptr = (char *) Buffer::Data(solution);

    blake2b_state state;
    scheme.InitialiseState(state);
    blake2b_update(&state, (const unsigned char *) input_ptr, 32);
    blake2b_update(&state, (const unsigned char *) nonce64_ptr, 8);

    std::vector<unsigned char> solution_vec(solution_ptr, solution_ptr + node::Buffer::Length(solution));

    return scheme.IsValidSolution(state, solution_vec);
}


NAN_METHOD(verify1) {

        if (info.Length() < 3) {
            return THROW_ERROR_EXCEPTION("hasher-beamhash.verify1 - 3 arguments expected.");
        }

        const char* input_ptr = (char*)Buffer::Data(Nan::To<v8::Object>(info[0]).ToLocalChecked());
        const char* nonce64_ptr = (char*)Buffer::Data(Nan::To<v8::Object>(info[1]).ToLocalChecked());
        Local<Object> solution = Nan::To<v8::Object>(info[2]).ToLocalChecked();

        bool isValid = verifyPoWScheme(BeamHashI, input_ptr, nonce64_ptr, solution);

        if (isValid) {
            info.GetReturnValue().Set(Nan::True());
        }
        else {
            info.GetReturnValue().Set(Nan::False());
        }
}


NAN_METHOD(verify2) {

        if (info.Length() < 3) {
            return THROW_ERROR_EXCEPTION("hasher-beamhash.verify2 - 3 arguments expected.");
        }

        const char* input_ptr = (char*)Buffer::Data(Nan::To<v8::Object>(info[0]).ToLocalChecked());
        const char* nonce64_ptr = (char*)Buffer::Data(Nan::To<v8::Object>(info[1]).ToLocalChecked());
        Local<Object> solution = Nan::To<v8::Object>(info[2]).ToLocalChecked();

        bool isValid = verifyPoWScheme(BeamHashII, input_ptr, nonce64_ptr, solution);

        if (isValid) {
            info.GetReturnValue().Set(Nan::True());
        }
        else {
            info.GetReturnValue().Set(Nan::False());
        }
}


NAN_METHOD(verify3) {

        if (info.Length() < 3) {
            return THROW_ERROR_EXCEPTION("hasher-beamhash.verify3 - 3 arguments expected.");
        }

        const char* input_ptr = (char*)Buffer::Data(Nan::To<v8::Object>(info[0]).ToLocalChecked());
        const char* nonce64_ptr = (char*)Buffer::Data(Nan::To<v8::Object>(info[1]).ToLocalChecked());
        Local<Object> solution = Nan::To<v8::Object>(info[2]).ToLocalChecked();

        bool isValid = verifyPoWScheme(BeamHashIII, input_ptr, nonce64_ptr, solution);

        if (isValid) {
            info.GetReturnValue().Set(Nan::True());
        }
        else {
            info.GetReturnValue().Set(Nan::False());
        }
}


NAN_MODULE_INIT(init) {

        Nan::Set(target, Nan::New("verify1").ToLocalChecked(),
                 Nan::GetFunction(Nan::New<FunctionTemplate>(verify1)).ToLocalChecked());

        Nan::Set(target, Nan::New("verify2").ToLocalChecked(),
                Nan::GetFunction(Nan::New<FunctionTemplate>(verify2)).ToLocalChecked());

        Nan::Set(target, Nan::New("verify3").ToLocalChecked(),
                Nan::GetFunction(Nan::New<FunctionTemplate>(verify3)).ToLocalChecked());
}


NODE_MODULE(hasherbeamhash, init)