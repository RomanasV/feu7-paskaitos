const studentForm = document.getElementById('student-form');

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // const studentName = document.querySelector('#student-name').value;
  // const studentName = document.getElementById('student-name').value;
  // const studentName = document.getElementsByName('name')[0].value;
  // const studentName = document.querySelector('[name="name"]').value;
  
  // const studentName = studentForm.querySelector('#student-name').value;
  // const studentName = studentForm.querySelector('[name="name"]').value;
  
  // const studentName = event.target.querySelector('#student-name').value;
  // const studentName = event.target.querySelector('[name="name"]').value;

  // const studentName = event.target.elements.name.value;

  const studentName = event.target.name.value;
  
  console.dir(studentName);

})