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
                            id: 'Image2',
                            type: 'image',
                            rect: ['205px', '158px', '413px', '434px', 'auto', 'auto'],
                            opacity: '0.28',
                            fill: ["rgba(0,0,0,0)",im+"%E5%9C%88%20@2x.png",'0px','0px']
                        },
                        {
                            id: 'Image',
                            type: 'image',
                            rect: ['228px', '-113px', '76px', '76px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E4%B9%A6@2x.png",'0px','0px']
                        },
                        {
                            id: '_tu',
                            type: 'image',
                            rect: ['322px', '238px', '180px', '226px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E6%89%8B%E6%9C%BAtu@2x.png",'0px','0px'],
                            transform: [[],['-6']]
                        },
                        {
                            id: 'Image3',
                            type: 'image',
                            rect: ['892px', '766px', '0px', '0px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E7%93%B6%E5%AD%90@2x.png",'0px','0px']
                        },
                        {
                            id: 'Image4',
                            type: 'image',
                            rect: ['177px', '255px', '20px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E5%8C%85@2x.png",'0px','0px']
                        },
                        {
                            id: 'Image5',
                            type: 'image',
                            rect: ['839px', '-224px', '358px', '149px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"%E6%89%8B%E6%9C%BA@2x.png",'0px','0px']
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
                    duration: 2750,
                    autoPlay: true,
                    data: [
                        [
                            "eid57",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Image5}",
                            '839px',
                            '839px'
                        ],
                        [
                            "eid55",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Image5}",
                            '839px',
                            '839px'
                        ],
                        [
                            "eid30",
                            "width",
                            500,
                            585,
                            "linear",
                            "${Image3}",
                            '0px',
                            '43px'
                        ],
                        [
                            "eid62",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${Image5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "height",
                            500,
                            585,
                            "linear",
                            "${Image3}",
                            '0px',
                            '43px'
                        ],
                        [
                            "eid3",
                            "left",
                            500,
                            250,
                            "linear",
                            "${Image}",
                            '228px',
                            '220px'
                        ],
                        [
                            "eid5",
                            "left",
                            750,
                            192,
                            "linear",
                            "${Image}",
                            '220px',
                            '308px'
                        ],
                        [
                            "eid20",
                            "width",
                            500,
                            750,
                            "swing",
                            "${Image4}",
                            '20px',
                            '65px'
                        ],
                        [
                            "eid59",
                            "top",
                            0,
                            750,
                            "easeInCirc",
                            "${Image5}",
                            '-224px',
                            '276px'
                        ],
                        [
                            "eid41",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${_tu}",
                            '-6deg',
                            '0deg'
                        ],
                        [
                            "eid43",
                            "rotateZ",
                            250,
                            250,
                            "linear",
                            "${_tu}",
                            '0deg',
                            '6deg'
                        ],
                        [
                            "eid45",
                            "rotateZ",
                            500,
                            250,
                            "linear",
                            "${_tu}",
                            '6deg',
                            '0deg'
                        ],
                        [
                            "eid46",
                            "rotateZ",
                            750,
                            250,
                            "linear",
                            "${_tu}",
                            '-6deg',
                            '0deg'
                        ],
                        [
                            "eid47",
                            "rotateZ",
                            1000,
                            250,
                            "linear",
                            "${_tu}",
                            '0deg',
                            '6deg'
                        ],
                        [
                            "eid48",
                            "rotateZ",
                            1250,
                            250,
                            "linear",
                            "${_tu}",
                            '6deg',
                            '0deg'
                        ],
                        [
                            "eid50",
                            "rotateZ",
                            1500,
                            250,
                            "linear",
                            "${_tu}",
                            '0deg',
                            '6deg'
                        ],
                        [
                            "eid51",
                            "rotateZ",
                            1750,
                            250,
                            "linear",
                            "${_tu}",
                            '6deg',
                            '0deg'
                        ],
                        [
                            "eid52",
                            "rotateZ",
                            2000,
                            250,
                            "linear",
                            "${_tu}",
                            '-6deg',
                            '0deg'
                        ],
                        [
                            "eid53",
                            "rotateZ",
                            2250,
                            250,
                            "linear",
                            "${_tu}",
                            '0deg',
                            '6deg'
                        ],
                        [
                            "eid54",
                            "rotateZ",
                            2500,
                            250,
                            "linear",
                            "${_tu}",
                            '6deg',
                            '0deg'
                        ],
                        [
                            "eid4",
                            "top",
                            500,
                            250,
                            "linear",
                            "${Image}",
                            '-113px',
                            '0px'
                        ],
                        [
                            "eid6",
                            "top",
                            750,
                            192,
                            "linear",
                            "${Image}",
                            '0px',
                            '128px'
                        ],
                        [
                            "eid34",
                            "opacity",
                            500,
                            1200,
                            "linear",
                            "${Image2}",
                            '0.28',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            1700,
                            0,
                            "linear",
                            "${Image2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid26",
                            "left",
                            500,
                            585,
                            "linear",
                            "${Image3}",
                            '892px',
                            '527px'
                        ],
                        [
                            "eid27",
                            "top",
                            500,
                            585,
                            "linear",
                            "${Image3}",
                            '766px',
                            '435px'
                        ],
                        [
                            "eid18",
                            "left",
                            500,
                            750,
                            "swing",
                            "${Image4}",
                            '-150px',
                            '177px'
                        ],
                        [
                            "eid21",
                            "height",
                            500,
                            750,
                            "swing",
                            "${Image4}",
                            '20px',
                            '65px'
                        ],
                        [
                            "eid19",
                            "top",
                            500,
                            750,
                            "swing",
                            "${Image4}",
                            '255px',
                            '386px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
})("EDGE-15184763");
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // 常用的 Edge 类别名

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         

      });
      //Edge binding end

   })("u244_img");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-15184763");
