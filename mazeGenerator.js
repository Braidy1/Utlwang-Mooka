export function generateMaze(resume){
  const maze=[];
  maze.push('####################');
  resume.skills.forEach(s=>{
    maze.push('#........##........#');
  });
  maze.push('####################');
  return maze;
}
