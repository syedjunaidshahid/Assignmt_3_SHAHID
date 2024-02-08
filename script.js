require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/widgets/Home",
  "dojo/domReady!"
], function(WebScene, SceneView, Camera, Home) {
  var scene = new WebScene({
    portalItem: {
      id: "8046207c1c214b5587230f5e5f8efc77"
    }
  });

  var camera2 = new Camera({
    position: {
      x: -71.042056,
      y: 42.346603,
      z: 2500
    },
    tilt: 0,
    heading: 0
  });

  var camera = new Camera({
    position: {
      x: -71.0609248,
      y: 42.3642097,
      z: 2500
    },
    tilt: 0,
    heading: 0
  });

  var downtownCamera = new Camera({
    position: {
      x: -71.042680,
      y: 42.358104,
      z: 3500
    },
    tilt: 20,
    heading: 220
  });

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

  ["v1", "v2", "v3"].forEach(function(buttonId) {
    var button = document.getElementById(buttonId);
    button.style.display = 'flex';
    view.ui.add(button, 'top-right');
  });

  document.getElementById('v2').addEventListener('click', function() {
    view.goTo(camera2);
  });

  document.getElementById('v1').addEventListener('click', function() {
    view.goTo(camera);
  });

  document.getElementById('v3').addEventListener('click', function() {
    view.goTo(downtownCamera);
  });

});
