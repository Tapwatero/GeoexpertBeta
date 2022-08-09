window.onload = function WindowLoad(event) {
    localStorage.clear();
}


const regions = [
    {"europe": ["GB","IS","IE","NO","SE","FI","DK","DE","BE","LU","NL","FR","ES","PT","IT","AT","CH","GR","BA","MK","TR","GE","AL","AM","CY","UA","BY","EE","LV","LT","PL","MD","RO","BG","HU","CZ","SK","SI","ME","HR","RS","XK"], 
    "world": ["AF","AL","DZ","AD","AO","AG","AR","AM","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BJ","BZ","BT","BO","BA","BW","BR","BN","BG","BF","BI","KH","CM", "CA", "CF","TD","CL","CN","CO","KM","CG","CD","CR","CI","HR","CY","CZ","CU","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","ET","FJ","FI","FR","GF","GA","GE","DE","GH","GR","GL","GD","GT","GN","GW","GY","HT","HN","HU","IS","IN","ID","IR","IQ","IE","IL","IT","JM","JP","JO","KZ","KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MK","MG","MW","MY","MV","ML","MT","MH","MR","MU","MX","FM","MD","MC","MN","ME","MA","MZ","MM","NA","NR","NP","NL","NZ","NI","NE","NG","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PL","PT","PR","QA","RO","RU","RW","KN","LC","VC","WS","ST","SA","SN","RS","SC","SL","SG","SK","SI","SB","SO","ZA","ES","LK","SD","SR","SZ","SE","SS","CH","SY","TJ","TZ","TH","TL","TG","TO","TT","TN","TR","TM","TV","UG","UA","AE","GB","US","UY","UZ","VU","VE","VN","EH","XK","YE","ZM","ZW"],
    "south-america": ["EC","AR","VE","BR","CO","BO","PE","CL","GY","GF","PY","SR","UY"],
    "africa": ["NE","AO","EG","TN","GA","DZ","LY","CG","GQ","BJ","BW","BF","BI","CM","CF","TD","CI","CD","DJ","ET","GM","GH","GN","GW","KE","LS","LR",
    "MG","MW","ML","MA","MR","MZ","NA","NG","ER","RW","SN","SL","SO","ZA","SD","SS","SZ","TZ","TG","UG","EH","ZM","ZW"],
    "asia": ["IN","BT","NP","BD","LK","CN","MN","KP","KR","JP","MM","TH","VN","LA","KH","PH","MY","BN"],
    "middle-east": ["QA","SA","AE","SY","OM","KW","PK","AZ","AF","IR","IQ","IL","PS","JO","YE","TJ","TM","UZ","KG"]},
]

const isoCapitals = {
    'kabul': 'AF',
    'tirana': 'AL',
    'algiers': 'DZ',
    'luanda': 'AO',
    'saint john\'s': 'AG',
    'buenos aires': 'AR',
    'yerevan': 'AM',
    'canberra': 'AU',
    'vienna': 'AT',
    'baku': 'AZ',
    'manama': 'BH',
    'dhaka': 'BD',
    'bridgetown': 'BB',
    'minsk': 'BY',
    'brussels': 'BE',
    'porto-novo': 'BJ',
    'belmopan': 'BZ',
    'thimphu': 'BT',
    'sucre': 'BO',
    'sarajevo': 'BA',
    'gaborone': 'BW',
    'brasília': 'BR',
    'bandar seri begawan': 'BN',
    'sofia': 'BG',
    'ouagadougou': 'BF',
    'bujumbura': 'BI',
    'phnom penh': 'KH',
    'yaoundé': 'CM',
    'ottawa': 'CA',
    'bangui': 'CF',
    'n\'djamena': 'TD',
    'santiago': 'CL',
    'beijing': 'CN',
    'bogotá': 'CO',
    'moroni': 'KM',
    'kinshasa': 'CD',
    'san josé': 'CR',
    'yamoussoukro': 'CI',
    'zagreb': 'HR',
    'nicosia': 'CY',
    'prague': 'CZ',
    'havana': 'CU',
    'copenhagen': 'DK',
    'djibouti': 'DJ',
    'roseau': 'DM',
    'santo domingo': 'DO',
    'quito': 'EC',
    'cairo': 'EG',
    'san salvador': 'SV',
    'malabo': 'GQ',
    'asmara': 'ER',
    'tallinn': 'EE',
    'addis ababa': 'ET',
    'suva': 'FJ',
    'helsinki': 'FI',
    'paris': 'FR',
    'libreville': 'GA',
    'tbilisi': 'GE',
    'berlin': 'DE',
    'accra': 'GH',
    'athens': 'GR',
    'nuuk': 'GL',
    'st. george\'s': 'GD',
    'guatemala city': 'GT',
    'conakry': 'GN',
    'bissau': 'GW',
    'georgetown': 'GY',
    'port-au-prince': 'HT',
    'tegucigalpa': 'HN',
    'budapest': 'HU',
    'reykjavik': 'IS',
    'new delhi': 'IN',
    'jakarta': 'ID',
    'tehran': 'IR',
    'baghdad': 'IQ',
    'dublin': 'IE',
    'jerusalem': 'IL',
    'rome': 'IT',
    'kingston': 'JM',
    'tokyo': 'JP',
    'amman': 'JO',
    'astana': 'KZ',
    'nairobi': 'KE',
    'south tarawa': 'KI',
    'pyongyang': 'KP',
    'seoul': 'KR',
    'kuwait city': 'KW',
    'bishkek': 'KG',
    'vientiane': 'LA',
    'riga': 'LV',
    'beirut': 'LB',
    'maseru': 'LS',
    'monrovia': 'LR',
    'tripoli': 'LY',
    'vaduz': 'LI',
    'vilnius': 'LT',
    'luxembourg': 'LU',
    'antananarivo': 'MG',
    'lilongwe': 'MW',
    'kuala lumpur': 'MY',
    'malé': 'MV',
    'bamako': 'ML',
    'valletta': 'MT',
    'majuro': 'MH',
    'nouakchott': 'MR',
    'port louis': 'MU',
    'mexico city': 'MX',
    'chisinau': 'MD',
    'monaco': 'MC',
    'ulan bator': 'MN',
    'rabat': 'MA',
    'maputo': 'MZ',
    'windhoek': 'NA',
    'yaren': 'NR',
    'kathmandu': 'NP',
    'amsterdam': 'NL',
    'wellington': 'NZ',
    'managua': 'NI',
    'niamey': 'NE',
    'abuja': 'NG',
    'oslo': 'NO',
    'muscat': 'OM',
    'islamabad': 'PK',
    'ngerulmud': 'PW',
    'panama city': 'PA',
    'port moresby': 'PG',
    'asunción': 'PY',
    'lima': 'PE',
    'manila': 'PH',
    'warsaw': 'PL',
    'lisbon': 'PT',
    'san juan': 'PR',
    'doha': 'QA',
    'bucharest': 'RO',
    'moscow': 'RU',
    'kigali': 'RW',
    'basseterre': 'KN',
    'castries': 'LC',
    'kingstown': 'VC',
    'apia': 'WS',
    'riyadh': 'SA',
    'dakar': 'SN',
    'belgrade': 'RS',
    'victoria': 'SC',
    'freetown': 'SL',
    'singapore': 'SG',
    'bratislava': 'SK',
    'ljubljana': 'SI',
    'honiara': 'SB',
    'mogadishu': 'SO',
    'pretoria': 'ZA',
    'madrid': 'ES',
    'colombo': 'LK',
    'khartoum': 'SD',
    'paramaribo': 'SR',
    'stockholm': 'SE',
    'juba': 'SS',
    'bern': 'CH',
    'damascus': 'SY',
    'dushanbe': 'TJ',
    'dodoma': 'TZ',
    'bangkok': 'TH',
    'lomé': 'TG',
    'nuku\'alofa': 'TO',
    'port of spain': 'TT',
    'tunis': 'TN',
    'ankara': 'TR',
    'ashgabat': 'TM',
    'funafuti': 'TV',
    'kampala': 'UG',
    'kyiv': 'UA',
    'abu dhabi': 'AE',
    'london': 'GB',
    'washington d.c.': 'US',
    'montevideo': 'UY',
    'tashkent': 'UZ',
    'port vila': 'VU',
    'caracas': 'VE',
    'hanoi': 'VN',
    'el aaiún': 'EH',
    'sana\'a': 'YE',
    'lusaka': 'ZM',
    'harare': 'ZW'
}

const isoCountries = {
    'AF': 'Afghanistan',
    'AL': 'Albania',
    'DZ': 'Algeria',
    'AD': 'Andorra',
    'AO': 'Angola',
    'AG': 'Antigua And Barbuda',
    'AR': 'Argentina',
    'AM': 'Armenia',
    'AU': 'Australia',
    'AT': 'Austria',
    'AZ': 'Azerbaijan',
    'BS': 'Bahamas',
    'BH': 'Bahrain',
    'BD': 'Bangladesh',
    'BB': 'Barbados',
    'BY': 'Belarus',
    'BE': 'Belgium',
    'BJ': 'Benin',
    'BZ': 'Belize',
    'BT': 'Bhutan',
    'BO': 'Bolivia',
    'BA': 'Bosnia And Herzegovina',
    'BW': 'Botswana',
    'BR': 'Brazil',
    'BN': 'Brunei',
    'BG': 'Bulgaria',
    'BF': 'Burkina Faso',
    'BI': 'Burundi',
    'KH': 'Cambodia',
    'CM': 'Cameroon',
    'CA': 'Canada',
    'CF': 'Central African Republic',
    'TD': 'Chad',
    'CL': 'Chile',
    'CN': 'China',
    'CO': 'Colombia',
    'KM': 'Comoros',
    'CG': 'Republic of Congo',
    'CD': 'Democratic Republic Of The Congo',
    'CR': 'Costa Rica',
    'CI': 'Ivory Coast',
    'HR': 'Croatia',
    'CY': 'Cyprus',
    'CZ': 'Czech Republic',
    'CU': 'Cuba',
    'DK': 'Denmark',
    'DJ': 'Djibouti',
    'DM': 'Dominica',
    'DO': 'Dominican Republic',
    'EC': 'Ecuador',
    'EG': 'Egypt',
    'SV': 'El Salvador',
    'GQ': 'Equatorial Guinea',
    'ER': 'Eritrea',
    'EE': 'Estonia',
    'ET': 'Ethiopia',
    'FJ': 'Fiji',
    'FI': 'Finland',
    'FR': 'France',
    'GF': 'French Guyana',
    'GA': 'Gabon',
    'GE': 'Georgia',
    'DE': 'Germany',
    'GH': 'Ghana',
    'GR': 'Greece',
    'GL': 'Greenland',
    'GD': 'Grenada',
    'GT': 'Guatemala',
    'GN': 'Guinea',
    'GW': 'Guinea-Bissau',
    'GY': 'Guyana',
    'HT': 'Haiti',
    'HN': 'Honduras',
    'HU': 'Hungary',
    'IS': 'Iceland',
    'IN': 'India',
    'ID': 'Indonesia',
    'IR': 'Iran',
    'IQ': 'Iraq',
    'IE': 'Ireland',
    'IL': 'Israel',
    'IT': 'Italy',
    'JM': 'Jamaica',
    'JP': 'Japan',
    'JO': 'Jordan',
    'KZ': 'Kazakhstan',
    'KE': 'Kenya',
    'KI': 'Kiribati',
    'KP': 'North Korea',
    'KR': 'South Korea',
    'KW': 'Kuwait',
    'KG': 'Kyrgyzstan',
    'LA': 'Laos',
    'LV': 'Latvia',
    'LB': 'Lebanon',
    'LS': 'Lesotho',
    'LR': 'Liberia',
    'LY': 'Libya',
    'LI': 'Liechtenstein',
    'LT': 'Lithuania',
    'LU': 'Luxembourg',
    'MK': 'Macedonia',
    'MG': 'Madagascar',
    'MW': 'Malawi',
    'MY': 'Malaysia',
    'MV': 'Maldives',
    'ML': 'Mali',
    'MT': 'Malta',
    'MH': 'Marshall Islands',
    'MR': 'Mauritania',
    'MU': 'Mauritius',
    'MX': 'Mexico',
    'FM': 'Micronesia',
    'MD': 'Moldova',
    'MC': 'Monaco',
    'MN': 'Mongolia',
    'ME': 'Montenegro',
    'MA': 'Morocco',
    'MZ': 'Mozambique',
    'MM': 'Myanmar',
    'NA': 'Namibia',
    'NR': 'Nauru',
    'NP': 'Nepal',
    'NL': 'Netherlands',
    'NZ': 'New Zealand',
    'NI': 'Nicaragua',
    'NE': 'Niger',
    'NG': 'Nigeria',
    'NO': 'Norway',
    'OM': 'Oman',
    'PK': 'Pakistan',
    'PW': 'Palau',
    'PS': 'Palestine',
    'PA': 'Panama',
    'PG': 'Papua New Guinea',
    'PY': 'Paraguay',
    'PE': 'Peru',
    'PH': 'Philippines',
    'PL': 'Poland',
    'PT': 'Portugal',
    'PR': 'Puerto Rico',
    'QA': 'Qatar',
    'RO': 'Romania',
    'RU': 'Russia',
    'RW': 'Rwanda',
    'KN': 'Saint Kitts And Nevis',
    'LC': 'Saint Lucia',
    'VC': 'Saint Vincent And The Grenadines',
    'WS': 'Samoa',
    'ST': 'Sao Tome And Principe',
    'SA': 'Saudi Arabia',
    'SN': 'Senegal',
    'RS': 'Serbia',
    'SC': 'Seychelles',
    'SL': 'Sierra Leone',
    'SG': 'Singapore',
    'SK': 'Slovakia',
    'SI': 'Slovenia',
    'SB': 'Solomon Islands',
    'SO': 'Somalia',
    'ZA': 'South Africa',
    'ES': 'Spain',
    'LK': 'Sri Lanka',
    'SD': 'Sudan',
    'SR': 'Suriname',
    'SZ': 'Eswatini',
    'SE': 'Sweden',
    'SS': 'South Sudan',
    'CH': 'Switzerland',
    'SY': 'Syria',
    'TJ': 'Tajikistan',
    'TZ': 'Tanzania',
    'TH': 'Thailand',
    'TL': 'Timor-Leste',
    'TG': 'Togo',
    'TO': 'Tonga',
    'TT': 'Trinidad And Tobago',
    'TN': 'Tunisia',
    'TR': 'Turkey',
    'TM': 'Turkmenistan',
    'TV': 'Tuvalu',
    'UG': 'Uganda',
    'UA': 'Ukraine',
    'AE': 'United Arab Emirates',
    'GB': 'United Kingdom',
    'US': 'United States',
    'UY': 'Uruguay',
    'UZ': 'Uzbekistan',
    'VU': 'Vanuatu',
    'VE': 'Venezuela',
    'VN': 'Vietnam',
    'EH': 'Western Sahara',
    'XK': 'Kosovo',
    'YE': 'Yemen',
    'ZM': 'Zambia',
    'ZW': 'Zimbabwe'
};


const maps = {
    '00': 'mapbox://styles/tapwatero/cl554vgs4004v14n2bd9fohbm?optimize=true?optimize=true',
    '10': 'mapbox://styles/tapwatero/cl54dv5qx006m14mqg5r188s7?optimize=true',
    '20': 'mapbox://styles/tapwatero/cl52r8olj009y14ogwweppj0v?optimize=true',
    '01': 'mapbox://styles/tapwatero/cl5579qme004o16p3hne809co?optimize=true',
    '11': 'mapbox://styles/tapwatero/cl554qkz8007c15pdk5jogn1t?optimize=true',
    '21': 'mapbox://styles/tapwatero/cl5554cdb005h17p6ub8sye0n?optimize=true'
}



// Current Countries Playing
let currentMap;
let selectedMap = '00';
let pageLoaded;

let skyTheme = `rgb(157, 182, 206)`;
let lightTheme = `rgb(190, 190, 190)`;
let darkTheme = `rgb(70, 70, 70)`;

let defaultCorrect = `rgb(82,191,144)`;
let darkCorrect = `rgb(0, 166, 147)`;


const countriesMap = {}
for (let [k, v] of Object.entries(isoCountries)) countriesMap[v.toLowerCase()] = k; // only god knows what this does


let matchExpression = ['match', ['get', 'iso_3166_1']];


function getIndex(code, level) {
    let i = 0;
    for (row of data) {
        if (row.code === code && row.level === level) {
            return i;
        }
        i++;
    }
    return -1;
}

function depictPlayableArea() {
    matchExpression = ['match', ['get', 'iso_3166_1']];

    for (country of Object.keys(isoCountries)) {
        if (!currentMap.includes(country) && ['00', '01'].includes(selectedMap)) {
            matchExpression.push(country, skyTheme);
        } else if (currentMap.includes(country) && ['10', '11'].includes(selectedMap)) {
            matchExpression.push(country, lightTheme);
        } else if (currentMap.includes(country) && ['20', '21'].includes(selectedMap)) {
            matchExpression.push(country, darkTheme);
        }
    }
    
    matchExpression.push('rgba(0, 0, 0, 0)');
    map.setPaintProperty('countries-join', 'fill-color', matchExpression);
}

function countryGameAttempt(query, maxScore) {
    let countryCode = countriesMap[query.toLowerCase()];

    if (countryCode == null || !currentMap.includes(countryCode)) return

    // Remove Match Expression Entries for Light & Dark Theme Blackout
    let index = matchExpression.indexOf(countryCode);
    if (index != -1) {
        matchExpression.splice(index, 1)
        matchExpression.splice(index, 1)
    }


    document.getElementById("query").value = "";


    matchExpression.splice(matchExpression.length-1, 0, countryCode);

    if (['00', '01', '10', '11'].includes(selectedMap)) {
        matchExpression.splice(matchExpression.length-1, 0, defaultCorrect);
    } else {
        matchExpression.splice(matchExpression.length-1, 0, darkCorrect);
    }
    map.setPaintProperty('countries-join', 'fill-color', matchExpression);
    delete currentMap[currentMap.indexOf(countryCode)];
    updateScore(maxScore);
}

function capitalGameAttempt(query, maxScore) {
    let capitalCode = isoCapitals[query.toLowerCase()];

    if (capitalCode == null || !currentMap.includes(capitalCode)) {return}

    let index = matchExpression.indexOf(capitalCode);
    if (index != -1) {
        matchExpression.splice(index, 1)
        matchExpression.splice(index, 1)
    }


    document.getElementById("query").value = "";


    matchExpression.splice(matchExpression.length-1, 0, capitalCode);

    if (['00', '01', '10', '11'].includes(selectedMap)) {
        matchExpression.splice(matchExpression.length-1, 0, defaultCorrect);
    } else {
        matchExpression.splice(matchExpression.length-1, 0, darkCorrect);
    }
    map.setPaintProperty('countries-join', 'fill-color', matchExpression);
    delete currentMap[currentMap.indexOf(capitalCode)];
    updateScore(maxScore);
}



async function closeModal() {
    selectedMap = document.getElementsByClassName("theme-select")[0].value + document.getElementsByClassName("type-select")[0].value;
    hideTimer = document.getElementsByClassName("timer-select")[0].value == 0;

    if (hideTimer == false) {
        document.getElementsByClassName("divider")[0].remove();
        document.getElementsByClassName("timer")[0].remove();
    }

    document.getElementById("modal").remove();
    document.getElementById("shadow").classList.add("fade");

    if (selectedMap != '00') {
        map.remove();
        newMap(maps[selectedMap], storedSelection, storedCenter, storedZoom);
    }
    
    document.getElementById("shadow").classList.add("fade");
    await new Promise(res => setTimeout(res, 1000));
    document.getElementById("shadow").remove();
    document.getElementById("query").style.visibility = 'visible';
    document.getElementById("info").style.visibility = 'visible';
}





matchExpression.push("00", `rgb(0, 166, 147)`)
matchExpression.push('rgba(0, 0, 0, 0)');

function newMap(style, selection, center, zoom) {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGFwd2F0ZXJvIiwiYSI6ImNsNjZ0ZDBqODBqa20zYm5ueGNyZDQ2cjEifQ.ydT-xJIzHKorhFa7wiZtCw';
    map = new mapboxgl.Map({
        container: 'map',
        style: style,
        center: center,
        zoom: zoom,
        minZoom: 1.5,
        maxZoom: 4.5,
        pitchWithRotate: false,
        dragRotate: false
    });

    currentMap = regions[0][selection];
    storedCenter = center;
    storedSelection = selection;
    storedZoom = zoom;
    // Data: UN Human Development Index 2017 Europe extract
    // Source: https://ourworldindata.org/human-development-index
    map.on('load', () => {
        // Add source for country polygons using the Mapbox Countries tileset
        // The polygons contain an ISO 3166 alpha-3 code which can be used to for joining the data
        // https://docs.mapbox.com/vector-tiles/reference/mapbox-countries-v1
        map.addSource('countries', {
            type: 'vector',
            url: 'mapbox://mapbox.country-boundaries-v1'
        });

        // Build a GL match expression that defines the color for every vector tile feature
        // Use the ISO 3166-1 alpha 3 code as the lookup key for the country shape
        // Last value is the default, used where there is no data
        // Add layer from the vector tile source to create the choropleth
        // Insert it below the 'admin-1-boundary-bg' layer in the style

        map.addLayer({
            'id': 'countries-join',
            'type': 'fill',
            'source': 'countries',
            'source-layer': 'country_boundaries',
            'paint': {
                'fill-color': matchExpression
            }
        }, 'admin-1-boundary-bg');
        if (selection != "world") {
            depictPlayableArea();
        }
    });
}
