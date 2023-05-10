const studentForm = document.getElementById('student-form');

function itKnowledgeChangeHandler() {
  const studentItKnowledgeInput = document.querySelector('#student-it-knowledge');
  const studentItKnowledgeOutput = document.querySelector('#student-it-knowledge-output');

  studentItKnowledgeOutput.textContent = studentItKnowledgeInput.value;
  
  studentItKnowledgeInput.addEventListener('input', (event) => {
    studentItKnowledgeOutput.textContent = event.target.value;
  })
}

itKnowledgeChangeHandler();

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
  const interests = form.querySelectorAll('[name="interests"]:checked');
  
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
  phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
  
  const emailElement = document.createElement('p');
  emailElement.innerHTML = `<strong>Email:</strong> ****`;

  const itKnowledgeElement = document.createElement('p');
  itKnowledgeElement.innerHTML = `<strong>IT knowledge:</strong> ${itKnowledge}`;

  const groupElement = document.createElement('p');
  groupElement.innerHTML = `<strong>Group:</strong> ${group}`;

  const interestsWrapper = document.createElement('div');
  const interestsTitle = document.createElement('h3');
  interestsTitle.textContent = 'Student interests:'

  const interestsList = document.createElement('ul');

  interests.forEach(interest => {
    const interestElement = document.createElement('li');
    interestElement.textContent = interest.value;
    interestsList.append(interestElement);
  })

  interestsWrapper.append(interestsTitle, interestsList);

  const privateInfoButton = document.createElement('button');
  privateInfoButton.textContent = 'Show Private info';

  const privateInfoHidden = true;

  privateInfoButton.addEventListener('click', () => {
    privateInfoHidden = !privateInfoHidden;

    if (privateInfoHidden) {
      emailElement.innerHTML = `<strong>Email:</strong> ****`;
      phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
      privateInfoButton.textContent = 'Show Private info';
    } else {
      emailElement.innerHTML = `<strong>Email:</strong> ${email}`;
      phoneElement.innerHTML = `<strong>Phone:</strong> ${phone}`;
      privateInfoButton.textContent = 'Hide Private info';
    }
  })

  const removeStudentButton = document.createElement('button');
  removeStudentButton.textContent = 'Remove Student';

  removeStudentButton.addEventListener('click', () => {
    studentItem.remove();
    renderAlertMessage(`Student deleted (${name} ${surname})`, 'red');
  })

  studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsWrapper, privateInfoButton, removeStudentButton);

  form.reset();

  itKnowledgeChangeHandler();

  let createdStudentText = `Student created (${name} ${surname})`;
  renderAlertMessage(createdStudentText, 'green');
})

function renderAlertMessage(text, color) {
  const alertMessage = document.querySelector('#alert-message');
  alertMessage.textContent = text;

  alertMessage.style.color = color;

  setTimeout(() => {
    alertMessage.textContent = '';
  }, 5000);
}
