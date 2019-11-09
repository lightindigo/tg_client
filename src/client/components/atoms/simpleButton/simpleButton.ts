import "./styles.css";
import * as $ from "jquery";
import templ from "./simpleButton.template";

export class SimpleButton{
    private static isInited = false;

    public static initRippleListener(){
        if(this.isInited === false){
            $(document).on('mousedown','.simple-button',function(event){
                let $this = $(this);
                let offset = $this.offset();
                let x = event.pageX - offset.left;
                let y = event.pageY - offset.top;
                let width = $this.width() / 4;
                $(this).find('.ripple-effect').css('top',y).css('left',x).width(width).height(width);
            });
        }
    }

    public static render(data){
        this.initRippleListener();
        return templ(data);
    }
}