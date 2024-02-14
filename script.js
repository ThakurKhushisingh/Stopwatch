res=document.getElementById('reset');
let a=0;
let b=0;
let c=0;
start.addEventListener('click',(e)=>{
    start.style.background='green';
    lap=document.querySelector('.lap'); 
    if(start.innerHTML=='Start') {
        start.innerHTML='Start.';
        setInterval(() => {
            if(c=='100'){
                c='0'
                b++;
                if(b=='60'){
                    a++;
                    b=0;
                }
            }
            else{
                c++;
                document.getElementById('ms').innerHTML=c;
                document.getElementById('s').innerHTML=b+':';
                document.getElementById('m').innerHTML=a+':';
                
            }
        },10);
    } })
    
    res.addEventListener('click',(e)=>{
        a=0;
        s=0;
        b=0;
        t=0;
        c=0;
        u=0;
        w=0;
        v=0;
        document.getElementById('a1').innerHTML='';
        document.getElementById('a2').innerHTML='';
        document.getElementById('a3').innerHTML='';
        document.getElementById('a4').innerHTML='';
        document.getElementById('a5').innerHTML='';
        start.style.background='white';
        lap.style.background='white';

    })
            let s=0;
            let t=0;
            let u=0;
            let v=0;
            let w=0;
            
            lap=document.getElementById('lap');
            lap.addEventListener('click',(e)=>{
                s++;
                t++;
                v++;
                w++;
                u++;
                if(s=='1'){
                    
                    document.getElementById('a1').innerHTML='1-Lap='+a+':'+b+'.'+c;
                }
                if(t=='2'){
                    document.getElementById('a2').innerHTML='2-Lap='+a+':'+b+'.'+c;
                }
            if(u=='3'){
                document.getElementById('a3').innerHTML='3-Lap='+a+':'+b+'.'+c;
            }
            if(v=='4'){
                document.getElementById('a4').innerHTML='4-Lap='+a+':'+b+'.'+c;
            }
            if(w=='5'){
                document.getElementById('a5').innerHTML='5-Lap='+a+':'+b+'.'+c;
                lap.style.background='green';
            }
           
                  
            
                                });
                                addEventListener('click',(e)=>{

                                });