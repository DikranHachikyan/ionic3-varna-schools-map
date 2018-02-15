import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { School } from './school';
import { SCHOOL_DATA } from './school.data';
@Injectable()
export class StaticDataSource{
	
	getSchoolsList():Observable<School[]>{
		return Observable.of(SCHOOL_DATA);
	} 

}
