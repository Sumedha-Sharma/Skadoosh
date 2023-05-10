//var searchVal=document.getElementById("search-b").value;
//var  difficulty=document.getElementById("diff").value;
//var number=document.getElementById("num").value;
//var ranurl=`https://opentdb.com/api.php?amount=${number}&type=multiple`;
//var gk=`https://opentdb.com/api.php?amount=${number}&category=9&difficulty=${difficulty}&type=multiple`;
// var book=`https://opentdb.com/api.php?amount=${number}&category=10&difficulty=${difficulty}&type=multiple`;
// var film=`https://opentdb.com/api.php?amount=${number}&category=11&difficulty=${difficulty}&type=multiple`;
// var music=`https://opentdb.com/api.php?amount=${number}&category=12&difficulty=${difficulty}&type=multiple`;
// var mt=`https://opentdb.com/api.php?amount=${number}&category=13&difficulty=${difficulty}&type=multiple`;
// var tv=`https://opentdb.com/api.php?amount=${number}&category=14&difficulty=${difficulty}&type=multiple`;
// var videog=`https://opentdb.com/api.php?amount=${number}&category=15&difficulty=${difficulty}&type=multiple`;
// var boardg=`https://opentdb.com/api.php?amount=${number}&category=16&difficulty=${difficulty}&type=multiple`;
// var nature=`https://opentdb.com/api.php?amount=${number}&category=17&difficulty=${difficulty}&type=multiple`;
// var comp=`https://opentdb.com/api.php?amount=${number}&category=18&difficulty=${difficulty}&type=multiple`;
// var math=`https://opentdb.com/api.php?amount=${number}&category=19&difficulty=${difficulty}&type=multiple`;
// var myth=`https://opentdb.com/api.php?amount=${number}&category=20&difficulty=${difficulty}&type=multiple`;
// var sports=`https://opentdb.com/api.php?amount=${number}&category=21&difficulty=${difficulty}&type=multiple`;
// var geo=`https://opentdb.com/api.php?amount=${number}&category=22&difficulty=${difficulty}&type=multiple`;
// var history=`https://opentdb.com/api.php?amount=${number}&category=23&difficulty=${difficulty}&type=multiple`;
// var pol=`https://opentdb.com/api.php?amount=${number}&category=24&difficulty=${difficulty}&type=multiple`;
// var art=`https://opentdb.com/api.php?amount=${number}&category=25&difficulty=${difficulty}&type=multiple`;
// var celeb=`https://opentdb.com/api.php?amount=${number}&category=26&difficulty=${difficulty}&type=multiple`;
// var animal=`https://opentdb.com/api.php?amount=${number}&category=27&difficulty=${difficulty}&type=multiple`;
// var url;
//  document.getElementById("random").addEventListener("click",()=>{
//     url=ranurl
//  } );
//  document.getElementById("general-knowledge").addEventListener("click",()=>{
//     url=gk
//  } );
//  document.getElementById("books").addEventListener("click",()=>{
//     url=book
//  } );
//  document.getElementById("film").addEventListener("click",()=>{
//     url=film
//  } );
//  document.getElementById("music").addEventListener("click",()=>{
//     url=music
//  } );
//  document.getElementById("music-theatre").addEventListener("click",()=>{
//     url=mt
//  } );
//  document.getElementById("television").addEventListener("click",()=>{
//     url=tv
//  } );
//  document.getElementById("video-games").addEventListener("click",()=>{
//     url=videog
//  } );
//  document.getElementById("board-games").addEventListener("click",()=>{
//     url=boardg
//  } );
//  document.getElementById("nature").addEventListener("click",()=>{
//     url=nature
//  } );
//  document.getElementById("computer").addEventListener("click",()=>{
//     url=comp
//  } );
//  document.getElementById("mathematics").addEventListener("click",()=>{
//     url=math
//  } );
//  document.getElementById("mythology").addEventListener("click",()=>{
//     url=myth
//  } );
//  document.getElementById("sports").addEventListener("click",()=>{
//     url=sports
//  } );
//  document.getElementById("geography").addEventListener("click",()=>{
//     url=geo
//  } );
//  document.getElementById("history").addEventListener("click",()=>{
//     url=history
//  } );
//  document.getElementById("politics").addEventListener("click",()=>{
//     url=pol
//  } );
//  document.getElementById("arts").addEventListener("click",()=>{
//     url=art
//  } );
//  document.getElementById("celebrity").addEventListener("click",()=>{
//     url=celeb
//  } );
//  document.getElementById("animal").addEventListener("click",()=>{
//     url=animal
//  } );
var quesno=0;
var count=0;
const getQ=()=>{
   
  var  difficulty=document.getElementById("diff").value;
  var number=document.getElementById("num").value;
  number++;
  console.log("number:",number);
  var gk=`https://opentdb.com/api.php?amount=${number}&category=9&difficulty=${difficulty}&type=multiple`;
    
    var data = fetch(gk).then(
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
                document.getElementById("score").innerHTML=`${count}/${--number}`;
                console.log(quesno)
              }
              
              function check(e){
                var choice =this.innerHTML;
                console.log(choice);
              }
            
              


    
              

            
               
            }
    
          )
}


