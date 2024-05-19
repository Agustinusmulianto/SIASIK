function toggleDetailTable(tableId) {
    const studentDataRow = document.getElementById(tableId);
    const icon = document.getElementById(`detail${tableId.slice(-1)}`);
    if (studentDataRow.classList.contains('hidden')) {
        studentDataRow.classList.remove('hidden');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />';
    } else {
        studentDataRow.classList.add('hidden');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />';
    }
}


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
function toggleStudentData(className, tanggalId, studentDataId) {
    const tanggal = document.getElementById(tanggalId).value;
    if (!tanggal) {
        alert('Tanggal harus diisi');
        return;
    }


    const studentDataRow = document.getElementById(studentDataId);
    const icon = document.getElementById(`icon${studentDataId.slice(-1)}`);
    if (studentDataRow.classList.contains('hidden')) {
        studentDataRow.classList.remove('hidden');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />';
    } else {
        studentDataRow.classList.add('hidden');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />';
    }
}

function updateSelectColor(select) {
    if (select.value === 'hadir') {
        select.classList.remove('bg-red-500', 'text-white');
        select.classList.add('bg-green-500', 'text-white');
        // Menonaktifkan select ketika presensi 'hadir' dipilih
        const ketSelect = select.parentElement.nextElementSibling.querySelector('select');
        ketSelect.disabled = true;
        ketSelect.value = ''; // Mengatur nilai keterangan menjadi kosong
    } else if (select.value === 'tidak hadir') {
        select.classList.remove('bg-green-500', 'text-white');
        select.classList.add('bg-red-500', 'text-white');
        // Mengaktifkan kembali select jika presensi selain 'hadir' dipilih
        const ketSelect = select.parentElement.nextElementSibling.querySelector('select');
        ketSelect.disabled = false;
    } else {
        select.classList.remove('bg-green-500', 'bg-red-500', 'text-white');
        // Mengaktifkan kembali select jika presensi selain 'hadir' dipilih
        const ketSelect = select.parentElement.nextElementSibling.querySelector('select');
        ketSelect.disabled = false;
    }
}


function submitData(studentTableId) {
    let valid = true;
    const studentTable = document.getElementById(studentTableId);
    const rows = studentTable.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const presensi = rows[i].querySelector('select[id^="presensi"]').value;
        const ket = rows[i].querySelector('select[id^="ket"]').value;
        const studentName = rows[i].querySelector('td').textContent.trim();

        if (!presensi) {
            alert(`Presensi untuk ${studentName} harus diisi`);
            event.preventDefault();
            valid = false;
            break;
        }

        if (presensi === 'tidak hadir' && !ket) {
            alert(`Keterangan untuk ${studentName} harus diisi jika presensi tidak hadir`);
            valid = false;
            event.preventDefault();
            break;
        }

    }

}