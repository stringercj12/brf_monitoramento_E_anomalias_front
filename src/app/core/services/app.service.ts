import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  sidebarIsActive: Subject<boolean> = new Subject();
  dadosCompartilhados$ = this.sidebarIsActive.asObservable();

  constructor() {
  }


  sidebarShow() {
    console.log(`sidebarShow`);
    this.sidebarIsActive.next(true);
  }

  sidebarHide() {
    console.log(`sidebarHide`);
    this.sidebarIsActive.next(false);
  }

}
