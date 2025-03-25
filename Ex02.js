let courses = JSON.parse(localStorage.getItem('courses')) || [
    { id: 1, content: 'Learn Javascript Session 01', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Anh Bách' },
    { id: 2, content: 'Learn Javascript Session 2', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Lâm' },
    { id: 3, content: 'Learn CSS Session 1', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Hiếu Ci ớt ớt' }
  ];
  let editingId = null;
  
  function saveToLocal() {
    localStorage.setItem('courses', JSON.stringify(courses));
  }
  
  function renderTable() {
    const table = document.getElementById('taskTable');
    table.innerHTML = '';
    courses.forEach((course, index) => {
      table.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${course.content}</td>
          <td>${course.dueDate}</td>
          <td>${course.status}</td>
          <td>${course.assignedTo}</td>
          <td>
            <button onclick="editTask(${course.id})">Sửa</button>
            <button onclick="deleteTask(${course.id})">Xóa</button>
          </td>
        </tr>
      `;
    });
  }
  
  function addOrUpdateTask() {
    const content = document.getElementById('content').value;
    const dueDate = document.getElementById('dueDate').value;
    const status = document.getElementById('status').value;
    const assignedTo = document.getElementById('assignedTo').value;
  
    if (editingId) {
      // Update
      courses = courses.map(course =>
        course.id === editingId
          ? { id: course.id, content, dueDate, status, assignedTo }
          : course
      );
      editingId = null;
    } else {
      // Add new
      const newTask = {
        id: Date.now(),
        content,
        dueDate,
        status,
        assignedTo
      };
      courses.push(newTask);
    }
  
    saveToLocal();
    renderTable();
    clearInputs();
  }
  
  function editTask(id) {
    const course = courses.find(c => c.id === id);
    document.getElementById('content').value = course.content;
    document.getElementById('dueDate').value = course.dueDate;
    document.getElementById('status').value = course.status;
    document.getElementById('assignedTo').value = course.assignedTo;
    editingId = id;
  }
  
  function deleteTask(id) {
    courses = courses.filter(course => course.id !== id);
    saveToLocal();
    renderTable();
  }
  
  function clearInputs() {
    document.getElementById('content').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('status').value = 'Pending';
    document.getElementById('assignedTo').value = '';
  }
  
  renderTable();