// $(document).ready(function() {

    // document.querySelector('.btn__diceme').addEventListener('click', function () {
    //     var randomNumber = Math.floor(Math.random() * 6);




    // });


    function Random() {
        var rnd = Math.floor(Math.random() * 6) + 1;
        var rnd2 = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".img1").setAttribute("src", "img/dice" + rnd + ".png");
        document.querySelector(".img2").setAttribute("src", "img/dice" + rnd2 + ".png");
        if (rnd > rnd2) {
            document.querySelector(".main__winner").textContent = "Player 1 wins";
        } else if (rnd === rnd2) {
            document.querySelector(".main__winner").textContent = "Draw";
        } else {
            document.querySelector(".main__winner").textContent = "Player 2 wins";
        }
    }
















// });