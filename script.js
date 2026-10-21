const input = document.getElementById('input_01');
const wadah = document.getElementById('wadah_01');

// Peta warna untuk setiap huruf/tombol (bisa disesuaikan sesukamu)
const warnaList = {
    a: 'blue',
    b: 'green',
    c: 'red',
    d: 'purple',
    e: 'orange',
    f: 'brown',
    g: 'magenta',
    h: 'cyan',
    i: 'pink',
    j: 'teal',
    k: 'navy',
    l: 'olive',
    m: 'maroon',
    n: 'coral',
    o: 'gold',
    p: 'violet',
    q: 'indigo',
    r: 'crimson',
    s: 'darkgreen',
    t: 'dodgerblue',
    u: 'salmon',
    v: 'slateblue',
    w: 'tomato',
    x: 'turquois',
    y: 'mediumseagreen',
    z: 'darkorange'
};

// TEKNIK DRY: Menggunakan Event Delegation pada wadah tombol
// Alih-alih membuat addEventListener untuk 26 tombol satu per satu,
// kita cukup pasang 1 listener di parent-nya (#wadah_01).
wadah.addEventListener('click', (event) => {
    // Pastikan yang diklik benar-benar sebuah <button>
    if (event.target.tagName !== 'BUTTON') return;

    const idTombol = event.target.id;
    
    // Tombol Clear
    if (idTombol === 'clear') {
        input.value = '';
        input.style.color = 'black'; // Reset warna
        return;
    }
    
    // Tombol Spasi
    if (idTombol === 'spasi') {
        input.value += ' ';
        return;
    }

    // Tombol Huruf (A-Z)
    // Ambil teks dari tombol yang diklik
    const huruf = event.target.textContent;
    input.value += huruf;

    // Ubah warna teks input sesuai warna tombol tersebut
    // (Cari berdasarkan id tombol dalam huruf kecil)
    const warnaPilihan = warnaList[idTombol.toLowerCase()] || 'black';
    input.style.color = warnaPilihan;
});