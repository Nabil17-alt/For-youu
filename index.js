window.onload = function () {
    var tries = 0;
    const noButton = document.getElementById("button.no")
    const yesButton = document.getElementById("button.yes")

    noButton.addEventListener("mouseover", (event) => {
        var x = event.pageX;
        var y = event.pageY;

        noButton.style.position = "absolute";
        noButton.style.top = Math.random() * window.innerHeight +"px";
        noButton.style.left = Math.random() * window.innerWidth + 'px';

        tries++;

        if(tries > 3){
            yesButton.style.animation = "mover 0.8s infinite alternate"
        }
    });

    yesButton.addEventListener("click", function() {
        var phoneNumber = "6282286923252"; // Ganti dengan nomor WhatsApp Anda
        var message = "Kapan dan di mana kita bisa bertemu?";
        var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
        window.open(url, '_blank');
    });
}