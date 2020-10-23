var userList = document.getElementById('userList');
var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('ageInput');
var addButton = document.getElementById('addButton');


addButton.addEventListener('click', function () {
    create(nameInput.value, ageInput.value);
});

function create(name, age) {
    var data = {
        name: name,
        age: age
    };
        return firebase.database().ref().child('users').push(data);
}

firebase.database().ref('users').on('value', function (snapshot) {
    userList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name + ' : ' + item.val().age));
        userList.appendChild(li);
    }); 
});