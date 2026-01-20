export function drawMaze(ctx, maze){
  const tile=28;
  maze.forEach((row,y)=>{
    [...row].forEach((c,x)=>{
      if(c==='#'){
        ctx.fillStyle='#003b6f';
        ctx.fillRect(x*tile,y*tile,tile,tile);
      }
    });
  });
}
export function drawPlayer(ctx,p){
  ctx.beginPath();
  ctx.arc(p.x,p.y,12,0,Math.PI*2);
  ctx.fillStyle='#ffd800';
  ctx.fill();
}
export function drawGhosts(ctx, ghosts){
  ghosts.forEach(g=>{
    ctx.beginPath();
    ctx.arc(g.x,g.y,12,0,Math.PI*2);
    ctx.fillStyle=g.color;
    ctx.fill();
  });
}
