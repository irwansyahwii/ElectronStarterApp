{/*
    
*/}
<dock-layout>
    <yield></yield>

    <script type="text/es6">

        console.log("dock-layout created");

        this.dock = opts.dock || "fill";

        // console.log(this.tags);


        this.on("mount", ()=>{
            for(let attr in this.tags){
                console.log(this.tags[attr].dock);
                let dock = this.tags[attr].dock;
                if(dock === "fill"){
                    console.log(`dock.fill('${attr}', options.size, 1)`);
                }
                else if(dock === "left"){
                    console.log(`dock.left('${attr}', options.size, 1)`);
                }
                else if(dock === "right"){
                    console.log(`dock.right('${attr}', options.size, 1)`);
                }
                else if(dock === "top"){
                    console.log(`dock.top('${attr}', options.size, 1)`);
                }
                
            }
        })
    </script>
</dock-layout>
