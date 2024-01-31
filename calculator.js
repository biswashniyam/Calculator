document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            handleButtonClick(button.value);
        });
    });

    function handleButtonClick(value) {
        if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (value === 'AC') {
            display.value = '';
        } else {
            display.value += value;
        }
    }
});
