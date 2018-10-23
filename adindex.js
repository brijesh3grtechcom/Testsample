/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliancezczxc
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var _admob;
var _admobid;
var _opt;
var _interstitialReady;
var _bannerReady;
var _rewardVideoReady;
var _mobpub;
var _mopubmobid;
var _mopubinterstitialReady;
var _mopubbannerReady;
var AdColony;
var adsId;
var Vungle;
var VungleAdsId;
var chartboost;
var chartboostadsId;
var unityads;
var unityadsId;
var myMedia;// play audio file in Android and IOS
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
       // app.ajaxApiCall();
     //   app.playMedia();
        app.initAdMob();
      //  app.initMopub();
        app.initAdColonyAds();
     //   app.initVungleAds();
       // app.initChartBoostAds();
     //   app.initUnityAds();
    },
    ajaxApiCall: function () {
        $(document).ready(function () {
            jQuery.ajax({
                type: "GET",
                url: "https://jsonplaceholder.typicode.com/posts/1",
                cache: false,
                datatype: "Script",
                crossdomain: true,
                success: function (msg) {
                   // jQuery('head').append('<Script type="text/javascript">' + msg + '<\/script>');
                    alert("Ajax API Response"+"\n"+JSON.stringify(msg));
                },
                error: function (a, b, c) {
                    alert("a " + JSON.stringify(a)); alert(b); alert(b);
                }
            });
        });
    },
    playMedia: function () {
        myMedia = new Media("/android_asset/www/mediafiles/airtel.mp3", app.onSuccess(), app.onError(), app.onStatus());
        myMedia.play();
    }
    ,
    // onSuccess Callback
    onSuccess: function () {
    },
    // onError Callback 
    onError: function (error) {
    },
    // onStatus Callback 
    onStatus: function (status) {
        if (status == Media.MEDIA_STOPPED) {
            myMedia.play();
        }
    },
    initAdMob: function () {
        console.log("AdMob init");
        _admob = window.AdMob;
        if (_admob) {
            // Register AdMob events
            // new events, with variable to differentiate: adNetwork, adType, adEvent
            document.addEventListener('onAdFailLoad', function (data) {
                console.log('error: ' + data.error +
                    ', reason: ' + data.reason +
                    ', adNetwork:' + data.adNetwork +
                    ', adType:' + data.adType +
                    ', adEvent:' + data.adEvent); // adType: 'banner' or 'interstitial'
            });
            _opt = {
                position: _admob.AD_POSITION.BOTTOM_CENTER,
                bgColor: 'black', // color name, or '#RRGGBB'
                isTesting: true, // set to true, to receiving test ad for testing purpose
            };
            _admobid = {};
            if (navigator.userAgent.match(/Android/i)) {
                _admobid = { // for Android
                    banner: 'ca-app-pub-6929006754332408/6564390033',
                    interstitial: 'ca-app-pub-6929006754332408/3116099611'
                };
            }
            else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
                _admobid = { // for iOS
                    banner: 'ca-app-pub-6929006754332408/4169843751',
                    interstitial: 'ca-app-pub-6929006754332408/8057117875'
                };
            }
            _admob.setOptions(_opt);
            this.prepareAdMobInterstitial(false);
            this.prepareAdMobBanner(false);
        } else {
            console.log("No AdMob?");
        }
    },
    prepareAdMobBanner: function (bShow) {
        if (!_admob) return false;
        _admob.createBanner({
            adId: _admobid.banner,
            position: _admob.AD_POSITION.BOTTOM_CENTER,
            autoShow: bShow,
            //adSize:'SMART_BANNER',
            success: function () {
                _bannerReady = true;
                console.log('banner ready');
            },
            error: function () {
                console.log('failed to create banner');
            }
        })
        return true;
    },
    showAdMobBanner: function () {
        if (!_bannerReady) {
            alert('banner not ready');
            return this.prepareAdMobBanner(true);
        }

       // if (position == undefined) position = _admob.AD_POSITION.BOTTOM_CENTER;
            alert('banner ready');

        _admob.showBanner(_admob.AD_POSITION.TOP_CENTER);

        return true;
    },
    prepareAdMobInterstitial: function (bShow) {
        if (!_admob) return false;
        _admob.prepareInterstitial({
            adId: _admobid.interstitial,
            autoShow: bShow,
            success: function () {
                _interstitialReady = true;
                console.log('interstitial prepared');
            },
            error: function () {
                console.log('failed to prepare interstitial');
            }
        })

        return true;
    },
    showAdMobInterstitial: function () {
        if (!_interstitialReady) {
            console.log('interstitial not ready');
            return this.prepareAdMobInterstitial(true);
        }

        _admob.showInterstitial();

        return true;
    },
    removeAdMobAds: function () {
        if (!_admob) return;
        _admob.removeBanner();
        _bannerReady = false;
    }
    ,
    initMopub: function () {
        console.log("MoPub init");
        _mobpub = window.MoPub;
        if (_mobpub) {
            // Register AdMob events
            // new events, with variable to differentiate: adNetwork, adType, adEvent
            document.addEventListener('onAdFailLoad', function (data) {
                console.log('error: ' + data.error +
                    ', reason: ' + data.reason +
                    ', adNetwork:' + data.adNetwork +
                    ', adType:' + data.adType +
                    ', adEvent:' + data.adEvent); // adType: 'banner' or 'interstitial'
            });
            _opt = {
                adSize: 'SMART_BANNER',
                position: _mobpub.AD_POSITION.BOTTOM_CENTER,
                bgColor: 'black', // color name, or '#RRGGBB'
                isTesting: true, // set to true, to receiving test ad for testing purpose
            };
            _mopubmobid = {};
            if (navigator.userAgent.match(/Android/i)) {
                _mopubmobid = { // for Android
                    banner: "4c61f06cb0364946bd7aa341a0a247d8",
                    interstitial: "ad2cdcc33fa44c4784776eac915c5d79"
                };
            }
            else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
                _mopubmobid = { // for iOS
                    banner: "fd76fc25ebdf4471be1ad7f19ea15af8",
                    interstitial: "d01503c36e3f4d34b77e349266a5181f"
                };
            }
            _mobpub.setOptions(_opt);
            this.prepareMoPubInterstitial(false);
            this.prepareMoPubBanner(false);
        } else {
            console.log("No MobPub?");
        }
    },
    prepareMoPubBanner: function (bShow) {
        if (!_mobpub) return false;
        _mobpub.createBanner({
            adId: _mopubmobid.banner,
            position: _mobpub.AD_POSITION.BOTTOM_CENTER,
            autoShow: bShow,
            success: function () {
                _mopubbannerReady = true;
                console.log('MoPub banner ready');
            },
            error: function () {
                console.log('failed to create MoPub banner');
            }
        })
        return true;
    },
    showMoPubBanner: function () {
        if (!_mopubbannerReady) {
            console.log('MoPub banner not ready');
            return this.prepareMoPubBanner(true);
        }
        if (position == undefined) position = _mobpub.AD_POSITION.BOTTOM_CENTER;
        _mobpub.showBanner(position);
        return true;
    },
    prepareMoPubInterstitial: function (bShow) {
        if (!_mobpub) return false;
        _mobpub.prepareInterstitial({
            adId: _mopubmobid.interstitial,
            autoShow: bShow,
            success: function () {
                _mopubbannerReady = true;
                console.log('MoPub interstitial prepared');
            },
            error: function () {
                console.log('failed to prepare MoPub  interstitial');
            }
        })
        return true;
    },
    showMoPubInterstitial: function () {
        if (!_mopubbannerReady) {
            console.log('MoPub interstitial not ready');
            return this.prepareMoPubInterstitial(true);
        }
        _mobpub.showInterstitial();
        return true;
    },
    removeMoPubAds: function () {
        if (!_mobpub) return;
        _mobpub.removeBanner();
        _mopubbannerReady = false;
    },
    initAdColonyAds: function () {
        console.log("AdColony init");
        AdColony = window.adcolony;
        if (navigator.userAgent.match(/Android/i)) {
            adsId = { // for Android
                appId: "app65e7e8bf932040aaba",
                interstitialAdZoneId: "vza516dd30c23b422190",
                rewardedVideoAdZoneId: "vza40213c38a0f491aaf"
            };
        }
        else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
            adsId = { // for iOS
                appId: "appffc269588fd448ea86",
                interstitialAdZoneId: "vzae37a1704e1b4408b9",
                rewardedVideoAdZoneId: "vzae37a1704e1b4408b9"
            };
        }
        if (AdColony) {
            AdColony.setUp(adsId.appId, adsId.interstitialAdZoneId, adsId.rewardedVideoAdZoneId);
            console.log("AdsColony Setup");
            AdColony.loadedInterstitialAd({
                success: function () {
                    console.log('AdsColony interstitial prepared');
                }, error: function () {
                    console.log('AdsColony interstitial not prepared');
                }
            })

            AdColony.loadedRewardedVideoAd({
                success: function () {
                    console.log('AdsColony Reward Video prepared');
                }, error: function () {
                    console.log('AdsColony Reward Video not prepared');
                }
            })
        } else {
            console.log("No AdColonyAds?");
        }
    },
    showAdColonyInterstitialAd: function () {
        AdColony.showInterstitialAd();
    }
    ,
    showAdColonyRewardedVideoAd: function () {
        AdColony.showRewardedVideoAd();
    },
    initVungleAds: function () {
        console.log("Vungle init");
        if (navigator.userAgent.match(/Android/i)) {
            VungleAdsId = { // for Android
                appId: "5a7f045077f44ab13e00222c"
            };
        }
        else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
            VungleAdsId = { // for iOS
                appId: "5a78b908fd86ee847e009fa7"
            };
        }
        Vungle = window.vungle;
        if (Vungle) {
            Vungle.setUp(VungleAdsId.appId);
            Vungle.isShowingRewardedVideoAd();
            Vungle.loadedRewardedVideoAd(true);
            console.log("Vungle Setup");
        } else {
            console.log("No Vungle?");
        }
    },
    showVungleRewardedVideoAd: function () {
        Vungle.loadedRewardedVideoAd(true);
        Vungle.showRewardedVideoAd();
    },
    initChartBoostAds: function () {
        console.log("Chartboost init");
        if (navigator.userAgent.match(/Android/i)) {
            chartboostadsId = { // for Android
                appId: "5a7d3fe4837d764cadf3597c",
                appSignature: "c3c9cd28b375852a158b6a4949b2eb4bbddab569"
            };
        }
        else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
            chartboostadsId = { // for iOS
                appId: "5a7d3fe4837d764cadf3597c",
                appSignature: "c3c9cd28b375852a158b6a4949b2eb4bbddab569"
            };
        }
        chartboost = window.chartboost;
        if (chartboost) {
            chartboost.setUp(chartboostadsId.appId);
            chartboost.preloadInterstitialAd('Default');
            chartboost.preloadRewardedVideoAd('Default');
            console.log("chartboost Setup");
        } else {
            console.log("No chartboost?");
        }
    },
    showChartBoostInterstitialAd: function () {
        chartboost.showInterstitialAd('Default');
    },
    showChartBoostRewardedVideoAd: function () {
        chartboost.showRewardedVideoAd('Default');
    },
    initUnityAds: function () {
        console.log("Unity init");
        if (navigator.userAgent.match(/Android/i)) {
            unityadsId = { // for Android
                gameId: "1694297",
                videoAdPlacementId: "video",
                rewardedVideoAdPlacementId: "rewardedVideo",
                isTest: true
            };
        }
        else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
            unityadsId = { // for iOS
                gameId: "1694298",
                videoAdPlacementId: "rewardedVideo",
                rewardedVideoAdPlacementId: "rewardedVideo",
                isTest: true
            };
        }
        unityads = window.unityads;
        if (unityads) {
            unityads.setUp(unityadsId.gameId, unityadsId.videoAdPlacementId, unityadsId.rewardedVideoAdPlacementId, unityadsId.isTest);
            unityads.loadedVideoAd();
            unityads.loadedRewardedVideoAd();
            console.log("Unity Setup");
        } else {
            console.log("No UnityAd?");
        }
    },
    showUnityVideoAd: function () {
        unityads.showVideoAd();
    },
    showUnityRewardedVideoAd: function () {
        unityads.showRewardedVideoAd();
    }
};
