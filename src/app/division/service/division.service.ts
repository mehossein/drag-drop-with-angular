import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/core/classes/base.service';

@Injectable()
export class DivisionService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }
}
