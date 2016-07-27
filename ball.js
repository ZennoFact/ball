
var scene;
var renderer;
var camera, directionalLight, ambientLight;
var spheres = [];

init();
createSpheres();

// 描画の更新用処理
var render = function () {
	requestAnimationFrame( render );

	spheres.forEach(elem => {
		// elem.rotation.x += 0.05;
    // elem.rotation.y += 0.05;
	});

	renderer.render(scene, camera);
};

render();

// 環境の初期化
function init() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  // camera.position.z = 5;

  ambientLight = new THREE.AmbientLight(0xeeeeee, 0.5);
  scene.add( ambientLight );

  directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
  directionalLight.position.set( 1, 1, 1 );
  scene.add( directionalLight );

}
// サンプルとして固定のボールを50個表示
function createSpheres() {
  for( var i = 0; i < 50; i++ ) {
    var geometry = new THREE.SphereGeometry(5, 32, 32);
    var material = new THREE.MeshLambertMaterial( { color: 0x33bfdb } )
    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.set( Math.random()*250-125, Math.random()*500-250, Math.random()*250-125 );
    spheres.push( mesh );
  	scene.add( mesh );
  }
}
