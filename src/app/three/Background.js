const THREE = require('three');

export default class Background {
    constructor() {
        this.el = {
            scene: new THREE.Scene(),
            camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
            renderer: new THREE.WebGLRenderer()
        };
        this.els = {
            geometry: new THREE.BoxGeometry(1, 1, 1),
            material: new THREE.MeshBasicMaterial({color: 0x00ff00})
        };
    }

    setDomElement(el) {
        this.dom = el;
    }

    /**
     * Once the Start react element is mounted to the dom
     * Render the Scene
     */
    launch() {
        // get the size of the window
        this.el.renderer.setSize(window.innerWidth, window.innerHeight);
        // get this dom element
        this.dom.appendChild(this.el.renderer.domElement);

        this.cube = new THREE.Mesh(this.els.geometry, this.els.material);
        this.el.scene.add(this.cube);

        this.light = new THREE.AmbientLight(0x404040); // soft white light
        this.el.scene.add(this.light);

        this.el.camera.position.z = 5;
        // this.render();
    }

    render() {
        requestAnimationFrame(()=>this.render());
        this.el.renderer.render(this.el.scene, this.el.camera);
        this.cube.rotation.y += 0.04;
    }
}