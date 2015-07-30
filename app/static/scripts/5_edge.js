/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='/static/images/',
        aud='/static/media/',
        vid='/static/media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fangshexian',
                            type: 'image',
                            rect: ['153px', '131px', '492px', '457px', 'auto', 'auto'],
                            opacity: '0.3',
                            fill: ["rgba(0,0,0,0)",im+"fangshexian.png",'0px','0px']
                        },
                        {
                            id: 'tubiao_',
                            type: 'image',
                            rect: ['259px', '195px', '240px', '241px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"tubiao%20@2x.png",'0px','0px']
                        },
                        {
                            id: 'Image',
                            type: 'image',
                            rect: ['471px', '110px', '42px', '42px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E4%B8%93%E5%AE%B6@2x.png",'0px','0px']
                        },
                        {
                            id: 'Image2',
                            type: 'image',
                            rect: ['589px', '392px', '48px', '48px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E5%AD%A6%E4%BD%8D@2x.png",'0px','0px']
                        },
                        {
                            id: 'Image5',
                            type: 'image',
                            rect: ['823px', '-130px', '308px', '80px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E4%B8%93%E4%B8%9A@2x.png",'0px','0px']
                        },
                        {
                            id: 'Image6',
                            type: 'image',
                            rect: ['839px', '343px', '236px', '61px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E6%8C%89%E9%92%AE@2x.png",'0px','0px']
                        },
                        {
                            id: 'Image3',
                            type: 'image',
                            rect: ['168px', '227px', '42px', '42px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E7%A4%BC%E7%89%A9@2x.png",'0px','0px']
                        },
                        {
                            id: 'Image4',
                            type: 'image',
                            rect: ['153px', '469px', '42px', '42px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E5%A5%96%E6%9D%AF@2x.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1440px', '720px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid67",
                            "top",
                            0,
                            750,
                            "easeInCirc",
                            "${Image5}",
                            '-263px',
                            '237px'
                        ],
                        [
                            "eid73",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Image6}",
                            '839px',
                            '839px'
                        ],
                        [
                            "eid74",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Image6}",
                            '839px',
                            '839px'
                        ],
                        [
                            "eid72",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${Image6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "top",
                            0,
                            750,
                            "linear",
                            "${tubiao_}",
                            '195px',
                            '203px'
                        ],
                        [
                            "eid35",
                            "top",
                            750,
                            750,
                            "linear",
                            "${tubiao_}",
                            '203px',
                            '195px'
                        ],
                        [
                            "eid38",
                            "top",
                            1500,
                            750,
                            "linear",
                            "${tubiao_}",
                            '195px',
                            '203px'
                        ],
                        [
                            "eid39",
                            "top",
                            2250,
                            750,
                            "linear",
                            "${tubiao_}",
                            '203px',
                            '195px'
                        ],
                        [
                            "eid29",
                            "left",
                            0,
                            750,
                            "linear",
                            "${tubiao_}",
                            '259px',
                            '267px'
                        ],
                        [
                            "eid34",
                            "left",
                            750,
                            750,
                            "linear",
                            "${tubiao_}",
                            '267px',
                            '259px'
                        ],
                        [
                            "eid44",
                            "left",
                            1500,
                            750,
                            "linear",
                            "${tubiao_}",
                            '259px',
                            '267px'
                        ],
                        [
                            "eid45",
                            "left",
                            2250,
                            750,
                            "linear",
                            "${tubiao_}",
                            '267px',
                            '259px'
                        ],
                        [
                            "eid71",
                            "top",
                            0,
                            750,
                            "easeInCirc",
                            "${Image6}",
                            '-157px',
                            '343px'
                        ],
                        [
                            "eid68",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${Image5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${tubiao_}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid5",
                            "opacity",
                            750,
                            750,
                            "linear",
                            "${tubiao_}",
                            '0.900000',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            1500,
                            750,
                            "linear",
                            "${tubiao_}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid43",
                            "opacity",
                            2250,
                            750,
                            "linear",
                            "${tubiao_}",
                            '0.900000',
                            '1'
                        ],
                        [
                            "eid69",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Image5}",
                            '823px',
                            '839px'
                        ],
                        [
                            "eid70",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Image5}",
                            '839px',
                            '839px'
                        ],
                        [
                            "eid26",
                            "height",
                            0,
                            750,
                            "linear",
                            "${tubiao_}",
                            '255px',
                            '241px'
                        ],
                        [
                            "eid37",
                            "height",
                            750,
                            750,
                            "linear",
                            "${tubiao_}",
                            '241px',
                            '255px'
                        ],
                        [
                            "eid40",
                            "height",
                            1500,
                            750,
                            "linear",
                            "${tubiao_}",
                            '255px',
                            '241px'
                        ],
                        [
                            "eid41",
                            "height",
                            2250,
                            750,
                            "linear",
                            "${tubiao_}",
                            '241px',
                            '255px'
                        ],
                        [
                            "eid61",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${fangshexian}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid27",
                            "width",
                            0,
                            750,
                            "linear",
                            "${tubiao_}",
                            '254px',
                            '240px'
                        ],
                        [
                            "eid36",
                            "width",
                            750,
                            750,
                            "linear",
                            "${tubiao_}",
                            '240px',
                            '254px'
                        ],
                        [
                            "eid46",
                            "width",
                            1500,
                            750,
                            "linear",
                            "${tubiao_}",
                            '254px',
                            '240px'
                        ],
                        [
                            "eid47",
                            "width",
                            2250,
                            750,
                            "linear",
                            "${tubiao_}",
                            '240px',
                            '254px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
})("EDGE-23045451");

(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // 常用的 Edge 类别名

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("u262_img");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-23045451");