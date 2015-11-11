import _ from "lodash";
import DesktopAppTag from "../components/desktop-app/desktop-app";
import assert from "assert";

describe("<desktop-app>", () =>{
    it("must have an id attribute", ()=>{


        let tag = {};

        tag.opts = {

        }

        let appTag = new DesktopAppTag(tag);

        try
        {
            appTag.init();
        }
        catch(err){
            assert.equal(_.contains(err.message, "id is missing"), true);

            return;
        }

        assert.fail("must not reach here");

    });


    it("must have reference to the app by id", ()=>{
        
    })
})