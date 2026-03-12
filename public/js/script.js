const socket=io();
if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
        
        const {latitude,longitude}=position.coords;
        socket.emit("locationUpdate",{latitude,longitude});
    },(error)=>{
        console.error("Error getting location:",error);
    },
    {
        enableHighAccuracy:true,
        maximumAge:0,
        timeout:5000
    }
);
}
const map=L.map("map").setView([0,0],10);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
).addTo(map);

const marker={};
socket.on("liveLocation",(data)=>{
    const {id,latitude,longitude}=data;
    map.setView([latitude,longitude],10);
    if(marker[id]){
        marker[id].setLatLng([latitude,longitude]);
    }
    else{
        marker[id]=L.marker([latitude,longitude]).addTo(map);
    }
});

