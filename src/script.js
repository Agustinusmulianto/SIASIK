
function changeColor(selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectElementClassList = selectElement.classList;

    // Remove background color classes
    selectElementClassList.remove('bg-green-500');
    selectElementClassList.remove('bg-red-500');

    // Add background color class based on selected option
    if (selectedOption.id === 'hadir') {
        selectElementClassList.add('bg-green-500');
    } else if (selectedOption.id === 'tidak-hadir') {
        selectElementClassList.add('bg-red-500');
    }
}

function validateForm() {
    let mapel = document.getElementById('mapel').value;
    let kelas = document.getElementById('kelas').value;
    let notFound = document.getElementById("notFound");
    let hasil = document.getElementById("hasil");

    if (mapel == null || mapel === 'Mata Pelajaran' || kelas == null || kelas === 'Kelas') {
        alert('Silakan pilih mata pelajaran dan kelas terlebih dahulu.');
        return false;
    } else {
        notFound.style.display = "none";
        hasil.style.display = "block";
    }
    return true;
}
function validateFormAkademik() {
    let kelas = document.getElementById('kelas').value;
    let nilaiNull = document.getElementById("nilaiNull");
    let hasilNilai = document.getElementById("hasilNilai");

    if (kelas == null || kelas === 'Kelas') {
        alert('Silakan pilih kelas terlebih dahulu.');
        return false;
    } else {
        nilaiNull.style.display = "none";
        hasilNilai.style.display = "block";
    }
    return true;
}