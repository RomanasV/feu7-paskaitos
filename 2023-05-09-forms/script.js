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

  const form = event.target;

  const name = form.name.value;
  const surname = form.surname.value;
  const age = form.age.value;
  const phone = form.phone.value;
  const email = form.email.value;
  const itKnowledge = form['it-knowledge'].value;
  const group = form.group.value;
  
  console.dir(name);
  console.dir(surname);
  console.dir(age);
  console.dir(phone);
  console.dir(email);
  console.dir(itKnowledge);
  console.dir(group);

  const studentsList = document.querySelector('#students-list');
  
  const studentItem = document.createElement('div');
  studentItem.classList.add('student-item');

  studentsList.prepend(studentItem);

  const nameElement = document.createElement('p');
  nameElement.innerHTML = `<strong>Name:</strong> ${name}`;

  const surnameElement = document.createElement('p');
  surnameElement.innerHTML = `<strong>Surname:</strong> ${surname}`;

  const ageElement = document.createElement('p');
  ageElement.innerHTML = `<strong>Age:</strong> ${age}`;

  const phoneElement = document.createElement('p');
  phoneElement.innerHTML = `<strong>Phone:</strong> ${phone}`;

  const emailElement = document.createElement('p');
  emailElement.innerHTML = `<strong>Email:</strong> ${email}`;

  const itKnowledgeElement = document.createElement('p');
  itKnowledgeElement.innerHTML = `<strong>IT knowledge:</strong> ${itKnowledge}`;

  const groupElement = document.createElement('p');
  groupElement.innerHTML = `<strong>Group:</strong> ${group}`;

  studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement);
})