import {BehaviorSubject, Observable} from 'rxjs';
import {filter, map, tap} from "rxjs/operators";

class EventBus {

    private instance = new BehaviorSubject<{[eventName: string]: unknown}>({});

    publish(eventName: string, data: unknown): void {
        this.instance.next({
            ...this.instance.getValue(), // non corretto, semplificazione per il workshop
            [eventName]: data
        });
    }

    get(eventName: string): Observable<string> {
        return this.instance
            .pipe(
                //tap(console.log),
                filter((value: {[eventName: string]: unknown}) => !!value[eventName]),
                map(value => value[eventName])
            ) as Observable<string>;
    }
}

(window as any).eventBus = new EventBus();
