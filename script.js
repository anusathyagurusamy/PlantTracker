

// Initial plant list
let plants = [
    { name: "Money Plant", 
        water: "200ml",
         watered: false,
        image:"money_plant.jpg"},

    { name: "Aloe Vera",
         water: "100ml", 
         watered: false ,
        image:"aloevera_plant.jpg"},

    { name: "Table Rose" ,
         water:"150ml",
         watered:false,
        image:"table_rose.webp"},

    { name: "Tomato", 
        water: "200ml", 
        watered: false ,
       image:"tomato_plant.jpg"},

    { name: "Pepper chilly",
         water: "100ml", 
         watered: false,
        image:"pepper_chilly_plant.jpg" },

    { name: "Snake plant" ,
         water:"150ml",
         watered:false,
        image:"snake_plant.jpg"},

    { name: "Hibiscus", 
        water: "200ml", 
        watered: false ,
      image:"hibiscus_plant.jpg"},

    { name: "Rose", 
        water: "100ml",
         watered: false ,
        image:"rose.jpg"},

    { name: "Jade" , 
        water:"150ml",
        watered:false,
      image:"jade_plant.jpg"},

    { name: "Tulasi",
         water: "200ml",
          watered: false,
        image:"tulasi_plant.jpg" },

    { name: "Curry Leave", 
        water: "100ml", 
        watered: false ,
      image:"curry_leaves.jpg"},

    { name: "Marudhani leaves",
         water:"150ml",
         watered:false,
        image:"marudhani_plant.webp"}

];



function showPage(page) {
    const content = document.getElementById('content');


    

    
    if (page === 'home') {

    let html = `<div class="home-container">`;

    html += `
        <div class="card">
            <h3>Add a New Plant</h3>
            <input type="text" id="plantName" placeholder="Plant Name...">
            <br><br>
            <button onclick="addNewPlant()">Add Plant</button>
        </div>
    `;

    plants.forEach((p, index) => {
    html += `
        <div class="card">

            <img src="${p.image}" alt="${p.name}" class="plant-img">

            <h3>${p.name}</h3>

            <p>Water Needed: ${p.water}</p>

            <button onclick="toggleWater(${index})">
                ${p.watered ? "Watered ✅" : "Mark as Watered"}
            </button>

        </div>
    `;
});


    html += `</div>`;

    content.innerHTML = html;
}



  else if (page === 'about') {
        content.innerHTML = `
            <div class="card" style="min-height: 80vh; color: #250649 " >
                <h1>🌿 About Our Smart Plant Tracker</h1>
                <p style="font-size: 1.2px; line-height: 1.6;">
                    Welcome to your personal gardening assistant. This platform is designed to bridge the gap between 
                    technology and nature. Whether you are a student, a professional, or a home gardening enthusiast, 
                    this tool helps you maintain optimal plant health through data-driven tracking.
                </p>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px;">
                    <div style="padding: 15px; border-left: 5px solid #eaf1ea; background:  #478eae;">
                        <h3>🎯 Our Mission</h3>
                        <p>To provide an offline-first, intuitive solution for monitoring plant growth, 
                        ensuring that no plant goes unwatered and every plant gets the care it deserves.</p>
                    </div>
                    <div style="padding: 15px; border-left: 5px solid #e0e8e0; background:  #478eae;">
                        <h3>💧 Why Tracking Matters</h3>
                        <p>Over-watering and under-watering are the leading causes of plant decay. 
                        Our tracker keeps a precise record of water intake to ensure your plants thrive in any environment.</p>
                    </div>
                </div>


                <h3 style="margin-top: 30px;">🚀 Key Features</h3>
                <ul style="line-height: 2;">
                    <li><strong>Real-Time Status:</strong> Instantly toggle between watered and unwatered states.</li>
                    <li><strong>Smart Recommendations:</strong> Get customized care tips based on your plant species.</li>
                    <li><strong>Offline Accessibility:</strong> Designed for reliability, even without constant internet access.</li>
                    <li><strong>Growth Monitoring:</strong> Keep a log of your plant's progress over time.</li>
                </ul>
                
                <p style="margin-top: 20px; font-style: italic;">
                    Developed as a Final Year Project for 2026. Dedicated to sustainable urban farming and green living.
                </p>
            </div>
        `;
    }


else if (page === 'environment condition') {
    content.innerHTML = `
        <div class="card" style="min-height: 80vh;  color:#250649 ">
            <h1>🌡️ Local Environmental Conditions</h1>
            <p style="color: #250649; margin-bottom: 20px;">
                Monitor real-time microclimate metrics for optimal plant growth and offline agricultural awareness.
            </p>

            <div style="display: grid; 
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
                gap: 20px; 
                margin-top: 30px;">

                <div style="background:  #f5596c ; padding: 20px; border-radius: 10px; border-top: 5px solid #b72323;">
                    <h3>🌱 Soil Moisture</h3>
                    <p style="font-size: 1.5rem; font-weight: bold; color: #2e7d32; margin-top: 10px;">42% (Optimal)</p>
                    <p style="font-size: 0.9rem; color: #d3cbcb; margin-top: 5px;">Last checked via offline sensor cache.</p>
                </div>

                <div style="background: #b6b622; padding: 20px; border-radius: 10px; border-top: 5px solid #e95916;">
                    <h3>☀️ Light Intensity</h3>
                    <p style="font-size: 1.5rem; font-weight: bold; color: #e65100; margin-top: 10px;">Bright Indirect</p>
                    <p style="font-size: 0.9rem; color: #d3cbcb; margin-top: 5px;">Ideal for indoor foliage and shade-loving crops.</p>
                </div>

                <div style="background: #55aed8; padding: 20px; border-radius: 10px; border-top: 5px solid #2196f3;">
                    <h3>🌡️ Ambient Temperature</h3>
                    <p style="font-size: 1.5rem; font-weight: bold; color: #01579b; margin-top: 10px;">28°C</p>
                    <p style="font-size: 0.9rem; color: #d3cbcb; margin-top: 5px;">Stable indoor atmospheric reading.</p>
                </div>

                <div style="background: #d25ddf; padding: 20px; border-radius: 10px; border-top: 5px solid #e91e63;">
                    <h3>💧 Air Humidity</h3>
                    <p style="font-size: 1.5rem; font-weight: bold; color: #880e4f; margin-top: 10px;">65%</p>
                    <p style="font-size: 0.9rem; color: #d3cbcb; margin-top: 5px;">Good moisture levels for tropical varieties.</p>
                </div>

            </div>

            <div style="margin-top: 40px; padding: 20px; background: #2e7d32; color: white; border-radius: 10px;">
                <h3>📡 Offline Sensor Sync</h3>
                <p>All environmental logs are saved locally on your device to ensure continuous monitoring even without active internet connectivity.</p>
            </div>
        </div>
    `;
}





else if (page === 'recommendations') {
        content.innerHTML = `
            <div class="card" style="min-height: 80vh; color: #250649 ">
                <h1>🌿 Plant Care Recommendations</h1>
                <p style="font-size: 1px; color:  #250649">
                Follow these expert guidelines to ensure your plants thrive in any environment.</p>

                <div style="display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
                    gap: 20px; 
                    margin-top: 30px;">

                    
                    <div style="background: #34bc41;
                     padding: 20px;
                     border-radius: 10px;
                     border-top: 5px solid #28712b;">

                        <h3>☀️ Sunlight Exposure</h3>
                        <p>Most indoor plants prefer <strong>bright, indirect light</strong>. Avoid placing delicate plants in harsh, direct afternoon sun, which can scorch the leaves.</p>
                    </div>


                    <div style="background: #ec9913; 
                     padding: 20px;
                     border-radius: 10px; 
                     border-top: 5px solid #ba740b;">

                        <h3>💧 Watering Strategy</h3>
                        <p>Always check the top inch of soil. If it is dry to the touch, it's time to water. Consistency is key to preventing root rot.</p>
                    </div>


                    <div style="background: #1ba3e2; 
                     padding: 20px; 
                     border-radius: 10px; 
                     border-top: 5px solid #1c7ac7;">

                        <h3>🌱 Soil & Fertilizer</h3>
                        <p>Use well-draining potting mix. Feed your plants with balanced, organic fertilizer once a month during the active growing season (Spring/Summer).</p>
                    </div>


                    <div style="background: #e21358; 
                     padding: 20px; 
                     border-radius: 10px; 
                     border-top: 5px solid #b31b4d;">

                        <h3>🛡️ Disease Prevention</h3>
                        <p>Regularly inspect leaves for pests. If you notice discoloration or spots, isolate the plant immediately to prevent spread.</p>
                    </div>

                </div>


                <div style="margin-top: 40px;
                 padding: 20px; 
                 background: #2e7d32; 
                 color: white;
                 border-radius: 10px;">

                    <h3>💡 Pro-Tip for Growth</h3>
                    <p>Rotate your plants every week so all sides receive equal light. This prevents the plant from growing lopsided and keeps the stem strong!</p>
                </div>
            </div>
        `;
    
    }



    else if (page === 'logs') {
    // 1. Build the basic layout and table header
    content.innerHTML = `
        <div class="card" style="min-height: 80vh;">
            <h1>📜 Watering History</h1>
            <p style="color: #0c184c; margin-bottom: 20px;">Review the activity log for your entire plant collection.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 1rem;">
                <thead>
                    <tr style="background-color: #2e7d32; color: white;">
                        <th style="padding: 15px; text-align: left;">Plant Name</th>
                        <th style="padding: 15px; text-align: left;">Water Required</th>
                        <th style="padding: 15px; text-align: left;">Status</th>
                    </tr>
                </thead>
                <tbody id="log-table-body">
                    <!-- Dynamic rows will be inserted here -->
                </tbody>
            </table>

            <div style="margin-top: 40px; padding: 20px; background: #e8f5e9; border-radius: 10px; border: 1px solid #c8e6c9;">
                <h3>📊 Data Insights</h3>
                <p>Keeping your logs updated helps ensure your offline agricultural system tracks hydration accurately across all varieties.</p>
            </div>
        </div>
    `;
    

    // 2. Select the table body where rows will go
    const tableBody = document.getElementById('log-table-body');

    // 3. Loop through your 'plants' array to create a row for every single plant
    plants.forEach(p => {
        // Determine status text and color based on the 'watered' boolean
        const statusText = p.watered ? 'Watered ✅' : 'Not Watered ❌';
        const statusColor = p.watered ? '#4caf50' : '#f44336';

        tableBody.innerHTML += `
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 15px; font-weight: bold;">${p.name}</td>
                <td style="padding: 15px;">${p.water}</td>
                <td style="padding: 15px; color: ${statusColor}; font-weight: bold;">${statusText}</td>
            </tr>
        `;
    });
}




}

function toggleWater(index) {
    plants[index].watered = !plants[index].watered;
    showPage('home'); 
}



function addNewPlant() {
    const nameInput = document.getElementById('plantName');
    
    if (nameInput.value.trim() === "") {
        alert("Please enter a plant name!");
        return; 
    }

    plants.push({ 
        name: nameInput.value, 
        water: "100ml", 
        watered: false 
    });
    
    showPage('home'); 
}



// Load Home by default
showPage('home');
