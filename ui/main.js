var button = document.getElementById('counter');

button.onclick = function() {
  
    //creat a request
    var request = new XMLHttpRequest();
    
    //capture
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementbyId('count');
                span.innerHTML = counter.toString();
            }
        }
    }
    
    request.open('GET','http://varun9597.imad.hasura-app.io/counter',true);
    request.send(null);
};