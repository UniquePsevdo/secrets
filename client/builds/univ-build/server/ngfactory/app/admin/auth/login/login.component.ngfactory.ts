/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './login.component.scss.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/material/core';
import * as i3 from '@angular/material/form-field';
import * as i4 from '@angular/common';
import * as i5 from '@angular/flex-layout';
import * as i6 from '@angular/forms';
import * as i7 from '../../../../node_modules/@angular/material/form-field/typings/index.ngfactory';
import * as i8 from '@angular/material/input';
import * as i9 from '@angular/cdk/platform';
import * as i10 from './login.component';
import * as i11 from '../../../../node_modules/@angular/material/button/typings/index.ngfactory';
import * as i12 from '@angular/material/button';
import * as i13 from '@angular/cdk/a11y';
import * as i14 from '../../../authentication/authentication.service';
const styles_LoginComponent:any[] = [i0.styles];
export const RenderType_LoginComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_LoginComponent,data:{}});
function View_LoginComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['This field is required']))],(null as any),(null as any));
}
function View_LoginComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['Email is invalid']))],(null as any),(null as any));
}
function View_LoginComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),9,'mat-error',
      [['class','mat-error'],['role','alert']],[[1,'id',0]],(null as any),(null as any),
      (null as any),(null as any))),i1.ɵdid(1,16384,(null as any),0,i2.MatPrefixRejector,
      ([] as any[]),(null as any),(null as any)),i1.ɵdid(2,16384,[[3,4]],0,i3.MatError,
      ([] as any[]),(null as any),(null as any)),(_l()(),i1.ɵted(-1,(null as any),
      ['\n                    '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),
      1,(null as any),View_LoginComponent_2)),i1.ɵdid(5,16384,(null as any),0,i4.NgIf,
      [i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),
      i1.ɵted(-1,(null as any),['\n                    '])),(_l()(),i1.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_LoginComponent_3)),i1.ɵdid(8,
      16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_1:any = _co.signInForm.get('email').errors.required;
        _ck(_v,5,0,currVal_1);
        const currVal_2:any = (_co.signInForm.get('email').errors.email && !_co.signInForm.get('email').errors.required);
        _ck(_v,8,0,currVal_2);
      },(_ck,_v) => {
        const currVal_0:any = i1.ɵnov(_v,2).id;
        _ck(_v,0,0,currVal_0);
      });
}
function View_LoginComponent_5(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['This field is required']))],(null as any),(null as any));
}
function View_LoginComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),6,'mat-error',
      [['class','mat-error'],['role','alert']],[[1,'id',0]],(null as any),(null as any),
      (null as any),(null as any))),i1.ɵdid(1,16384,(null as any),0,i2.MatPrefixRejector,
      ([] as any[]),(null as any),(null as any)),i1.ɵdid(2,16384,[[9,4]],0,i3.MatError,
      ([] as any[]),(null as any),(null as any)),(_l()(),i1.ɵted(-1,(null as any),
      ['\n                    '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),
      1,(null as any),View_LoginComponent_5)),i1.ɵdid(5,16384,(null as any),0,i4.NgIf,
      [i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),
      i1.ɵted(-1,(null as any),['\n                ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = _co.signInForm.get('password').errors.required;
    _ck(_v,5,0,currVal_1);
  },(_ck,_v) => {
    const currVal_0:any = i1.ɵnov(_v,2).id;
    _ck(_v,0,0,currVal_0);
  });
}
export function View_LoginComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),70,'div',[['class',
      'padding']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(1,999424,(null as any),0,i5.ClassDirective,[i5.MediaMonitor,i1.ElementRef,
          i1.Renderer2,i1.Renderer,i1.IterableDiffers,i1.KeyValueDiffers,[8,(null as any)]],
          {classBase:[0,'classBase']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i1.ɵeld(3,0,(null as any),(null as any),66,'form',[['novalidate',
          '']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,
          'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
          (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          [[(null as any),'submit'],[(null as any),'reset']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('submit' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,5).onSubmit($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,5).onReset()) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(4,16384,(null as any),0,i6.ɵbf,([] as any[]),
          (null as any),(null as any)),i1.ɵdid(5,540672,(null as any),0,i6.FormGroupDirective,
          [[8,(null as any)],[8,(null as any)]],{form:[0,'form']},(null as any)),i1.ɵprd(2048,
          (null as any),i6.ControlContainer,(null as any),[i6.FormGroupDirective]),
      i1.ɵdid(7,16384,(null as any),0,i6.NgControlStatusGroup,[i6.ControlContainer],
          (null as any),(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵeld(9,0,(null as any),(null as any),53,'div',[['fxLayout','row'],
          ['fxLayoutAlign','center center']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),i1.ɵdid(10,737280,(null as any),0,i5.LayoutDirective,
          [i5.MediaMonitor,i1.ElementRef,i1.Renderer2],{layout:[0,'layout']},(null as any)),
      i1.ɵdid(11,737280,(null as any),0,i5.LayoutAlignDirective,[i5.MediaMonitor,i1.ElementRef,
          i1.Renderer2,[2,i5.LayoutDirective]],{align:[0,'align']},(null as any)),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(13,0,(null as any),
          (null as any),23,'mat-input-container',[['class','mat-input-container mat-form-field'],
              ['fxFlex','50%'],['style','padding:0 10px 0 0']],[[2,'mat-input-invalid',
              (null as any)],[2,'mat-form-field-invalid',(null as any)],[2,'mat-form-field-can-float',
              (null as any)],[2,'mat-form-field-should-float',(null as any)],[2,'mat-focused',
              (null as any)],[2,'mat-primary',(null as any)],[2,'mat-accent',(null as any)],
              [2,'mat-warn',(null as any)],[2,'ng-untouched',(null as any)],[2,'ng-touched',
                  (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],(null as any),(null as any),i7.View_MatFormField_0,
          i7.RenderType_MatFormField)),i1.ɵdid(14,737280,(null as any),0,i5.FlexDirective,
          [i5.MediaMonitor,i1.ElementRef,i1.Renderer2,[3,i5.LayoutDirective],[3,i5.LayoutWrapDirective]],
          {flex:[0,'flex']},(null as any)),i1.ɵdid(15,16384,(null as any),0,i2.MatPrefixRejector,
          ([] as any[]),(null as any),(null as any)),i1.ɵdid(16,7389184,(null as any),
          6,i3.MatFormField,[i1.ElementRef,i1.Renderer2,i1.ChangeDetectorRef,[2,i2.MAT_PLACEHOLDER_GLOBAL_OPTIONS]],
          (null as any),(null as any)),i1.ɵqud(335544320,1,{_control:0}),i1.ɵqud(335544320,
          2,{_placeholderChild:0}),i1.ɵqud(603979776,3,{_errorChildren:1}),i1.ɵqud(603979776,
          4,{_hintChildren:1}),i1.ɵqud(603979776,5,{_prefixChildren:1}),i1.ɵqud(603979776,
          6,{_suffixChildren:1}),(_l()(),i1.ɵted(-1,1,['\n                '])),(_l()(),
          i1.ɵeld(24,0,(null as any),1,8,'input',[['class','mat-input-element mat-form-field-autofill-control'],
              ['formControlName','email'],['matInput',''],['placeholder','email'],
              ['type','email']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)],[1,'id',0],[8,'placeholder',0],[8,'disabled',0],[8,
                  'required',0],[8,'readOnly',0],[1,'aria-describedby',0],[1,'aria-invalid',
                  0]],[[(null as any),'input'],[(null as any),'blur'],[(null as any),
              'compositionstart'],[(null as any),'compositionend'],[(null as any),
              'focus']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,25)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,25).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,25)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,25)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('blur' === en)) {
              const pd_4:any = ((<any>i1.ɵnov(_v,31)._focusChanged(false)) !== false);
              ad = (pd_4 && ad);
            }
            if (('focus' === en)) {
              const pd_5:any = ((<any>i1.ɵnov(_v,31)._focusChanged(true)) !== false);
              ad = (pd_5 && ad);
            }
            if (('input' === en)) {
              const pd_6:any = ((<any>i1.ɵnov(_v,31)._onInput()) !== false);
              ad = (pd_6 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(25,16384,(null as any),0,i6.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i6.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i6.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i6.DefaultValueAccessor]),i1.ɵdid(27,671744,(null as any),0,i6.FormControlName,
          [[3,i6.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i6.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i1.ɵprd(2048,(null as any),i6.NgControl,
          (null as any),[i6.FormControlName]),i1.ɵdid(29,16384,(null as any),0,i6.NgControlStatus,
          [i6.NgControl],(null as any),(null as any)),i1.ɵdid(30,16384,(null as any),
          0,i2.MatPrefixRejector,([] as any[]),(null as any),(null as any)),i1.ɵdid(31,
          933888,(null as any),0,i8.MatInput,[i1.ElementRef,i1.Renderer2,i9.Platform,
              [2,i6.NgControl],[2,i6.NgForm],[2,i6.FormGroupDirective],i2.ErrorStateMatcher],
          {placeholder:[0,'placeholder'],type:[1,'type']},(null as any)),i1.ɵprd(2048,
          [[1,4]],i3.MatFormFieldControl,(null as any),[i8.MatInput]),(_l()(),i1.ɵted(-1,
          1,['\n                '])),(_l()(),i1.ɵand(16777216,(null as any),4,1,(null as any),
          View_LoginComponent_1)),i1.ɵdid(35,16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,
          i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,1,['\n            '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(38,0,(null as any),
          (null as any),23,'mat-input-container',[['class','mat-input-container mat-form-field'],
              ['fxFlex','50%'],['style','padding:0 0 0 10px']],[[2,'mat-input-invalid',
              (null as any)],[2,'mat-form-field-invalid',(null as any)],[2,'mat-form-field-can-float',
              (null as any)],[2,'mat-form-field-should-float',(null as any)],[2,'mat-focused',
              (null as any)],[2,'mat-primary',(null as any)],[2,'mat-accent',(null as any)],
              [2,'mat-warn',(null as any)],[2,'ng-untouched',(null as any)],[2,'ng-touched',
                  (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],(null as any),(null as any),i7.View_MatFormField_0,
          i7.RenderType_MatFormField)),i1.ɵdid(39,737280,(null as any),0,i5.FlexDirective,
          [i5.MediaMonitor,i1.ElementRef,i1.Renderer2,[3,i5.LayoutDirective],[3,i5.LayoutWrapDirective]],
          {flex:[0,'flex']},(null as any)),i1.ɵdid(40,16384,(null as any),0,i2.MatPrefixRejector,
          ([] as any[]),(null as any),(null as any)),i1.ɵdid(41,7389184,(null as any),
          6,i3.MatFormField,[i1.ElementRef,i1.Renderer2,i1.ChangeDetectorRef,[2,i2.MAT_PLACEHOLDER_GLOBAL_OPTIONS]],
          (null as any),(null as any)),i1.ɵqud(335544320,7,{_control:0}),i1.ɵqud(335544320,
          8,{_placeholderChild:0}),i1.ɵqud(603979776,9,{_errorChildren:1}),i1.ɵqud(603979776,
          10,{_hintChildren:1}),i1.ɵqud(603979776,11,{_prefixChildren:1}),i1.ɵqud(603979776,
          12,{_suffixChildren:1}),(_l()(),i1.ɵted(-1,1,['\n                '])),(_l()(),
          i1.ɵeld(49,0,(null as any),1,8,'input',[['class','mat-input-element mat-form-field-autofill-control'],
              ['formControlName','password'],['matInput',''],['placeholder','password'],
              ['type','password']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)],[1,'id',0],[8,'placeholder',0],[8,'disabled',0],[8,
                  'required',0],[8,'readOnly',0],[1,'aria-describedby',0],[1,'aria-invalid',
                  0]],[[(null as any),'input'],[(null as any),'blur'],[(null as any),
              'compositionstart'],[(null as any),'compositionend'],[(null as any),
              'focus']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,50)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,50).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,50)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,50)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('blur' === en)) {
              const pd_4:any = ((<any>i1.ɵnov(_v,56)._focusChanged(false)) !== false);
              ad = (pd_4 && ad);
            }
            if (('focus' === en)) {
              const pd_5:any = ((<any>i1.ɵnov(_v,56)._focusChanged(true)) !== false);
              ad = (pd_5 && ad);
            }
            if (('input' === en)) {
              const pd_6:any = ((<any>i1.ɵnov(_v,56)._onInput()) !== false);
              ad = (pd_6 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(50,16384,(null as any),0,i6.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i6.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i6.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i6.DefaultValueAccessor]),i1.ɵdid(52,671744,(null as any),0,i6.FormControlName,
          [[3,i6.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i6.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i1.ɵprd(2048,(null as any),i6.NgControl,
          (null as any),[i6.FormControlName]),i1.ɵdid(54,16384,(null as any),0,i6.NgControlStatus,
          [i6.NgControl],(null as any),(null as any)),i1.ɵdid(55,16384,(null as any),
          0,i2.MatPrefixRejector,([] as any[]),(null as any),(null as any)),i1.ɵdid(56,
          933888,(null as any),0,i8.MatInput,[i1.ElementRef,i1.Renderer2,i9.Platform,
              [2,i6.NgControl],[2,i6.NgForm],[2,i6.FormGroupDirective],i2.ErrorStateMatcher],
          {placeholder:[0,'placeholder'],type:[1,'type']},(null as any)),i1.ɵprd(2048,
          [[7,4]],i3.MatFormFieldControl,(null as any),[i8.MatInput]),(_l()(),i1.ɵted(-1,
          1,['\n                '])),(_l()(),i1.ɵand(16777216,(null as any),4,1,(null as any),
          View_LoginComponent_4)),i1.ɵdid(60,16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,
          i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,1,['\n            '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i1.ɵeld(64,0,(null as any),(null as any),4,'button',
          [['class','mat-raised-button'],['color','primary'],['mat-raised-button',
              ''],['type','submit']],[[8,'disabled',0]],[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i10.LoginComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onSubmit()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i11.View_MatButton_0,i11.RenderType_MatButton)),i1.ɵdid(65,16384,(null as any),
          0,i2.MatPrefixRejector,([] as any[]),(null as any),(null as any)),i1.ɵdid(66,
          180224,(null as any),0,i12.MatButton,[i1.Renderer2,i1.ElementRef,i9.Platform,
              i13.FocusMonitor],{disabled:[0,'disabled'],color:[1,'color']},(null as any)),
      i1.ɵdid(67,16384,(null as any),0,i12.MatRaisedButtonCssMatStyler,([] as any[]),
          (null as any),(null as any)),(_l()(),i1.ɵted(-1,0,['Submit'])),(_l()(),i1.ɵted(-1,
          (null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n'])),(_l()(),
          i1.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:i10.LoginComponent = _v.component;
    const currVal_0:any = 'padding';
    _ck(_v,1,0,currVal_0);
    const currVal_8:any = _co.signInForm;
    _ck(_v,5,0,currVal_8);
    const currVal_9:any = 'row';
    _ck(_v,10,0,currVal_9);
    const currVal_10:any = 'center center';
    _ck(_v,11,0,currVal_10);
    const currVal_26:any = '50%';
    _ck(_v,14,0,currVal_26);
    const currVal_41:any = 'email';
    _ck(_v,27,0,currVal_41);
    const currVal_42:any = 'email';
    const currVal_43:any = 'email';
    _ck(_v,31,0,currVal_42,currVal_43);
    const currVal_44:boolean = (!_co.signInForm.get('email').valid && _co.signInForm.get('email').touched);
    _ck(_v,35,0,currVal_44);
    const currVal_60:any = '50%';
    _ck(_v,39,0,currVal_60);
    const currVal_75:any = 'password';
    _ck(_v,52,0,currVal_75);
    const currVal_76:any = 'password';
    const currVal_77:any = 'password';
    _ck(_v,56,0,currVal_76,currVal_77);
    const currVal_78:boolean = (!_co.signInForm.get('password').valid && _co.signInForm.get('password').touched);
    _ck(_v,60,0,currVal_78);
    const currVal_80:boolean = !_co.signInForm.valid;
    const currVal_81:any = 'primary';
    _ck(_v,66,0,currVal_80,currVal_81);
  },(_ck,_v) => {
    const currVal_1:any = i1.ɵnov(_v,7).ngClassUntouched;
    const currVal_2:any = i1.ɵnov(_v,7).ngClassTouched;
    const currVal_3:any = i1.ɵnov(_v,7).ngClassPristine;
    const currVal_4:any = i1.ɵnov(_v,7).ngClassDirty;
    const currVal_5:any = i1.ɵnov(_v,7).ngClassValid;
    const currVal_6:any = i1.ɵnov(_v,7).ngClassInvalid;
    const currVal_7:any = i1.ɵnov(_v,7).ngClassPending;
    _ck(_v,3,0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7);
    const currVal_11:any = i1.ɵnov(_v,16)._control.errorState;
    const currVal_12:any = i1.ɵnov(_v,16)._control.errorState;
    const currVal_13:any = i1.ɵnov(_v,16)._canPlaceholderFloat;
    const currVal_14:any = (i1.ɵnov(_v,16)._control.shouldPlaceholderFloat || i1.ɵnov(_v,
        16)._shouldAlwaysFloat);
    const currVal_15:any = i1.ɵnov(_v,16)._control.focused;
    const currVal_16:any = (i1.ɵnov(_v,16).color == 'primary');
    const currVal_17:any = (i1.ɵnov(_v,16).color == 'accent');
    const currVal_18:any = (i1.ɵnov(_v,16).color == 'warn');
    const currVal_19:any = i1.ɵnov(_v,16)._shouldForward('untouched');
    const currVal_20:any = i1.ɵnov(_v,16)._shouldForward('touched');
    const currVal_21:any = i1.ɵnov(_v,16)._shouldForward('pristine');
    const currVal_22:any = i1.ɵnov(_v,16)._shouldForward('dirty');
    const currVal_23:any = i1.ɵnov(_v,16)._shouldForward('valid');
    const currVal_24:any = i1.ɵnov(_v,16)._shouldForward('invalid');
    const currVal_25:any = i1.ɵnov(_v,16)._shouldForward('pending');
    _ck(_v,13,1,[currVal_11,currVal_12,currVal_13,currVal_14,currVal_15,currVal_16,
        currVal_17,currVal_18,currVal_19,currVal_20,currVal_21,currVal_22,currVal_23,
        currVal_24,currVal_25]);
    const currVal_27:any = i1.ɵnov(_v,29).ngClassUntouched;
    const currVal_28:any = i1.ɵnov(_v,29).ngClassTouched;
    const currVal_29:any = i1.ɵnov(_v,29).ngClassPristine;
    const currVal_30:any = i1.ɵnov(_v,29).ngClassDirty;
    const currVal_31:any = i1.ɵnov(_v,29).ngClassValid;
    const currVal_32:any = i1.ɵnov(_v,29).ngClassInvalid;
    const currVal_33:any = i1.ɵnov(_v,29).ngClassPending;
    const currVal_34:any = i1.ɵnov(_v,31).id;
    const currVal_35:any = i1.ɵnov(_v,31).placeholder;
    const currVal_36:any = i1.ɵnov(_v,31).disabled;
    const currVal_37:any = i1.ɵnov(_v,31).required;
    const currVal_38:any = i1.ɵnov(_v,31).readonly;
    const currVal_39:any = (i1.ɵnov(_v,31)._ariaDescribedby || (null as any));
    const currVal_40:any = i1.ɵnov(_v,31).errorState;
    _ck(_v,24,1,[currVal_27,currVal_28,currVal_29,currVal_30,currVal_31,currVal_32,
        currVal_33,currVal_34,currVal_35,currVal_36,currVal_37,currVal_38,currVal_39,
        currVal_40]);
    const currVal_45:any = i1.ɵnov(_v,41)._control.errorState;
    const currVal_46:any = i1.ɵnov(_v,41)._control.errorState;
    const currVal_47:any = i1.ɵnov(_v,41)._canPlaceholderFloat;
    const currVal_48:any = (i1.ɵnov(_v,41)._control.shouldPlaceholderFloat || i1.ɵnov(_v,
        41)._shouldAlwaysFloat);
    const currVal_49:any = i1.ɵnov(_v,41)._control.focused;
    const currVal_50:any = (i1.ɵnov(_v,41).color == 'primary');
    const currVal_51:any = (i1.ɵnov(_v,41).color == 'accent');
    const currVal_52:any = (i1.ɵnov(_v,41).color == 'warn');
    const currVal_53:any = i1.ɵnov(_v,41)._shouldForward('untouched');
    const currVal_54:any = i1.ɵnov(_v,41)._shouldForward('touched');
    const currVal_55:any = i1.ɵnov(_v,41)._shouldForward('pristine');
    const currVal_56:any = i1.ɵnov(_v,41)._shouldForward('dirty');
    const currVal_57:any = i1.ɵnov(_v,41)._shouldForward('valid');
    const currVal_58:any = i1.ɵnov(_v,41)._shouldForward('invalid');
    const currVal_59:any = i1.ɵnov(_v,41)._shouldForward('pending');
    _ck(_v,38,1,[currVal_45,currVal_46,currVal_47,currVal_48,currVal_49,currVal_50,
        currVal_51,currVal_52,currVal_53,currVal_54,currVal_55,currVal_56,currVal_57,
        currVal_58,currVal_59]);
    const currVal_61:any = i1.ɵnov(_v,54).ngClassUntouched;
    const currVal_62:any = i1.ɵnov(_v,54).ngClassTouched;
    const currVal_63:any = i1.ɵnov(_v,54).ngClassPristine;
    const currVal_64:any = i1.ɵnov(_v,54).ngClassDirty;
    const currVal_65:any = i1.ɵnov(_v,54).ngClassValid;
    const currVal_66:any = i1.ɵnov(_v,54).ngClassInvalid;
    const currVal_67:any = i1.ɵnov(_v,54).ngClassPending;
    const currVal_68:any = i1.ɵnov(_v,56).id;
    const currVal_69:any = i1.ɵnov(_v,56).placeholder;
    const currVal_70:any = i1.ɵnov(_v,56).disabled;
    const currVal_71:any = i1.ɵnov(_v,56).required;
    const currVal_72:any = i1.ɵnov(_v,56).readonly;
    const currVal_73:any = (i1.ɵnov(_v,56)._ariaDescribedby || (null as any));
    const currVal_74:any = i1.ɵnov(_v,56).errorState;
    _ck(_v,49,1,[currVal_61,currVal_62,currVal_63,currVal_64,currVal_65,currVal_66,
        currVal_67,currVal_68,currVal_69,currVal_70,currVal_71,currVal_72,currVal_73,
        currVal_74]);
    const currVal_79:any = (i1.ɵnov(_v,66).disabled || (null as any));
    _ck(_v,64,0,currVal_79);
  });
}
export function View_LoginComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'app-login',
      ([] as any[]),(null as any),(null as any),(null as any),View_LoginComponent_0,
      RenderType_LoginComponent)),i1.ɵdid(1,114688,(null as any),0,i10.LoginComponent,
      [i14.AuthenticationService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const LoginComponentNgFactory:i1.ComponentFactory<i10.LoginComponent> = i1.ɵccf('app-login',
    i10.LoginComponent,View_LoginComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjovUHJvZ3JhbW1pbmcvc2VjcmV0cy9jbGllbnQvc3JjL2FwcC9hZG1pbi9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9GOi9Qcm9ncmFtbWluZy9zZWNyZXRzL2NsaWVudC9zcmMvYXBwL2FkbWluL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwibmc6Ly8vRjovUHJvZ3JhbW1pbmcvc2VjcmV0cy9jbGllbnQvc3JjL2FwcC9hZG1pbi9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRjovUHJvZ3JhbW1pbmcvc2VjcmV0cy9jbGllbnQvc3JjL2FwcC9hZG1pbi9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cy5Mb2dpbkNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJwYWRkaW5nXCI+XHJcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNpZ25JbkZvcm1cIj5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPG1hdC1pbnB1dC1jb250YWluZXIgZnhGbGV4PVwiNTAlXCIgc3R5bGU9XCJwYWRkaW5nOjAgMTBweCAwIDBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIj48IS0tZGlzYWJsZWQgdmFsdWU9XCJHb29nbGVcIi0tPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cIiFzaWduSW5Gb3JtLmdldCgnZW1haWwnKS52YWxpZCAmJiBzaWduSW5Gb3JtLmdldCgnZW1haWwnKS50b3VjaGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJzaWduSW5Gb3JtLmdldCgnZW1haWwnKS5lcnJvcnMucmVxdWlyZWRcIj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwic2lnbkluRm9ybS5nZXQoJ2VtYWlsJykuZXJyb3JzLmVtYWlsICYmICFzaWduSW5Gb3JtLmdldCgnZW1haWwnKS5lcnJvcnMucmVxdWlyZWRcIj5FbWFpbCBpcyBpbnZhbGlkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZXJyb3I+XHJcbiAgICAgICAgICAgIDwvbWF0LWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG1hdC1pbnB1dC1jb250YWluZXIgZnhGbGV4PVwiNTAlXCIgc3R5bGU9XCJwYWRkaW5nOjAgMCAwIDEwcHhcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCIhc2lnbkluRm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsaWQgJiYgc2lnbkluRm9ybS5nZXQoJ3Bhc3N3b3JkJykudG91Y2hlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwic2lnbkluRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZXJyb3JzLnJlcXVpcmVkXCI+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWVycm9yPlxyXG4gICAgICAgICAgICA8L21hdC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib25TdWJtaXQoKVwiIFtkaXNhYmxlZF09XCIhc2lnbkluRm9ybS52YWxpZFwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuPC9kaXY+XHJcbiIsIjxhcHAtbG9naW4+PC9hcHAtbG9naW4+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ01vQjtNQUFBLHdFQUFzRDthQUFBOzs7b0JBQ3REO01BQUEsd0VBQStGO2FBQUE7OztvQkFGbkc7TUFBQTtNQUFBLHFDQUFBO01BQUEsa0RBQUE7TUFBQSwyQ0FBcUY7TUFBQSw2QkFDakY7TUFBQSwrQ0FBQTtNQUFBLHNFQUFtRjthQUFBLCtDQUNuRjtNQUFBLDJFQUFBO01BQUE7VUFBQSx3QkFBc0g7OztRQURoSDtRQUFOLFdBQU0sU0FBTjtRQUNNO1FBQU4sV0FBTSxTQUFOOztRQUZKO1FBQUEsV0FBQSxTQUFBOzs7O29CQVFJO01BQUEsd0VBQXlEO2FBQUE7OztvQkFEN0Q7TUFBQTtNQUFBLHFDQUFBO01BQUEsa0RBQUE7TUFBQSwyQ0FBMkY7TUFBQSw2QkFDdkY7TUFBQSwrQ0FBQTtNQUFBLHNFQUFzRjthQUFBOztJQUFoRjtJQUFOLFdBQU0sU0FBTjs7SUFESjtJQUFBLFdBQUEsU0FBQTs7OztvQkFaaEI7TUFBQTthQUFBO3lFQUFBO1VBQUEsMkNBQXFCO1VBQUEsYUFDakI7VUFBQTtVQUFBO1VBQUE7VUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQSxvQ0FBQTtVQUFBLDhFQUFBO1VBQUE7YUFBQTtVQUFBLDZCQUErQjtNQUMzQjtVQUFBO1VBQUEscUNBQUE7VUFBQTthQUFBO3VCQUFBO01BQWtELHNEQUM5QztVQUFBO2NBQUE7Y0FBQTtjQUFBO2NBQUE7Y0FBQTtrQkFBQTtjQUFBO2tCQUFBO29DQUFBLFVBQUE7VUFBQTtVQUFBLHdDQUFBO1VBQUEsa0RBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBLHVCQUE2RCw4Q0FDekQ7aUJBQUE7Y0FB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
