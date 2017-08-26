import {EventEmitter} from "@angular/core";
import {ErrorComponent} from './error.model';
export class ErrorService{
    errorOccured = new EventEmitter<ErrorComponent>();

    handleError(error : any){
        const errorData = new ErrorComponent(error.title, error.message);
        this.errorOccured.emit(errorData);
    }
}