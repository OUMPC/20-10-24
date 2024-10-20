const flag = {
    firstClick:false
}

const music = new Audio('./asset/Fireworks.mp3');
music.loop = true;
music.volume = 0.2;

document.body.onclick = () => {
    if(!flag.firstClick){
        music.play();
        
        flag.firstClick = true;
    }
}

setTimeout(() => {
    alert('Hôm nay là một ngày vô cùng đặc biệt - ngày 20/10, ngày Phụ nữ Việt Nam! Nhân dịp này, CLB Lập trình trên thiết bị di động xin gửi những lời chúc tốt đẹp nhất đến tất cả các bạn nữ và các cô giảng viên. Chúc các bạn luôn thành công trong sự nghiệp, hạnh phúc trong tình yêu và luôn tỏa sáng như những đóa hoa rực rỡ. ❤❤');
}, 8000);

document.body.onloadedmetadata = () => {
    music.play();
}