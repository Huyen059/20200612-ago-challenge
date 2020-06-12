document.getElementById('run').addEventListener('click', ()=>{
/*
//testing
    let str = 'abba';

    let strArr = str.split('');

    //console.log(strArr);

    let group2 = [];
    let j=0;
    for (let i=0;i<strArr.length;i++){
        if(strArr[i] == strArr[i+1]){
            console.log(strArr[i]);
            group2[j] = i;
            j++;
        }
    }


    console.log(group2);
    for (let i=0;i<group2.length;i++){
        let n = group2[i];
        if(strArr[n-1] == strArr[n+2]){
            console.log(strArr[n-1]+strArr[n]);
        };
    }

    1redder2
redderrotavatorabba
redderrotavatorabbadeleveledreleveler
liveontimeemitnoevilsexesredderrotavatorpullupifipullupabbadeleveledrelevelerdetartratedamanaplanacanalpanamasumsarenotsetasatestonerasmus
*/
//only work with abba and 1redder2
/*
    let str = '1redder2';
    let strArr = str.split('');
    let letters = '';
    let num = 1;
    console.log(strArr);
    
    for (let i=0;i<strArr.length;i++){
        if(strArr[i] == strArr[i+1]){
            for (let j=1;i-j>=0;j++){
                let start = i-j;
                let end = (i+1)+(j+1);
                let group = strArr.slice(start,end);  
                if(group.join() === group.reverse().join()){
                    //console.log(`${group.join('')} is the longest palin with ${group.length} letters.`);
                    letters = group.join('');
                    num = group.length;
                }
            }
        }
    }

    console.log(`${letters} is the longest palin with ${num} letters.`);
*/
    
    //let str = 'liveontimeemitnoevilsexesredderrotavatorpullupifipullupabbadeleveledrelevelerdetartratedamanaplanacanalpanamasumsarenotsetasatestonerasmus';
    let str=document.getElementById('test').value;
    let strArr = str.split('');
    let letters = '';
    let num = 1;
    //console.log(strArr);

    
    let group2 = [];
    let group3 = [];
    let iGroup2=0;
    let iGroup3=0;

    for (let i=0;i<strArr.length;i++){
        //for palin with even number of letter
        if (strArr[i]==strArr[i+1]) {
            group2[iGroup2] = i;
            iGroup2++;
        } 

        //for paling with odd number of letter
        if(strArr[i-1]==strArr[i+1]) {
            group3[iGroup3] = i;
            iGroup3++;
        }
    }
    //console.log(group2);
    //console.log(group3);

    group2.forEach(item => {
        //console.log(item);
        let i = item;
        for (let j=1; item-j>=0; j++){
            let start = item-j;
            let end = item + j + 2;
            let group = strArr.slice(start,end);  
            if(group.join() === group.reverse().join()){
                //console.log(`${group.join('')} is the longest palin with ${group.length} letters.`);
                if (group.length > num){
                    letters = group.join('');
                    num = group.length;
                }
            }
        }
    })

    group3.forEach(item => {
        //console.log(item);
        let i=item;
        for (let j=1; item-j>=0; j++){
            let start = item-j;
            let end = item+j+1;
            let group = strArr.slice(start,end);  
            if(group.join() === group.reverse().join()){
                //console.log(`${group.join('')} is the longest palin with ${group.length} letters.`);
                if (group.length > num){
                    letters = group.join('');
                    num = group.length;
                }
            }
        }
    })
    //console.log(`${letters} is the longest palin with ${num} letters.`);
    document.getElementById('result').innerHTML = `${letters} is the longest palin with ${num} letters.`;

})