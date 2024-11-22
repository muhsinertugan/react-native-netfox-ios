#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NetfoxIos, NSObject)

RCT_EXTERN_METHOD(showNetfox:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(initializeNetfox)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
