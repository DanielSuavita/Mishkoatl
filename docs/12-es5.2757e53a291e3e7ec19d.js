!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function o(t,o,e){return o&&n(t.prototype,o),e&&n(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{a1ig:function(n,e,i){"use strict";i.r(e),i.d(e,"ProductsPageModule",(function(){return z}));var c,r,u=i("ofXK"),s=i("3Pt+"),a=i("TEn/"),b=i("tyNb"),d=i("fXoL"),f=i("tk/3"),p=((c=function(){function n(o){t(this,n),this.HttpClient=o}return o(n,[{key:"getProducts",value:function(t){return this.HttpClient.get("/assets/static/".concat(t,".json"))}}]),n}()).\u0275fac=function(t){return new(t||c)(d.Nb(f.a))},c.\u0275prov=d.Db({token:c,factory:c.\u0275fac,providedIn:"root"}),c),l=i("2MiI"),h=((r=function(){function n(){t(this,n),this.Product=[]}return o(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=d.Bb({type:r,selectors:[["app-product"]],inputs:{Product:"Product"},decls:11,vars:3,consts:[["alt","",1,"Product-img",3,"src"],["color","primary","expand","block"],["name","logo-whatsapp"]],template:function(t,n){1&t&&(d.Kb(0,"ion-card"),d.Kb(1,"ion-card-header"),d.Kb(2,"ion-card-title"),d.ac(3),d.Jb(),d.Kb(4,"ion-card-subtitle"),d.ac(5),d.Jb(),d.Jb(),d.Kb(6,"ion-card-content"),d.Ib(7,"img",0),d.Jb(),d.Kb(8,"ion-button",1),d.Ib(9,"ion-icon",2),d.ac(10," Comprar "),d.Jb(),d.Jb()),2&t&&(d.xb(3),d.bc(n.Product.name),d.xb(2),d.cc("",n.Product.price," MXN"),d.xb(2),d.Vb("src",n.Product.img,d.Xb))},directives:[a.f,a.h,a.j,a.i,a.g,a.d,a.o],styles:[""]}),r);function P(t,n){if(1&t&&(d.Kb(0,"ion-col",2),d.Ib(1,"app-product",3),d.Jb()),2&t){var o=n.$implicit;d.xb(1),d.Vb("Product",o)}}var m,v,g,y,w,k=((m=function(){function n(){t(this,n),this.Products=[]}return o(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(t){return new(t||m)},m.\u0275cmp=d.Bb({type:m,selectors:[["app-container-product"]],inputs:{Products:"Products"},decls:3,vars:1,consts:[["fixed",""],["size","12","size-lg","3","size-md","6","size-sm","6",4,"ngFor","ngForOf"],["size","12","size-lg","3","size-md","6","size-sm","6"],[3,"Product"]],template:function(t,n){1&t&&(d.Kb(0,"ion-grid",0),d.Kb(1,"ion-row"),d.Zb(2,P,2,1,"ion-col",1),d.Jb(),d.Jb()),2&t&&(d.xb(2),d.Vb("ngForOf",n.Products))},directives:[a.m,a.x,u.h,a.k,h],styles:[""]}),m),J=[{path:"",component:(v=function(){function n(o,e){t(this,n),this.ActivatedRoute=o,this.ProductService=e,this.Products=[]}return o(n,[{key:"ngOnInit",value:function(){this.getPath(),this.getProducts()}},{key:"getPath",value:function(){var t=this;this.ActivatedRoute.params.subscribe((function(n){var o=n.product;t.Path=o}))}},{key:"getProducts",value:function(){var t=this;this.ProductService.getProducts(this.Path.toLocaleLowerCase()).subscribe((function(n){t.Products=n}))}}]),n}(),v.\u0275fac=function(t){return new(t||v)(d.Hb(b.a),d.Hb(p))},v.\u0275cmp=d.Bb({type:v,selectors:[["app-products"]],decls:3,vars:1,consts:[[3,"Products"]],template:function(t,n){1&t&&(d.Ib(0,"app-header"),d.Kb(1,"ion-content"),d.Ib(2,"app-container-product",0),d.Jb()),2&t&&(d.xb(2),d.Vb("Products",n.Products))},directives:[l.a,a.l,k],styles:[""]}),v)}],K=((g=function n(){t(this,n)}).\u0275mod=d.Fb({type:g}),g.\u0275inj=d.Eb({factory:function(t){return new(t||g)},imports:[[b.i.forChild(J)],b.i]}),g),I=i("j1ZV"),x=((w=function n(){t(this,n)}).\u0275mod=d.Fb({type:w}),w.\u0275inj=d.Eb({factory:function(t){return new(t||w)},imports:[[u.b,a.A,I.a]]}),w),z=((y=function n(){t(this,n)}).\u0275mod=d.Fb({type:y}),y.\u0275inj=d.Eb({factory:function(t){return new(t||y)},imports:[[u.b,s.a,a.A,K,I.a,x]]}),y)}}])}();