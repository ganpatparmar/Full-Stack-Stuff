document.query



function selectSem(){
    var indexSelected = document.querySelector("#inputsemester4").selectedIndex
     assignSubjects(indexSelected)
}




function assignSubjects(indexSelected) {
    var nodeList = document.getElementById("inputsubject")
    var sem1Subjects = ["Physics","Maths-1","BEE","EGD","IP","Workshop"]
    var sem2Subjects = ["English","PPS","BME","ES","Math-2","BE"]
    var sem3Subjects = ["ETC","P&S","IC","DE-1","DS","DBMS","DF"]
    var sem4Subjects = ["DE","OS","OOP-1","COA","DM","PEM"]
    $("#inputsubject").empty();
     
    
   
    switch (indexSelected) {
        case 1:
            for (let i = 0; i < sem1Subjects.length; i++) {
                var first = document.createElement("option")
                first.text = sem1Subjects[i]
                nodeList.add(first,i)
            }           
            break;

        case 2:
            for (let i = 0; i < sem2Subjects.length; i++) {
                var second = document.createElement("option")
                second.text = sem2Subjects[i]
                nodeList.add(second,i)
            }
            break

        case 3:
            for (let i = 0; i < sem3Subjects.length; i++) {
                var third = document.createElement("option")
                third.text = sem3Subjects[i]
                nodeList.add(third,i)
            }
            break
        case 4:
            for (let i = 0; i < sem4Subjects.length; i++) {
                var fourth = document.createElement("option")
                fourth.text = sem4Subjects[i]
                nodeList.add(fourth,i)
            }

            
        default:
            break;
    }
    
    
}

function assignBatch(){


    
    var indexSelectedC = document.getElementById("inputcomponent").selectedIndex
    var indexSelectedD = document.getElementById("inputdivision").selectedIndex

    // alert(indexSelectedD)
    var gDivision = ["G1","G2","G3","G4"]
    var hDivision = ["H1","H2","H3","H4"]
    var nodeList = document.getElementById("inputbatch")
    
    $("#inputbatch").empty();
    

    if (indexSelectedD === 1 && indexSelectedC === 2) {
        for (let i = 0; i < gDivision.length; i++) {
            var fourth = document.createElement("option")
            fourth.text = gDivision[i]
            nodeList.add(fourth,i)
        }
    }  else if(indexSelectedD === 2 && indexSelectedC === 2) {
        for (let i = 0; i < hDivision.length; i++) {
            var one = document.createElement("option")
            one.text = hDivision[i]
            nodeList.add(one,i)
        }
    }
    else{
        var two = document.createElement("option")
        two.text = "---"
        nodeList.add(two,0)
    }

}

