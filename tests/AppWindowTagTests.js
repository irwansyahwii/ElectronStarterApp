import AppWindowTag from "../components/app-window/app-window";

describe("AppWindowTag", ()=>{
    describe("init", ()=>{
        it("must validate all the properties", ()=>{
            let tagInstance = {
                opts: {
                    width: "abc",
                    height: "hgd",
                    x: "ads",
                    y: "adsad",
                    use_content_size: 1,
                    center: "asdasd",
                    min_width: "ads",
                    min_height: "asda",
                    max_width: "adasd",
                    max_height: "adsad",
                    resizable: "asdad",
                    always_on_top: "asdad",
                    fullscreen: "Asdad",
                    skip_taskbar: "Adsasd",
                    

                }
            }
            let tag = new AppWindowTag(tagInstance);

            tag.init();


        });
    })
})