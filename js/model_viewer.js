$( document ).ready(function() {

    if (!Detector.webgl) {
        Detector.addGetWebGLMessage();
    }

    var container;
    var camera, controls, scene, renderer;
    var lighting, ambient, keyLight, fillLight, backLight;

    init();
    animate();

    function init() {
        container = document.getElementById('model-viewer');
        console.log(document);

        /* Camera */
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 3;

        /* Scene */
        scene = new THREE.Scene();
        lighting = false;
        ambient = new THREE.AmbientLight(0xffffff, 1.0);
        scene.add(ambient);

        /* Model */
        // var mtlLoader = new THREE.MTLLoader();
        // mtlLoader.setBaseUrl('../model/');
        // mtlLoader.setPath('../model/');
        // mtlLoader.load('stand_ball.mtl', function (materials) {
        //     materials.preload();

        //     var objLoader = new THREE.OBJLoader();
        //     objLoader.setMaterials(materials);
        //     objLoader.setPath('../model/');
        //     objLoader.load('stand_ball.obj', function (object) {
        //         scene.add(object);
        //     });
        // });

        var objLoader = new THREE.OBJLoader();
            objLoader.setPath('../model/');
            objLoader.load('stand_ball.obj', function (object) {
                scene.add(object);
        });

        /* Renderer */
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
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
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }


    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        render();
    }

    function render() {
        renderer.render(scene, camera);
    }

});
