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
                            id: 'Image4',
                            type: 'image',
                            rect: ['135px', '111px', '526px', '486px', 'auto', 'auto'],
                            opacity: '0.08',
                            fill: ["rgba(0,0,0,0)",im+"%E7%BA%BF@2x.png",'0px','0px']
                        },
                        {
                            id: 'Image',
                            type: 'image',
                            rect: ['515px', '-163px', '0px', '0px', 'auto', 'auto'],
                            opacity: '0.3',
                            fill: ["rgba(0,0,0,0)",im+"%E8%AF%AD%E9%9F%B3@2x.png",'0px','0px']
                        },
                        {
                            id: 'Image2',
                            type: 'image',
                            rect: ['-92px', '360px', '10px', '10px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E4%BF%A1%E6%81%AF@2x.png",'0px','0px']
                        },
                        {
                            id: 'Image3',
                            type: 'image',
                            rect: ['-102px', '0px', '8px', '8px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E4%BF%A1%E5%8F%B7@2x.png",'0px','0px']
                        },
                        {
                            id: 'Image5',
                            type: 'image',
                            rect: ['837px', '748px', '8px', '8px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E9%80%9A%E8%AF%9D@2x.png",'0px','0px']
                        },
                        {
                            id: 'Image6',
                            type: 'image',
                            rect: ['822px', '-217px', '308px', '124px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"%E6%B2%9F%E9%80%9A@2x.png",'0px','0px']
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
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid77",
                            "top",
                            0,
                            750,
                            "easeInCirc",
                            "${Image6}",
                            '-241px',
                            '259px'
                        ],
                        [
                            "eid57",
                            "opacity",
                            0,
                            1750,
                            "linear",
                            "${Image4}",
                            '0.08',
                            '1'
                        ],
                        [
                            "eid79",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Image6}",
                            '822px',
                            '839px'
                        ],
                        [
                            "eid80",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Image6}",
                            '839px',
                            '839px'
                        ],
                        [
                            "eid39",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Image2}",
                            '-92px',
                            '181px'
                        ],
                        [
                            "eid78",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${Image6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "height",
                            0,
                            1000,
                            "linear",
                            "${Image2}",
                            '10px',
                            '67px'
                        ],
                        [
                            "eid50",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Image3}",
                            '0px',
                            '251px'
                        ],
                        [
                            "eid20",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${Image}",
                            '0px',
                            '81px'
                        ],
                        [
                            "eid40",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Image2}",
                            '360px',
                            '430px'
                        ],
                        [
                            "eid54",
                            "height",
                            0,
                            1000,
                            "linear",
                            "${Image3}",
                            '8px',
                            '70px'
                        ],
                        [
                            "eid16",
                            "left",
                            0,
                            837,
                            "easeInSine",
                            "${Image}",
                            '515px',
                            '434px'
                        ],
                        [
                            "eid33",
                            "width",
                            0,
                            750,
                            "linear",
                            "${Image5}",
                            '8px',
                            '110px'
                        ],
                        [
                            "eid24",
                            "opacity",
                            0,
                            837,
                            "linear",
                            "${Image}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            750,
                            "linear",
                            "${Image5}",
                            '748px',
                            '354px'
                        ],
                        [
                            "eid17",
                            "top",
                            0,
                            837,
                            "easeInSine",
                            "${Image}",
                            '-163px',
                            '133px'
                        ],
                        [
                            "eid30",
                            "left",
                            0,
                            750,
                            "linear",
                            "${Image5}",
                            '837px',
                            '398px'
                        ],
                        [
                            "eid53",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${Image3}",
                            '8px',
                            '70px'
                        ],
                        [
                            "eid34",
                            "height",
                            0,
                            750,
                            "linear",
                            "${Image5}",
                            '8px',
                            '110px'
                        ],
                        [
                            "eid21",
                            "height",
                            0,
                            1000,
                            "linear",
                            "${Image}",
                            '0px',
                            '81px'
                        ],
                        [
                            "eid43",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${Image2}",
                            '10px',
                            '67px'
                        ],
                        [
                            "eid49",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Image3}",
                            '-102px',
                            '159px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
})("EDGE-20493892");

(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // 常用的 Edge 类别名

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("u262_img");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-20493892");