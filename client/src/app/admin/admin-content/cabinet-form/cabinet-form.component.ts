import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Store} from "@ngrx/store";
import * as fromRoot from '../../../reducers/index';
import {AdminInteractionData} from "../../data-services/admin-interaction-data";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-cabinet-form',
    templateUrl: './cabinet-form.component.html',
    styleUrls: ['./cabinet-form.component.scss']
})
export class CabinetFormComponent implements OnInit, OnDestroy {
    routerSubscription: Subscription;
    cabinetForm: FormGroup;
    focusedFields: any;
    email:FormControl;
    name: FormControl;
    region: FormControl;
    filteredRegions: Observable<any[]>;
    fullAddress: FormControl;
    description: FormControl;
    regions: any[];

    constructor(private store: Store<fromRoot.AppState>, private dataService: AdminInteractionData) {
        this.routerSubscription = this.store.select(fromRoot.getResetState).subscribe((state) => {
            if (state['start'] === false) {
                this.dataService.setShowContentChildren(true);
                this.regions = [
                    {id: 1, name:'Одеська область.', flag:'./assets/images/flags/Coat_of_Arms_of_Odesa_Oblast.svg.png'},
                    {id: 2, name:'Дніпропетровська область', flag:'./assets/images/flags/Smaller_Coat_of_arms_of_Dnipropetrovsk_Oblast.svg.png'},
                    {id: 3, name:'Чернігівська область', flag:'./assets/images/flags/45px-Coat_of_Arms_of_Chernihiv_Oblast.png'},
                    {id: 4, name:'Харківська область', flag:'./assets/images/flags/COA_of_Kharkiv_Oblast.svg.png'},
                    {id: 5, name:'Житомирська область', flag:'./assets/images/flags/45px-Coat_of_Arms_of_Zhytomyr_Oblast.svg.png'},
                    {id: 6, name:'Полтавська область', flag:'./assets/images/flags/Large_Coat_of_Arms_of_Poltava_Oblast.svg.png'},
                    {id: 7, name:'Херсонська область', flag:'./assets/images/flags/Coat_of_Arms_of_Kherson_Oblast.svg.png'},
                    {id: 8, name:'Київська область', flag:'./assets/images/flags/45px-Coat_of_Arms_of_Kyiv_Oblast.png'},
                    {id: 9, name:'Запорізька область', flag:'./assets/images/flags/Coat_of_arms_of_Zaporizhia_Oblast.svg.png'},
                    {id: 10, name:'Луганська область', flag:'./assets/images/flags/Coat_of_Arms_Luhansk_Oblast.svg.png'},
                    {id: 11, name:'Донецька область', flag:'./assets/images/flags/Coat_of_Arms_of_Donetsk_Oblast_1999.svg.png'},
                    {id: 12, name:'Вінницька область', flag:'./assets/images/flags/45px-Coat_of_Arms_of_Vinnytsia_Oblast.svg.png'},
                    {id: 13, name:'Автономна Республіка Крим', flag:'./assets/images/flags/Emblem_of_Crimea.svg.png'},
                    {id: 14, name:'Миколаївська область', flag:'./assets/images/flags/Coat_of_Arms_of_Mykolaiv_Oblast.svg.png'},
                    {id: 15, name:'Кіровоградська область', flag:'./assets/images/flags/Coat_of_Arms_of_Kirovohrad_Oblast.svg.png'},
                    {id: 16, name:'Сумська область', flag:'./assets/images/flags/Coat_of_Arms_of_Sumy_Oblast.svg.png'},
                    {id: 17, name:'Львівська область', flag:'./assets/images/flags/45px-Coat_of_Arms_of_Lviv_Oblast.png'},
                    {id: 18, name:'Черкаська область', flag:'./assets/images/flags/Coat_of_Arms_of_Cherkasy_Oblast.svg.png'},
                    {id: 19, name:'Хмельницька область', flag:'./assets/images/flags/Coat_of_Arms_of_Khmelnytskyi_Oblast.svg.png'},
                    {id: 20, name:'Волинська область', flag:'./assets/images/flags/Volyn_coat_of_arms.svg.png'},
                    {id: 21, name:'Рівненська область', flag:'./assets/images/flags/45px-Coat_of_Arms_of_Rivne_Oblast.svg.png'},
                    {id: 22, name:'Івано-Франківська область', flag:'./assets/images/flags/Coat_of_Arms_of_Ivano-Frankivsk_Oblast.svg.png'},
                    {id: 23, name:'Тернопільська область', flag:'./assets/images/flags/Coat_of_Arms_of_Ternopil_Oblast.svg.png'},
                    {id: 24, name:'Закарпатська область', flag:'./assets/images/flags/45px-CarpathianRutheniaCoA.svg.png'},
                    {id: 25, name:'Чернівецька область', flag:'./assets/images/flags/Coat_of_Arms_of_Chernivtsi_Oblast.svg.png'}
                ];

                this.region = new FormControl(null, [Validators.required]);
                this.filteredRegions = this.region.valueChanges
                    .startWith(null)
                    .map(state => state ? this.filterRegions(state) : this.regions.slice());

                this.email = new FormControl(null, [Validators.required, Validators.email]);
                this.name = new FormControl(null, [Validators.required]);
                this.fullAddress = new FormControl();
                this.description = new FormControl(null, [Validators.required]);

                this.focusedFields = {
                    email: false,
                    name: false,
                    fullAddress:false,
                    description: false
                }
                this.cabinetForm = new FormGroup(
                    {
                        'email': this.email,
                        'name': this.name,
                        'fullAddress':this.fullAddress,
                        'description': this.description,
                        'region':this.region
                    }
                )
            }
        })
    }
    /*
    Кабинет:
    Название - строка
    логотип - фотка
    фоточка на заставку в кабинет - фотка
    Краткое описание - текстареа
    Физический адрес - разбить на отдельные поля
    Ссылки в интернете - массив строк
    Почта - email
    */
    ngOnInit() {
    }

    filterRegions(name: string) {
        return this.regions.filter(state =>
            state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }

    ngOnDestroy(){
        if(this.routerSubscription){
            this.routerSubscription.unsubscribe()
        }
    }


}
