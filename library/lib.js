// Predefined student data
const students = {
    '713523IT01': { name: 'Naveen', regNo: '713523IT01', course: 'Information Technology', year: '2nd' },
    '713523IT02': { name: 'Kavish.M', regNo: '713523IT02', course: 'Information Technology', year: '2nd' },
    '713523IT03': { name: 'Sanjay.G', regNo: '713523IT03', course: 'Information Technology', year: '2nd' },
    '713523IT04': { name: 'Rowfin.M', regNo: '713523IT04', course: 'Information Technology', year: '2nd' },
    '713523AIML01': { name: 'Sujitha.R', regNo: '713523AIML01', course: 'AIML', year: '2nd' },
    '7135AIML02': { name: 'Kamalash.M', regNo: '7135AIML02', course: 'AIML', year: '2nd' },
    '713523ECE01': { name: 'Bharath.N', regNo: '713523ECE01', course: 'ECE', year: '2nd' },
    '713523ECE02': { name: 'Vijay.K', regNo: '713523ECE02', course: 'ECE', year: '2nd' },
    '713523EEE01': { name: 'Clarance.C.S', regNo: '713523EEE01', course: 'EEE', year: '2nd' },
    '713523EEE02': { name: 'Pavithra.H', regNo: '713523EEE02', course: 'EEE', year: '2nd' }
  };
  
  // Event listeners for login buttons
  document.getElementById('studentLoginBtn').addEventListener('click', function() {
    document.getElementById('studentLogin').classList.remove('hidden');
    document.getElementById('staffLogin').classList.add('hidden');
  });
  
  document.getElementById('staffLoginBtn').addEventListener('click', function() {
    document.getElementById('staffLogin').classList.remove('hidden');
    document.getElementById('studentLogin').classList.add('hidden');
  });
  
  // Student login submission
  document.getElementById('studentSubmitBtn').addEventListener('click', function() {
    const regNo = document.getElementById('studentRegNumber').value;
    const studentDetailsDiv = document.getElementById('studentDetails');
    if (students[regNo]) {
      const student = students[regNo];
      studentDetailsDiv.innerHTML = `
        <h3>Student Details</h3>
        <p>Name: ${student.name}</p>
        <p>Register Number: ${student.regNo}</p>
        <p>Course: ${student.course}</p>
        <p>Year: ${student.year}</p>
        <h4>Library Books Available</h4>
        <table>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Printed Details</th>
            <th>Copies Available</th>
            <th>Location</th>
          </tr>
          <tr>
            <td>Book 1</td>
            <td>Author 1</td>
            <td>Details 1</td>
            <td>5</td>
            <td>Upper Floor</td>
          </tr>
          <!-- Repeat for other books -->
        </table>
      `;
      studentDetailsDiv.classList.remove('hidden');
    } else {
      alert('Invalid Register Number');
    }
  });
  
  // Staff login submission
  document.getElementById('staffSubmitBtn').addEventListener('click', function() {
    const staffDetailsDiv = document.getElementById('staffDetails');
    staffDetailsDiv.classList.remove('hidden');
  });
  
  // Staff clear form
  document.getElementById('clearStaffDetails').addEventListener('click', function() {
    const inputs = document.querySelectorAll('#staffDetails input');
    inputs.forEach(input => input.value = '');
  });
  
  // Staff submit
  document.getElementById('submitStaffDetails').addEventListener('click', function() {
    alert('Details Submitted');
    // Redirect or show success message as needed
  });
  