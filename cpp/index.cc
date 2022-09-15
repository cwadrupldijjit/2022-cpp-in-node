#include <node.h>

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void doThing(const FunctionCallbackInfo<Value>& args) {
    auto isolate{args.GetIsolate()};
    
    args.GetReturnValue()
        .Set(String::NewFromUtf8(isolate, "did the thing!").ToLocalChecked());
}

void initialize(Local<Object> exports) {
    NODE_SET_METHOD(exports, "doThing", doThing);
}

NODE_MODULE_INIT() {
    initialize(exports);
}
