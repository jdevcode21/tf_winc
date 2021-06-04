let myBtn = document.getElementById('mybutton');
let changeBg = document.getElementsByClassName('blue-background');

const toggleColor = () => {
    changeBg.classList.toggle('red-background');
};

myBtn.addEventListener('click', function () { alert('button clicked'); });
changeBg.addEventListener('click', toggleColor);
