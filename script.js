require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/widgets/Home",
  "dojo/domReady!"
], function(WebScene, SceneView, Home) {
  
  var scene = new WebScene({
    portalItem: {
      id: "8046207c1c214b5587230f5e5f8efc77"
    }
  });
  var homeLocation = {
    latitude: 42.3770,
    longitude: -71.1167,
    z: 2500
  };

  var camera = {
    position: {
      x: -71.0609248,
      y: 42.3642097,
      z: 2500
    },
    tilt: 0,
    heading: 0
  };

  var camera2 = {
    position: {
      x: -71.042056,
      y: 42.346603,
      z: 2500
    },
    tilt: 0,
    heading: 0
  };

  var downtownCamera = {
    position: {
      x:  -71.042680,
      y: 42.358104,
      z: 3500
    },
    tilt: 20,
    heading: 220
  };

  var view = new SceneView({
    container: "viewDiv",
    map: scene,
    viewingMode: "global",
    camera: camera,
    environment: {
      lighting: {
        date: new Date(),
        directShadowsEnabled: true,
        cameraTrackingEnabled: false
      }
    }
  });

  var homeBtn = new Home({
    view: view
  });

  view.ui.add(homeBtn, "top-left");

  ["stl", "bei", "v3"].forEach(function (buttonId) {
    var button = document.getElementById(buttonId);
    button.style.display = 'flex';
    view.ui.add(button, 'top-right');
  });

  document.getElementById('bei').addEventListener('click', function () {
    view.goTo(camera2);
  });

  document.getElementById('stl').addEventListener('click', function () {
    view.goTo(camera);
  });

  document.getElementById('v3').addEventListener('click', function () {
    view.goTo(downtownCamera);
  });

});
