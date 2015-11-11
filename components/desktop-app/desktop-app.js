export default class DesktopAppTag{
    constructor(tag){
        this.tag = tag;
        this.tag_name = "desktop-app";

        // this.tag.mixin(this);

        this.init();
    }

    sayHello(){
        console.log("haiii");
    }

    init(){
        if(!this.tag.opts.id){
            throw new Error("id is missing");
        }

        // this.tag.mixin(this);

        this.tag.on("mount", ()=>{

            //Retrieve parent.{id} property
            let appProperty = this.tag.parent[this.tag.opts.id];


            for(let child_tag_name in this.tag.tags){

                //Iterate all <app-window> childs
                //and assign it to parent.{id}
                if(child_tag_name === "app-window"){
                    let single_or_array_childs = this.tag.tags[child_tag_name];
                    if(single_or_array_childs.length){
                        for(let child_tag of single_or_array_childs){
                            appProperty[child_tag.opts.id] = child_tag;
                        }
                    }
                    else{                        
                        appProperty[single_or_array_childs.opts.id] = single_or_array_childs;
                    }
                }
            }


            //Raise the onready event
            let onReadyHandler = this.tag.opts.onready || null;
            if(onReadyHandler !== null){
                onReadyHandler();
            }
        })
    }
}