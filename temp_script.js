
    // 37 Sound Systems
    const soundSystems = [
      { name: "MASTERMIND", genres: ["Hip-Hop", "R&B", "Garage"], lat: 51.52598712274683, lng: -0.21548736555230646 },
      { name: "G.I. ROADSHOW", genres: ["Caribbean Party Music", "Dancehall", "Reggae"], lat: 51.526387623886556, lng: -0.21383512484385014 },
      { name: "4 PLAY", genres: ["Deep House", "Vocal House", "Soulful House", "Electronic"], lat: 51.52626747391452, lng: -0.21393168436577292 },
      { name: "SSP", genres: ["Acid Techno", "Techno", "Psy-Trance", "Electronic"], lat: 51.525089319853116, lng: -0.21348107327348448 },
      { name: "GT FLEX ROADSHOW", genres: ["Bashment", "Dancehall", "Caribbean Party Music"], lat: 51.52612062352309, lng: -0.2116357134156319 },
      { name: "ABA SHANTI", genres: ["Roots Reggae", "Dub", "Steppers"], lat: 51.524672119237906, lng: -0.2110027121052493 },
      { name: "STARLINER DIAMOND", genres: ["Soca", "Calypso"], lat: 51.52435838182402, lng: -0.20931828488948537 },
      { name: "ROUGH BUT SWEET", genres: ["Soul", "R&B", "Rare Groove", "Lovers Rock", "Reggae"], lat: 51.52527956211005, lng: -0.20841706262331366 },
      { name: "LOVE TKO", genres: ["Reggae", "Dancehall", "Urban"], lat: 51.52419149932137, lng: -0.2061103629329363 },
      { name: "SIR VALDEZ", genres: ["Hip-Hop", "R&B", "Urban"], lat: 51.52380099191248, lng: -0.2070276783951228 },
      { name: "RAPATTACK", genres: ["Hip-Hop", "Neo-Soul", "R&B", "Funk"], lat: 51.51837359352443, lng: -0.20393240914402513 },
      { name: "PEOPLE'S SOUND", genres: ["Reggae", "Roots Reggae", "Caribbean Riddims"], lat: 51.517919612070344, lng: -0.20383048521917194 },
      { name: "DIFFERENT STROKES", genres: ["Jungle", "Garage", "Drill", "Hip-Hop"], lat: 51.51854717345845, lng: -0.20202267639206223 },
      { name: "KILLERWATT", genres: ["Urban", "Hip-Hop", "Reggae"], lat: 51.519304908929904, lng: -0.20296681393975158 },
      { name: "SIR LLOYD", genres: ["Lovers Rock", "R&B", "Soul"], lat: 51.51959197722542, lng: -0.20239282122609953 },
      { name: "CHANNEL ONE", genres: ["Roots Reggae", "Dub", "Dubwise"], lat: 51.51815995575302, lng: -0.20046699518476693 },
      { name: "KING TUBBY'S", genres: ["Reggae", "Dub"], lat: 51.51668783076987, lng: -0.20353544223276043 },
      { name: "RAMPAGE", genres: ["Garage", "Hip-Hop", "Grime", "Drum & Bass"], lat: 51.515542811783966, lng: -0.20268249978547967 },
      { name: "NASTY LOVE", genres: ["Dancehall", "Bashment", "Reggae"], lat: 51.51584993339947, lng: -0.20236599913028835 },
      { name: "TROJAN 7", genres: ["Reggae", "Dub"], lat: 51.51580987417576, lng: -0.20124483579240726 },
      { name: "DISYA JENERATION", genres: ["Jungle", "Breakbeat", "Drum & Bass"], lat: 51.5177026340122, lng: -0.20140040388391056 },
      { name: "METRO GLORY", genres: ["House", "Tech House", "Electronic"], lat: 51.51791293580427, lng: -0.20052063935083642 },
      { name: "GAZ'S ROCKIN' BLUES", genres: ["Rockabilly", "Ska", "Blues", "Punk", "Rock"], lat: 51.51659436090723, lng: -0.20069230072314356 },
      { name: "SOLUTION SOUND", genres: ["Roots Reggae", "Dub"], lat: 51.51673122741885, lng: -0.20001101965179954 },
      { name: "PLATINUM SOUND", genres: ["Soulful House", "Funky House", "House", "Electronic"], lat: 51.51705169373968, lng: -0.1978008793788106 },
      { name: "MARK ROSS", genres: ["Soul", "Funk", "R&B"], lat: 51.51517559842785, lng: -0.19956040846862433 },
      { name: "SEDUCTION CITY", genres: ["Reggae", "Dub", "Lovers Rock"], lat: 51.523146801009666, lng: -0.21256912220348462 },
      { name: "VOLCANO", genres: ["Dancehall", "Ragga"], lat: 51.52247257408045, lng: -0.2105306434073372 },
      { name: "ARTS-A-LIGHT", genres: ["Roots Reggae", "Reggae"], lat: 51.52173158049573, lng: -0.21089542382348989 },
      { name: "KCC & THE ROCKIN CREW", genres: ["Deep House", "House", "Bassline", "Garage"], lat: 51.52277297345026, lng: -0.20917881010041836 },
      { name: "LATIN RAVE STREET JAM", genres: ["Latin", "Salsa", "Reggaeton", "Merengue", "Baile Funk"], lat: 51.52138444421869, lng: -0.21018732066272292 },
      { name: "GLADDY WAX", genres: ["Ska", "Rocksteady", "Roots Reggae"], lat: 51.52067681206401, lng: -0.20886767382478247 },
      { name: "SAXON STUDIO", genres: ["Dancehall", "Reggae"], lat: 51.52033634362405, lng: -0.2108203219347763 },
      { name: "HIGH GRADE", genres: ["Soul", "Rare Groove", "R&B", "Reggae"], lat: 51.519014500808915, lng: -0.21033752427812197 },
      { name: "VIRGO INTERNATIONAL", genres: ["Dancehall", "Bashment", "Reggae"], lat: 51.51910796569977, lng: -0.20707595820428612 },
      { name: "LORD GELLY", genres: ["Soca", "Calypso"], lat: 51.51828680331292, lng: -0.2099190996831233 },
      { name: "Magnum Stage", genres: ["Live Stage", "Soca", "Calypso", "Reggae"], lat: 51.515300, lng: -0.200800 }
    ];

    const allUniqueGenres = Array.from(new Set(soundSystems.flatMap(s => s.genres))).sort();

    // 4. FAVORITES PERSISTENCE
    let favorites = new Set();
    try {
      const savedFavs = localStorage.getItem('nhc26_favs');
      if (savedFavs) {
        favorites = new Set(JSON.parse(savedFavs));
      }
    } catch (e) {
      console.error("Could not load favorites from localStorage", e);
    }

    function toggleFavorite(systemName) {
      if (favorites.has(systemName)) {
        favorites.delete(systemName);
      } else {
        favorites.add(systemName);
      }
      try {
        localStorage.setItem('nhc26_favs', JSON.stringify(Array.from(favorites)));
      } catch (e) {
        console.error("Could not save favorites to localStorage", e);
      }
      
      const isNowFav = favorites.has(systemName);

      // Update any visible popup favorite buttons for this system
      document.querySelectorAll('.popup-fav-btn').forEach(btn => {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(systemName)) {
          btn.classList.toggle('active', isNowFav);
          btn.textContent = isNowFav ? '⭐' : '★';
        }
      });

      // If viewing the Favorites preset, re-apply filters to update the list view
      if (selectedPresets.has('favs')) {
        applyFilters();
      } else {
        // Otherwise just update the list card buttons in the sidebar without re-rendering layers
        document.querySelectorAll('.list-card').forEach(card => {
          const titleEl = card.querySelector('.card-title');
          if (titleEl && titleEl.textContent === systemName) {
            const favBtn = card.querySelector('.card-fav-btn');
            if (favBtn) {
              favBtn.classList.toggle('active', isNowFav);
              favBtn.textContent = isNowFav ? '⭐' : '★';
            }
          }
        });
      }
    }

    // 40 Toilets
    const toilets = [
      [51.52581023362718, -0.21556246735318205], [51.52521614814033, -0.21312702163357436],
      [51.523160152021205, -0.21213996874280824], [51.5220186335487, -0.21234381659803153],
      [51.52237244054887, -0.21236527423095025], [51.52193185025316, -0.21359909034440788],
      [51.52463540537901, -0.21053064326127924], [51.524428472266955, -0.20793426500513357],
      [51.523587379600585, -0.20752656916576112], [51.51944176733717, -0.20489800426815533],
      [51.52034301947956, -0.20302045800854585], [51.51898779654075, -0.20111072524162882],
      [51.51924816269799, -0.2000163839931707], [51.51874745719564, -0.204661969864101],
      [51.51801307921607, -0.2010356233741124], [51.51855384961313, -0.19792426091219106],
      [51.51815327957567, -0.1941691683613215], [51.51924148664118, -0.19445884692708984],
      [51.51566966665217, -0.1965724276026588], [51.51562839755047, -0.19741259512637685],
      [51.51564296040125, -0.19825685481842276], [51.515162245188634, -0.19734490378588102],
      [51.51524570303479, -0.20123410683112386], [51.51463812629738, -0.20205486276746742],
      [51.51522066570173, -0.2041282103377943], [51.51497696817391, -0.20489800431621205],
      [51.51287377095575, -0.20497847059348256], [51.51382189092044, -0.20140040382162547],
      [51.5144328169419, -0.1957570360404987], [51.51515102051024, -0.19297622146336577],
      [51.511405273192075, -0.19677422936689432], [51.50991957509662, -0.1977022737351203],
      [51.51099796301553, -0.20032547414515176], [51.511538816692074, -0.20059905945726628],
      [51.50983944617221, -0.20427905020246906], [51.51068079272844, -0.2054002135786794],
      [51.507669234457005, -0.20578108726489217], [51.509238474799965, -0.2010872215088658],
      [51.508877888189346, -0.20088337362925102], [51.51457014938634, -0.20827822381957228]
    ];

    // 6 First Aid Posts
    const firstAidPosts = [
      [51.5152177867777, -0.2086215464924644],
      [51.52521994501519, -0.20932696751005886], [51.524699279494506, -0.20680569110429753],
      [51.52245634454205, -0.2020313589962297],
      [51.51891148095184, -0.19605539726429888], [51.512722329030396, -0.20311497138017148]
    ];

    // 4 Welfare Points
    const welfarePoints = [
      [51.51618088005789, -0.2012803405397163],
      [51.52296368472756, -0.20973466329484083], [51.52570055402474, -0.2089192717763818],
      [51.5174760999788, -0.1969888061129847]
    ];

    // 19 Street Trading Food Zones
    const streetTradingPoints = [
      [51.51702210951086, -0.198405012454264], [51.5160473501509, -0.20070098330887212],
      [51.515700170565616, -0.19960664191929264], [51.51605402667002, -0.20154856127946785],
      [51.51423798124296, -0.1991131155578275], [51.51632776254423, -0.20081900044977574],
      [51.516260997852186, -0.2016558496397731], [51.51667493736619, -0.20240686814623018],
      [51.518247205578625, -0.1999606934906744], [51.51597390854232, -0.20475111876847826],
      [51.515857069359356, -0.2060385790607819], [51.51859770385225, -0.20552359496433173],
      [51.51888811466633, -0.2076532689625183], [51.51941218463827, -0.20861349976386143],
      [51.52043694099562, -0.20852766909454945], [51.52162522895369, -0.20892463600465258],
      [51.52522995776204, -0.2101477233285106], [51.525076428838126, -0.20874761026063038],
      [51.524205309264886, -0.20661793626926744]
    ];

    // Tube & Rail Stations
    const tubeStations = [
      { name: "Ladbroke Grove Station", lines: "Circle • Hammersmith & City", status: "⛔ Closed all day.", statusType: "closed", lat: 51.5173, lng: -0.2106 },
      { name: "Latimer Road Station", lines: "Circle • Hammersmith & City", status: "⚠️ Closes at 11pm and may close during busy periods.", statusType: "warning", lat: 51.5134, lng: -0.2178 },
      { name: "Notting Hill Gate Station", lines: "Central • Circle • District", status: "⚠️ No entry 11am-6pm. District/Circle do not stop. No Central-District/Circle interchange.", statusType: "warning", lat: 51.5091, lng: -0.1961 },
      { name: "Westbourne Park Station", lines: "Circle • Hammersmith & City", status: "⚠️ No entry from 11am.", statusType: "warning", lat: 51.5208, lng: -0.2010 },
      { name: "Holland Park Station", lines: "Central Line", status: "⚠️ No entry after 11am and closes at 3pm.", statusType: "warning", lat: 51.5076, lng: -0.2060 },
      { name: "Queensway Station", lines: "Central Line", status: "⚠️ No entry between 11am and 6pm.", statusType: "warning", lat: 51.5107, lng: -0.1872 },
      { name: "Royal Oak Station", lines: "Circle • Hammersmith & City", status: "⚠️ No entry after 11am and closes at 6pm.", statusType: "warning", lat: 51.5190, lng: -0.1878 },
      { name: "Shepherd's Bush", lines: "Central Line • Overground", status: "⚠️ No ticket issuing facilities and no down escalator after 4pm.", statusType: "warning", lat: 51.5046, lng: -0.2187 },
      { name: "Kensal Green Station", lines: "Bakerloo • London Overground", status: "⚠️ Queues outside station expected.", statusType: "warning", lat: 51.5305, lng: -0.2248 },
      { name: "Kensal Rise Station", lines: "London Overground", status: "⚠️ Chamberlayne Rd entrance closes at 6pm, queuing via Station Terrace.", statusType: "warning", lat: 51.5305, lng: -0.2205 },
      { name: "Bayswater Station", lines: "Circle • District", status: "🟢 Open (Recommended alternative)", statusType: "open", lat: 51.5123, lng: -0.1879 },
      { name: "Paddington Station", lines: "Elizabeth Line • Rail • Underground", status: "🟢 Major interchange hub (Recommended)", statusType: "open", lat: 51.5154, lng: -0.1755 }
    ];

    // Parade Route Geometry
    const exactParadeRoads = [
      [51.51598123570026, -0.2090721607145155], [51.5177571540958, -0.21027379032066557],
      [51.52632865867373, -0.21520905495627005], [51.52612840828571, -0.2099948406928779],
      [51.52556770251158, -0.20692639366288756], [51.52523394579644, -0.2061753751590438],
      [51.52423266097259, -0.20544581432673842], [51.52380543941318, -0.20636849420288933],
      [51.52316459955862, -0.20673327461904203], [51.52247034612022, -0.20483427054561115],
      [51.52224337638216, -0.20385794649061423], [51.52241694157776, -0.20286016476407895],
      [51.52217662035287, -0.20145468718016799], [51.52058779812705, -0.2003925323661338],
      [51.51861838278742, -0.19843988425613998], [51.519052329075656, -0.19640140545999255],
      [51.5150264839289, -0.1950281144289778], [51.51441111749441, -0.20026314729411798],
      [51.5125616215156, -0.20650732971179062], [51.51598123570026, -0.2090721607145155]
    ];

    const arterialArrows = [
      { lat: 51.5175, lng: -0.2100, bearing: 338 },
      { lat: 51.5220, lng: -0.2127, bearing: 340 },
      { lat: 51.5262, lng: -0.2125, bearing: 94 },
      { lat: 51.5258, lng: -0.2085, bearing: 105 },
      { lat: 51.5210, lng: -0.2007, bearing: 157 },
      { lat: 51.5170, lng: -0.1957, bearing: 168 },
      { lat: 51.5147, lng: -0.1976, bearing: 259 },
      { lat: 51.5135, lng: -0.2034, bearing: 245 }
    ];

    const paradeRoadLabels = [
      { name: "LADBROKE GROVE", lat: 51.5200, lng: -0.2117, rotation: -115 },
      { name: "KENSAL ROAD", lat: 51.5263, lng: -0.2132, rotation: -3 },
      { name: "ELKSTONE ROAD", lat: 51.5257, lng: -0.2078, rotation: 12 },
      { name: "GREAT WESTERN RD", lat: 51.5205, lng: -0.2003, rotation: 0 },
      { name: "CHEPSTOW ROAD", lat: 51.5165, lng: -0.1956, rotation: 78 },
      { name: "WESTBOURNE GROVE", lat: 51.5135, lng: -0.2015, rotation: 0 }
    ];

    const carnivalBoundaryCoords = [
      [51.5273, -0.2175], [51.5268, -0.2085], [51.5240, -0.2010],
      [51.5215, -0.1975], [51.5175, -0.1915], [51.5130, -0.1920],
      [51.5090, -0.2045], [51.5115, -0.2080], [51.5140, -0.2120],
      [51.5150, -0.2155], [51.5200, -0.2175], [51.5255, -0.2185], [51.5273, -0.2175]
    ];

    // Walking Navigation HTML
    function createNavHTML(lat, lng, title) {
      const gmapsURL = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
      const appleURL = `https://maps.apple.com/?daddr=${lat},${lng}&dirflg=w`;
      const citymapperURL = `https://citymapper.com/directions?endcoord=${lat},${lng}&endname=${encodeURIComponent(title)}`;

      return `
        <div class="nav-box">
          <div class="nav-label">🗺️ Plan Your Journey</div>
          <div class="nav-buttons">
            <a href="${gmapsURL}" target="_blank" rel="noopener" class="nav-btn nav-btn-gmaps">🗺️ Google Maps</a>
            <a href="${appleURL}" target="_blank" rel="noopener" class="nav-btn nav-btn-apple">🍎 Apple Maps</a>
            <a href="${citymapperURL}" target="_blank" rel="noopener" class="nav-btn nav-btn-citymapper">🟢 Citymapper</a>
          </div>
        </div>
      `;
    }

    // 6. BASEMAP & DARK MODE SWITCHER
    const map = L.map('map', {
      zoomControl: true,
      autoPanPaddingTopLeft: [20, 70],
      autoPanPaddingBottomRight: [20, 60]
    }).setView([51.5195, -0.2050], 15);

    // OpenStreetMap tile basemap (100% free, no API key required)
    const osmTiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      className: 'dark-map-tiles',
      maxZoom: 19
    }).addTo(map);

    let isDarkMode = true;

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    themeToggleBtn.addEventListener('click', () => {
      if (isDarkMode) {
        osmTiles.getContainer().classList.remove('dark-map-tiles');
        themeToggleBtn.textContent = '🌙 Dark Map';
        isDarkMode = false;
      } else {
        osmTiles.getContainer().classList.add('dark-map-tiles');
        themeToggleBtn.textContent = '☀️ Light Map';
        isDarkMode = true;
      }
    });

    // 5. REAL-TIME GPS GEOLOCATION
    let userMarker = null;
    let accuracyCircle = null;

    document.getElementById('findLocationBtn').addEventListener('click', () => {
      map.locate({ setView: true, maxZoom: 17, enableHighAccuracy: true });
    });

    // Global Location Sharing Handler
    window.shareLocation = function(lat, lng) {
      const gmapsShareURL = `https://www.google.com/maps?q=${lat},${lng}`;
      const shareData = {
        title: "My Live Location - Notting Hill Carnival '26",
        text: `📍 I'm currently at Notting Hill Carnival '26! Find me here:`,
        url: gmapsShareURL
      };

      if (navigator.share) {
        navigator.share(shareData).catch(err => {
          console.log("Share dismissed or error:", err);
        });
      } else {
        // Fallback: Copy link to clipboard
        navigator.clipboard.writeText(gmapsShareURL).then(() => {
          alert("📍 Location link copied to clipboard!\n\n" + gmapsShareURL);
        }).catch(() => {
          prompt("Copy your location link:", gmapsShareURL);
        });
      }
    };

    map.on('locationfound', (e) => {
      const radius = e.accuracy / 2;
      const lat = e.latlng.lat.toFixed(6);
      const lng = e.latlng.lng.toFixed(6);

      if (userMarker) map.removeLayer(userMarker);
      if (accuracyCircle) map.removeLayer(accuracyCircle);

      const gpsIcon = L.divIcon({
        className: 'user-location-icon',
        html: `<div class="user-location-pin"></div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9]
      });

      const userPopupHTML = `
        <div style="min-width: 210px; text-align: center;">
          <div style="font-size: 0.95rem; font-weight: 800; color: #38bdf8; margin-bottom: 2px;">📍 You Are Here</div>
          <div style="font-size: 0.72rem; color: #94a3b8; margin-bottom: 8px;">GPS Accuracy: within ${Math.round(radius)}m</div>
          <button onclick="window.shareLocation(${lat}, ${lng})" style="width: 100%; padding: 7px 10px; background: linear-gradient(135deg, #0284c7, #2563eb); color: #ffffff; border: none; border-radius: 6px; font-size: 0.8rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; box-shadow: 0 2px 8px rgba(2, 132, 199, 0.4);">
            📲 Share My Location
          </button>
        </div>
      `;

      userMarker = L.marker(e.latlng, { icon: gpsIcon }).addTo(map)
        .bindPopup(userPopupHTML).openPopup();
      
      accuracyCircle = L.circle(e.latlng, radius, {
        color: '#38bdf8',
        fillColor: '#0284c7',
        fillOpacity: 0.15,
        weight: 1.5
      }).addTo(map);
    });

    map.on('locationerror', (e) => {
      alert("Unable to retrieve your location: " + e.message);
    });

    // Layers
    const boundaryLayer = L.layerGroup().addTo(map);
    const paradeLayer = L.layerGroup().addTo(map);
    const stationsLayer = L.layerGroup().addTo(map);
    const toiletsLayer = L.layerGroup().addTo(map);
    const firstAidLayer = L.layerGroup().addTo(map);
    const welfareLayer = L.layerGroup().addTo(map);
    const foodVendorsLayer = L.layerGroup().addTo(map);
    const tradingLayer = L.layerGroup().addTo(map);
    const systemsLayer = L.layerGroup().addTo(map);
    const jouvertLayer = L.layerGroup().addTo(map);
    const judgingLayer = L.layerGroup().addTo(map);
    const busesLayer = L.layerGroup().addTo(map);

    // 🚌 TfL Bus Hubs & Express Bus Terminals
    const busHubs = [
      {
        name: "Prince of Wales Bus Hub (Harrow Rd)",
        subtitle: "North Carnival Bus Hub",
        lat: 51.52821105312384,
        lng: -0.20367205142974854,
        routes: "• Express 18X (to Warren St & Stonebridge Park)<br>• Express 23X (to Victoria - Mon afternoon)<br>• Routes 31 & 316 (to North London)<br>• Route 36 (to South London)<br>• Route 328 (to North London & Chelsea)"
      },
      {
        name: "Notting Hill Gate Bus Hub",
        subtitle: "South Carnival Bus Hub",
        lat: 51.5091230192837,
        lng: -0.19612349081239,
        routes: "• Express 148X (to Victoria & Vauxhall)<br>• Express 7X (to Paddington & Oxford Circus)<br>• Route 27 (to Euston & Hammersmith)<br>• Route 28 (to Wandsworth)<br>• Route 52 (Shuttle to Victoria)<br>• Route 94 (to Piccadilly Circus)<br>• Route 148 (to Camberwell)<br>• Route 452 (to Vauxhall)"
      },
      {
        name: "Maida Vale & Warwick Avenue Hub",
        subtitle: "North-East Bus Hub",
        lat: 51.527182910238,
        lng: -0.183491823901,
        routes: "• Route 6 (to Victoria & Willesden Bus Garage)"
      },
      {
        name: "Willesden Bus Garage Terminal",
        subtitle: "North-West Bus Terminus",
        lat: 51.543201928301,
        lng: -0.231902830192,
        routes: "• Route 302 terminates here<br>• Transfer to Route 6 or 52 for Carnival"
      }
    ];

    const busHubMarkers = {};

    busHubs.forEach(b => {
      const busIcon = L.divIcon({
        className: 'custom-facility-icon',
        html: `
          <div style="background: linear-gradient(135deg, #dc2626, #991b1b); color: #ffffff; border: 2px solid #ffffff; border-radius: 6px; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 0.95rem; box-shadow: 0 2px 8px rgba(0,0,0,0.6); font-weight: bold;">
            🚌
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -14]
      });

      const busPopupHTML = `
        <div style="min-width: 230px; max-width: 270px;">
          <div style="background: linear-gradient(135deg, #dc2626, #991b1b); margin: -10px -10px 8px -10px; padding: 8px 10px; border-top-left-radius: 6px; border-top-right-radius: 6px;">
            <div style="font-size: 0.68rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #fef08a;">🚌 TFL BUS HUB</div>
            <div style="font-size: 0.95rem; font-weight: 900; color: #ffffff; line-height: 1.1;">${b.name}</div>
            <div style="font-size: 0.72rem; color: #fee2e2; margin-top: 2px; font-weight: 600;">${b.subtitle}</div>
          </div>
          <div style="font-size: 0.76rem; color: #cbd5e1; line-height: 1.45; margin-bottom: 8px; background: #0c1424; border: 1px solid #1e293b; border-radius: 6px; padding: 8px;">
            ${b.routes}
          </div>
          ${createNavHTML(b.lat, b.lng, b.name)}
        </div>
      `;

      const marker = L.marker([b.lat, b.lng], { icon: busIcon })
        .bindPopup(busPopupHTML)
        .addTo(busesLayer);
      busHubMarkers[b.name] = marker;
    });

    // J'ouvert Starting Point Marker
    const jouvertIcon = L.divIcon({
      className: 'custom-facility-icon',
      html: `
        <div style="background: linear-gradient(135deg, #ea580c, #dc2626); color: #ffffff; border: 2px solid #fef08a; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; box-shadow: 0 0 14px rgba(234, 88, 12, 0.85); font-weight: bold;">
          🌅
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16]
    });

    const jouvertPopupHTML = `
      <div style="min-width: 220px; max-width: 260px;">
        <div style="background: linear-gradient(135deg, #ea580c, #dc2626); margin: -10px -10px 8px -10px; padding: 8px 10px; border-top-left-radius: 6px; border-top-right-radius: 6px;">
          <div style="font-size: 0.68rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #fef08a;">🌅 OFFICIAL CARNIVAL START</div>
          <div style="font-size: 1rem; font-weight: 900; color: #ffffff; line-height: 1.1;">J'ouvert Starting Point</div>
          <div style="font-size: 0.72rem; color: #fef3c7; margin-top: 2px; font-weight: 600;">📍 Sainsbury's, Canal Way Roundabout</div>
        </div>
        <div style="font-size: 0.76rem; color: #cbd5e1; line-height: 1.4; margin-bottom: 8px;">
          Traditional early morning celebration (06:00 - 09:00, Sunday 30th August). Expect colourful paints, powder, and high-energy music to open Notting Hill Carnival.
        </div>
        ${createNavHTML(51.52631037203265, -0.21775117393302137, "J'ouvert Starting Point")}
      </div>
    `;

    L.marker([51.52631037203265, -0.21775117393302137], { icon: jouvertIcon })
      .bindPopup(jouvertPopupHTML)
      .addTo(jouvertLayer);

    // MAS Judging Point Marker
    const judgingIcon = L.divIcon({
      className: 'custom-facility-icon',
      html: `
        <div style="background: linear-gradient(135deg, #7e22ce, #db2777); color: #ffffff; border: 2px solid #fef08a; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; box-shadow: 0 0 14px rgba(219, 39, 119, 0.85); font-weight: bold;">
          ⚖️
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16]
    });

    const judgingPopupHTML = `
      <div style="min-width: 220px; max-width: 260px;">
        <div style="background: linear-gradient(135deg, #7e22ce, #db2777); margin: -10px -10px 8px -10px; padding: 8px 10px; border-top-left-radius: 6px; border-top-right-radius: 6px;">
          <div style="font-size: 0.68rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #fef08a;">⚖️ MAS JUDGING ZONE</div>
          <div style="font-size: 1rem; font-weight: 900; color: #ffffff; line-height: 1.1;">Official MAS Judging Point</div>
          <div style="font-size: 0.72rem; color: #fce7f3; margin-top: 2px; font-weight: 600;">📍 Great Western Road</div>
        </div>
        <div style="font-size: 0.76rem; color: #cbd5e1; line-height: 1.4; margin-bottom: 8px;">
          The official Judging Zone Grandstand where all MAS costume bands are judged at their absolute best! Grandstand tickets open to the public.
        </div>
        ${createNavHTML(51.519411121363184, -0.19925499182714257, "MAS Judging Point")}
      </div>
    `;

    L.marker([51.519411121363184, -0.19925499182714257], { icon: judgingIcon })
      .bindPopup(judgingPopupHTML)
      .addTo(judgingLayer);

    const stationMarkers = {};

    // Tube Stations
    tubeStations.forEach(st => {
      const isClosed = st.statusType === 'closed';
      const roundelClass = isClosed ? 'tube-roundel-pin tube-roundel-closed' : 'tube-roundel-pin';
      
      const icon = L.divIcon({
        className: 'custom-station-icon',
        html: `<div class="${roundelClass}"><div class="tube-roundel-bar"></div></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -14]
      });

      const popupContent = `
        <div style="min-width: 200px;">
          <h3 style="font-size: 0.95rem; font-weight: 800; color: #fff; margin-bottom: 2px;">🚇 ${st.name}</h3>
          <p style="font-size: 0.75rem; color: #38bdf8; font-weight: 600; margin-bottom: 6px;">${st.lines}</p>
          <div style="font-size: 0.75rem; padding: 4px 6px; border-radius: 4px; background: ${isClosed ? '#7f1d1d' : '#1e293b'}; color: ${isClosed ? '#fecaca' : '#cbd5e1'}; border: 1px solid ${isClosed ? '#ef4444' : '#334155'};">
            ${st.status}
          </div>
          ${createNavHTML(st.lat, st.lng, st.name)}
        </div>
      `;

      const marker = L.marker([st.lat, st.lng], { icon }).bindPopup(popupContent).addTo(stationsLayer);
      stationMarkers[st.name] = marker;
    });

    // 2. TICKER INTERACTIVE STATION JUMP & TOGGLE
    const tflTickerContainer = document.getElementById('tfl-ticker-container');
    const tflAlertsToggleBtn = document.getElementById('tflAlertsToggleBtn');

    function toggleTflTicker() {
      const isHidden = tflTickerContainer.style.display === 'none';
      if (isHidden) {
        tflTickerContainer.style.display = 'flex';
        document.getElementById('app-container').style.height = 'calc(100vh - 38px)';
      } else {
        tflTickerContainer.style.display = 'none';
        document.getElementById('app-container').style.height = '100vh';
      }
      setTimeout(() => map.invalidateSize(), 150);
    }

    tflAlertsToggleBtn.addEventListener('click', toggleTflTicker);

    document.getElementById('closeTickerBtn').addEventListener('click', () => {
      tflTickerContainer.style.display = 'none';
      document.getElementById('app-container').style.height = '100vh';
      setTimeout(() => map.invalidateSize(), 150);
    });

    document.querySelectorAll('.clickable-station').forEach(el => {
      el.addEventListener('click', (e) => {
        const targetStationName = e.target.getAttribute('data-station');
        const marker = stationMarkers[targetStationName] || busHubMarkers[targetStationName];
        if (marker) {
          if (travelModal) travelModal.style.display = 'none';
          // Switch to map view if on mobile drawer
          switchToMapView();
          map.flyTo(marker.getLatLng(), 17, { animate: true, duration: 0.6 });
          setTimeout(() => marker.openPopup(), 400);
        }
      });
    });

    // Parade Route & Chevrons
    L.polyline(exactParadeRoads, {
      color: '#580c0c',
      weight: 20,
      opacity: 0.7,
      lineJoin: 'round',
      lineCap: 'round'
    }).addTo(paradeLayer);

    L.polyline(exactParadeRoads, {
      color: '#dc2626',
      weight: 14,
      opacity: 0.95,
      lineJoin: 'round',
      lineCap: 'round'
    }).bindPopup("<strong>Official Parade Route</strong><br>Directional flow circuit (Clockwise)").addTo(paradeLayer);

    arterialArrows.forEach(a => {
      const doubleArrowIcon = L.divIcon({
        className: 'route-arrow-marker',
        html: `
          <div style="transform: rotate(${a.bearing}deg); display: flex; align-items: center; justify-content: center; width: 22px; height: 22px;">
            <svg width="18" height="18" viewBox="0 0 24 24" style="filter: drop-shadow(0 1px 2px rgba(0,0,0,0.9));">
              <path d="M12 2 L3 11 L6 12 L12 6 L18 12 L21 11 Z" fill="#ffffff" />
              <path d="M12 10 L3 19 L6 20 L12 14 L18 20 L21 19 Z" fill="#ffffff" />
            </svg>
          </div>
        `,
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });

      L.marker([a.lat, a.lng], { icon: doubleArrowIcon, interactive: false }).addTo(paradeLayer);
    });

    // Street Road Names Aligned Along Parade Circuit Lines
    paradeRoadLabels.forEach(rl => {
      const labelIcon = L.divIcon({
        className: 'route-arrow-marker',
        html: `
          <div style="transform: rotate(${rl.rotation}deg); display: flex; align-items: center; justify-content: center;">
            <div class="route-street-label-aligned">${rl.name}</div>
          </div>
        `,
        iconSize: [140, 24],
        iconAnchor: [70, 12]
      });

      L.marker([rl.lat, rl.lng], { icon: labelIcon, interactive: false }).addTo(paradeLayer);
    });

    // Boundary
    L.polygon(carnivalBoundaryCoords, {
      color: '#eab308',
      weight: 2.5,
      dashArray: '6, 6',
      fillColor: '#f59e0b',
      fillOpacity: 0.08
    }).bindPopup("<strong>Official Carnival Zone / Perimeter Boundary</strong>").addTo(boundaryLayer);

    // Facilities
    toilets.forEach((t, i) => {
      const icon = L.divIcon({
        className: 'custom-facility-icon',
        html: `<div class="facility-pin pin-wc">WC</div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });
      L.marker([t[0], t[1]], { icon })
        .bindPopup(`<div><strong style="color:#38bdf8;">🚻 Public Toilet Station #${i + 1}</strong>${createNavHTML(t[0], t[1], `Toilet Station #${i + 1}`)}</div>`)
        .addTo(toiletsLayer);
    });

    firstAidPosts.forEach((fa, i) => {
      const icon = L.divIcon({
        className: 'custom-facility-icon',
        html: `<div class="facility-pin pin-firstaid">✚</div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });
      L.marker([fa[0], fa[1]], { icon })
        .bindPopup(`<div><strong style="color:#4ade80;">🏥 First Aid Post #${i + 1}</strong><div style="font-size:0.75rem; color:#cbd5e1; margin-top:2px;">Medical Support Team</div>${createNavHTML(fa[0], fa[1], `First Aid Post #${i + 1}`)}</div>`)
        .addTo(firstAidLayer);
    });

    welfarePoints.forEach((w, i) => {
      const icon = L.divIcon({
        className: 'custom-facility-icon',
        html: `<div class="facility-pin pin-welfare">♥</div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });
      L.marker([w[0], w[1]], { icon })
        .bindPopup(`<div><strong style="color:#f472b6;">💖 Welfare Point #${i + 1}</strong><div style="font-size:0.75rem; color:#cbd5e1; margin-top:2px;">Lost children & welfare support</div>${createNavHTML(w[0], w[1], `Welfare Point #${i + 1}`)}</div>`)
        .addTo(welfareLayer);
    });

    // Featured Food Vendor: The Jerk Shac (Westbourne Park Rd, W11 1BT)
    const jerkShacVendor = {
      name: "THE JERK SHAC",
      tagline: "The Best Jamaican & Guyanese Fusion",
      location: "Westbourne Park Rd, W11 1BT",
      lat: 51.518213605281495,
      lng: -0.19973076560653774
    };

    const jerkShacIcon = L.divIcon({
      className: 'custom-facility-icon',
      html: `
        <div class="facility-pin pin-vendor" title="The Jerk Shac - Jamaican & Guyanese Fusion">
          🍗
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    const jerkShacPopupHTML = `
      <div style="min-width: 240px; max-width: 275px;">
        <div style="background: linear-gradient(135deg, #16a34a, #d97706, #dc2626); margin: -10px -10px 8px -10px; padding: 8px 10px; border-top-left-radius: 6px; border-top-right-radius: 6px;">
          <div style="font-size: 0.68rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #fef08a;">🔥 FEATURED FOOD VENDOR</div>
          <div style="font-size: 1rem; font-weight: 900; color: #ffffff; line-height: 1.1;">${jerkShacVendor.name}</div>
          <div style="font-size: 0.72rem; color: #fef3c7; margin-top: 2px; font-weight: 600;">📍 ${jerkShacVendor.location}</div>
        </div>

        <div style="font-size: 0.72rem; color: #fbbf24; font-weight: 700; margin-bottom: 6px; text-align: center;">"${jerkShacVendor.tagline}"</div>

        <div style="font-size: 0.74rem; background: #0c1424; border: 1px solid #1e293b; border-radius: 6px; padding: 8px; margin-bottom: 8px; text-align: center;">
          <div style="display: flex; justify-content: center; gap: 6px; margin-bottom: 8px;">
            <a href="https://www.instagram.com/thejerkshac/" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; justify-content: center; gap: 5px; background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); color: #ffffff; font-weight: 800; text-decoration: none; font-size: 0.74rem; padding: 5px 10px; border-radius: 16px;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@thejerkshac</span>
            </a>
          </div>

          <div style="color: #cbd5e1; font-weight: 600; margin-bottom: 8px; font-size: 0.72rem;">🍗 Jerk Pork • Jerk Chicken • Jerk Wings • Jerk Bagels • Roti & Curry • Jerk Wrap • Mac & Cheese • Vegan Options • Fruit Punch</div>
          
          <a href="https://www.instagram.com/thejerkshac/" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; justify-content: center; gap: 5px; background: #2563eb; color: #ffffff; font-weight: 800; text-decoration: none; font-size: 0.76rem; padding: 6px 12px; border-radius: 6px; border: 1px solid #3b82f6; width: 90%;">
            <span>📸 View Instagram Page ↗</span>
          </a>
        </div>

        ${createNavHTML(jerkShacVendor.lat, jerkShacVendor.lng, jerkShacVendor.name)}
      </div>
    `;

    L.marker([jerkShacVendor.lat, jerkShacVendor.lng], { icon: jerkShacIcon })
      .bindPopup(jerkShacPopupHTML)
      .addTo(foodVendorsLayer);

    // Duplicate Test Food Vendor: Test Vendor (@purevibe187)
    const testVendor = {
      name: "TEST VENDOR",
      tagline: "Real Caribbean Food • Real Carnival Energy",
      location: "St Charles Square, Ladbroke Grove",
      lat: 51.52778348355997,
      lng: -0.21591074232059138
    };

    const testVendorIcon = L.divIcon({
      className: 'custom-facility-icon',
      html: `
        <div class="facility-pin pin-vendor" title="Test Vendor - Real Caribbean Food">
          🍗
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    const testVendorPopupHTML = `
      <div style="min-width: 240px; max-width: 275px;">
        <div style="background: linear-gradient(135deg, #d97706, #dc2626); margin: -10px -10px 8px -10px; padding: 8px 10px; border-top-left-radius: 6px; border-top-right-radius: 6px;">
          <div style="font-size: 0.68rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #fef08a;">🔥 FEATURED FOOD VENDOR</div>
          <div style="font-size: 1rem; font-weight: 900; color: #ffffff; line-height: 1.1;">${testVendor.name}</div>
          <div style="font-size: 0.72rem; color: #fef3c7; margin-top: 2px; font-weight: 600;">📍 ${testVendor.location}</div>
        </div>

        <div style="font-size: 0.72rem; color: #fbbf24; font-weight: 700; margin-bottom: 6px; text-align: center;">"${testVendor.tagline}"</div>

        <div style="font-size: 0.74rem; background: #0c1424; border: 1px solid #1e293b; border-radius: 6px; padding: 8px; margin-bottom: 8px; text-align: center;">
          <div style="display: flex; justify-content: center; gap: 6px; margin-bottom: 8px;">
            <a href="https://www.instagram.com/purevibe187/" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; justify-content: center; gap: 5px; background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); color: #ffffff; font-weight: 800; text-decoration: none; font-size: 0.74rem; padding: 5px 10px; border-radius: 16px;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@purevibe187</span>
            </a>
          </div>

          <div style="color: #cbd5e1; font-weight: 600; margin-bottom: 8px; font-size: 0.72rem;">🍗 Jerk Chicken • Curry Goat • Loaded Boxes • Patties • Wings • Refreshments</div>

          <a href="https://www.instagram.com/p/Dckxd8zIAAd/" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; justify-content: center; gap: 5px; background: #2563eb; color: #ffffff; font-weight: 800; text-decoration: none; font-size: 0.76rem; padding: 6px 12px; border-radius: 6px; border: 1px solid #3b82f6; width: 90%;">
            <span>📖 View Full Menu Post ↗</span>
          </a>
        </div>

        ${createNavHTML(testVendor.lat, testVendor.lng, testVendor.name)}
      </div>
    `;

    L.marker([testVendor.lat, testVendor.lng], { icon: testVendorIcon })
      .bindPopup(testVendorPopupHTML)
      .addTo(foodVendorsLayer);

    streetTradingPoints.forEach((st, i) => {
      const icon = L.divIcon({
        className: 'custom-facility-icon',
        html: `
          <div class="facility-pin pin-trading" title="Street Trading #${i + 1}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"></path>
              <path d="M15 11v11"></path>
              <path d="M6 2v20"></path>
              <path d="M6 2a3 3 0 0 1 3 3z"></path>
            </svg>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });
      L.marker([st[0], st[1]], { icon })
        .bindPopup(`<div><strong style="color:#fb923c;">🍴 Food & Street Trading Zone #${i + 1}</strong><div style="font-size:0.75rem; color:#cbd5e1; margin-top:2px;">Licensed food stall & refreshments</div>${createNavHTML(st[0], st[1], `Food Stalls #${i + 1}`)}</div>`)
        .addTo(tradingLayer);
    });

    // Sound Systems & Filtering Setup
    let searchQuery = '';
    let selectedGenres = new Set();
    let selectedPresets = new Set(['all']);
    let customMapPillGenres = new Set();

    function updateDynamicMapPresetPills() {
      const container = document.getElementById('mapPresetPills');
      if (!container) return;

      // Remove existing custom genre pills (data-custom-genre)
      container.querySelectorAll('.preset-pill[data-custom-genre]').forEach(pill => pill.remove());

      const searchMoreBtn = container.querySelector('[data-preset="searchmore"]');

      // Create a pill for each dynamically selected genre from Search More
      selectedGenres.forEach(genre => {
        const btn = document.createElement('button');
        btn.className = 'preset-pill active';
        btn.dataset.customGenre = genre;
        btn.innerHTML = `🔊 ${genre}`;
        btn.addEventListener('click', () => {
          selectedGenres.delete(genre);
          const chip = document.querySelector(`.genre-chip[data-genre="${genre}"]`);
          if (chip) chip.classList.remove('active');
          applyFilters();
        });

        if (searchMoreBtn) {
          container.insertBefore(btn, searchMoreBtn);
        } else {
          container.appendChild(btn);
        }
      });
    }

    const genreContainer = document.getElementById('genreContainer');
    if (genreContainer) {
      allUniqueGenres.forEach(genre => {
        const chip = document.createElement('div');
        chip.className = 'genre-chip';
        chip.textContent = genre;
        chip.dataset.genre = genre;
        chip.addEventListener('click', () => {
          if (selectedGenres.has(genre)) {
            selectedGenres.delete(genre);
            chip.classList.remove('active');
          } else {
            selectedGenres.add(genre);
            chip.classList.add('active');
          }
          applyFilters();
        });
        genreContainer.appendChild(chip);
      });
    }

    function createSoundIcon(isFav) {
      return L.divIcon({
        className: 'custom-sys-icon',
        html: `<div class="system-pin ${isFav ? 'is-fav' : ''}">${isFav ? '⭐' : '🔊'}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -14]
      });
    }

    function matchesPreset(system, presetKey) {
      if (presetKey === 'all') return true;
      if (presetKey === 'favs') return favorites.has(system.name);
      if (presetKey === 'soca') return system.genres.some(g => g.toLowerCase().includes('soca') || g.toLowerCase().includes('calypso'));
      if (presetKey === 'reggae') return system.genres.some(g => ['Reggae', 'Lovers Rock', 'Steppers', 'Roots Reggae'].includes(g));
      if (presetKey === 'dancehall') return system.genres.some(g => g.toLowerCase().includes('dancehall') || g.toLowerCase().includes('bashment') || g.toLowerCase().includes('ragga'));
      if (presetKey === 'dub') return system.genres.some(g => g.toLowerCase().includes('dub'));
      if (presetKey === 'junglednb') return system.genres.some(g => g.toLowerCase().includes('jungle') || g.toLowerCase().includes('drum & bass') || g.toLowerCase().includes('breakbeat'));
      if (presetKey === 'garage') return system.genres.some(g => g.toLowerCase().includes('garage'));
      if (presetKey === 'house') return system.genres.some(g => g.toLowerCase().includes('house') || g.toLowerCase().includes('techno') || g.toLowerCase().includes('electronic'));
      if (presetKey === 'bailefunk') return system.genres.some(g => g.toLowerCase().includes('baile funk') || g.toLowerCase().includes('latin'));
      if (presetKey === 'reggaeton') return system.genres.some(g => g.toLowerCase().includes('reggaeton') || g.toLowerCase().includes('latin'));
      if (presetKey === 'hiphop') return system.genres.some(g => g.toLowerCase().includes('hip-hop') || g.toLowerCase().includes('urban'));
      if (presetKey === 'rnb') return system.genres.some(g => g.toLowerCase().includes('r&b') || g.toLowerCase().includes('soul') || g.toLowerCase().includes('funk'));
      return false;
    }

    function applyFilters() {
      updateDynamicMapPresetPills();
      systemsLayer.clearLayers();
      const listEl = document.getElementById('system-list');
      listEl.innerHTML = '';

      const activePresetList = Array.from(selectedPresets).filter(p => p !== 'searchmore');
      const isAllActive = activePresetList.includes('all') || activePresetList.length === 0;

      const filtered = soundSystems.filter(s => {
        // Multi-select OR logic for Presets
        const matchesPresets = isAllActive || activePresetList.some(pKey => matchesPreset(s, pKey));

        // Multi-select OR logic for individual Genre Chips
        const matchesGenreChips = selectedGenres.size === 0 || s.genres.some(g => selectedGenres.has(g));
        
        // Search text input
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch = !query || 
          s.name.toLowerCase().includes(query) ||
          s.genres.some(g => g.toLowerCase().includes(query));

        return matchesPresets && matchesGenreChips && matchesSearch;
      });

      const template = (translations[currentLang] && translations[currentLang].showingSystems) ? translations[currentLang].showingSystems : "Showing {count} of 37 Systems";
      document.getElementById('matchCounter').textContent = template.replace('{count}', filtered.length);

      filtered.forEach(s => {
        const isFav = favorites.has(s.name);
        const marker = L.marker([s.lat, s.lng], { icon: createSoundIcon(isFav) });
        const badgeHTML = s.genres.map(g => `<span class="popup-badge">${g}</span>`).join('');
        
        const popupContent = `
          <div>
            <div class="popup-header-row">
              <div class="popup-title">${s.name}</div>
              <button class="popup-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${s.name}')" title="Toggle Favorite">${isFav ? '⭐' : '★'}</button>
            </div>
            <div class="popup-badge-list">${badgeHTML}</div>
            ${createNavHTML(s.lat, s.lng, s.name)}
          </div>
        `;
        marker.bindPopup(popupContent);
        marker.addTo(systemsLayer);

        const item = document.createElement('div');
        item.className = 'list-card';
        item.innerHTML = `
          <div class="card-info">
            <div class="card-title">${s.name}</div>
            <div class="card-genres">${s.genres.join(' • ')}</div>
          </div>
          <button class="card-fav-btn ${isFav ? 'active' : ''}" title="Toggle Favorite">${isFav ? '⭐' : '★'}</button>
        `;

        item.querySelector('.card-fav-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFavorite(s.name);
        });

        item.addEventListener('click', () => {
          switchToMapView();
          map.flyTo([s.lat, s.lng], 17, { animate: true, duration: 0.6 });
          marker.openPopup();
        });
        listEl.appendChild(item);
      });
    }

    // Preset Pill Multi-Select Click Listeners
    document.querySelectorAll('.preset-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selectedPreset = e.target.dataset.preset;

        if (selectedPreset === 'searchmore') {
          switchToDrawerContainer();
          const searchIn = document.getElementById('searchInput');
          if (searchIn) {
            searchIn.focus();
            searchIn.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          return;
        }

        if (selectedPreset === 'all') {
          selectedPresets.clear();
          selectedPresets.add('all');
        } else {
          selectedPresets.delete('all');
          if (selectedPresets.has(selectedPreset)) {
            selectedPresets.delete(selectedPreset);
            if (selectedPresets.size === 0) {
              selectedPresets.add('all');
            }
          } else {
            selectedPresets.add(selectedPreset);
          }
        }

        // Synchronize UI active classes across both preset pill lists
        document.querySelectorAll('.preset-pill').forEach(p => {
          const pKey = p.dataset.preset;
          p.classList.toggle('active', selectedPresets.has(pKey));
        });
        
        applyFilters();
      });
    });

    // Search Box & Clear Button
    const searchInput = document.getElementById('searchInput');
    const searchClearBtn = document.getElementById('searchClearBtn');

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      searchClearBtn.style.display = searchQuery ? 'block' : 'none';
      applyFilters();
    });

    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClearBtn.style.display = 'none';
      applyFilters();
    });

    // Filter Controls
    const clearGenresBtn = document.getElementById('clearGenresBtn');
    if (clearGenresBtn) {
      clearGenresBtn.addEventListener('click', () => {
        selectedGenres.clear();
        document.querySelectorAll('.genre-chip').forEach(c => c.classList.remove('active'));
        applyFilters();
      });
    }

    const selectAllGenresBtn = document.getElementById('selectAllGenresBtn');
    if (selectAllGenresBtn) {
      selectAllGenresBtn.addEventListener('click', () => {
        allUniqueGenres.forEach(g => selectedGenres.add(g));
        document.querySelectorAll('.genre-chip').forEach(c => c.classList.add('active'));
        applyFilters();
      });
    }

    // Floating POI Filter Panel JS Sync
    const poiFilterToggleBtn = document.getElementById('poiFilterToggleBtn');
    const poiFilterPanel = document.getElementById('poiFilterPanel');
    const closePoiPanelBtn = document.getElementById('closePoiPanelBtn');

    // Prevent map drag/zoom when touch-scrolling floating panel or preset pills
    if (window.L && L.DomEvent) {
      L.DomEvent.disableScrollPropagation(poiFilterPanel);
      L.DomEvent.disableClickPropagation(poiFilterPanel);
      document.querySelectorAll('.map-control-btn, .map-custom-controls').forEach(el => {
        L.DomEvent.disableScrollPropagation(el);
        L.DomEvent.disableClickPropagation(el);
      });
      document.querySelectorAll('.preset-pills, .genres-wrapper').forEach(el => {
        L.DomEvent.disableScrollPropagation(el);
      });
    }

    poiFilterToggleBtn.addEventListener('click', () => {
      const isVisible = poiFilterPanel.style.display !== 'none';
      poiFilterPanel.style.display = isVisible ? 'none' : 'block';
    });

    closePoiPanelBtn.addEventListener('click', () => {
      poiFilterPanel.style.display = 'none';
    });

    // Collapsible Accordion Toggle Listener
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const section = header.parentElement;
        section.classList.toggle('open');
      });
    });

    // Reset All Filters Listener
    document.getElementById('resetFiltersBtn').addEventListener('click', () => {
      // 1. Reset Presets to 'all'
      selectedPresets.clear();
      selectedPresets.add('all');
      document.querySelectorAll('.preset-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.preset === 'all');
      });

      // 2. Reset Genre Chips
      selectedGenres.clear();
      document.querySelectorAll('.genre-chip').forEach(c => c.classList.remove('active'));

      // 3. Reset Search Input
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (searchClearBtn) searchClearBtn.style.display = 'none';

      // 4. Reset POI Layer Checkboxes & Visibility (All ON)
      Object.keys(layerMap).forEach(lType => {
        setLayerVisibility(lType, true);
      });

      applyFilters();
    });

    const layerMap = {
      systems: systemsLayer,
      vendors: foodVendorsLayer,
      jouvert: jouvertLayer,
      judging: judgingLayer,
      toilets: toiletsLayer,
      firstaid: firstAidLayer,
      welfare: welfareLayer,
      trading: tradingLayer,
      stations: stationsLayer,
      buses: busesLayer,
      parade: paradeLayer,
      boundary: boundaryLayer
    };

    function setLayerVisibility(layerType, isActive) {
      const targetLayer = layerMap[layerType];
      if (targetLayer) {
        isActive ? map.addLayer(targetLayer) : map.removeLayer(targetLayer);
      }
      
      // Sync sidebar buttons
      const sidebarBtn = document.querySelector(`.layer-toggle-btn[data-layer="${layerType}"]`);
      if (sidebarBtn) {
        sidebarBtn.classList.toggle('active', isActive);
      }

      // Sync floating checkboxes
      const checkbox = document.querySelector(`.poi-toggle-row input[data-poi="${layerType}"]`);
      if (checkbox) {
        checkbox.checked = isActive;
      }
    }

    // Layer Controls (Sidebar buttons)
    document.querySelectorAll('.layer-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const layerType = e.target.dataset.layer;
        const isActive = !e.target.classList.contains('active');
        setLayerVisibility(layerType, isActive);
      });
    });

    // Layer Controls (Floating panel checkboxes)
    document.querySelectorAll('.poi-toggle-row input').forEach(input => {
      input.addEventListener('change', (e) => {
        const layerType = e.target.dataset.poi;
        setLayerVisibility(layerType, e.target.checked);
      });
    });

    // 9. MOBILE TAB SWITCHER LOGIC
    const appContainer = document.getElementById('app-container');
    const tabMapBtn = document.getElementById('tabMapBtn');
    const tabDrawerBtn = document.getElementById('tabDrawerBtn');

    function switchToMapView() {
      appContainer.classList.remove('show-drawer');
      tabMapBtn.classList.add('active');
      tabDrawerBtn.classList.remove('active');
      setTimeout(() => map.invalidateSize(), 200);
    }

    function switchToDrawerContainer() {
      appContainer.classList.add('show-drawer');
      tabDrawerBtn.classList.add('active');
      tabMapBtn.classList.remove('active');
    }

    tabMapBtn.addEventListener('click', switchToMapView);
    tabDrawerBtn.addEventListener('click', switchToDrawerContainer);
    
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', switchToMapView);
    }

    // About Me Modal Listener
    const aboutMeModal = document.getElementById('aboutMeModal');
    const aboutMeToggleBtn = document.getElementById('aboutMeToggleBtn');
    const closeAboutModalBtn = document.getElementById('closeAboutModalBtn');

    if (aboutMeToggleBtn && aboutMeModal) {
      aboutMeToggleBtn.addEventListener('click', () => {
        aboutMeModal.style.display = 'flex';
      });
    }

    if (closeAboutModalBtn && aboutMeModal) {
      closeAboutModalBtn.addEventListener('click', () => {
        aboutMeModal.style.display = 'none';
      });
    }

    if (aboutMeModal) {
      aboutMeModal.addEventListener('click', (e) => {
        if (e.target === aboutMeModal) {
          aboutMeModal.style.display = 'none';
        }
      });
    }

    // Lightbox Expanded Image Modal Listener
    const imageLightboxModal = document.getElementById('imageLightboxModal');
    const closeLightboxModalBtn = document.getElementById('closeLightboxModalBtn');
    const aboutAvatarImg = document.querySelector('.about-avatar');

    if (aboutAvatarImg && imageLightboxModal) {
      aboutAvatarImg.addEventListener('click', () => {
        imageLightboxModal.style.display = 'flex';
      });
    }

    if (closeLightboxModalBtn && imageLightboxModal) {
      closeLightboxModalBtn.addEventListener('click', () => {
        imageLightboxModal.style.display = 'none';
      });
    }

    // Programme Modal Listeners
    const programmeModal = document.getElementById('programmeModal');
    const programmeToggleBtn = document.getElementById('programmeToggleBtn');
    const closeProgrammeModalBtn = document.getElementById('closeProgrammeModalBtn');
    const progTabSunday = document.getElementById('progTabSunday');
    const progTabMonday = document.getElementById('progTabMonday');
    const progContentSunday = document.getElementById('progContentSunday');
    const progContentMonday = document.getElementById('progContentMonday');

    if (programmeToggleBtn && programmeModal) {
      programmeToggleBtn.addEventListener('click', () => {
        programmeModal.style.display = 'flex';
      });
    }

    if (closeProgrammeModalBtn && programmeModal) {
      closeProgrammeModalBtn.addEventListener('click', () => {
        programmeModal.style.display = 'none';
      });
    }

    if (progTabSunday && progTabMonday) {
      progTabSunday.addEventListener('click', () => {
        progTabSunday.classList.add('active');
        progTabMonday.classList.remove('active');
        progContentSunday.style.display = 'block';
        progContentMonday.style.display = 'none';
      });

      progTabMonday.addEventListener('click', () => {
        progTabMonday.classList.add('active');
        progTabSunday.classList.remove('active');
        progContentMonday.style.display = 'block';
        progContentSunday.style.display = 'none';
      });
    }

    // Modal Scroll Navigation Buttons Handler
    document.querySelectorAll('.scroll-nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSelector = btn.getAttribute('data-scroll-target');
        const dir = parseInt(btn.getAttribute('data-scroll-dir'), 10) || 1;
        const container = document.querySelector(targetSelector);
        if (container) {
          const scrollDistance = container.clientHeight * 0.7;
          container.scrollBy({
            top: scrollDistance * dir,
            behavior: 'smooth'
          });
        }
      });
    });

    // Carnival History Modal Listeners
    const historyModal = document.getElementById('historyModal');
    const historyToggleBtn = document.getElementById('historyToggleBtn');
    const closeHistoryModalBtn = document.getElementById('closeHistoryModalBtn');

    if (historyToggleBtn && historyModal) {
      historyToggleBtn.addEventListener('click', () => {
        historyModal.style.display = 'flex';
      });
    }

    if (closeHistoryModalBtn && historyModal) {
      closeHistoryModalBtn.addEventListener('click', () => {
        historyModal.style.display = 'none';
      });
    }

    if (historyModal) {
      historyModal.addEventListener('click', (e) => {
        if (e.target === historyModal) {
          historyModal.style.display = 'none';
        }
      });
    }

    // Travel Info Modal Listeners
    const travelModal = document.getElementById('travelModal');
    const travelInfoToggleBtn = document.getElementById('travelInfoToggleBtn');
    const closeTravelModalBtn = document.getElementById('closeTravelModalBtn');
    const travelTabTube = document.getElementById('travelTabTube');
    const travelTabBus = document.getElementById('travelTabBus');
    const travelContentTube = document.getElementById('travelContentTube');
    const travelContentBus = document.getElementById('travelContentBus');

    if (travelInfoToggleBtn && travelModal) {
      travelInfoToggleBtn.addEventListener('click', () => {
        travelModal.style.display = 'flex';
      });
    }

    if (closeTravelModalBtn && travelModal) {
      closeTravelModalBtn.addEventListener('click', () => {
        travelModal.style.display = 'none';
      });
    }

    if (travelModal) {
      travelModal.addEventListener('click', (e) => {
        if (e.target === travelModal) {
          travelModal.style.display = 'none';
        }
      });
    }

    if (travelTabTube && travelTabBus) {
      travelTabTube.addEventListener('click', () => {
        travelTabTube.classList.add('active');
        travelTabBus.classList.remove('active');
        travelContentTube.style.display = 'block';
        travelContentBus.style.display = 'none';
      });

      travelTabBus.addEventListener('click', () => {
        travelTabBus.classList.add('active');
        travelTabTube.classList.remove('active');
        travelContentBus.style.display = 'block';
        travelContentTube.style.display = 'none';
      });
    }

    // 🌐 Multi-Language Translation System (8 Languages)
    const translations = {
      en: {
        langBtn: "🌐 Language", poiFilterBtn: "🗺️ Filters and Key", progBtn: "📅 Programme", histBtn: "📜 Carnival History",
        findLocBtn: "📍 Find My Location", travelBtn: "🚌 Travel Info", tflAlertsBtn: "🚇 TfL Alerts", lightMapBtn: "☀️ Light Map",
        darkMapBtn: "🌙 Dark Map", aboutMeBtn: "ℹ️ About Me", clearFilters: "Clear Filters", selectAll: "Select All",
        searchPlaceholder: "Search sound system or genre...", showingSystems: "Showing {count} of 37 Systems",
        poiTitle: "Map Filters and Key", resetBtn: "RESET", facTitle: "📍 Facilities & Map Layers",
        soundSystems: "🔊 Sound Systems (37)", foodVendors: "🍗 Featured Food Vendors (2)", jouvertLoc: "🌅 J'ouvert Location",
        judgingZone: "⚖️ MAS Judging Zone", toilets: "🚻 Public Toilets (40)", firstAid: "✚ First Aid (6)", welfare: "💖 Welfare Points (4)",
        streetTrading: "🍴 Street Trading Stalls (19)", tubeStations: "🚇 Tube Stations (11)", busHubs: "🚌 Bus Hubs & Express Routes (6)",
        paradeRoute: "🚩 Parade Route", boundary: "🟨 Perimeter Boundary", genresTitle: "🎵 Music Genres & Presets",
        planJourney: "🗺️ Plan Your Journey", shareLocation: "📲 Share My Location",
        tflBadge: "🚇 TFL ALERTS", progModalTitle: "Carnival 2026 Programme", progSunTab: "Sun 30 Aug (Family Day)",
        progMonTab: "Mon 31 Aug (Adults Parade)", histModalTitle: "Notting Hill Carnival History",
        histWelcomeTitle: "Welcome to Notting Hill Carnival!",
        histWelcomeText: "Celebrating 60 years of incredible music, vibrant colours, and rich Caribbean culture, Notting Hill Carnival is London's biggest street party — welcoming over two million people of all ages for an unforgettable weekend of joy, dance, and community spirit!",
        histWebsiteBtn: "🌐 Visit Official Website (nhcarnival.org) ↗", histBeganTitle: "How the Magic Began",
        histBeganDesc: "What started as a grassroots community gathering has blossomed into a world-renowned cultural institution:",
        histExperienceTitle: "What to See & Experience",
        travelModalTitle: "Travel & Transport Guide", travelTubeTab: "🚇 Tube & Rail Guide", travelBusTab: "🚌 Bus Diversions & Express",
        locateOnMap: "📍 Locate on Map", locateHubOnMap: "📍 Locate Hub on Map",
        scrollUp: "▲ Scroll Up", scrollDown: "▼ Scroll Down"
      },
      es: {
        langBtn: "🌐 Idioma", poiFilterBtn: "🗺️ Filtros y Clave", progBtn: "📅 Programa", histBtn: "📜 Historia del Carnaval",
        findLocBtn: "📍 Buscar mi Ubicación", travelBtn: "🚌 Info de Viaje", tflAlertsBtn: "🚇 Alertas TfL", lightMapBtn: "☀️ Mapa Claro",
        darkMapBtn: "🌙 Mapa Oscuro", aboutMeBtn: "ℹ️ Sobre Mí", clearFilters: "Borrar Filtros", selectAll: "Seleccionar Todo",
        searchPlaceholder: "Buscar sound system o género...", showingSystems: "Mostrando {count} de 37 Sistemas",
        poiTitle: "Filtros de Mapa y Clave", resetBtn: "REINICIAR", facTitle: "📍 Instalaciones y Capas",
        soundSystems: "🔊 Sound Systems (37)", foodVendors: "🍗 Puestos de Comida (2)", jouvertLoc: "🌅 Ubicación J'ouvert",
        judgingZone: "⚖️ Zona de Jurado MAS", toilets: "🚻 Baños Públicos (40)", firstAid: "✚ Primeros Auxilios (6)", welfare: "💖 Puntos de Bienestar (4)",
        streetTrading: "🍴 Puestos Ambulantes (19)", tubeStations: "🚇 Estaciones de Metro (11)", busHubs: "🚌 Enlaces de Autobús (6)",
        paradeRoute: "🚩 Ruta del Desfile", boundary: "🟨 Perímetro Oficial", genresTitle: "🎵 Géneros Musicales",
        planJourney: "🗺️ Planificar Viaje", shareLocation: "📲 Compartir Ubicación",
        tflBadge: "🚇 ALERTAS TFL", progModalTitle: "Programa Carnaval 2026", progSunTab: "Dom 30 Ago (Día Familiar)",
        progMonTab: "Lun 31 Ago (Desfile Adultos)", histModalTitle: "Historia del Carnaval de Notting Hill",
        histWelcomeTitle: "¡Bienvenidos al Carnaval de Notting Hill!",
        histWelcomeText: "Celebrando 60 años de increíble música, colores vibrantes y rica cultura caribeña, la fiesta callejera más grande de Londres recibe a más de dos millones de personas para un fin de semana inolvidable de alegría y baile.",
        histWebsiteBtn: "🌐 Visitar Sitio Oficial (nhcarnival.org) ↗", histBeganTitle: "Cómo Comenzó la Magia",
        histBeganDesc: "Lo que comenzó como una reunión comunitaria se ha convertido en una institución cultural mundial:",
        hist1959Title: "✨ 1959 — La Chispa",
        hist1959Desc: "La activista Claudia Jones organizó una exhibición caribeña bajo techo en St Pancras Town Hall para reunir a la gente mediante calipso y steelpan.",
        hist1966Title: "🥁 1966 — Salida a las Calles",
        hist1966Desc: "La líder comunitaria Rhaune Laslett lanzó el primer festival callejero con niños vestidos con disfraces coloridos junto a músicos de steelpan y bandas de viento.",
        hist1973Title: "🔊 1973 — La Era de Sound Systems",
        hist1973Desc: "Leslie 'Teacher' Palmer introdujo sound systems callejeros estáticos y carrozas en Ladbroke Grove, creando la experiencia eléctrica al aire libre que conocemos hoy.",
        histExperienceTitle: "Qué Ver y Experimentar",
        histMasTitle: "💃 El Espectacular Desfile Mas",
        histMasDesc: "Maravíllate con bailarines de comparsas en trajes brillantes hechos a mano con altas coronas de plumas bailando a lo largo del recorrido.",
        histSteelTitle: "🎶 Potentes Steelbands",
        histSteelDesc: "Siente las armonías melódicas de orquestas de steelpan y grupos de tambores en vivo que hacen bailar a la multitud de la mañana a la noche.",
        histSoundTitle: "🔊 Sound Systems Legendarios",
        histSoundDesc: "Descubre docenas de escenarios icónicos en el oeste de Londres que tocan desde reggae y calipso hasta soca, bouyon y house.",
        histFoodTitle: "🍗 Deliciosos Sabores del Caribe",
        histFoodDesc: "Sigue los aromas de pollo jerk a la parrilla, roti caliente, plátanos fritos y antojos dulces en los puestos autorizados.",
        histFamilyTitle: "👶 Diversión en el Día Familiar",
        histFamilyDesc: "El domingo de carnaval está dedicado a los niños y familias, con el desfile infantil y espacios acogedores.",
        histClosingText: "¡El Carnaval se trata de compartir amor, orgullo cultural y pura felicidad! ¡Ponte tus colores más brillantes y ven a celebrar! ❤️💛💚",
        progSunTitle: "Domingo 30 de Agosto de 2026",
        progMonTitle: "Lunes 31 de Agosto de 2026",
        jouvertTitle: "🌅 J'ouvert",
        jouvertLocText: "📍 Comenzando en Sainsbury's, rotonda Canal Way",
        openingTitle: "⚖️ Ceremonia Oficial de Apertura",
        openingLoc: "📍 Punto de Jurado MAS, Great Western Road",
        openingDesc: "Tradicionalmente el Carnaval es inaugurado por residentes locales y participantes junto a los organizadores. La tribuna del jurado está abierta al público.",
        childrenParadeTitle: "👶 Desfile Infantil",
        allDay: "Todo el Día",
        paradeRouteLoc: "📍 Ruta del Desfile",
        childrenParadeDesc: "El domingo es para los niños, fomentando la participación con actividades familiares. El evento principal es el desfile infantil en disfraz.",
        duttyTitle: "🎨 Dutty / Fun Mas",
        duttyDesc: "Diviértete y manchate. Los espectadores recibirán polvos de colores, pintura o chocolate derretido. Pura alegría a lo largo del desfile.",
        soundSysProgTitle: "🔊 Sound Systems",
        soundSysProgLoc: "📍 37 Sound Systems en Notting Hill",
        soundSysProgDesc: "Arraigados en la cultura caribeña y Reggae, ofreciendo desde Rare Groove hasta House, Dub, Soca y Samba.",
        soundSysProgMonDesc: "37 sound systems estáticos funcionando a pleno volumen en toda el área del carnaval hasta las 19:00.",
        liveStagesTitle: "🎤 Escenarios en Vivo",
        reflectionTitle: "🕊️ Momento de Reflexión",
        reflectionTime: "15:00 puntual",
        reflectionDesc: "A las 3:00 PM se guardan 72 segundos de silencio en honor a las víctimas de Grenfell Tower y pioneros de la comunidad.",
        adultParadeTitle: "💃 Desfile de Adultos (El Clímax)",
        adultParadeTime: "10:30 en adelante",
        adultParadeDesc: "¡El clímax del Carnaval y la última vuelta! Las comparsas MAS se presentan en trajes elaborados. Consigue un silbato o corneta y únete a la fiesta.",
        travelModalTitle: "Guía de Transporte y Viaje",
        travelTubeTab: "🚇 Guía de Metro y Tren",
        travelBusTab: "🚌 Autobuses y Desvíos",
        travelTubeTitle: "Estado de Estaciones de Metro y Tren",
        travelTip: "💡 Consejos de TfL: Para un viaje más fácil y menos concurrido, toma el Metro o la Elizabeth Line hasta Paddington, Kensal Rise o Shepherd's Bush y sigue la ruta a pie señalizada.",
        closedAllDay: "CERRADO TODO EL DÍA",
        noEntry11_18: "SIN ENTRADA 11:00 - 18:00",
        exitOnly11: "SOLO SALIDA desde 11:00",
        closes15: "CIERRA 15:00",
        closes18: "CIERRA 18:00",
        closes23: "CIERRA 23:00",
        restricted16: "RESTRINGIDO DESDE 16:00",
        queuesExpected: "FILAS ESPERADAS",
        paddingtonTitle: "🟢 Estación Recomendada: Paddington",
        openRecommended: "ABIERTA / RECOMENDADA",
        paddingtonDesc: "Punto de intercambio principal para Elizabeth Line, National Rail, Bakerloo, Circle, District y Hammersmith & City lines. Caminata corta al Carnaval.",
        travelBusTitle: "Servicios de Autobús y Desvíos",
        busTip: "🚍 Desvíos de Autobús: Los autobuses operan desde dos terminales principales fuera del perímetro: Prince of Wales (Harrow Road) al norte y Notting Hill Gate al sur.",
        expressBusDesc: "Servicio expreso directo operando entre Notting Hill Gate y Victoria (10:00 - 17:00), extendiéndose a Vauxhall hasta las 22:00.",
        daytime: "Horario Diurno",
        monAfternoon: "Solo Lunes por la Tarde",
        express7XDesc: "Servicio expreso directo conectando el centro de Londres con East Acton vía Paddington.",
        express18XDesc: "Opera entre Warren Street y Stonebridge Park vía Prince of Wales.",
        express36XLoc: "📍 Peckham ➔ Harrow Road (Solo Un Sentido)",
        express36XDesc: "Opera en un solo sentido desde Peckham y el sur de Londres hacia Harrow Road.",
        express23XDesc: "Cuatro viajes especiales operando solo el lunes por la tarde.",
        divertedDayTitle: "🚏 Rutas de Autobús Diurnas Desviadas",
        dayRoutesLabel: "Rutas Diurnas:",
        divertedNightTitle: "🌙 Rutas de Autobús Nocturnas Desviadas",
        nightRoutesLabel: "Rutas Nocturnas:",
        tfl_ladbroke: "Cerrado todo el día tanto el domingo como el lunes por seguridad.",
        tfl_latimer: "Cierra a las 23:00 y puede cerrar temporalmente durante horas pico.",
        tfl_nottinghill: "Sin entrada entre las 11:00 AM y 6:00 PM. Las líneas District y Circle no pararán.",
        tfl_westbourne: "Solo salida a partir de las 11:00 AM. No se permite la entrada.",
        tfl_holland: "Sin entrada después de las 11:00 AM. La estación cierra por completo a las 15:00.",
        tfl_queensway: "Sin entrada entre las 11:00 AM y 6:00 PM. Solo salida.",
        tfl_royaloak: "Sin entrada después de las 11:00 AM. La estación cierra por completo a las 18:00.",
        tfl_shepherds: "Sin boletería disponible ni escaleras mecánicas de bajada después de las 16:00.",
        tfl_kensalgreen: "Se esperan filas fuera de la estación Kensal Green.",
        tfl_kensalrise: "La entrada de Chamberlayne Road cierra a las 18:00 con filas por Station Terrace.",
        locateOnMap: "📍 Ubicar en el Mapa",
        locateHubOnMap: "📍 Ubicar Terminal en Mapa",
        scrollUp: "▲ Desplazar Arriba",
        scrollDown: "▼ Desplazar Abajo"
      },
      pt: {
        langBtn: "🌐 Idioma", poiFilterBtn: "🗺️ Filtros e Legenda", progBtn: "📅 Programação", histBtn: "📜 História do Carnaval",
        findLocBtn: "📍 Encontrar Minha Localização", travelBtn: "🚌 Info de Transporte", tflAlertsBtn: "🚇 Alertas TfL", lightMapBtn: "☀️ Mapa Claro",
        darkMapBtn: "🌙 Mapa Escuro", aboutMeBtn: "ℹ️ Sobre Mim", clearFilters: "Limpar Filtros", selectAll: "Selecionar Tudo",
        searchPlaceholder: "Buscar sound system ou gênero...", showingSystems: "Mostrando {count} de 37 Sistemas",
        poiTitle: "Filtros e Legenda do Mapa", resetBtn: "REINICIAR", facTitle: "📍 Instalações        histExperienceTitle: "O Que Ver e Experimentar",
        travelModalTitle: "Guia de Transporte", travelTubeTab: "🚇 Guia de Metrô e Trem", travelBusTab: "🚌 Desvios e Linhas de Ônibus",
        locateOnMap: "📍 Localizar no Mapa", locateHubOnMap: "📍 Localizar Terminal no Mapa",
        tfl_ladbroke: "Fechado o dia todo no domingo e na segunda-feira por segurança.",
        tfl_latimer: "Fecha às 23:00 e pode fechar temporariamente em horários de pico.",
        tfl_nottinghill: "Sem entrada entre 11:00 e 18:00. Linhas District & Circle não param.",
        tfl_westbourne: "Apenas saída a partir das 11:00. Entrada não permitida.",
        tfl_holland: "Sem entrada após 11:00. Estação fecha completamente às 15:00.",
        tfl_queensway: "Sem entrada entre 11:00 e 18:00. Apenas saída.",
        tfl_royaloak: "Sem entrada após 11:00. Estação fecha completamente às 18:00.",
        tfl_shepherds: "Sem bilheteria e sem escada rolante de descida após 16:00.",
        tfl_kensalgreen: "Filas esperadas do lado de fora da estação.",
        tfl_kensalrise: "Entrada da Chamberlayne Rd fecha às 18:00, filas na Station Terrace."
      },
      fr: {
        langBtn: "🌐 Langue", poiFilterBtn: "🗺️ Filtres et Légende", progBtn: "📅 Programme", histBtn: "📜 Histoire du Carnaval",
        findLocBtn: "📍 Ma Position", travelBtn: "🚌 Infos Transports", tflAlertsBtn: "🚇 Alertes TfL", lightMapBtn: "☀️ Carte Claire",
        darkMapBtn: "🌙 Carte Sombre", aboutMeBtn: "ℹ️ À Propos", clearFilters: "Effacer les Filtres", selectAll: "Tout Sélectionner",
        searchPlaceholder: "Rechercher sound system ou genre...", showingSystems: "{count} sur 37 Systèmes Affichés",
        poiTitle: "Filtres et Légende de la Carte", resetBtn: "RÉINITIALISER", facTitle: "📍 Équipements & Cartes",
        soundSystems: "🔊 Sound Systems (37)", foodVendors: "🍗 Stands Gastronomie (2)", jouvertLoc: "🌅 Départ J'ouvert",
        judgingZone: "⚖️ Zone de Jugement MAS", toilets: "🚻 Toilettes Publiques (40)", firstAid: "✚ Premiers Secours (6)", welfare: "💖 Points d'Assistance (4)",
        streetTrading: "🍴 Commerce Ambulant (19)", tubeStations: "🚇 Stations de Métro (11)", busHubs: "🚌 Lignes de Bus (6)",
        paradeRoute: "🚩 Parcours de la Parade", boundary: "🟨 Périmètre Officiel", genresTitle: "🎵 Genres Musicaux",
        planJourney: "🗺️ Planifier le Trajet", shareLocation: "📲 Partager Ma Position",
        tflBadge: "🚇 ALERTES TFL", progModalTitle: "Programme du Carnaval 2026", progSunTab: "Dim 30 Août (Journée Famille)",
        progMonTab: "Lun 31 Août (Grande Parade)", histModalTitle: "Histoire du Carnaval de Notting Hill",
        histWelcomeTitle: "Bienvenue au Carnaval de Notting Hill !",
        histWelcomeText: "Célébrant 60 ans de musique formidable, de couleurs éclatantes et de culture caribéenne, la plus grande fête de rue de Londres accueille plus de deux millions de personnes pour un week-end inoubliable.",
        histWebsiteBtn: "🌐 Visiter le Site Officiel (nhcarnival.org) ↗", histBeganTitle: "Comment l'Aventure a Commencé",
        histBeganDesc: "Ce qui a commencé comme un rassemblement communautaire s'est épanoui en une institution culturelle mondiale :",
        histExperienceTitle: "À Voir et à Expérimenter",
        travelModalTitle: "Guide des Transports", travelTubeTab: "🚇 Métro & Train", travelBusTab: "🚌 Bus & Déviations",
        locateOnMap: "📍 Situer sur la Carte", locateHubOnMap: "📍 Situer le Terminal sur la Carte",
        tfl_ladbroke: "Fermée toute la journée dimanche et lundi par mesure de sécurité.",
        tfl_latimer: "Ferme à 23h00 et peut fermer temporairement lors des affluences.",
        tfl_nottinghill: "Accès interdit entre 11h00 et 18h00. Lignes District & Circle sans arrêt.",
        tfl_westbourne: "Sortie uniquement dès 11h00. Entrée interdite.",
        tfl_holland: "Accès interdit après 11h00. Station fermée à 15h00.",
        tfl_queensway: "Accès interdit entre 11h00 et 18h00. Sortie uniquement.",
        tfl_royaloak: "Accès interdit après 11h00. Station fermée à 18h00.",
        tfl_shepherds: "Pas de guichet ni d'escalator descendant après 16h00.",
        tfl_kensalgreen: "Files d'attente attendues devant la station.",
        tfl_kensalrise: "Accès Chamberlayne Rd fermé à 18h, file sur Station Terrace."
      },
      it: {
        langBtn: "🌐 Lingua", poiFilterBtn: "🗺️ Filtri e Legenda", progBtn: "📅 Programma", histBtn: "📜 Storia del Carnevale",
        findLocBtn: "📍 Trova la mia Posizione", travelBtn: "🚌 Info Trasporti", tflAlertsBtn: "🚇 Avvisi TfL", lightMapBtn: "☀️ Mappa Chiara",
        darkMapBtn: "🌙 Mappa Scura", aboutMeBtn: "ℹ️ Su di Me", clearFilters: "Cancella Filtri", selectAll: "Seleziona Tutto",
        searchPlaceholder: "Cerca sound system o genere...", showingSystems: "Mostrando {count} di 37 Sistemi",
        poiTitle: "Filtri e Legenda Mappa", resetBtn: "RIPRISTINA", facTitle: "📍 Servizi e Livelli",
        soundSystems: "🔊 Sound Systems (37)", foodVendors: "🍗 Stand Gastronomici (2)", jouvertLoc: "🌅 Partenza J'ouvert",
        judgingZone: "⚖️ Zona Giuria MAS", toilets: "🚻 Bagni Pubblici (40)", firstAid: "✚ Primo Soccorso (6)", welfare: "💖 Punti Assistenza (4)",
        streetTrading: "🍴 Bancarelle di Strada (19)", tubeStations: "🚇 Stazioni Metropolitana (11)", busHubs: "🚌 Hub Autobus (6)",
        paradeRoute: "🚩 Percorso della Parata", boundary: "🟨 Perimetro Ufficiale", genresTitle: "🎵 Genere Musicale",
        planJourney: "🗺️ Pianifica Itinerario", shareLocation: "📲 Condividi Posizione",
        tflBadge: "🚇 AVVISI TFL", progModalTitle: "Programma Carnevale 2026", progSunTab: "Dom 30 Ago (Giornata Famiglia)",
        progMonTab: "Lun 31 Ago (Sfilata Principale)", histModalTitle: "Storia del Carnevale di Notting Hill",
        histWelcomeTitle: "Benvenuti al Carnevale di Notting Hill!",
        histWelcomeText: "Festeggiando 60 anni di musica straordinaria, colori vivaci e ricca cultura caraibica, la più grande festa di strada di Londra accoglie oltre due milioni di persone per un fine settimana indimenticabile.",
        histWebsiteBtn: "🌐 Visita il Sito Ufficiale (nhcarnival.org) ↗", histBeganTitle: "Come è Iniziata la Magia",
        histBeganDesc: "Quella che era iniziata come una festa di quartiere si è trasformata in un'istituzione culturale di fama mondiale:",
        histExperienceTitle: "Cosa Vedere e Provare",
        travelModalTitle: "Guida ai Trasporti", travelTubeTab: "🚇 Guida Metro e Treni", travelBusTab: "🚌 Autobus e Deviazioni",
        locateOnMap: "📍 Mappa la Posizione", locateHubOnMap: "📍 Mappa il Capolinea",
        tfl_ladbroke: "Chiusa tutto il giorno sia domenica che lunedì per sicurezza.",
        tfl_latimer: "Chiude alle 23:00 e può chiudere temporaneamente nei momenti di picco.",
        tfl_nottinghill: "Nessun ingresso tra le 11:00 e le 18:00. Linee District e Circle non fermano.",
        tfl_westbourne: "Solo uscita dalle 11:00 in poi. Ingresso non consentito.",
        tfl_holland: "Nessun ingresso dopo le 11:00. La stazione chiude alle 15:00.",
        tfl_queensway: "Nessun ingresso tra le 11:00 e le 18:00. Solo uscita.",
        tfl_royaloak: "Nessun ingresso dopo le 11:00. La stazione chiude alle 18:00.",
        tfl_shepherds: "Niente biglietteria né scale mobili in discesa dopo le 16:00.",
        tfl_kensalgreen: "Previste code all'esterno della stazione.",
        tfl_kensalrise: "Ingresso Chamberlayne Rd chiude alle 18:00, code da Station Terrace."
      },
      ja: {
        langBtn: "🌐 言語切替", poiFilterBtn: "🗺️ フィルター & 凡例", progBtn: "📅 スケジュール", histBtn: "📜 カーニバルの歴史",
        findLocBtn: "📍 現在地を検索", travelBtn: "🚌 交通アクセス案内", tflAlertsBtn: "🚇 TfL 運行情報", lightMapBtn: "☀️ ライトマップ",
        darkMapBtn: "🌙 ダークマップ", aboutMeBtn: "ℹ️ 制作者について", clearFilters: "リセット", selectAll: "すべて選択",
        searchPlaceholder: "サウンドシステムやジャンルを検索...", showingSystems: "37件中 {count} 件のシステムを表示",
        poiTitle: "マップフィルターと凡例", resetBtn: "初期化", facTitle: "📍 施設 & マップレイヤー",
        soundSystems: "🔊 サウンドシステム (37)", foodVendors: "🍗 おすすめフードブース (2)", jouvertLoc: "🌅 ジュヴェー出発地",
        judgingZone: "⚖️ MAS 審査ゾーン", toilets: "🚻 公衆トイレ (40)", firstAid: "✚ 救護所 (6)", welfare: "💖 案内・福祉ポイント (4)",
        streetTrading: "🍴 露店ストリート (19)", tubeStations: "🚇 地下鉄駅 (11)", busHubs: "🚌 バス harb & 急行路線 (6)",
        paradeRoute: "🚩 パレードルート", boundary: "🟨 公式開催エリア境界", genresTitle: "🎵 音楽ジャンル & プリセット",
        planJourney: "🗺️ 経路を調べる", shareLocation: "📲 現在地を共有",
        tflBadge: "🚇 TFL 運行情報", progModalTitle: "ノッティングヒルカーニバル2026日程", progSunTab: "8月30日(日) ファミリーデイ",
        progMonTab: "8月31日(月) メインパレード", histModalTitle: "ノッティングヒルカーニバルの歴史",
        histWelcomeTitle: "ノッティングヒルカーニバルへようこそ！",
        histWelcomeText: "60周年を迎える素晴らしい音楽、鮮やかな色彩、カリブ文化の祭典。ロンドン最大のストリートパーティーとして200万人以上の来場者を歓迎します。",
        histWebsiteBtn: "🌐 公式サイトを見る (nhcarnival.org) ↗", histBeganTitle: "カーニバルの始まり",
        histBeganDesc: "草の根の地域交流から始まったイベントが、今や世界的な文化へと発展しました：",
        histExperienceTitle: "見どころと体験",
        travelModalTitle: "交通アクセス＆移動ガイド", travelTubeTab: "🚇 地下鉄・鉄道案内", travelBusTab: "🚌 バス迂回・急行路線",
        locateOnMap: "📍 マップで場所を確認", locateHubOnMap: "📍 バスターミナルをマップ表示",
        tfl_ladbroke: "終日閉鎖（日曜日・月曜日ともに安全のため終日運休）。",
        tfl_latimer: "23:00閉鎖。混雑時は一時的に入場制限・閉鎖となる場合があります。",
        tfl_nottinghill: "11:00〜18:00は入場不可。ディストリクト線・サークル線は通過します。",
        tfl_westbourne: "11:00以降は出口専用（入場不可）。",
        tfl_holland: "11:00以降入場不可。15:00に完全閉鎖されます。",
        tfl_queensway: "11:00〜18:00は入場不可（出口専用）。",
        tfl_royaloak: "11:00以降入場不可。18:00に完全閉鎖されます。",
        tfl_shepherds: "16:00以降は券売機利用不可・下りエスカレーター停止。",
        tfl_kensalgreen: "駅外で入場待ちの行列が予想されます。",
        tfl_kensalrise: "チェンバレン・ロード入口は18:00閉鎖。ステーション・テラス側から並んでください。"
      },
      ko: {
        langBtn: "🌐 언어 변경", poiFilterBtn: "🗺️ 필터 및 범례", progBtn: "📅 일정", histBtn: "📜 카니발 역사",
        findLocBtn: "📍 내 위치 찾기", travelBtn: "🚌 교통 안내", tflAlertsBtn: "🚇 TfL 알림", lightMapBtn: "☀️ 밝은 지도",
        darkMapBtn: "🌙 어두운 지도", aboutMeBtn: "ℹ️ 제작자 정보", clearFilters: "필터 초기화", selectAll: "전체 선택",
        searchPlaceholder: "사운드 시스템 또는 장르 검색...", showingSystems: "37개 중 {count}개 시스템 표시",
        poiTitle: "지도 필터 및 범례", resetBtn: "초기화", facTitle: "📍 시설 및 지도 레이어",
        soundSystems: "🔊 사운드 시스템 (37)", foodVendors: "🍗 추천 먹거리 부스 (2)", jouvertLoc: "🌅 주베(J'ouvert) 출발지",
        judgingZone: "⚖️ MAS 심사 구역", toilets: "🚻 공중화장실 (40)", firstAid: "✚ 응급 처치소 (6)", welfare: "💖 미아보호 및 복지점 (4)",
        streetTrading: "🍴 거리 장터 (19)", tubeStations: "🚇 지하철역 (11)", busHubs: "🚌 버스 정류장 및 급행 (6)",
        paradeRoute: "🚩 퍼레이드 경로", boundary: "🟨 공식 구역 경계", genresTitle: "🎵 음악 장르",
        planJourney: "🗺️ 경로 계획", shareLocation: "📲 내 위치 공유",
        tflBadge: "🚇 TFL 운행 알림", progModalTitle: "노팅힐 카니발 2026 일정", progSunTab: "8월 30일 (일) 패밀리 데이",
        progMonTab: "8월 31일 (월) 메인 퍼레이드", histModalTitle: "노팅힐 카니발 역사",
        histWelcomeTitle: "노팅힐 카니발에 오신 것을 환영합니다!",
        histWelcomeText: "60주년을 맞이하는 환상적인 음악, 화려한 색채, 풍부한 카리브해 문화의 축제! 런던 최대의 거리 축제에서 200만 명 이상의 방문객들과 함께 즐거운 주말을 보내세요.",
        histWebsiteBtn: "🌐 공식 웹사이트 방문 (nhcarnival.org) ↗", histBeganTitle: "축제의 시작",
        histBeganDesc: "지역 주민들의 작은 모임에서 시작해 세계적인 문화 축제로 발전했습니다:",
        histExperienceTitle: "볼거리 및 즐길거리",
        travelModalTitle: "교통 및 이동 가이드", travelTubeTab: "🚇 지하철 및 철도 가이드", travelBusTab: "🚌 버스 우회 및 급행",
        locateOnMap: "📍 지도에서 위치 확인", locateHubOnMap: "📍 지도에서 정류장 확인",
        tfl_ladbroke: "안전을 위해 일요일과 월요일 전면 폐쇄됩니다.",
        tfl_latimer: "23:00에 폐쇄되며 혼잡 시 일시 폐쇄될 수 있습니다.",
        tfl_nottinghill: "11:00~18:00 진입 불가. 디스트릭트 및 서클 선 무통과.",
        tfl_westbourne: "11:00부터 출구 전용 (진입 불가).",
        tfl_holland: "11:00 이후 진입 불가. 15:00에 완전히 폐쇄됩니다.",
        tfl_queensway: "11:00~18:00 진입 불가 (출구 전용).",
        tfl_royaloak: "11:00 이후 진입 불가. 18:00에 완전히 폐쇄됩니다.",
        tfl_shepherds: "16:00 이후 발권기 미운행 및 하행 에스컬레이터 운행 중단.",
        tfl_kensalgreen: "역 외부 대기 줄이 예상됩니다.",
        tfl_kensalrise: "체임벌린 로드 입구는 18:00 폐쇄, 스테이션 테라스로 대기."
      },
      zh: {
        langBtn: "🌐 语言选择", poiFilterBtn: "🗺️ 筛选与图例", progBtn: "📅 活动日程", histBtn: "📜 狂欢节历史",
        findLocBtn: "📍 定位我的位置", travelBtn: "🚌 交通出行指南", tflAlertsBtn: "🚇 TfL 运行提示", lightMapBtn: "☀️ 浅色地图",
        darkMapBtn: "🌙 深色地图", aboutMeBtn: "ℹ️ 关于开发者", clearFilters: "清除筛选", selectAll: "全选",
        searchPlaceholder: "搜索音响系统或音乐风格...", showingSystems: "显示 37 个系统中的 {count} 个",
        poiTitle: "地图图层与筛选", resetBtn: "重置", facTitle: "📍 设施与地图图层",
        soundSystems: "🔊 音响系统 (37)", foodVendors: "🍗 特色美食摊位 (2)", jouvertLoc: "🌅 J'ouvert 晨间开幕点",
        judgingZone: "⚖️ MAS 盛装巡游评审区", toilets: "🚻 公共卫生间 (40)", firstAid: "✚ 急救站 (6)", welfare: "💖 寻人与援助点 (4)",
        streetTrading: "🍴 街头美食摊位区 (19)", tubeStations: "🚇 地铁站 (11)", busHubs: "🚌 公交枢纽与快线 (6)",
        paradeRoute: "🚩 巡游路线", boundary: "🟨 官方活动边界", genresTitle: "🎵 音乐流派",
        planJourney: "🗺️ 规划路线", shareLocation: "📲 分享我的位置",
        tflBadge: "🚇 伦敦交通局提示", progModalTitle: "2026年诺丁山狂欢节日程表", progSunTab: "8月30日周日（家庭日）",
        progMonTab: "8月31日周一（盛装大巡游）", histModalTitle: "诺丁山狂欢节历史介绍",
        histWelcomeTitle: "欢迎参加诺丁山狂欢节！",
        histWelcomeText: "庆祝60周年的欢快音乐、绚丽色彩与加勒比文化。作为伦敦最大的街头盛会，每年吸引超过200万游客共度欢快难忘的周末！",
        histWebsiteBtn: "🌐 访问官方网站 (nhcarnival.org) ↗", histBeganTitle: "传奇如何开始",
        histBeganDesc: "从最初的社区聚会演变为举世闻名的文化盛事：",
        histExperienceTitle: "精彩看点与体验",
        travelModalTitle: "交通与出行指南", travelTubeTab: "🚇 地铁与铁路指南", travelBusTab: "🚌 公交线路与改道指南",
        locateOnMap: "📍 在地图上定位", locateHubOnMap: "📍 在地图上定位枢纽",
        tfl_ladbroke: "周日和周一出于安全原因全天关闭。",
        tfl_latimer: "晚上11点关闭，人流高峰期可能会临时关闭。",
        tfl_nottinghill: "上午11点至下午6点禁止进站。区域线和环线将不停靠。",
        tfl_westbourne: "上午11点起仅供出站，禁止进站。",
        tfl_holland: "上午11点后禁止进站，车站于下午3点完全关闭。",
        tfl_queensway: "上午11点至下午6点禁止进站（仅限出站）。",
        tfl_royaloak: "上午11点后禁止进站，车站于下午6点完全关闭。",
        tfl_shepherds: "下午4点后停止售票且无下行自动扶梯。",
        tfl_kensalgreen: "预计车站外将出现排队人潮。",
        tfl_kensalrise: "Chamberlayne Road 入口于下午6点关闭，请在 Station Terrace 排队。"
      },
      ar: {
        langBtn: "🌐 اللغة", poiFilterBtn: "🗺️ تصفية والمفتاح", progBtn: "📅 برنامج الفعاليات", histBtn: "📜 تاريخ الكرنفال",
        findLocBtn: "📍 تحديد موقعي", travelBtn: "🚌 معلومات المواصلات", tflAlertsBtn: "🚇 تنبيهات شبكة النقل", lightMapBtn: "☀️ خريطة فاتحة",
        darkMapBtn: "🌙 خريطة داكنة", aboutMeBtn: "ℹ️ نبذة عني", clearFilters: "مسح الفلاتر", selectAll: "تحديد الكل",
        searchPlaceholder: "البحث عن نظام صوتي أو نوع موسيقى...", showingSystems: "عرض {count} من أصل 37 نظامًا صوتيًا",
        poiTitle: "فلاتر الخريطة والدليل", resetBtn: "إعادة ضبط", facTitle: "📍 المرافق وطبقات الخريطة",
        soundSystems: "🔊 الأنظمة الصوتية (37)", foodVendors: "🍗 أكشاك الطعام المميزة (2)", jouvertLoc: "🌅 موقع انطلاق انطلاق جوفر",
        judgingZone: "⚖️ منطقة تحكيم العروض", toilets: "🚻 دورات المياه العامة (40)", firstAid: "✚ الإسعافات الأولية (6)", welfare: "💖 نقاط الرعاية والمساعدة (4)",
        streetTrading: "🍴 أكشاك البيع بالمشي (19)", tubeStations: "🚇 محطات المترو (11)", busHubs: "🚌 محطات الحافلات السريعة (6)",
        paradeRoute: "🚩 مسار الاستعراض الرئيسي", boundary: "🟨 الحدود الرسمية للكرنفال", genresTitle: "🎵 الأنواع الموسيقية",
        planJourney: "🗺️ تخطيط مسار الرحلة", shareLocation: "📲 مشاركة موقعي",
        tflBadge: "🚇 تنبيهات النقل", progModalTitle: "جدول فعاليات كرنفال 2026", progSunTab: "الأحد 30 أغسطس (يوم العائلة)",
        progMonTab: "الأثنين 31 أغسطس (الموكب الرئيسي)", histModalTitle: "تاريخ كرنفال نوتينغ هيل",
        histWelcomeTitle: "مرحبًا بكم في كرنفال نوتينغ هيل!",
        histWelcomeText: "احتفالاً بمرور 60 عاماً من الموسيقى الرائعة والألوان المبهجة، يستقبل أكبر مهرجان شوارع في لندن أكثر من مليون زائر.",
        histWebsiteBtn: "🌐 زيارة الموقع الرسمي (nhcarnival.org) ↗", histBeganTitle: "كيف بدأت البداية",
        histBeganDesc: "تحول التجمع المحلي البسيط إلى مؤسسة ثقافية عالمية:",
        histExperienceTitle: "أبرز التجارب والأنشطة",
        travelModalTitle: "دليل التنقل والمواصلات", travelTubeTab: "🚇 دليل القطارات والمترو", travelBusTab: "🚌 حافلات النقل والتحويلات",
        locateOnMap: "📍 تحديد على الخريطة", locateHubOnMap: "📍 تحديد المحطة على الخريطة",
        tfl_ladbroke: "مغلقة طوال اليوم يومي الأحد والإثنين لدواعي السلامة.",
        tfl_latimer: "تغلق في 11:00 مساءً وقد تغلق مؤقتاً أثناء الفترات المزدحمة.",
        tfl_nottinghill: "ممنوع الدخول بين 11:00 صباحاً و 6:00 مساءً. خطوط District و Circle لا تتوقف.",
        tfl_westbourne: "خروج فقط اعتبارا من 11:00 صباحا. لا يُسمح بالدخول.",
        tfl_holland: "ممنوع الدخول بعد 11:00 صباحاً والمحطة تغلق تماماً في 3:00 مساءً.",
        tfl_queensway: "ممنوع الدخول بين 11:00 صباحاً و 6:00 مساءً (خروج فقط).",
        tfl_royaloak: "ممنوع الدخول بعد 11:00 صباحاً والمحطة تغلق تماماً في 6:00 مساءً.",
        tfl_shepherds: "لا تتوفر مكاتب تذاكر أو سلالم متحركة هابطة بعد 4:00 مساءً.",
        tfl_kensalgreen: "من المتوقع وجود طوابير خارج المحطة.",
        tfl_kensalrise: "مدخل شارع Chamberlayne يغلق في 6:00 مساءً والانتظار في Station Terrace."
      }
    };

    let currentLang = 'en';

    function setLanguage(langKey) {
      if (!translations[langKey]) return;
      currentLang = langKey;
      const t = translations[langKey];

      // Update direction if Arabic
      document.body.dir = langKey === 'ar' ? 'rtl' : 'ltr';

      // Update Map Control Buttons
      const langBtnEl = document.getElementById('langToggleBtn');
      const poiBtnEl = document.getElementById('poiFilterToggleBtn');
      const progBtnEl = document.getElementById('programmeToggleBtn');
      const histBtnEl = document.getElementById('historyToggleBtn');
      const findLocBtnEl = document.getElementById('findLocationBtn');
      const travelBtnEl = document.getElementById('travelInfoToggleBtn');
      const tflAlertsBtnEl = document.getElementById('tflAlertsToggleBtn');
      const themeBtnEl = document.getElementById('themeToggleBtn');
      const aboutMeBtnEl = document.getElementById('aboutMeToggleBtn');

      if (langBtnEl) langBtnEl.textContent = t.langBtn;
      if (poiBtnEl) poiBtnEl.textContent = t.poiFilterBtn;
      if (progBtnEl) progBtnEl.textContent = t.progBtn;
      if (histBtnEl) histBtnEl.textContent = t.histBtn;
      if (findLocBtnEl) findLocBtnEl.textContent = t.findLocBtn;
      if (travelBtnEl) travelBtnEl.textContent = t.travelBtn;
      if (tflAlertsBtnEl) tflAlertsBtnEl.textContent = t.tflAlertsBtn;
      if (themeBtnEl) {
        const isDark = document.body.classList.contains('dark-theme');
        themeBtnEl.textContent = isDark ? t.lightMapBtn : t.darkMapBtn;
      }
      if (aboutMeBtnEl) aboutMeBtnEl.textContent = t.aboutMeBtn;

      // Sidebar UI Text
      const clearBtnEl = document.getElementById('clearGenresBtn');
      const selectAllBtnEl = document.getElementById('selectAllGenresBtn');
      const searchInEl = document.getElementById('searchInput');

      if (clearBtnEl) clearBtnEl.textContent = t.clearFilters;
      if (selectAllBtnEl) selectAllBtnEl.textContent = t.selectAll;
      if (searchInEl) searchInEl.placeholder = t.searchPlaceholder;

      // Floating Filter Panel
      const poiTitleEl = document.querySelector('.poi-panel-header span');
      const resetBtnEl = document.getElementById('resetFiltersBtn');
      const facTitleEl = document.querySelector('.accordion-header span');

      if (poiTitleEl) poiTitleEl.textContent = t.poiTitle;
      if (resetBtnEl) resetBtnEl.textContent = t.resetBtn;
      if (facTitleEl) facTitleEl.textContent = t.facTitle;

      // Update Checkbox Labels
      const setCheckboxLabel = (poiKey, text) => {
        const input = document.querySelector(`.poi-toggle-row input[data-poi="${poiKey}"]`);
        if (input && input.parentElement) {
          input.parentElement.childNodes[1].nodeValue = " " + text;
        }
      };

      setCheckboxLabel('systems', t.soundSystems);
      setCheckboxLabel('vendors', t.foodVendors);
      setCheckboxLabel('jouvert', t.jouvertLoc);
      setCheckboxLabel('judging', t.judgingZone);
      setCheckboxLabel('toilets', t.toilets);
      setCheckboxLabel('firstaid', t.firstAid);
      setCheckboxLabel('welfare', t.welfare);
      setCheckboxLabel('trading', t.streetTrading);
      setCheckboxLabel('stations', t.tubeStations);
      setCheckboxLabel('buses', t.busHubs);
      setCheckboxLabel('parade', t.paradeRoute);
      setCheckboxLabel('boundary', t.boundary);

      // Re-apply filters to update matchCounter text
      applyFilters();

      // Ticker Badge & Modals DOM Elements
      const tflBadgeEl = document.querySelector('.ticker-badge');
      if (tflBadgeEl && t.tflBadge) tflBadgeEl.textContent = t.tflBadge;

      // Programme Modal
      const progTitleEl = document.querySelector('#programmeModal h2');
      const progSunTabEl = document.getElementById('progTabSunday');
      const progMonTabEl = document.getElementById('progTabMonday');
      if (progTitleEl && t.progModalTitle) progTitleEl.textContent = t.progModalTitle;
      if (progSunTabEl && t.progSunTab) progSunTabEl.textContent = t.progSunTab;
      if (progMonTabEl && t.progMonTab) progMonTabEl.textContent = t.progMonTab;

      // History Modal
      const histTitleEl = document.querySelector('#historyModal h2');
      const histWelcomeTitleEl = document.querySelector('#historyModal div[style*="font-size: 1.1rem"]');
      const histWelcomeTextEl = document.querySelector('#historyModal p[style*="color: #e0e7ff"]');
      const histWebsiteBtnEl = document.querySelector('#historyModal a[href*="nhcarnival.org"] span');
      const histBeganTitleEl = document.querySelector('#historyModal .prog-day-title');
      const histBeganDescEl = document.querySelector('#historyModal p[style*="color: #94a3b8"]');
      const histExpTitleEls = document.querySelectorAll('#historyModal .prog-day-title');

      if (histTitleEl && t.histModalTitle) histTitleEl.textContent = t.histModalTitle;
      if (histWelcomeTitleEl && t.histWelcomeTitle) histWelcomeTitleEl.textContent = t.histWelcomeTitle;
      if (histWelcomeTextEl && t.histWelcomeText) histWelcomeTextEl.textContent = t.histWelcomeText;
      if (histWebsiteBtnEl && t.histWebsiteBtn) histWebsiteBtnEl.textContent = t.histWebsiteBtn;
      if (histBeganTitleEl && t.histBeganTitle) histBeganTitleEl.textContent = t.histBeganTitle;
      if (histBeganDescEl && t.histBeganDesc) histBeganDescEl.textContent = t.histBeganDesc;
      if (histExpTitleEls.length > 1 && t.histExperienceTitle) histExpTitleEls[1].textContent = t.histExperienceTitle;

      // Travel Modal
      const travelTitleEl = document.querySelector('#travelModal h2');
      const travelTubeTabEl = document.getElementById('travelTabTube');
      const travelBusTabEl = document.getElementById('travelTabBus');
      if (travelTitleEl && t.travelModalTitle) travelTitleEl.textContent = t.travelModalTitle;
      if (travelTubeTabEl && t.travelTubeTab) travelTubeTabEl.textContent = t.travelTubeTab;
      if (travelBusTabEl && t.travelBusTab) travelBusTabEl.textContent = t.travelBusTab;

      // Universal data-i18n translation scanner
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
          el.textContent = t[key];
        }
      });

      // Highlight active language button in modal
      document.querySelectorAll('.lang-option-btn').forEach(btn => {
        const isMatch = btn.dataset.lang === langKey;
        btn.classList.toggle('active', isMatch);
        btn.style.borderColor = isMatch ? '#38bdf8' : '#334155';
      });
    }

    // Language Modal Event Listeners
    const langModal = document.getElementById('langModal');
    const langToggleBtn = document.getElementById('langToggleBtn');
    const closeLangModalBtn = document.getElementById('closeLangModalBtn');

    if (langToggleBtn && langModal) {
      langToggleBtn.addEventListener('click', () => {
        langModal.style.display = 'flex';
      });
    }

    if (closeLangModalBtn && langModal) {
      closeLangModalBtn.addEventListener('click', () => {
        langModal.style.display = 'none';
      });
    }

    if (langModal) {
      langModal.addEventListener('click', (e) => {
        if (e.target === langModal) {
          langModal.style.display = 'none';
        }
      });
    }

    document.querySelectorAll('.lang-option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selectedLang = e.currentTarget.dataset.lang;
        setLanguage(selectedLang);
        if (langModal) langModal.style.display = 'none';
      });
    });

    applyFilters();
  