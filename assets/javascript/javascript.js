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

TheDeleteButton.addEventListener('click',DeleteTheTask)

    console.log('AddYourTask working')
};

// EventListener for AddYourTask function.
AddButton.addEventListener('click', AddYourTask,
    console.log('event working')
);


    // Delete Function for Task
    function DeleteTheTask() {

        HereGoesText.removeChild(TheNewListTask);
        TheNewListTask.removeChild(TheDeleteButton);
        console.log('Delete item')
    };
