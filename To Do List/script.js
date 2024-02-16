document.querySelector('#push').onclick = function (){
    var newTaskInput = document.querySelector('#newtask input')
    var newTaskValue = newTaskInput.value.trim()
    
    if (newTaskValue.length === 0) {
        alert("Please Enter a Task")
    } else {
        var currentDate = new Date();

    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    var day = currentDate.getDate().toString().padStart(2, '0');
    var time = `${year}-${month}-${day}`;
    console.log(time);


        // Check for duplicate tasks
        var existingTasks = document.querySelectorAll('.task span')
        var isDuplicate = Array.from(existingTasks).some(function (task) {
            return task.innerText.trim() === newTaskValue;
        })

        if (isDuplicate) {
            alert("Task already exists!")
        } else {
            // Add the new task
            document.querySelector('#tasks').innerHTML += `
                <div class="task">
                    <span id="taskname">
                        ${newTaskValue}
                    </span>
                    <span id="taskdate">
                    ${time}
                    </span>
                    <button class="delete">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            `

            // Attach event listeners to new tasks
            var currentTasks = document.querySelectorAll(".delete")
            for (var i = 0; i < currentTasks.length; i++) {
                currentTasks[i].onclick = function () {
                    this.parentNode.remove()
                }
            }

            var tasks = document.querySelectorAll(".task")
            for (var i = 0; i < tasks.length; i++) {
                tasks[i].onclick = function () {
                    this.classList.toggle('completed')
                }
            }

            newTaskInput.value = ""
        }
    }
}