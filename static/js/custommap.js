

		var map;

			AmCharts.ready(function() {
			    map = new AmCharts.AmMap();


			    map.balloon.color = "#000000";
                map.zoomControl.zoomControlEnabled = true;
                map.showLinesInList = false;
				map.theme = "patterns";

				//var icon= "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
var icon ="M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0zM9,15.93c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
			    var dataProvider = {
			        mapVar: AmCharts.maps.indiaHigh,					
			        getAreasFromMap:true,	
					areas: [ {
                           id: "IN-UT",
                           color: "#335f85"
                      },
					  {
                           id: "IN-UP",
                           color: "#85c5e3"
                      },
					  {
                           id: "IN-DL",
                           color: "#4e81a4"
                      },
					  {
                           id: "IN-MP",
                           color: "#F0B67F"
                      },
					  {
                           id: "IN-HR",
                           color: "#a3a3aa"
                      },
					  {
                           id: "IN-BR",
                           color: "#585858"
                      },
					  {
                           id: "IN-JH",
                           color: "#a9cdff"
                      },
					  {
                           id: "IN-CT",
                           color: "#45759a"
                      },
					  {
                           id: "IN-PB",
                           color: "#cdcdcd"
                      },
					  {
                           id: "IN-OR",
                           color: "#335f85"
                      },
					  {
                           id: "IN-MH",
                           color: "#4e81a4"
                      },
					  {
                           id: "IN-RJ",
                           color: "#6aa3c3"
                      },
					  {
                           id: "IN-HP",
                           color: "#6aa3c3"
                      },
					  {
						  id:"IN-AS",
						  color: "#6aa3ff"
					  },
					  {
						  id:"IN-TN",
						  color: "#e150e0"
					  },
					  {
						  id:"IN-PY",
						  color: "#a7e716"
					  }
					  ,
					  {
                           id: "IN-GJ",
                           color: "#FFFF33"
                      },
					    {
                           id: "IN-AP",
                           color: "#a7e716"
                      },
					   {
                           id: "IN-TG",
                           color: "#cdcdcd"
                      },
					  {
                           id: "IN-JK",
                           color: "#a7e716"
                      },
					  {
						  "id":"IN-KA",
						  color:"#6aa3c3"
					  }
					  ,
					  {
						  "id":"IN-NL",
						  color:"#00BFFF"
					  }
					  ,
					  {
						  "id":"IN-AR",
						  color:"#4B0082"
					  }
					  ], 
					images: [
					{ 
					"groupId": "minZoom-1",
                    "latitude": 30.0668,
                    "longitude": 79.0193,
                    "svgPath": icon,
                    "color": "#CC0000",					 
                    "scale": 0.5,                   
                    "labelShiftY": 2,
                    "zoomLevel": 5,
					 "title": "Uttarakhand",
                   // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Uttarakhand</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 13</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 4 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 1,838 </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 49 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 54.97</td></tr></table>",
					 
                 },
				 { 
				    "groupId": "minZoom-1",
                    "latitude": 26.8467,
					"longitude": 80.9462,
					"svgPath": icon,
					"color": "#CC0000",
					"scale": 0.5,
    			//	"label": "UTTAR PRADESH",
					"labelShiftY": 2,
					"zoomLevel": 5,
					"title" : "Uttar Pradesh",
					//"title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Uttar Pradesh</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 65</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 33 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 9,228 </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 180 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 192.90</td></tr></table>"
					
                 },
				 { "groupId": "minZoom-1",
  "latitude": 28.7041,
  "longitude": 77.1025,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
  //"label": "DELHI",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Delhi",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Delhi </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 2</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 1 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 39 </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 1 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 3.21</td></tr></table>"
  },
  { "groupId": "minZoom-1",
  "latitude": 22.9734,
  "longitude": 78.6569,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
  //"label": "MADHYA PRADESH",
  "labelShiftY": 2,
  "zoomLevel": 10,
  "colorSolid":"#990000", 
  "selectedColor": "blue",
 "title": "Madhya Pradesh",
// "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Madhya Pradesh</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 41</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 24 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 5,370 </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 111 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 107.80 </td></tr></table>"
},
{ "groupId": "minZoom-1",
  "latitude": 29.0588,
  "longitude": 76.0856,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "HARYANA",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Haryana",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Haryana</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 20</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 13 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 2,521  </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 82 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 99.40</td></tr></table>" 
 
},
{ "groupId": "minZoom-1",
  "latitude": 33.7782,
  "longitude": 76.5762,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "HARYANA",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Jammu And Kashmir",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Haryana</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 20</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 13 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 2,521  </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 82 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 99.40</td></tr></table>" 
 
},
{ "groupId": "minZoom-1",
  "latitude": 15.029560,
  "longitude": 76.319633,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "HARYANA",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Karnataka",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Haryana</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 20</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 13 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 2,521  </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 82 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 99.40</td></tr></table>" 
 
},
{ "groupId": "minZoom-1",
  "latitude": 15.912900,
  "longitude": 79.7400,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "HARYANA",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Andhra Pradesh",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Haryana</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 20</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 13 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 2,521  </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 82 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 99.40</td></tr></table>" 
 
},
{ "groupId": "minZoom-1",
  "latitude": 18.1124,
  "longitude": 79.0193,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "HARYANA",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Telangana",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Haryana</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 20</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 13 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 2,521  </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 82 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 99.40</td></tr></table>" 
 
},
{ "groupId": "minZoom-1",
  "latitude": 10.8505,
  "longitude": 76.2711,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "HARYANA",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Kerala",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Haryana</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 20</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 13 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 2,521  </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 82 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 99.40</td></tr></table>" 
 
},
{ "groupId": "minZoom-1",
  "latitude": 15.2993,
  "longitude": 74.1240,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "HARYANA",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Goa",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Haryana</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 20</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 13 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 2,521  </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 82 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 99.40</td></tr></table>" 
 
},
{ "groupId": "minZoom-1",
  "latitude": 27.5330,
  "longitude": 88.5122,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "HARYANA",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Sikkim",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Haryana</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 20</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 13 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 2,521  </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 82 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 99.40</td></tr></table>" 
 
},
{ "groupId": "minZoom-1",
  "latitude": 25.4670,
  "longitude": 91.3662,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "HARYANA",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Meghalaya",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Haryana</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 20</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 13 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 2,521  </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 82 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 99.40</td></tr></table>" 
 
},
{ "groupId": "minZoom-1",
  "latitude": 28.2180,
  "longitude": 94.7278,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "HARYANA"
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Arunachal Pradesh",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Haryana</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 20</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 13 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 2,521  </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 82 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 99.40</td></tr></table>" 
 
},
{ "groupId": "minZoom-1",
  "latitude": 26.1584,
  "longitude": 94.5624,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "HARYANA"
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Nagaland",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Haryana</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 20</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 13 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 2,521  </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 82 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 99.40</td></tr></table>" 
 
},
{ "groupId": "minZoom-1",
  "latitude": 23.1645,
  "longitude": 92.9376,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "HARYANA"
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Mizoram ",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Mizoram</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 20</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 13 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 2,521  </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 82 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 99.40</td></tr></table>" 
 
},
{ "groupId": "minZoom-1",
  "latitude": 23.94084,
  "longitude": 91.9882,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "HARYANA"
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Tripura ",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Haryana</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 20</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 13 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 2,521  </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 82 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 99.40</td></tr></table>" 
 
},
{ "groupId": "minZoom-1",
  "latitude": 24.6637,
  "longitude": 93.9063,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "HARYANA"
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Manipur ",
//  "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Haryana</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 20</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 13 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 2,521  </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 82 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 99.40</td></tr></table>" 
 
},
{ "groupId": "minZoom-1",
  "latitude": 25.0961,
  "longitude": 85.3131,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
  //"label": "BIHAR",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Bihar",
 // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Bihar</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 47</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 24 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 4,611 </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 156 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 162.45</td></tr></table>"  
},
{ "groupId": "minZoom-1",
  "latitude": 23.6102,
  "longitude": 85.2799,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
 // "label": "JHARKHAND",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Jharkhand",
  
 // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Jharkhand</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 15</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 09 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 1,302 </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 40 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 39.29</td></tr></table>"
},
{ "groupId": "minZoom-1",
  "latitude": 21.2787,
  "longitude": 81.8661,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
  //"label": "CHHATTISGARH",
  "labelShiftY": 2,
  "zoomLevel": 5,
"title": "Chhattisgarh",

  //"title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Chhattisgarh </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 06</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 04 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 398 </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 6 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 7.72</td></tr></table>"  
},
{ "groupId": "minZoom-1",
  "latitude": 31.1471,
  "longitude": 75.3412,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
  //"label": "PUNJAB",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Punjab", 
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Punjab </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 13</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 10 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 1,444 </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 28 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 47.08</td></tr></table>"  
},
{ "groupId": "minZoom-1",
  "latitude": 20.9517,
  "longitude": 85.0985,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
  //"label": "ODISHA",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Odisha", 
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Odisha </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 33</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 18 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 4,186 </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 61 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 91.35</td></tr></table>"  
},
{ "groupId": "minZoom-1",
  "latitude": 19.7515,
  "longitude": 75.7139,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
  //"label": "MAHARASHTRA",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Maharashtra", 
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Maharashtra </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 08</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 05 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 414 </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 2 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 4.83</td></tr></table>"  
},
{ "groupId": "minZoom-1",
  "latitude": 27.0238,
  "longitude": 74.2179,
  "svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
  //"label": "RAJASTHAN",
  "labelShiftY": 2,
  "zoomLevel": 5,
  "title": "Rajasthan", 
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > Rajasthan </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 01</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 01 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 27 </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.3 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 0.88</td></tr></table>"  
},
{ 
					"groupId": "minZoom-1",
                    "latitude": 22.9868,
                    "longitude": 87.8550,
                    "svgPath": icon,
                    "color": "#CC0000",					 
                    "scale": 0.5,                   
                    "labelShiftY": 2,
                    "zoomLevel": 5,
                    "title": "West Bengal", 
					// "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" style=\"font-family:Bahamas\"><tr><td colspan=\"2\" align=\"center\" > West Bengal</td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\">  Branches </td><td align=\"right\" class=\"right_space\" width=\"20%\"> 1</td></tr><tr><td align=\"left\" class=\"left-space\">Districts</td><td align=\"right\" class=\"right_space\"> 1 </td></tr><tr><td align=\"left\" class=\"left-space\">Villages  </td> <td align=\"right\" class=\"right_space\"> 11 </td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> .08 </td></tr><tr><td align=\"left\" class=\"left-space\">   Outstanding (Cr.) </td><td align=\"right\" class=\"right_space\"> 0.036</td></tr></table>",
					 
                 },
                 { 
					"groupId": "minZoom-1",
                    "latitude": 31.1048,
                    "longitude": 77.1734,
                    "svgPath": icon,
                    "color": "#CC0000",					 
                    "scale": 0.5,                   
                    "labelShiftY": 2,
                    "zoomLevel": 5,
                    "title": "Himachal Pradesh ", 
					
					 
                 },
                 { 
					"groupId": "minZoom-1",
                    "latitude": 26.2006,
                    "longitude": 92.9376,
                    "svgPath": icon,
                    "color": "#CC0000",					 
                    "scale": 0.5,                   
                    "labelShiftY": 2,
                    "zoomLevel": 5,
                    "title": "Assam", 
					
					 
                 },
                 { 
					"groupId": "minZoom-1",
                    "latitude": 11.1271,
                    "longitude": 78.6569,
                    "svgPath": icon,
                    "color": "#CC0000",					 
                    "scale": 0.5,                   
                    "labelShiftY": 2,
                    "zoomLevel": 5,
                    "title": "Tamil Nadu", 
					
					 
                 },
                 { 
					"groupId": "minZoom-1",
                    "latitude": 11.9416,
                    "longitude": 79.8083,
                    "svgPath": icon,
                    "color": "#CC0000",					 
                    "scale": 0.5,                   
                    "labelShiftY": 2,
                    "zoomLevel": 5,
                    "title": "Puducherry", 
					
					 
                 },
                 { 
					"groupId": "minZoom-1",
                    "latitude": 22.2587,
                    "longitude": 71.1924,
                    "svgPath": icon,
                    "color": "#CC0000",					 
                    "scale": 0.5,                   
                    "labelShiftY": 2,
                    "zoomLevel": 5,
                    "title": "Gujarat", 
					 
                 },
				 
  { "groupId": "minZoom-2","latitude":32.7266,"longitude": 74.8570,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "JAMMU",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > JAMMU </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
    { "groupId": "minZoom-2","latitude":32.386478,"longitude": 75.517265,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "KATHUA",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > KATHUA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  { "groupId": "minZoom-2","latitude":33.419418,"longitude": 74.248917,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "POONCH",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > POONCH </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  { "groupId": "minZoom-2","latitude":33.371613,"longitude":74.315193,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "RAJOURI",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > RAJOURI </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
   { "groupId": "minZoom-2","latitude":32.562099,"longitude":75.115799,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "SAMBA",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
   { "groupId": "minZoom-2","latitude":14.681190,"longitude":77.596703,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "ANANTAPUR",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
   { "groupId": "minZoom-2","latitude":14.402220,"longitude":79.955660,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "NELLORE",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
     { "groupId": "minZoom-2","latitude":17.159420,"longitude":81.740130,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": " EAST GODAVARI",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },

   { "groupId": "minZoom-2","latitude":13.219500,"longitude":79.103300,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "CHITTOOR",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },

   { "groupId": "minZoom-2","latitude":15.489290,"longitude":79.612270,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "PRAKASAM",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },

   { "groupId": "minZoom-2","latitude":15.831200,"longitude":78.036180,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "KURNOOL",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
   { "groupId": "minZoom-2","latitude":16.691720,"longitude":80.777740,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "KRISHNA",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
   { "groupId": "minZoom-2","latitude":16.293810,"longitude":80.454670,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "GUNTUR",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
   { "groupId": "minZoom-2","latitude":17.806690,"longitude":83.209730,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "VISAKHAPATNAM",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
{ "groupId": "minZoom-2","latitude":18.294830,"longitude":83.893660,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "SRIKAKULAM",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  { "groupId": "minZoom-2","latitude":15.831200,"longitude":78.036180,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": " KURNOOL",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
 { "groupId": "minZoom-2","latitude":28.082320,"longitude":93.892240,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": " UPPER SUBANSIRI",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
   { "groupId": "minZoom-2","latitude":15.831200,"longitude":78.036180,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": " KURNOOL",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
   { "groupId": "minZoom-2","latitude":27.096270,"longitude":93.618460,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": " PAPUM PARE",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
   { "groupId": "minZoom-2","latitude":28.035240,"longitude":93.340248,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "KURUNG KUMEY",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
   { "groupId": "minZoom-2","latitude":27.676370,"longitude":93.943510,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": " LOWER SUBANSIRI",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  { "groupId": "minZoom-2","latitude":28.007150,"longitude":95.159340,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": " EAST SIANG",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },

  { "groupId": "minZoom-2","latitude":27.689790,"longitude":94.462900,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": " WEST SIANG",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
 { "groupId": "minZoom-2","latitude":26.3304,"longitude":91.0041,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": " BARPETA",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
   { "groupId": "minZoom-2","latitude":26.7267,"longitude":93.1479,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": " BISWANATH",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  { "groupId": "minZoom-2","latitude":27.6087,"longitude":94.7692,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": " DHEMAJI",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
 { "groupId": "minZoom-2","latitude":26.026,"longitude":89.972,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "DHUBRI",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
   { "groupId": "minZoom-2","latitude":26.1641,"longitude":90.6252,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "GOALPARA",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
     { "groupId": "minZoom-2","latitude":26.3161,"longitude":91.5984,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "KAMRUP",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
    { "groupId": "minZoom-2","latitude":26.2600,"longitude":92.2630,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "MORIGAON",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },

  { "groupId": "minZoom-2","latitude":26.3464,"longitude":92.6840,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "NAGAON",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  { "groupId": "minZoom-2","latitude":26.4446,"longitude":91.4411,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "NALBARI",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },

  { "groupId": "minZoom-2","latitude":26.6739,"longitude":92.8577,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "SONITPUR",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  { "groupId": "minZoom-2","latitude":25.71,"longitude":89.897,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "SOUTH SALMARA-MANKACHAR",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  { "groupId": "minZoom-2","latitude":27.4886,"longitude":95.3558,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "TINSUKIA",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  { "groupId": "minZoom-2","latitude":26.7460,"longitude":92.0959,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "UDALGURI",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
    { "groupId": "minZoom-2","latitude":31.6862,"longitude":76.5213,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "HAMIRPUR ",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
     { "groupId": "minZoom-2","latitude":32.099832,"longitude":76.2691,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "UNA",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  
     { "groupId": "minZoom-2","latitude":32.0998,"longitude":76.2691,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "KANGRA",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  
     { "groupId": "minZoom-2","latitude":25.5679,"longitude":90.2245,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "WEST GARO HILLS",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  
     { "groupId": "minZoom-2","latitude":25.389,"longitude":89.911,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "SOUTH WEST GARO HILLS ",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  
     { "groupId": "minZoom-2","latitude":25.8987,"longitude":90.4880,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "NORTH GARO HILLS",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
       { "groupId": "minZoom-2","latitude":25.3301,"longitude":90.5636,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "SOUTH GARO HILLS",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
     { "groupId": "minZoom-2","latitude":25.3682,"longitude":91.7539,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "EAST KHASI HILLS",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  
     { "groupId": "minZoom-2","latitude":25.5225,"longitude":93.6623,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "PEREN",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  
     { "groupId": "minZoom-2","latitude":25.9091,"longitude":93.7266,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "DIMAPUR",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
     { "groupId": "minZoom-2","latitude":25.7375,"longitude":94.4388,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "PHEK",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
     { "groupId": "minZoom-2","latitude":14.7430,"longitude":74.6758,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "BHADRADRI KOTHAGUDEM",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
     { "groupId": "minZoom-2","latitude":17.3850,"longitude":78.4867,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "HYDERABAD",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
     { "groupId": "minZoom-2","latitude":18.331,"longitude":79.674,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "JAYASHANKAR",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
     { "groupId": "minZoom-2","latitude":15.878,"longitude":78.13,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "JOGULAMB",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
     { "groupId": "minZoom-2","latitude":16.23,"longitude":77.8,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "JOGULAMBA GADWAL",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
     { "groupId": "minZoom-2","latitude":18.4386,"longitude":79.1288,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "KARIMNAGAR",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
     { "groupId": "minZoom-2","latitude":16.7488,"longitude":78.0034,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "MAHBUBNAGAR",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
   { "groupId": "minZoom-2","latitude":17.0575,"longitude":17.0575,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "NALGONDA",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  }, { "groupId": "minZoom-2","latitude":17.1315,"longitude":79.6336,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "SURYAPET",   
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  
   { "groupId": "minZoom-2","latitude":17.9689,"longitude":79.5941,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "WARANGAL",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  
  
   { "groupId": "minZoom-2","latitude":17.51,"longitude":78.89,"svgPath": icon,
  "color": "#CC0000",
  "scale": 0.5,
"labelShiftY": 2,
  "zoomLevel": 5,"title": "YADADRI BHUVANAGIRI",  
  // "title": "<div style=\"width:200px;\"> </div><table width=\"100%\" border=\"1\" class=\"tbl_sty\"><tr><td colspan=\"2\" align=\"center\" > SAMBA </td></tr><tr><td align=\"left\" class=\"left-space\" width=\"80%\"> Villages </td><td align=\"right\" class=\"right_space\" width=\"20%\">78</td></tr><tr><td align=\"left\" class=\"left-space\"> Clients ('000) </td><td align=\"right\" class=\"right_space\"> 0.2</td></tr><tr><td align=\"left\" class=\"left-space\"> Outstanding (Cr.) </td> <td align=\"right\" class=\"right_space\">0.32 </td></tr></table>",
  },
  
  
  
  
  
  { "groupId": "minZoom-2","latitude":25.4358,"longitude": 81.8463,"svgPath": icon,
  "color": "#CC0000", 
  "scale": 0.5, 
  "labelShiftY": 2, "zoomLevel": 5,
  "title": "Allahabad"
  },

{ "groupId": "minZoom-2","latitude":26.1541,"longitude": 81.8142,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Amethi " },

{ "groupId": "minZoom-2","latitude":26.4605,"longitude": 79.5113,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Auraiya " },

{ "groupId": "minZoom-2","latitude":26.0739,"longitude": 83.1859,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Azamagarh " },

{ "groupId": "minZoom-2","latitude":27.5708,"longitude": 81.5980,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Bahraich " },

{ "groupId": "minZoom-2","latitude":25.7585,"longitude": 84.1488,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Ballia " },

{ "groupId": "minZoom-2","latitude":27.4307,"longitude": 82.1805,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Balrampur " },

{ "groupId": "minZoom-2","latitude":25.4796,"longitude": 80.3380,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Banda" },

{ "groupId": "minZoom-2","latitude":26.9268,"longitude": 81.1834,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Barabanki" },

{ "groupId": "minZoom-2","latitude":26.8140,"longitude": 82.7630,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Basti " },

{ "groupId": "minZoom-2","latitude":29.3732,"longitude": 78.1351,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Bijnor " },

{ "groupId": "minZoom-2","latitude":28.4070,"longitude": 77.8498,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Bulandshahr " },

{ "groupId": "minZoom-2","latitude":25.2605,"longitude": 83.2645,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Chandauli " },

{ "groupId": "minZoom-2","latitude":26.5024,"longitude": 83.7791,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Deoria " },

{ "groupId": "minZoom-2","latitude":26.7730,"longitude": 82.1458,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Faizabad " },

{ "groupId": "minZoom-2","latitude":25.9210,"longitude": 80.7996,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Fatehpur " },

{ "groupId": "minZoom-2","latitude":27.1592,"longitude": 78.3957,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Firozabad " },

{ "groupId": "minZoom-2","latitude":28.6692,"longitude": 77.4538,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Ghaziabad" },

{ "groupId": "minZoom-2","latitude":25.5878,"longitude": 83.5783,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Ghazipur " },

{ "groupId": "minZoom-2","latitude":27.1340,"longitude": 81.9619,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Gonda " },

{ "groupId": "minZoom-2","latitude":26.7606,"longitude": 83.3732,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Gorakhpur " },

{ "groupId": "minZoom-2","latitude":27.3965,"longitude": 80.1250,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Hardoi " },

{ "groupId": "minZoom-2","latitude":25.7496,"longitude": 82.6926,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Jaunpur " },

{ "groupId": "minZoom-2","latitude":27.0514,"longitude": 79.9137,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Kannauj " },

{ "groupId": "minZoom-2","latitude":26.5267,"longitude": 79.8297,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Kanpur Dehat " },

{ "groupId": "minZoom-2","latitude":25.3611,"longitude": 81.4032,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Kaushambi " },

{ "groupId": "minZoom-2","latitude":27.9462,"longitude": 80.7787,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Kheri " },

{ "groupId": "minZoom-2","latitude":26.7399,"longitude": 83.8870,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Kushinagar " },

{ "groupId": "minZoom-2","latitude":27.9462,"longitude": 80.7787,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Lakhimpur Kheri" },

{ "groupId": "minZoom-2","latitude":26.8467,"longitude": 80.9462,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Lucknow " },

{ "groupId": "minZoom-2","latitude":27.1446,"longitude": 83.5622,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Maharajganj " },

{ "groupId": "minZoom-2","latitude":25.5299,"longitude": 81.3757,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Manjhanpur " },

{ "groupId": "minZoom-2","latitude":25.9431,"longitude": 83.5562,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Mau" },

{ "groupId": "minZoom-2","latitude":28.9845,"longitude": 77.7064,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Meerut " },

{ "groupId": "minZoom-2","latitude":25.1337,"longitude": 82.5644,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Mirzapur " },

{ "groupId": "minZoom-2","latitude":28.8386,"longitude": 78.7733,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Moradabad " },

{ "groupId": "minZoom-2","latitude":29.4727,"longitude": 77.7085,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Muzaffarnagar " },

{ "groupId": "minZoom-2","latitude":28.6208,"longitude": 79.8129,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Pilibhit " },

{ "groupId": "minZoom-2","latitude":25.8973,"longitude": 81.9453,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Pratapgarh" },

{ "groupId": "minZoom-2","latitude":25.4358,"longitude": 81.8463,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Prayagraj " },

{ "groupId": "minZoom-2","latitude":26.2145,"longitude": 81.2528,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Raebareli " },

{ "groupId": "minZoom-2","latitude":29.9680,"longitude": 77.5552,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Saharanpur " },

{ "groupId": "minZoom-2","latitude":28.5904,"longitude": 78.5718,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Sambhal " },

{ "groupId": "minZoom-2","latitude":26.7672,"longitude": 83.0361,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Sant Kabir Nagar " },

{ "groupId": "minZoom-2","latitude":29.4502,"longitude": 77.3172,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Shamli " },

{ "groupId": "minZoom-2","latitude":27.5035,"longitude": 82.0365,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Shravasti " },

{ "groupId": "minZoom-2","latitude":27.2716,"longitude": 82.8210,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Siddhartha Nagar " },

{ "groupId": "minZoom-2","latitude":27.5746,"longitude": 80.6634,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Sitapur " },

{ "groupId": "minZoom-2","latitude":24.6850,"longitude": 83.0684,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Sonbhadra" },

{ "groupId": "minZoom-2","latitude":26.5393,"longitude": 80.4878,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Unnao " },

{ "groupId": "minZoom-2","latitude":25.3176,"longitude": 82.9739,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
"labelShiftY": 2, "zoomLevel": 5,"title": "Varanasi " },

{ "groupId": "minZoom-2","latitude":31.6340,"longitude": 74.8723,"svgPath": icon, "color": "#CC0000", "scale":
    0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Amritsar" },
    { "groupId": "minZoom-2","latitude":30.3819,"longitude": 75.5468,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Barnala"},
    { "groupId": "minZoom-2","latitude":30.2110,"longitude": 74.9455,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Bathinda"},
    { "groupId": "minZoom-2","latitude":30.7333,"longitude": 76.7794,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Chandigarh"},
    { "groupId": "minZoom-2","latitude":30.6769,"longitude": 74.7583,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Faridkot"},
    { "groupId": "minZoom-2","latitude":30.4036,"longitude": 74.0280,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Fazilka"},
    { "groupId": "minZoom-2","latitude":30.9331,"longitude": 74.6225,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Firozpur"},
    { "groupId": "minZoom-2","latitude":30.9010,"longitude": 75.8573,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Ludhiana"},
    { "groupId": "minZoom-2","latitude":29.9995,"longitude": 75.3937,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Mansa"},
    { "groupId": "minZoom-2","latitude":30.8230,"longitude": 75.1734,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Moga"},
    { "groupId": "minZoom-2","latitude":30.4766,"longitude": 74.5112,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Sri Muktsar Sahib"},
    { "groupId": "minZoom-2","latitude":30.3398,"longitude": 76.3869,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Patiala"},
    { "groupId": "minZoom-2","latitude":30.9661,"longitude": 76.5231,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Rupnagar"},
    { "groupId": "minZoom-2","latitude":30.2458,"longitude": 75.8421,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Sangrur"},
    { "groupId": "minZoom-2","latitude":31.4539,"longitude": 74.9268,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Tarn Taran Sahib"},

    { "groupId": "minZoom-2","latitude":27.2152,"longitude": 77.5030,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Bharatpur"},
    { "groupId": "minZoom-2","latitude":25.4305,"longitude": 75.6499,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Bundi"},
    { "groupId": "minZoom-2","latitude":26.8997,"longitude": 76.3324,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Dausa"},
    { "groupId": "minZoom-2","latitude":26.7018,"longitude": 77.8901,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Dholpur"},
    { "groupId": "minZoom-2","latitude":23.8417,"longitude": 73.7147,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Dungarpur"},
    { "groupId": "minZoom-2","latitude":29.9094,"longitude": 73.8800,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": " Ganganagar"},
    { "groupId": "minZoom-2","latitude":26.9124,"longitude": 75.7873,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Jaipur"},
    { "groupId": "minZoom-2","latitude":25.3445,"longitude": 72.6254,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Jalor"},
    { "groupId": "minZoom-2","latitude":26.4883,"longitude": 77.0161,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Karauli"},
    { "groupId": "minZoom-2","latitude":25.7781,"longitude": 73.3311,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Pali"},
    { "groupId": "minZoom-2","latitude":27.6094,"longitude": 75.1398,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Sikar"},
    { "groupId": "minZoom-2","latitude":24.8852,"longitude": 72.8575,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Sirohi"},
    { "groupId": "minZoom-2","latitude":29.9094,"longitude": 73.8800,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Sri Ganganagar"},
	
	{ "groupId": "minZoom-2","latitude":29.3361,"longitude": 80.0910,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
	"labelShiftY": 2, "zoomLevel": 5,"title": "Champawat,"},
{ "groupId": "minZoom-2","latitude":29.9457,"longitude": 78.1642,"svgPath": icon, "color": "#CC0000", "scale": 0.5, 
"labelShiftY": 2, "zoomLevel": 5,"title": "Haridwar,"},
  
    { "groupId": "minZoom-2","latitude":26.4919,"longitude": 89.5271,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Alipurduar"},
    { "groupId": "minZoom-2","latitude":23.2313,"longitude": 87.0784,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Bankura"},
    { "groupId": "minZoom-2","latitude":23.2324,"longitude": 87.8615,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Bardhaman"},
    { "groupId": "minZoom-2","latitude":23.8402,"longitude": 87.6186,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Birbhum"},
    { "groupId": "minZoom-2","latitude":26.3452,"longitude": 89.4482,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Cooch Behar"},
    { "groupId": "minZoom-2","latitude":25.3715,"longitude": 88.5565,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Dakshin Dinajpur"},
    { "groupId": "minZoom-2","latitude":27.0410,"longitude": 88.2663,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Darjeeling"},
    { "groupId": "minZoom-2","latitude":22.8963,"longitude": 88.2461,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Hooghly"},
    { "groupId": "minZoom-2","latitude":26.5215,"longitude": 88.7196,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Jalpaiguri"},
    { "groupId": "minZoom-2","latitude":22.5726,"longitude": 88.3639,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Kolkata"},
    { "groupId": "minZoom-2","latitude":25.0108,"longitude": 88.1411,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Malda"},
    { "groupId": "minZoom-2","latitude":24.1759,"longitude": 88.2802,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Murshidabad"},
    { "groupId": "minZoom-2","latitude":23.4710,"longitude": 88.5565,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Nadia"},
    { "groupId": "minZoom-2","latitude":22.6168,"longitude": 88.4029,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "North 24 Parganas"},
    { "groupId": "minZoom-2","latitude":21.9373,"longitude": 87.7763,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Midanpur East"},
    { "groupId": "minZoom-2","latitude":22.1352,"longitude": 88.4016,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "South 24 Parganas"},
    { "groupId": "minZoom-2","latitude":25.9810,"longitude": 88.0510,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Uttar Dinajpur"},


{ "groupId": "minZoom-2","latitude":11.1401,"longitude": 79.0786,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
 "labelShiftY": 2, "zoomLevel": 5,"title": "Ariyallur "},
{ "groupId": "minZoom-2","latitude":13.0827,"longitude": 80.2707,"svgPath": icon, "color": "#CC0000", "scale": 0.5, 
"labelShiftY": 2, "zoomLevel": 5,"title": "Chennai "},
{ "groupId": "minZoom-2","latitude":11.0168,"longitude": 76.9558,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
 "labelShiftY": 2, "zoomLevel": 5,"title": "Coimbatore "},
{ "groupId": "minZoom-2","latitude":11.7480,"longitude": 79.7714,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
 "labelShiftY": 2, "zoomLevel": 5,"title": "Cuddalore "},
{ "groupId": "minZoom-2","latitude":10.3673,"longitude": 77.9803,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
 "labelShiftY": 2, "zoomLevel": 5,"title": " Dindigul "},
{ "groupId": "minZoom-2","latitude":11.3410,"longitude": 77.7172,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
 "labelShiftY": 2, "zoomLevel": 5,"title": "Erode "},
{ "groupId": "minZoom-2","latitude":11.7384,"longitude": 78.9639,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
 "labelShiftY": 2, "zoomLevel": 5,"title": "Kallakurichi "},
{ "groupId": "minZoom-2","latitude":12.8373,"longitude": 79.7042,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
 "labelShiftY": 2, "zoomLevel": 5,"title": " Kanchipuram "},
{ "groupId": "minZoom-2","latitude":10.9601,"longitude": 78.0766,"svgPath": icon, "color": "#CC0000", "scale": 0.5, 
"labelShiftY": 2, "zoomLevel": 5,"title": "Karur "},
{ "groupId": "minZoom-2","latitude":10.9617,"longitude": 79.3881,"svgPath": icon, "color": "#CC0000", "scale": 0.5, 
"labelShiftY": 2, "zoomLevel": 5,"title": "Kumbakonam "},
{ "groupId": "minZoom-2","latitude":10.7656,"longitude": 79.8424,"svgPath": icon, "color": "#CC0000", "scale": 0.5, 
"labelShiftY": 2, "zoomLevel": 5,"title": "Nagapattinam "},
{ "groupId": "minZoom-2","latitude":11.2194,"longitude": 78.1677,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
 "labelShiftY": 2, "zoomLevel": 5,"title": "Namakkal "},
{ "groupId": "minZoom-2","latitude":11.2380,"longitude": 78.8661,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
 "labelShiftY": 2, "zoomLevel": 5,"title": "Perambalur "},
{ "groupId": "minZoom-2","latitude":10.3803,"longitude": 78.8180,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
 "labelShiftY": 2, "zoomLevel": 5,"title": "Pudukkottai "},
{ "groupId": "minZoom-2","latitude":9.3639,"longitude": 78.8395,"svgPath": icon, "color": "#CC0000", "scale": 0.5, 
"labelShiftY": 2, "zoomLevel": 5,"title": "Ramanathapuram"},
{ "groupId": "minZoom-2","latitude":9.3639,"longitude": 78.8395,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
 "labelShiftY": 2, "zoomLevel": 5,"title": "Ramnad "},
{ "groupId": "minZoom-2","latitude":11.6643,"longitude": 78.1460,"svgPath": icon, "color": "#CC0000", "scale": 0.5, 
"labelShiftY": 2, "zoomLevel": 5,"title": "Salem "},
{ "groupId": "minZoom-2","latitude":9.9726,"longitude": 78.5661,"svgPath": icon, "color": "#CC0000", "scale": 0.5, 
"labelShiftY": 2, "zoomLevel": 5,"title": "Sivaganga "},

   { "groupId": "minZoom-2","latitude":24.2065,"longitude": 84.8718,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Chatra"},
   
    { "groupId": "minZoom-2","latitude":23.7957,"longitude": 86.4304,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "dhanbad"},
   
    { "groupId": "minZoom-2","latitude":23.9505,"longitude": 86.8170,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Jamtara"},

    { "groupId": "minZoom-2","latitude":24.4677,"longitude": 85.5934,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Koderma"},

    { "groupId": "minZoom-2","latitude":24.6337,"longitude": 87.8501,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "pakur "},
	

    { "groupId": "minZoom-2","latitude":25.2381,"longitude": 87.6454,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Sahibganj"},
	
	{ "groupId": "minZoom-2","latitude":15.1394,"longitude": 76.9214,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Ballari "},
	
    { "groupId": "minZoom-2","latitude":12.9716,"longitude": 77.5946,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Bangalore "},
	
    { "groupId": "minZoom-2","latitude":12.9716,"longitude": 77.5946,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Bangalore South "},
	
    { "groupId": "minZoom-2","latitude":17.9104,"longitude": 77.5199,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Bidar "},
	
    { "groupId": "minZoom-2","latitude":13.4355,"longitude": 77.7315,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Chikkaballapur "},
	
    { "groupId": "minZoom-2","latitude":17.3297,"longitude": 76.8343,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Gulbarga "},
	
    { "groupId": "minZoom-2","latitude":14.7951,"longitude": 75.3991,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Haveri "},
	
    { "groupId": "minZoom-2","latitude":12.5218,"longitude": 76.8951,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Mandya "},
	
    { "groupId": "minZoom-2","latitude":16.2076,"longitude": 77.3463,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Raichur "},
	
    { "groupId": "minZoom-2","latitude":12.7209,"longitude": 77.2799,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Ramanagara "},
	
    { "groupId": "minZoom-2","latitude":16.8302,"longitude": 75.7100,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Vijayapura "},


 { "groupId": "minZoom-2","latitude":28.7184,"longitude": 77.2580,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "North East Delhi "},
    { "groupId": "minZoom-2","latitude":28.5929,"longitude": 77.0346,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "South West Delhi "},

    { "groupId": "minZoom-2","latitude":28.6663,"longitude": 77.0680,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "West Delhi "},

    { "groupId": "minZoom-2","latitude":28.6139,"longitude": 77.2090,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "New Delhi "},

    { "groupId": "minZoom-2","latitude":28.4817,"longitude": 77.1873,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "South Delhi "},

    { "groupId": "minZoom-2","latitude":28.7886,"longitude": 77.1412,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "North Delhi "},

    { "groupId": "minZoom-2","latitude":28.7186,"longitude": 77.0685,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "North West Delhi "},

    { "groupId": "minZoom-2","latitude":28.5630,"longitude": 77.2611,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "South East Delhi "},

    { "groupId": "minZoom-2","latitude":28.6090,"longitude": 76.9855,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Najafgarh "},

    { "groupId": "minZoom-2","latitude":28.6643,"longitude": 77.2167,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Central Delhi "},
	
	    { "groupId": "minZoom-2","latitude":21.1702,"longitude": 72.8311,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Surat "},

    { "groupId": "minZoom-2","latitude":21.7051,"longitude": 72.9959,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Bharuch "},

    { "groupId": "minZoom-2","latitude":20.9467,"longitude": 72.9520,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Navsari "},

    { "groupId": "minZoom-2","latitude":20.5992,"longitude": 72.9342,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": " Valsad "},

    { "groupId": "minZoom-2","latitude":21.2789,"longitude": 73.6065,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Tapi "},

    { "groupId": "minZoom-2","latitude":21.5222,"longitude": 70.4579,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Junagadh "},

    { "groupId": "minZoom-2","latitude":22.7507,"longitude": 72.6847,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Kheda "},


    { "groupId": "minZoom-2","latitude":25.2235,"longitude": 73.7478,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Aravalli "},

    { "groupId": "minZoom-2","latitude":22.3072,"longitude": 73.1812,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": " Vadodara "},

    { "groupId": "minZoom-2","latitude":21.8757,"longitude": 73.5594,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Narmada "},

    { "groupId": "minZoom-2","latitude":20.8254,"longitude": 73.7007,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Dang "},
    
    { "groupId": "minZoom-2","latitude":20.1809,"longitude": 73.0169,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Dadra and Nagar Haveli "},
    
    { "groupId": "minZoom-2","latitude":20.2754,"longitude": 73.0073,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "silvassa (Dadra and Nagar Haveli) "},
	
	
	
	
	
    { "groupId": "minZoom-2","latitude":30.3752,"longitude": 76.7821,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Ambala "},

    { "groupId": "minZoom-2","latitude":28.3388,"longitude": 77.3206,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Ballabhgarh "},

    { "groupId": "minZoom-2","latitude":28.7975,"longitude": 76.1322,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Bhiwani "},

    { "groupId": "minZoom-2","latitude":28.4089,"longitude": 77.3178,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": " Faridabad "},

    { "groupId": "minZoom-2","latitude":28.6055,"longitude": 76.6538,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Jhajjar "},

    { "groupId": "minZoom-2","latitude":29.3255,"longitude": 76.2998,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Jind "},

    { "groupId": "minZoom-2","latitude":29.8043,"longitude": 76.4039,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Kaithal "},

    { "groupId": "minZoom-2","latitude":29.6857,"longitude": 76.9905,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Karnal "},

    { "groupId": "minZoom-2","latitude":29.9695,"longitude": 76.8783,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": " Kurukshetra "},

    { "groupId": "minZoom-2","latitude":28.1473,"longitude": 77.3260,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Palwal "},

    { "groupId": "minZoom-2","latitude":30.6942,"longitude": 76.8606,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Panchkula "},
    
    { "groupId": "minZoom-2","latitude":29.3909,"longitude": 76.9635,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Panipat "},

    { "groupId": "minZoom-2","latitude":28.8955,"longitude": 76.6066,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Rohtak"},

    { "groupId": "minZoom-2","latitude":29.5518,"longitude": 75.0259,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Sirsa"},

    { "groupId": "minZoom-2","latitude":28.9931,"longitude": 77.0151,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Sonipat"},

    { "groupId": "minZoom-2","latitude":30.1290,"longitude": 77.2674,"svgPath": icon, "color": "#CC0000", "scale": 0.5,
    "labelShiftY": 2, "zoomLevel": 5,"title": "Yamunanagar"},



{ "groupId": "minZoom-2","latitude":20.2571,"longitude": 82.3018,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Gariaband "},
{ "groupId": "minZoom-2","latitude":21.9706,"longitude": 82.4753,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Janjgir-Champa "},
{ "groupId": "minZoom-2","latitude":20.1990,"longitude": 81.0755,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Kanker "},
{ "groupId": "minZoom-2","latitude":22.0090,"longitude": 81.2243,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Kawardha (Kabirdham) "},
{ "groupId": "minZoom-2","latitude":22.0685,"longitude": 81.6857,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Mungeli "},
{ "groupId": "minZoom-2","latitude":21.2514,"longitude": 81.6296,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Raipur "},
{ "groupId": "minZoom-2","latitude":21.6569,"longitude": 82.1592,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Baloda Bazar "},
{ "groupId": "minZoom-2","latitude":27.4307,"longitude": 82.1805,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Balrampur "},
{ "groupId": "minZoom-2","latitude":21.7140,"longitude": 81.5356,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Bemetara "},
{ "groupId": "minZoom-2","latitude":16.8302,"longitude": 75.7100,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Bijapur "},
{ "groupId": "minZoom-2","latitude":22.0796,"longitude": 82.1391,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Bilaspur "},
{ "groupId": "minZoom-2","latitude":23.9402,"longitude": 90.0829,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Dakshin Basta "},
{ "groupId": "minZoom-2","latitude":18.8969,"longitude": 81.3454,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Dantewada "},
{ "groupId": "minZoom-2","latitude":21.1904,"longitude": 81.2849,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Durg "},
{ "groupId": "minZoom-2","latitude":20.2571,"longitude": 82.3018,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Gariaband "},
{ "groupId": "minZoom-2","latitude":22.8874,"longitude": 84.1382,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Jashpur "},
{ "groupId": "minZoom-2","latitude":22.0090,"longitude": 81.2243,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "KABIRDHAM "},
{ "groupId": "minZoom-2","latitude":20.1990,"longitude": 81.0755,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "kanker "},
{ "groupId": "minZoom-2","latitude":21.1304,"longitude": 81.6775,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "KHILORA "},
{ "groupId": "minZoom-2","latitude":19.5959,"longitude": 81.6638,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Kondagaon "},
{ "groupId": "minZoom-2","latitude":22.3595,"longitude": 82.7501,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Korba "},
{ "groupId": "minZoom-2","latitude":23.3875,"longitude": 82.3886,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Koriya "},
{ "groupId": "minZoom-2","latitude":18.8894,"longitude": 80.3201,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "LINGAPUR "},
{ "groupId": "minZoom-2","latitude":21.1705,"longitude": 82.6051,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Mahasamund "},
{ "groupId": "minZoom-2","latitude":22.0678,"longitude": 83.5017,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Mahloi "},
{ "groupId": "minZoom-2","latitude":19.7235,"longitude": 81.2424,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Narayanpur "},
{ "groupId": "minZoom-2","latitude":21.8974,"longitude": 83.3950,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Raigarh "},
{ "groupId": "minZoom-2","latitude":21.0943,"longitude": 81.0337,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Rajnandgaon "},
{ "groupId": "minZoom-2","latitude":18.3911,"longitude": 81.6593,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Sukma "},
{ "groupId": "minZoom-2","latitude":23.2148,"longitude": 82.8694,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Surajpur "},
{ "groupId": "minZoom-2","latitude":22.9494,"longitude": 83.1649,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Surguja "},


{ "groupId": "minZoom-2","latitude":25.2440,"longitude": 84.6662,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Arwal "},
{ "groupId": "minZoom-2","latitude":24.7033,"longitude": 84.3542,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Aurangabad "},
{ "groupId": "minZoom-2","latitude":25.4182,"longitude": 86.1272,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Begusarai "},
{ "groupId": "minZoom-2","latitude":25.2425,"longitude": 86.9842,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Bhagalpur "},
{ "groupId": "minZoom-2","latitude":25.2133,"longitude": 84.9853,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Jehanabad "},
{ "groupId": "minZoom-2","latitude":25.5541,"longitude": 87.5591,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Katihar "},
{ "groupId": "minZoom-2","latitude":25.5115,"longitude": 86.4806,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Khagaria "},
{ "groupId": "minZoom-2","latitude":25.1571,"longitude": 86.0952,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Lakhisarai "},
{ "groupId": "minZoom-2","latitude":24.6287,"longitude": 83.9202,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Rohtas "},
{ "groupId": "minZoom-2","latitude":25.6838,"longitude": 85.3550,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Vaishali "},
{ "groupId": "minZoom-2","latitude":27.1543,"longitude": 84.3542,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " West Champaran "},
{ "groupId": "minZoom-2","latitude":25.3748,"longitude": 86.4735,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Munger "},
{ "groupId": "minZoom-2","latitude":26.1311,"longitude": 87.4455,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Araria "},
{ "groupId": "minZoom-2","latitude":25.7585,"longitude": 84.1488,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "BALLIA "},
{ "groupId": "minZoom-2","latitude":24.8874,"longitude": 86.9198,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Banka "},
{ "groupId": "minZoom-2","latitude":25.0426,"longitude": 83.6056,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Bhabua "},
{ "groupId": "minZoom-2","latitude":24.9081,"longitude": 83.5323,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Bhabua(Kaimur) "},
{ "groupId": "minZoom-2","latitude":25.4662,"longitude": 84.5222,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Bhojpur "},
{ "groupId": "minZoom-2","latitude":25.5647,"longitude": 83.9777,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Buxar "},
{ "groupId": "minZoom-2","latitude":25.7811,"longitude": 84.7543,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Chhapra (Saran) "},
{ "groupId": "minZoom-2","latitude":26.1542,"longitude": 85.8918,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Darbhanga "},
{ "groupId": "minZoom-2","latitude":24.4852,"longitude": 86.6948,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Deoghar "},
{ "groupId": "minZoom-2","latitude":26.6098,"longitude": 84.8568,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "East Champaran "},
{ "groupId": "minZoom-2","latitude":24.7914,"longitude": 85.0002,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Gaya "},
{ "groupId": "minZoom-2","latitude":26.4832,"longitude": 84.4366,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Gopalganj "},
{ "groupId": "minZoom-2","latitude":24.9195,"longitude": 86.2247,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Jamui "},
{ "groupId": "minZoom-2","latitude":24.9081,"longitude": 83.5323,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "kaimur "},
{ "groupId": "minZoom-2","latitude":25.5115,"longitude": 86.4806,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "khagaria "},
{ "groupId": "minZoom-2","latitude":26.0870,"longitude": 87.9389,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Kishanganj "},
{ "groupId": "minZoom-2","latitude":25.8674,"longitude": 86.9424,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Madhepura "},
{ "groupId": "minZoom-2","latitude":26.3483,"longitude": 86.0712,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Madhubani "},
{ "groupId": "minZoom-2","latitude":25.3748,"longitude": 86.4735,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Munger "},
{ "groupId": "minZoom-2","latitude":26.1196,"longitude": 85.3911,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Muzaffarpur "},
{ "groupId": "minZoom-2","latitude":25.2622,"longitude": 85.4788,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Nalanda "},
{ "groupId": "minZoom-2","latitude":24.8867,"longitude": 85.5435,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Nawada "},
{ "groupId": "minZoom-2","latitude":25.5941,"longitude": 85.1376,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Patna "},
{ "groupId": "minZoom-2","latitude":25.7771,"longitude": 87.4753,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Purnea "},
{ "groupId": "minZoom-2","latitude":26.8755,"longitude": 84.7838,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "ramgarhwa "},
{ "groupId": "minZoom-2","latitude":22.8264,"longitude": 86.6636,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "RAUTARA "},
{ "groupId": "minZoom-2","latitude":25.8829,"longitude": 86.5975,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Saharsa "},
{ "groupId": "minZoom-2","latitude":25.8560,"longitude": 85.7868,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Samastipur "},
{ "groupId": "minZoom-2","latitude":25.8560,"longitude": 84.8568,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Saran "},
{ "groupId": "minZoom-2","latitude":24.9539,"longitude": 84.0143,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Sasaram(Rohtas) "},
{ "groupId": "minZoom-2","latitude":26.5146,"longitude": 85.2942,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Sheohar "},
{ "groupId": "minZoom-2","latitude":25.1417,"longitude": 85.8629,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Sheikhpura "},
{ "groupId": "minZoom-2","latitude":26.5887,"longitude": 85.5013,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Sitamarhi "},
{ "groupId": "minZoom-2","latitude":26.2098,"longitude": 84.3634,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Siwan "},
{ "groupId": "minZoom-2","latitude":26.2899,"longitude": 86.8220,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Supaul "},
{ "groupId": "minZoom-2","latitude":27.1543,"longitude": 84.3542,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "West Champaran "},

	
	{ "groupId": "minZoom-2","latitude":23.1137,"longitude": 81.6976,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Anuppur  "},
{ "groupId": "minZoom-2","latitude":24.5775,"longitude": 77.7318,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Ashoknagar "},
{ "groupId": "minZoom-2","latitude":21.8129,"longitude": 80.1838,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Balaghat "},
{ "groupId": "minZoom-2","latitude":21.9012,"longitude": 77.8960,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Betul "},
{ "groupId": "minZoom-2","latitude":26.5587,"longitude": 78.7873,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Bhind "},
{ "groupId": "minZoom-2","latitude":23.2599,"longitude": 77.4126,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Bhopal "},
{ "groupId": "minZoom-2","latitude":24.9164,"longitude": 79.5812,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Chhatarpur "},
{ "groupId": "minZoom-2","latitude":22.0574,"longitude": 78.9382,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Chhindwara "},
{ "groupId": "minZoom-2","latitude":23.8323,"longitude": 79.4387,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Damoh "},
{ "groupId": "minZoom-2","latitude":25.6653,"longitude": 78.4609,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Datia "},
{ "groupId": "minZoom-2","latitude":22.9418,"longitude": 81.0768,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Dindori "},
{ "groupId": "minZoom-2","latitude":24.6324,"longitude": 77.3002,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Guna "},
{ "groupId": "minZoom-2","latitude":26.2183,"longitude": 78.1828,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Gwalior "},
{ "groupId": "minZoom-2","latitude":22.3355,"longitude": 77.0996,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Harda "},
{ "groupId": "minZoom-2","latitude":22.7439,"longitude": 77.7359,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Hoshangabad "},
{ "groupId": "minZoom-2","latitude":23.1815,"longitude": 79.9864,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Jabalpur "},
{ "groupId": "minZoom-2","latitude":23.8343,"longitude": 80.3894,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Katni "},
{ "groupId": "minZoom-2","latitude":22.5979,"longitude": 80.3714,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Mandla "},
{ "groupId": "minZoom-2","latitude":26.4947,"longitude": 77.9940,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Morena "},
{ "groupId": "minZoom-2","latitude":22.9473,"longitude": 79.1923,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Narsinghpur "},
{ "groupId": "minZoom-2","latitude":24.7180,"longitude": 80.1819,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Panna "},
{ "groupId": "minZoom-2","latitude":23.3327,"longitude": 77.7824,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Raisen "},
{ "groupId": "minZoom-2","latitude":24.0079,"longitude": 76.7279,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Rajgarh "},
{ "groupId": "minZoom-2","latitude":24.5362,"longitude": 81.3037,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Rewa "},
{ "groupId": "minZoom-2","latitude":23.8388,"longitude": 78.7378,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Sagar "},
{ "groupId": "minZoom-2","latitude":24.6005,"longitude": 80.8322,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Satna "},
{ "groupId": "minZoom-2","latitude":22.0869,"longitude": 79.5435,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Seoni "},
{ "groupId": "minZoom-2","latitude":23.3002,"longitude": 81.3569,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Shahdol "},
{ "groupId": "minZoom-2","latitude":23.4273,"longitude": 76.2730,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Shajapur "},
{ "groupId": "minZoom-2","latitude":25.6728,"longitude": 76.6961,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Sheopur "},
{ "groupId": "minZoom-2","latitude":25.4358,"longitude": 77.6651,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Shivpuri "},
{ "groupId": "minZoom-2","latitude":24.3956,"longitude": 81.8825,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Sidhi "},
{ "groupId": "minZoom-2","latitude":24.1443,"longitude": 82.3886,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Singrauli "},
{ "groupId": "minZoom-2","latitude":24.7456,"longitude": 78.8321,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Tikamgarh "},
{ "groupId": "minZoom-2","latitude":23.6014,"longitude": 81.0755,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Umaria "},
	
	
	{ "groupId": "minZoom-2","latitude":19.0948,"longitude": 74.7480,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Ahmednagar "},
{ "groupId": "minZoom-2","latitude":20.7002,"longitude": 77.0082,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Akola "},
{ "groupId": "minZoom-2","latitude":19.8762,"longitude": 75.3433,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Aurangabad "},
{ "groupId": "minZoom-2","latitude":18.9901,"longitude": 75.7528,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Beed "},
{ "groupId": "minZoom-2","latitude":19.8347,"longitude": 75.8816,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Jalna "},
{ "groupId": "minZoom-2","latitude":18.5204,"longitude": 73.8567,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Pune "},
{ "groupId": "minZoom-2","latitude":16.9902,"longitude": 73.3120,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Ratnagiri "},
{ "groupId": "minZoom-2","latitude":17.6599,"longitude": 75.9064,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Solapur "},
{ "groupId": "minZoom-2","latitude":19.2183,"longitude": 72.9781,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Thane "},
{ "groupId": "minZoom-2","latitude":20.4561,"longitude": 76.3637,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Buldana "},
{ "groupId": "minZoom-2","latitude":21.4549,"longitude": 80.1961,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Gondia "},
{ "groupId": "minZoom-2","latitude":19.7174,"longitude": 77.1494,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Hingoli "},
{ "groupId": "minZoom-2","latitude":21.0077,"longitude": 75.5626,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Jalgaon "},
{ "groupId": "minZoom-2","latitude":16.7050,"longitude": 74.2433,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Kolhapur "},
{ "groupId": "minZoom-2","latitude":18.4088,"longitude": 76.5604,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Latur "},
{ "groupId": "minZoom-2","latitude":19.0760,"longitude": 72.8777,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Mumbai "},
{ "groupId": "minZoom-2","latitude":21.1458,"longitude": 79.0882,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Nagpur "},
{ "groupId": "minZoom-2","latitude":19.1383,"longitude": 77.3210,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Nanded "},
{ "groupId": "minZoom-2","latitude":19.9975,"longitude": 73.7898,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Nashik "},
{ "groupId": "minZoom-2","latitude":18.1853,"longitude": 76.0420,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Osmanabad "},
{ "groupId": "minZoom-2","latitude":19.6967,"longitude": 72.7699,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Palghar "},
{ "groupId": "minZoom-2","latitude":19.2635,"longitude": 76.7697,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Parbhani "},
{ "groupId": "minZoom-2","latitude":18.2376,"longitude": 73.4445,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Raigad "},
{ "groupId": "minZoom-2","latitude":19.9778,"longitude": 76.7827,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Risod "},
{ "groupId": "minZoom-2","latitude":20.1119,"longitude": 77.1313,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Washim "},
{ "groupId": "minZoom-2","latitude":20.3883,"longitude": 78.1177,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": " Yavatmal "},
	
	
	
{ "groupId": "minZoom-2","latitude":20.8444,"longitude": 85.1511,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Angul "},
{ "groupId": "minZoom-2","latitude":20.7074,"longitude": 83.4843,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Balangir "},
{ "groupId": "minZoom-2","latitude":21.4934,"longitude": 86.9135,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Balasore "},
{ "groupId": "minZoom-2","latitude":21.3470,"longitude": 83.6320,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Bargarh "},
{ "groupId": "minZoom-2","latitude":21.0574,"longitude": 86.4963,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Bhadrak "},
{ "groupId": "minZoom-2","latitude":20.8418,"longitude": 84.3200,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Boudh "},
{ "groupId": "minZoom-2","latitude":20.4625,"longitude": 85.8830,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Cuttack "},
{ "groupId": "minZoom-2","latitude":21.5383,"longitude": 84.7289,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Deogarh "},
{ "groupId": "minZoom-2","latitude":20.6505,"longitude": 85.5981,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Dhenkanal "},
{ "groupId": "minZoom-2","latitude":19.5860,"longitude": 84.6897,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Ganjam "},
{ "groupId": "minZoom-2","latitude":20.2549,"longitude": 86.1706,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Jagatsinghpur "},
{ "groupId": "minZoom-2","latitude":20.8341,"longitude": 86.3326,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Jajapur "},
{ "groupId": "minZoom-2","latitude":21.8554,"longitude": 84.0062,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Jharsuguda "},
{ "groupId": "minZoom-2","latitude":19.9137,"longitude": 83.1649,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Kalahandi "},
{ "groupId": "minZoom-2","latitude":20.5848,"longitude": 86.6611,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Kendrapara  "},
{ "groupId": "minZoom-2","latitude":21.6289,"longitude": 85.5817,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Keonjhar "},
{ "groupId": "minZoom-2","latitude":20.1863,"longitude": 85.6223,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Khordha  "},
{ "groupId": "minZoom-2","latitude":22.0087,"longitude": 86.4187,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Mayurbhanj "},
{ "groupId": "minZoom-2","latitude":20.8060,"longitude": 82.5361,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Nuapada "},
{ "groupId": "minZoom-2","latitude":20.1231,"longitude": 85.1038,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Nayagarh "},
{ "groupId": "minZoom-2","latitude":19.8134,"longitude": 85.8315,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Puri "},
{ "groupId": "minZoom-2","latitude":21.4669,"longitude": 83.9812,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "Sambalpur "},
{ "groupId": "minZoom-2","latitude":22.1240,"longitude": 84.0432,"svgPath": icon, "color": "#CC0000", "scale": 0.5, "labelShiftY": 2, "zoomLevel": 5,"title": "sundargarh  "},
				 ]
				
			    };

			    map.dataProvider = dataProvider;				          
			//	map.theme = "none";
			    map.areasSettings = {
					
			        autoZoom: true,
				    useTargetsZoomValues:true,
                    selectedColor:"blue", 
					
			    };
                map.imagesSettings = {
                      //   rollOverColor : "#089282",
                       //  rollOverScale : 1.5,
                      //   selectedScale : 3,
                      //   selectedColor : "#089282",
                      //   color : "#13564e"
                 }; 
			    map.smallMap = new AmCharts.SmallMap();
				map.addListener( "rendered", function() {
               
	 
			   
			   revealMapImages();
                     map.addListener( "zoomCompleted", revealMapImages );
              });

			    map.write("mapdiv");
				
				
				 

			});
			
			

function revealMapImages( event ) {
  var zoomLevel = map.zoomLevel();
   if ( zoomLevel < 2 ) {
  
    map.hideGroup( "minZoom-2" );
    map.hideGroup( "minZoom-2.5" );
  } else if ( zoomLevel < 2.5 ) {
    
    map.showGroup( "minZoom-2" );
    map.hideGroup( "minZoom-2.5" );
  } 
  else {
    map.showGroup( "minZoom-2" );
    map.showGroup( "minZoom-2.5" );
  }
}

