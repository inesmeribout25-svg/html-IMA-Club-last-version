document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("classForm");
    const table = document.getElementById("classTable");

    let classes = JSON.parse(localStorage.getItem("classes")) || [];

    function displayClasses() {
        table.innerHTML = "";

        classes.forEach((c, index) => {
            table.innerHTML += `
                <tr>
                    <td>${c.name}</td>
                    <td>${c.trainer}</td>
                    <td>${c.day}</td>
                    <td>${c.time}</td>
                    <td>
                        <button onclick="editClass(${index})">Edit</button>
                        <button onclick="deleteClass(${index})">Delete</button>
                    </td>
                </tr>
            `;
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const newClass = {
            name: document.getElementById("name").value,
            trainer: document.getElementById("trainer").value,
            day: document.getElementById("day").value,
            time: document.getElementById("time").value
        };

       
        const exists = classes.find(c =>
            c.trainer === newClass.trainer &&
            c.day === newClass.day &&
            c.time === newClass.time
        );

        if (exists) {
            alert("Class already exists!");
            return;
        }

        classes.push(newClass);
        localStorage.setItem("classes", JSON.stringify(classes));

        form.reset();
        displayClasses();
    });

    window.deleteClass = function(index) {
        if (confirm("Are you sure?")) {
            classes.splice(index, 1);
            localStorage.setItem("classes", JSON.stringify(classes));
            displayClasses();
        }
    };

    window.editClass = function(index) {
        const c = classes[index];

        document.getElementById("name").value = c.name;
        document.getElementById("trainer").value = c.trainer;
        document.getElementById("day").value = c.day;
        document.getElementById("time").value = c.time;

        classes.splice(index, 1);
        localStorage.setItem("classes", JSON.stringify(classes));
        displayClasses();
    };

    displayClasses();

});