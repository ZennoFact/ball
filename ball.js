var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
geometry.position = [10, 10, 0];
var material = new THREE.MeshLambertMaterial( { color: 0x33bfdb } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// var sGeoetry = new THREE.SphereGeometry(1, 32, 32);
// var sMaterial = new THREE.MeshLambertMaterial( {color: 0Xffff00});
// var sphere = new THREE.Mesh(sGeoetry, sMaterial);
// scene.add( sphere );
var spheres = [];
for( var i = 0; i < 50; i++ ) {
  var geometry = new THREE.SphereGeometry(5);
  var material = new THREE.MeshLambertMaterial( { color: 0x33bfdb } )
  var mesh = new THREE.Mesh( geometry, material );
  mesh.position.set( Math.random()*250-125, Math.random()*500-250, Math.random()*250-125 );
  spheres.push( mesh );
	scene.add( mesh );
}
// spheres.forEach(elem => {
// 	scene.add(elem);
// });

camera.position.z = 5;


var directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
directionalLight.position.set( 1, 1, 1 );
scene.add( directionalLight );

var light = new THREE.AmbientLight(0xeeeeee);
scene.add( light );

var render = function () {
	requestAnimationFrame( render );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	spheres.forEach(elem => {
		elem.rotation.x += 0.05;

	});

	renderer.render(scene, camera);
};

render();
