function checkJob(){
    let text = document.getElementById("jobText").value.toLowerCase();

    if(text.trim() === ""){
        document.getElementById("result").innerHTML = "Please paste a job advert";
        return;
    }

    const redFlags = [
        {word:"registration fee", risk:"High"},
        {word:"interview fee", risk:"High"},
        {word:"training fee", risk:"High"},
        {word:"uniform fee", risk:"High"},
        {word:"pay before", risk:"High"},
        {word:"send money", risk:"High"},
        {word:"processing fee", risk:"High"},
        {word:"mtn momo", risk:"High"},
        {word:"airtel money", risk:"High"},
        {word:"western union", risk:"High"},
        {word:"ambulance fee", risk:"Medium"},
        {word:"fast recruitment", risk:"Medium"},
        {word:"no experience needed", risk:"Medium"},
        {word:"urgent recruitment", risk:"Medium"},
    ];

    let detected = redFlags.filter(flag => text.includes(flag.word));
    let level = "Low";

    if(detected.find(f => f.risk === "High")) level = "High Risk";
    else if (detected.find(f => f.risk === "Medium")) level = "Medium Risk";
    else level = "Low risk but be concious";

    let output = `<h3>Scan Result: ${level}</h3>`;

    if (detected.length > 0){
        output += `<b> Red Flags Found: </b><ul>`;
        detected.forEach(flag => output += `<li> ${flag.word} (${flag.risk})</li>`);
        output += `</ul>`;
    }

    output += `
      <h4>🛡️ Recommended Advice:</h4>
      <ul>
        <li>Never pay to get a job</li>
        <li>Verify the company on Google/LinkedIn</li>
        <li>Ask for a business registration number</li>
        <li>Search online: "[company name] scam"</li>
      </ul>
      <p><b>If they ask for money → It's a scam.</b></p>
    `;

    document.getElementById("result").innerHTML = output;
}