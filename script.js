document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Mencegah form submit default

    // Ambil data dari input form
    const data = {
        nama: document.getElementById('nama').value,
        ttl: document.getElementById('ttl').value,
        sekolah_asal: document.getElementById('sekolah_asal').value,
        nis: document.getElementById('nis').value,
        no_telp: document.getElementById('no_telp').value,
    };

    console.log('Data yang dikirim:', data); // Debugging untuk memeriksa data

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycby6e1Rne7J4B4hTZoyK9m6EMFvxi0baU2QGPjE0qnQYZvrAtY7ii4gcChbXtUIKBs_ipQ/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log('Response dari server:', result);

        if (result.success) {
            alert('Pendaftaran berhasil!');
        } else {
            alert(`Gagal: ${result.message}`);
        }
    } catch (error) {
        console.error('Terjadi kesalahan saat mengirim data:', error);
        alert('Terjadi kesalahan saat mengirim pendaftaran. Silakan coba lagi.');
    }



    
});















