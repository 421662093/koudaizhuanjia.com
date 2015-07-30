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
                            id: '_31x',
                            type: 'image',
                            rect: ['156px', '163px', '439px', '281px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E5%9C%883%401x@2x.png",'0px','0px']
                        },
                        {
                            id: '_21x',
                            type: 'image',
                            rect: ['300px', '103px', '341px', '247px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"%E5%9C%882%401x@2x.png",'0px','0px']
                        },
                        {
                            id: '_11x',
                            type: 'image',
                            rect: ['166px', '356px', '186px', '260px', 'auto', 'auto'],
                            opacity: '0.2',
                            fill: ["rgba(0,0,0,0)",im+"%E5%9C%881%401x@2x.png",'0px','0px']
                        },
                        {
                            id: '_1x',
                            type: 'image',
                            rect: ['414px', '502px', '122px', '38px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"%E5%9C%88%401x@2x.png",'0px','0px']
                        },
                        {
                            id: '_1x2',
                            type: 'image',
                            rect: ['276px', '278px', '209px', '208px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E6%94%BE%E5%A4%A7%E5%A2%83%401x@2x.png",'0px','0px']
                        },
                        {
                            id: '_1x3',
                            type: 'image',
                            rect: ['204px', '197px', '127px', '103px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"%E5%AF%B9%E8%AF%9D%401x@2x.png",'0px','0px']
                        },
                        {
                            id: '_1x32',
                            type: 'image',
                            rect: ['841px', '-248px', '475px', '149px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"%E5%B7%A5%E4%BD%9C%401x3@2x.png",'0px','0px']
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
                            "eid60",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${_1x3}",
                            '197px',
                            '197px'
                        ],
                        [
                            "eid69",
                            "left",
                            0,
                            0,
                            "linear",
                            "${_1x32}",
                            '841px',
                            '839px'
                        ],
                        [
                            "eid70",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${_1x32}",
                            '839px',
                            '839px'
                        ],
                        [
                            "eid34",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${_21x}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${_21x}",
                            '103px',
                            '103px'
                        ],
                        [
                            "eid28",
                            "opacity",
                            0,
                            390,
                            "linear",
                            "${_1x}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid59",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${_1x3}",
                            '204px',
                            '204px'
                        ],
                        [
                            "eid55",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${_11x}",
                            '166px',
                            '166px'
                        ],
                        [
                            "eid54",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${_1x}",
                            '502px',
                            '502px'
                        ],
                        [
                            "eid56",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${_11x}",
                            '356px',
                            '356px'
                        ],
                        [
                            "eid51",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${_31x}",
                            '156px',
                            '156px'
                        ],
                        [
                            "eid10",
                            "top",
                            0,
                            390,
                            "linear",
                            "${_1x2}",
                            '271px',
                            '290px'
                        ],
                        [
                            "eid14",
                            "top",
                            390,
                            521,
                            "easeInQuad",
                            "${_1x2}",
                            '290px',
                            '282px'
                        ],
                        [
                            "eid18",
                            "top",
                            911,
                            495,
                            "easeInQuad",
                            "${_1x2}",
                            '282px',
                            '290px'
                        ],
                        [
                            "eid22",
                            "top",
                            1405,
                            595,
                            "easeInQuad",
                            "${_1x2}",
                            '290px',
                            '278px'
                        ],
                        [
                            "eid52",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${_31x}",
                            '163px',
                            '163px'
                        ],
                        [
                            "eid53",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${_1x}",
                            '414px',
                            '414px'
                        ],
                        [
                            "eid57",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${_21x}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid67",
                            "top",
                            0,
                            750,
                            "easeInCirc",
                            "${_1x32}",
                            '-225px',
                            '275px'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            390,
                            "linear",
                            "${_1x2}",
                            '279px',
                            '286px'
                        ],
                        [
                            "eid13",
                            "left",
                            390,
                            521,
                            "easeInQuad",
                            "${_1x2}",
                            '286px',
                            '307px'
                        ],
                        [
                            "eid17",
                            "left",
                            911,
                            495,
                            "easeInQuad",
                            "${_1x2}",
                            '307px',
                            '286px'
                        ],
                        [
                            "eid21",
                            "left",
                            1405,
                            595,
                            "easeInQuad",
                            "${_1x2}",
                            '286px',
                            '276px'
                        ],
                        [
                            "eid31",
                            "opacity",
                            0,
                            1250,
                            "linear",
                            "${_1x3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid68",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${_1x32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${_11x}",
                            '0.2',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

})("EDGE-3590805");


(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // 常用的 Edge 类别名

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("u219_img");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-3590805");