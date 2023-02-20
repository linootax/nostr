export const getEventData = (key: string)=>{

    let arr =[];
    var ws = new WebSocket("wss://nostr-pub.wellorder.net");

    ws.addEventListener('open', function (event) {
        ws.send('["REQ", "my-sub", {"kinds":[1], "authors":["35d26e4690cbe1"], "limit":10}]');
    });

    return new Promise((resolve, reject)=>{
        ws.addEventListener("message", (event)=>{
            let eventKey = key;
            let data=JSON.parse(event.data)[2][eventKey];
            arr.push(data);
        });

            setTimeout(()=>{
                resolve(arr)
             }, 3000)
    })
}