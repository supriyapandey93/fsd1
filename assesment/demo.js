document.getElementById('generate-bulbs').addEventListener('click', function() {
    const bulbCount = document.getElementById('bulb-number').value;
    const bulbContainer = document.getElementById('bulb-container');

    bulbContainer.innerHTML = '';

   
    for (let i = 0; i < bulbCount; i++) {
        const img = document.createElement('img');
        img.src = 'bulb_off.png'; 
        img.alt = `Bulb ${i + 1}`;
        img.id = `bulb${i + 1}`; 
        img.onclick = function() { toggleBulb(this.id); }; 
        bulbContainer.appendChild(img);
    }
});


function toggleBulb(bulbId) {
    const bulb = document.getElementById(bulbId);
    if (bulb.src.includes('bulb_off.png')) {
        bulb.src = 'bulb_on.png'; 
    } else {
        bulb.src = 'bulb_off.png'; 
}
}