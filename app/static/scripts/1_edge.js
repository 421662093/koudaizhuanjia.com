(function(compId) {

	var _ = null,
		y = true,
		n = false,
		x1 = '6.0.0',
		x2 = '5.0.0',
		x4 = 'rgba(0,0,0,0)',
		lf = 'left',
		g = 'image',
		e12 = '${_2}',
		e13 = '${_3}',
		rz = 'rotateZ',
		h = 'height',
		x10 = 'rgba(255,255,255,1)',
		tp = 'top',
		o = 'opacity',
		x3 = '6.0.0.400',
		e11 = '${Image}',
		w = 'width',
		i = 'none';
	var g6 = '3.png',
		g7 = '2.png',
		g5 = '%E5%8D%B3%E5%88%BB%E6%8A%A5%E5%90%8D.png',
		g9 = '%E5%85%BB%E6%88%90%E5%BC%8F%E7%9A%84%E5%85%B1%E4%BA%AB%E7%BB%8F%E6%B5%8E%E7%A4%BE%E4%BA%A4%E5%B9%B3%E5%8F%B0.png',
		g8 = '1%E3%80%82.png';
	var im = '/static/images/',
		aud = '/static/media/',
		vid = '/static/media/',
		js = 'js/',
		fonts = {},
		opts = {
			'gAudioPreloadPreference': 'auto',
			'gVideoPreloadPreference': 'auto'
		},
		resources = [],
		scripts = [],
		symbols = {
			"stage": {
				v: x1,
				mv: x2,
				b: x3,
				stf: w,
				cg: i,
				rI: n,
				cn: {
					dom: [{
						id: 'Image2',
						t: g,
						r: ['598px', '208px', '243px', '301px', 'auto', 'auto'],
						f: [x4, im + g5, '0px', '0px']
					}, {
						id: '_3',
						t: g,
						r: ['543px', '181px', '353px', '355px', 'auto', 'auto'],
						f: [x4, im + g6, '0px', '0px'],
						tf: [
							[],
							['-360']
						]
					}, {
						id: '_2',
						t: g,
						r: ['530px', '169px', '378px', '379px', 'auto', 'auto'],
						f: [x4, im + g7, '0px', '0px'],
						tf: [
							[],
							['360']
						]
					}, {
						id: '_1',
						t: g,
						r: ['494px', '133px', '451px', '452px', 'auto', 'auto'],
						f: [x4, im + g8, '0px', '0px']
					}, {
						id: 'Image',
						t: g,
						r: ['70px', '114px', '889px', '67px', 'auto', 'auto'],
						o: '0',
						f: [x4, im + g9, '0px', '0px'],
						filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
					}],
					style: {
						'${Stage}': {
							isStage: true,
							r: ['null', 'null', '1440px', '720px', 'auto', 'auto'],
							overflow: 'hidden',
							f: [x10]
						}
					}
				},
				tt: {
					d: 5000,
					a: y,
					data: [
						["eid27", tp, 0, 1750, "easeInCirc", e11, '114px', '325px'],
						["eid25", w, 0, 0, "linear", e11, '889px', '889px'],
						["eid21", w, 619, 0, "linear", e11, '889px', '889px'],
						["eid33", o, 0, 421, "easeInCirc", e11, '0', '0.2'],
						["eid18", o, 421, 1713, "easeInCirc", e11, '0.2', '1'],
						["eid26", h, 0, 0, "linear", e11, '67px', '67px'],
						["eid22", h, 619, 0, "linear", e11, '67px', '67px'],
						["eid28", lf, 0, 1750, "easeInCirc", e11, '70px', '275px'],
						["eid8", rz, 0, 5000, "linear", e12, '360deg', '0deg'],
						["eid11", rz, 0, 5000, "linear", e13, '-360deg', '0deg']
					]
				}
			}
		};
	AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
})("EDGE-1823814");

(function($, Edge, compId) {
	var Composition =  Edge.Composition,
		Symbol = Composition.Symbol;

	Edge.registerEventBinding(compId, function($) {
		//Edge symbol: 'stage'
		(function(symbolName) {})("u108_img");
		//Edge symbol end:'stage'
	})
})(AdobeEdge.$, AdobeEdge, "EDGE-1823814");