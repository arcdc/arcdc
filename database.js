// database.js
const playerList = [
    {
        name: "zombiegroan1",
        riskLevel: "Unknown",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/1830543210/profile"
    },
    {
        name: "zombiegroan3",
        riskLevel: "Unknown",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/1454821643/profile"
    },
    {
        name: "kingwafoko1",
        riskLevel: "Unknown",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/1210631099/profile"
    },
    {
        name: "e0hg35n_bj0996y2",
        riskLevel: "Low",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/3795922848/profile"
    },
    {
        name: "KaKaExplosive",
        riskLevel: "Medium",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/1330762084/profile"
    },
    {
        name: "wearingnikeshorts",
        riskLevel: "Low",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4758090788/profile"
    },
    {
        name: "ScarzIsCute",
        riskLevel: "Low",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/1633338035/profile"
    },
    {
        name: "hacxerdude6",
        riskLevel: "Low",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/2763304874/profile"
    },
    {
        name: "BroThinksHesBatmanL",
        riskLevel: "Low",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4881268645/profile"
    },
    {
        name: "Driftingguy13",
        riskLevel: "Medium",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/2267783326/profile"
    },
    {
        name: "ApocAimGod",
        riskLevel: "High",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4870104121/profile"
    },
    {
        name: "popsicleprincessOO",
        riskLevel: "High",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/1432709200/profile"
    },
    {
        name: "Whodoyouknowiknowyou",
        riskLevel: "High",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/2930921631/profile"
    },
    {
        name: "DarkyFear",
        riskLevel: "High",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/202830362/profile"
    },
    {
        name: "aleliuj27",
        riskLevel: "High",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4853485259/profile"
    },
    {
        name: "ADIANCLAnNEALAND_294",
        riskLevel: "High",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4837379148/profile"
    },
    {
        name: "Cladman228x",
        riskLevel: "Medium",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4881112073/profile"
    },
    {
        name: "HereIamAgain5",
        riskLevel: "High",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4881252156/profile"
    },
    {
        name: "shroomdoomofloom",
        riskLevel: "Severe",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4876230454/profile"
    },
    {
        name: "Banwoods",
        riskLevel: "Unknown",
        gamesPlayed: "Unknown",
        profileLink: "https://www.roblox.com/users/1856694977/profile"
    },
    {
        name: "superdemondragon",
        riskLevel: "Severe",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/501653200/profile"
    },
    {
        name: "d_wkin",
        riskLevel: "Unknown",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/95933654/profile"
    },
    {
        name: "ScadoliSmoka",
        riskLevel: "Low",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/2375368228/profile"
    },
    {
        name: "Fireblister1234",
        riskLevel: "Unknown",
        gamesPlayed: "New",
        profileLink: "https://www.roblox.com/users/3714614794/profile"
    },
    {
      name: "nicokvarashelia",
      riskLevel: "Medium",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4888737153/profile"
    },
    {
      name: "ApocMasterZ17",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/619970789/profile"
    },
    {
      name: "uni123207",
      riskLevel: "High",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1884398612/profile"
    },
    {
      name: "noodlesndoodlesOO",
      riskLevel: "High",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1328398743/profile"
    },
    {
      name: "ParadiseLost95",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1779257758/profile"
    },
    {
      name: "8BitLive",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1767541234/profile"
    },
    {
      name: "RacoonPossum",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1821887002/profile"
    },
    {
      name: "Apoc1_SCARL",
      riskLevel: "High",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4875864359/profile"
    },
    {
      name: "Relyxx",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/32905446/profile"
    },
    {
      name: "jmylguia",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4890822331/profile"
    },
    {
      name: "XXXANUNAKI1",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4892718880/profile"
    },
    {
      name: "XOXU101",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4892726752/profile"
    },
    {
      name: "Apocs_F1nest",
      riskLevel: "Low",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4892885327/profile"
    },
    {
      name: "fgffrtfgfgfgfg",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/3979648750/profile"
    },
    {
      name: "TiberiumWolfAlt",
      riskLevel: "High",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4894342557/profile"
    },
    {
      name: "TiberiumWolf",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/30763488/profile"
    },
    {
      name: "therealthughunter5",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4894059186/profile"
    },
    {
      name: "Guspenpen",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/296260654/profile"
    },
    {
      name: "Blinking_Issues",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1072841489/profile"
    },
    {
      name: "GrabTheShotgun",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/101405159/profile"
    },
    {
      name: "superman1_forever",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/609513151/profile"
    },
    {
      name: "MicroscopicScarz",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1518666355/profile"
    },
    {
      name: "ColossalScarz",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1863972664/profile"
    },
    {
      name: "bouncydogfuneral1238",
      riskLevel: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/3703441450/profile"
    },
    {
      name: "Phantom_Shizuku",
      riskLevel: "Severe",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4888824026/profile"
    },
    {
      name: "neosword78",
      riskLevel: "Medium",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1132761699/profile"
    },
    {
      name: "ExoticAlpha39",
      riskLevel: "Severe",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4899631895/profile"
    },
    {
      name: "merlotthecat",
      riskLevel: "Severe",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1599049669/profile"
    },
    {
      name: "wojanfilemonowicz11",
      riskLevel: "Severe",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1954693883/profile"
    },
  ];
  
  // Function to create and populate the table
  // Function to create and populate the table
  function createTable() {
    const table = document.querySelector("#player-table table");
    const header = table.createTHead();
    const headerRow = header.insertRow();
  
    // Table Header
    const headers = ["Risk", "Username", "Game(s)", "Profile"];
    headers.forEach(headerText => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
  
    // Clear existing table rows
    const tbody = table.querySelector("tbody");
    if (tbody) {
      tbody.remove();
    }
    const newTbody = document.createElement("tbody");
    table.appendChild(newTbody);
  
    // Sort playerList alphabetically based on names
    playerList.sort((a, b) => a.name.localeCompare(b.name));
  
    playerList.forEach(player => {
      const row = newTbody.insertRow();
  
      // Create and add the risk level text box
      const riskCell = row.insertCell();
      const riskBox = document.createElement("div");
      riskBox.textContent = player.riskLevel;
      riskBox.classList.add("risk-box");
  
      // Add a class for the risk level based on its name
      riskBox.classList.add(player.riskLevel.toLowerCase());
  
      // Add event listener to navigate to levels.html on risk box clic
  
      riskCell.appendChild(riskBox);
  
      const nameCell = row.insertCell();
      nameCell.textContent = player.name;
  
      const gamesCell = row.insertCell();
      gamesCell.textContent = player.gamesPlayed;
  
      const profileCell = row.insertCell();
      const profileLink = document.createElement("a");
      profileLink.textContent = "Profile";
      profileLink.href = player.profileLink; // Set the href to the player's profile link
      profileLink.target = "_blank"; // Open the link in a new tab
      profileCell.appendChild(profileLink);
    });
  }
  
  
  // Function to get the color based on the risk level
  function getRiskLevelColor(riskLevel) {
    switch (riskLevel) {
      case "Unknown":
        return "#427898"; // Blue
      case "Low":
        return "#008000"; // Green
      case "Medium":
        return "#FFA500"; // Orange
      case "High":
        return "#FF0000"; // Red
      case "Severe":
        return "#800000"; // Maroon
      default:
        return "#808080"; // Default to Grey for unknown risk levels
    }
  }
  
  // Function to filter the table based on the search term
  function filterTable(searchTerm) {
    const table = document.querySelector("#player-table table");
    const rows = table.getElementsByTagName("tr");
  
    for (let i = 1; i < rows.length; i++) {
      const name = rows[i].getElementsByTagName("td")[1].textContent.toLowerCase();
      if (name.includes(searchTerm.toLowerCase())) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }

  function goToNotesPage() {
    window.location.href = "notes.html";
  }
  
  // Call the function to create the table initially
  createTable();
  
  // Add event listener to the search input
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim();
    filterTable(searchTerm);
  });
  
  document.getElementById('menuToggle').addEventListener('click', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuContainer = document.getElementById('menuContainer');
  
    // Toggle the 'active' class on the hamburger icon
    menuToggle.classList.toggle('active');
  
    // Toggle the visibility of the menu container
    menuContainer.classList.toggle('hide');
  });
  
