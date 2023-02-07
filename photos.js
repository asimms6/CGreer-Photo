document.addEventListener("DOMContentLoaded", function(event) {
        var request = new XMLHttpRequest();
        request.open("GET", "currentCamera.txt");
        request.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                document.getElementById("cameraInfo").innerHTML = this.responseText;
            }
        };
        request.send();
})


