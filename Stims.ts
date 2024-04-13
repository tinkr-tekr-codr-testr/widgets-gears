import {Observable} from 'rxjs';

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

export const selectFrom = (payload: string[]) => {
  const index = Math.floor(Math.random() * payload.length);
  return payload[index];
};
