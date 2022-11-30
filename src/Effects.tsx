import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    const [number, setNum] = useState(-1);

    let callback = (num: number) => {
        setNum(num);
    };

    useEffect(() => {
        setNum(-1);
        subscribe(props.sourceId, callback);
        return () => {
            unsubscribe(props.sourceId, callback);
        };
    }, [props.sourceId]);

    return (<div>{props.sourceId}: {number}</div>);
}
