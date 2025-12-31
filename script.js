document.addEventListener('DOMContentLoaded', function() {
    // 烟花
    function createFirework(){
        const f=document.createElement('div');f.classList.add('firework');
        const x=Math.random()*window.innerWidth,y=Math.random()*window.innerHeight;
        const c=['#ff0000','#00ff00','#0000ff','#ffff00','#ff00ff','#00ffff','#ffffff'][Math.floor(Math.random()*7)];
        f.style.left=x+'px';f.style.top=y+'px';f.style.backgroundColor=c;
        document.getElementById('fireworks').appendChild(f);
        setTimeout(()=>{f.style.transform='scale(10)';f.style.opacity=0;},10);
        setTimeout(()=>{f.remove();},1000);
    }
    setInterval(createFirework,2000);
    for(let i=0;i<5;i++)setTimeout(createFirework,i*500);

    // 点击粒子
    document.addEventListener('click',e=>{
        const cs=['#ff0000','#00ff00','#0000ff','#ffff00','#ff00ff','#00ffff','#ffffff'];
        for(let i=0;i<10;i++){
            const p=document.createElement('div');p.classList.add('particle');
            p.style.left=e.clientX+'px';p.style.top=e.clientY+'px';
            p.style.backgroundColor=cs[Math.floor(Math.random()*cs.length)];
            document.body.appendChild(p);
            setTimeout(()=>p.remove(),1000);
        }
    });

    // 漂浮图标
    const icons=['🎁','🌟','🍀','🎉','🍎','🍰','👨‍👩‍👧','👑'];
    setInterval(()=>{
        const ic=document.createElement('div');ic.classList.add('floating-icon');
        ic.textContent=icons[Math.floor(Math.random()*icons.length)];
        ic.style.left=Math.random()*window.innerWidth+'px';
        ic.style.top=window.innerHeight+'px';
        document.body.appendChild(ic);
        setTimeout(()=>ic.remove(),4000);
    },1500);

    // 好运按钮
    const blessings=["身体健康！","笑口常开！","财源广进！","万事如意！","平安喜乐！","天天开心！"];
    document.getElementById('luckBtn').onclick=e=>{
        const plus=document.createElement('span');plus.classList.add('luck-plus');
        plus.textContent='+1';plus.style.left=e.clientX+'px';plus.style.top=e.clientY+'px';
        document.body.appendChild(plus);setTimeout(()=>plus.remove(),1000);

        const b=document.createElement('div');b.classList.add('blessing-popup');
        b.textContent=blessings[Math.floor(Math.random()*blessings.length)];
        const c1=randomColor(),c2=randomColor();
        b.style.backgroundImage=`linear-gradient(135deg,${c1},${c2})`;
        b.style.left=e.clientX+'px';b.style.top=e.clientY-60+'px';
        document.body.appendChild(b);setTimeout(()=>b.remove(),2000);
    };

    // 随机颜色
    function randomColor(){
        const r=Math.floor(Math.random()*256);
        const g=Math.floor(Math.random()*256);
        const b=Math.floor(Math.random()*256);
        return `rgb(${r},${g},${b})`;
    }

    // 随机放大照片
    const imgs=document.querySelectorAll('.photo-row img');
    setInterval(()=>{
        const r=imgs[Math.floor(Math.random()*imgs.length)];
        r.style.transform='scale(1.2)';
        setTimeout(()=>r.style.transform='scale(1)',1000);
    },3000);

    // 雪花
    setInterval(()=>{
        const s=document.createElement('div');s.classList.add('snowflake');
        s.textContent='❄️';
        s.style.left=Math.random()*window.innerWidth+'px';s.style.top='-20px';
        s.style.animationDuration=5+Math.random()*10+'s';
        s.style.fontSize=10+Math.random()*20+'px';
        document.body.appendChild(s);
        setTimeout(()=>s.remove(),15000);
    },300);
});