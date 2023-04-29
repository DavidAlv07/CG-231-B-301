        var WIDTH = window.innerWidth;
        var HEIGHT = window.innerHeight;
        
        var scene = new THREE.Scene();
       
        //camara en vista perspectiva
        var camera = new THREE.PerspectiveCamera(100,WIDTH / HEIGHT,0.1,1000);
        camera.position.x=1;
        camera.position.y=2;
        camera.position.z =5;
        

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(WIDTH, HEIGHT);
        renderer.setClearColor(0xDDDDDD, 1);
        document.body.appendChild(renderer.domElement);


        //EJES y GRILLA
        var size = 150;
        var divisions = 160;
        var axesHelper = new THREE.AxesHelper(1000);
        var gridHelper = new THREE.GridHelper(size, divisions);
        scene.add(gridHelper);
        scene.add(axesHelper);

        var controls = new THREE.OrbitControls(camera, renderer.domElement);//ORBITCONTROLS


        //CREACION DEL CUBO 

        var geometria = new THREE.BufferGeometry();
        var vertices = new Float32Array([ //VERTICES
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
        
        geometria.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geometria.setIndex(new THREE.BufferAttribute(indices, 1));

        var material = new THREE.MeshBasicMaterial({ color: 0xFF8000 ,wireframe: true });
        var cubo = new THREE.Mesh(geometria, material);
        cubo.position.y=1
        scene.add(cubo);


        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate();