function send() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    ranswer=parseInt(number1)*parseInt(number2);
    
    question="<h4>"+number1+"X"+number2+"</h4>";
    ib="<br>Answer:<input type='text' placeholder='Type The Answer Here' id='input_check_box'>";
    cb="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question+ib+cb;

    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").innerHTML="";
    document.getElementById("number2").innerHTML="";
}