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


