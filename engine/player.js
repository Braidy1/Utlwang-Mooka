export const player={ x:60,y:60,speed:2,dir:{x:0,y:0} };
export function handleInput(p){
  document.addEventListener('keydown',e=>{
    if(e.key==='ArrowUp')p.dir={x:0,y:-1};
    if(e.key==='ArrowDown')p.dir={x:0,y:1};
    if(e.key==='ArrowLeft')p.dir={x:-1,y:0};
    if(e.key==='ArrowRight')p.dir={x:1,y:0};
  });
}
export function movePlayer(p){
  p.x+=p.dir.x*p.speed;
  p.y+=p.dir.y*p.speed;
}
