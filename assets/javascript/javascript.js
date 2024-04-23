// elements in from HTML.

let TextInputArea = document.getElementById('textareahere');
let AddButton = document.getElementById('theaddbutton');
let HereGoesText = document.getElementById('HereGoesTheTask');




// Function for adding the Task.
function AddYourTask() {

    let ThetextValue = TextInputArea.value;

    let TheDeleteButton = document.createElement('button');
    TheDeleteButton.innerText = 'Delete';
    let TheNewListTask = document.createElement('li');

    TheNewListTask.innerText = ThetextValue;
    HereGoesText.appendChild(TheNewListTask);
    TheNewListTask.appendChild(TheDeleteButton);

    TheDeleteButton.classList.add('NewDeleteButton');
    TheNewListTask.classList.add('ClassList');



    // Delete Function for Task
    function DeleteTheTask() {

        HereGoesText.removeChild(TheNewListTask);
        TheNewListTask.removeChild(TheDeleteButton);
        console.log('Delete item')
    };



    //EventListener for DeleteTheTask function
    TheDeleteButton.addEventListener('click', DeleteTheTask)

    console.log('AddYourTask working')
};

// EventListener for AddYourTask function.
AddButton.addEventListener('click', AddYourTask);