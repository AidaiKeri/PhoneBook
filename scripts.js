document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addButton");
    const phonebookData = document.getElementById("phonebookData");

    function loadPhonebookData() {
        fetch("get_phonebook_data.php")
            .then(response => response.json())
            .then(data => {
                phonebookData.innerHTML = "";

                data.forEach(entry => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${entry.name}</td>
                        <td>${entry.phone}</td>
                        <td>${entry.by_whom}</td>
                        <td>
                            <button class="editButton" data-id="${entry.id}">Редактировать</button>
                            <button class="deleteButton" data-id="${entry.id}">Удалить</button>
                        </td>
                    `;
                    phonebookData.appendChild(row);
                });
            });
    }

    loadPhonebookData();

    addButton.addEventListener("click", function() {
        showAddDialog();
    });

    function showAddDialog() {
        const dialog = document.getElementById("dialog");
        dialog.innerHTML = `
            <h2>Добавить контакт</h2>
            <form id="addForm">
                <label for="name">ФИО:</label>
                <input type="text" id="name" name="name" required><br>
                <label for="phone">Телефон:</label>
                <input type="text" id="phone" name="phone" required><br>
                <label for="by_whom">Кем приходится:</label>
                <input type="text" id="by_whom" name="by_whom" required><br>
                <button type="submit">Добавить</button>
            </form>
        `;
        dialog.style.display = "block";

        const addForm = document.getElementById("addForm");
        addForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(addForm);
            addPhonebookEntry(formData);
        });
    }

    function addPhonebookEntry(formData) {
        fetch("add_phonebook_entry.php", {
            method: "POST",
            body: formData
        })
        .then(() => {
            loadPhonebookData();
            const dialog = document.getElementById("dialog");
            dialog.style.display = "none";
        });
    }

    phonebookData.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("editButton")) {
            const id = target.getAttribute("data-id");
            showEditDialog(id);
        } else if (target.classList.contains("deleteButton")) {
            const id = target.getAttribute("data-id");
            deletePhonebookEntry(id);
        }
    });

    function showEditDialog(id) {
        fetch(`get_phonebook_entry.php?id=${id}`)
            .then(response => response.json())
            .then(entry => {
                const dialog = document.getElementById("dialog");
                dialog.innerHTML = `
                    <h2>Редактировать</h2>
                    <form id="editForm">
                        <input type="hidden" name="id" value="${entry.id}">
                        <label for="name">ФИО:</label>
                        <input type="text" id="name" name="name" value="${entry.name}" required><br>
                        <label for="phone">Телефон:</label>
                        <input type="text" id="phone" name="phone" value="${entry.phone}" required><br>
                        <label for="by_whom">Кем приходится:</label>
                        <input type="text" id="by_whom" name="by_whom" value="${entry.by_whom}" required><br>
                        <button type="submit">Сохранить</button>
                    </form>
                `;
                dialog.style.display = "block";

                const editForm = document.getElementById("editForm");
                editForm.addEventListener("submit", function(event) {
                    event.preventDefault();
                    const formData = new FormData(editForm);
                    editPhonebookEntry(formData);
                });
            });
    }

    function editPhonebookEntry(formData) {
        fetch("edit_phonebook_entry.php", {
            method: "POST",
            body: formData
        })
        .then(() => {
            loadPhonebookData();
            const dialog = document.getElementById("dialog");
            dialog.style.display = "none";
        });
    }

    function deletePhonebookEntry(id) {
        fetch(`delete_phonebook_entry.php?id=${id}`, {
            method: "DELETE"
        })
        .then(() => {
            loadPhonebookData();
        });
    }
});
