import Foundation
import netfox

@objc(NetfoxIos)
class NetfoxIos: NSObject {

  @objc func initializeNetfox() {
    DispatchQueue.main.async {
      NFX.sharedInstance().start()
      NFX.sharedInstance().setGesture(NFX.ENFXGesture.custom)
      print("Netfox initialized automatically.")
    }
  }

  @objc(showNetfox:withRejecter:)
  func showNetfox(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
    if Thread.isMainThread {
      NFX.sharedInstance().show()
      resolve("Netfox interface is shown.")
    } else {
      DispatchQueue.main.async {
        NFX.sharedInstance().show()
        resolve("Netfox interface is shown.")
      }
    }
  }
}
