
console.log('help');

// camera scena renderer
const scene = new THREE.Scene(); //добавим сцену
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight); //добавим камеру
const renderer = new THREE.WebGLRenderer(); // добавим рендер(вывод)
//
// scene.background = new THREE.Color(0x000000); // созд цвет сцене
var texture = new THREE.TextureLoader().load(
    "https://img.freepik.com/free-photo/empty-room-interior-white-background-3d-render-illustration_43963-81.jpg?size=626&ext=jpg"
  );
 scene.background = texture;
renderer.setSize(window.innerWidth, window.innerHeight); // созд размер рендера 
document.body.appendChild(renderer.domElement); // в боди вставляем наш рендер
camera.position.z = 5; // ставим камеру
// const points = [                  //созд масив точек для рисования линии
//     new THREE.Vector2(0, 0), //начало линии которую рисуем вектором по точкам координат
//     new THREE.Vector2(1, 1) // конец линии по координатам
// ]

// const material = new THREE.LineBasicMaterial({color: 0xffffff}); // созд материл, а конкретно цвет
// const geometryLine = new THREE.BufferGeometry().setFromPoints(points); //геометрия для линии
// const line = new THREE.Line(geometryLine, material); // созд линию с нашей геометрией и материалом
// scene.add(line); // добавляем на сцену нашу геометрию линию из точек

// созд куб
const loader = new THREE.TextureLoader();
//материал для куба в виде картинок

const materialImg = [
    new THREE.MeshBasicMaterial({map: loader.load('https://kaleriiaoh.github.io/myanim3d/img/1.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('https://kaleriiaoh.github.io/myanim3d/img/2.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('https://kaleriiaoh.github.io/myanim3d/img/3.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('https://kaleriiaoh.github.io/myanim3d/img/4.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('https://kaleriiaoh.github.io/myanim3d/img/5.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('https://kaleriiaoh.github.io/myanim3d/img/6.png')}),
];

const material1 = new THREE.MeshBasicMaterial({color: 0xdddddd});
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(cubeGeometry, materialImg);
scene.add(cube); 
// конец для куба

//созд еще одного куба
const materialCube2 = new THREE.MeshBasicMaterial({
    map: loader.load('https://kaleriiaoh.github.io/myanim3d/img/2.png'),
});

const geometryCube2 = new THREE.BoxGeometry(1, 1, 1);
const cube2 = new THREE.Mesh(geometryCube2, materialCube2);

scene.add(cube2);

//созд еще одного куба
const materialCube3 = new THREE.MeshBasicMaterial({
    map: loader.load('https://kaleriiaoh.github.io/myanim3d/img/3.png'),
});

const geometryCube3 = new THREE.BoxGeometry(1, 1, 1);
const cube3 = new THREE.Mesh(geometryCube3, materialCube3);

scene.add(cube3);

//созд еще одного куба
const materialCube4 = new THREE.MeshBasicMaterial({
    map: loader.load('https://kaleriiaoh.github.io/myanim3d/img/4.png'),
});

const geometryCube4 = new THREE.BoxGeometry(1, 1, 1);
const cube4 = new THREE.Mesh(geometryCube4, materialCube4);

scene.add(cube4);

//созд еще одного куба
const materialCube5 = new THREE.MeshBasicMaterial({
    map: loader.load('https://kaleriiaoh.github.io/myanim3d/img/5.png'),
});

const geometryCube5 = new THREE.BoxGeometry(1, 1, 1);
const cube5 = new THREE.Mesh(geometryCube5, materialCube5);

scene.add(cube5);

// добавление 

// const geometryС = new THREE.SphereGeometry( 15, 32, 16 );
// const materialС = new THREE.MeshBasicMaterial({
//     map: loader.load('https://kaleriiaoh.github.io/myanim3d/img/6.png'),
// });
// const sphereС = new THREE.Mesh( geometryС, materialС );
// scene.add( sphereС );

// // добавление 

// const geometryС1 = new THREE.SphereGeometry( 15, 32, 16 );
// const materialС1 = new THREE.MeshBasicMaterial({
//     map: loader.load('https://kaleriiaoh.github.io/myanim3d/img/1.png'),
// });
// const sphereС1 = new THREE.Mesh( geometryС1, materialС1 );
// scene.add( sphereС1 );


// const geometryT = new THREE.TorusGeometry( 3, 1, 5, 30 );
// const materialT = new THREE.MeshBasicMaterial({
//     map: loader.load('https://kaleriiaoh.github.io/myanim3d/img/5.png'),
// });
// const torusS = new THREE.Mesh( geometryT, materialT);
// scene.add( torusS );



function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    cube.rotation.x += 0.01; //вращение  куба по оси х со скоростью 
    cube.rotation.y +=0.01; // -//- по оси у


    cube2.rotation.x += 0.05;
    cube2.position.x = -2;

    cube3.rotation.x += 0.05;
    cube3.position.x = 2;

    cube4.rotation.x += 0.05;
    cube4.position.y = 2;

    cube5.rotation.x += 0.05;
    cube5.position.y = -2;

    cube6.rotation.z += 0.05;
    cube6.position.y = 20;
    cube6.position.x = 20;


    sphereС.rotation.y += 0.05;
    sphereС.position.y = -20;
    sphereС.position.x = 0;

    sphereС1.rotation.x += 0.05;
    sphereС1.position.y = 30;
    sphereС1.position.x = -20;
    sphereС1.position.z = -20;

    // torusS.position.x = -40;
    // torusS.rotation.x +=0.05;
    // torusS.rotation.y +=0.05;
   
}

animate();



// document.addEventListener('click', function rendPos() {
//     camera.position.z = 5;
// });




// setInterval(function() {
//   func(i);
// }, 100);