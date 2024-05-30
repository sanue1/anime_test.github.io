document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm("Перейти на новую вкладку?")) {
            } else {
                console.log("Выбор действия отменен");
            }
        });
    })
});