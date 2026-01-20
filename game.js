import resume from './data/resume.json' assert { type: 'json' };
import { generateMaze } from './data/mazeGenerator.js';
import { drawMaze, drawPlayer, drawGhosts } from './engine/renderer.js';
import { player, handleInput, movePlayer } from './engine/player.js';
import { ghosts } from './engine/ghosts.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const maze = generateMaze(resume);

handleInput(player);

function loop() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawMaze(ctx, maze);
  drawGhosts(ctx, ghosts);
  movePlayer(player);
  drawPlayer(ctx, player);
  requestAnimationFrame(loop);
}
loop();
