document.addEventListener('DOMContentLoaded', () => {

    // Make sidebar collapse on click
    document.querySelector('#show-sidebar-button').onclick = () => {
        document.querySelector('#sidebar').classList.toggle('view-sidebar');
    };

    // Make 'enter' key submit message
    let msg = document.getElementById("user_message");
    msg.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("send_message").click();
        }
    });
});
