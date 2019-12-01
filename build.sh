#! /bin/bash

npm run build
cordova platforms rm android
cordova platforms add android
cordova build android
