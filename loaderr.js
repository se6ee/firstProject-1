// الحصول على سياق الكانفس
var ctx = document.getElementById('circularLoader').getContext('2d');
var al = 0; // النسبة الحالية
var start = 4.72; // بداية القوس (12 ساعة في نظام الراديان)
var cw = ctx.canvas.width;
var ch = ctx.canvas.height;

var sim; // معرف interval

function progressSim() {
    var diff = (al / 100) * Math.PI * 2; // زاوية القوس بناء على النسبة

    ctx.clearRect(0, 0, cw, ch);

    // إعدادات القوس
    ctx.lineWidth = 17;
    ctx.strokeStyle = "#4285f4";
    ctx.beginPath();
    ctx.arc(cw / 2, ch / 2, 75, start, diff + start, false);
    ctx.stroke();

    // كتابة النص داخل الدائرة
    ctx.fillStyle = '#4285f4';
    ctx.font = "28px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(al + '%', cw / 2, ch / 2);

    if (al >= 100) {
        clearInterval(sim); // تصحيح clearTimeout إلى clearInterval
        loader.style.display = 'none'; 
        myModal.show(); 
    }
    al++;
}

// الوصول لعناصر HTML
const win = document.querySelector("#winner");
const loader = document.querySelector(".loader-con");

// تهيئة مودال Bootstrap
var myModal = new bootstrap.Modal(document.getElementById('modal'), { keyboard: false });

win.addEventListener('click', function () {
    al = 0; // إعادة تعيين النسبة
    loader.style.display = 'block';
    sim = setInterval(progressSim, 50);
});
