// Dummy patient data
const patients = [
  { id: 1, name: "John Doe", age: 45, condition: "Fever" },
  { id: 2, name: "Jane Smith", age: 30, condition: "Cough" },
  { id: 3, name: "Alex Johnson", age: 60, condition: "Diabetes" }
];

// Load patient data into table
function loadPatients() {
  const patientList = document.getElementById("patientList");
  patientList.innerHTML = "";
  patients.forEach(p => {
    patientList.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${p.age}</td>
        <td>${p.condition}</td>
      </tr>
    `;
  });
}

// Handle appointment form submission
document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const patientName = document.getElementById("patientName").value;
  const doctorName = document.getElementById("doctorName").value;
  const date = document.getElementById("date").value;

  alert(`Appointment booked!\nPatient: ${patientName}\nDoctor: ${doctorName}\nDate: ${date}`);
  
  this.reset();
});

// Initialize
loadPatients();
