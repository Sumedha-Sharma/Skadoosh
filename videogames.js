var quesno=0;
var count=0;
const getQ=()=>{
   
  var  difficulty=document.getElementById("diff").value;
  var number=document.getElementById("num").value;
  var videog=`https://opentdb.com/api.php?amount=${number}&category=15&difficulty=${difficulty}&type=multiple`;
    var data = fetch(videog).then(
        (res)=>{
          console.log(res);
          return res.json();
                
          }).then(
            (data)=>{
    
                console.log(data);
               let arr=data;
             
               document.getElementById("mess").style.display="none";
               document.getElementById("quiz-con").style.display="flex";
              
              var questioncon=document.getElementById("ques-con");
               var optionscon=document.getElementById("option-con");
               
                var questionw=arr.results[quesno];
                console.log(questionw);
                var qstatement=questionw.question;
                // <div id="ques-con">
                //     <div class="ques-no">

                //     </div>
                //     <div class="ques-state">
                        
                //     </div>
                questioncon.innerHTML= `
                <div class="ques-no">
                ${quesno+1}
                    </div>
                <div class="ques-state">
                        ${qstatement}
                        </div`
                var ostatement=questionw.incorrect_answers;
                var corans=questionw.correct_answer;
                const min = 0;
                const max = 4;
                var ranu= Math.floor(Math.random() * (max - min)) + min;
                ostatement.splice(ranu, 0, corans);
                optionscon.innerHTML="";
              
                for(let i=0;i<4;i++){
                  const option1 = document.createElement("div");
                  option1.className = "opt";
                  optionscon.appendChild(option1);
                  const opt_n= document.createElement("div");
                  opt_n.className = "opt-no";
                  opt_n.innerHTML=`${String.fromCharCode(65+i)}`;
                  option1.appendChild(opt_n);
                  const opt_st= document.createElement("div");
                  opt_st.className = "opt-st";
                  opt_st.innerHTML=`${ostatement[i]}`;
                  option1.appendChild(opt_st);
                  option1.onclick=function () { var choice =opt_st.innerHTML;
                    console.log(choice);
                    if(choice==corans){
                      option1.classList.add("correct");
                      console.log("ding");
                      count=count+1;
                      console.log(count)
                    }else{
                      option1.classList.add("wrong");
                      var opti=optionscon.children;
                      
                      for(let j=0;j<4;j++){
                       var op=opti[j].children[1].innerHTML;
                       if(op==corans){
                        opti[j].classList.add("correct");
                        console.log("haha")
                       }
                        
                       
                      }
                    }
                  
                  }
                   
                 

              //     optionscon.innerHTML=optionscon.innerHTML+`<div class="opt"  onclick="check(this)">
              //     <div class="opt-no">
              //     ${String.fromCharCode(65+i)}
              //     </div>
              //     <div class="opt-st">
              //     ${ostatement[i]}
              //     </div>
              //  </div>`;
              //  var opt=document.getElementsByClassName("opt")[i];
              //  opt.setAttribute("onclick", "check(this)");

                  
                
               
              }

            //  document.getElementsByClassName[0].addEventListener("click", function() {
            //   console.log("hehe")
            // });
              quesno=quesno+1;  
              if(quesno==number){
                document.getElementById("quiz-con").style.display="none";
                document.getElementById("result").style.display="flex";
                document.getElementById("score").innerHTML=`${count}/${number}`
              }
              function check(e){
                var choice =this.innerHTML;
                console.log(choice);
              }
            
              


    
              

            
               
            }
    
          )
}