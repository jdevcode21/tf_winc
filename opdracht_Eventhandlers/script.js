const myBtn = document.getElementById('mybutton');
const bodybg = document.body; // why document.getElementsbyClassName('blue-background') won't work?
const changebgbtn = document.getElementById('change-bg-color');

const toggleColor = () => {
    bodybg.classList.toggle('red-background');
};

myBtn.addEventListener('click', function () { alert('button clicked'); });
changebgbtn.addEventListener('click', toggleColor);

