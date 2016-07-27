
var scene;
var renderer;
var camera, directionalLight, ambientLight;
var spheres = [];
var controls;

init();
createSpheres();

// 描画の更新用処理
var render = function () {
	requestAnimationFrame( render );
	sqheres.forEach(elem => {
		elem.rotation.x += 0.01;
    elem.rotation.y += 0.01;
	});

	controls.update();
	renderer.render(scene, camera);
};

render();

// 環境の初期化
function init() {
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor(0x082e80, 1);
  document.body.appendChild( renderer.domElement );
	// renderer.shadowMap.enabled = true;

	scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 11, 1000 );
  camera.position.set(50, 0, 100);

  ambientLight = new THREE.AmbientLight(0xeeeeee, 0.5);
  scene.add( ambientLight );

  directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
  directionalLight.position.set( 0, 7, 10 );
  scene.add( directionalLight );

  // マウスでの操作を可能にする
	controls = new THREE.OrbitControls(camera);
	// controls.enableDamping = true;
	controls.dampingFactor = 0.25;
	controls.userRotateSpeed = 0.8;
	// controls.autoRotate = true;
	// controls.autoRotateSpeed = 0.1;


	// // controlsの設定
	// controls.userZoom = true;    //true:ズーム操作可能,false:ズーム操作不可
	// controls.userZoomSpeed = 1.0;   // ズーム速度
	// //②回転
	// controls.userRotate = true;    //true:回転操作可能,false:回転操作不可
	// controls.userRotateSpeed = 1.0;   //回転速度
	// //③パン
	// controls.userPan = true;     //true:パン操作可能,false:パン操作不可
	// controls.userPanSpeed = 2.0;   //パン速度
	// //④自動回転
	// controls.autoRotate = true;     //true:自動回転する,false:自動回転しない
	// controls.autoRotateSpeed = 2.0;    //自動回転する時の速度
	// //⑤
	// controls.minPolarAngle = 0;
	// controls.maxPolarAngle = Math.PI;
	// //⑥
	// controls.minDistance = 0;   //近づける距離の最小値
	// controls.maxDistance = Infinity;   //遠ざかれる距離の最大値


	window.addEventListener( 'resize', onWindowResize, false )
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



function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}
