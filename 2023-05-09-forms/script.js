const studentForm = document.getElementById('student-form');
const studentsList = document.querySelector('#students-list');
let editStudent = null;

const initialData = [
  {
    name: 'John',
    surname: 'Doe',
    age: 55,
    phone: '+3704564654',
    email: 'email@email.email',
    itKnowledge: 7,
    group: 'feu 5',
    interests: ['JavaScript', 'Java']
  },
  {
    name: 'John 2',
    surname: 'Doe 2',
    age: 55,
    phone: '+3704564654',
    email: 'email@email.email',
    itKnowledge: 7,
    group: 'feu 4',
    interests: ['JavaScript']
  },
  {
    name: 'John 3',
    surname: 'Doe 3',
    age: 55,
    phone: '+3704564654',
    email: 'email@email.email',
    itKnowledge: 4,
    group: 'feu 1',
    interests: ['Java', 'PHP']
  },
  {
    name: 'John 4',
    surname: 'Doe 34',
    age: 55,
    phone: '+3704564654',
    email: 'email@email.email',
    itKnowledge: 4,
    group: 'feu 7',
    interests: []
  },
]

function init() {
  renderInitialData(initialData);
  itKnowledgeChangeHandler();
  formLocalStorageHandler(studentForm);

  studentForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const form = event.target;
  
    let formIsValid = validateForm(form);
  
    if (!formIsValid) {
      renderAlertMessage('Some fields are missing', 'red');
      return;
    }
  
    const name = form.name.value;
    const surname = form.surname.value;
    const age = form.age.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const itKnowledge = form['it-knowledge'].value;
    const group = form.group.value;
    const interests = form.querySelectorAll('[name="interests"]:checked');
  
    // const newStudentData = {
    //   name: name,
    //   surname: surname,
    //   age: age,
    //   phone: phone,
    //   email: email,
    //   itKnowledge: itKnowledge,
    //   group: group,
    //   interests: interests
    // }
  
    // const interestsData = [];
    // interests.forEach(interest => {
    //   interestsData.push(interest.value);
    // })
  
    // const interestsData = Array.from(interests).map(interest => interest.value);
    const interestsData = [...interests].map(interest => interest.value);
  
    const newStudentData = {
      name,
      surname,
      age,
      phone,
      email,
      itKnowledge,
      group,
      interests: interestsData
    }
    
    if (editStudent) {
      let updatedStudent = renderSingleStudent(newStudentData);
      editStudent.replaceWith(updatedStudent);
  
      let createdStudentText = `Student updated (${name} ${surname})`;
      renderAlertMessage(createdStudentText, 'green');
  
      studentForm['student-form-submit'].value = 'Create student';
      editStudent = null;
    } else {
      let newStudent = renderSingleStudent(newStudentData);
      studentsList.prepend(newStudent);
  
      let createdStudentText = `Student created (${name} ${surname})`;
      renderAlertMessage(createdStudentText, 'green');
    }
  
    form.reset();
    itKnowledgeChangeHandler();

    localStorage.removeItem('name');
    localStorage.removeItem('surname');
    localStorage.removeItem('phone');
    localStorage.removeItem('age');
    localStorage.removeItem('email');
    localStorage.removeItem('it-knowledge');
  })
}

function renderSingleStudent(studentData) {
  let { name, surname, age, phone, email, itKnowledge, group, interests } = studentData;
  
  const studentItem = document.createElement('div');
  studentItem.classList.add('student-item');

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

  if (interests.length > 0) {
    interests.forEach(interest => {
      const interestElement = document.createElement('li');
      interestElement.textContent = interest;
      interestsList.append(interestElement);
    })
    
    interestsWrapper.append(interestsTitle, interestsList);
  } else {
    const noInterestsTitle = document.createElement('span');
    noInterestsTitle.textContent = 'No interests :(';

    interestsWrapper.append(interestsTitle, noInterestsTitle);
  }

  const privateInfoButton = document.createElement('button');
  privateInfoButton.textContent = 'Show Private info';

  let privateInfoHidden = true;

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

  const editStudentButton = document.createElement('button');
  editStudentButton.textContent = 'Edit Student';

  editStudentButton.addEventListener('click', () => {
    const nameInput = studentForm.name;
    nameInput.value = name;
    
    const surnameInput = studentForm.surname;
    surnameInput.value = surname;
    
    // console.log(age);
    // console.log(phone);
    // console.log(email);
    // console.log(itKnowledge);
    // console.log(group);
    // console.log(interests);
    
    studentForm['student-form-submit'].value = 'Save changes';
    editStudent = studentItem;
  })

  studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsWrapper, privateInfoButton, removeStudentButton, editStudentButton);

  return studentItem;
}

function renderInitialData(data) {
  data.map((item) => {
    const studentElement = renderSingleStudent(item);
    studentsList.prepend(studentElement);
  })
}

function itKnowledgeChangeHandler() {
  const studentItKnowledgeInput = document.querySelector('#student-it-knowledge');
  const studentItKnowledgeOutput = document.querySelector('#student-it-knowledge-output');

  studentItKnowledgeOutput.textContent = studentItKnowledgeInput.value;
  
  studentItKnowledgeInput.addEventListener('input', (event) => {
    studentItKnowledgeOutput.textContent = event.target.value;
  })
}

function renderAlertMessage(text, color) {
  const alertMessage = document.querySelector('#alert-message');
  alertMessage.textContent = text;

  alertMessage.style.color = color;

  setTimeout(() => {
    alertMessage.textContent = '';
  }, 5000);
}

function validateInputField(input, message) {
  input.classList.add('input-error');

  let inputErrorMessage = document.createElement('span');
  inputErrorMessage.classList.add('input-error-message');
  inputErrorMessage.textContent = message;

  input.after(inputErrorMessage);
  
  return false;
}

function validateForm(form) {
  const inputErrorMessages = form.querySelectorAll('.input-error-message');
  inputErrorMessages.forEach(errorMessage => errorMessage.remove());

  const requiredFields = form.querySelectorAll('input:required');

  let isValid = true;

  requiredFields.forEach(requiredField => {
    requiredField.classList.remove('input-error');

    if (!requiredField.value) {
      isValid = validateInputField(requiredField, 'Required field');
    } else {

      switch (requiredField.name) {
        case 'name':

          if (requiredField.value.length < 3) {
            let errorMessage = 'Vardas privalo būti bent 3 simbolių ilgumo';
            validateInputField(requiredField, errorMessage);
            isValid = false;
          }
          break;

        case 'surname':

          if (requiredField.value.length < 3) {
            validateInputField(requiredField, 'Pavardė privalo būti bent 3 simbolių ilgumo');
            isValid = false;
          }
          break;

        case 'age':

          if (requiredField.value < 0) {
            validateInputField(requiredField, 'Amžius privalo būti teigiamas skaičius');
            isValid = false;
          } else if (requiredField.value > 120) {
            validateInputField(requiredField, 'Įvestas amžius yra per didelis');
            isValid = false;
          }
          break;

        case 'phone':

          if (requiredField.value.length < 9 || requiredField.value.length > 12) {
            validateInputField(requiredField, 'Įvestas telefono numeris yra neteisingas');
            isValid = false;
          }
          break;

        case 'email':

          if (requiredField.value.length < 8 || !requiredField.value.includes('@') || !requiredField.value.includes('.')) {
            validateInputField(requiredField, 'Įvestas elektroninis paštas yra neteisingas');
            isValid = false;
          }
          break;
      }
    }
  })

  return isValid;
}

function formLocalStorageHandler(form) {
  // const nameElement = form.name;

  // if (localStorage.getItem('name')) {
  //   nameElement.value = localStorage.getItem('name');
  // }

  // nameElement.addEventListener('input', (event) => {
  //   localStorage.setItem('name', event.target.value);
  // });

  inputLocalStorageHandler(form, 'name');
  inputLocalStorageHandler(form, 'surname');
  inputLocalStorageHandler(form, 'age');
  inputLocalStorageHandler(form, 'phone');
  inputLocalStorageHandler(form, 'email');
  inputLocalStorageHandler(form, 'it-knowledge');
}

function inputLocalStorageHandler(form, key) {
  const input = form[key];

  if (localStorage.getItem(key)) {
    input.value = localStorage.getItem(key);
  }

  input.addEventListener('input', (event) => {
    localStorage.setItem(key, event.target.value);
  });
}

init();