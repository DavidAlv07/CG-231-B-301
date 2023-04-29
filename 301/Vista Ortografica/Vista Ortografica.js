        var WIDTH = window.innerWidth;
        var HEIGHT = window.innerHeight;
        
        var scene = new THREE.Scene();
        
        //CAMARA
        var camera = new THREE.OrthographicCamera( WIDTH / - 100, WIDTH / 100, HEIGHT / 100, HEIGHT / - 100, 0.1, 10 );
        camera.position.x=1;
        camera.position.y=2;
        camera.position.z =5;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(WIDTH, HEIGHT);
        renderer.setClearColor(0xDDDDDD, 1);
        document.body.appendChild(renderer.domElement);

        //EJES Y GRILLA
        var size = 150;
        var divisions = 160;
        var axesHelper = new THREE.AxesHelper(1000);
        var gridHelper = new THREE.GridHelper(size, divisions);
        scene.add(gridHelper);
        scene.add(axesHelper);

        //ORBITCONTROLS
        var controls = new THREE.OrbitControls(camera, renderer.domElement);

        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
            -1, -1, -1,
            1, -1, -1,
            1, 1, -1,
            -1, 1, -1,
            -1, -1, 1,
            1, -1, 1,
            1, 1, 1,
            -1, 1, 1,
        ]);
        const indices = new Uint32Array([
            0, 1, 2, 0, 2, 3,
            4, 5, 6, 4, 6, 7,
            0, 4, 5, 0, 5, 1,
            1, 5, 6, 1, 6, 2,
            2, 6, 7, 2, 7, 3,
            3, 7, 4, 3, 4, 0,
        ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geometry.setIndex(new THREE.BufferAttribute(indices, 1));

        const material = new THREE.MeshBasicMaterial({ color: 0xFF8000 ,wireframe: true });
        const cubo = new THREE.Mesh(geometry, material);
        cubo.position.y=1
        scene.add(cubo);

        

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate();