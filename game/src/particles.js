let particles=[],popups=[];
function burst(x,y,color,count=22){for(let i=0;i<count;i++)particles.push({x,y,vx:(random()-.5)*150,vy:(random()-.7)*160,t:1,color});}
function popup(s,x,y,color=C.cream){popups.push({s,x,y,t:2,color});}
function updateSoilCrumbsAndPetals(dt){particles.forEach(p=>{p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=80*dt;p.t-=dt;});particles=particles.filter(p=>p.t>0);popups.forEach(p=>{p.y-=18*dt;p.t-=dt;});popups=popups.filter(p=>p.t>0);}
function drawParticlesAndCoilPopups(){particles.forEach(p=>ellipse(p.x,p.y,3,2,p.color,null));popups.forEach(p=>{ctx.save();ctx.globalAlpha=Math.min(1,p.t);ctx.lineWidth=5;ctx.strokeStyle=C.ink;ctx.font='bold 26px Trebuchet MS';ctx.textAlign='center';ctx.strokeText(p.s,p.x,p.y);text(p.s,p.x,p.y,26,p.color,'center');ctx.restore();});}
