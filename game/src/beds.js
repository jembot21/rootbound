const BEDS = [
 {name:'Topsoil Dawn',depth:12,time:115,palette:['#bc794c','#ac6842','#965a3b'],pests:[0,0,1,3],sand:440,story:'A single seed remembers the rain.'},
 {name:'Clay Hollow',depth:24,time:110,palette:['#bf704e','#a9563e','#96503d'],pests:[1,2,3,0,5],sand:330,story:'Follow the cool veins through the clay.'},
 {name:'Sandfall Dry',depth:38,time:115,palette:['#c69b60','#b4844d','#a57548'],pests:[0,6,5,7],sand:390,story:'Something ancient sleeps under the dunes.'},
 {name:'Fossil Deep',depth:56,time:110,palette:['#b67753','#a86848','#935d43'],pests:[1,2,3,4,5,6],sand:550,story:'The earth keeps every little story.'},
 {name:'Crystal Dark',depth:78,time:105,palette:['#8d8064','#79765a','#646c55'],pests:[4,5,6,2,1],sand:310,story:'Even in darkness, small things shine.'},
 {name:'The Deep Water',depth:100,time:125,palette:['#9c8160','#857653','#6c7053'],pests:[7,6,2,5,4],sand:270,story:'One last guardian. One ocean of hope.'}
];
const BESTIARY=[
 {name:'Grub',note:'Soft belly. Nibbles head-on.',color:'#e5d6a5',reward:80},
 {name:'Beetle',note:'Hard shell. Close a full coil.',color:'#9e5436',reward:120},
 {name:'Mole',note:'Fast digger. Mind the tunnel.',color:'#ac8d7a',reward:180},
 {name:'Ant trio',note:'Crumb thieves. March in line.',color:'#b95538',reward:100},
 {name:'Aphids',note:'Sap sippers at your roots.',color:'#9aaf58',reward:130},
 {name:'Nematode',note:'Pale trickster. Weaves quickly.',color:'#e3d8b2',reward:160},
 {name:'Scarab',note:'Golden roller. Ball blocks tips.',color:'#d8a84b',reward:200},
 {name:'STONEHOG',note:'Three coils crack the crown.',color:'#939580',reward:900}
];
const UPGRADES=[
 {name:'Thick Bark',desc:'Halve thorn and bite damage.',key:'armor'},
 {name:'Twin Tips',desc:'A second feeder drinks nearby pools.',key:'twin'},
 {name:'Dew Magnet',desc:'Draw water from 35 pixels farther.',key:'magnet'},
 {name:'Deep Taproot',desc:'Grow 20% faster through every bed.',key:'speed'},
 {name:'Coil Barbs',desc:'Coils award 50% more nutrients.',key:'barbs'},
 {name:'Water Skin',desc:'Store 35 extra drops of water.',key:'tank'},
 {name:'Second Bloom',desc:'Revive once after drought or scorch.',key:'revive'},
 {name:'Root Hairs+',desc:'Drink twice as quickly.',key:'hairs'},
 {name:'Sunshade Leaf',desc:'Slow the sun by 25%.',key:'shade'},
 {name:'Nutrient Roots',desc:'Orbs restore 10 water as well.',key:'nutrient'},
 {name:'Stone Sense',desc:'Rock bumps no longer cost water.',key:'stone'},
 {name:'Gentle Rain',desc:'Recover one drop every second.',key:'rain'}
];
