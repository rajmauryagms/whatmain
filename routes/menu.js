function _0x2b5c(_0x27a994,_0x4ea348){var _0x4956dc=_0x4956();return _0x2b5c=function(_0x2b5c69,_0x5d599e){_0x2b5c69=_0x2b5c69-0x165;var _0x2262d4=_0x4956dc[_0x2b5c69];return _0x2262d4;},_0x2b5c(_0x27a994,_0x4ea348);}var _0x3e53ba=_0x2b5c;(function(_0x1443b9,_0x1b51c3){var _0x9acd0d=_0x2b5c,_0x60b62=_0x1443b9();while(!![]){try{var _0x2c0666=-parseInt(_0x9acd0d(0x16e))/0x1+parseInt(_0x9acd0d(0x170))/0x2+-parseInt(_0x9acd0d(0x188))/0x3*(parseInt(_0x9acd0d(0x18f))/0x4)+-parseInt(_0x9acd0d(0x18a))/0x5*(-parseInt(_0x9acd0d(0x183))/0x6)+parseInt(_0x9acd0d(0x182))/0x7+-parseInt(_0x9acd0d(0x17b))/0x8+-parseInt(_0x9acd0d(0x16f))/0x9*(-parseInt(_0x9acd0d(0x16d))/0xa);if(_0x2c0666===_0x1b51c3)break;else _0x60b62['push'](_0x60b62['shift']());}catch(_0x3a2dad){_0x60b62['push'](_0x60b62['shift']());}}}(_0x4956,0xe5099));var express=require('express'),router=express[_0x3e53ba(0x16a)](),Auth_mdw=require(_0x3e53ba(0x166)),knex=require('../database');const {Validator}=require(_0x3e53ba(0x18d));function _0x4956(){var _0xfc366f=['11705580PkqLSZ','1607jCwqjS','9ExtoRV','2676406ZyHisN','required','update','select','backend/menu','get','/delete-menu/:id','icons','urutan','link','/data-menu','13575896frvVuW','name','asc','insert','from','show','status','3082555hKWzui','1582128LpLRgJ','/add-menu','commit','params','/update-menu','3yclMUN','tbl_menu','20ahjOZV','json','transaction','node-input-validator','desc','5468588ETxKfL','orderBy','where','del','log','exports','check','render','catch','errors','../middlewares/auth','body','transacting','check_login','Router','then','rollback'];_0x4956=function(){return _0xfc366f;};return _0x4956();}var bcrypt=require('bcrypt');router[_0x3e53ba(0x175)]('/',Auth_mdw[_0x3e53ba(0x169)],function(_0x1ed279,_0x3effea,_0xf37cc8){var _0x2ce0c0=_0x3e53ba;_0x3effea[_0x2ce0c0(0x196)](_0x2ce0c0(0x174));}),router['post'](_0x3e53ba(0x184),function(_0x54f95e,_0x57075f,_0x858c24){var _0x5528b8=_0x3e53ba;const _0x3f1944=new Validator(_0x54f95e['body'],{'link':'required','name':'required','icons':_0x5528b8(0x171),'status':_0x5528b8(0x171),'show':_0x5528b8(0x171),'urutan':_0x5528b8(0x171)});_0x3f1944[_0x5528b8(0x195)]()[_0x5528b8(0x16b)](_0x1cf612=>{var _0x37f189=_0x5528b8;if(!_0x1cf612)_0x57075f['json']({'errors':[_0x3f1944['errors']]});else{let _0x178b2e=[{'link':_0x54f95e[_0x37f189(0x167)][_0x37f189(0x179)],'name':_0x54f95e[_0x37f189(0x167)]['name'],'icons':_0x54f95e[_0x37f189(0x167)][_0x37f189(0x177)],'status':_0x54f95e['body'][_0x37f189(0x181)],'show':_0x54f95e['body'][_0x37f189(0x180)],'urutan':_0x54f95e['body'][_0x37f189(0x178)]}];console['log'](_0x178b2e),knex['transaction'](function(_0x5116cb){var _0x3ae8a1=_0x37f189;knex('tbl_menu')[_0x3ae8a1(0x168)](_0x5116cb)[_0x3ae8a1(0x17e)](_0x178b2e)['then']()[_0x3ae8a1(0x16b)](_0x5116cb['commit'])[_0x3ae8a1(0x197)](_0x5116cb[_0x3ae8a1(0x16c)]);})[_0x37f189(0x16b)](function(_0x1ba5aa){_0x57075f['status'](0xc8)['json']({'status':!![],'message':_0x1ba5aa});})['catch'](function(_0x51a45c){var _0x4c435c=_0x37f189;_0x57075f[_0x4c435c(0x181)](0x1f4)['json']({'status':0x1f4,'message':_0x51a45c});});}});}),router[_0x3e53ba(0x175)]('/edit-menu/:id',function(_0x38cf8a,_0x210816,_0x172c8f){var _0x3a6628=_0x3e53ba;console[_0x3a6628(0x193)](_0x38cf8a['params']['id']),knex[_0x3a6628(0x18c)](function(_0xd96f4d){var _0x20c2d0=_0x3a6628;knex(_0x20c2d0(0x189))['where']({'id':_0x38cf8a['params']['id']})[_0x20c2d0(0x190)]('urutan',_0x20c2d0(0x18e))[_0x20c2d0(0x173)]('*')['then']()[_0x20c2d0(0x16b)](_0xd96f4d['commit'])[_0x20c2d0(0x197)](_0xd96f4d[_0x20c2d0(0x16c)]);})[_0x3a6628(0x16b)](function(_0x4b1aee){var _0x1c386a=_0x3a6628;_0x210816[_0x1c386a(0x181)](0xc8)[_0x1c386a(0x18b)]({'status':0xc8,'data':_0x4b1aee});});}),router[_0x3e53ba(0x175)](_0x3e53ba(0x17a),function(_0x49d981,_0xf1a83d,_0x58ccfa){return new Promise(function(_0x23e2a1,_0x5ae465){var _0x175e25=_0x2b5c;knex[_0x175e25(0x173)]()[_0x175e25(0x17f)](_0x175e25(0x189))[_0x175e25(0x190)]('urutan',_0x175e25(0x17d))['then'](_0xd5f066=>{var _0x521b97=_0x175e25;_0x23e2a1(_0xf1a83d[_0x521b97(0x18b)]({'data':_0xd5f066}));})['catch'](_0x26e42f=>_0x5ae465(_0x26e42f));});}),router['post'](_0x3e53ba(0x187),function(_0x9147da,_0x5837a8,_0xf67754){var _0x45f0dd=_0x3e53ba;const _0x119680=new Validator(_0x9147da[_0x45f0dd(0x167)],{'link':_0x45f0dd(0x171),'name':_0x45f0dd(0x171),'icons':'required','status':_0x45f0dd(0x171),'show':_0x45f0dd(0x171),'urutan':_0x45f0dd(0x171)});_0x119680[_0x45f0dd(0x195)]()[_0x45f0dd(0x16b)](_0x2b3454=>{var _0x5c4bca=_0x45f0dd;if(!_0x2b3454)_0x5837a8[_0x5c4bca(0x18b)]({'warning':[_0x119680[_0x5c4bca(0x165)]]});else{let _0x26b5d1=_0x9147da['body']['id'];console[_0x5c4bca(0x193)](_0x26b5d1),knex[_0x5c4bca(0x18c)](function(_0x3749aa){var _0xe68c51=_0x5c4bca;knex('tbl_menu')[_0xe68c51(0x168)](_0x3749aa)[_0xe68c51(0x172)]({'link':_0x9147da[_0xe68c51(0x167)][_0xe68c51(0x179)],'name':_0x9147da[_0xe68c51(0x167)][_0xe68c51(0x17c)],'icons':_0x9147da[_0xe68c51(0x167)][_0xe68c51(0x177)],'status':_0x9147da['body'][_0xe68c51(0x181)],'show':_0x9147da[_0xe68c51(0x167)][_0xe68c51(0x180)],'urutan':_0x9147da[_0xe68c51(0x167)][_0xe68c51(0x178)]})['where']('id',_0x26b5d1)[_0xe68c51(0x16b)]()[_0xe68c51(0x16b)](_0x3749aa['commit'])[_0xe68c51(0x197)](_0x3749aa['rollback']);})[_0x5c4bca(0x16b)](function(_0x27f4ab){var _0x342d02=_0x5c4bca;_0x5837a8[_0x342d02(0x181)](0xc8)['json']({'status':!![],'message':_0x27f4ab});})[_0x5c4bca(0x197)](function(_0x134d98){var _0x1f9daa=_0x5c4bca;_0x5837a8[_0x1f9daa(0x18b)](_0x134d98);});}});}),router[_0x3e53ba(0x175)](_0x3e53ba(0x176),function(_0x4fea67,_0x35a681,_0x59319e){var _0x57b1b3=_0x3e53ba;console['log'](_0x4fea67[_0x57b1b3(0x186)]['id']),knex[_0x57b1b3(0x18c)](function(_0x18de3d){var _0x401842=_0x57b1b3;knex(_0x401842(0x189))[_0x401842(0x191)]({'id':_0x4fea67[_0x401842(0x186)]['id']})[_0x401842(0x192)]()[_0x401842(0x16b)]()[_0x401842(0x16b)](_0x18de3d[_0x401842(0x185)])[_0x401842(0x197)](_0x18de3d[_0x401842(0x16c)]);})['then'](function(_0x1d721c){_0x35a681['json']({'success':!![],'message':_0x1d721c});})[_0x57b1b3(0x197)](function(_0x130e10){console['error'](_0x130e10);});}),module[_0x3e53ba(0x194)]=router;