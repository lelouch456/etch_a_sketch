const container=document.querySelector(".container");
let div;
function creategrid(rows)
{
    let square=rows*rows;
    let grid_size=(960-(2*rows))/rows;
    for(let i=0;i<square;i++)
        {
            div = document.createElement("div");
            div.className="grid";
            div.dataset.count="1";
            // div.textContent="grids";
            container.appendChild(div);
            div.style.width=`${grid_size}px`;
            div.style.height=`${grid_size}px`;
            // div.style.padding=`${grid_size}px`;
        }
    globalThis.grids =document.querySelectorAll(".grid");

    grids.forEach(function(grid)
    {
        
        grid.addEventListener("mouseenter",(e)=> 
            {
                
                let count=parseInt(grid.dataset.count);
                count=count*2;
                grid.dataset.count=count;
                console.log(e.target);
                let a=Math.round(Math.random()*255-count);
                let b=Math.round(Math.random()*255-count);
                e.target.style.backgroundColor=`rgb(${a},${b},${a*b/a})`;
            }
        )
    })
    

    
}

creategrid(64);



const btn= document.createElement("button");

btn.className="reset";
btn.textContent="Reset";

container.parentElement.insertBefore(btn,container);
btn.addEventListener("click",(e)=>
{
    grids.forEach(function(grid){
        container.removeChild(grid);
    })
    creategrid(prompt("Enter the no of grids"));

})

