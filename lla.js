function hitungDiskonRamadhan(harga) {
    let diskon = 0;
    
    if (harga > 50000) {
        diskon = 15;
    } else if (harga > 35000) {
        diskon = 10;
    } else if (harga > 20000) {
        diskon = 5;
    }
    
    let hargaSetelahDiskon = harga - (harga * diskon / 100);
    
    // Bulatkan ke satuan atas
    hargaSetelahDiskonBulat = Math.ceil(hargaSetelahDiskon);
    
    return hargaSetelahDiskonBulat;
}

// Test cases
console.log(hitungDiskonRamadhan(11898));  // Output: 11898
console.log(hitungDiskonRamadhan(23303));  // Output: 22138
console.log(hitungDiskonRamadhan(39000));  // Output: 35100
console.log(hitungDiskonRamadhan(42500));  // Output: 38250
console.log(hitungDiskonRamadhan(280324)); // Output: 238276