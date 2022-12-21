import React, { useEffect, useState } from 'react';


const LiveVideos = () => {
    // Had to hard code due to API limitations
    const [allVideos, setAllVideos] = useState([

        {
        
        "id":"50555807-D0A1-4D6D-841E-9F80722313D3"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B4662E-1DD8-B71B-0B01D8503D5C98F4"
        
        ,"title":"Perdido Key Beach"
        
        ,"description":"Perdido Key Area a photograph is taken every 15 minutes of the beach located in the Florida District of Gulf Islands National Seashore."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"FL,MS","parkCode":"guis","designation":"National Seashore","fullName":"Gulf Islands National Seashore","url":"https://www.nps.gov/guis/index.htm","name":"Gulf Islands"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        30.359333038330078
        ,"longitude":
        -86.99675750732422
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"31784169-9A45-4212-8891-B0ADA71B8D59"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46686-1DD8-B71B-0B598B0F097C88D5"
        
        ,"title":"Davis Bayou Webcam"
        
        ,"description":"Live look at Davis Bayou Area, this image is updated every 15 minutes. This camera is pointed south over the bayou."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"FL,MS","parkCode":"guis","designation":"National Seashore","fullName":"Gulf Islands National Seashore","url":"https://www.nps.gov/guis/index.htm","name":"Gulf Islands"}]
        ,"status":"Inactive"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        30.359333038330078
        ,"longitude":
        -86.99675750732422
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"D9245357-45A2-4A6D-94C6-A487B48D094A"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=BC0FDBA3-B30A-E177-BCC274650EFF84D4"
        
        ,"title":"Fort Pickens Area"
        
        ,"description":"Live look at the Fort Pickens Area, this image is updated every 15 minutes. This camera is pointed east at the Campground Registration building."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"FL,MS","parkCode":"guis","designation":"National Seashore","fullName":"Gulf Islands National Seashore","url":"https://www.nps.gov/guis/index.htm","name":"Gulf Islands"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        30.359333038330078
        ,"longitude":
        -86.99675750732422
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"368C7B9E-0FDD-43B7-A75E-5D3C425669F8"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=A4068FB2-DB05-82B5-F242852BBAA0A971"
        
        ,"title":"Temples And Towers of the Virgin"
        
        ,"description":"This webcam is located at park headquarters in Zion Canyon and shows one of the park's most famous views, The Temples and Towers of the Virgin."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"UT","parkCode":"zion","designation":"National Park","fullName":"Zion National Park","url":"https://www.nps.gov/zion/index.htm","name":"Zion"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        37.20857217718976
        ,"longitude":
        -112.9823947055411
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"577E4D96-8E42-4F3A-B074-944CD63BADB3"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46251-1DD8-B71B-0B29B9750DE273B5"
        
        ,"title":"Hurricane Ridge"
        
        ,"description":"Looking southwest from Hurricane Ridge, towards Mount Olympus and the Bailey Range. Webcam Disclaimer: Even with a heated, weather-proof case, this webcam experiences rain, snow, wind, freezing temperatures, and direct sunlight. Especially in winter, the view from this webcam can become temporarily obstructed."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"WA","parkCode":"olym","designation":"National Park","fullName":"Olympic National Park","url":"https://www.nps.gov/olym/index.htm","name":"Olympic"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        48.0997200012207
        ,"longitude":
        -123.42503356933594
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"3CD74928-FC21-41CE-9C75-6451B194A8D2"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46260-1DD8-B71B-0B7A7B41BF33172A"
        
        ,"title":"Hurricane Ridge Parking Lot"
        
        ,"description":"This view, from the north side of Hurricane Ridge Visitor Center, is rarely obstructed and is often monitored by locals to check the weather or snow pack to determine if conditions are good for a trip up the mountain."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"WA","parkCode":"olym","designation":"National Park","fullName":"Olympic National Park","url":"https://www.nps.gov/olym/index.htm","name":"Olympic"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        -27.491764068603516
        ,"longitude":
        151.76365661621094
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"5E1D2203-27CB-4344-BB30-FB60591CCAEF"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B467D6-1DD8-B71B-0BE07E579A95DA72"
        
        ,"title":"South Entrance Station"
        
        ,"description":"To help time your South Rim arrival, monitor the South Entrance Station Webcam. During busy weekends, there can be long lines and up to two hour wait times between 10 am - 5 pm. This view refreshes every minute. The entrance station is about 1.6 miles (2.5 km) north of the gateway town of Tusayan, AZ."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"AZ","parkCode":"grca","designation":"National Park","fullName":"Grand Canyon National Park","url":"https://www.nps.gov/grca/index.htm","name":"Grand Canyon"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Grand Canyon"
          ,
          "entrance station"
          ,
          "webcam"
          ,
          "South Entrance"
          ,
          "South Entrance Station"
          ,
          "South Entrance Area"
          ]
        
        ,"latitude":
        36.0579596124
        ,"longitude":
        -112.142668784
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"54B278BE-E053-4FF3-9C7C-5EBED26EE1B9"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=348818A5-C6EE-66E7-41F5F43A4C334357"
        
        ,"title":"San Francisco Peaks"
        
        ,"description":"Webcam courtesy of the National Weather Service office in Bellemont, Arizona. In the distance, the San Francisco Peaks with Mount Humphreys at 12,633 feet (3,850 m) above sea level, the highest point in the state of Arizona. Bellemont is located along Interstate 40, 13.6 miles (22 Km) east of Flagstaff, Arizona."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"AZ","parkCode":"grca","designation":"National Park","fullName":"Grand Canyon National Park","url":"https://www.nps.gov/grca/index.htm","name":"Grand Canyon"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Flagstaff"
          ,
          "Arizona"
          ,
          "National Weather Service"
          ,
          "AZWX"
          ,
          "Weather Monitoring"
          ]
        
        ,"latitude":
        35.23921585083008
        ,"longitude":
        -111.83287811279297
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"A3611DBF-473C-4E77-9A87-EA768319D0A8"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=692DB1BB-E2E6-22EC-034062D3C0C936B5"
        
        ,"title":"State Route 64 (Mile 213.9)"
        
        ,"description":"The view is from Valle, Arizona, near the junction of US 180 (from Flagstaff) and SR 64 (from Williams) The location is also called \"Grand Canyon Junction\". The South Rim of Grand Canyon National Park is 26 miles (41 km) north of this location. Live view courtesy of Arizona Dept. of Transportation 511. The image updates every 6 minutes."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"AZ","parkCode":"grca","designation":"National Park","fullName":"Grand Canyon National Park","url":"https://www.nps.gov/grca/index.htm","name":"Grand Canyon"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "webcam"
          ,
          "Traffic"
          ,
          "weather condition"
          ]
        
        ,"latitude":
        35.6520881652832
        ,"longitude":
        -112.13945770263672
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"B20FE951-37FC-4816-AE0A-BE4376D3A56C"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=69687067-BE16-062D-2F789E22263AABA3"
        
        ,"title":"Flagstaff, Arizona — I-40"
        
        ,"description":"This camera shows the current weather, traffic and road conditions at Mile 197.6 of Interstate 40 —one of the main highways travelers use to reach Grand Canyon National Park. Live view courtesy Arizona Dept. of Transportation 511. The image updates every 6 minutes."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"AZ","parkCode":"grca","designation":"National Park","fullName":"Grand Canyon National Park","url":"https://www.nps.gov/grca/index.htm","name":"Grand Canyon"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "webcam"
          ,
          "Travel"
          ,
          "weather condition"
          ,
          "Interstate 40"
          ,
          "Flagstaff"
          ,
          "AZ"
          ]
        
        ,"latitude":
        35.184470071415355
        ,"longitude":
        -111.63327407836914
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"D9544F22-0553-49CE-ACBF-91A9E797D457"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=69E0162D-0ED1-F68A-6B52A11F95FD867B"
        
        ,"title":"Live View - Bright Angel Trail"
        
        ,"description":"Bright Angel Trail starts into the canyon from Kolb Studio in Grand Canyon Village. For more than 60 years, mule trips descending into the canyon would pose here for group photos. Bright Angel Trail is the park’s most popular hiking trail. Verify that the time and date of the picture is current (upper left in the image) Camera is hosted by Grand Canyon Conservancy. The image updates every minute."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"AZ","parkCode":"grca","designation":"National Park","fullName":"Grand Canyon National Park","url":"https://www.nps.gov/grca/index.htm","name":"Grand Canyon"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "webcam"
          ,
          "Grand Canyon"
          ,
          "overlook"
          ,
          "Kolb brothers"
          ,
          "Kolb Studio"
          ,
          "bright angel lodge"
          ,
          "bright angel trail"
          ,
          "bright angel trailhead"
          ]
        
        ,"latitude":
        36.05803829200003
        ,"longitude":
        -112.14256115579968
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"4CB95265-6449-464D-A24C-776C2BD8F0F0"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=2F48025E-07C8-4EEC-A9C675EB4BD27FD4"
        
        ,"title":"Clarno Unit: The Palisades"
        
        ,"description":"The webcam is pointed towards the northwest at the Clarno Palisades, 50-million-year-old mudflow deposits. The Palisades are approximately 1,750 ft (533 m) in elevation. If you want to beat the crowds, visit the Clarno Unit because it is the least visited unit of the park."
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/2FC01B04-F3AF-44C9-3CA9287DA896E53F.jpg"
        ,"credit":"NPS","altText":"jagged pillar like cliffs with dry grass","title":"The Clarno Palisade","description":"","caption":"The Clarno Palisades as found at the Clarno Unit of John Day Fossil Beds","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/2FC01B04-F3AF-44C9-3CA9287DA896E53F.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/2FC01B04-F3AF-44C9-3CA9287DA896E53F.jpg"}]}]
        
        ,"relatedParks":[{"states":"OR","parkCode":"joda","designation":"National Monument","fullName":"John Day Fossil Beds National Monument","url":"https://www.nps.gov/joda/index.htm","name":"John Day Fossil Beds"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Mountain"
          ,
          "clarno"
          ,
          "Clarno Unit"
          ]
        
        ,"latitude":
        44.91300582885742
        ,"longitude":
        -120.4150161743164
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"D3A85806-E9A4-40E9-B510-CFBCC177D2DB"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=4BC3A7AF-C4DB-8BD8-30708A8A456E516F"
        
        ,"title":"Painted Hills Unit: Carroll Rim"
        
        ,"description":"The webcam points towards the northwest at Carroll Rim, a 2430 ft (741 m) hill capped by ignimbrite, or a massive pyroclastic deposit. The ignimbrite sits on top of the Turtle Cove member of the John Day formation. The iconic painted hills are not visible in this image, but the view gives a good approximation of what the weather may be like at the Painted Hills Unit."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"OR","parkCode":"joda","designation":"National Monument","fullName":"John Day Fossil Beds National Monument","url":"https://www.nps.gov/joda/index.htm","name":"John Day Fossil Beds"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "painted hills"
          ,
          "john day fossil beds"
          ,
          "webcam"
          ]
        
        ,"latitude":
        44.65763066609999
        ,"longitude":
        -120.26079081413405
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"F1F8E4C7-86A0-4063-985E-5A78A3F5CC22"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=D1C22258-A615-AAB8-5494D5C329941F4C"
        
        ,"title":"Sanford-Yake"
        
        ,"description":"Sanford-Yake provides easy access to Lake Meredith. A boat ramp, fishing dock, and bait shop make this one of the busiest places at Lake Meredith National Recreation Area. The Sanford Dam was completed in 1965 and can be seen in the background. Funding for this webcam was provided by the Lake Meredith and Alibates Friends Group. The functionality of the camera was provided by Wright-On Bait and Tackle Shop."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"TX","parkCode":"lamr","designation":"National Recreation Area","fullName":"Lake Meredith National Recreation Area","url":"https://www.nps.gov/lamr/index.htm","name":"Lake Meredith"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Lake Meredith Webcam"
          ,
          "Lake Meredith National Recreation Area"
          ,
          "Sanford-Yake"
          ]
        
        ,"latitude":
        35.706227211790065
        ,"longitude":
        -101.55706643417955
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"9F40DA8A-8BB5-461E-A9BE-B855D1510A86"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=31A9FB85-E7D0-D3B2-90FF5EFCC577CEB7"
        
        ,"title":"Lake Meredith"
        
        ,"description":"Lake Meredith National Recreation Area provides recreational activities that are diverse and affordable for visitors of all interests and abilities. Popular recreation activities include boating, fishing, camping, hiking, kayaking, and swimming. This view is from the Sanford Dam and is pointing to the west."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"TX","parkCode":"lamr","designation":"National Recreation Area","fullName":"Lake Meredith National Recreation Area","url":"https://www.nps.gov/lamr/index.htm","name":"Lake Meredith"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        35.55690383911133
        ,"longitude":
        -101.7423095703125
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"B7C0186B-7D70-42A8-ACD4-6144EE073939"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=EE11A8B1-EE17-7C0C-8C0AF4FE6CF5CD48"
        
        ,"title":"Live View From Panther Junction"
        
        ,"description":"Big Bend is famous for wide expansive panoramas. The view from Park Headquarters is always changing, and always spectacular. The view is to the Northwest, and updated every 15 minutes. On a clear day, distant peaks over 80 miles away are clearly visible."
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/45C71608-D013-688F-7914D26F6225F7C2.jpg"
        ,"credit":"NPS","altText":"Big Bend National Park Webcam","title":"Big Bend National Park Webcam","description":"","caption":"Wide Open Spaces","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/45C71608-D013-688F-7914D26F6225F7C2.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/45C71608-D013-688F-7914D26F6225F7C2.jpg"}]}]
        
        ,"relatedParks":[{"states":"TX","parkCode":"bibe","designation":"National Park","fullName":"Big Bend National Park","url":"https://www.nps.gov/bibe/index.htm","name":"Big Bend"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "air quality"
          ,
          "clear skies"
          ,
          "visibility"
          ]
        
        ,"latitude":
        29.32790879301111
        ,"longitude":
        -103.20640072867354
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"A7151BEF-20FA-4EC6-B6FA-00546B49796A"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B462DF-1DD8-B71B-0B883DE9E8EC694F"
        
        ,"title":"Paleontology Lab"
        
        ,"description":"Science takes center stage at John Day Fossil Beds National Monument. Our Paleontology Lab Cam allows you to watch our paleontologists remove rock from around fossils. Sometimes there are other tasks to do, but when they are working on other projects, they usually leave a fossil that they have been working on in the camera's field of view. The lights usually come on at 9am Pacific and go out at 5pm Pacific. This camera refreshes every 20 seconds."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"OR","parkCode":"joda","designation":"National Monument","fullName":"John Day Fossil Beds National Monument","url":"https://www.nps.gov/joda/index.htm","name":"John Day Fossil Beds"}]
        ,"status":"Inactive"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        -27.491764068603516
        ,"longitude":
        151.76365661621094
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"BFDCA85A-4B26-4FB2-8A9D-BC6AD032C87F"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46A88-1DD8-B71B-0B167518C73343F3"
        
        ,"title":"Spruce Tree House"
        
        ,"description":"View of the cliff dwelling, Spruce Tree House, from the back porch of the Chief Ranger's Office. Spruce Tree House is one of the best preserved cliff dwellings in the park. Most of the walls, wood, and plaster are original. Archeologists have identified at least 120 rooms and eight kivas, making this the third largest cliff dwelling in the park. By the late 1270s, up to 19 households (60 to 80 people) lived here."
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/B6C6A046-F735-7C82-87ECCD7872E878CB.jpg"
        ,"credit":"NPS Photo","altText":"Large, ancient stone-masonry village tucked inside a cliff alcove.","title":"Spruce Tree House Webcam","description":"","caption":"View of Spruce Tree House from webcam","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/B6C6A046-F735-7C82-87ECCD7872E878CB.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/B6C6A046-F735-7C82-87ECCD7872E878CB.jpg"}]}]
        
        ,"relatedParks":[{"states":"CO","parkCode":"meve","designation":"National Park","fullName":"Mesa Verde National Park","url":"https://www.nps.gov/meve/index.htm","name":"Mesa Verde"}]
        ,"status":"Inactive"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "cliff dwelling"
          ]
        
        ,"latitude":
        37.33171844482422
        ,"longitude":
        -108.41557312011719
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"9E84BDC4-3AA9-4271-8BB5-C69220F61149"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46A0D-1DD8-B71B-0B72FB1B0E64468B"
        
        ,"title":"Florissant valley, Florissant Fossil Beds"
        
        ,"description":"Update Fall 2021. The webcam has been experiencing some issues and we do plan on replacing it. We apologize for the inconvenience. View of the Florissant valley, looking north."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"CO","parkCode":"flfo","designation":"National Monument","fullName":"Florissant Fossil Beds National Monument","url":"https://www.nps.gov/flfo/index.htm","name":"Florissant Fossil Beds"}]
        ,"status":"Inactive"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        38.912864685058594
        ,"longitude":
        -105.28099060058594
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"AEE33E9B-037F-43D8-BB8B-E033EFE3EE8F"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46B32-1DD8-B71B-0B6909C2084A1624"
        
        ,"title":"Parade Ground"
        
        ,"description":"View of parade ground with flag pole in center, the historic courthouse and jail, and the gallows in the background. The supply wagon can be seen in the foreground during the summer and fall."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"AR,OK","parkCode":"fosm","designation":"National Historic Site","fullName":"Fort Smith National Historic Site","url":"https://www.nps.gov/fosm/index.htm","name":"Fort Smith"}]
        ,"status":"Inactive"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        35.387290954589844
        ,"longitude":
        -94.4294204711914
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"C760712C-1930-4281-BED4-D61310C8E40D"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46B3F-1DD8-B71B-0B8B3A901237E575"
        
        ,"title":"First Fort"
        
        ,"description":"The blockhouse foundation is in the foreground with the Arkansas and Poteau Rivers are in the background. Watch the seasons change or enjoy the sunset."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"AR,OK","parkCode":"fosm","designation":"National Historic Site","fullName":"Fort Smith National Historic Site","url":"https://www.nps.gov/fosm/index.htm","name":"Fort Smith"}]
        ,"status":"Inactive"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        -27.491764068603516
        ,"longitude":
        151.76365661621094
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"7055F69F-8E3D-488E-82E2-D0D9F4B67664"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=E73E3175-DF46-3AF2-28593FC1F83AE264"
        
        ,"title":"Pine Springs Canyon View"
        
        ,"description":"View looking toward the west into Pine Springs Canyon - \"View Webcam\" link opens a larger picture that updates every 30 seconds."
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/19FB08D1-D845-9030-FBA0E3E11842E4FD.jpg"
        ,"credit":"NPS Photo","altText":"webcam image of a wide canyon with mountain peaks framing each side","title":"Pine Springs Canyon webcam","description":"","caption":"Pine Springs Canyon webcam","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/19FB08D1-D845-9030-FBA0E3E11842E4FD.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/19FB08D1-D845-9030-FBA0E3E11842E4FD.jpg"}]}]
        
        ,"relatedParks":[{"states":"TX","parkCode":"gumo","designation":"National Park","fullName":"Guadalupe Mountains National Park","url":"https://www.nps.gov/gumo/index.htm","name":"Guadalupe Mountains"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Texas"
          ,
          "Guadalupe Mountains"
          ]
        
        ,"latitude":
        31.923355102539062
        ,"longitude":
        -104.87138366699219
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"57C803B3-B84E-49FA-B3FB-7C29C4E0DD89"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=FC5992A4-B6CF-6934-895AC39A76425DD5"
        
        ,"title":"Dell City View"
        
        ,"description":"View looking east from Dell City to the western escarpment of the Guadalupe Mountains- \"View Webcam\" link opens a larger picture that updates every 30 seconds."
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/1A350360-ED4E-850D-63122045208B2A49.jpg"
        ,"credit":"NPS Photo","altText":"Webcam screenshot showing city buildings with a desert mountainscape in the background","title":"Dell City Webcam","description":"","caption":"Dell City Webcam","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/1A350360-ED4E-850D-63122045208B2A49.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/1A350360-ED4E-850D-63122045208B2A49.jpg"}]}]
        
        ,"relatedParks":[{"states":"TX","parkCode":"gumo","designation":"National Park","fullName":"Guadalupe Mountains National Park","url":"https://www.nps.gov/gumo/index.htm","name":"Guadalupe Mountains"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Texas"
          ,
          "Guadalupe Mountains"
          ]
        
        ,"latitude":
        31.891332626342773
        ,"longitude":
        -104.86106872558594
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"DA77D3D0-B529-432A-86C3-E792F510C536"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=9849DE2B-BC23-1110-33CED7C04E8AAF05"
        
        ,"title":"El Capitan View"
        
        ,"description":"View from the Pine Springs area towards the southwest and the profile of El Capitan - \"View Webcam\" link opens a larger picture that updates every 30 seconds."
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/400A9058-A78E-7477-DE336353CAF95310.jpg"
        ,"credit":"NPS Photo","altText":"webcam still image of a mountain peak profile and morning sky","title":"El Capitan Webcam","description":"","caption":"El Capitan Webcam","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/400A9058-A78E-7477-DE336353CAF95310.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/400A9058-A78E-7477-DE336353CAF95310.jpg"}]}]
        
        ,"relatedParks":[{"states":"TX","parkCode":"gumo","designation":"National Park","fullName":"Guadalupe Mountains National Park","url":"https://www.nps.gov/gumo/index.htm","name":"Guadalupe Mountains"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Texas"
          ,
          "Guadalupe Mountains"
          ]
        
        ,"latitude":
        31.923355102539062
        ,"longitude":
        -104.87138366699219
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"830A49CB-2E8F-4367-B740-CCBB69CC541A"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=6A810B9D-FB9E-434B-2215EE8E8AB6D5B3"
        
        ,"title":"Live View from Kolb Studio"
        
        ,"description":"In this north-facing view, the Battleship is in the center, and Havasupai Gardens (formerly known as Indian Garden) is visible - lower right, 3000 feet (915 m) below. Kolb Studio was the family home and photography studio of the Kolb Brothers, pioneer photographers at Grand Canyon. Verify that the time and date of the picture is current (upper left in image) Camera is hosted by Grand Canyon Conservancy. The image updates every minute."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"AZ","parkCode":"grca","designation":"National Park","fullName":"Grand Canyon National Park","url":"https://www.nps.gov/grca/index.htm","name":"Grand Canyon"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "webcam"
          ,
          "Grand Canyon"
          ,
          "Arizona"
          ,
          "scenic area"
          ,
          "Kolb Studio"
          ,
          "Grand Canyon Village"
          ,
          "overlook"
          ,
          "Kolb brothers"
          ]
        
        ,"latitude":
        36.057968036887054
        ,"longitude":
        -112.14272975921631
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"D21CD41A-6185-4C01-9CFE-CA4A6206487C"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46759-1DD8-B71B-0BB569DB4B595022"
        
        ,"title":"Gunnison Point"
        
        ,"description":"View from the South Rim Visitor Center looking towards the Gunnison Point overlook."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"CO","parkCode":"blca","designation":"National Park","fullName":"Black Canyon Of The Gunnison National Park","url":"https://www.nps.gov/blca/index.htm","name":"Black Canyon Of The Gunnison"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        38.55051803588867
        ,"longitude":
        -107.67362976074219
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"385900BF-0D62-4716-91F4-60B649EE1DF8"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46766-1DD8-B71B-0B357DD84CBF027C"
        
        ,"title":"Grizzly Ridge"
        
        ,"description":"View from near the South Rim Campground looking towards Grizzly Ridge on the North Rim."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"CO","parkCode":"blca","designation":"National Park","fullName":"Black Canyon Of The Gunnison National Park","url":"https://www.nps.gov/blca/index.htm","name":"Black Canyon Of The Gunnison"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        38.55051803588867
        ,"longitude":
        -107.67362976074219
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"68ACEE82-7705-442B-8CFF-043DE88053A8"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B467F4-1DD8-B71B-0B5F43AC14C1ABED"
        
        ,"title":"Elk Creek Webcam"
        
        ,"description":"View of Blue Mesa Reservoir and Elk Creek Campground."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"CO","parkCode":"cure","designation":"National Recreation Area","fullName":"Curecanti National Recreation Area","url":"https://www.nps.gov/cure/index.htm","name":"Curecanti"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        38.45899200439453
        ,"longitude":
        -107.148681640625
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"A003FFBB-39E9-42CF-A32C-97FAA50FE9FB"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=1F7197E2-FF96-18D7-0AC05A501EBA2571"
        
        ,"title":"Two Medicine 1"
        
        ,"description":"This view from near the Scenic Point Trailhead looks northwest to the Dawson Pass area. The mountains in the foreground are Sinopah Mountain on the left and Rising Wolf Mountain on the right. In the distance Lone Walker Mountain is just visible over the shoulder of Sinopah and Helen Mountain is just to the right of center. One of the best hikes in the park works its way up to Dawson Pass and then continues north along the spine of the Continental Divide to Pitakakan Pass. Five miles of high-elevation hiking that is second to none."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"MT","parkCode":"glac","designation":"National Park","fullName":"Glacier National Park","url":"https://www.nps.gov/glac/index.htm","name":"Glacier"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        48.68155288696289
        ,"longitude":
        -113.79934692382812
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"6E12DFE9-0ED5-48C2-8FF4-28D4BCCB9A70"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=1F8BD134-F13F-6775-FC760BA1C8567419"
        
        ,"title":"Many Glacier PTZ"
        
        ,"description":"Connectivity Test Many Glacier"
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"MT","parkCode":"glac","designation":"National Park","fullName":"Glacier National Park","url":"https://www.nps.gov/glac/index.htm","name":"Glacier"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        48.68155288696289
        ,"longitude":
        -113.79934692382812
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"D24CE82D-9D09-4E34-B6F5-BEEF5EA009A1"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=201E9B0D-C6C0-3D20-4C90C0CCFFDF6D73"
        
        ,"title":"Two Medicine PTZ"
        
        ,"description":"Connectivity Test"
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"MT","parkCode":"glac","designation":"National Park","fullName":"Glacier National Park","url":"https://www.nps.gov/glac/index.htm","name":"Glacier"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        48.68155288696289
        ,"longitude":
        -113.79934692382812
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"78F4F5F3-F3F7-442E-93EF-310FD356C741"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=60F9A007-ECDF-B311-EBCB9547FB36DBEE"
        
        ,"title":"Many Glacier"
        
        ,"description":"bandwidth test"
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"MT","parkCode":"glac","designation":"National Park","fullName":"Glacier National Park","url":"https://www.nps.gov/glac/index.htm","name":"Glacier"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        48.68155288696289
        ,"longitude":
        -113.79934692382812
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"06EA7639-E03E-4C1F-91F2-73756C147D11"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=64C657CB-DE31-7B14-4E3946885805BD67"
        
        ,"title":"Apgar 2"
        
        ,"description":"test image"
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"MT","parkCode":"glac","designation":"National Park","fullName":"Glacier National Park","url":"https://www.nps.gov/glac/index.htm","name":"Glacier"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        48.68155288696289
        ,"longitude":
        -113.79934692382812
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"0DC6C42F-A21F-417F-9E3F-E72156EA6C7D"
        
        ,"url":
        
        "https://www.nps.gov/subjects/air/webcams.htm?site=acad"
        
        ,"title":"McFarland Hill Air Quality"
        
        ,"description":"View from McFarland Hill looking northeast."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"ME","parkCode":"acad","designation":"National Park","fullName":"Acadia National Park","url":"https://www.nps.gov/acad/index.htm","name":"Acadia"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        44.3505973815918
        ,"longitude":
        -68.24622344970703
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"61AC48B0-74AF-4FE0-AFFB-EAEDA556EAFD"
        
        ,"url":
        
        "https://www.nps.gov/subjects/air/webcams.htm?site=wash"
        
        ,"title":"Washington, DC"
        
        ,"description":"A view from the Netherlands Carillon in Virginia looking east across the Potomac River to Washington, DC."
        
        ,"images":[]
        
        ,"relatedParks":[]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "DC"
          ,
          "weather"
          ,
          "webcam"
          ,
          "Virginia"
          ,
          "GWMP"
          ,
          "nama"
          ]
        
        ,"latitude":
        38.88818359375
        ,"longitude":
        -77.06922912597656
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"BF71576C-8CBC-412D-879D-5D2794B70BEA"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46B00-1DD8-B71B-0B873BEB52C089D2"
        
        ,"title":"Pea Ridge National Military Park Battlefield"
        
        ,"description":"Welcome to the Pea Ridge National Military Park Battlefield webcam. Wonderful view of the wide open expanse of the battlefield where 23,000 men fought on the second day of the battle, March 8, 1862."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"AR","parkCode":"peri","designation":"National Military Park","fullName":"Pea Ridge National Military Park","url":"https://www.nps.gov/peri/index.htm","name":"Pea Ridge"}]
        ,"status":"Inactive"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        -27.491764068603516
        ,"longitude":
        151.76365661621094
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"3C899E2E-B10F-40E1-8ECD-C98341D372AE"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B4680E-1DD8-B71B-0B480E341B280562"
        
        ,"title":"Rincon Mountain Visitor Center"
        
        ,"description":"View the picturesque scenery visitors see during their time in the Visitor Center. During the winter months the webcam will focus on the pond for potential wildlife and during the summer months, the webcam will focus on our routine javelina visitors next to the visitor center windows. (Live)"
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"AZ","parkCode":"sagu","designation":"National Park","fullName":"Saguaro National Park","url":"https://www.nps.gov/sagu/index.htm","name":"Saguaro"}]
        ,"status":"Inactive"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        -27.491764068603516
        ,"longitude":
        151.76365661621094
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"B33A82B9-AB59-4DCB-B462-D7240C0232AD"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46702-1DD8-B71B-0BF47E9DB5A237C2"
        
        ,"title":"Bartlett Cove Lagoon and Fairweather Range"
        
        ,"description":"Located adjacent to park headquarters, this serene location hosts a variety of wildlife. Watch for river otters, harbor seals, waterfowl, moose, black bears, and an endless cycle of tides. On clear days, summits of the the Fairweather Range are on spectacular display. The scenery changes by the minute ... click this image for a live view!"
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/4C668897-EB59-962C-8D308D3CEA13BD83.jpg"
        ,"credit":"NPS","altText":"Overcast day, gray-green water and distant pine trees flank left and right of lagoon","title":"Bartlett Cove Inner Lagoon Webcam Winter","description":"","caption":"Overcast day at the inner lagoon","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/4C668897-EB59-962C-8D308D3CEA13BD83.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/4C668897-EB59-962C-8D308D3CEA13BD83.jpg"}]}]
        
        ,"relatedParks":[{"states":"AK","parkCode":"glba","designation":"National Park & Preserve","fullName":"Glacier Bay National Park & Preserve","url":"https://www.nps.gov/glba/index.htm","name":"Glacier Bay"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        58.45193862915039
        ,"longitude":
        -135.775634765625
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"C1A5EC05-8D70-4D3C-BB3B-0EC76412EFFA"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46712-1DD8-B71B-0B4B99EDA0AE3CFC"
        
        ,"title":"Bartlett Cove Public Dock"
        
        ,"description":"The public-use dock in Glacier Bay National Park is a hub of activity. Sailboats, kayaks, park boats, large tour vessels, and smaller charter fishing boats come and go throughout the summer months. On a clear day the peaks of Excursion Ridge are visible. The activity changes by the minute ... click the image to see the action live!"
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/E9B36C2C-A042-82AA-E55F580C3E2BDFB9.jpg"
        ,"credit":"NPS","altText":"Green blue water and a dock with several boats covered in snow. Mountains and trees behind.","title":"Bartlett Cove Public Dock Feb Webcam","description":"","caption":"February view of the Bartlett Cove Public Dock","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/E9B36C2C-A042-82AA-E55F580C3E2BDFB9.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/E9B36C2C-A042-82AA-E55F580C3E2BDFB9.jpg"}]}]
        
        ,"relatedParks":[{"states":"AK","parkCode":"glba","designation":"National Park & Preserve","fullName":"Glacier Bay National Park & Preserve","url":"https://www.nps.gov/glba/index.htm","name":"Glacier Bay"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        58.45193862915039
        ,"longitude":
        -135.775634765625
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"42132057-E967-45D1-AE34-C353AC4B35B5"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46720-1DD8-B71B-0B4AA07A2DC9D393"
        
        ,"title":"Bartlett Cove Dock and Tlingit Trail"
        
        ,"description":"The Tlingit Trail follows the shoreline of Bartlett Cove from the Huna Tribal House to the Visitor Information Station and the public-use dock. Interpretive signs explain Tlingit culture and common native plants. A variety of vessels from around the world dock here, including an occasional floatplane. On a clear day the high peaks of the Beartrack Mountains can be seen rising above the forested Beardslee Islands in the distance. Click the image to see a live view!"
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/E9DA1C63-C6F3-76F4-B12A0903502A0B7E.jpg"
        ,"credit":"NPS","altText":"ATV tracks in deep snow, with the bartlett dock in background, and small patch of blue sky above","title":"Tlingit Trail February Webcam View","description":"","caption":"Tlingit Trail February Webcam View","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/E9DA1C63-C6F3-76F4-B12A0903502A0B7E.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/E9DA1C63-C6F3-76F4-B12A0903502A0B7E.jpg"}]}]
        
        ,"relatedParks":[{"states":"AK","parkCode":"glba","designation":"National Park & Preserve","fullName":"Glacier Bay National Park & Preserve","url":"https://www.nps.gov/glba/index.htm","name":"Glacier Bay"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        58.45193862915039
        ,"longitude":
        -135.775634765625
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"F7331A22-15F0-4B94-BDB7-5F5E46F31D51"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B4672D-1DD8-B71B-0B04336F55ECDD47"
        
        ,"title":"Lower Glacier Bay"
        
        ,"description":"Two hundred fifty years ago this entire area was covered with ice. Now it’s home to sea otters, humpback whales and orcas. Occasional ships enter Glacier Bay, rounding Point Carolus from Icy Strait; park visitors wander the shoreline, checking out tidepools at Halibut Point. Weather patterns over the Bay change by the minute … click this image to see a live view!"
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/E95F8F3A-F1C8-F7C1-614B0FD3EC9C22CF.jpg"
        ,"credit":"NPS","altText":"Lower bay of glacier bay on a cloudy february day, gray clouds above and smooth dark water below","title":"Lower Bay Feb Webcam Capture","description":"","caption":"February view of the Lower Bay","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/E95F8F3A-F1C8-F7C1-614B0FD3EC9C22CF.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/E95F8F3A-F1C8-F7C1-614B0FD3EC9C22CF.jpg"}]}]
        
        ,"relatedParks":[{"states":"AK","parkCode":"glba","designation":"National Park & Preserve","fullName":"Glacier Bay National Park & Preserve","url":"https://www.nps.gov/glba/index.htm","name":"Glacier Bay"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        58.45193862915039
        ,"longitude":
        -135.775634765625
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"33C89343-875A-4559-9235-1614926611AC"
        
        ,"url":
        
        "https://www.nps.gov/subjects/air/webcams.htm?site=maca"
        
        ,"title":"Green River Bluffs & Air Quality"
        
        ,"description":"This air quality camera shows the view to the north from the Green River Bluffs trail and also displays current air quality and weather data."
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/5F24185D-B727-6921-0A81705F39C0203B.jpg"
        ,"credit":"","altText":"A view of a river valley in the early spring.","title":"Green River Bluffs","description":"","caption":"An early spring view along the Green River Bluffs trail.","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/5F24185D-B727-6921-0A81705F39C0203B.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/5F24185D-B727-6921-0A81705F39C0203B.jpg"}]}]
        
        ,"relatedParks":[{"states":"KY","parkCode":"maca","designation":"National Park","fullName":"Mammoth Cave National Park","url":"https://www.nps.gov/maca/index.htm","name":"Mammoth Cave"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Mammoth Cave"
          ,
          "Green River Bluffs"
          ,
          "air quality"
          ]
        
        ,"latitude":
        37.193166
        ,"longitude":
        -86.103329
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"FA42094F-12A5-4DFF-B2D6-3FCB82AD60CD"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=88F5EE0B-04BA-2C9C-83226089ADFC8005"
        
        ,"title":"Crater Lake"
        
        ,"description":"Is Crater Lake visible today? Sometimes the lake is hidden by clouds, especially in the winter. This view looks north across the lake from the Sinnott Overlook at Rim Village (elevation 7,100 feet). On a clear day, it takes in Wizard Island, Llao Rock, and Mount Thielsen. Image updates every 4 to 6 minutes."
        
        ,"images":[]
        
        ,"relatedParks":[]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Sinnott Memorial Overlook"
          ,
          "rim village"
          ]
        
        ,"latitude":
        42.91053850144494
        ,"longitude":
        -122.14329875813563
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"7C6DC9CB-EF12-4B0F-A59E-0D303DDECFF4"
        
        ,"url":
        
        "https://www.nps.gov/subjects/air/webcams.htm?site=seki"
        
        ,"title":"Question 3"
        
        ,"description":"This webcam is looking at a landscape that is full of the smallest and tallest kinds of plants in the world! It is made up of many trees and shrubs that also provide home to a variety of wildlife."
        
        ,"images":[]
        
        ,"relatedParks":[]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        36.50761413574219
        ,"longitude":
        -118.5753402709961
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"A03BB935-8D2F-462D-9247-A07A19AEACAE"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=CEFC65FC-0BDC-6689-27F5F886BE7065F9"
        
        ,"title":"Question 4"
        
        ,"description":"Scientists in Hawaii have many cameras set up to watch these kinds of mountains that have lava flowing from them, even creating lava lakes. This camera is looking at Kīlauea, the youngest and most active of these landscape features on the island of Hawaiʻi. (Webcam courtesy of USGS Hawaiian Volcano Observatory)"
        
        ,"images":[]
        
        ,"relatedParks":[]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        19.610876083374023
        ,"longitude":
        -155.52749633789062
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"1BFE0DFB-705D-4EEB-852F-A7298D83DE28"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=CF8669EB-9852-5AAD-705D2BE551AA032E"
        
        ,"title":"Question 5"
        
        ,"description":"For two millions years, the Gunnison River has been carving this impressive landscape feature wearing away at the rock to make steep cliff walls lining it on both sides. This landscape feature gets up to 2,722 feet deep along this river, which continues to make it deeper."
        
        ,"images":[]
        
        ,"relatedParks":[]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        37.8383903503418
        ,"longitude":
        -80.9935302734375
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"F1FF95BC-6D9C-4AA0-99EF-8BCFFAE82961"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=CFCEAAF2-FF1A-DEEA-2A10E9B4F74C1B0E"
        
        ,"title":"Question 6"
        
        ,"description":"Look close at this webcam to see water flowing over the side of this mountain. The water falls from a height of 2,425 feet! But you can also find many of these landscape features not quite as tall."
        
        ,"images":[]
        
        ,"relatedParks":[]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        37.84857940673828
        ,"longitude":
        -119.55725860595703
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"284D198E-4375-4F0E-B99A-E18CC2AFA87C"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=D589367E-0DA6-55AF-291E6C39432F919E"
        
        ,"title":"Question 7"
        
        ,"description":"These very tall landscape features can be found throughout the country. Many in the Rocky Mountain range meet here at the Continental Divide, a place on North America that marks where rivers to its east flow to the Atlantic Ocean and rivers to its west flow to the Pacific Ocean."
        
        ,"images":[]
        
        ,"relatedParks":[]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        40.366722106933594
        ,"longitude":
        -105.57665252685547
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"37154959-7953-470B-BC35-6D7A0EDBAD43"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=D64DACC5-F652-9FF9-2FBD9F4AC2ECD576"
        
        ,"title":"Question 8"
        
        ,"description":"This kind of landscape covers thousands of square miles of the middle of the country. It can range from short to very tall grass bustling with wildlife. Here in Florrisant Valley, this landscape is decorated with petrified—or fossilized—tree stumps."
        
        ,"images":[]
        
        ,"relatedParks":[]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        38.91286087036133
        ,"longitude":
        -105.28096771240234
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"8124B842-86DD-4E06-81E9-D1C844021722"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=BA205F90-09A1-003B-ADC29C582C0BC355"
        
        ,"title":"Question 2"
        
        ,"description":"A volcano erupted about 7,770 years ago creating this giant crater. It has since filled with rain and snow to create this kind of landscape feature, which is currently the deepest in the country! There is even an island in it."
        
        ,"images":[]
        
        ,"relatedParks":[]
        ,"status":"Inactive"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        42.94121170043945
        ,"longitude":
        -122.13304901123047
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"64AE2D74-FB10-4E4F-AD32-E2367F10CBFC"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46AC7-1DD8-B71B-0B3C3482E2AE8259"
        
        ,"title":"Split Mountain"
        
        ,"description":"This webcam is located on the Quarry Exhibit Hall, home of the wall of dinosaur bones. It is pointed toward the highly eroded Split Mountain. You can also see numerous rock layers that are exposed and tilted on their side. Frequent viewers might catch the sun or moon rise over Split Mountain or maybe even a summer thunderstorm as it rolls through."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"CO,UT","parkCode":"dino","designation":"National Monument","fullName":"Dinosaur National Monument","url":"https://www.nps.gov/dino/index.htm","name":"Dinosaur"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        40.49203109741211
        ,"longitude":
        -108.99397277832031
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"FACD4F11-3F2D-4A6F-BFC4-FD08859266C9"
        
        ,"url":
        
        "https://www.nps.gov/subjects/air/webcams.htm?site=dino"
        
        ,"title":"Dinosaur National Monument"
        
        ,"description":"View from West Entrance | Looking Southwest"
        
        ,"images":[]
        
        ,"relatedParks":[]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        40.49203109741211
        ,"longitude":
        -108.99398803710938
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"21F3F327-0A4D-4CF6-A368-B9CE708D21BA"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=94CAA67B-ECA4-CF50-3D8E80A6A4134131"
        
        ,"title":"Chilkoot Pass South View Webcam"
        
        ,"description":"This webcam updates once daily. South facing view from Chilkoot Pass. During winter months the camera may be partly or entirely covered with snow."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"AK","parkCode":"klgo","designation":"National Historical Park","fullName":"Klondike Gold Rush National Historical Park","url":"https://www.nps.gov/klgo/index.htm","name":"Klondike Gold Rush"}]
        ,"status":"Inactive"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        59.36650085449219
        ,"longitude":
        -135.28973388671875
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"169E6101-7C2B-43B8-B4F6-911A2548EF12"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=951A5846-F1AA-8CCC-192762CA319FAA5F"
        
        ,"title":"Chilkoot Pass North View Webcam"
        
        ,"description":"This webcam updates once daily. North facing view from Chilkoot Pass. During the winter months the camera may be partly or entirely covered with snow."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"AK","parkCode":"klgo","designation":"National Historical Park","fullName":"Klondike Gold Rush National Historical Park","url":"https://www.nps.gov/klgo/index.htm","name":"Klondike Gold Rush"}]
        ,"status":"Inactive"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        59.36650085449219
        ,"longitude":
        -135.28973388671875
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"AEB93011-026D-4A45-AF8F-4D7394483191"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46270-1DD8-B71B-0BE9D202820A8990"
        
        ,"title":"Kohm Yah-mah-nee Visitor Center webcam"
        
        ,"description":"This is the view looking north from the Kohm Yah-mah-nee Visitor Center at Lassen Volcanic National Park. The peak to the left is Mt. Diller and Pilot Pinnacle sits to its right. On cool days, it is possible to see steam rising from the Sulphur Works hydrothermal area."
        
        ,"images":[]
        
        ,"relatedParks":[]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Lassen Volcanic National Park"
          ,
          "webcam"
          ,
          "volcanoes"
          ,
          "snow"
          ]
        
        ,"latitude":
        40.43592834472656
        ,"longitude":
        -121.53382873535156
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"80E03803-9EF4-4778-B9B7-A962436538F7"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=51F606E1-BAF1-472B-2BC7D21ED4CDA08E"
        
        ,"title":"Kennecott Mill and Mt. Blackburn"
        
        ,"description":"This is the view out a window on the top floor of the General Store in Kennecott, looking to the north. On the right, the historic Kennecott mill building climbs fourteen stories up the mountainside above the railroad trestle, leaching plant and power plant. One hundred years ago, the mine was in full swing and this area was a hive of activity. On the left side of this view, behind the tailing piles, lies the Kennicott Glacier, and above it all, on the distant skyline, looms the blindingly-white, snow-covered Mt. Blackburn -- at 16,390 feet the third-highest peak in the park."
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/E4CA00CE-0C22-9E7F-11355AC3D84B705A.jpg"
        ,"credit":"NPS","altText":"Kennecott Mill and Mt. Blackburn","title":"Kennecott Mill and Mt. Blackburn","description":"","caption":"Kennecott Mill and Mt. Blackburn","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/E4CA00CE-0C22-9E7F-11355AC3D84B705A.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/E4CA00CE-0C22-9E7F-11355AC3D84B705A.jpg"}]}]
        
        ,"relatedParks":[{"states":"AK","parkCode":"wrst","designation":"National Park & Preserve","fullName":"Wrangell - St Elias National Park & Preserve","url":"https://www.nps.gov/wrst/index.htm","name":"Wrangell - St Elias"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        61.48714828491211
        ,"longitude":
        -142.8790740966797
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"C2A0A6A9-90A4-4473-840B-FFE2005256B7"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=5224B014-CBDE-5E14-DEF34EBF65E78E88"
        
        ,"title":"Kennicott Glacier and the Chugach Range"
        
        ,"description":"This view is from the old Dairy Barn in Kennecott, looking south to the Chugach Mountains. The mounds in the foreground are the rock-covered terminus of the Kennicott Glacier. Beyond the glacier and its meltwater lake lie the town of McCarthy and the vast expanse of the Chitina river valley. The scene changes throughout the day depending on weather and lighting: watch for dramatic summer cumulus clouds building over the mountains, rain squalls moving across the valley, windstorms blowing glacial loess off the river bars, and sunlight glinting off bare ice faces on the glacier."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"AK","parkCode":"wrst","designation":"National Park & Preserve","fullName":"Wrangell - St Elias National Park & Preserve","url":"https://www.nps.gov/wrst/index.htm","name":"Wrangell - St Elias"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        61.48714828491211
        ,"longitude":
        -142.8790740966797
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"20208792-DA62-4FF9-B023-495B57B87379"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=F91F11B2-C421-28C4-16C717FF1FF2CB72"
        
        ,"title":"Wrangell Mountains from Park Headquarters"
        
        ,"description":"This is the view from our Visitor Center at Park Headquarters in Copper Center, looking east across the Copper River Valley to the Wrangell Mountains. From this vantage point, Mt. Drum (12,010 ft) and Mt. Sanford (16,237 ft) are visible. Watch the colors in this scene change throughout the seasons: the brilliant yellows and golds of the aspens in the fall, followed by stark white snows and pink mountain alpenglow during the cold days of winter, and then the greening of the whole landscape as the days warm and lengthen in the springtime."
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/04DA20E6-DEC0-69D0-D7E27A2B5E1605FA.jpg"
        ,"credit":"","altText":"Mt. Drum from Park Headquarters","title":"Mt. Drum from Park Headquarters","description":"","caption":"Mt. Drum from Park Headquarters","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/04DA20E6-DEC0-69D0-D7E27A2B5E1605FA.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/04DA20E6-DEC0-69D0-D7E27A2B5E1605FA.jpg"}]}]
        
        ,"relatedParks":[{"states":"AK","parkCode":"wrst","designation":"National Park & Preserve","fullName":"Wrangell - St Elias National Park & Preserve","url":"https://www.nps.gov/wrst/index.htm","name":"Wrangell - St Elias"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        62.02129596787539
        ,"longitude":
        -145.3623275756836
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"1AA7EDFE-B839-4DA8-8538-2B98930AE7A6"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B465AC-1DD8-B71B-0B12FBD542C257E8"
        
        ,"title":"Alpine Tundra Webcam"
        
        ,"description":"Have you ever wanted to check conditions for hiking, skiing, and other outdoor activities along the Denali Park Road corridor west of Park Headquarters? A new Alpine Tundra webcam, perched high atop a shoulder of Mount Healy along the park’s Outer Range, offers a westward perspective for several miles beyond the entrance area. Snow and extreme conditions may obscure the view at times. The image is set to refresh several times each minute."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"AK","parkCode":"dena","designation":"National Park & Preserve","fullName":"Denali National Park & Preserve","url":"https://www.nps.gov/dena/index.htm","name":"Denali"}]
        ,"status":"Inactive"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        63.73183059692383
        ,"longitude":
        -148.89198303222656
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"327289A9-3BF7-471F-9A6C-054DFC719833"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46B18-1DD8-B71B-0B6741D09D58BA2A"
        
        ,"title":"Rock Harbor Webcam"
        
        ,"description":"Overlooking the Visitor Center and RANGER III dock at Snug Harbor, this camera view provides a vantage point to view the various small islands scattered about the Rock Harbor channel. On a clear day, the water tower at Mott Island is visible and the heights of Mount Saginaw tower in the background. The webcam is active only during the summer months when power is available to it (typically from the beginning of May until late September)."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"MI","parkCode":"isro","designation":"National Park","fullName":"Isle Royale National Park","url":"https://www.nps.gov/isro/index.htm","name":"Isle Royale"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Rock Harbor"
          ]
        
        ,"latitude":
        48.14713878126583
        ,"longitude":
        -88.4835910480398
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"B821B665-699C-4901-9D02-1BA6FE6957A2"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=C97C8431-A655-D5A3-13742820024E5899"
        
        ,"title":"Windigo Webcam"
        
        ,"description":"Perched atop the Windigo Visitor Center, the Windigo Webcam offers a sweeping view of Washington Harbor. You might find a moose swimming or foraging through these sheltered Lake Superior waters, or catch a colorful sunset in all its brilliance on a late summer night. The webcam is active only during the summer months when power is available to it (typically from the beginning of May until late September)."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"MI","parkCode":"isro","designation":"National Park","fullName":"Isle Royale National Park","url":"https://www.nps.gov/isro/index.htm","name":"Isle Royale"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Windigo"
          ,
          "Lake Superior"
          ]
        
        ,"latitude":
        47.91179586424437
        ,"longitude":
        -89.15719986220043
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"2A926347-1AA5-497D-8832-9D263AB82D10"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=0EE1CA55-EE60-AA3D-094562D38610B700"
        
        ,"title":"Greenstone Ridge Webcam"
        
        ,"description":"From one of the highest Isle Royale peaks at 1133 feet above sea level (roughly 530 feet above Lake Superior), the Greenstone Ridge Webcam at the peak of Mount Ojibway gazes across the spine of the Greenstone Ridge from the fire tower. It captures a southwest vantage point, a swath from Moskey Basin on the left to Sargent Lake on the right. The webcam is solar powered and communicates multiple times per day, year-round, when power and communications infrastructure allows."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"MI","parkCode":"isro","designation":"National Park","fullName":"Isle Royale National Park","url":"https://www.nps.gov/isro/index.htm","name":"Isle Royale"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Mount Ojibway"
          ,
          "Greenstone Ridge"
          ,
          "Isle Royale National Park"
          ,
          "Michigan"
          ,
          "Midwest"
          ]
        
        ,"latitude":
        48.10923852171427
        ,"longitude":
        -88.60593729005527
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"B108497F-22B7-40CF-B000-07C7DCEF3620"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=41516A2F-B710-0362-EFEECACAA00F1EF0"
        
        ,"title":"Tobin Harbor Webcam"
        
        ,"description":"Tobin Harbor is located on the northeast end of Isle Royale, near Rock Harbor. In the early 20th century, it was a popular summer haven for vacationers. Visitors today enjoy the peaceful paddling and boating opportunities it offers. The webcam is active only during the summer months when power is available to it (typically from the beginning of May until late September)."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"MI","parkCode":"isro","designation":"National Park","fullName":"Isle Royale National Park","url":"https://www.nps.gov/isro/index.htm","name":"Isle Royale"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Isle Royale National Park"
          ,
          "webcam"
          ,
          "Tobin Harbor"
          ,
          "Seaplane"
          ]
        
        ,"latitude":
        48.14712749400434
        ,"longitude":
        -88.48716459072301
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"972EFB2C-8C32-4E97-9515-2A39B0922443"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=56F5E0DC-9116-8502-7F673D0FF0B8378A"
        
        ,"title":"Live Haleakalā Crater Cam"
        
        ,"description":"Check out the latest viewing conditions of Haleakalā Crater via our webcam at Puʻuʻulaʻula located at the summit."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"HI","parkCode":"hale","designation":"National Park","fullName":"Haleakalā National Park","url":"https://www.nps.gov/hale/index.htm","name":"Haleakalā"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Haleakalā"
          ,
          "summit"
          ,
          "crater"
          ,
          "Maui"
          ,
          "Hawaii"
          ]
        
        ,"latitude":
        20.707927703857422
        ,"longitude":
        -156.1599884033203
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"84CB5626-F449-4B0B-9AE6-F57C6A292E54"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46231-1DD8-B71B-0BF568598E77E76B"
        
        ,"title":"Nez Perce National Historical Web Cam - Spalding Site"
        
        ,"description":"The park's main visitor center sit's on a hill overlooking the Clearwater River. In the Nez Perce language, this place is called ?iyíwewiy. In English we call it the Spalding site. It was at this location that Henry Spalding set up his mission in the 1830s. Enjoy!"
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"ID,MT,OR,WA","parkCode":"nepe","designation":"National Historical Park","fullName":"Nez Perce National Historical Park","url":"https://www.nps.gov/nepe/index.htm","name":"Nez Perce"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        46.44329833984375
        ,"longitude":
        -116.82151794433594
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"65B3B2A4-F6DC-4636-AAF4-07869B18CD4E"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=81B46242-1DD8-B71B-0BEBAC07B8B5AC8C"
        
        ,"title":"Nez Perce National Historical Park - Big Hole National Battlefield Webcam"
        
        ,"description":"The web cam at the Big Hole battlefield is attached to the visitor center and looks northeast across the battlefield. Dominating the background is Battle Mountain. On the slopes of this hill, the Nez Perce kept their horses. On the flat at the base of Battle Mountain is the north fork of the Big Hole River. If you look off to the right, you can see the tipi poles that mark and memorialize the village site that was attacked by Colonel John Gibbon early on the morning of August 10, 1877."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"ID,MT,OR,WA","parkCode":"nepe","designation":"National Historical Park","fullName":"Nez Perce National Historical Park","url":"https://www.nps.gov/nepe/index.htm","name":"Nez Perce"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[]
        
        ,"latitude":
        46.44329833984375
        ,"longitude":
        -116.82151794433594
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"74BB4756-483E-40FA-A62F-B900EBD836EF"
        
        ,"url":
        
        "https://www.nps.gov/media/webcam/view.htm?id=859C0EBC-9950-5435-9BC069D71845B0CD"
        
        ,"title":"Mott Island Dock Webcam"
        
        ,"description":"Mott Island, Isle Royale National Park's summer headquarters, is the nucleus of operations on the island. It is a barrier island located on the south side of Rock Harbor Channel. The webcam is active on real-time intervals during the summer months when power is available to it, and communicating multiple times per day during the winter when solar power allows."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"MI","parkCode":"isro","designation":"National Park","fullName":"Isle Royale National Park","url":"https://www.nps.gov/isro/index.htm","name":"Isle Royale"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":false
        ,"tags":[
          "Mott Island"
          ,
          "Isle Royale National Park"
          ,
          "Michigan"
          ,
          "Midwest"
          ]
        
        ,"latitude":
        48.10713577270508
        ,"longitude":
        -88.54732513427734
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"AE0768FD-5A7A-4025-8399-8615791B4857"
        
        ,"url":
        
        "https://www.nps.gov/pevi/learn/photosmultimedia/view-from-the-top.htm#AE0768FD-5A7A-4025-8399-8615791B4857"
        
        ,"title":"Monument Cam Harbor View"
        
        ,"description":"View from the Observation Deck of the Memorial, over 317 feet above Lake Erie, looking toward the southwest, west, and north. View rotates on loop highlighting various features in those views. Such as the Put-in-Bay Harbor, Put-in-Bay downtown, the west end of South Bass Island, Gibraltar, Rattlesnake, Middle Bass, North Bass, and Green Islands. Also visible is the location of the Battle of Lake Erie out between Rattlesnake and West Sister Islands. You can watch an amazing sunset over Lake Erie from anywhere in the world."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"OH","parkCode":"pevi","designation":"Memorial","fullName":"Perry's Victory & International Peace Memorial","url":"https://www.nps.gov/pevi/index.htm","name":"Perry's Victory & International Peace"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":true
        ,"tags":[
          "Lake Erie"
          ,
          "webcam"
          ,
          "PIB"
          ,
          "Put-in-Bay"
          ,
          "sunset"
          ,
          "Battle of Lake Erie"
          ,
          "BLE"
          ,
          "Perry's Victory and International Peace Memorial"
          ]
        
        ,"latitude":
        null
        ,"longitude":
        null
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"628B201A-3419-41E5-80F7-650CA7817173"
        
        ,"url":
        
        "https://www.nps.gov/pevi/learn/photosmultimedia/view-from-the-top.htm#628B201A-3419-41E5-80F7-650CA7817173"
        
        ,"title":"Monument Cam Sunrise View"
        
        ,"description":"Watch as the sunrises in the morning. This webcam shows views from the southwest to the east. The camera is on a loop that highlights selected features in this range of view such as the East Point of South Bass, Kelleys Island, Ballast Island, Middle Island, the most southern part of Canada, and the Marblehead Peninsula with the Marblehead lighthouse, and the rides of Cedar Point in the distance."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"OH","parkCode":"pevi","designation":"Memorial","fullName":"Perry's Victory & International Peace Memorial","url":"https://www.nps.gov/pevi/index.htm","name":"Perry's Victory & International Peace"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":true
        ,"tags":[
          "Put-in-Bay"
          ,
          "sunrise"
          ,
          "Perry's Victory and International Peace Memorial"
          ,
          "Middle Island"
          ,
          "Canada"
          ,
          "Kellys Island"
          ,
          "Marblehead Lighthouse"
          ,
          "PEVI"
          ,
          "Web Cam"
          ]
        
        ,"latitude":
        41.654064299945176
        ,"longitude":
        -82.81127750873566
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"CEA2A8E8-8EA0-485E-A1BC-1E99070F6DE4"
        
        ,"url":
        
        "https://www.nps.gov/yose/learn/photosmultimedia/webcams.htm#CEA2A8E8-8EA0-485E-A1BC-1E99070F6DE4"
        
        ,"title":"Yosemite Falls"
        
        ,"description":"Yosemite Falls, a combination of Upper Yosemite Fall, Middle Cascades, and Lower Yosemite Fall, has a total height of 2,425 feet. In May, you may see Pacific dogwood in bloom just below the waterfall."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"CA","parkCode":"yose","designation":"National Park","fullName":"Yosemite National Park","url":"https://www.nps.gov/yose/index.htm","name":"Yosemite"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":true
        ,"tags":[
          "Yosemite"
          ,
          "Yosemite Falls"
          ,
          "Yosemite Valley"
          ,
          "Yosemite Conservancy"
          ,
          "Yosemite National Park"
          ,
          "dogwood"
          ]
        
        ,"latitude":
        37.74312153841877
        ,"longitude":
        -119.59786105162493
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"FFCB0F3A-D7C6-407B-8200-B1E0B257817F"
        
        ,"url":
        
        "https://www.nps.gov/yose/learn/photosmultimedia/webcams.htm#FFCB0F3A-D7C6-407B-8200-B1E0B257817F"
        
        ,"title":"Half Dome"
        
        ,"description":"This view of Yosemite Valley from just east of Yosemite Village gives a sense of conditions of the floor of Yosemite Valley. This webcam image is provided courtesy of Yosemite Conservancy."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"CA","parkCode":"yose","designation":"National Park","fullName":"Yosemite National Park","url":"https://www.nps.gov/yose/index.htm","name":"Yosemite"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":true
        ,"tags":[
          "Half Dome"
          ,
          "Yosemite"
          ,
          "Yosemite Conservancy"
          ,
          "Yosemite National Park"
          ,
          "Yosemite Valley"
          ,
          "meadow"
          ]
        
        ,"latitude":
        37.746136678928536
        ,"longitude":
        -119.58155107573475
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"27DB7F15-AE07-45C3-87FA-B64935B93054"
        
        ,"url":
        
        "https://www.nps.gov/shen/learn/photosmultimedia/bigmeadows_livecam.htm#27DB7F15-AE07-45C3-87FA-B64935B93054"
        
        ,"title":"Big Meadows Live"
        
        ,"description":"Enjoy a live view of the spectacular high altitude and ever-changing Big Meadows in Shenandoah National Park."
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"VA","parkCode":"shen","designation":"National Park","fullName":"Shenandoah National Park","url":"https://www.nps.gov/shen/index.htm","name":"Shenandoah"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":true
        ,"tags":[]
        
        ,"latitude":
        null
        ,"longitude":
        null
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"00634279-7860-45C9-81AA-1E7226FB959A"
        
        ,"url":
        
        "https://www.nps.gov/shen/learn/photosmultimedia/shenvalleycam.htm#00634279-7860-45C9-81AA-1E7226FB959A"
        
        ,"title":"The Shenandoah Valley Webcam"
        
        ,"description":"A spectacular, streaming view looking east across a rural landscape to the Blue Ridge Mountains and Shenandoah National Park."
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/30F319FC-E35C-713F-FC3D30081EFC7AEE.jpg"
        ,"credit":"NPS","altText":"A layered view showing a rural landscape in the foreground and mountains in the background.","title":"Shenandoah Valley Web Cam","description":"","caption":"The view looking east towards the Blue Ridge from the Shenandoah Valley.","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/30F319FC-E35C-713F-FC3D30081EFC7AEE.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/30F319FC-E35C-713F-FC3D30081EFC7AEE.jpg"}]}]
        
        ,"relatedParks":[{"states":"VA","parkCode":"shen","designation":"National Park","fullName":"Shenandoah National Park","url":"https://www.nps.gov/shen/index.htm","name":"Shenandoah"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":true
        ,"tags":[
          "Shenandoah National Park"
          ,
          "Shenandoah"
          ,
          "Shenandoah National Park Webcam"
          ,
          "Shenandoah Webcam"
          ,
          "Shenandoah Valley Webcam"
          ]
        
        ,"latitude":
        38.63793587969597
        ,"longitude":
        -78.47156266446382
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"BB9BD5B7-C8C2-47F6-A2F9-500EBBF350A0"
        
        ,"url":
        
        "https://www.nps.gov/caha/planyourvisit/bonner-bridge-pier.htm#BB9BD5B7-C8C2-47F6-A2F9-500EBBF350A0"
        
        ,"title":"Bonner Bridge Pier"
        
        ,"description":"Bonner Bridge Pier"
        
        ,"images":[]
        
        ,"relatedParks":[{"states":"NC","parkCode":"caha","designation":"National Seashore","fullName":"Cape Hatteras National Seashore","url":"https://www.nps.gov/caha/index.htm","name":"Cape Hatteras"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":true
        ,"tags":[]
        
        ,"latitude":
        35.766854156312675
        ,"longitude":
        -75.52691173612402
        ,"geometryPoiId":""
        
        ,"credit":""
        
        
        }
        ,
        {
        
        "id":"20225A82-5E33-4195-B69F-0D0BB9183DA6"
        
        ,"url":
        
        "https://www.nps.gov/stea/learn/photosmultimedia/webcams.htm#20225A82-5E33-4195-B69F-0D0BB9183DA6"
        
        ,"title":"Roundhouse and Turntable EarthCam"
        
        ,"description":"The EarthCam set up at Steamtown National Historic Site provides an aerial view of the park's Roundhouse and Turntable complex. Various pieces of equipment are on display within the complex. Buildings within the city of Scranton can be seen in the backdrop. Turntables were primarily used by railroads during the steam era. Locomotives awaiting light-duty maintenance and repairs were moved from yard tracks onto the turntable. The turntable operator would then use controls to operate the electric motors that powered the turntable to rotate, aligning the turntable tracks with those for an available maintenance bay in the roundhouse. When servicing and minor repairs were complete, the locomotive would back onto the aligned turntable, and be rotated to return to revenue service or await a new assignment."
        
        ,"images":[{
        "url":"https://www.nps.gov/common/uploads/cropped_image/3F875A21-0623-A76F-F017E2B04ABD6227.jpg"
        ,"credit":"","altText":"Aerial view of Steamtown's turntable complex with 5 trains on display","title":"Roundhouse and Turntable Webcam","description":"","caption":"In partnership with EarthCam, the NPS is excited to offer this LIVE webcam of Steamtown's Turntable","crops":[{"aspectRatio":1.78,"url":"https://www.nps.gov/common/uploads/cropped_image/primary/3F875A21-0623-A76F-F017E2B04ABD6227.jpg"},{"aspectRatio":1.33,"url":"https://www.nps.gov/common/uploads/cropped_image/secondary/3F875A21-0623-A76F-F017E2B04ABD6227.jpg"}]}]
        
        ,"relatedParks":[{"states":"PA","parkCode":"stea","designation":"National Historic Site","fullName":"Steamtown National Historic Site","url":"https://www.nps.gov/stea/index.htm","name":"Steamtown"}]
        ,"status":"Active"
        
        ,"statusMessage":""
        
        ,"isStreaming":true
        ,"tags":[
          "webcam"
          ,
          "Steamtown"
          ,
          "railroad"
          ,
          "train"
          ,
          "Roundhouse"
          ,
          "Turntable"
          ,
          "Steamtown NHS"
          ,
          "Steamtown National Historic Site"
          ]
        
        ,"latitude":
        41.40699730072372
        ,"longitude":
        -75.67165590057641
        ,"geometryPoiId":"f4dd4ae2-fa43-5577-8688-67acf981a26e"
        
        ,"credit":""
        
        
        }
        
        ]);
    const [liveVideos, setLiveVideos] = useState([]);

    //fetch is commented out because this is  hard coded for API reasons
    useEffect(() => {
            // fetch('https://developer.nps.gov/api/v1/webcams?limit=75&api_key=cHVc4fkkvOJ7JGO1h6SPHajDtt9NSmef3cH9oBwH')
            // .then((results) => results.json())
            // .then((data) => setAllVideos(data.data))
            filterLive()
    },[allVideos])

    function filterLive (){
        let videos = allVideos.filter(x => x.isStreaming === true)
        setLiveVideos(videos)
    }

    
        return (
            <div className='feed'>
                <div>
                    {liveVideos.map((video,i) =>{
                        return(
                            <div key={i}>
                                <div className="card m-2 liveCards">
                                    <div className='card-header'>
                                        <strong className=" mx-2 card-title">{video.title}</strong>
                                    </div>
                                    <div className="card-body row overflow-scroll" >
                                        <p>{video.description}</p>
                                    </div>
                                    <a href={video.url} target='_blank' className="btn btn-dark row">View</a>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

export default LiveVideos;