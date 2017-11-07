"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./login.component.scss.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/material/core");
var i3 = require("@angular/material/form-field");
var i4 = require("@angular/common");
var i5 = require("@angular/flex-layout");
var i6 = require("@angular/forms");
var i7 = require("../../../../node_modules/@angular/material/form-field/typings/index.ngfactory");
var i8 = require("@angular/material/input");
var i9 = require("@angular/cdk/platform");
var i10 = require("./login.component");
var i11 = require("../../../../node_modules/@angular/material/button/typings/index.ngfactory");
var i12 = require("@angular/material/button");
var i13 = require("@angular/cdk/a11y");
var i14 = require("../../../authentication/authentication.service");
var styles_LoginComponent = [i0.styles];
exports.RenderType_LoginComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_LoginComponent, data: {} });
function View_LoginComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(-1, null, ['This field is required']))], null, null);
}
function View_LoginComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(-1, null, ['Email is invalid']))], null, null);
}
function View_LoginComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, 'mat-error', [['class', 'mat-error'], ['role', 'alert']], [[1, 'id', 0]], null, null, null, null)), i1.ɵdid(1, 16384, null, 0, i2.MatPrefixRejector, [], null, null), i1.ɵdid(2, 16384, [[3, 4]], 0, i3.MatError, [], null, null), (_l()(), i1.ɵted(-1, null, ['\n                    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_LoginComponent_2)), i1.ɵdid(5, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i1.ɵted(-1, null, ['\n                    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_LoginComponent_3)), i1.ɵdid(8, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n                ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.signInForm.get('email').errors.required;
        _ck(_v, 5, 0, currVal_1);
        var currVal_2 = (_co.signInForm.get('email').errors.email && !_co.signInForm.get('email').errors.required);
        _ck(_v, 8, 0, currVal_2);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 2).id;
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_LoginComponent_5(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(-1, null, ['This field is required']))], null, null);
}
function View_LoginComponent_4(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, 'mat-error', [['class', 'mat-error'], ['role', 'alert']], [[1, 'id', 0]], null, null, null, null)), i1.ɵdid(1, 16384, null, 0, i2.MatPrefixRejector, [], null, null), i1.ɵdid(2, 16384, [[9, 4]], 0, i3.MatError, [], null, null), (_l()(), i1.ɵted(-1, null, ['\n                    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_LoginComponent_5)), i1.ɵdid(5, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i1.ɵted(-1, null, ['\n                ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.signInForm.get('password').errors.required;
        _ck(_v, 5, 0, currVal_1);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 2).id;
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_LoginComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 70, 'div', [['class',
                'padding']], null, null, null, null, null)),
        i1.ɵdid(1, 999424, null, 0, i5.ClassDirective, [i5.MediaMonitor, i1.ElementRef,
            i1.Renderer2, i1.Renderer, i1.IterableDiffers, i1.KeyValueDiffers, [8, null]], { classBase: [0, 'classBase'] }, null), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵeld(3, 0, null, null, 66, 'form', [['novalidate',
                '']], [[2, 'ng-untouched', null], [2, 'ng-touched', null], [2,
                'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            if (('submit' === en)) {
                var pd_0 = (i1.ɵnov(_v, 5).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i1.ɵnov(_v, 5).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(4, 16384, null, 0, i6.ɵbf, [], null, null), i1.ɵdid(5, 540672, null, 0, i6.FormGroupDirective, [[8, null], [8, null]], { form: [0, 'form'] }, null), i1.ɵprd(2048, null, i6.ControlContainer, null, [i6.FormGroupDirective]),
        i1.ɵdid(7, 16384, null, 0, i6.NgControlStatusGroup, [i6.ControlContainer], null, null), (_l()(), i1.ɵted(-1, null, ['\n        '])),
        (_l()(), i1.ɵeld(9, 0, null, null, 53, 'div', [['fxLayout', 'row'],
            ['fxLayoutAlign', 'center center']], null, null, null, null, null)), i1.ɵdid(10, 737280, null, 0, i5.LayoutDirective, [i5.MediaMonitor, i1.ElementRef, i1.Renderer2], { layout: [0, 'layout'] }, null),
        i1.ɵdid(11, 737280, null, 0, i5.LayoutAlignDirective, [i5.MediaMonitor, i1.ElementRef,
            i1.Renderer2, [2, i5.LayoutDirective]], { align: [0, 'align'] }, null),
        (_l()(), i1.ɵted(-1, null, ['\n            '])), (_l()(), i1.ɵeld(13, 0, null, null, 23, 'mat-input-container', [['class', 'mat-input-container mat-form-field'],
            ['fxFlex', '50%'], ['style', 'padding:0 10px 0 0']], [[2, 'mat-input-invalid',
                null], [2, 'mat-form-field-invalid', null], [2, 'mat-form-field-can-float',
                null], [2, 'mat-form-field-should-float', null], [2, 'mat-focused',
                null], [2, 'mat-primary', null], [2, 'mat-accent', null],
            [2, 'mat-warn', null], [2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], null, null, i7.View_MatFormField_0, i7.RenderType_MatFormField)), i1.ɵdid(14, 737280, null, 0, i5.FlexDirective, [i5.MediaMonitor, i1.ElementRef, i1.Renderer2, [3, i5.LayoutDirective], [3, i5.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), i1.ɵdid(15, 16384, null, 0, i2.MatPrefixRejector, [], null, null), i1.ɵdid(16, 7389184, null, 6, i3.MatFormField, [i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef, [2, i2.MAT_PLACEHOLDER_GLOBAL_OPTIONS]], null, null), i1.ɵqud(335544320, 1, { _control: 0 }), i1.ɵqud(335544320, 2, { _placeholderChild: 0 }), i1.ɵqud(603979776, 3, { _errorChildren: 1 }), i1.ɵqud(603979776, 4, { _hintChildren: 1 }), i1.ɵqud(603979776, 5, { _prefixChildren: 1 }), i1.ɵqud(603979776, 6, { _suffixChildren: 1 }), (_l()(), i1.ɵted(-1, 1, ['\n                '])), (_l()(),
            i1.ɵeld(24, 0, null, 1, 8, 'input', [['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'email'], ['matInput', ''], ['placeholder', 'email'],
                ['type', 'email']], [[2, 'ng-untouched', null], [2, 'ng-touched',
                    null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
                [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                    null], [1, 'id', 0], [8, 'placeholder', 0], [8, 'disabled', 0], [8,
                    'required', 0], [8, 'readOnly', 0], [1, 'aria-describedby', 0], [1, 'aria-invalid',
                    0]], [[null, 'input'], [null, 'blur'], [null,
                    'compositionstart'], [null, 'compositionend'], [null,
                    'focus']], function (_v, en, $event) {
                var ad = true;
                if (('input' === en)) {
                    var pd_0 = (i1.ɵnov(_v, 25)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                }
                if (('blur' === en)) {
                    var pd_1 = (i1.ɵnov(_v, 25).onTouched() !== false);
                    ad = (pd_1 && ad);
                }
                if (('compositionstart' === en)) {
                    var pd_2 = (i1.ɵnov(_v, 25)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                }
                if (('compositionend' === en)) {
                    var pd_3 = (i1.ɵnov(_v, 25)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                }
                if (('blur' === en)) {
                    var pd_4 = (i1.ɵnov(_v, 31)._focusChanged(false) !== false);
                    ad = (pd_4 && ad);
                }
                if (('focus' === en)) {
                    var pd_5 = (i1.ɵnov(_v, 31)._focusChanged(true) !== false);
                    ad = (pd_5 && ad);
                }
                if (('input' === en)) {
                    var pd_6 = (i1.ɵnov(_v, 31)._onInput() !== false);
                    ad = (pd_6 && ad);
                }
                return ad;
            }, null, null)), i1.ɵdid(25, 16384, null, 0, i6.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i6.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i6.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i6.DefaultValueAccessor]), i1.ɵdid(27, 671744, null, 0, i6.FormControlName, [[3, i6.ControlContainer], [8, null], [8, null], [2, i6.NG_VALUE_ACCESSOR]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i6.NgControl, null, [i6.FormControlName]), i1.ɵdid(29, 16384, null, 0, i6.NgControlStatus, [i6.NgControl], null, null), i1.ɵdid(30, 16384, null, 0, i2.MatPrefixRejector, [], null, null), i1.ɵdid(31, 933888, null, 0, i8.MatInput, [i1.ElementRef, i1.Renderer2, i9.Platform,
            [2, i6.NgControl], [2, i6.NgForm], [2, i6.FormGroupDirective], i2.ErrorStateMatcher], { placeholder: [0, 'placeholder'], type: [1, 'type'] }, null), i1.ɵprd(2048, [[1, 4]], i3.MatFormFieldControl, null, [i8.MatInput]), (_l()(), i1.ɵted(-1, 1, ['\n                '])), (_l()(), i1.ɵand(16777216, null, 4, 1, null, View_LoginComponent_1)), i1.ɵdid(35, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef,
            i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, 1, ['\n            '])),
        (_l()(), i1.ɵted(-1, null, ['\n            '])), (_l()(), i1.ɵeld(38, 0, null, null, 23, 'mat-input-container', [['class', 'mat-input-container mat-form-field'],
            ['fxFlex', '50%'], ['style', 'padding:0 0 0 10px']], [[2, 'mat-input-invalid',
                null], [2, 'mat-form-field-invalid', null], [2, 'mat-form-field-can-float',
                null], [2, 'mat-form-field-should-float', null], [2, 'mat-focused',
                null], [2, 'mat-primary', null], [2, 'mat-accent', null],
            [2, 'mat-warn', null], [2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], null, null, i7.View_MatFormField_0, i7.RenderType_MatFormField)), i1.ɵdid(39, 737280, null, 0, i5.FlexDirective, [i5.MediaMonitor, i1.ElementRef, i1.Renderer2, [3, i5.LayoutDirective], [3, i5.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), i1.ɵdid(40, 16384, null, 0, i2.MatPrefixRejector, [], null, null), i1.ɵdid(41, 7389184, null, 6, i3.MatFormField, [i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef, [2, i2.MAT_PLACEHOLDER_GLOBAL_OPTIONS]], null, null), i1.ɵqud(335544320, 7, { _control: 0 }), i1.ɵqud(335544320, 8, { _placeholderChild: 0 }), i1.ɵqud(603979776, 9, { _errorChildren: 1 }), i1.ɵqud(603979776, 10, { _hintChildren: 1 }), i1.ɵqud(603979776, 11, { _prefixChildren: 1 }), i1.ɵqud(603979776, 12, { _suffixChildren: 1 }), (_l()(), i1.ɵted(-1, 1, ['\n                '])), (_l()(),
            i1.ɵeld(49, 0, null, 1, 8, 'input', [['class', 'mat-input-element mat-form-field-autofill-control'],
                ['formControlName', 'password'], ['matInput', ''], ['placeholder', 'password'],
                ['type', 'password']], [[2, 'ng-untouched', null], [2, 'ng-touched',
                    null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
                [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                    null], [1, 'id', 0], [8, 'placeholder', 0], [8, 'disabled', 0], [8,
                    'required', 0], [8, 'readOnly', 0], [1, 'aria-describedby', 0], [1, 'aria-invalid',
                    0]], [[null, 'input'], [null, 'blur'], [null,
                    'compositionstart'], [null, 'compositionend'], [null,
                    'focus']], function (_v, en, $event) {
                var ad = true;
                if (('input' === en)) {
                    var pd_0 = (i1.ɵnov(_v, 50)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                }
                if (('blur' === en)) {
                    var pd_1 = (i1.ɵnov(_v, 50).onTouched() !== false);
                    ad = (pd_1 && ad);
                }
                if (('compositionstart' === en)) {
                    var pd_2 = (i1.ɵnov(_v, 50)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                }
                if (('compositionend' === en)) {
                    var pd_3 = (i1.ɵnov(_v, 50)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                }
                if (('blur' === en)) {
                    var pd_4 = (i1.ɵnov(_v, 56)._focusChanged(false) !== false);
                    ad = (pd_4 && ad);
                }
                if (('focus' === en)) {
                    var pd_5 = (i1.ɵnov(_v, 56)._focusChanged(true) !== false);
                    ad = (pd_5 && ad);
                }
                if (('input' === en)) {
                    var pd_6 = (i1.ɵnov(_v, 56)._onInput() !== false);
                    ad = (pd_6 && ad);
                }
                return ad;
            }, null, null)), i1.ɵdid(50, 16384, null, 0, i6.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i6.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i6.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i6.DefaultValueAccessor]), i1.ɵdid(52, 671744, null, 0, i6.FormControlName, [[3, i6.ControlContainer], [8, null], [8, null], [2, i6.NG_VALUE_ACCESSOR]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i6.NgControl, null, [i6.FormControlName]), i1.ɵdid(54, 16384, null, 0, i6.NgControlStatus, [i6.NgControl], null, null), i1.ɵdid(55, 16384, null, 0, i2.MatPrefixRejector, [], null, null), i1.ɵdid(56, 933888, null, 0, i8.MatInput, [i1.ElementRef, i1.Renderer2, i9.Platform,
            [2, i6.NgControl], [2, i6.NgForm], [2, i6.FormGroupDirective], i2.ErrorStateMatcher], { placeholder: [0, 'placeholder'], type: [1, 'type'] }, null), i1.ɵprd(2048, [[7, 4]], i3.MatFormFieldControl, null, [i8.MatInput]), (_l()(), i1.ɵted(-1, 1, ['\n                '])), (_l()(), i1.ɵand(16777216, null, 4, 1, null, View_LoginComponent_4)), i1.ɵdid(60, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef,
            i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, 1, ['\n            '])),
        (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵeld(64, 0, null, null, 4, 'button', [['class', 'mat-raised-button'], ['color', 'primary'], ['mat-raised-button',
                ''], ['type', 'submit']], [[8, 'disabled', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onSubmit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i11.View_MatButton_0, i11.RenderType_MatButton)), i1.ɵdid(65, 16384, null, 0, i2.MatPrefixRejector, [], null, null), i1.ɵdid(66, 180224, null, 0, i12.MatButton, [i1.Renderer2, i1.ElementRef, i9.Platform,
            i13.FocusMonitor], { disabled: [0, 'disabled'], color: [1, 'color'] }, null),
        i1.ɵdid(67, 16384, null, 0, i12.MatRaisedButtonCssMatStyler, [], null, null), (_l()(), i1.ɵted(-1, 0, ['Submit'])), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵted(-1, null, ['\n'])), (_l()(),
            i1.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'padding';
        _ck(_v, 1, 0, currVal_0);
        var currVal_8 = _co.signInForm;
        _ck(_v, 5, 0, currVal_8);
        var currVal_9 = 'row';
        _ck(_v, 10, 0, currVal_9);
        var currVal_10 = 'center center';
        _ck(_v, 11, 0, currVal_10);
        var currVal_26 = '50%';
        _ck(_v, 14, 0, currVal_26);
        var currVal_41 = 'email';
        _ck(_v, 27, 0, currVal_41);
        var currVal_42 = 'email';
        var currVal_43 = 'email';
        _ck(_v, 31, 0, currVal_42, currVal_43);
        var currVal_44 = (!_co.signInForm.get('email').valid && _co.signInForm.get('email').touched);
        _ck(_v, 35, 0, currVal_44);
        var currVal_60 = '50%';
        _ck(_v, 39, 0, currVal_60);
        var currVal_75 = 'password';
        _ck(_v, 52, 0, currVal_75);
        var currVal_76 = 'password';
        var currVal_77 = 'password';
        _ck(_v, 56, 0, currVal_76, currVal_77);
        var currVal_78 = (!_co.signInForm.get('password').valid && _co.signInForm.get('password').touched);
        _ck(_v, 60, 0, currVal_78);
        var currVal_80 = !_co.signInForm.valid;
        var currVal_81 = 'primary';
        _ck(_v, 66, 0, currVal_80, currVal_81);
    }, function (_ck, _v) {
        var currVal_1 = i1.ɵnov(_v, 7).ngClassUntouched;
        var currVal_2 = i1.ɵnov(_v, 7).ngClassTouched;
        var currVal_3 = i1.ɵnov(_v, 7).ngClassPristine;
        var currVal_4 = i1.ɵnov(_v, 7).ngClassDirty;
        var currVal_5 = i1.ɵnov(_v, 7).ngClassValid;
        var currVal_6 = i1.ɵnov(_v, 7).ngClassInvalid;
        var currVal_7 = i1.ɵnov(_v, 7).ngClassPending;
        _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
        var currVal_11 = i1.ɵnov(_v, 16)._control.errorState;
        var currVal_12 = i1.ɵnov(_v, 16)._control.errorState;
        var currVal_13 = i1.ɵnov(_v, 16)._canPlaceholderFloat;
        var currVal_14 = (i1.ɵnov(_v, 16)._control.shouldPlaceholderFloat || i1.ɵnov(_v, 16)._shouldAlwaysFloat);
        var currVal_15 = i1.ɵnov(_v, 16)._control.focused;
        var currVal_16 = (i1.ɵnov(_v, 16).color == 'primary');
        var currVal_17 = (i1.ɵnov(_v, 16).color == 'accent');
        var currVal_18 = (i1.ɵnov(_v, 16).color == 'warn');
        var currVal_19 = i1.ɵnov(_v, 16)._shouldForward('untouched');
        var currVal_20 = i1.ɵnov(_v, 16)._shouldForward('touched');
        var currVal_21 = i1.ɵnov(_v, 16)._shouldForward('pristine');
        var currVal_22 = i1.ɵnov(_v, 16)._shouldForward('dirty');
        var currVal_23 = i1.ɵnov(_v, 16)._shouldForward('valid');
        var currVal_24 = i1.ɵnov(_v, 16)._shouldForward('invalid');
        var currVal_25 = i1.ɵnov(_v, 16)._shouldForward('pending');
        _ck(_v, 13, 1, [currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16,
            currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23,
            currVal_24, currVal_25]);
        var currVal_27 = i1.ɵnov(_v, 29).ngClassUntouched;
        var currVal_28 = i1.ɵnov(_v, 29).ngClassTouched;
        var currVal_29 = i1.ɵnov(_v, 29).ngClassPristine;
        var currVal_30 = i1.ɵnov(_v, 29).ngClassDirty;
        var currVal_31 = i1.ɵnov(_v, 29).ngClassValid;
        var currVal_32 = i1.ɵnov(_v, 29).ngClassInvalid;
        var currVal_33 = i1.ɵnov(_v, 29).ngClassPending;
        var currVal_34 = i1.ɵnov(_v, 31).id;
        var currVal_35 = i1.ɵnov(_v, 31).placeholder;
        var currVal_36 = i1.ɵnov(_v, 31).disabled;
        var currVal_37 = i1.ɵnov(_v, 31).required;
        var currVal_38 = i1.ɵnov(_v, 31).readonly;
        var currVal_39 = (i1.ɵnov(_v, 31)._ariaDescribedby || null);
        var currVal_40 = i1.ɵnov(_v, 31).errorState;
        _ck(_v, 24, 1, [currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32,
            currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39,
            currVal_40]);
        var currVal_45 = i1.ɵnov(_v, 41)._control.errorState;
        var currVal_46 = i1.ɵnov(_v, 41)._control.errorState;
        var currVal_47 = i1.ɵnov(_v, 41)._canPlaceholderFloat;
        var currVal_48 = (i1.ɵnov(_v, 41)._control.shouldPlaceholderFloat || i1.ɵnov(_v, 41)._shouldAlwaysFloat);
        var currVal_49 = i1.ɵnov(_v, 41)._control.focused;
        var currVal_50 = (i1.ɵnov(_v, 41).color == 'primary');
        var currVal_51 = (i1.ɵnov(_v, 41).color == 'accent');
        var currVal_52 = (i1.ɵnov(_v, 41).color == 'warn');
        var currVal_53 = i1.ɵnov(_v, 41)._shouldForward('untouched');
        var currVal_54 = i1.ɵnov(_v, 41)._shouldForward('touched');
        var currVal_55 = i1.ɵnov(_v, 41)._shouldForward('pristine');
        var currVal_56 = i1.ɵnov(_v, 41)._shouldForward('dirty');
        var currVal_57 = i1.ɵnov(_v, 41)._shouldForward('valid');
        var currVal_58 = i1.ɵnov(_v, 41)._shouldForward('invalid');
        var currVal_59 = i1.ɵnov(_v, 41)._shouldForward('pending');
        _ck(_v, 38, 1, [currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50,
            currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57,
            currVal_58, currVal_59]);
        var currVal_61 = i1.ɵnov(_v, 54).ngClassUntouched;
        var currVal_62 = i1.ɵnov(_v, 54).ngClassTouched;
        var currVal_63 = i1.ɵnov(_v, 54).ngClassPristine;
        var currVal_64 = i1.ɵnov(_v, 54).ngClassDirty;
        var currVal_65 = i1.ɵnov(_v, 54).ngClassValid;
        var currVal_66 = i1.ɵnov(_v, 54).ngClassInvalid;
        var currVal_67 = i1.ɵnov(_v, 54).ngClassPending;
        var currVal_68 = i1.ɵnov(_v, 56).id;
        var currVal_69 = i1.ɵnov(_v, 56).placeholder;
        var currVal_70 = i1.ɵnov(_v, 56).disabled;
        var currVal_71 = i1.ɵnov(_v, 56).required;
        var currVal_72 = i1.ɵnov(_v, 56).readonly;
        var currVal_73 = (i1.ɵnov(_v, 56)._ariaDescribedby || null);
        var currVal_74 = i1.ɵnov(_v, 56).errorState;
        _ck(_v, 49, 1, [currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66,
            currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73,
            currVal_74]);
        var currVal_79 = (i1.ɵnov(_v, 66).disabled || null);
        _ck(_v, 64, 0, currVal_79);
    });
}
exports.View_LoginComponent_0 = View_LoginComponent_0;
function View_LoginComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'app-login', [], null, null, null, View_LoginComponent_0, exports.RenderType_LoginComponent)), i1.ɵdid(1, 114688, null, 0, i10.LoginComponent, [i14.AuthenticationService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_LoginComponent_Host_0 = View_LoginComponent_Host_0;
exports.LoginComponentNgFactory = i1.ɵccf('app-login', i10.LoginComponent, View_LoginComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRjovUHJvZ3JhbW1pbmcvc2VjcmV0cy9jbGllbnQvc3JjL2FwcC9hZG1pbi9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9GOi9Qcm9ncmFtbWluZy9zZWNyZXRzL2NsaWVudC9zcmMvYXBwL2FkbWluL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwibmc6Ly8vRjovUHJvZ3JhbW1pbmcvc2VjcmV0cy9jbGllbnQvc3JjL2FwcC9hZG1pbi9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRjovUHJvZ3JhbW1pbmcvc2VjcmV0cy9jbGllbnQvc3JjL2FwcC9hZG1pbi9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cy5Mb2dpbkNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJwYWRkaW5nXCI+XHJcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNpZ25JbkZvcm1cIj5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPG1hdC1pbnB1dC1jb250YWluZXIgZnhGbGV4PVwiNTAlXCIgc3R5bGU9XCJwYWRkaW5nOjAgMTBweCAwIDBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIj48IS0tZGlzYWJsZWQgdmFsdWU9XCJHb29nbGVcIi0tPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cIiFzaWduSW5Gb3JtLmdldCgnZW1haWwnKS52YWxpZCAmJiBzaWduSW5Gb3JtLmdldCgnZW1haWwnKS50b3VjaGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJzaWduSW5Gb3JtLmdldCgnZW1haWwnKS5lcnJvcnMucmVxdWlyZWRcIj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwic2lnbkluRm9ybS5nZXQoJ2VtYWlsJykuZXJyb3JzLmVtYWlsICYmICFzaWduSW5Gb3JtLmdldCgnZW1haWwnKS5lcnJvcnMucmVxdWlyZWRcIj5FbWFpbCBpcyBpbnZhbGlkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZXJyb3I+XHJcbiAgICAgICAgICAgIDwvbWF0LWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG1hdC1pbnB1dC1jb250YWluZXIgZnhGbGV4PVwiNTAlXCIgc3R5bGU9XCJwYWRkaW5nOjAgMCAwIDEwcHhcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCIhc2lnbkluRm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsaWQgJiYgc2lnbkluRm9ybS5nZXQoJ3Bhc3N3b3JkJykudG91Y2hlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwic2lnbkluRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZXJyb3JzLnJlcXVpcmVkXCI+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWVycm9yPlxyXG4gICAgICAgICAgICA8L21hdC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib25TdWJtaXQoKVwiIFtkaXNhYmxlZF09XCIhc2lnbkluRm9ybS52YWxpZFwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuPC9kaXY+XHJcbiIsIjxhcHAtbG9naW4+PC9hcHAtbG9naW4+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ01vQjtNQUFBLHdFQUFzRDthQUFBOzs7b0JBQ3REO01BQUEsd0VBQStGO2FBQUE7OztvQkFGbkc7TUFBQTtNQUFBLHFDQUFBO01BQUEsa0RBQUE7TUFBQSwyQ0FBcUY7TUFBQSw2QkFDakY7TUFBQSwrQ0FBQTtNQUFBLHNFQUFtRjthQUFBLCtDQUNuRjtNQUFBLDJFQUFBO01BQUE7VUFBQSx3QkFBc0g7OztRQURoSDtRQUFOLFdBQU0sU0FBTjtRQUNNO1FBQU4sV0FBTSxTQUFOOztRQUZKO1FBQUEsV0FBQSxTQUFBOzs7O29CQVFJO01BQUEsd0VBQXlEO2FBQUE7OztvQkFEN0Q7TUFBQTtNQUFBLHFDQUFBO01BQUEsa0RBQUE7TUFBQSwyQ0FBMkY7TUFBQSw2QkFDdkY7TUFBQSwrQ0FBQTtNQUFBLHNFQUFzRjthQUFBOztJQUFoRjtJQUFOLFdBQU0sU0FBTjs7SUFESjtJQUFBLFdBQUEsU0FBQTs7OztvQkFaaEI7TUFBQTthQUFBO3lFQUFBO1VBQUEsMkNBQXFCO1VBQUEsYUFDakI7VUFBQTtVQUFBO1VBQUE7VUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQSxvQ0FBQTtVQUFBLDhFQUFBO1VBQUE7YUFBQTtVQUFBLDZCQUErQjtNQUMzQjtVQUFBO1VBQUEscUNBQUE7VUFBQTthQUFBO3VCQUFBO01BQWtELHNEQUM5QztVQUFBO2NBQUE7Y0FBQTtjQUFBO2NBQUE7Y0FBQTtrQkFBQTtjQUFBO2tCQUFBO29DQUFBLFVBQUE7VUFBQTtVQUFBLHdDQUFBO1VBQUEsa0RBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBLHVCQUE2RCw4Q0FDekQ7aUJBQUE7Y0FB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
