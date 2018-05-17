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
        ambient = new THREE.AmbientLight(0xffffff, 1.5);
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
        controls.keyPanSpeed = 20.0;

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
        var existingObject = scene.getObjectByName("object");
        if (existingObject) {
            scene.remove(existingObject); 
        }
        var rootpath = "http://localhost:8080/";

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
                object.name = "object";
                scene.add(object);
            });
        });

        onWindowResize();
    }

    function zoomIn() {
        camera.fov = Math.max(30, camera.fov - 10);
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

    function brighter() {
        ambient.intensity = Math.min(2.5, ambient.intensity + .25);
    }

    function darker() {
        ambient.intensity = Math.max(.5, ambient.intensity - .25);
    }

    $("#brighter-button").click(function() {
        brighter();
    });

    $("#darker-button").click(function() {
        darker();
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

    $("#show-model-button").click(function(e) {
        $('#studio-container').show();
        $('#model-box').show();

        $('#anime-container').animate({width: '70%'});
        $('#studio-container').animate({width: '30%'});

        $("#loading-icon").show();
        setTimeout(function() {
            $("#loading-icon").hide();
        }, 1000);

        setTimeout(function() {
            loadModel(currModelName);
        }, 500);
    });


    $("#close-model-button").click(function(e) {
        $('#anime-container').animate({width: '100%'});
        $('#studio-container').animate({width: '0%'});

        $('#studio-container').hide();
        $('#model-box').hide();
    });

});
