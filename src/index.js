/** @type {HTMLCanvasElement} */
let canvas;
/** @type {CanvasRenderingContext2D} */
let ctx;

// globals

const grid_count_x = 10;
const grid_count_y = 10;

const grid = [];

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.onclick = function(e) { return canvas_click(e, canvas) };
    
    init_grid(grid);
    draw_grid(grid);
}

/**
 * 
 * @param {MouseEvent} e 
 * @param {HTMLCanvasElement} canvas
 */
function mouse_to_grid(e, canvas) {
    const x = e.offsetX;
    const y = e.offsetY;
    const delta_x = canvas.width / grid_count_x;
    const delta_y = canvas.height / grid_count_y;
    const grid_x = Math.floor(x / delta_x);
    const grid_y = Math.floor(y / delta_y);
    return [grid_x, grid_y];
}

/**
 * 
 * @param {MouseEvent} e 
 * @param {HTMLCanvasElement} canvas
 */
function canvas_click(e, canvas) {
    const [x,y] = mouse_to_grid(e, canvas);
    console.log(x,y);
    grid[x][y] = 1;
    draw_grid(grid);
}

/**
 * 
 * @param {int[][]} grid 
 */
function init_grid(grid) {
    for(let i = 0; i < grid_count_x; i++) {
        grid[i] = [];
        for (let j = 0; j < grid_count_y; j++) {
            grid[i][j] = 0;
        }
    }
    grid[3][3]=1;
}

/**
 * 
 * @param {int[][]} grid 
 */
function draw_grid(grid) {

    const delta_x = Math.floor((canvas.width) / grid_count_x);
    const delta_y = Math.floor(canvas.height / grid_count_y);    
    console.log(delta_x);
    for(let i = 0; i < grid_count_x; i++) {
        for(let j = 0; j < grid_count_y; j++) {
            if (grid[i][j] == 1) {
                ctx.fillRect(delta_x*i, delta_y*j, delta_x, delta_y);
            }
            ctx.strokeRect(delta_x*i, delta_y*j, delta_x, delta_y);
        }
    }
}