Development Notes
=======================

Copying plugin structure from:
https://git-wip-us.apache.org/repos/asf?p=cordova-plugin-network-information.git;a=tree

Plugin Development Guide:
http://docs.phonegap.com/en/3.0.0/guide_hybrid_plugins_index.md.html#Plugin%20Development%20Guide

Plugin Specifiations:
http://docs.phonegap.com/en/3.0.0/plugin_ref_spec.md.html#Plugin%20Specification

SlidePay Developer Portal:
https://getcube.atlassian.net/wiki/display/CDP/SlidePay+Developer+Portal

Setup Example App
----------------------------

```
mkdir -p /D/Mobile/
cd /D/Mobile
phonegap create example-slidepay com.example.slidepay SlidepayExample
cd example-slidepay
phonegap -V build ios
```


Notes:
----------------------------

Good questions! I think you'll have an easier time getting the iOS library to work with Phonegap, but that's just a guess. I've looked over the Phonegap docs, but I don't have any experience with it.

Android wise, yeah, there's no documentation outside of the comments in the source files (it's on the todo list). For normal Android projects, integrating the SDK means:

* setting up a local maven repository
* installing the library project to the repo
* including the library as a module
* telling gradle that you want to use the library from the local repo
  (all of which is must simpler than it sounds)

If Cordova/Phonegap lets you build a plugin from an .aar (like a jar, but they can include android specific code), then that's what you'll want to do. The CoreLibrary aar, which cover payments and authentication, will be found (after compiling) at
slidepay-android/CoreLibrary/build/libs/CoreLibrary-1.0.0.aar

Whereas the audio swiping library will be located at:
slidepay-android/RamblerSupport/build/libs/RamblerSupport-1.0.0.aar




iOS
--------------------


iOS Plugin Docs:
http://docs.phonegap.com/en/3.0.0/guide_platforms_ios_plugin.md.html#iOS%20Plugins

SlidePay iOS SDK:
https://github.com/SlidePay/SlidePay_iOS
https://github.com/zeroasterisk/SlidePay_iOS

```
sudo gem install cocoapods
```

cd into the target (working) directory

```
cd /D/Mobile/cordova-plugin-slidepay/src/ios
echo "platform :ios, '5.0'" > Podfile
echo "pod 'SlidePay_iOS', :git => 'https://github.com/SlidePay/SlidePay_iOS.git'" >> Podfile
pod install
```


