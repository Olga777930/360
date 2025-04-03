var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.6859939647397326
      },
      "linkHotspots": [
        {
          "yaw": 0.020666697899997644,
          "pitch": 0,
          "rotation": 0,
          "target": "1-2"
        },
        {
          "yaw": 0.5607694934869301,
          "pitch": -0.0732028591124525,
          "rotation": 0,
          "target": "2-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.6859939647397326
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "0-1"
        },
        {
          "yaw": 0.46330117450490427,
          "pitch": 0.011760075244213297,
          "rotation": 0,
          "target": "2-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3",
      "name": "3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.6859939647397326
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "0-1"
        },
        {
          "yaw": 0.4285281897565767,
          "pitch": -0.002989431209950766,
          "rotation": 0,
          "target": "1-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
