function remove_from_list(i) {
    active_list[i] = ""
}
count = 0, running = 0;
var active_list = [100];
$(document).ready(function() {
        $(".bringins-content").hide()
    }),
    function(i) {
        i.fn.bringins = function(n) {
            var t = {
                position: "right",
                width: "50%",
                margin: 50,
                color: "rgba(0,0,0,.7)",
                closeButton: "rgb(102,102,102)",
                zIndex: ""
            };
            if (n = i.extend(t, n), 0 == running) {
                for (running = 1, current_obj = this, current = i(this).attr("id"), z = 0; z <= count; z++) active_list[z] == current && (i(this).hide(), i(this).detach().appendTo("body"), remove_from_list(z), i("#bringins-block-" + z).remove(), i("#bringinsclose" + z).remove());
                count++, active_list[count] = current, n.width.indexOf("%") >= 0 ? (temp = n.width.replace("%", "") / 100, bringins_width = temp * innerWidth, bringins_margin = innerWidth - bringins_width) : (bringins_width = n.width, bringins_margin = innerWidth - bringins_width), "left" == n.position && i(this).css({
                    left: "-50px",
                    position: "absolute"
                }), "right" == n.position && (temp_var = bringins_margin + .05 * innerWidth, i(this).css({
                    left: temp_var,
                    position: "absolute"
                })), "center" == n.position && (mm_center_temp = (innerWidth - bringins_width) / 2, mm_center_temp2 = innerWidth - mm_center_temp - 50, mm_center_temp3 = (innerWidth - bringins_width) / 2 + .05 * innerWidth, i(this).css({
                    left: mm_center_temp,
                    top: "50px",
                    position: "absolute"
                })), i("body").append("<div id='bringins-block-" + count + "'><svg id='bringins-svg-" + count + "' class='bringins-svg'><path id='bringins-svgpath-" + count + "' class='bringins-svgpath' d='M0 0 L0 1 L3 1 L3 0 Z' /></svg><svg id='bringins-block-close-svg-" + count + "' width=25 height=25><path id='bringins-block-close-" + count + "' d='M0 0 L25 25 Z M25 0 L0 25 Z' /></svg></div>"), i("body").append("<div id='bringinsclose" + count + "'><script>$('#bringins-block-close-svg-" + count + "').click(function(){$('#bringins-block-" + count + "').fadeOut(500, function(){$(" + current + ").hide();$(" + current + ").detach().appendTo('body');remove_from_list(" + count + ");$('#bringins-block-" + count + "').remove();$('#bringinsclose" + count + "').remove();});});</script><style>#" + current + "::-webkit-scrollbar{display:none;}</style></div>"), i("#bringins-block-" + count).css({
                    position: "fixed",
                    top: "0%",
					width: "100%",
					height: "100%
                }), "" != n.zIndex && i("#bringins-block-" + count).css({
                    "z-index": n.zIndex
                }), i("#bringins-block-close-" + count).css({
                    fill: "white",
                    stroke: n.closeButton,
                    "stroke-width": 5
                }), i(this).detach().appendTo("#bringins-block-" + count), this_width = bringins_width - 2 * n.margin, this_height = innerHeight - 2 * n.margin - 50, n.margin > 25 ? this_top = n.margin : this_top = 25, i(this).css({
                    margin: n.margin,
                    width: this_width,
                    height: this_height,
                    "margin-top": this_top,
                    transition: "1s",
                    "-o-transition": "1s",
                    "-moz-transition": "1s",
                    "-webkit-transition": "1s",
                    "overflow-y": "scroll"
                }), i("#bringins-svg-" + count).css({
                    position: "absolute",
                    width: bringins_width,
                    height: innerHeight,
                    transition: "1s",
                    "-o-transition": "1s",
                    "-moz-transition": "1s",
                    "-webkit-transition": "1s"
                }), "center" == n.position && i("#bringins-svgpath-" + count).css({
                    width: bringins_width,
                    height: innerHeight,
                    transition: "1s",
                    "-o-transition": "1s",
                    "-moz-transition": "1s",
                    "-webkit-transition": "1s"
                }), "left" == n.position && i("#bringins-svg-" + count).css({
                    transform: "rotate(180deg)"
                }), mm_temp = innerWidth - 50, "right" == n.position && (i("#bringins-svg-" + count).css({
                    top: "50%",
                    left: bringins_margin
                }), i("#bringins-block-close-svg-" + count).css({
                    position: "absolute",
                    left: mm_temp,
                    top: "25px"
                })), "left" == n.position && (i("#bringins-svg-" + count).css({
                    top: "-50%",
                    left: 0
                }), i("#bringins-block-close-svg-" + count).css({
                    position: "absolute",
                    left: 25,
                    top: "25px"
                })), "center" == n.position && (i("#bringins-svg-" + count).css({
                    top: "50%",
                    left: "50%"
                }), i("#bringins-block-close-svg-" + count).css({
                    position: "absolute",
                    left: mm_center_temp2,
                    top: "25px"
                })), i("#bringins-svgpath-" + count).css({
                    transition: "1s",
                    "-o-transition": "1s",
                    "-moz-transition": "1s",
                    "-webkit-transition": "1s",
                    fill: n.color
                }), temp_temp = bringins_width / 3, setTimeout(function() {
                    "center" == n.position ? (i("#bringins-svgpath-" + count).css({
                        transform: "scale(" + temp_temp + ",3)"
                    }), i("#bringins-svg-" + count).css({
                        left: mm_center_temp
                    })) : (i("#bringins-svgpath-" + count).css({
                        transform: "scale(1," + innerHeight + ")"
                    }), i("#bringins-svg-" + count).css({
                        top: "0%"
                    }))
                }, 1), setTimeout(function() {
                    i("#bringins-svgpath-" + count).css({
                        transform: "scale(" + bringins_width + "," + innerHeight + ")"
                    }), i(current_obj).fadeIn(1), "right" == n.position && i(current_obj).css({
                        left: bringins_margin
                    }), "left" == n.position && i(current_obj).css({
                        left: 0
                    }), "center" == n.position && (i("#bringins-svg-" + count).css({
                        top: "0%"
                    }), i(current_obj).css({
                        top: "25px"
                    }))
                }, 1e3), setTimeout(function() {
                    running = 0
                }, 2e3)
            }
        }
    }(jQuery);