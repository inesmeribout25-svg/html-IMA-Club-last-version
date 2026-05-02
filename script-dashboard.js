document.addEventListener("DOMContentLoaded",function() {
    console.log("JS is working");

    if (!localStorage.getItem("members")) {
    const sampleMembers = [
        { name: "Ali", plan: "Gold", status: "Active" },
        { name: "Sara", plan: "Silver", status: "Active" },
        { name: "Yacine", plan: "Bronze", status: "Inactive" }
    ];

    localStorage.setItem("members", JSON.stringify(sampleMembers));
}

const members = JSON.parse(localStorage.getItem("members"));
document.getElementById("totalMembers").textContent = members.length;
const active = members.filter(m => m.status === "Active");
document.getElementById("activePlans").textContent = active.length;

let revenue = 0;

members.forEach(m => {
    if (m.plan === "Gold") revenue += 5000;
    if (m.plan === "Silver") revenue += 3000;
    if (m.plan === "Bronze") revenue += 1000;
});

document.getElementById("revenue").textContent = revenue + " DA";

if (!localStorage.getItem("classes")) {
    const sampleClasses = [
        { name: "Yoga", day: "Monday" },
        { name: "Cardio", day: "Tuesday" }
    ];
    localStorage.setItem("classes", JSON.stringify(sampleClasses));
}

const classes = JSON.parse(localStorage.getItem("classes"));

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

const todayClasses = classes.filter(c => c.day === today);

document.getElementById("classesToday").textContent = todayClasses.length;
} );