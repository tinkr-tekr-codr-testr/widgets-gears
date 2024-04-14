import {Observable} from 'rxjs';
import { selectFrom } from './utils';

export const Stim = (beacon: Observable<number>, index: number, payload: string[])=>{
  const stimStream = Observable.create(function(observer){
    beacon.subscribe(signal=>{
      if(index > signal){
        observer.next(selectFrom(payload))
      }
    })  
  })

  return stimStream;

}

