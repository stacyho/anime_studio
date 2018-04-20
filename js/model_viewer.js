$( document ).ready(function() {

    if (!Detector.webgl) {
        Detector.addGetWebGLMessage();
    }

    var container;
    var camera, controls, scene, renderer;
    var ambient;

    init();
    render();

    function init() {
        container = document.getElementById('model-viewer');

        /* Camera */
        camera = new THREE.PerspectiveCamera(130, container.offsetWidth / container.offsetHeight, 1, 1000);
        camera.position.z = 3;

        /* Scene */
        scene = new THREE.Scene();
        ambient = new THREE.AmbientLight(0xffffff, 1.0);
        scene.add(ambient);

        /* Renderer */
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.setClearColor(new THREE.Color("hsl(0, 0%, 10%)"));
        container.appendChild(renderer.domElement);

        /* Controls */
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = false;

        /* Events */
        window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    }

    function render() {
        requestAnimationFrame(render);
        controls.update();
        renderer.render(scene, camera);
    }

    function loadModel(modelName) {
        var rootpath = "../";
        //var rootpath = "http://localhost:8081/";

        var materialFile = modelName + '.mtl';
        var objectFile = modelName + '.obj';

        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.crossOrigin = '';
        mtlLoader.setBaseUrl(rootpath + 'model/');
        mtlLoader.setPath(rootpath + 'model/');
        mtlLoader.load(materialFile, function (materials) {
            materials.preload();

            var objLoader = new THREE.OBJLoader();
            objLoader.crossOrigin = '';
            objLoader.setMaterials(materials);
            objLoader.setPath(rootpath + 'model/');
            objLoader.load(objectFile, function (object) {
                scene.add(object);
            });
        });
    }

    function zoomIn() {
        camera.fov = Math.max(50, camera.fov - 10);
        camera.updateProjectionMatrix();
    }

    function zoomOut() {
        camera.fov = Math.min(160, camera.fov + 10);
        camera.updateProjectionMatrix();
    }

    function startRotate() {
        controls.autoRotate = true;
        controls.update();
    }

    function stopRotate() {
        controls.autoRotate = false;
        controls.update();
    }

    $("#show-model-button").click(function(e) {
        // currModelName defined in main.js
        if (!currModelName) {
            e.stopPropagation();
            return;
        }

        $("#loading-icon").show();
        setTimeout(function() {
            $("#loading-icon").hide();
        }, 700);

        setTimeout(function() {
            loadModel(currModelName);
        }, 500);
    });

    $("#zoom-in-button").click(function() {
        zoomIn();
    });

    $("#zoom-out-button").click(function() {
        zoomOut();
    });

    $("#rotate-button").click(function() {
        if (controls.autoRotate) {
            stopRotate();
            $("#rotate-icon").addClass("fa-play-circle");
            $("#rotate-icon").removeClass("fa-pause-circle");
        } else {
            startRotate();
            $("#rotate-icon").addClass("fa-pause-circle");
            $("#rotate-icon").removeClass("fa-play-circle");
        }
    });

});
