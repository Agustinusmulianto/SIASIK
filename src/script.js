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
function toggleStudentData(className, studentDataId) {

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

document.addEventListener('DOMContentLoaded', function () {
    const selectElements = document.querySelectorAll('select');
    const submitButton = document.querySelector('button[onclick="submitButtonInputGuru()"]');

    function updateOptions() {
        // Reset disabled state for all options
        selectElements.forEach(select => {
            select.querySelectorAll('option').forEach(option => {
                option.disabled = false;
            });
        });

        // Disable selected options in other selects
        selectElements.forEach(select => {
            if (select.value) {
                selectElements.forEach(otherSelect => {
                    if (otherSelect !== select) {
                        const optionToDisable = otherSelect.querySelector(`option[value="${select.value}"]`);
                        if (optionToDisable) {
                            optionToDisable.disabled = true;
                        }
                    }
                });
            }
        });
    }

    selectElements.forEach(select => {
        select.addEventListener('change', updateOptions);
    });

    window.submitButtonInputGuru = function () {
        let allSelected = true;
        selectElements.forEach(select => {
            if (!select.value) {
                allSelected = false;
            }
        });

        if (!allSelected) {
            alert('Semua Data Kelas wajib dipilih!');
            return false; // Prevent form submission
        }

        return true; // Allow form submission
    };

    // Initial call to update options based on pre-selected values
    updateOptions();
});

function toggleInputData(className, inputDataId) {
    const studentDataRow = document.getElementById(inputDataId);
    const icon = document.getElementById(`icon-${inputDataId}`);

    if (studentDataRow.classList.contains('hidden')) {
        studentDataRow.classList.remove('hidden');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />';
    } else {
        studentDataRow.classList.add('hidden');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />';
    }
}

function submitData(inputDataId) {
    // Implementasi untuk submit data jika diperlukan
    alert(`Data dari ${inputDataId} di kirim`);
}

function addInput(inputDataId) {
    const studentTable = document.getElementById(inputDataId);
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td class="border px-4 py-2"><input type="text" name="mata_pelajaran[]" class="w-full p-2 border rounded" placeholder="Masukkan Mata Pelajaran" required></td>`;
    studentTable.appendChild(newRow);
}
