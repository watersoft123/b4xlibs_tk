//
//  GADInterstitial.h
//  Google Mobile Ads SDK
//
//  Copyright 2011 Google Inc. All rights reserved.
//

#import <UIKit/UIKit.h>

#import "GADInAppPurchaseDelegate.h"
#import "GADInterstitialDelegate.h"
#import "GADModules.h"
#import "GADRequest.h"
#import "GADRequestError.h"

/// An interstitial ad. This is a full-screen advertisement shown at natural transition points in
/// your application such as between game levels or news stories.
///
/// Interstitials are shown sparingly. Expect low to no fill.
@interface GADInterstitial : NSObject

#pragma mark Pre-Request

/// Required value created in the AdSense website. Create a new ad unit for every unique placement
/// of an ad in your application. Set this to the ID assigned for this placement. Ad units are
/// important for targeting and stats.
/// Example values for different request types:
///   AdMob: a0123456789ABCD
///     DFP: /0123/ca-pub-0123456789012345/my-ad-identifier
/// AdSense: ca-mb-app-pub-0123456789012345/my-ad-identifier
@property(nonatomic, copy) NSString *adUnitID;

/// Optional delegate object that receives state change notifications from this GADInterstitalAd.
/// Remember to nil the delegate before deallocating this object.
@property(nonatomic, weak) id<GADInterstitialDelegate> delegate;

/// Optional delegate object that receives in-app purchase notifications from this ad. Required for
/// the custom in-app purchase flow, but ignored when using the default in-app purchase flow.
/// Remember to nil the delegate before deallocating this object.
@property(nonatomic, weak) id<GADInAppPurchaseDelegate> inAppPurchaseDelegate;

#pragma mark Making an Ad Request

/// Makes an interstitial ad request. Additional targeting options can be supplied with a request
/// object. Only one interstitial request is allowed at a time.
///
/// This is best to do several seconds before the interstitial is needed to preload its content.
/// Then when transitioning between view controllers show the interstital with
/// presentFromViewController.
- (void)loadRequest:(GADRequest *)request;

#pragma mark Post-Request

/// Returns YES if the interstitial is ready to be displayed. The delegate's
/// interstitialAdDidReceiveAd: will be called when this switches from NO to YES.
@property(nonatomic, readonly, assign) BOOL isReady;

/// Returns YES if the interstitial object has already shown an interstitial. Note that an
/// interstitial object can only be used once even with different requests.
@property(nonatomic, readonly, assign) BOOL hasBeenUsed;

/// Returns the ad network class name that fetched the current ad. Returns nil while the latest ad
/// request is in progress or if the latest ad request failed. For both standard and mediated Google
/// AdMob ads, this method returns @"GADMAdapterGoogleAdMobAds". For ads fetched via mediation
/// custom events, this method returns @"GADMAdapterCustomEvents".
@property(nonatomic, readonly, copy) NSString *adNetworkClassName;

/// Presents the interstitial ad which takes over the entire screen until the user dismisses it.
/// This has no effect unless isReady returns YES and/or the delegate's interstitialDidReceiveAd:
/// has been received.
///
/// Set rootViewController to the current view controller at the time this method is called. If your
/// application does not use view controllers pass in nil and your views will be removed from the
/// window to show the interstitial and restored when done. After the interstitial has been removed,
/// the delegate's interstitialDidDismissScreen: will be called.
- (void)presentFromRootViewController:(UIViewController *)rootViewController;

@end
