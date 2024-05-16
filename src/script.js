
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

function tableDetail() {
    let open = document.getElementById("open-detail");
    let close = document.getElementById("close-detail");
    let table = document.getElementById("detail-table");

    if (open) {
        open.addEventListener('click', function () {
            table.style.display = 'block';
            open.style.display = 'none';
            close.style.display = 'block';
        });
    }

    if (close) {
        close.addEventListener('click', function () {
            table.style.display = 'none';
            close.style.display = 'none';
            open.style.display = 'block';
        });
    }
}

// Call the function to set up the event listeners
tableDetail();

function tableDetail2() {
    let open2 = document.getElementById("open-detail-2");
    let close2 = document.getElementById("close-detail-2");
    let table2 = document.getElementById("detail-table-2");

    if (open2) {
        open2.addEventListener('click', function () {
            table2.style.display = 'block';
            open2.style.display = 'none';
            close2.style.display = 'block';
        });
    }

    if (close2) {
        close2.addEventListener('click', function () {
            table2.style.display = 'none';
            close2.style.display = 'none';
            open2.style.display = 'block';
        });
    }
}

// Call the function to set up the event listeners
tableDetail2();

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imagePreview = document.getElementById('image-preview');
            const imagePreviewImg = document.getElementById('image-preview-img');
            imagePreviewImg.src = e.target.result;
            imagePreview.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
}