import React, {useRef} from 'react';

function LookupInput({setLookupData}) {
    const pnInputElement = useRef();
    const tokenInputElement = useRef();

    const setPnForLookup = () => {
        setLookupData({
            pn: pnInputElement.current.value,
            pageToken: tokenInputElement.current.value
        });
    }

    return <div>
                <label for='lookup-pn'>Phone number to look up:</label>
                <input id='lookup-pn' ref={pnInputElement}></input>
                <label for='lookup-token'>Your page token:</label>
                <input id='lookup-token' ref={tokenInputElement} autoComplete='off'></input>
                <button onClick={setPnForLookup}>Lookup</button>
           </div>
}

export {LookupInput}