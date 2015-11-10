import DesktopAppTag from "../components/desktop-app/desktop-app";
import assert from "assert";
import _ from "lodash";

describe("DesktopAppTag", ()=>{
    it("should store all event handelers", () =>{
        // console.log(assert);
        let opts = {
            onwill_finish_launching: () =>{},
            onready : () =>{},
            onwindow_all_closed: () =>{},
            onbefore_quit: () =>{},
            onwill_quit: () =>{},
            onquit: () =>{},
            onopen_file: () =>{},
            onopen_url: () =>{},
            onactivate: () =>{},
            onbrowser_window_blur: () =>{},
            onbrowser_window_focus: () =>{},
            onbrowser_window_created: () =>{},
            onselect_certificate: () => {},
            ongpu_process_crashed: () => {}
        };
        let tagInstance = {
            opts: opts
        }
        let app = new DesktopAppTag(tagInstance);


        assert.equal(app.onwill_finish_launching, opts.onwill_finish_launching);
        assert.equal(app.onready, opts.onready);
        assert.equal(app.onwindow_all_closed, opts.onwindow_all_closed);

        assert.equal(app.onbefore_quit, opts.onbefore_quit);
        assert.equal(app.onwill_quit, opts.onwill_quit);
        assert.equal(app.onquit, opts.onquit);
        assert.equal(app.onopen_file, opts.onopen_file);
        assert.equal(app.onactivate, opts.onactivate);
        assert.equal(app.onbrowser_window_focus, opts.onbrowser_window_focus);
        assert.equal(app.onbrowser_window_created, opts.onbrowser_window_created);
        assert.equal(app.onselect_certificate, opts.onselect_certificate);
        assert.equal(app.ongpu_process_crashed, opts.ongpu_process_crashed);
    });

    describe("init()", ()=>{
        it("should validate all event handlers on init", () =>{
            let opts = {
                onwill_finish_launching: {},
                onready : {},
                onwindow_all_closed: {},
                onbefore_quit: {},
                onwill_quit: {},
                onquit: {},
                onopen_file: {},
                onopen_url: {},
                onactivate: {},
                onbrowser_window_blur: {},
                onbrowser_window_focus: {},
                onbrowser_window_created: {},
                onselect_certificate:  {},
                ongpu_process_crashed:  {}
            };
            

            for(let curr_opt in opts){
                let the_opts = {};
                the_opts[curr_opt] = opts[curr_opt];

                let tagInstance = {
                    opts: the_opts,
                    on:(name, cb)=>{
                        if(name === "mount"){
                            cb();
                        }
                    }
                }

                let app = new DesktopAppTag(tagInstance);       
                app.platformApp = {};             
                try
                {
                    
                    app.init()                    
                }
                catch(err){
                    assert.equal(_.contains(err.message, curr_opt), true);
                    assert.notEqual(err, null);
                    continue;                    
                }
                assert.fail("must not reach here, ", curr_opt);
            }

        });
    })

    
});