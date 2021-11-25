
console.log('help');

// camera scena renderer
const scene = new THREE.Scene(); //добавим сцену
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight); //добавим камеру
const renderer = new THREE.WebGLRenderer(); // добавим рендер(вывод)
//
scene.background = new THREE.Color(0x000000); // созд цвет сцене
renderer.setSize(window.innerWidth, window.innerHeight); // созд размер рендера 
document.body.appendChild(renderer.domElement); // в боди вставляем наш рендер
camera.position.z = 2; // ставим камеру

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
const cubes = []; 


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


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    cube.rotation.x += 0.01; //вращение  куба по оси х со скоростью 
    cube.rotation.y +=0.01; // -//- по оси у
}

animate();
