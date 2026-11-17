function drawLayeredLivingSoil(bed,time=0){
 ctx.fillStyle='#ead4a4';ctx.fillRect(0,0,1280,800);
 for(let j=0;j<3;j++){ctx.fillStyle=bed.palette[j];ctx.beginPath();ctx.moveTo(0,110+j*220);for(let x=0;x<=1280;x+=20)ctx.lineTo(x,110+j*220+Math.sin(x*.012+j)*13);ctx.lineTo(1280,800);ctx.lineTo(0,800);ctx.fill();}
 ctx.fillStyle='#d8b780';ctx.fillRect(0,bed.sand,1280,42);
 const r=seededRandom(951);for(let i=0;i<2400;i++){const x=r()*1280,y=120+r()*680;ctx.fillStyle=i%3===0?'#edc38b55':'#5e422733';ctx.fillRect(x,y,1+r()*4,1+r()*2);}
 for(let j=0;j<16;j++){let y=145+j*42;const pts=[];for(let x=0;x<=1280;x+=12)pts.push([x,y+Math.sin(x*.02+j)*5]);line(pts,'#e6b47c25',1);}
 for(let i=0;i<34;i++){const x=r()*1020+10,y=170+r()*580;ellipse(x,y,3+r()*7,2+r()*3,'#bb9870','#795538',1);}
 if(G.bed>=3)for(let i=0;i<8;i++)drawFossil(85+i*135,280+(i%3)*166,22+i%3*8);
 if(G.bed===4)for(let i=0;i<12;i++)drawCrystal(50+i*84,260+i%3*180);
 ctx.fillStyle='#e8d8a5';ctx.fillRect(0,0,1280,110);
 for(let i=0;i<80;i++){let x=i*17;line([[x,115],[x-6,96-(i%4)*3],[x+2,109],[x+8,97]],'#71804d',2);}
 line([[0,116],[1280,116]],'#50633d',8);
 const sx=150+G.sun*850;ellipse(sx,48,26,26,'#f3c258','#ba853a');for(let i=0;i<12;i++){let a=i*Math.PI/6;line([[sx+Math.cos(a)*34,48+Math.sin(a)*34],[sx+Math.cos(a)*40,48+Math.sin(a)*40]],'#c89543',2);}
 sunflower(580,50,.48);text('THE LAST SUNFLOWER',620,43,13);text('Keep her alive. Find the deep water.',620,65,14);
}
function drawFossil(x,y,s){ctx.save();ctx.translate(x,y);ctx.rotate(-.4);const pts=[];for(let a=0;a<Math.PI*5;a+=.15){const r=s*a/(Math.PI*5);pts.push([Math.cos(a)*r,Math.sin(a)*r]);}line(pts,'#eccb94',5);for(let i=0;i<6;i++)line([[s+10+i*9,-8],[s+12+i*9,14],[s+20+i*9,21]],'#ddba86',4);ctx.restore();}
function drawCrystal(x,y){for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(x+i*15,y);ctx.lineTo(x-7+i*15,y-40-i*9);ctx.lineTo(x+2+i*15,y-60-i*6);ctx.lineTo(x+14+i*15,y-20);ctx.closePath();ctx.fillStyle=['#88b5a0','#b4d4ba','#6d9c8b'][i];ctx.fill();ctx.strokeStyle='#d3e5bd';ctx.stroke();}}
function drawRockAndThorns(){G.rocks.forEach(r=>{ellipse(r.x,r.y,r.r,r.r*.66,'#939180','#5f604e',3);line([[r.x-12,r.y-r.r*.55],[r.x+6,r.y-4],[r.x-5,r.y+12],[r.x+20,r.y+25]],'#5f604e',3);line([[r.x-26,r.y-10],[r.x-13,r.y-20]],'#c3bba0',4);});G.thorns.forEach(r=>{for(let i=0;i<8;i++){let x=r.x-35+i*10;line([[x,r.y+16],[x+8,r.y-20],[x+15,r.y+8]],'#534e32',4);line([[x+5,r.y-6],[x-4,r.y-12]],'#534e32',3);}});}
