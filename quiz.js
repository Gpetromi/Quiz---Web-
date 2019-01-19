var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;


var questions = [
  ["When did the first linux Kernel released?  ", "1989", "1991", "1993","B"],
  ["Which one of the following is NOT a Linux graphical desktop interface?", "Unity", "Blade", "Cinnamon","B"],
  ["Which one is NOT based in Linux ?", "Android", "Ubuntu", "Symbian","C" ],
  ["Which of the following is the most used Linux distro?", "Manjaro", "Mint", "Debian", "A"],
  ["Which programming language uses Javascript?","Java","Python","HTML","C"],
  ["How is a variable declared in Javascript?","int x","x","var x","C"],
  ["When did Python first appeared?","1986","1990","1996","B"],
  ["Which programming language is NOT Object Oriented?","Java","C#","C","C"],
  ["How is a variable declared in Python?","int x","x","var x","B"],
  ["When did C first appeared?","1960","1973","1991","B"]
  ];

function get(x){
  return document.getElementById(x);
}


function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You answered correct in   "+correct+" out of  "+questions.length+" questions!</h2>";
    get("test_status").innerHTML = "Test completed";

    pos = 0;
    correct = 0;

    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  test.innerHTML = "<h3>"+question+"</h3>";

  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit</button>";
}


function checkAnswer(){

  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  
  if(choice == questions[pos][4]){

    correct++;
  }

  pos++;

  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);