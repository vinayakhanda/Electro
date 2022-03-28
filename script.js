var suggestions = [""];

function Calculate(){
        //appliance[ac]
    var acNo = document.getElementById("ac").value;
    var acHour = document.getElementById("acHour").value;
    var acPower = 1500;
    var acMaxPower = 23000;
    var totalAcHour = acNo * acPower;
    var acday = totalAcHour * acHour;
    var acMonth = acday * 30;

    //appliance[Tv]
    var tvNo = document.getElementById("tv").value;
    var tvHour = document.getElementById("tvHour").value;
    var tvPower = 70;
    var tvMaxPower = 350;
    var totaltvHour = tvNo * tvPower;
    var tvday = totaltvHour * tvHour;
    var tvMonth = tvday * 30;

    //appliance[fridge]
    var fridgeNo = document.getElementById("fridge").value;
    var fridgeHour = document.getElementById("fridgeHour").value;
    var fridgePower = 250;
    var fridgeMaxPower = 6000;
    var totalfridgeHour = fridgeNo * fridgePower;
    var fridgeday = totalfridgeHour * fridgeHour;
    var fridgeMonth = fridgeday * 30;

    //appliance[WashingMachine]
    var wmNo = document.getElementById("wm").value;
    var wmHour = document.getElementById("wmHour").value;
    var wmPower = 255;
    var wmMaxPower = 600;
    var totalwmHour = wmNo * wmPower;
    var wmday = totalwmHour * wmHour;
    var wmMonth = wmday * 30;

    //appliance[geyser]
    var geyserNo = document.getElementById("geyser").value;
    var geyserHour = document.getElementById("geyserHour").value;
    var geyserPower = 2000;
    var geyserMaxPower = 6000;
    var totalgeyserHour = geyserNo * geyserPower;
    var geyserday = totalgeyserHour * geyserHour;
    var geyserMonth = geyserday * 30;

    //appliance[microwave]
    var microNo = document.getElementById("micro").value;
    var microHour = document.getElementById("microHour").value;
    var microPower = 2500;
    var microMaxPower = 5000;
    var totalmicroHour = microNo * microPower;
    var microday = totalmicroHour * microHour;
    var microMonth = microday * 30;

    //appliance[comp]
    var compNo = document.getElementById("comp").value;
    var compHour = document.getElementById("compHour").value;
    var compPower = 1500;
    var compMaxPower = 6000;
    var totalcompHour = compNo * compPower;
    var compday = totalcompHour * compHour;
    var compMonth = compday * 30;

    //appliance[bulb]
    var blbNo = document.getElementById("blb").value;
    var blbHour = document.getElementById("blbHour").value;
    var blbPower = 10;
    var blbMaxPower = 400;
    var totalblbHour = blbNo * blbPower;
    var blbday = totalblbHour * blbHour;
    var blbMonth = blbday * 30;

    //appliance[fans]
    var fansNo = document.getElementById("fans").value;
    var fansHour = document.getElementById("fansHour").value;
    var fansPower = 35;
    var fansMaxPower = 900;
    var totalfansHour = fansNo * fansPower;
    var fansday = totalfansHour * fansHour;
    var fansMonth = fansday * 30;

    //appliance[Induction cooker]
    var icNo = document.getElementById("ic").value;
    var icHour = document.getElementById("icHour").value;
    var icPower = 1900;
    var icMaxPower = 400;
    var totalicHour = icNo * icPower;
    var icday = totalicHour * icHour;
    var icMonth = icday * 30;

    //appliance[tubeLight]
    var tubeNo = document.getElementById("tube").value;
    var tubeHour = document.getElementById("tubeHour").value;
    var tubePower = 15;
    var tubeMaxPower = 300;
    var totaltubeHour = tubeNo * tubePower;
    var tubeday = totaltubeHour * tubeHour;
    var tubeMonth = tubeday * 30;


    var elRate = document.getElementById("elRate").value;
    var totalUsage = 0;

    document.getElementById("acday").innerHTML = acday/1000;
    document.getElementById("acMonth").innerHTML = (acday/1000)*30;
    totalUsage += (acday/1000)*30;

    if (acday > acMaxPower) {
        suggestions.push("You should Decrease the Usage A/c or you should buy an Ac with more efficient power usage ")
    };

    document.getElementById("tvday").innerHTML = tvday/1000;
    document.getElementById("tvMonth").innerHTML = (tvday/1000)*30;
    totalUsage += (tvday/1000)*30;

    if (tvday > tvMaxPower) {
        suggestions.push("You should Decrease the Usage TV or you should buy a Tv with more efficient power usage ")
    };

    document.getElementById("fridgeday").innerHTML = fridgeday/1000;
    document.getElementById("fridgeMonth").innerHTML = (fridgeday/1000)*30;
    totalUsage += (fridgeday/1000)*30;

    if (fridgeday > fridgeMaxPower) {
        suggestions.push("You should Decrease the Usage fridge or you should buy a fridge with more efficient power usage ")
    };

    document.getElementById("wmday").innerHTML = wmday/1000;
    document.getElementById("wmMonth").innerHTML = (wmday/1000)*30;
    totalUsage += (wmday/1000)*30;

    if (wmday > wmMaxPower) {
        suggestions.push("You should Decrease the Usage Washing Machine or you should buy a washing Machine with more efficient power usage ")
    };

    document.getElementById("geyserday").innerHTML = geyserday/1000;
    document.getElementById("geyserMonth").innerHTML = (geyserday/1000)*30;
    totalUsage += (geyserday/1000)*30;


    if (geyserday > geyserMaxPower) {
        suggestions.push("You should Decrease the Usage of Geyser or you should buy a geyser with more efficient power usage ")
    };

    document.getElementById("microday").innerHTML = microday/1000;
    document.getElementById("microMonth").innerHTML = (microday/1000)*30;
    totalUsage += (microday/1000)*30;

    if (microday > microMaxPower) {
        suggestions.push("You should Decrease the Usage of Microwave or you should buy a Microwave with more efficient power usage ")
    };

    document.getElementById("compday").innerHTML = compday/1000;
    document.getElementById("compMonth").innerHTML = (compday/1000)*30;
    totalUsage += (compday/1000)*30;

    if (compday > compMaxPower) {
        suggestions.push("You should Decrease the Usage of computer or you should buy a computer with more efficient power usage ")
    };
    
    document.getElementById("blbday").innerHTML = blbday/1000;
    document.getElementById("blbMonth").innerHTML = (blbday/1000)*30;
    totalUsage += (blbday/1000)*30;

    if (blbday > blbMaxPower) {
        suggestions.push("You should Turn off the bulbs when not in use or use the bulbs which are more power efficient ")
    };

    document.getElementById("fanday").innerHTML = fansday/1000;
    document.getElementById("fanMonth").innerHTML = (fansday/1000)*30;
    totalUsage += (fansday/1000)*30;


    if (fansday > fansMaxPower) {
        suggestions.push("You should Turn off the fans when not in use or use the fans which are more power efficient ")
    };

    document.getElementById("icday").innerHTML = icday/1000;
    document.getElementById("icMonth").innerHTML = (icday/1000)*30;
    totalUsage += (icday/1000)*30;


    if (icday > icMaxPower) {
        suggestions.push("You should Decrease the Usage of Induction cooker or you should buy an Induction cookerwith more efficient power usage")
    };

    document.getElementById("tubeday").innerHTML = tubeday/1000;
    document.getElementById("tubeMonth").innerHTML = (tubeday/1000)*30;
    totalUsage += (tubeday/1000)*30;


    if (tubeday > tubeMaxPower) {
        suggestions.push("Turn off the tubelights when not in use or use the Tubes which are more power efficient ")
    };


    document.getElementById("sgst").innerHTML = suggestions.join("<br>")

    //Now begins the code for calculating total expenses and usage.... 
    document.getElementById("ttlpwr").innerHTML = "total electricity usage (in kilowatt) : " + totalUsage;
    document.getElementById("emCost").innerHTML = "Estimated bill amount : " + totalUsage * elRate;
    document.getElementById("sgst").innerHTML = suggestions.join("<br>")
    
    if (elRate == 0) {
        alert("Plz enter the Price of electricity")
    }


}
console.log("Made by Vinayak Handa (github.com/vinayakhanda)")
//Made by Vinayak Handa (github.com/vinayakhanda)
