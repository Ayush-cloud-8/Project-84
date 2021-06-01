console.log("Hi Ayush");
canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
c1_x = 10;
c1_y = 40;
c2_x = 25;
c2_y = 90;


function back() {
    c1_x = 10;
c1_y = 40;
c2_x = 25;
c2_y = 90;
upload_bg_img();
        upload_c_img();
        upload_cc_img();
        console.log("Cars are Back in Position");
}

function add() {
    background_img = new Image();
    background_img.onload = upload_bg_img;
    background_img.src = "Background.png";

    car1_img = new Image();
    car1_img.onload = upload_c_img;
    car1_img.src = "Car1.jpg";

    car2_img = new Image();
    car2_img.onload = upload_cc_img;
    car2_img.src = "Car2.jpg";
}

function upload_bg_img() {
ctx.drawImage(background_img , 0 , 0 , canvas.width , canvas.height);
}

function upload_c_img() {
    ctx.drawImage(car1_img , c1_x , c1_y , 120 , 50);
}

function upload_cc_img() {
    ctx.drawImage(car2_img , c2_x , c2_y , 90 , 50);
}

window.addEventListener("keydown" , car1_key);

function car1_key(e) {
    keypress1 = e.keyCode;
    if (keypress1 == 38) {
        up_one();
        console.log(keypress1);
    } else if (keypress1 == 40) {
        down_one();
        console.log(keypress1);
    } else if (keypress1 == 37) {
        left_one();
        console.log(keypress1);
    } else if (keypress1 == 39) {
        right_one();
        console.log(keypress1);
    }

    
}

function up_one() {
    if (c1_y >= 20) {
        c1_y -= 10;
        console.log("Car1 Y is = " + c1_y);
        upload_bg_img();
        upload_c_img();
        upload_cc_img();
    }
}

function down_one() {
    if (c1_y <= 440) {
        c1_y += 10;
    console.log("Car1 Y is = " + c1_y);
        upload_bg_img();
        upload_c_img();
        upload_cc_img();
    }
}

function left_one() {
    if (c1_x >= 0) {
        c1_x -= 10;
    console.log("Car1 X is = " + c1_x);
    upload_bg_img();
        upload_c_img();
        upload_cc_img();
    }
}

function right_one() {
    if (c1_x <= 1390) {
        c1_x += 10;
        console.log("Car1 X is = " + c1_x);
    upload_bg_img();
        upload_c_img();
        upload_cc_img();
    }
}

window.addEventListener("keydown" , car2_key);

function car2_key(e) {
    keypress2 = e.keyCode;
    if (keypress2 == 87) {
        up_two();
        console.log(keypress2);
    } else if (keypress2 == 83) {
        down_two();
        console.log(keypress2);
    } else if (keypress2 == 65) {
        left_two();
        console.log(keypress2);
    } else if (keypress2 == 68) {
        right_two();
        console.log(keypress2);
    }

}

function up_two() {
    if (c2_y >= 20) {
        c2_y -= 10;
        console.log("Car2 Y is = " + c2_y);
        upload_bg_img();
        upload_c_img();
        upload_cc_img();
    }
}

function down_two() {
    if (c2_y <= 440) {
        c2_y += 10;
    console.log("Car2 Y is = " + c2_y);
        upload_bg_img();
        upload_c_img();
        upload_cc_img();
    }
}

function left_two() {
    if (c2_x >= 0) {
        c2_x -= 10;
    console.log("Car2 X is = " + c2_x);
    upload_bg_img();
        upload_c_img();
        upload_cc_img();
    }
}

function right_two() {
    if (c2_x <= 1390) {
        c2_x += 10;
        console.log("Car2 X is = " + c2_x);
    upload_bg_img();
        upload_c_img();
        upload_cc_img();
    }
}