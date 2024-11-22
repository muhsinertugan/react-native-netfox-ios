package com.netfoxios

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import android.util.Log

class NetfoxIosModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  // Initialize method
  @ReactMethod
  fun initializeNetfox(promise: Promise) {
      Log.w(NAME, "Warning: NetfoxIos is only available on iOS. initializeNetfox was called on a non-iOS platform.")
      promise.reject("PLATFORM_NOT_SUPPORTED", "NetfoxIos is only available on iOS.")
  }

  // Show method
  @ReactMethod
  fun showNetfox(promise: Promise) {
      Log.w(NAME, "Warning: NetfoxIos is only available on iOS. showNetfox was called on a non-iOS platform.")
      promise.reject("PLATFORM_NOT_SUPPORTED", "NetfoxIos is only available on iOS.")
  }

  companion object {
    const val NAME = "NetfoxIosModule"
  }
}
