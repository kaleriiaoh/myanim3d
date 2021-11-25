
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

const points = [                  //созд масив точек для рисования линии
    new THREE.Vector2(0, 0), //начало линии которую рисуем вектором по точкам координат
    new THREE.Vector2(1, 1) // конец линии по координатам
]

const material = new THREE.LineBasicMaterial({color: 0xffffff}); // созд материл, а конкретно цвет
const geometryLine = new THREE.BufferGeometry().setFromPoints(points); //геометрия для линии
const line = new THREE.Line(geometryLine, material); // созд линию с нашей геометрией и материалом
scene.add(line); // добавляем на сцену нашу геометрию линию из точек

// созд куб
const loader = new THREE.TextureLoader();
//материал для куба в виде картинок
const cubes = []; 
const materialImg = [
    new THREE.MeshBasicMaterial({map: loader.load('http://sun9-81.userapi.com/s/v1/ig2/D3r0uxLYycMoT6LIxDkxocJXIBq6ruCHidXAKxbDT36YdCDsHcXVmvj_H5C3kNUVRar31z2ExBJhIQ2kFixET8gl.jpg?size=200x200&quality=96&crop=10,0,950,950&ava=1')}),
    new THREE.MeshBasicMaterial({map: loader.load('./img/11.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('https://threejsfundamentals.org/threejs/resources/images/flower-3.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('https://threejsfundamentals.org/threejs/resources/images/flower-4.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('https://threejsfundamentals.org/threejs/resources/images/flower-5.jpg')}),
    new THREE.MeshBasicMaterial({map: loader.load('https://threejsfundamentals.org/threejs/resources/images/flower-6.jpg')}),
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
