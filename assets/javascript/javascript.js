// elements in from HTML.

let TextInputArea = document.getElementById('textareahere');
let AddButton = document.getElementById('theaddbutton');
let HereGoesText = document.getElementById('HereGoesTheTask');
let newTaskCOunter = document.getElementById('MyCounterHere');



let taskCounterhere = 0;


// Function for adding the Task.
function AddYourTask() {

    let ThetextValue = TextInputArea.value;
    if (ThetextValue === '') {
        alert('No Added text!')
    } else {
        let TheDeleteButton = document.createElement('button');
        TheDeleteButton.innerText = 'Delete';
        let TheNewListTask = document.createElement('li');

        TheNewListTask.innerText = ThetextValue;
        HereGoesText.appendChild(TheNewListTask);
        HereGoesText.appendChild(TheDeleteButton);
        TextInputArea.value = '';
        ++taskCounterhere;
        TheDeleteButton.classList.add('NewDeleteButton');
        TheNewListTask.classList.add('ClassList');
        

    
        

        /* Delete Function for Task*/
        function DeleteTheTask() {

            HereGoesText.removeChild(TheNewListTask);
            HereGoesText.removeChild(TheDeleteButton);
            taskCounterhere--;     
            newTaskCOunter.innerHTML = 'You have'+' '+ taskCounterhere +' '+'things to do.'
          
            console.log('Delete item')
        };
/*Add text to to counter*/
        if(taskCounterhere === 1){
            newTaskCOunter.innerHTML = 'You have'+' '+ taskCounterhere +' '+'thing do.'
        }else {
            newTaskCOunter.innerHTML = 'You have'+' '+ taskCounterhere +' '+'things to do.'
        }


        /*EventListener for DeleteTheTask function*/
        TheDeleteButton.addEventListener('click', DeleteTheTask)
    }



    console.log('AddYourTask working')
};

// EventListener for AddYourTask function.
AddButton.addEventListener('click', AddYourTask);