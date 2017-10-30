/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './header.component.scss.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../node_modules/@angular/material/core/typings/index.ngfactory';
import * as i3 from '@angular/material/core';
import * as i4 from '@angular/flex-layout';
import * as i5 from './header.component';
import * as i6 from '../../node_modules/@angular/material/select/typings/index.ngfactory';
import * as i7 from '@angular/material/form-field';
import * as i8 from '@angular/material/select';
import * as i9 from '@angular/forms';
import * as i10 from '@angular/cdk/scrolling';
import * as i11 from '@angular/cdk/bidi';
import * as i12 from '@angular/common';
import * as i13 from './menu/menu.component.ngfactory';
import * as i14 from './menu/menu.component';
import * as i15 from '@ngrx/store';
import * as i16 from '../nav-service/nav-service';
import * as i17 from '@angular/router';
import * as i18 from '@angular/common/http';
import * as i19 from '@ngx-translate/core/src/translate.service';
import * as i20 from '../../globals/globals';
const styles_HeaderComponent:any[] = [i0.styles];
export const RenderType_HeaderComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_HeaderComponent,data:{}});
function View_HeaderComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),3,'mat-option',
      [['class','mat-option'],['role','option']],[[1,'tabindex',0],[2,'mat-selected',
          (null as any)],[2,'mat-option-multiple',(null as any)],[2,'mat-active',(null as any)],
          [8,'id',0],[1,'aria-selected',0],[1,'aria-disabled',0],[2,'mat-option-disabled',
              (null as any)]],[[(null as any),'click'],[(null as any),'keydown']],
      (_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,2)._selectViaInteraction()) !== false);
          ad = (pd_0 && ad);
        }
        if (('keydown' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,2)._handleKeydown($event)) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },i2.View_MatOption_0,i2.RenderType_MatOption)),i1.ɵdid(1,16384,(null as any),
      0,i3.MatPrefixRejector,([] as any[]),(null as any),(null as any)),i1.ɵdid(2,
      49152,[[1,4]],0,i3.MatOption,[i1.ElementRef,i1.ChangeDetectorRef,[2,i3.MatOptgroup]],
      {value:[0,'value']},(null as any)),(_l()(),i1.ɵted(3,0,['\n				        ','\n				    ']))],
      (_ck,_v) => {
        const currVal_8:any = _v.context.$implicit.code;
        _ck(_v,2,0,currVal_8);
      },(_ck,_v) => {
        const currVal_0:any = i1.ɵnov(_v,2)._getTabIndex();
        const currVal_1:any = i1.ɵnov(_v,2).selected;
        const currVal_2:any = i1.ɵnov(_v,2).multiple;
        const currVal_3:any = i1.ɵnov(_v,2).active;
        const currVal_4:any = i1.ɵnov(_v,2).id;
        const currVal_5:any = i1.ɵnov(_v,2).selected.toString();
        const currVal_6:any = i1.ɵnov(_v,2).disabled.toString();
        const currVal_7:any = i1.ɵnov(_v,2).disabled;
        _ck(_v,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,
            currVal_7);
        const currVal_9:any = _v.context.$implicit.code;
        _ck(_v,3,0,currVal_9);
      });
}
export function View_HeaderComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),72,'header',[['class',
      'header']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(1,999424,(null as any),0,i4.ClassDirective,[i4.MediaMonitor,i1.ElementRef,
          i1.Renderer2,i1.Renderer,i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],
          {classBase:[0,'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n	'])),(_l()(),i1.ɵeld(3,0,(null as any),(null as any),68,'div',[['class',
          'wrap']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(4,999424,(null as any),0,i4.ClassDirective,[i4.MediaMonitor,i1.ElementRef,
          i1.Renderer2,i1.Renderer,i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],
          {classBase:[0,'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n		'])),(_l()(),i1.ɵeld(6,0,(null as any),(null as any),34,'nav',[['class',
          'nav']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(7,999424,(null as any),0,i4.ClassDirective,[i4.MediaMonitor,i1.ElementRef,
          i1.Renderer2,i1.Renderer,i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],
          {classBase:[0,'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n			'])),(_l()(),i1.ɵeld(9,0,(null as any),(null as any),6,'div',[['class',
          'nav-item']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(10,999424,(null as any),0,i4.ClassDirective,[i4.MediaMonitor,i1.ElementRef,
          i1.Renderer2,i1.Renderer,i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],
          {classBase:[0,'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n				'])),(_l()(),i1.ɵeld(12,0,(null as any),(null as any),2,'a',[['class',
          'nav-link'],['href','javascript:void(0);']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),i1.ɵdid(13,999424,(null as any),
          0,i4.ClassDirective,[i4.MediaMonitor,i1.ElementRef,i1.Renderer2,i1.Renderer,
              i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],{classBase:[0,
              'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['О нас'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n			'])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n			'])),(_l()(),i1.ɵeld(17,0,(null as any),(null as any),6,'div',[['class',
          'nav-item']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(18,999424,(null as any),0,i4.ClassDirective,[i4.MediaMonitor,i1.ElementRef,
          i1.Renderer2,i1.Renderer,i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],
          {classBase:[0,'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n				'])),(_l()(),i1.ɵeld(20,0,(null as any),(null as any),2,'a',[['class',
          'nav-link'],['href','javascript:void(0);']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),i1.ɵdid(21,999424,(null as any),
          0,i4.ClassDirective,[i4.MediaMonitor,i1.ElementRef,i1.Renderer2,i1.Renderer,
              i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],{classBase:[0,
              'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['Помощь'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n			'])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n			'])),(_l()(),i1.ɵeld(25,0,(null as any),(null as any),6,'div',[['class',
          'nav-item']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(26,999424,(null as any),0,i4.ClassDirective,[i4.MediaMonitor,i1.ElementRef,
          i1.Renderer2,i1.Renderer,i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],
          {classBase:[0,'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n				'])),(_l()(),i1.ɵeld(28,0,(null as any),(null as any),2,'a',[['class',
          'nav-link'],['href','javascript:void(0);']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),i1.ɵdid(29,999424,(null as any),
          0,i4.ClassDirective,[i4.MediaMonitor,i1.ElementRef,i1.Renderer2,i1.Renderer,
              i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],{classBase:[0,
              'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['Блог'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n			'])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n			'])),(_l()(),i1.ɵeld(33,0,(null as any),(null as any),6,'div',[['class',
          'nav-item']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(34,999424,(null as any),0,i4.ClassDirective,[i4.MediaMonitor,i1.ElementRef,
          i1.Renderer2,i1.Renderer,i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],
          {classBase:[0,'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n				'])),(_l()(),i1.ɵeld(36,0,(null as any),(null as any),2,'a',[['class',
          'nav-link'],['href','javascript:void(0);']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),i1.ɵdid(37,999424,(null as any),
          0,i4.ClassDirective,[i4.MediaMonitor,i1.ElementRef,i1.Renderer2,i1.Renderer,
              i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],{classBase:[0,
              'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['Контакты'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n			'])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n		'])),(_l()(),i1.ɵted(-1,(null as any),['\n		'])),(_l()(),i1.ɵeld(42,
          0,(null as any),(null as any),28,'div',[['class','header-actions']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),i1.ɵdid(43,999424,
          (null as any),0,i4.ClassDirective,[i4.MediaMonitor,i1.ElementRef,i1.Renderer2,
              i1.Renderer,i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],
          {classBase:[0,'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n			'])),(_l()(),i1.ɵeld(45,0,(null as any),(null as any),17,'div',[['class',
          'lang']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(46,999424,(null as any),0,i4.ClassDirective,[i4.MediaMonitor,i1.ElementRef,
          i1.Renderer2,i1.Renderer,i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],
          {classBase:[0,'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n				'])),(_l()(),i1.ɵeld(48,0,(null as any),(null as any),13,'mat-select',
          [['class','mat-select'],['role','listbox']],[[2,'ng-untouched',(null as any)],
              [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
                  (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
              [2,'ng-pending',(null as any)],[1,'id',0],[1,'tabindex',0],[1,'aria-label',
                  0],[1,'aria-labelledby',0],[1,'aria-required',0],[1,'aria-disabled',
                  0],[1,'aria-invalid',0],[1,'aria-owns',0],[1,'aria-multiselectable',
                  0],[1,'aria-describedby',0],[1,'aria-activedescendant',0],[2,'mat-select-disabled',
                  (null as any)],[2,'mat-select-invalid',(null as any)],[2,'mat-select-required',
                  (null as any)]],[[(null as any),'change'],[(null as any),'ngModelChange'],
              [(null as any),'keydown'],[(null as any),'focus'],[(null as any),'blur']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i5.HeaderComponent = _v.component;
            if (('keydown' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,54)._handleKeydown($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('focus' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,54)._onFocus()) !== false);
              ad = (pd_1 && ad);
            }
            if (('blur' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,54)._onBlur()) !== false);
              ad = (pd_2 && ad);
            }
            if (('change' === en)) {
              const pd_3:any = ((<any>_co.setCurrentLanguage(_co.currentLang)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_4:any = ((<any>(_co.currentLang = $event)) !== false);
              ad = (pd_4 && ad);
            }
            return ad;
          },i6.View_MatSelect_0,i6.RenderType_MatSelect)),i1.ɵprd(6144,(null as any),
          i7.MatFormFieldControl,(null as any),[i8.MatSelect]),i1.ɵdid(50,671744,(null as any),
          0,i9.NgModel,[[8,(null as any)],[8,(null as any)],[8,(null as any)],[8,(null as any)]],
          {model:[0,'model']},{update:'ngModelChange'}),i1.ɵprd(2048,(null as any),
          i9.NgControl,(null as any),[i9.NgModel]),i1.ɵdid(52,16384,(null as any),
          0,i9.NgControlStatus,[i9.NgControl],(null as any),(null as any)),i1.ɵdid(53,
          16384,(null as any),0,i3.MatPrefixRejector,([] as any[]),(null as any),(null as any)),
      i1.ɵdid(54,1294336,(null as any),3,i8.MatSelect,[i10.ViewportRuler,i1.ChangeDetectorRef,
          i1.NgZone,i3.ErrorStateMatcher,i1.Renderer2,i1.ElementRef,[2,i11.Directionality],
          [2,i9.NgForm],[2,i9.FormGroupDirective],[2,i7.MatFormField],[2,i9.NgControl],
          [8,(null as any)],i8.MAT_SELECT_SCROLL_STRATEGY],(null as any),{change:'change'}),
      i1.ɵqud(603979776,1,{options:1}),i1.ɵqud(603979776,2,{optionGroups:1}),i1.ɵqud(335544320,
          3,{customTrigger:0}),(_l()(),i1.ɵted(-1,1,['\n				    '])),(_l()(),i1.ɵand(16777216,
          (null as any),1,1,(null as any),View_HeaderComponent_1)),i1.ɵdid(60,802816,
          (null as any),0,i12.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,1,['\n				'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n			'])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n			'])),(_l()(),i1.ɵeld(64,0,(null as any),(null as any),5,'div',[['class',
          'admin-nav']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(65,999424,(null as any),0,i4.ClassDirective,[i4.MediaMonitor,i1.ElementRef,
          i1.Renderer2,i1.Renderer,i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],
          {classBase:[0,'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n				'])),(_l()(),i1.ɵeld(67,0,(null as any),(null as any),1,'app-menu',
          ([] as any[]),(null as any),(null as any),(null as any),i13.View_MenuComponent_0,
          i13.RenderType_MenuComponent)),i1.ɵdid(68,4440064,(null as any),0,i14.MenuComponent,
          [i15.Store,i16.NavigationService,i17.Router],(null as any),(null as any)),
      (_l()(),i1.ɵted(-1,(null as any),['\n			'])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n		'])),(_l()(),i1.ɵted(-1,(null as any),['\n	'])),(_l()(),i1.ɵted(-1,
          (null as any),['\n'])),(_l()(),i1.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:i5.HeaderComponent = _v.component;
    const currVal_0:any = 'header';
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = 'wrap';
    _ck(_v,4,0,currVal_1);
    const currVal_2:any = 'nav';
    _ck(_v,7,0,currVal_2);
    const currVal_3:any = 'nav-item';
    _ck(_v,10,0,currVal_3);
    const currVal_4:any = 'nav-link';
    _ck(_v,13,0,currVal_4);
    const currVal_5:any = 'nav-item';
    _ck(_v,18,0,currVal_5);
    const currVal_6:any = 'nav-link';
    _ck(_v,21,0,currVal_6);
    const currVal_7:any = 'nav-item';
    _ck(_v,26,0,currVal_7);
    const currVal_8:any = 'nav-link';
    _ck(_v,29,0,currVal_8);
    const currVal_9:any = 'nav-item';
    _ck(_v,34,0,currVal_9);
    const currVal_10:any = 'nav-link';
    _ck(_v,37,0,currVal_10);
    const currVal_11:any = 'header-actions';
    _ck(_v,43,0,currVal_11);
    const currVal_12:any = 'lang';
    _ck(_v,46,0,currVal_12);
    const currVal_34:any = _co.currentLang;
    _ck(_v,50,0,currVal_34);
    _ck(_v,54,0);
    const currVal_35:any = _co.languages;
    _ck(_v,60,0,currVal_35);
    const currVal_36:any = 'admin-nav';
    _ck(_v,65,0,currVal_36);
    _ck(_v,68,0);
  },(_ck,_v) => {
    const currVal_13:any = i1.ɵnov(_v,52).ngClassUntouched;
    const currVal_14:any = i1.ɵnov(_v,52).ngClassTouched;
    const currVal_15:any = i1.ɵnov(_v,52).ngClassPristine;
    const currVal_16:any = i1.ɵnov(_v,52).ngClassDirty;
    const currVal_17:any = i1.ɵnov(_v,52).ngClassValid;
    const currVal_18:any = i1.ɵnov(_v,52).ngClassInvalid;
    const currVal_19:any = i1.ɵnov(_v,52).ngClassPending;
    const currVal_20:any = i1.ɵnov(_v,54).id;
    const currVal_21:any = i1.ɵnov(_v,54).tabIndex;
    const currVal_22:any = i1.ɵnov(_v,54)._ariaLabel;
    const currVal_23:any = i1.ɵnov(_v,54).ariaLabelledby;
    const currVal_24:any = i1.ɵnov(_v,54).required.toString();
    const currVal_25:any = i1.ɵnov(_v,54).disabled.toString();
    const currVal_26:any = i1.ɵnov(_v,54).errorState;
    const currVal_27:any = i1.ɵnov(_v,54)._optionIds;
    const currVal_28:any = i1.ɵnov(_v,54).multiple;
    const currVal_29:any = (i1.ɵnov(_v,54)._ariaDescribedby || (null as any));
    const currVal_30:any = i1.ɵnov(_v,54)._getAriaActiveDescendant();
    const currVal_31:any = i1.ɵnov(_v,54).disabled;
    const currVal_32:any = i1.ɵnov(_v,54).errorState;
    const currVal_33:any = i1.ɵnov(_v,54).required;
    _ck(_v,48,1,[currVal_13,currVal_14,currVal_15,currVal_16,currVal_17,currVal_18,
        currVal_19,currVal_20,currVal_21,currVal_22,currVal_23,currVal_24,currVal_25,
        currVal_26,currVal_27,currVal_28,currVal_29,currVal_30,currVal_31,currVal_32,
        currVal_33]);
  });
}
export function View_HeaderComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'app-header',
      ([] as any[]),(null as any),(null as any),(null as any),View_HeaderComponent_0,
      RenderType_HeaderComponent)),i1.ɵdid(1,4440064,(null as any),0,i5.HeaderComponent,
      [i15.Store,i18.HttpClient,i19.TranslateService,i17.Router,i17.ActivatedRoute,
          i20.Globals],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const HeaderComponentNgFactory:i1.ComponentFactory<i5.HeaderComponent> = i1.ɵccf('app-header',
    i5.HeaderComponent,View_HeaderComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjovUHJvZ3JhbW1pbmcvc2VjcmV0cy9jbGllbnQvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9GOi9Qcm9ncmFtbWluZy9zZWNyZXRzL2NsaWVudC9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly8vRjovUHJvZ3JhbW1pbmcvc2VjcmV0cy9jbGllbnQvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRjovUHJvZ3JhbW1pbmcvc2VjcmV0cy9jbGllbnQvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cy5IZWFkZXJDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XHJcblx0PGRpdiBjbGFzcz1cIndyYXBcIj5cclxuXHRcdDxuYXYgY2xhc3M9XCJuYXZcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cIm5hdi1saW5rXCI+0J4g0L3QsNGBPC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cIm5hdi1saW5rXCI+0J/QvtC80L7RidGMPC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cIm5hdi1saW5rXCI+0JHQu9C+0LM8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwibmF2LWxpbmtcIj7QmtC+0L3RgtCw0LrRgtGLPC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbmF2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImhlYWRlci1hY3Rpb25zXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJsYW5nXCI+XHJcblx0XHRcdFx0PG1hdC1zZWxlY3QgKGNoYW5nZSk9XCJzZXRDdXJyZW50TGFuZ3VhZ2UoY3VycmVudExhbmcpXCIgWyhuZ01vZGVsKV09XCJjdXJyZW50TGFuZ1wiPlxyXG5cdFx0XHRcdCAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbGFuZyBvZiBsYW5ndWFnZXNcIiBbdmFsdWVdPVwibGFuZy5jb2RlXCI+XHJcblx0XHRcdFx0ICAgICAgICB7e2xhbmcuY29kZX19XHJcblx0XHRcdFx0ICAgIDwvbWF0LW9wdGlvbj5cclxuXHRcdFx0XHQ8L21hdC1zZWxlY3Q+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWRtaW4tbmF2XCI+XHJcblx0XHRcdFx0PGFwcC1tZW51PjwvYXBwLW1lbnU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvaGVhZGVyPlxyXG4iLCI8YXBwLWhlYWRlcj48L2FwcC1oZWFkZXI+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ21CUTtNQUFBO1VBQUE7VUFBQTtjQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtNQUFBLHVEQUFBO01BQUEseUVBQUE7TUFBQTtNQUFBLG1DQUErRDs7UUFBcEI7UUFBM0MsV0FBMkMsU0FBM0M7O1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBLFdBQUE7WUFBQSxTQUFBO1FBQStEO1FBQUE7Ozs7b0JBbkJ2RTtNQUFBO2FBQUE7eUVB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
