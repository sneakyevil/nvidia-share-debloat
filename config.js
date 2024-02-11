'use strict';
angular.module('main.config', [])
    .constant('OSC_CONFIG', {
        "userAgent": "NVIDIAOSCClient",
        "windowName": "shareclient",
        "hangouts": false,
        "nvCamera": false,
        "anselLite": false,
        "nvCameraExperimental": false,
        "mods": false,
        "osd": false,
        "perfmonOCTool": false,
        "autoUploadMs": 0,
        "jarvisEnabled": false,
        "jarvisLinkedContent": false,
        "jsEvents": {
            "server": "https://events.gfe.nvidia.com",
            "version": "v1.0",
            "schemaVersion": "2.7",
            "maxRetries": 1,
            "msBetweenRetries": 1000,
            "defaultTimeout": 30000,
            "msBetweenSendRequest": 5000,
            "maxEventsPerRequest": 0,
            "oscClientId": "11615747663535760"
        },
        "jarvis": {
            "server": "https://accounts.nvgs.nvidia.com",
            "version": "1",
            "deviceId": "oscclient",
            "clientId": "144326972728672375",
            "gfeClientId": "135333107684344109",
            "clientDescription": "OSC {VERSION}",
            "redirectUrl": "https://rds-assets.nvidia.com/main/redirect/share-redirect.html#",
            "redirectUrlJarvisOauth": "https://rds-assets.nvidia.com/main/redirect/share-redirect.html",
            "defaultTimeout": 10000,
            "defaultRetries": 1,
            "defaultTimeBetweenRetries": 500,
            "blockKeys": {
                "upload": "linkedContent"
            }
        },
        "connect": {
        },
        "gfwsl": {
            "server": "https://gfwsl.geforce.com/",
            "defaultTimeout": 10000
        }
    })
    .constant('OSC_BUILD_INFO', {
        "oscPackageVersion": "3.27.0.112",
        "branch": "rel_03_27",
        "branchType": "rel",
        "oscClientVersion": "0.0.1",
        "gitHash": "cb64d401f0",
        "buildType": "prod"
    });