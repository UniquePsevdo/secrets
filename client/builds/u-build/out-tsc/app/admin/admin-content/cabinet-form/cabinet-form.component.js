"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var fromRoot = require("../../../reducers/index");
var admin_interaction_data_1 = require("../../data-services/admin-interaction-data");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/startWith");
require("rxjs/add/operator/map");
var region_validator_1 = require("../../../validators/region-validator");
var environment_1 = require("../../../../environments/environment");
var CabinetFormComponent = (function () {
    function CabinetFormComponent(store, dataService) {
        var _this = this;
        this.store = store;
        this.dataService = dataService;
        this.logoUploadUrl = '';
        this.routerSubscription = this.store.select(fromRoot.getResetState).subscribe(function (state) {
            if (state['start'] === false) {
                _this.logoUploadUrl = environment_1.environment.apiUrl + "/cabinet/logo";
                _this.dataService.setShowContentChildren(true);
                _this.regions = [
                    {
                        id: 1,
                        name: 'Одеська область',
                        flag: './assets/images/flags/Coat_of_Arms_of_Odesa_Oblast.svg.png'
                    },
                    {
                        id: 2,
                        name: 'Дніпропетровська область',
                        flag: './assets/images/flags/Smaller_Coat_of_arms_of_Dnipropetrovsk_Oblast.svg.png'
                    },
                    {
                        id: 3,
                        name: 'Чернігівська область',
                        flag: './assets/images/flags/45px-Coat_of_Arms_of_Chernihiv_Oblast.png'
                    },
                    { id: 4, name: 'Харківська область', flag: './assets/images/flags/COA_of_Kharkiv_Oblast.svg.png' },
                    {
                        id: 5,
                        name: 'Житомирська область',
                        flag: './assets/images/flags/45px-Coat_of_Arms_of_Zhytomyr_Oblast.svg.png'
                    },
                    {
                        id: 6,
                        name: 'Полтавська область',
                        flag: './assets/images/flags/Large_Coat_of_Arms_of_Poltava_Oblast.svg.png'
                    },
                    {
                        id: 7,
                        name: 'Херсонська область',
                        flag: './assets/images/flags/Coat_of_Arms_of_Kherson_Oblast.svg.png'
                    },
                    {
                        id: 8,
                        name: 'Київська область',
                        flag: './assets/images/flags/45px-Coat_of_Arms_of_Kyiv_Oblast.png'
                    },
                    {
                        id: 9,
                        name: 'Запорізька область',
                        flag: './assets/images/flags/Coat_of_arms_of_Zaporizhia_Oblast.svg.png'
                    },
                    {
                        id: 10,
                        name: 'Луганська область',
                        flag: './assets/images/flags/Coat_of_Arms_Luhansk_Oblast.svg.png'
                    },
                    {
                        id: 11,
                        name: 'Донецька область',
                        flag: './assets/images/flags/Coat_of_Arms_of_Donetsk_Oblast_1999.svg.png'
                    },
                    {
                        id: 12,
                        name: 'Вінницька область',
                        flag: './assets/images/flags/45px-Coat_of_Arms_of_Vinnytsia_Oblast.svg.png'
                    },
                    { id: 13, name: 'Автономна Республіка Крим', flag: './assets/images/flags/Emblem_of_Crimea.svg.png' },
                    {
                        id: 14,
                        name: 'Миколаївська область',
                        flag: './assets/images/flags/Coat_of_Arms_of_Mykolaiv_Oblast.svg.png'
                    },
                    {
                        id: 15,
                        name: 'Кіровоградська область',
                        flag: './assets/images/flags/Coat_of_Arms_of_Kirovohrad_Oblast.svg.png'
                    },
                    {
                        id: 16,
                        name: 'Сумська область',
                        flag: './assets/images/flags/Coat_of_Arms_of_Sumy_Oblast.svg.png'
                    },
                    {
                        id: 17,
                        name: 'Львівська область',
                        flag: './assets/images/flags/45px-Coat_of_Arms_of_Lviv_Oblast.png'
                    },
                    {
                        id: 18,
                        name: 'Черкаська область',
                        flag: './assets/images/flags/Coat_of_Arms_of_Cherkasy_Oblast.svg.png'
                    },
                    {
                        id: 19,
                        name: 'Хмельницька область',
                        flag: './assets/images/flags/Coat_of_Arms_of_Khmelnytskyi_Oblast.svg.png'
                    },
                    { id: 20, name: 'Волинська область', flag: './assets/images/flags/Volyn_coat_of_arms.svg.png' },
                    {
                        id: 21,
                        name: 'Рівненська область',
                        flag: './assets/images/flags/45px-Coat_of_Arms_of_Rivne_Oblast.svg.png'
                    },
                    {
                        id: 22,
                        name: 'Івано-Франківська область',
                        flag: './assets/images/flags/Coat_of_Arms_of_Ivano-Frankivsk_Oblast.svg.png'
                    },
                    {
                        id: 23,
                        name: 'Тернопільська область',
                        flag: './assets/images/flags/Coat_of_Arms_of_Ternopil_Oblast.svg.png'
                    },
                    {
                        id: 24,
                        name: 'Закарпатська область',
                        flag: './assets/images/flags/45px-CarpathianRutheniaCoA.svg.png'
                    },
                    {
                        id: 25,
                        name: 'Чернівецька область',
                        flag: './assets/images/flags/Coat_of_Arms_of_Chernivtsi_Oblast.svg.png'
                    }
                ];
                _this.region = new forms_1.FormControl(null, [forms_1.Validators.required, region_validator_1.validateRegion]);
                _this.filteredRegions = _this.region.valueChanges
                    .startWith(null)
                    .map(function (state) { return state ? _this.filterRegions(state) : _this.regions.slice(); });
                _this.email = new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.email]);
                _this.name = new forms_1.FormControl(null, [forms_1.Validators.required]);
                _this.fullAddress = new forms_1.FormControl();
                _this.description = new forms_1.FormControl(null, [forms_1.Validators.required]);
                _this.focusedFields = {
                    email: false,
                    name: false,
                    fullAddress: false,
                    description: false
                };
                _this.cabinetForm = new forms_1.FormGroup({
                    'email': _this.email,
                    'name': _this.name,
                    'fullAddress': _this.fullAddress,
                    'description': _this.description,
                    'region': _this.region
                });
            }
        });
    }
    /*
    Кабинет:
    Название - строка+
    логотип - фотка
    фоточка на заставку в кабинет - фотка
    Краткое описание - текстареа
    Физический адрес -
    Ссылки в интернете - массив строк
    Почта - email
    */
    CabinetFormComponent.prototype.ngOnInit = function () {
    };
    CabinetFormComponent.prototype.onLogoUploadFinished = function (event, imageKey) {
        this.readThis(event.file, imageKey);
    };
    CabinetFormComponent.prototype.readThis = function (file, imageKey) {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onloadend = function (e) {
            _this[imageKey] = fileReader.result;
        };
        fileReader.readAsDataURL(file);
    };
    CabinetFormComponent.prototype.filterRegions = function (name) {
        return this.regions.filter(function (state) {
            return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    CabinetFormComponent.prototype.ngOnDestroy = function () {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    };
    return CabinetFormComponent;
}());
CabinetFormComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-cabinet-form',
                templateUrl: './cabinet-form.component.html',
                styleUrls: ['./cabinet-form.component.scss']
            },] },
];
/** @nocollapse */
CabinetFormComponent.ctorParameters = function () { return [
    { type: store_1.Store, },
    { type: admin_interaction_data_1.AdminInteractionData, },
]; };
exports.CabinetFormComponent = CabinetFormComponent;
//# sourceMappingURL=cabinet-form.component.js.map