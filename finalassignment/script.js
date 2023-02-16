mapboxgl.accessToken =
  "pk.eyJ1IjoieWlmYW53YW5nMSIsImEiOiJjbGNwYnYzMm0yNHFrM3dtdHI0ejhzOXBjIn0.EmepsENMLW_02Jm4PeLlig";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/yifanwang1/cldouxrbs001x01p5lx5yb77h", //mapbox://styles/mapbox/dark-v11,mapbox://styles/mapbox/streets-v12
  center: [-1.569932, 53.114442],
  zoom: 9
});

map.on("load", () => {
  map.addSource("listedbuildings", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: { Name: "PARK HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62233090627752, 53.22586450124317]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GROTTO EAST OF CALKE ABBEY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45301881460311, 52.8005894646148]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CALKE ABBEY", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.45602128443372, 52.79967033683855]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE MARKET HOTEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43030147664477, 53.23576503361801]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WILLINGTON BRIDGE (EXTENDS INTO PARISH OF REPTON)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56139425992916, 52.84796654252384]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD HALL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5123553854091, 52.85677393609443]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TWYFORD HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.51496422152621, 52.85189330782359]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Andrew", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.5152219678044, 52.8534908646334]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Moor View", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63050398335361, 53.22474851030837]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Boundary wall enclosing gardens to properties to the north side of High Street to the west of Item 48",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47536214193204, 53.30284694802501]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ALL SAINTS", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.42907646415989, 53.09786157508296]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Formerly the Building to the north-east of the Hall",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47446038615605, 53.30273203769585]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ICE HOUSE IN HASSOP PARK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66956199125765, 53.24419664899084]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Former Dronfield Methodist Church",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47502749543544, 53.30199154423931]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE DCC LIBRARY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47625721650588, 53.30205087210852]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BALLROOM AND RANGE OF OUTBUILDINGS AT HASSOP HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66902087209382, 53.24711769892723]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "TWO FARM BUILDINGS TO EAST OF NORWOOD FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.45926655943331, 53.31189880816193]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WHITEHOUSE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60251224594413, 52.85253420478266]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HALLOWES GOLF CLUBHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46157566412402, 53.29298783680138]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GOLF CLUB LOCKER ROOM TO HALLOWES GOLF CLUBHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.46123186995742, 53.29288740991763]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SOUTH LODGE TO HASSOP HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6680017008983, 53.24325870084714]
          }
        },
        {
          type: "Feature",
          properties: { Name: "31 Burton Road", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55257205196811, 52.83806310861359]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RAILWAY BRIDGE TO THE SOUTH EAST OF DALE BRIDGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42389297038292, 53.10313199564753]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Pear Tree Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41893634404794, 53.08963330765909]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ZION COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44034118105398, 53.09456349510528]
          }
        },
        {
          type: "Feature",
          properties: { Name: "68 AND 70, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.355193773654, 53.31099621408288]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BROOK LYNN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54745257733785, 52.84072258428191]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "BOUNDARY WALL AND TWO PAIRS OF GATE PIERS AT WINGFIELD HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.44008383395242, 53.09503589689579]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RECTORY COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35225367754019, 53.31278245712162]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "The Parish Church of St Peter and St Paul",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.35301408980304, 53.31325837291016]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Saviour", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.51196391073628, 52.83477965471923]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GARDEN TEMPLE AT FOREMARK HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.50302537528552, 52.83393769099132]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SHAW WOOD FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42850450519537, 53.08801940950003]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SPRING HEAD AT OS 330262", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.51047765927871, 52.83317307023218]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Wall and balustrade at south end of lake at Foremarke Hall",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.50771539887003, 52.83624953114721]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FORMER CRUCK BARN AT GOSFORTH FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49226539536296, 53.30512502034558]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "WALL BETWEEN WINGFIELD STATION FROM END OF THE FRONT BOUNDARY TO THE STATIONMASTER'S HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42654287129086, 53.09735420935971]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE MANSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47079417974976, 53.30092118655265]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Wingfield Station", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.42634343856395, 53.09756024512768]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Thurlowbooth Cottages", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4935413113747, 53.07945608989677]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BRIDGE ON MAIN APPROACH TO CHATSWORTH HOUSE",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.61621042997127, 53.22803352484993]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HONEYMOON COTTAGE\r\nSHEAF COTTAGE\r\nSHEAF HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48127336187133, 53.08691688857971]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PARK HEAD FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4624002948277, 53.08734919175237]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FORMER GAME LARDER", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61085608377466, 53.22988452984295]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Bungalow", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62851120195477, 53.22482322296171]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HARDWICK HALL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.30878394995379, 53.16872796227229]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GROUP OF SIX STATUES IN THE GARDENS OF HARDWICK HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.30899268654981, 53.16783926747441]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RANGE OF OUTBUILDINGS AND STABLES, AND WALLS ENCLOSING A COURTYARD TO SOUTH OF HARDWICK HALL",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.3079682034682, 53.16643102549218]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "DORIC COLUMN AND THE BUST OF SIXTH DUKE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60982481398824, 53.22334057237769]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Edensor House", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6273298827128, 53.22632066583555]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Sunny Bank and Rose Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62783111092694, 53.22552222852332]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE GRANGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.31137123371628, 53.17624877134747]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Hardwick Inn", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.31476748686519, 53.16497825612743]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Stainsby Mill", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.31967226901974, 53.18304728386549]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Rock Villa", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62853765847581, 53.22522780002227]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HALL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.28522830642375, 53.17906812781584]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HARDWICK OLD HALL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.31113750543012, 53.16841802486066]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE YEWS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62522708001262, 53.22526239397855]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHATSWORTH ESTATE OFFICE AND VILLAGE INSTITUTE",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62677299413848, 53.22835038929301]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Gate piers to east of Barlborough Hall",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.28417613324188, 53.29907859332626]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "CHEST TOMB TO SIR JOSEPH PAXTON 40 METRES SOUTH OF CHURCH OF ST PETER",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62625840772866, 53.22505569168426]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LOSCOE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.53171387785805, 52.81878106774517]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ECKINGTON CHAPEL OF EASE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35120651521359, 53.31663756545853]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "NO 22 KIRBY HOLT AND ATTACHED WALLS, GATE PIERS AND RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.52585829369577, 52.83514431005624]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RIDGEWAY FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.53694905207972, 52.83182572279804]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ENGINE HOUSE AT EASTON HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55126706212483, 52.83597318110088]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE GOTHICK TEMPLE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.34578591512881, 53.30195647199315]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FARM OUTBUILDING TO THE EAST OF THE GARDENER'S HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34754331990271, 53.30282894963444]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DOVECOTE AT BROOK FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5254980863441, 52.83524926009299]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Dairy Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.34715988490518, 53.30238641567871]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "K6 TELEPHONE KIOSK OUTSIDE THE POST OFFICE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62508882254799, 53.22565746604245]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STATUE AND FOUNTAIN 40 METRES SOUTH EAST OF RENISHAW HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34395048541804, 53.30227006839618]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RENISHAW HALL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.34459874036344, 53.3025157292225]
          }
        },
        {
          type: "Feature",
          properties: { Name: "100-106, HIGH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54636583892323, 52.83560671978051]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "NUMBERS 24-28 (EVEN) INCLUDING PREMISES OCCUPIED BY SCARLETT RIBBONS, NEW WIZARD AND WOODHEADS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.35585402382859, 53.31000201404832]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "TUDOR LODGE AND ATTACHED GARDEN WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.5486440045392, 52.83819398080842]
          }
        },
        {
          type: "Feature",
          properties: { Name: "46, HIGH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54820639265938, 52.83704067384007]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GREEN HALL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.36461675027519, 53.30807970919697]
          }
        },
        {
          type: "Feature",
          properties: { Name: "43 Low Pavement", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42893375831646, 53.23509833039269]
          }
        },
        {
          type: "Feature",
          properties: { Name: "39, LOW PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42867705232474, 53.23508168071196]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "The Old Priory, attached walls and gate piers, Repton School",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.55101440137429, 52.84133889720007]
          }
        },
        {
          type: "Feature",
          properties: { Name: "3, LOW PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42790848202366, 53.23501554384107]
          }
        },
        {
          type: "Feature",
          properties: { Name: "13, LOW PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42735751559203, 53.23496846050209]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Priory gateway, precinct walls, the Tithe Barn and The Lodge, Repton School",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.55089735632333, 52.84067273772634]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARN AT STEETLEY FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.18484300392374, 53.30311590643286]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WHITWELL HALL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.21232203004483, 53.28661747988866]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LAWN BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.53739010736866, 52.82363967032777]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCH OF THE IMMACULATE CONCEPTION",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.31972745858016, 53.30253088329514]
          }
        },
        {
          type: "Feature",
          properties: { Name: "44, HIGH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.21073522223334, 53.28562719259691]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CANAL BRIDGE AT OS 321300", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.52447930274915, 52.86707278398695]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "REPTON HALL WITH PRIOR OVERTONS TOWER, REPTON SCHOOL",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.55112080092215, 52.84199334694049]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE CHAPEL, REPTON SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55330699862671, 52.84022336463031]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WAR MEMORIAL AT REPTON SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5507344188482, 52.84134912083498]
          }
        },
        {
          type: "Feature",
          properties: { Name: "69 AND 71, LOW PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43042182082878, 53.2352596181933]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NORTH WEST BOUNDARY WALLS AT CROMFORD WHARF",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.55280848790648, 53.10988044807766]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NORTH EAST BOUNDARY WALLS AT CROMFORD WHARF",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.55379026487453, 53.11002220975185]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "EGYPTIAN STATUE BEHIND THE DUKES GREENHOUSE 3 METRES FROM THE CORNER",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.61004334187805, 53.2280541970558]
          }
        },
        {
          type: "Feature",
          properties: { Name: "13 AND 15, BEETWELL STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42658257919172, 53.23409183986148]
          }
        },
        {
          type: "Feature",
          properties: { Name: "12, 14 AND 16, THE COMMON", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47866131779801, 53.08223214965543]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Mary", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.48184212506886, 53.08804788813359]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GROUP OF STATUES AND VASES ON LAWN SOUTH OF CHATSWORTH HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.61135343469245, 53.22615539342632]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Crich Stand (Sherwood Foresters Regimental Memorial)",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48784525530687, 53.09444221659242]
          }
        },
        {
          type: "Feature",
          properties: { Name: "9 Beetwell Street", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.42679815647168, 53.2341030593265]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE SEAHORSE FOUNTAIN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61170684078678, 53.22614626084453]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CLOISTER", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48016373291111, 53.00262587086217]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILFORD VIEW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48042583008542, 53.00344497868552]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Central Methodist Church", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48498797786417, 53.02213536765453]
          }
        },
        {
          type: "Feature",
          properties: { Name: "17, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57304625660814, 53.08162899783584]
          }
        },
        {
          type: "Feature",
          properties: { Name: "3-7, WYVER LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48689583443864, 53.03096200982535]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE TOWER", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48663144391442, 53.00228715921175]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCHYARD CROSS CIRCA 40 METRES NORTH OF ST ANNES CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62348287359634, 53.24772667218588]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CORNER COTTAGE\r\nWILLOW COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62248288605521, 53.24776161742197]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The King William", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47781038052752, 53.00218325411728]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SOUTHERN PREMISES OF BILL LOMAS (MOTOR CYCLES) LIMITED",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47771677593894, 53.00232773615622]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILFORD POST OFFICE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47757644277859, 53.00267541013723]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF THE HOLY TRINITY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47822235758366, 53.00452303777883]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Railed street boundary wall, north-west end pier and south-west gate and gate piers to Holy Trinity Churchyard",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47838724136942, 53.00444285730677]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BUILDING 51 MILFORD DYEHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47906600616353, 53.00251314919579]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CANTEEN AT MILFORD DYEHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47976371637813, 53.00250237406916]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Milford House Cottages", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48078375639542, 53.00170208254068]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1-3 Moscow Cottages", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4859650067774, 52.99625062393227]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RANGES TO NORTH, EAST AND WEST OF FOLDYARD AT MOSCOW FARM",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48512866837892, 52.99641781121573]
          }
        },
        {
          type: "Feature",
          properties: { Name: "POULTRY HOUSES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48426049022208, 52.99675565005417]
          }
        },
        {
          type: "Feature",
          properties: { Name: "UNITY MILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48581613360461, 53.02395476361652]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LONG HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.50164233226895, 53.01807117541947]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRIDGE OVER RAILWAY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48279580160632, 53.02544098387335]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RAILED WALL, GATE AND REAR WALL TO CHURCHYARD INCLUDING ALL MONUMENTS THEREIN",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47998610700784, 53.02649137926981]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SUNNY BANK HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48110027231886, 53.01840262859584]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STREET BOUNDARY WALL, AND BAULKS GATE PIERS AT NUMBER 66",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48134432241293, 53.01778177399711]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FLEET HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47968143350563, 53.01958633652775]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RETAINING WALLS TO WEIR ADJACENT TO GLOW WORM FOUNDRY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48160240808979, 53.00475354141551]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "31 AND 32, GEORGE STREET (See details for further address information)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4824732098396, 53.02636004950914]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "STONE WALL, PIERS AND RAILINGS ALONG GIBFIELD LANE AT HERBERT STRUTT PUBLIC BATHS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48368509906801, 53.01887563494432]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BEECH LAWN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48053995081559, 53.02484999794608]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Premises of Belper Pre School Playgroup",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48048686031982, 53.02496314003496]
          }
        },
        {
          type: "Feature",
          properties: { Name: "7 AND 9, CHEAPSIDE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47982555883938, 53.02248149150503]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Laund Farmhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46116896276446, 53.03663324574794]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LODGE AT FIELD HEAD HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47728126736678, 53.02576939278335]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1-5, CHEVIN ALLEY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48003275096629, 53.00252989921645]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHEVIN MILL AND ATTACHED MILLHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49712351538336, 53.02595369121748]
          }
        },
        {
          type: "Feature",
          properties: { Name: "13, 15 AND 17, CHEVIN ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4804565557577, 53.00300126796053]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PREMISES OF APPOR LIMITED", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48056197480035, 53.00327477772304]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "WEST AND NORTH RANGES OF FARM BUILDINGS SURROUNDING FARM YARD AT CHEVIN HOUSE FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49225193497586, 53.01417515367985]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILFORD COUNTY JUNIOR MIXED AND INFANTS SCHOOL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47998555747036, 53.00287673677742]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SOUTH VIEW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48900421360066, 53.01403541665938]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Parish Church of St Peter", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4784208336538, 53.02523503500274]
          }
        },
        {
          type: "Feature",
          properties: { Name: "86-94, BRIDGE STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48513183477354, 53.02633394662714]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "NUMBER 10 (GIBFIELD LODGE) AND ATTACHED QUADRANT WALL AND END PIER",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48500343100444, 53.01958250091801]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WESTERN RANGE TO EASTERN COURTYARD AT BABINGTON HOSPITAL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48562046662885, 53.01909076081159]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "MAIN ENTRANCE LODGE TO EASTERN COURTYARD AT BABINGTON HOSPITAL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48504072591881, 53.0189534178057]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NORTH RANGE OF EASTERN COURTYARD AT BABINGTON HOSPITAL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48521650182559, 53.01921486454432]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "EASTERN BOUNDARY RAILED WALLS AND PIERS AT BABINGTON HOSPITAL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48497778725047, 53.01923181105622]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRIDGE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47785955799907, 53.00278023815145]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "WAREHOUSE NOW OCCUPIED BY DALTON AND COMPANY LIMITED SILKOLENE LUBRICANTS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48411419649062, 53.02039667017779]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RAILED WALL AT HERBERT STRUTT SCHOOL\r\nWALLS AND RAILINGS ALONG DERBY ROAD AND GIBFIELD LANE BOUNDARIES, STEPS, PIERS AND ARCH AT DERBY ROAD ENTRANCES TO HERBERT STRUTT SCHOOL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4846465066947, 53.01930124988874]
          }
        },
        {
          type: "Feature",
          properties: { Name: "21, 22 and 23 Derby Road", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4820029182246, 53.00638750784865]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILFORD EBENEZER METHODIST CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47784953736528, 53.00205836075884]
          }
        },
        {
          type: "Feature",
          properties: { Name: "17, BELPER LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48699284166283, 53.03158268252943]
          }
        },
        {
          type: "Feature",
          properties: { Name: "38 AND 40, BELPER LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48794156387212, 53.03296784763007]
          }
        },
        {
          type: "Feature",
          properties: { Name: "58-62, BELPER LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48872729044408, 53.03370260028148]
          }
        },
        {
          type: "Feature",
          properties: { Name: "64 AND 66, BELPER LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48884498511955, 53.0338379431703]
          }
        },
        {
          type: "Feature",
          properties: { Name: "86-92, BELPER LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48911019962227, 53.03410875647128]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SMALL STONE BUILDING TO SOUTH OF DALLEY HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.50351895532568, 53.03898786465567]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BELPER BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48724274675886, 53.02937241447031]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Road archway and footbridge (includes offices forming south part of block in east side of archway)",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4864923892788, 53.02852419704994]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Talbot Hotel", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48764615023369, 53.0305607249721]
          }
        },
        {
          type: "Feature",
          properties: { Name: "11-17, BRIDGE STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48473534069939, 53.02332084945695]
          }
        },
        {
          type: "Feature",
          properties: { Name: "41-47, BRIDGE STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48518647344603, 53.02424868749013]
          }
        },
        {
          type: "Feature",
          properties: { Name: "63, 65 AND 67, BRIDGE STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4852787549283, 53.02526486551419]
          }
        },
        {
          type: "Feature",
          properties: { Name: "115, BRIDGE STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48554788864048, 53.02645260391793]
          }
        },
        {
          type: "Feature",
          properties: { Name: "121-125, BRIDGE STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48572197957925, 53.02685787008553]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Former Post Office", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48574965769852, 53.02703777376295]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Christ Church", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48611799941243, 53.02740792087326]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE LION HOTEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48454542443343, 53.02424591522688]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FORMER BAPTIST SUNDAY SCHOOL AT REAR OF NUMBER 60",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48433501739526, 53.02563833067973]
          }
        },
        {
          type: "Feature",
          properties: { Name: "134, BRIDGE STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48547947587725, 53.02718942364518]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RANGE OF FARM BUILDINGS IN COURTYARD AT BROADHOLME HOUSE FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47777069568529, 53.04448704656591]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BELLE ACRE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48213272500109, 53.02153868935105]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Mills occupied by George Brettle and Company Limited (that part along the Chapel Street frontage, bounded on the north by the 1834 building, including northern rear wing, and, on the south, by the recessed, single storey red brick building)",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48475245449849, 53.02188265146003]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CROSSROADS FARMHOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.49985305619029, 53.02708042746944]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Farm buildings facing onto road at Crossroads Farm: 1) North-Eastern Range including gate piers to entrance at south-west end of the range, 2) South-Western Range extending south-west from entrance to north-eastern farmyard",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49943062807156, 53.02757247481116]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "WESTERN RANGES OF FARM BUILDINGS IN NORTH EASTERN FARMYARD AT CROSSROADS FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49901525420111, 53.02739094475982]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WESTERN BUILDING ACROSS CHEVIN ROAD AT CROSSROADS FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.50042274248716, 53.02687548201511]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BOUNDARY WALLS TO GARDEN AND STREET AT CROSSROADS FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.50012497879509, 53.02683827614234]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NORTH WING OF DALLEY FARMHOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.49923380020433, 53.029117789468]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "EAST AND SOUTH BOUNDARY WALLS TO EASTERN FARM YARD AT DALLEY FARM, NORTH AND WEST BOUNDARY WALLS AND STONE STEPS TO FARM COMPLEX",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49865889846252, 53.02898733121099]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Stable range and carriageway entrance dividing east and west farmyards at Dalley Farm",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49908616151713, 53.02899132004549]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RANGE OF FARM BUILDINGS FRONTING NORTH SIDE OF EAST AND WEST FARMYARDS AT DALLEY FARM",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49881559720162, 53.02917895522225]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RANGE OF FARM BUILDINGS FORMING WESTERN SIDE OF WEST FARMYARD AT DALLEY FARM",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49933983494173, 53.02897440799671]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "NORTH EASTERN RANGE OF FARM BUILDINGS AT DALLEY FARM (L-SHAPED RANGE INCLUDING NORTHERN HAY BARN, CORNER CART SHED AND SHELTER SHED AT LOWER LEVEL)",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49861937112044, 53.02938488105838]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "CHURCHYARD CROSS, 20 METRES SOUTH OF THE CHURCH OF ST JOHN THE BAPTIST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47178641986269, 53.3013750261058]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TWO PAIRS OF GATEPIERS TO THE EAST OF PREMISES OCCUPIED BY THE SLINN COMPUTER GROUP",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47321425629144, 53.30179480139955]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD VICARAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47358856143935, 53.30208323776905]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE RED HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47360260739734, 53.30194033303293]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ASTON END", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.46059142541994, 53.31038569421668]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NORWOOD FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45949225195584, 53.31185488545258]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MANOR COURT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47727588812429, 53.30219016347328]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE MANOR HOTEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47428189504341, 53.30214782857061]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROOKERY COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47595228399732, 53.30244504188844]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47509789179784, 53.30236938231218]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE BLUE STOOPS INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.474862223988, 53.30200879574139]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ROSE HILL AND ATTACHED BOUNDARY WALLS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.46778181928756, 53.30183365429964]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Upper Birchitt Farmhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5022268313356, 53.31305433266009]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RANGE OF OUTBUILDINGS TO THE EAST OF SILKSTONE FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4571762207095, 53.31103539701213]
          }
        },
        {
          type: "Feature",
          properties: { Name: "28, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35142726664063, 53.31313945062613]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "MONUMENT OF THE SOUTH EAST CORNER OF THE SOUTH AISLE OF ECKINGTON PARISH CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.35286676663142, 53.31317865857029]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MALTHOUSE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.3528096572326, 53.31176159510692]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Camms House", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35504249072865, 53.31107629714101]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "CHIVERTON HOUSE, ATTACHED BOUNDARY WALLS GATEPIERS AND RAILINGS",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.46859017626771, 53.30199006114126]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Edmund", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.77574637119392, 53.34281616747064]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SCHOOL AND ATTACHED WALLS AND RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77503701224742, 53.34347101135423]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 127 832", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.81203919673885, 53.34510863425895]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 146 828", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.78251893618503, 53.34248028167664]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARN AT GOOSEHILL HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.78110586748767, 53.3412709653893]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE GEORGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77650607193736, 53.34252095954627]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CRYER HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77658807260194, 53.34270088556076]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "OFFICES TO SPRINGFIELD MILL FACTORY WITH ATTACHED WALL AND LAVATORY BLOCKS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.28751901326804, 52.92387904149762]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DR BLAND'S ALMSHOUSES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.29441455626132, 52.92235588748606]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BOBBIN MILEPOST TO SOUTH OF NUMBER 103 AT SK 4761 3640",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.29393456068823, 52.9224204607625]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Michael", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.3175390470968, 52.89705951010529]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MANOR FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.315912872207, 52.89864605090835]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARN TO EAST OF MANOR FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.31531501902999, 52.89863970929873]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RAILWAY BRIDGE TO SOUTH WEST OF CEMETERY CHAPEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.3433251951524, 52.89742040120453]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CEDARS FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.34318587235671, 52.89263474163347]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BOBBIN MILEPOST SOUTH OF THE COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.35358456671881, 52.90965998402084]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RAILWAY BRIDGE AT SK 446 334", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.33838472705129, 52.89668257496276]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NORTH SECTION OF HARRINGTON BRIDGE AT SK 472 313",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.30079220879283, 52.8765843717721]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BOTHE HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.30131873877116, 52.87866272796315]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Farmbuilding 100 metres South South West of the Eyre Arms Public House",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66513699697559, 53.24743046741735]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "The Cottage and Hollybush Cottage and attached garden wall",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62705286273213, 53.22544788889251]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Deerlands, Coombe Cottage and Guide Cottage",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62645208868134, 53.22563477441275]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Italian Villa", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.62486147688517, 53.22596237015834]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Peter", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.62599238589662, 53.22559228653122]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCHYARD CROSS AND SUNDIAL 5 METRES SOUTH OF SOUTH CHAPEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62580958590916, 53.22545298609883]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "The Gate House and attached railings",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62536596076134, 53.2265122703342]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOUSE NORTH OF THE YEWS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62515061938027, 53.22544192943235]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE VICARAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62543787309877, 53.22513721287859]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Lodge", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6262858753327, 53.22752189753766]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TEAPOT ROW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62751267334846, 53.22769651947304]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TEAPOT ROW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62797461038391, 53.2279766123655]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 212708", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68502350112038, 53.23422784666407]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO WEST OF DOWAGER HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66721399448132, 53.24628571551794]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HOME FARMHOUSE AND ATTACHED OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66694633935177, 53.24654882658234]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GAZEBO GATES AND WALLS AT ENTRANCE TO HASSOP HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66699589774365, 53.24710768353891]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SOUTH GATES TO HASSOP HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66791928749693, 53.24310894381583]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HASSOP HALL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.66884562103099, 53.24652395666212]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ORANGERY AT HASSOP HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66965083056562, 53.24704753100706]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 235713", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64890898650222, 53.23885218370967]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ICE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61198916447219, 53.22276670305848]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TEMPLE OF FLORA", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.61090308113242, 53.22851543141736]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FLIGHT OF STEPS WITH URNS AND STATUES EAST OF ORANGERY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.61038527051671, 53.22808841968662]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE CONSERVATIVE WALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61002930392446, 53.22848323062372]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GROUP OF 18 COLUMNS ENCLOSING ROSE GARDEN",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60988717670996, 53.22771981629198]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GIALLO SARCOPHAGUS CIRCA 60 METRES NORTH OF THE DUKES GREENHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60851817154003, 53.22775257314562]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CONDUIT HOUSE CASCADE AND ADJOINING STATUES",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60744437080136, 53.22687049956998]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STATUE TERMINATING THE VISTA TO THE EAST OF THE RING POND",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60886793500733, 53.2255334905628]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GROTTO IN ARBORETUM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60597612421899, 53.22236890977819]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FORMER STABLES AT CHATSWORTH HOUSE",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60905047411281, 53.22884102606625]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ICE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61057115391251, 53.23561356392511]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WHITE LODGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61509143223886, 53.23808408205372]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Barbrook Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62917023757112, 53.22482527252056]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "1 and 2 Daisy Bank, and attached wall and outhouse",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62807535815229, 53.22499265218289]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Church View and attached garden walls",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62637500679134, 53.22588621895889]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Bank Top", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62958784026839, 53.22503331106893]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BASLOW BRIDGE", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.62523313468844, 53.24776886958114]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BUBNELL HOUSE AND BUBNELL HOUSE EAST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.63098018899676, 53.25299267646382]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS260722", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61095691819052, 53.24673161870301]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HEATHY LEA", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60281972902614, 53.24624164733064]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST ANNE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.62410437370655, 53.2474251629738]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "LYCHGATE TO CHURCHYARD OF BASLOW PARISH CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62436875463937, 53.24779609190401]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE CAVENDISH HOTEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61680624689637, 53.24572105901768]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD CHAPEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61947739427836, 53.24873807545669]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "TERRACE WITH STATUES TO WEST FRONT OF CHATSWORTH HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.61245372334961, 53.22717660115487]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NETHER PADLEY FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62941122949526, 53.29930685313783]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STOKE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64272058100127, 53.28845299485439]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 250 718", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62545744383739, 53.24272446914157]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THATCHED COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61256066664765, 53.24513816340432]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GUIDESTONE AT OS288696", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56935383643122, 53.22356635148015]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRAMLEY FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63549439665989, 53.25804469238975]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ENTRANCE BLOCK TO ELDER YARD UITARIAN CHAPEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42696037621408, 53.23721267631717]
          }
        },
        {
          type: "Feature",
          properties: { Name: "UNITARIAN CHAPEL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.4272494914865, 53.23688149505418]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CENTRAL METHODIST CHURCH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42836983154932, 53.23713856583978]
          }
        },
        {
          type: "Feature",
          properties: { Name: "19 AND 21, WEST BARS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43215841455796, 53.23541181361178]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GATEPIERS AT NUMBER 23", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43225870744664, 53.23539547203496]
          }
        },
        {
          type: "Feature",
          properties: { Name: "77, LOW PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43069791290957, 53.23526864480324]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE MARKET HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42926096898052, 53.23547998062509]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE TOWN PUMP", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.42889925136773, 53.23557760992241]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Former Post Office", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42985795403134, 53.23578929802724]
          }
        },
        {
          type: "Feature",
          properties: { Name: "21, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42810518616112, 53.23563621518839]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Former National Westminster Bank", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43065557489159, 53.23579962961282]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "WAR MEMORIAL IN CHURCHYARD TO NORTH EAST OF ST MARY'S CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42425695340511, 53.23657041531709]
          }
        },
        {
          type: "Feature",
          properties: { Name: "10 High Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42792486154855, 53.23588765763175]
          }
        },
        {
          type: "Feature",
          properties: { Name: "5 AND 7, LOW PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4277366705243, 53.23498517640201]
          }
        },
        {
          type: "Feature",
          properties: { Name: "35, LOW PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42843971607882, 53.23505742053692]
          }
        },
        {
          type: "Feature",
          properties: { Name: "37, LOW PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42855511163842, 53.2350733910019]
          }
        },
        {
          type: "Feature",
          properties: { Name: "45 Low Pavement", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4290364171814, 53.23510653601075]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "61,61A,61B,63 AND 63C, LOW PAVEMENT",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.43001769771321, 53.23521913726538]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WILLIAM AND GLYN'S BANK AND BANK CHAMBERS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42559232298706, 53.23643306029588]
          }
        },
        {
          type: "Feature",
          properties: { Name: "2 Central Pavement", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4280623864467, 53.23525431466084]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LAMP STANDARD OUTSIDE NUMBER 2", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42815564813117, 53.23522298754065]
          }
        },
        {
          type: "Feature",
          properties: { Name: "4, CENTRAL PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42788561143374, 53.23524865276757]
          }
        },
        {
          type: "Feature",
          properties: { Name: "38, GLUMANGATE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42943125705441, 53.23707233187159]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BOILER HOUSE BEHIND NUMBER 9", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42679388462645, 53.23397600942929]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OUTBUILDING AT REAR OF NUMBER 11", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42670591799696, 53.23383176847566]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RANGE OF BUILDINGS TO REAR OF NUMBER 13",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4266143456638, 53.23395716551047]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Swarkestone Bridge and Causeway", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.45166177284767, 52.84652578011436]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HIGH STANDING", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44734183067134, 52.84115546056234]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Michael", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.45607955304714, 52.84063487817275]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RECTORY HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45597515947975, 52.84033891707163]
          }
        },
        {
          type: "Feature",
          properties: { Name: "POPLARS FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45304736085519, 52.84177281361578]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HOLLYHOCKS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44837369911219, 52.84153548245366]
          }
        },
        {
          type: "Feature",
          properties: { Name: "IVY FARM COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44920629755488, 52.84144045267767]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "The Grandstand, Cuttle and gate 200 metres north of Swarkestone Hall",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.44510082607007, 52.85405141724615]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TRENT AND MERSEY CANAL, CANAL MILEPOST NEAR WESTON LOCK AT SK 407 277",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.3967357061093, 52.84560931132098]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Weston Hall", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.4026187767294, 52.8511672749151]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE WHITE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.40328153942247, 52.84664092956783]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GATES AND ATTACHED WALLS TO KINGS NEWTON HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42547826285779, 52.83182770235912]
          }
        },
        {
          type: "Feature",
          properties: { Name: "KINGS NEWTON HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42538300135346, 52.83202356354098]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STABLE BLOCK TO EAST OF KINGS NEWTON HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4248287499144, 52.83206094273964]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHANTRY HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42444817697862, 52.83200106836814]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Chantry Barn and Chantry Stables", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42409528254929, 52.83219904113273]
          }
        },
        {
          type: "Feature",
          properties: { Name: "VILLAGE CROSS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42156471167383, 52.83214437605623]
          }
        },
        {
          type: "Feature",
          properties: { Name: "14 Market Place", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42786559380579, 52.82266837764219]
          }
        },
        {
          type: "Feature",
          properties: { Name: "17 and 18 Market Place", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42805838416021, 52.82267829347773]
          }
        },
        {
          type: "Feature",
          properties: { Name: "26, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42853382247389, 52.82263562872298]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WORKSHOP TO REAR OF NUMBER 28A", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42880665440977, 52.82288155429688]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MOOR COTTAGE FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55280484733075, 53.08538752948033]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Ye Olde Packhorse Inn", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42892121609584, 52.83160009947103]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Nos. 51, 53, and 55, PENN LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42838998621089, 52.82156284128982]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NATIONAL SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42763169517591, 52.82126488418289]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD MILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42176953028467, 52.82018478175625]
          }
        },
        {
          type: "Feature",
          properties: { Name: "EXCHANGE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42739698463515, 52.82332236159331]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WESLEY HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42735588262846, 52.82306146712224]
          }
        },
        {
          type: "Feature",
          properties: { Name: "26-28, POTTER STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42639345795413, 52.82289502236877]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SHAW HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43913870441084, 52.81961162806957]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WELL HEAD AT SK 3878 2546", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42586031123633, 52.82529273115956]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CROSS HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42137243526619, 52.83222540059059]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TWO PAIRS OF CHERUBS TO NORTH WEST OF THE GRAND BASIN IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42061042363157, 52.82142869312759]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PAIR OF CURVED BENCHES TO EITHER SIDE OF GRAND BASIN IN MELBOURNE HALL GARDENS",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42027338994534, 52.82061920107243]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PEDESTAL WITH STATUE OF PERSEUS IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.41996100170831, 52.82066760119461]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE BIRDCAGE ARBOUR IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.41945334779438, 52.82099314624461]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "URN TO EAST END OF YEW TUNNEL IN MELBOURNE HALL GARDENS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.41999410251874, 52.82053586879691]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "COVERED SEAT TO EAST OF FOUNTAIN POND IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.41922201687242, 52.81982179010008]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PEDESTAL WITH VASE TO SOUTH WEST OF FOUNTAIN POND IN MELBOURNE HALL GARDEN",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.41990569792774, 52.81977470887372]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "THREE FORCING WALLS AND ATTACHED GREENHOUSES IN MELBOURNE HALL GARDENS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.41974402098587, 52.819509689605]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "VASE AND PEDESTAL TO NORTH WEST OF THE FOUR SEASONS VASE IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42071082972275, 52.81945148235922]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "SURGERY AND ATTACHED RANGE OF OUTBUILDINGS TO NORTH OF CLOSE HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42426252215288, 52.82159342654613]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE DOWER HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42500869398493, 52.82099154885564]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TITHE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42420859946042, 52.82089778676308]
          }
        },
        {
          type: "Feature",
          properties: { Name: "51, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42517892406078, 52.82176568296773]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHANTRY HOUSE AND ATTACHED OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42547694055924, 52.82167269613906]
          }
        },
        {
          type: "Feature",
          properties: { Name: "17, DERBY ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42856596916201, 52.82369744204024]
          }
        },
        {
          type: "Feature",
          properties: { Name: "41, DERBY ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42915347825487, 52.82466606022817]
          }
        },
        {
          type: "Feature",
          properties: { Name: "UNITED REFORM CHURCH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42914375069602, 52.8225216905973]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THOMAS COOK ALMSHOUSES, CHAPEL AND RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.43082489304856, 52.82219712592702]
          }
        },
        {
          type: "Feature",
          properties: { Name: "84, 88 and 90 High Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43145826839157, 52.82247076447867]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HARDINGE ARMS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42608015503589, 52.83169502641763]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42224303530485, 52.83196023452176]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GATE PIERS AND ATTACHED WALLS TO WEST OF SERVICE COURT AT ELVASTON CASTLE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39779211264987, 52.89325756536088]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STABLE BLOCK TO EAST OF THE KENNELS AT ELVASTON CASTLE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39813770252732, 52.89288302142831]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Bartholomew", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.39643071861234, 52.89271167045809]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "MOORISH TEMPLE AND ATTACHED TERRACE IN ELVASTON CASTLE GARDENS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39640313018496, 52.89116346322379]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GOLDEN GATES AND ATTACHED WALLS AT ELVASTON CASTLE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39637524650553, 52.88915847999562]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GROTTO ON NORTH SIDE OF THE LAKE AT ELVASTON CASTLE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39346707888006, 52.89418974482106]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PUMP HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.39180483912269, 52.89294070326349]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "NURSERY GARDEN WALLS AND ATTACHED OUTBUILDINGS AT ELVASTON CASTLE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.38989706560023, 52.89102028886581]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LONDON ROAD LODGE ENTRANCE GATES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.39846005249486, 52.88210505808161]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WALLS ENCLOSING MELBOURNE HALL GARDENS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42058261212603, 52.82161565889025]
          }
        },
        {
          type: "Feature",
          properties: { Name: "11, BLANCH CROFT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42928890219635, 52.82390677654902]
          }
        },
        {
          type: "Feature",
          properties: { Name: "43 and 45 Castle Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42517769469817, 52.82272292320783]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARN AT CASTLE FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42424987066158, 52.82339707932706]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HALL COTTAGES AND STABLES AT MELBOURNE HALL",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42351962738705, 52.82137988820277]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PAIR OF PEDESTALS SUPPORTING FRUIT BOWL VASE IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42273460508175, 52.82126821005446]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PAIR OF GARDEN WALLS FLANKING TOP TERRACE OF MELBOURNE HALL GARDENS",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42216353543823, 52.82066739608959]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "FIVE FLIGHTS OF STEPS BETWEEN TERRACES AT MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42148768402611, 52.82104058530962]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PAIR OF CHERUBS TO SOUTH OF STATUE OF MERCURY IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42105400177019, 52.82064317830403]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BUS SHELTER", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.38495488113946, 52.86145326129121]
          }
        },
        {
          type: "Feature",
          properties: { Name: "16, THE GREEN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.38413133201371, 52.86165371819433]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Aston Hall", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.38511226503606, 52.85844953564592]
          }
        },
        {
          type: "Feature",
          properties: { Name: "2 and 4, Weston Road", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.38526466402531, 52.86133595839937]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LEDMORE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.38642718737202, 52.86112785212103]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "COACH HOUSE AND ATTACHED BUILDINGS AT ELVASTON CASTLE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39621178398015, 52.89307901269604]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "SPRINGTHORPE COTTAGE AT STABLEYARD ENTRANCE TO ELVASTON CASTLE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39766408127277, 52.89334448127251]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St James", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.48571280260284, 52.76867111008123]
          }
        },
        {
          type: "Feature",
          properties: { Name: "IVANHOE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48240980021284, 52.76816295820097]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ENTRANCE LODGE AND GATEWAY TO CALKE ABBEY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47339090074187, 52.81192035431059]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STABLES AND RIDING SCHOOL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.45734797284102, 52.80033262795755]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "JOINERS SHOP AND ATTACHED CART HOVEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.45683644516129, 52.80091461299302]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GROTTO AT OS 370229 ON NORTH SIDE OF CHINA HOUSE POND",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.45269250790571, 52.80254969650243]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STONE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54876944583514, 52.83828244443075]
          }
        },
        {
          type: "Feature",
          properties: { Name: "POST OFFICE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55009668545113, 52.8396696779797]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1, HIGH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55023483884163, 52.83982988510906]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE GRANGE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.54576200517239, 52.83466568369896]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.52288906676936, 52.83467536898007]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BROOK FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.52546458826079, 52.8351170069855]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE FARMHOUSE AND ATTACHED WALLS AND RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.5258715051233, 52.83538354748551]
          }
        },
        {
          type: "Feature",
          properties: { Name: "COMMON FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5256531575784, 52.83468212168086]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BROOK END HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5471962961286, 52.84092857752364]
          }
        },
        {
          type: "Feature",
          properties: { Name: "EASTON HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55112912357752, 52.83546867486937]
          }
        },
        {
          type: "Feature",
          properties: { Name: "UNITED REFORMED CHURCH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54514432222149, 52.83571558542715]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Ruin of Stable in Repton Park", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.53607778754695, 52.8214282746088]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Danesgate", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54805934039814, 52.83518203059018]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PEARS SCHOOL, REPTON SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55058365817656, 52.84110941624694]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "REMAINS OF PRIORY CHURCH AND THE CHAPTER BLOCK, REPTON SCHOOL",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.55044494584372, 52.84135422969071]
          }
        },
        {
          type: "Feature",
          properties: { Name: "No 1 Willington Road", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55164165957709, 52.84047778136753]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GYMNASIUM AND ATTACHED GATES, REPTON SCHOOL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.5540553602527, 52.84108018427706]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GRANGE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.51593057982313, 52.85312080343594]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RANGE OF OUTBUILDINGS TO NORTH OF TWYFORD HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51499068058993, 52.8521730639623]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD HALL COTTAGE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.51266242570216, 52.85686198112588]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD SCHOOL HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.51662778714697, 52.85588587119307]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE GRANGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.483159796924, 52.85402558775652]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BENBY HOUSE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60343683485462, 52.84720652535479]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CANAL BRIDGE AT OS 279 279", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.58681365716887, 52.84801183788418]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HIGH BRIDGE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5967169908003, 52.84330940296301]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MONKS FLOOD NORTH BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.59993492658144, 52.84048859678401]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Canal Aqueduct at SK 268 269", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60264694923311, 52.83921769858738]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MANOR FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60777573879179, 52.85179659360262]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PINFOLD OR POUND", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60379223745129, 52.85221486162779]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FOREMARK HALL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.50786726283401, 52.83515024718839]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GATE, ATTACHED STEPS, WALLS AND RAILINGS TO SOUTH EAST OF FOREMARK HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.50702073793622, 52.83466447998902]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOME FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.51102149665767, 52.83397983918413]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ANCHOR CHURCH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49815417631671, 52.84148753837564]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MARKET CROSS", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.55054165879518, 52.83981593018877]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ST WYSTANS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54891083071759, 52.83810609465677]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HIGHWAYS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54869525943818, 52.83786050940691]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HAZELDINE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5477887111621, 52.83726048519799]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MOUNT PLEASANT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67167922764191, 52.89838462343864]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH COTTAGES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.69679970882778, 52.90084251476534]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.69587621546276, 52.89897037125859]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FARM BUILDINGS AT SAPPERTON MANOR",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.7238128342468, 52.9077132585241]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CART SHED AT SAPPERTON MANOR", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.72354171736029, 52.9074872512356]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "LYCHGATE NORTH EAST OF CHURCH OF ST MARY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65470874158453, 52.8638892324612]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ARLESTON HOUSE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.50092187846559, 52.86321159466831]
          }
        },
        {
          type: "Feature",
          properties: { Name: "METHODIST CHURCH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4752122813044, 52.852983934555]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Wilfrid", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.47735352781327, 52.85183349796262]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE WALNUTS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47537608172534, 52.85124420416305]
          }
        },
        {
          type: "Feature",
          properties: { Name: "VILLAGE SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47855287578311, 52.8533815646798]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SIR JOHN PORT ALMSHOUSES", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.60200437348155, 52.88538886452861]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE LIMES AND ATTACHED COACH HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.59860967663238, 52.88607861902858]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ETWALL LAWNS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.59871122457243, 52.88585989768126]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NUMBER 78 AND ATTACHED OUTBUILDING",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.59944800950981, 52.88541623281551]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BLENHEIM FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.59998803335457, 52.88486969894676]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HAWK AND BUCKLE INN AND ATTACHED STABLEBLOCK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60070273818226, 52.88471928310891]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Helen", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.60186270744283, 52.88473518754606]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SILVERHILL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56841873105702, 52.92215564419614]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TERRREL HAYS FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.59140191008913, 52.91130528132427]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PINDALE MINE ENGINE HOUSE AND ATTACHED CHIMNEY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.75684025794946, 53.33989687078697]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DAGGERS HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.74121831001734, 53.34742972589044]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BROUGH HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7311926859202, 53.33887741547585]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BURGHWASH FARMHOUSE AND ATTACHED OUTBUILDING",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.72848556119557, 53.33948254434511]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CASTLE HOTEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77647566979725, 53.34299980984395]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CASTLETON HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77657050680665, 53.34209410010546]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STABLEBLOCK AT LOOSEHILL HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77146469745866, 53.35147314589861]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LOOE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77341250610187, 53.34391738624181]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BEAN HILL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77530044820638, 53.34192545538205]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RANGE OF OUTBUILDINGS TO WEST OF BEAN HILL FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77543582832938, 53.34200085412833]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FORMER STABLES AT CASTLETON HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77721207723996, 53.34210537868937]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "REMAINS OF CHURCHYARD CROSS, 3 METRES SOUTH OF ST PETER'S CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.74262647591268, 53.34768989385267]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILE POST EAST OF MARSTON FARM SK159834",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.76182000075811, 53.34738297177107]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BLEAK HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.74732190382898, 53.35423816129123]
          }
        },
        {
          type: "Feature",
          properties: { Name: "KILNHILL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7436567827849, 53.35161468754676]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TRENT AND MERSEY CANAL DEEP DALE BRIDGE NUMBER 17 AT SK 3485 2923",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48319521069083, 52.85961355269674]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "OUTBUILDING TO THE SOUTH WEST OF THE OLD RECTORY, AND ATTACHED BOUNDARY WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47995172840687, 53.16359794612411]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE FORMER NATIONAL GIRLS SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47911699205952, 53.16417407308022]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HOUSE TO THE SOUTH OF THE COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48033985372206, 53.16323555292767]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DUKE'S BUILDINGS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47980358683374, 53.00521431755115]
          }
        },
        {
          type: "Feature",
          properties: { Name: "93, DERBY ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48248159859623, 53.0147893137401]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SOUTH RANGE OF EASTERN COURTYARD AT BABINGTON HOSPITAL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48520757915624, 53.01871143047742]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILE STONE 1 MILE FROM WIRKSWORTH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.54980632373523, 53.08565917647699]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILFORD BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47835346432231, 53.00228529963942]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "98-104, BRIDGE STREET (See details for further address information)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48477241608279, 53.02646723076623]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TWO GATEPIERS AND QUADRANT WALL AT PLAYING FIELD ENTRANCE TO SOUTH OF NUMBER 10",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48501940634437, 53.01949267794032]
          }
        },
        {
          type: "Feature",
          properties: { Name: "13, WEST END", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57460805904779, 53.08194563384515]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NORTH LODGE AT BABINGTON HOSPITAL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48503559539143, 53.01938487747339]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BANKFIELD HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49551136125328, 53.02100281566301]
          }
        },
        {
          type: "Feature",
          properties: { Name: "4-13, CROWN TERRACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48474817238127, 53.0259996869226]
          }
        },
        {
          type: "Feature",
          properties: { Name: "40 AND 42, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5736429003946, 53.08013526427921]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "DERWENT COTTAGE AND DERWENT HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6736284593835, 53.2836425053395]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DRINKING TROUGH AT FOOT OF HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49922269848074, 53.02449227465942]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE CEDARS (DERBYSHIRE COUNTY COUNCIL CLINIC)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4811684459552, 53.02611898771558]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RANGES TO EAST OF HOUSE AT MOSCOW FARM",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48477078506967, 52.99644323233136]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HAY BARN AT MOSCOW FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48441578814575, 52.99622595177318]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "EASTERN GATE PIERS AT FIELD ENTRANCE BOUNDARY WALL (AND COAL SHUTE) BESIDE DRIVE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48406555951284, 52.99655464371834]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HERBERT STRUTT PUBLIC BATHS AND ATTACHED CARETAKER'S HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48357353357292, 53.01863422247763]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE UNITARIAN SUNDAY SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48016543422914, 53.02397518345283]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCHYARD CROSS 6 METRES EAST OF CHURCH PORCH",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6747079715982, 53.28413173508486]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Bridge over Railway", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48301542799769, 53.02646677765193]
          }
        },
        {
          type: "Feature",
          properties: { Name: "2 AND 3, FOUNDRY LANE, MILFORD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48203364192203, 53.00608582004457]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BAGSHAW HOUSE AND ATTACHED OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67559056004336, 53.2840073915689]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DELF VIEW AND ATTACHED STABLES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67615929101762, 53.28417072947722]
          }
        },
        {
          type: "Feature",
          properties: { Name: "VILLAGE STOCKS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67712052789051, 53.28460257385109]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FLEET COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4815501928909, 53.01789552548078]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STANLEY HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67425812871843, 53.28368017675521]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "3 AND 4, JOSEPH STREET (See details for further address information)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48324004514036, 53.0262730962513]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PLAGUE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67559458126046, 53.28421437813618]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "STONE WALLS, STEPS AND IRON POSTS TO FOOTPATH BETWEEN SOUTH END OF HOPPING HILL AND HOPPING HILL TERRACE, SHAW LANE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47818867919161, 53.00484650158687]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN HOUSE AND ATTACHED GARDEN WALLS TO EYAM HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67604281215834, 53.28440879082696]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RANGE OF FARM BUILDINGS TO EAST OF REDHILL FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47553591275874, 52.99499159160595]
          }
        },
        {
          type: "Feature",
          properties: { Name: "71-77, LONG ROW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48522580774722, 53.02720630613993]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "LAMP POST ON BRIDGE BETWEEN NUMBERS 53 AND 58\r\nLAMP POST TO FRONT OF NUMBER 65\r\nLAMP POST TO FRONT OF NUMBERS 45 AND 46",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48327184754532, 53.02726976022866]
          }
        },
        {
          type: "Feature",
          properties: { Name: "64-67, LONG ROW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48394362085058, 53.02720075856016]
          }
        },
        {
          type: "Feature",
          properties: { Name: "25-36, LONG ROW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4823457538516, 53.02740956694438]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO SOUTH WEST OF EYAM HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67705651809214, 53.28489239272865]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "12 and 14, Lander Lane and 1 The Butts",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47733593103336, 53.02371110359998]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GATES AND ATTACHED WALLS AND TERRACE TO SOUTH OF EYAM HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67690147115801, 53.28471800485867]
          }
        },
        {
          type: "Feature",
          properties: { Name: "7-20, LONG ROW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48380696824937, 53.02740691834181]
          }
        },
        {
          type: "Feature",
          properties: { Name: "20, KILBOURNE ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4635323977246, 53.02715552932037]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARBROOK OLD BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61324728816524, 53.24543101408052]
          }
        },
        {
          type: "Feature",
          properties: { Name: "26-36, SHORT ROWS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48096426766508, 53.02698106278306]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TURN PIKE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46696483283634, 52.99775820075656]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MOMPESSON COTTAGES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67243773162469, 53.28440328979042]
          }
        },
        {
          type: "Feature",
          properties: { Name: "EYAM VIEW FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68802494537096, 53.28867445452862]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MANOR FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4782655641403, 53.02203419714666]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SHEPHERDS FLAT FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.69980218497516, 53.29323883737163]
          }
        },
        {
          type: "Feature",
          properties: { Name: "16 to 20, Market Place", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47855828023396, 53.02372545016166]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NORTH WALLS FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.24867314150446, 53.29403376503572]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE ELMS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.39008971184979, 53.1811550916129]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD CROSS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.38885662749729, 53.17947681649721]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RAILINGS, GATE PIERS AND BOLLARDS, EAST OF CHURCH OF ST LAWRENCE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39586271496501, 53.17602472543145]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STABLES AT WHITE HART INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.38863465423035, 53.18035660878427]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHERRY TREE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.34259557388984, 53.23726894055955]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARN AT MANOR FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.33480860387995, 53.23673400037146]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD PRIORY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.34060709224804, 53.21562064822932]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SUTTON SCARSDALE HALL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.33963949327283, 53.21538546499445]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST MARY", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.33938074272388, 53.21515003416411]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GARDEN WALLS AND GATE PIERS AT SUTTON SCARSDALE COUNTRY CLUB",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.3438252392052, 53.21450621965204]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Lawrence", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.21211098356922, 53.28585767021267]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD RECTORY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.21337275045666, 53.28576146171606]
          }
        },
        {
          type: "Feature",
          properties: { Name: "VILLAGE PUMP", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.20683081926675, 53.28424396923483]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PIGEON HOUSE AT STEETLEY FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.18520446641182, 53.30304647104555]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LODGE TO BARLBOROUGH HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.28725628228861, 53.29157306462243]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Barlborough Hall", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.28470511708739, 53.29914715696473]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BOLSOVER CASTLE", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.29719459818098, 53.2312100029617]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROWTHORNE LODGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.29657567363245, 53.17797795348523]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PEAR TREE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.28446876120405, 53.1801585241486]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CONDUIT HOUSE SOUTH OF HARDWICK OLD HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.31095370283231, 53.16775177516281]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GAZEBO AND GARDEN WALLS AT HARDWICK HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.30992610024296, 53.16885112392661]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RANGE OF COTTAGES TO SOUTH WEST OF HARDWICK HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.30994022452452, 53.16658631655645]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "ENGINE HOUSE, SAW MILL AND ATTACHED CHIMNEY AT HARDWICK SAW MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.30968800472979, 53.16552415240468]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STABLES TO NORTH WEST OF THE HARDWICK INN",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.31518369615867, 53.16514245697109]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St John the Baptist", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.30205033168352, 53.18217980319146]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STORES COTTAGE\r\nWILMOT COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56631597439372, 52.97983202883955]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of All Saints", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.57949756861605, 52.98247240892435]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD BEECHES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57809283699228, 52.98482747330717]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ENGINE HOUSE BY SAW MILL IN KEDLESTON PARK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.53152456917521, 52.96750949704495]
          }
        },
        {
          type: "Feature",
          properties: { Name: "INN FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56661939178694, 52.97927579951166]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "COVERED ARCADE AND ATTACHED ICE HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.53769591538248, 52.95907439795575]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE ORANGERY", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.53955261850331, 52.9587952499573]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE SUMMER HOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.53797185352945, 52.95826325576916]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MONUMENT TO MICHAEL DRAYTON", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.53765926257352, 52.95857286440337]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LION STATUE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.53744110153215, 52.95861703404147]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HERMITAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54517210771433, 52.96091877815302]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE LION'S MOUTH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.53693817162106, 52.96138104302806]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE BOATHOUSE", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.53837973940503, 52.96364479640532]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE NORTH LODGE", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.5225774206822, 52.96742217590495]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LANGLEY BARTON", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57131626104102, 52.94606580050398]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Meynell House", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57320590704323, 52.94730898923063]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Michael", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.57515182986494, 52.94633137074229]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HALL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57574247761659, 52.95404875701841]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MEYNELL LANGLEY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55427264456321, 52.95465337378267]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BOWBRIDGE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55174564265297, 52.93989240389211]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Bowbridgefields Farmhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54940241720076, 52.94345229739371]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CASTLE COTTAGES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.53496390480331, 52.93689731741232]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Thatched Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.53437740583862, 52.9365174682422]
          }
        },
        {
          type: "Feature",
          properties: { Name: "7, CHAPEL STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48725504744505, 52.98795900482004]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OLD CHAPEL, GATE PIERS AND RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4867498757749, 52.98784895868081]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 346 427", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48710512591233, 52.98113982692914]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "DUFFIELD NORTH BRIDGE (BRITISH RAIL)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48816714291885, 52.99397680745015]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CEMETERY LODGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49486915492685, 52.99304273007674]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1-29 King Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48889218060536, 52.98808289626777]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE CEDARS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48578554840273, 52.98189999395821]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Alkmund", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.48088382130638, 52.98116080121437]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DUFFIELDBANK HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4782585184529, 52.98665244493288]
          }
        },
        {
          type: "Feature",
          properties: { Name: "43 AND 45, TAMWORTH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49044417589779, 52.98784682644418]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TAMWORTH HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48961468352716, 52.98744774597452]
          }
        },
        {
          type: "Feature",
          properties: { Name: "52, TOWN STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48749535829836, 52.98527221545422]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Gatehouse at Duffield Hall and attached wall",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48689903888541, 52.98405608485617]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PAIR OF GARAGES TO NORTH OF THE MEADOWS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48675818105915, 52.98463079867788]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 336 432", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.50173362729713, 52.98479415787138]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GIFT SHOP", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.53704037468928, 52.95951587625527]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE STABLES", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.5378448613453, 52.95939495400233]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Outbuilding at Breach Farmhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.38847549236359, 53.02496837084828]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCH FARMHOUSE AND ATTACHED OUTBUILDING",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.40797796612831, 53.01400171793346]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TOMBSTONE 4 METRES TO SOUTH OF SOUTH PORCH OF ST MARYS CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.40736491265582, 53.01414249610794]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Mary", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.407274767979, 53.01430359777034]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WAR MEMORIAL TO EAST OF ST MARY'S CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.40677982069192, 53.01441824926612]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILEPOST 20 METRES WEST OF DENBY POTTERY WORKS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.41779879466309, 53.02303040567745]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Park Hall Farmhouse", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.43262820635679, 53.02225699933499]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Clement", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.44216340220218, 52.99652053897268]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FARMBUILDINGS TO NORTH-WEST OF CASTLE FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.44505370426108, 52.98447069644597]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GRANGE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44308007362604, 52.98952566299371]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ASHERFIELDS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41111080416618, 53.06658007774559]
          }
        },
        {
          type: "Feature",
          properties: { Name: "AMBERLEY FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43452467365115, 53.07347879148674]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43056674080661, 53.07653305158799]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CONEYGREY FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42545948652578, 53.08045466599262]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Matthew", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.42017926202573, 53.06902184507361]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "MILEPOST TO THE WEST OF THE JUNCTION OF CHESTERFIELD ROAD AND WOOD LANE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.43815604309052, 53.06300988381925]
          }
        },
        {
          type: "Feature",
          properties: { Name: "AMBERSIDE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43830048825068, 53.06433380725461]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WINGFIELD HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44086007057508, 53.09132393369442]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STABLE BLOCK AT WINGFIELD HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.441485399178, 53.09132371065787]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "THE RUINS OF SOUTH WINGFIELD MANOR HOUSE, INCORPORATING MANOR FARMHOUSE AND AN AISLED OUTBUILDING TO THE SOUTH",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.44242571740072, 53.08860694998644]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Outbuilding to the south of Windy Gap Farm",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.43865460520626, 53.09759399807294]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ROAD BRIDGE TO THE SOUTH WEST OF ST MATTHEWS CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.43008675652419, 53.09745778224745]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RAILWAY BRIDGE SOUTH OF SOUTH WINGFIELD STATIONMASTER'S HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42696435666591, 53.09668488302339]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RAILWAY BRIDGE TO THE WEST OF WEIRMILL BRIDGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.43633528996775, 53.07869978120299]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Park Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44103686154907, 53.09337283188939]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WINGFIELD HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4403524453804, 53.09498827562146]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE MANOR HOTEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44129264219206, 53.09359119978432]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DALE BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42419916430932, 53.10335912933036]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHESNUT FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46307442444391, 53.10157942331278]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "METROPOLITAN POLICE BOX AT NATIONAL TRAMWAY MUSEUM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48575594961592, 53.08964486169069]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BREACH FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.38874206844526, 53.02483684229913]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE NORTH EAST OF THE DERWENT HOTEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.50602532876411, 53.08571693913245]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CANAL BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.50505193842345, 53.08505073390358]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RANGE OF 3 COTTAGES FORMERLY THE WHEATSHEAF PUBLIC HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.50448289693819, 53.08498740517784]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHASE CLIFFE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49111711478788, 53.07936271240791]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "LODGE TO CHASE CLIFFE, GATE PIER AND FLANKING BOUNDARY WALLS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49131144892032, 53.08017864287172]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "STABLE BLOCK, TROUGH AND MOUNTING BLOCK TO THE WEST OF CHASE CLIFFE FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49089497762971, 53.08004988367981]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Crich Baptist Chapel", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47929815005833, 53.08356960765892]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PLAISTOW GRANGE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48434502190956, 53.10226196901259]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FORMER PRIMITIVE METHODIST CHAPEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47900240282504, 53.0826821731847]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CRUCK BARN TO THE NORTH-WEST OF BEECH FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47836725277583, 53.1136700989741]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WESTERN RANGE OF FARM BUILDINGS AT WYVER FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49511008420951, 53.04238384623326]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FARM BUILDING TO NORTH WEST OF FARMHOUSE AT WYVER FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49539920945289, 53.04273699516048]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "BOUNDARY WALLS TO WEST SIDE OF REAR WESTERN DRIVE AT WYVER FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49488929557768, 53.04194192690853]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "THE BLACK SWAN PUBLIC HOUSE AND ATTACHED L SHAPED RANGE OF OUTBUILDINGS TO THE NORTH-EAST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47837677364693, 53.08463461281985]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE MANSION HOUSE AND OUTBUILDING",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47901940562418, 53.08435648603815]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE MOUNT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47866142950223, 53.08542064684068]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "FACADE OF THE FORMER DERBY ASSEMBLY ROOMS AT THE NATIONAL TRAMWAY MUSEUM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48609950447502, 53.08971199666493]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CLIFF INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48748243978711, 53.08975888846683]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DIAL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47603953764749, 53.0777483294484]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BOWER HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47741691493937, 53.07741278885241]
          }
        },
        {
          type: "Feature",
          properties: { Name: "31 HINDERSITCH LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49744087404164, 53.08779841814622]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOLLINS FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47212115740071, 53.10033872858414]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WAKEBRIDGE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49652359453897, 53.09740402982654]
          }
        },
        {
          type: "Feature",
          properties: { Name: "36, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47908881663732, 53.0229996457512]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE LAWN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47073449129958, 53.02832938010339]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TWO SETS GATE PIERS, SMALL GATE AND GARDEN WALL AT NUMBERS 112 AND 114",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47124273434687, 53.02822376649438]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NORTHFIELD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48459748469011, 53.02863287350529]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "WESTERN BOUNDARY WALL, GATE AND END PIERS AT ENTRANCE TO BELPER CEMETERY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47975332076146, 53.03749137537481]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BROADHOLM FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48170029119997, 53.04019839066063]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Nos 2 to 16 (even) and No 20 Mill Street",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48106722823743, 53.02709837111416]
          }
        },
        {
          type: "Feature",
          properties: { Name: "147, Over Lane, Belper", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4483966591747, 53.02731112227638]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Footbridge over railway to the west of Pingle Lane (SPC8 34)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48323233856614, 53.02857693279469]
          }
        },
        {
          type: "Feature",
          properties: { Name: "No. 24, QUEEN STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47950212763326, 53.02210253183676]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WHITE HART PUBLIC HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46263900862779, 53.0126159297058]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "HOPPING HILL TERRACE COAL SHUTE ADJACENT TO NUMBER 14 WEST TERRACE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47879082361137, 53.00558625346278]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PUMP OPPOSITE NUMBERS 30 AND 31 SHORT ROW",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48081452867744, 53.02703434554487]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GATE PIERS AND GARDEN WALL TO SPENCER ROAD AT THE LAWN AND LAWN COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.46786570627283, 53.02639290566725]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Bridge over Railway", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48306460005152, 53.02673998172613]
          }
        },
        {
          type: "Feature",
          properties: { Name: "3 AND 4, WILLIAM STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48172829750623, 53.02667875602656]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RANGES OF FARM BUILDINGS AND CONNECTING WALLS TO SOUTH EAST AT WYVER FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49429223184242, 53.04238292975575]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RAILED WALL AND GATE PIERS ALONG WESTERN CHURCHYARD BOUNDARY AT CONGREGATIONAL CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48030881446335, 53.02569274742091]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1, HIGH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47856842753002, 53.02412101967785]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Wildersley Farmhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47449622686033, 53.01074515955705]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Mile stone in front of Holly Bush Inn",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47707876998729, 52.99815618545868]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PEAR TREE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4787987806799, 53.00492108718208]
          }
        },
        {
          type: "Feature",
          properties: { Name: "29 AND 30, HOPPING HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48055952721085, 53.00598051767713]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CARTSHED (TO NORTH OF WAR MEMORIAL DERBY ROAD)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47889120002806, 53.00466979392663]
          }
        },
        {
          type: "Feature",
          properties: { Name: "57-64, HOPPING HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47920176668819, 53.00486891512597]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Lodge Farmhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45586093542061, 53.03843814927542]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Bridge over Railway", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48296892922998, 53.02619349884903]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NAILERS SHOP AT NUMBER 8", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48127000248875, 53.02635314956024]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Pottery Methodist Church and adjoining schoolroom",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.46307775644044, 53.02705361040543]
          }
        },
        {
          type: "Feature",
          properties: { Name: "POTTERY FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45866855174324, 53.02425157630256]
          }
        },
        {
          type: "Feature",
          properties: { Name: "5 AND 6, LONG ROW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48447788477833, 53.0274098236177]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "STONE BAULKS OUTSIDE EACH HOUSE NUMBERS 7 TO 20 (CONSECUTIVE) AND NUMBERS 25 TO 36 (CONSECUTIVE)\r\nSTONE KERB ON BRIDGE BETWEEN NUMBERS 20 AND 25\r\nTHREE STONE BAULKS ON RAILWAY BRIDGE BETWEEN NUMBERS 20 AND 25.",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48291338116338, 53.02732214005639]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Bridge over Railway", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48313961021802, 53.02729798888782]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "STONE WALL IN FRONT OF PARAPET OF BRIDGE BETWEEN NUMBERS 53 AND 58",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48312275546732, 53.02726911342717]
          }
        },
        {
          type: "Feature",
          properties: { Name: "68-70, LONG ROW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48431635053478, 53.02720237264084]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STONE WALL TO NORTH AND WEST OF NUMBERS 68 TO 70",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48468897304288, 53.02721297429947]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MAKENEY TERRACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47674375245837, 52.99613855058252]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Retaining walls to weirs in River Derwent near former Forge Mill",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47892774820431, 53.00161362337452]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7676791303553, 53.04882083339673]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SUNDIAL IN CHURCHYARD, 10 YARDS SOUTH OF SOUTH PORCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.76844055884877, 53.04835198591584]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ST MARYS BRIDGE (EAST)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.78313558550509, 53.05137587342925]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THORPE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.76701454653212, 53.05034768593411]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HOUSE TO THE SOUTH WEST OF GREEN FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60093918182553, 53.04830717868607]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NORTHFIELD FARMHOUSE AND GARDEN WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60209228226814, 53.04820132934243]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BUXTON HALL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60311815689114, 53.0481886094997]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "OUTBUILDINGS AND FORMER OUTBUILDINGS TO THE WEST OF THE BARLEY MOW INN",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60441983604755, 53.04776145915923]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDINGS TO THE WEST OF MILL FIELDS FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.63345445952147, 53.04347661451534]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "FARMHOUSE AND ATTACHED OUTBUILDINGS TO THE SOUTH OF WELL BANKS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60110779058646, 53.04619529055211]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Topshill Barn", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.59620677795078, 53.05350494181895]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.59974319880558, 53.04859081934401]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GATE PIERS AT WOODHEAD FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67672622331488, 53.03198958756926]
          }
        },
        {
          type: "Feature",
          properties: { Name: "AGNES MEADOW FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67962478231761, 53.0284000722319]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILE STONE (SOUTH WEST OF HORSLEY FARM)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.70611719995484, 53.05740989320033]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Primitive Methodist Chapel", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.69129526905179, 53.04780248426445]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BROOK FARM, BARN TO NORTH OF HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.69233009622468, 53.04700392381712]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BROOK FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.69223990103943, 53.04683685256872]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PETHILLS FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68942896799843, 53.03764890152836]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RED LION INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.69252759779532, 53.04861469262782]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BLACKWALL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61660606992019, 53.04111336632121]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "COTTAGE TO THE NORTH OF TOWNEND FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60612796460809, 53.04802306423681]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HOUSE SOUTH WEST OF CHURCHYARD GATES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.600806671385, 53.04811796236432]
          }
        },
        {
          type: "Feature",
          properties: { Name: "16, VICTORIA SQUARE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7329961713941, 53.01734280683099]
          }
        },
        {
          type: "Feature",
          properties: { Name: "K6 TELEPHONE KIOSK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73433530017522, 53.01677362555861]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "2 K6 TELEPHONE KIOSKS OUTSIDE THE MARKET PLACE POST OFFICE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73215831442448, 53.01809357022868]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CENTURY HALL AND FRONT WALL WITH RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73531590263363, 53.01596098184427]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BRADBOURNE MILL OUTBUILDINGS TO SOUTH OF MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.70120295681889, 53.06615406012943]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Bradbourne Mill", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70122381243616, 53.06637192310074]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO EAST OF WHITEMEADOW FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.7042790158115, 53.07442315557277]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CROWTREES FARMHOUSE AND OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67508215303935, 53.06970220763429]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PARK FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67313014701276, 53.06823480208291]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NETHERTON HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6718404253355, 53.06791310432243]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRADBOURNE HALL STABLES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68979676167539, 53.07165570855061]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRADBOURNE HALL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.69031945182872, 53.07161212226168]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SUNDIAL 10 YARDS SOUTH OF BRADBOURNE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.69039497615546, 53.07148647102144]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of All Saints", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.69090119804364, 53.07165857787845]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CROSS (200 METRES SOUTH OF CHURCH)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.69088498301605, 53.07137780434301]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD PARSONAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.69057670833441, 53.07111838970913]
          }
        },
        {
          type: "Feature",
          properties: { Name: "5, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73331067661799, 53.01723297238259]
          }
        },
        {
          type: "Feature",
          properties: { Name: "13, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73272806068248, 53.01743841760534]
          }
        },
        {
          type: "Feature",
          properties: { Name: "29, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73144699347506, 53.0179325657887]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SWISS COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73119380585673, 53.01803566685779]
          }
        },
        {
          type: "Feature",
          properties: { Name: "45, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73078257592727, 53.01827214849461]
          }
        },
        {
          type: "Feature",
          properties: { Name: "47 AND 49, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73063332746235, 53.01833891437165]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WILLIAMS AND GLYNS BANK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73336364119043, 53.01698139511841]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WH SMITH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73325119378934, 53.01702091507306]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARCLAYS BANK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73314863964065, 53.0170737080136]
          }
        },
        {
          type: "Feature",
          properties: { Name: "14, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73273405037427, 53.01722615093518]
          }
        },
        {
          type: "Feature",
          properties: { Name: "16, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73256213765446, 53.01727647393869]
          }
        },
        {
          type: "Feature",
          properties: { Name: "22, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73226088410325, 53.01740573122302]
          }
        },
        {
          type: "Feature",
          properties: { Name: "26 and 28 St John's Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73204357605017, 53.01744755196998]
          }
        },
        {
          type: "Feature",
          properties: { Name: "30 St John Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73204531123927, 53.01752098659097]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SMITHS WINE TAVERN", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.73184208060217, 53.01759809235246]
          }
        },
        {
          type: "Feature",
          properties: { Name: "50, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73114947390795, 53.01774759882291]
          }
        },
        {
          type: "Feature",
          properties: { Name: "54, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73078701130956, 53.01795541889425]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN WALL, PIERS AND GATES TO SPALDEN'S ALMSHOUSES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.7374516564145, 53.01456488282286]
          }
        },
        {
          type: "Feature",
          properties: { Name: "16 AND 18, STURSTON ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73094396315675, 53.0142881922237]
          }
        },
        {
          type: "Feature",
          properties: { Name: "3, UNION STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73348450951138, 53.01843366151535]
          }
        },
        {
          type: "Feature",
          properties: { Name: "5, VICTORIA SQUARE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73321869142006, 53.01764626815645]
          }
        },
        {
          type: "Feature",
          properties: { Name: "10, VICTORIA SQUARE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73277100355718, 53.0177261673098]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD TOLLHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.71782198394991, 53.0059518397947]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BUILDING IN REAR YARD OF NUMBER 24 (WALTON PARK)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.72981437160208, 53.01377325318148]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WILLIAMS AND GLYNS BANK (PART)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73329247781622, 53.01694839209499]
          }
        },
        {
          type: "Feature",
          properties: { Name: "8, DIG STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73318291097242, 53.01688260042577]
          }
        },
        {
          type: "Feature",
          properties: { Name: "12, DIG STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73303776618161, 53.01682287752872]
          }
        },
        {
          type: "Feature",
          properties: { Name: "9, DIG STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73328407653275, 53.01671154101845]
          }
        },
        {
          type: "Feature",
          properties: { Name: "11, DIG STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73331455293096, 53.01660373920102]
          }
        },
        {
          type: "Feature",
          properties: { Name: "13, DIG STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73319475157043, 53.01669336266657]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DOVE HOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.73503516661167, 53.01799191017886]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GARDEN WALL TO DOVE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73495012383575, 53.01772960144407]
          }
        },
        {
          type: "Feature",
          properties: { Name: "49 AND 51, GREEN ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.72605247520022, 53.02175603270933]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1, LOVATT'S YARD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.732140711237, 53.01840792856985]
          }
        },
        {
          type: "Feature",
          properties: { Name: "3-4, LOVATT'S YARD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73194333406076, 53.018570636215]
          }
        },
        {
          type: "Feature",
          properties: { Name: "3, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73215804852881, 53.01792092637687]
          }
        },
        {
          type: "Feature",
          properties: { Name: "7, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73235245976459, 53.01791400026997]
          }
        },
        {
          type: "Feature",
          properties: { Name: "13 Market Place", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73273491119065, 53.01785037866767]
          }
        },
        {
          type: "Feature",
          properties: { Name: "31 AND 33, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73308236678571, 53.01798065647449]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GEORGE AND DRAGON PUBLIC HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73308811696686, 53.01828321235462]
          }
        },
        {
          type: "Feature",
          properties: { Name: "12, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73190846993795, 53.01807940765318]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE TOWN HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73220967851632, 53.01828484572865]
          }
        },
        {
          type: "Feature",
          properties: { Name: "24, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73237888245753, 53.01846239882234]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NATIONAL WESTMINSTER BANK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73366930886398, 53.01708994797111]
          }
        },
        {
          type: "Feature",
          properties: { Name: "7, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73403780887853, 53.01693224450793]
          }
        },
        {
          type: "Feature",
          properties: { Name: "13, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73442431710613, 53.01679109402259]
          }
        },
        {
          type: "Feature",
          properties: { Name: "17 AND 19, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73469424174817, 53.01667452787532]
          }
        },
        {
          type: "Feature",
          properties: { Name: "21 AND 23, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73486449368368, 53.01665214448953]
          }
        },
        {
          type: "Feature",
          properties: { Name: "27 Church Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7351032632408, 53.01660772968141]
          }
        },
        {
          type: "Feature",
          properties: { Name: "31 Church Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73540187558361, 53.01652749061078]
          }
        },
        {
          type: "Feature",
          properties: { Name: "33-37, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73553353037463, 53.01641891863103]
          }
        },
        {
          type: "Feature",
          properties: { Name: "49 CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73649241131965, 53.01613438371651]
          }
        },
        {
          type: "Feature",
          properties: { Name: "51 Church Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73664208395256, 53.01603356396246]
          }
        },
        {
          type: "Feature",
          properties: { Name: "59, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73694040262134, 53.01600053600892]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE GREY HOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.73708973244191, 53.01595591973054]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PARTLY COBBLED AND RAISED PAVEMENT AND STEPS AT FRONT OF OLD GRAMMAR SCHOOL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73736245370887, 53.01576542035982]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE CORNER HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73376397370369, 53.01683675397467]
          }
        },
        {
          type: "Feature",
          properties: { Name: "24 AND 26, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73448941129606, 53.01650690893125]
          }
        },
        {
          type: "Feature",
          properties: { Name: "28, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73473527956522, 53.01641913441668]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PEGG'S ALMSHOUSES", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.73625545289836, 53.01588216265038]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SUMMER HOUSE IN GROUNDS OF MANSION HOUSE",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73663033606355, 53.01551443578769]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GARDEN WALL TO NUMBER 72", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73764355728906, 53.01520936267133]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "CHURCHYARD GATE PIERS AND GATES TO THE PARISH CHURCH OF ST OSWALD",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73803209369877, 53.01544302898516]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WAR MEMORIAL ARCH TO PARK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7300674496293, 53.01831463118198]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LLOYDS BANK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73233454132156, 53.01599027783655]
          }
        },
        {
          type: "Feature",
          properties: { Name: "COOPERS ALMSHOUSES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73135672876814, 53.01387024526552]
          }
        },
        {
          type: "Feature",
          properties: { Name: "35, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57289931269658, 53.08120939866293]
          }
        },
        {
          type: "Feature",
          properties: { Name: "57 AND 59, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57329492654746, 53.08011414374727]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PREMISES OCCUPIED BY LLOYDS BANK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57341685435632, 53.08163250047688]
          }
        },
        {
          type: "Feature",
          properties: { Name: "8, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57334078314957, 53.08135992085143]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WIRKSWORTH MATERNITY HOME", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5734080417224, 53.0810131458251]
          }
        },
        {
          type: "Feature",
          properties: { Name: "34 AND 36, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57353740864563, 53.0802890141775]
          }
        },
        {
          type: "Feature",
          properties: { Name: "38, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57355931923592, 53.08023798946168]
          }
        },
        {
          type: "Feature",
          properties: { Name: "5, ST MARYS GATE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57268697014876, 53.08146900712978]
          }
        },
        {
          type: "Feature",
          properties: { Name: "47-50, WASH GREEN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56414551034468, 53.0831346040823]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1, WEST END", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57439487749463, 53.08189558531447]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WIGWELL GRANGE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.54408257592486, 53.08583060125806]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOME FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54494759872296, 53.08733509024744]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILE STONE 2 MILES FROM WIRKSWORTH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.53065612984705, 53.09214405086012]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE OLD COACHHOUSE AND ATTACHED BOUNDARY WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57447163637485, 53.08299787978988]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GATE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.71282502981014, 53.01339192312716]
          }
        },
        {
          type: "Feature",
          properties: { Name: "2, BUXTON ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73312221535861, 53.01878767625721]
          }
        },
        {
          type: "Feature",
          properties: { Name: "18-22, BUXTON ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73341584709752, 53.01951928941967]
          }
        },
        {
          type: "Feature",
          properties: { Name: "3, BUXTON ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73283334733542, 53.01884556447234]
          }
        },
        {
          type: "Feature",
          properties: { Name: "5, BUXTON ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73286037724569, 53.01887853891474]
          }
        },
        {
          type: "Feature",
          properties: { Name: "13 AND 15, BUXTON ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73294985222619, 53.01902122048174]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OUTBUILDING OF VICARAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57280011917091, 53.08268367146815]
          }
        },
        {
          type: "Feature",
          properties: { Name: "6, COLDWELL STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5720186191487, 53.08262926072329]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GEORGE INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5717655371951, 53.08263894067137]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ADAM BEDE'S COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57707757475848, 53.06979650641548]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "WAREHOUSE OF HAARLEM MILL AT THE SOUTH WEST SIDE OF HAARLEM MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.5781045299844, 53.06981005062958]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILE POST 1 MILE FROM WIRKSWORTH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57402752347153, 53.06596949055158]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1-3, GREEN HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57392611835086, 53.08297462633931]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BLACK'S HEAD INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57443401026255, 53.08223306225042]
          }
        },
        {
          type: "Feature",
          properties: { Name: "4 AND 5, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57408606975768, 53.08237032071178]
          }
        },
        {
          type: "Feature",
          properties: { Name: "7 AND 8, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57388034032179, 53.0824621191507]
          }
        },
        {
          type: "Feature",
          properties: { Name: "9, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57387749704051, 53.08252183265413]
          }
        },
        {
          type: "Feature",
          properties: { Name: "11, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57388709109233, 53.08266917246267]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DALE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5740895472477, 53.08283740117611]
          }
        },
        {
          type: "Feature",
          properties: { Name: "15, MARKET PLACE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.57377807456005, 53.08284824933271]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILE POST ON NORTH WEST ANGLE OF TOWN HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57324042287777, 53.08270294870393]
          }
        },
        {
          type: "Feature",
          properties: { Name: "21 AND 22, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57342950090492, 53.08241997421105]
          }
        },
        {
          type: "Feature",
          properties: { Name: "24, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57344563866063, 53.08218868813607]
          }
        },
        {
          type: "Feature",
          properties: { Name: "28, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57341055845859, 53.08203574761128]
          }
        },
        {
          type: "Feature",
          properties: { Name: "2-6, NORTH END", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57165371858685, 53.0829054885152]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROYAL OAK INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.571390882036, 53.08309162488062]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RAILWAY BRIDGE 225 YARDS TO SOUTH WEST OF CROSS ROADS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.58566747259048, 53.09312877146635]
          }
        },
        {
          type: "Feature",
          properties: { Name: "15, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.573053796272, 53.08167272992943]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOLEHOUSE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5636731523106, 53.06613642451163]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1-3, BLIND LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57103434371191, 53.08235062766317]
          }
        },
        {
          type: "Feature",
          properties: { Name: "12, THE CAUSEWAY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57439844701676, 53.08153022651764]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BRACKET LAMP ON NORTH WALL OF NUMBER 14",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57376556387306, 53.08166353823349]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE GATE HOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.57530131732804, 53.08128059302808]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GATE PIERS OF THE GATE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57423046148879, 53.08145089075703]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MOOT HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57202963786122, 53.08404560670884]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCHYARD CROSS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57266021072621, 53.08216048067217]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GATE PIERS AND GATES TO WEST OF ST MARY'S CHURCHYARD",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57326082159256, 53.0820419533086]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "A GROUP OF 4 BOLLARDS AT EAST END OF PASSAGEWAY BETWEEN NUMBERS 22 AND 23 MARKET PLACE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57334251464862, 53.08234849597602]
          }
        },
        {
          type: "Feature",
          properties: { Name: "VICARAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57262800791251, 53.08255190314927]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GRAMMAR SCHOOL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.57172479868265, 53.08219448027972]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "A GROUP OF 4 BOLLARDS AT SOUTH SIDE OF GELL'S BEDEHOUSES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57172327863292, 53.0817823840849]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE COMPLEAT ANGLER INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57300179267596, 53.08284547022502]
          }
        },
        {
          type: "Feature",
          properties: { Name: "15, COLDWELL STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57231392492503, 53.08295986189238]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.33727941542648, 53.30380652909306]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "ROAD BRIDGE 175 METRES SOUTH OF RENISHAW PARK GOLF CLUBHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.33779082132903, 53.30177786467897]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Renishaw Park Golf Clubhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.33715647200425, 53.30331202668853]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TROWAY HALL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4218705871948, 53.31355738637995]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FOLD FARM COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41036429423768, 53.3131237275658]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NUMBERS 125 AND 127 AND ATTACHED OUTBUILDING TO EAST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.36384065416444, 53.3078065360768]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Park Farmhouse and attached farm building to the south-west",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.3163653045441, 53.30069598355799]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE ANGEL HOTEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35575670897994, 53.31048688661144]
          }
        },
        {
          type: "Feature",
          properties: { Name: "13-19, MARKET STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35541438480372, 53.31029627566551]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GARDEN WALLS, PIERS, STATUES, AND STEPS TO THE SOUTH OF RENISHAW HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34444634382973, 53.30190084024188]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN FOUNTAIN 40 METRES SOUTH WEST OF RENISHAW HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34493343954135, 53.30209749689622]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Gothick Archway", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.33939108251372, 53.30213471066781]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SOUTHGATE OLD HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35438427008217, 53.30793564604578]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1, 3 AND 11, STATION ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.33763199377166, 53.30332307368117]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "EDNASTON HOUSE AND ATTACHED OUTBUILDINGS, WALLS AND RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64563591630706, 52.96929860754903]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GREEN FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62427576695358, 52.9702129067752]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARN TO SOUTH OF GREEN FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62472370796189, 52.97007049211834]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD RECTORY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62507851718742, 52.96843690746905]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BURROWS HALL FARMHOUSE AND GARDEN WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.61053513651153, 52.95350843517854]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRAILSFORD MILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63910884435903, 52.9753018062499]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BARN TO SOUTH EAST OF YEAVELEY HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.72367423919725, 52.95991379408003]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "REMAINS OF CHAPEL OF ST MARY AND ST JOHN THE BAPTIST TO SOUTH OF STYDD HALL",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.74537886945112, 52.9570491203989]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of All Saints", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.63676363775016, 52.96829529501643]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH STABLE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63640988523846, 52.96802452082548]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCHFIELDS FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63586968109921, 52.96158203569804]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BARN AND ATTACHED STABLE RANGE AT CHURCHFIELDS FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.63612333038409, 52.9619436287894]
          }
        },
        {
          type: "Feature",
          properties: { Name: "COWHOUSE AT CHURCHFIELDS FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63561762237009, 52.96188814506796]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STABLE BLOCK AT CULLAND HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63780351606892, 52.94970532638916]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CULLAND MANOR FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63369417563548, 52.94989050751442]
          }
        },
        {
          type: "Feature",
          properties: { Name: "POOLS HEAD FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62694226262866, 52.96142078390535]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GARAGE COTTAGES AND GARAGE SHOP", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61768818452631, 52.96752210095575]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BOUNDARY POST AT OS 243 418", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63904325040478, 52.97374407241478]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BOUNDARY POST AT OS 225 428", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66690463530294, 52.98217566532898]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "EDNASTON MANOR AND ATTACHED WALLS AND TERRACING",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64631495682926, 52.97732803486266]
          }
        },
        {
          type: "Feature",
          properties: { Name: "COACH HOUSE AT BRAILSFORD HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61886382002411, 52.96842044466974]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "CHURCHYARD CROSS 21 YARDS SOUTH-EAST OF ST CHAD'S CHURCH PORCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68157439939978, 52.9416862416398]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PAIR OF TABLE TOMBS 13 YARDS SOUTH OF ST CHAD'S CHURCH PORCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68199104462612, 52.94168735616275]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ICEHOUSE QUARTER OF A MILE NORTH EAST OF LONGFORD HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67475651871781, 52.94203635816718]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LONGFORD GRANGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66637479706393, 52.93673641148116]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BRIDGE OVER RIVER TO SOUTH WEST OF LONGFORD MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67499712805553, 52.93431314871327]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BRIDGE OVER MILL TAIL OF LONGFORD MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67432097934256, 52.93409450599278]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MARSH FARMHOUSE AND ATTACHED OUTBUILDING",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66169844446299, 52.92965758829579]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NORBURY MILL BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.819336452257, 52.97777005474214]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CORN DRYING KILN TO SOUTH OF NORBURY MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.82230344256897, 52.9769654836743]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Mary and St Barlok", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.81454482331785, 52.9787750139857]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STONE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.81538893493547, 52.97797975134409]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BROOKFIELD MANOR", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65399562818275, 53.34298484330435]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NORTH LEES HALL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.6479535052811, 53.34737380107335]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FARM OUTBUILDING TO THE NORTH WEST OF NORTH LEES HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64812763378368, 53.34754312155224]
          }
        },
        {
          type: "Feature",
          properties: { Name: "UPPER HURST FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66713976861453, 53.34853220358394]
          }
        },
        {
          type: "Feature",
          properties: { Name: "North Farmhouse, Little Cubley", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.76226041124858, 52.93547435697172]
          }
        },
        {
          type: "Feature",
          properties: { Name: "COTTAGE NORTH OF THE OLD SMITHY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.76188676872581, 52.9367728847803]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ROSEBANK FARMHOUSE, LITTLE CUBLEY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.76146801197937, 52.93617393700008]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TABLE TOMB 14 YARDS SOUTH OF SOUTH PORCH OF ST ANDREWS CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.75612644318035, 52.93619907791401]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GROUP OF GRAVESTONES AND TABLE TOMBS 8 YARDS SOUTH EAST OF SOUTH PORCH OF ST ANDREWS CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.75608176021609, 52.93626941471834]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD RECTORY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.75505291125131, 52.93660139258886]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "LONGFORD HALL AND ATTACHED GARDEN WALL",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68144383912028, 52.94122743739649]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARN AT LONGFORD HALL FARM", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.68153594223912, 52.94287272668686]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "COWSHEDS TO NORTH WEST OF STABLE BLOCK AT LONGFORD HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68199842485292, 52.94271215643227]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Chad", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.68181755281859, 52.94188855296702]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MITCHELL FIELD FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62932224506054, 53.33212444332938]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SCRAPERLOW FARMHOUSE AND ATTACHED OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.63588207048997, 53.3288457360016]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Church of St Michael and All Angels",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65011127016898, 53.3331039303777]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE VICARAGE AND GARDEN WALLING", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65076801171923, 53.33303531095871]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE NORTH EAST OF THE OLD BELL HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64968000315425, 53.3329080995989]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HALL FARMHOUSE, BOUNDARY WALL AND GATE PIERS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65330914912589, 53.33107622046241]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65368611376826, 53.33112782559907]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Dale Mill and detached chimney", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64825757621668, 53.33209175486134]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Booth's Farmhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64003803289338, 53.32430147737441]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LEADMILL BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65102726168189, 53.32185618665421]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BROOMFIELD AND RAILINGS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65411344164117, 53.33027513265091]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Lamp column to the north east of Hathersage Farmhouse",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65624624720055, 53.32997075850212]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE SOUTH SOUTH WEST OF HATHERSAGE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65136029681465, 53.33093230530764]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ROMAN CATHOLIC CHURCH OF ST MICHAEL",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65682652522224, 53.33085822643827]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILL COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65757265391271, 53.32774191947161]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WHITE EDGE LODGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60378388756613, 53.30312871108784]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HATHERSAGE HALL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.65086054399259, 53.33145219381289]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "ROCK HOUSE, ATTACHED OUTBUILDING ENTRANCE, GATE PIERS AND GATES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64921606478682, 53.33240018699706]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WHIM COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63722063513114, 53.32230538087497]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PADLEY MILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62525364395249, 53.30632308378004]
          }
        },
        {
          type: "Feature",
          properties: { Name: "IVY COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68281770995287, 53.17477715152979]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WESTERN GATEPIERS AND GATES TO ALL SAINTS CHURCHYARD",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68459380919199, 53.17603122879691]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "LATHKILL HOUSE AND ATTACHED RAILINGS AND GARDEN WALLS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6850379981736, 53.17599653520337]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "AUBURN HOUSE AND ATTACHED RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68517304122782, 53.17594295722727]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RAPER LODGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68143056898365, 53.18231520595617]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THIMBLE HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68674884510882, 53.17527292561157]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FISH AND CHIP SHOP ATTACHED TO WEST OF BULL'S HEAD CHAMBERS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68642975928512, 53.17515395652448]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FOOTBRIDGE OVER RIVER BRADFORD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68893740038036, 53.17260891753557]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LOMBERDALE HALL COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70460199275794, 53.17242394142173]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PAIR OF RE USED ARCHES IN GARDEN 20 METRES SOUTH WEST OF LOMBERDALE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.70625434985603, 53.17141516468384]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DOVE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68755425932958, 53.17561661502684]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GRINDLEFORD BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63414444303301, 53.29675064510926]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LEAM HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64863318753335, 53.30854855770693]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHERRY COTTAGE AND ATTACHED DWELLING AT NORTH WEST END",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64929116331917, 53.30885965386221]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO NORTH WEST OF LEAM HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64903391470802, 53.30884014799581]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FERN COTTAGE AND ATTACHED OUTBUILDING TO NORTH EAST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65138861112943, 53.30902680801975]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LEAM FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65292271200739, 53.31232116007341]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Hazelford Hall", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65182448913862, 53.31632695539828]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GREENWOOD FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63666706741206, 53.31837765327036]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HILL VIEW AND ATTACHED BARN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6707629471906, 53.17746359901859]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRADFORD HOUSE\r\nTHE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67087775991563, 53.17734414628744]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROCK HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67095636207606, 53.17834965745929]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FERN GLEN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6710621228323, 53.17821511413324]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LATHKILL HOUSE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67233776910968, 53.17770624769917]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HADDONFIELDS FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67014862599137, 53.17832046359079]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RAENSTOR CLOSE AND ATTACHED GARAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6782048906322, 53.17743454418585]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN WALLS, PERGOLA AND GATEPIERS TO RAENSTOR CLOSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6789822246908, 53.17752652454467]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of All Saints", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.6841951378171, 53.17605941350376]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PACKHORSE BRIDGE OVER RIVER BRADFORD 120 METRES SOUTH EAST OF BRAEMAR HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67994715636131, 53.17315093615626]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PIGEONCOTE 20 METRES NORTH WEST OF ENTRANCE GATEHOUSE TO HADDON HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65392183479827, 53.19400556122872]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GARDENER'S COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65087402021874, 53.19423693594446]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "DOROTHY VERNON'S BRIDGE OVER RIVER WYE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64926074990531, 53.19308481453581]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 169 707", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.74775702594768, 53.23293426627697]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Michael", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.78978228828975, 53.23729626590619]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOME FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7830716145712, 53.23616807749941]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROSE FARMHOUSE AND IRON RAILINGS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.79380715126854, 53.24468300776053]
          }
        },
        {
          type: "Feature",
          properties: { Name: "K6 TELEPHONE KIOSK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70312725502302, 53.24307232750284]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Giles", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.70144349230383, 53.2438591480778]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GATE POST AT OS 180 733", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73151592428542, 53.25651208105277]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DOWNSIDE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7052338614582, 53.2364505006309]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HALL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.70392823581529, 53.24426082708824]
          }
        },
        {
          type: "Feature",
          properties: { Name: "UPPER STABLES AT THE HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7047536420033, 53.24408309168182]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SHAKERLEY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70293108842974, 53.24326959311048]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WHITE LION", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70212728523219, 53.24249456199397]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ASH HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70235130180996, 53.24260298454706]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GATES AND GATE PIERS TO THE MANOR HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.70391391839029, 53.24328635288914]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70520454518439, 53.24388645100324]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "LYDGATE GRAVES AND ENCLOSING WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67053730266967, 53.28334453793192]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DALE HEAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67210876600602, 53.28399195163587]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MERRILL HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67980226490354, 53.28716478706201]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO SOUTH OF MERRILL HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67988028062473, 53.28709308630631]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE OLDE HOUSE AND ATTACHED GARAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68006530699403, 53.28735425272124]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HIGHCLIFFE FARMHOUSE AND JUMBER COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68062068414622, 53.29344464968627]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RILEY GRAVES AND GRAVEYARD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65865698038238, 53.28396023929835]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FERN LEA", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67131274588044, 53.28440919204177]
          }
        },
        {
          type: "Feature",
          properties: { Name: "UPPER BIRCH ROW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66921793134402, 53.28467045647647]
          }
        },
        {
          type: "Feature",
          properties: { Name: "2 AND 3, CHURCH AVENUE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67549099810461, 53.28436587856387]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1, CHURCH AVENUE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67554372458725, 53.28423487374998]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NUMBER 10 AND MEMORIAL COTTAGE AND COTTAGE ATTACHED TO EAST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67389850306869, 53.28363425323636]
          }
        },
        {
          type: "Feature",
          properties: { Name: "AUGHTON HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67528443280467, 53.2839447059818]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BARN TO NORTH WEST OF COACH HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6758899917176, 53.28408011298846]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE RECTORY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67394275690883, 53.28407361583611]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCHYARD TOMB 7 METRES SOUTH OF CHURCH PORCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67490007197959, 53.28407742631825]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Lawrence", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.67486837057243, 53.28430205770073]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WALLS, GATEPIERS AND WATER TROUGHS TO EAST OF EYAM HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67632931221797, 53.28441134625959]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARN TO WEST OF EYAM HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67726264116971, 53.28504561590309]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LABURNUM COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67727216033077, 53.28577372633898]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LADY WASH FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67180845745185, 53.29606890164914]
          }
        },
        {
          type: "Feature",
          properties: { Name: "EYAM VIEW FARM BUILDINGS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68823250756078, 53.28883381922815]
          }
        },
        {
          type: "Feature",
          properties: { Name: "EDGE LEA", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67773683679923, 53.28656902840088]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WALL AND WATER TROUGHS TO SOUTH EAST OF EDGE MOOR",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67779221665619, 53.28669776992935]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TOMB OF H MERRILL, 25 METRES NORTH OF HOLLINS FARMHOUSE (SK214768)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68034079715529, 53.28809576583726]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SUNDAY SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57241753491678, 53.08305012484753]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN WALL, GATE PIERS AND GATES OF OLD MANOR HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57074306771547, 53.08250632646122]
          }
        },
        {
          type: "Feature",
          properties: { Name: "25, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57343807511242, 53.08214278961058]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOPE AND ANCHOR HOTEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57372678694076, 53.08199410006502]
          }
        },
        {
          type: "Feature",
          properties: { Name: "23, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57346809468355, 53.08232294003677]
          }
        },
        {
          type: "Feature",
          properties: { Name: "6, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57387411861345, 53.08236034912368]
          }
        },
        {
          type: "Feature",
          properties: { Name: "12, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57396643448827, 53.08275586760354]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Red Lion Hotel", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.57335377499043, 53.08280458819593]
          }
        },
        {
          type: "Feature",
          properties: { Name: "20, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57339194405287, 53.08247548237765]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WAR MEMORIAL AND STEPS IN FRONT OF CHESTERFIELD TOWN HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.43247118097165, 53.23632229458767]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Estate House, Cedar End and North Side",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42695610401368, 53.20207244439356]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "The Yews, The Hollies, and East View",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4271308207032, 53.20229869163288]
          }
        },
        {
          type: "Feature",
          properties: { Name: "35, NEW ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44022894781136, 53.19877382669626]
          }
        },
        {
          type: "Feature",
          properties: { Name: "238,240, LONGEDGE LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44204496726156, 53.20205307168936]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "ROADBRIDGE AND ASSOCIATED ENCLOSURE WALLS COMPRISING THE SHEEPWASH AT SK369671",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.44841347545056, 53.19964054200873]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CUTTHORPE HALL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.48473578670449, 53.25335036485093]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "COTTAGE NORTH EAST OF RUFFORD FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51443397021782, 53.23158690561684]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE BIRCHES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.51063183512735, 53.23745383965779]
          }
        },
        {
          type: "Feature",
          properties: { Name: "METHODIST CHAPEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.52801938627452, 53.23450880216914]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "COTTAGE AND ATTACHED OUTBUILDINGS TO SOUTH WEST SIDE OF LANE, TO NORTH WEST OF PRATT HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51137248869824, 53.25446004604752]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Parish Church of St Peter and St Paul",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49774457852178, 53.24330295264524]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BAPTIST CEMETERY CHAPEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57119577088336, 53.08484554272523]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GREAVES COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.74609274354393, 53.35376815617926]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Eccles House Farmhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.74116962766358, 53.34046949051006]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Peter", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.74265774764098, 53.34786427891461]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CROSS SHAFT 1 METRE SOUTH OF ST PETERS CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.74264437644295, 53.34776428914796]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TOLL COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.74534349801669, 53.35344297655929]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "A GROUP OF 4 BOLLARDS AT NORTH END OF ST MARY'S GATE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57234213926733, 53.08174460785944]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SIDE GARDEN WALL TO SPRING COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67824327847363, 53.21210001616102]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE VICARAGE COTTAGE AND YARD WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67900953833435, 53.21199887911423]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "The Chimneys, Number 1 Buxton Road",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67673574884144, 53.21414905965157]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "2 K6 TELEPHONE KIOSKS AT CORNER OF BUXTON ROAD AND NORTH CHURCH STREET",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67657517035095, 53.21321579789752]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BLUEBELL COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68563391428636, 53.21732884720689]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CATHOLIC CHURCH OF THE ENGLISH MARTYRS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67662463549042, 53.21452729040248]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GREENLANDS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68620225485306, 53.21742921376575]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "LUMFORD MILL (ORIGINAL BUILDING ONLY)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68342981251445, 53.21769157545707]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BRIDGE OVER RIVER WYE AT LUMFORD MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68301109350872, 53.21760956719414]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FACING TO BRIDGE OVER MILL STREAM AT LUMFORD MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68271333127505, 53.21792769445652]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MELBOURNE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6766521491201, 53.21485096106726]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "MILESTONE 20 METRES SOUTH OF JUNCTION WITH FOOTPATH TO HOLME BRIDGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6790990345633, 53.2168516180361]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILFORD COURT NUMBERS 1-7 (CONSECUTIVE)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6772976643246, 53.21534474757006]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILL COTTAGE AND FORD COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6774250908223, 53.21561709562572]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROCK HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67828959346067, 53.21615875192592]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RUTLAND CHAMBERS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67678249444701, 53.21344906296723]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RUTLAND HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67628591158399, 53.21377131577771]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "IRON RAILINGS AND GATE AT RUTLAND HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6764506277876, 53.21377176164486]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RUTLAND TERRACE NUMBERS 1 AND 4 AND REGENCY HOUSE FLATS 1-6 (CONSECUTIVE)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67670579790697, 53.21369155283472]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RAILED WALL AND GATES TO RUTLAND TERRACE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67659697762705, 53.21364509931452]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SAXBY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67631646942254, 53.21369049943588]
          }
        },
        {
          type: "Feature",
          properties: { Name: "IRON RAILINGS AND GATE AT SAXBY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67643633048985, 53.21368183509104]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SHEEPWASH ENCLOSURE TO SOUTH WEST OF HOLME BRIDGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67935683567376, 53.21733735473878]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STABLES TO THE NORTH WEST OF BLACKWALL HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6186610619495, 53.04147952894124]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BLACKWALL HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61812557301718, 53.04131600855839]
          }
        },
        {
          type: "Feature",
          properties: { Name: "METHODIST SUNDAY SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60169525535125, 53.04719505315534]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "COTTAGE AND BOUNDARY WALL, PIERS AND GATE, NORTH EAST OF METHODIST CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60128544204871, 53.0474877464661]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FOOTBRIDGE (ON FORMER EGGINGTON ESTATE AT SK 264277)",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60911636424725, 52.84665976474116]
          }
        },
        {
          type: "Feature",
          properties: { Name: "7, BLANCH CROFT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42916830749408, 52.82405003112203]
          }
        },
        {
          type: "Feature",
          properties: { Name: "K6 TELEPHONE KIOSK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68763608707173, 53.17464602001757]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "COTTON DOUBLING MILL AT DRAYCOTT MILLS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34366610623482, 52.8945276670015]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CARTSHED AND STABLE AT DRAYCOTT MILLS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34361826470351, 52.89474315083341]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCHYARD CROSS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41080233281669, 52.96419681982804]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE RECREATION ROOM\r\nTITHE BARN AND DOVECOTE",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.41075314711865, 52.96452918316687]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE RETREAT HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41044968429106, 52.96385347711742]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 394 414", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41464872359478, 52.96983574263049]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GATEWAY ATTACHED RETAINING WALL AND GARDEN SEAT AT MORLEY MANOR",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.40418860507902, 52.97901068414761]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ABBEY HOUSE\r\nMANOR HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35100165998569, 52.94388425170744]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ABBEY RUINS", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.35040026092214, 52.94429448630449]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Church of All Saints and Vergers Farmhouse",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.35066435191914, 52.94286945297774]
          }
        },
        {
          type: "Feature",
          properties: { Name: "IVY COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44993228210497, 52.95332732720579]
          }
        },
        {
          type: "Feature",
          properties: { Name: "METHODIST CHAPEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4447816558267, 52.95221554693858]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD HALL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.44958901357201, 52.95457512561]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1, PALL MALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44935504142106, 52.95247066410062]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BREADSALL MANOR", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45246193324239, 52.95855793545499]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Thatched Barn", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35304200458214, 52.9437785003153]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE GATE PIERS TO HOLY TRINITY CHURCHYARD",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60046218272995, 53.04826962319169]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Topshill Farmhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.59586466240368, 53.05339591191364]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WOODHEAD FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6768025630683, 53.03214764522322]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HORSLEY FARMHOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.70443607042355, 53.06104980653095]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BROOK COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.69247553379665, 53.0475448517445]
          }
        },
        {
          type: "Feature",
          properties: { Name: "JAMES LANE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.69382384003597, 53.04883376980795]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Michael", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.68820347016052, 53.05042824836654]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1, 2 AND 3, BAGSHAW HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67750251040739, 53.21518463836427]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BAGSHAW HALL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.67778018160935, 53.21414869158876]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BOUNDARY WALLS GATE PIERS AND GATE AT BAGSHAW HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67766957631389, 53.21407898025131]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "ENCLOSURE WALL TO GARDENS OF GREENBANKS HALLCROFT AND THE BUNGALOW (NOT INC)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67759747922541, 53.21401835604937]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HALL COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67760438280558, 53.21444518826858]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE NOOK AND STUDIO HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67691300307247, 53.21401570924416]
          }
        },
        {
          type: "Feature",
          properties: { Name: "YEW TREE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67832539354489, 53.2140858341587]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GARDEN WALL AT YEW TREE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67839159410153, 53.21404191776139]
          }
        },
        {
          type: "Feature",
          properties: { Name: "YEW TREE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67819580309958, 53.21410204636921]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ALDERN HOUSE (EASTERN PART ONLY)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67254265103297, 53.22158135758713]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRIDGE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67203134790524, 53.21494534101845]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CASTLE HILL COTTAGE AND CASTLE HILL FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67310957385015, 53.2172763120436]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "CASTLE HILL HOUSE AND STABLE BLOCK WITH GATES ADJOINING CASTLE HILL HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67264349030855, 53.21608319463044]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GATE PIERS AND LINKING WALLS AT MAIN ENTRANCE TO CASTLE HILL HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6730961242488, 53.21595144861104]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NEWHOLME HOSPITAL (MAIN BUILDING)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67239943437929, 53.21875849123854]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "COMMUNITY TRANSPORT OFFICE AT NEWHOLME HOSPITAL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67320963924087, 53.21856295553552]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NEWHOLME HOSPITAL PORTERS LODGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67259985835075, 53.21924417329149]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "NORTHERN PART OF THE BUSY BEE DAY NURSERY AT NEWHOLME HOSPITAL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67299990872314, 53.218571370863]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NURSES HOME AT REAR OF NEWHOLME HOSPITAL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67191035506664, 53.21870655409762]
          }
        },
        {
          type: "Feature",
          properties: { Name: "COULSDEN COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67623821197452, 53.21413972683665]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HAIG HOUSE WITH ATTACHED STEPS AND RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67601488485886, 53.21396833493566]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BANK HOUSE NUMBER 1", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67562412881585, 53.21415603990337]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BANK HOUSE NUMBERS 2 AND 3", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67562331447882, 53.21426390311863]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67610344301983, 53.21413936180945]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TRUSTEES SAVINGS BANK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6754296661925, 53.21412854578615]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GATEWAY GATE PIERS AND PLINTH WALL ACROSS FRONT OF TRUSTEES SAVINGS BANK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67550487724005, 53.21408380601471]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRIDGE HOUSE AND BRIDGEWAY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67336102156205, 53.21411137035631]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "DENMAN HOUSE\r\nPREMISES OF BYWAYS CAFE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67436169649408, 53.21347574350888]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MARKET HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67408945008372, 53.21376551924432]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PREMISES OCCUPIED BY BAGSHAWS ESTATE AGENTS AT SK 2184 6857",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67439455645793, 53.21380097537838]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PREMISES OCCUPIED BY JOHN BROCKLEHURST AT SK 2189 6959",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67361730931304, 53.21403093751208]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE CASTLE INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6736903238896, 53.21442942988985]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE QUEENS ARMS HOTEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67379111684318, 53.21395830608129]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "SMALL STONE BUILDING IN GARDEN OF COOMBS HAY (COOMBS HAY NOT INCLUDED)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6717533390646, 53.21707581828183]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BURTON CLOSES", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.67127197019379, 53.20561378618249]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BURTON CLOSES MEWS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67477084021604, 53.20423009193757]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TERRACE RETAINING WALLS STEPS AND GATES TO SOUTH AND EAST OF BURTON CLOSES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67113901689408, 53.20537971149658]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE LODGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66956693521916, 53.20733493624972]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BELVOIR COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67677732490868, 53.21214567478868]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BUTTS COTTAGE AND WOODSIDE COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67753369668141, 53.21112299519636]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GARDEN WALL AND GATE PIERS AT BUTTS COTTAGE AND WOODSIDE COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67727068382818, 53.21109433759317]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6771600400405, 53.21103209892675]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BUTTS HOUSE AND ATTACHED GARDEN WALL TO SOUTH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67805109418048, 53.21201427970135]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "L SHAPED SECTION OF GARDEN WALL TO EAST OF BUTTS HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67766070899091, 53.21215611184252]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Butts View", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67834861470076, 53.21227575534937]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SPRING COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67832024728638, 53.21217404100022]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BAKEWELL BRIDGE", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.6727763363324, 53.21449884206324]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ST LAWRENCE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.38851429873974, 53.1793492160382]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "URINAL NEXT TO NORTH SIDE OF TOWER PARISH CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39632926002065, 53.17582932646282]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ENTRANCE GATEHOUSE TO HADDON HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6520227347041, 53.1926905928951]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MAIN BRIDGE OVER RIVER WYE AT HADDON HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65151621492948, 53.19365479685581]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN TERRACES AND STEPS TO SOUTH EAST OF HADDON HALL",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64885971055889, 53.19386165597426]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SUTTON MANOR", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.33524413358245, 53.2134370497881]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62139685543387, 52.96908910810254]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE BAKERY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62108229160409, 52.9693038494332]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48531402613044, 52.98188592629518]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DUFFIELD CHURCH BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4795992752967, 52.98291873378675]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRAILSFORD BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64015723911805, 52.97373868960491]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRAILSFORD HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61908001270681, 52.96840751565207]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE PARK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48971230914964, 52.98674699271677]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OAKLANDS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6172255956189, 52.96763747442358]
          }
        },
        {
          type: "Feature",
          properties: { Name: "8 and 10 Tamworth Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48987655946504, 52.98797923973399]
          }
        },
        {
          type: "Feature",
          properties: { Name: "34 Town Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48794573259355, 52.9862360136872]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE FERNS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48737938954847, 52.98500203562872]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE SOPHIA WATER FOUNTAIN AT SK 376 445",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.44062899711334, 52.99642759838721]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DUFFIELD HALL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.48714532084044, 52.98338294103439]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE MEADOWS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48667019800026, 52.98451355800969]
          }
        },
        {
          type: "Feature",
          properties: { Name: "KETTLE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64190344781443, 53.31779856624177]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE MEWS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48796912058798, 52.98551696415813]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FARNAH HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.51068828756912, 52.98387743299386]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CASTLE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44447605278017, 52.98421629947754]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RIVERSIDE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67115209935267, 53.17818839488185]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LINDEN COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68407680558379, 53.17649738051581]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67122059160044, 53.17767196850065]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "LODGE, STABLEBLOCK AND OUTBUILDING TO RAENSTOR CLOSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67964106947105, 53.17745638080879]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SUNDIAL 10 METRES SOUTH WEST OF ALL SAINTS CHURCH PORCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68406618490982, 53.17590408033206]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILESTONE 800 METRES SOUTH WEST OF CONKSBURY FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6983004959546, 53.18232447349248]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "FOOTBRIDGE OVER RIVER BRADFORD 60 METRES SOUTH WEST OF BEDFORD HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6824891708387, 53.17278142865262]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STONE CROFT, CUCKOO COTTAGE AND THE LITTLE HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.70206510269724, 53.24281800223832]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "COTTAGE ATTACHED TO EAST OF NO 5 CHURCH STREET",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68481246641726, 53.17614875308499]
          }
        },
        {
          type: "Feature",
          properties: { Name: "IRON SCREEN NORTH OF THE HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.53581169536586, 52.95979313448954]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NOS 3 AND 5 AND GARDEN RAILINGS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6848880592696, 53.17604108477897]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROSE COTTAGE AND SPRING BANK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70069111826369, 53.24215839714638]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6877246157271, 53.17481704190004]
          }
        },
        {
          type: "Feature",
          properties: { Name: "VILLAGE CROSS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70340463403018, 53.24296699941471]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GARDEN SEAT AND SUNDIAL IN GARDEN TO SOUTH WEST OF LOMBERDALE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.70558997405578, 53.17162528482573]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROAD BRIDGE OVER RIVER BRADFORD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68208269690382, 53.17263907534933]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 293 387", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56636724285808, 52.94497165244395]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BOUNDARY POST AT OS 629 405", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6005861688984, 52.96153881209777]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HILLSIDE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.58411301643067, 52.95504916174263]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Barnfield Works and detached chimney to south east",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.657351578222, 53.3290440081164]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LANGLEY HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57589706906319, 52.9470113972719]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70712255943622, 53.24609340320575]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE LEEKE MEMORIAL HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57541917412532, 52.94651231969699]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE 1781 COTTAGES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65409530241503, 53.33066159565418]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCHYARD CROSS 20 METRES SOUTH OF CHURCH OF ST. MICHAEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57499803179298, 52.94660113151556]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GARDEN WALLS AT BARN CROFT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57439929014151, 52.95289332646313]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Lodge Farmhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56598689678031, 52.95316855857298]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NETHER HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66091906853297, 53.32601598341039]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 307 381", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54522809975, 52.9388847887199]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LOWER VICARWOOD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.53002000808682, 52.94830333194857]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LOWER BOOTHS FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64137150716378, 53.32356091049044]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GATEHOUSE TO MACKWORTH CASTLE", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.53520589735359, 52.9369127083827]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ALL SAINTS", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.524988715906, 52.93622667798629]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CLIFFE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65839283259497, 53.33026945392949]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Oak Cottage, Derwent Cottage, Knowle Cottage and Mill Cottage",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62909841460384, 53.29948914593606]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "The Rookery and Stoke Hall Cottages",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64321166569963, 53.28171290189208]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Gateway and Walls enclosing graveyard of All Saints",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.52515508723535, 52.93589664493326]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Stoke Hall", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.64109704263198, 53.28169758484569]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "MILEPOST 20 YARDS TO THE SOUTH WEST OF THE ENTRANCE TO HATHERSAGE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65136310000655, 53.33067339034218]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BARN TO THE SOUTH WEST OF HATHERSAGE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65137414025058, 53.33107616537961]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RAILWAY VIADUCT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65807830585102, 53.32829103433437]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TOLL BAR COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64647603832542, 53.32592040011686]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILE POST 800 YARDS TO THE SOUTH WEST OF BURBAGE BRIDGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.61775392773233, 53.31885282018291]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HIGHCLIFFE FARMHOUSE AND ATTACHED BARN",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.80410872432852, 53.24321714532616]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 143 711", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.787401371101, 53.23638481306287]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SYCAMORE FARMHOUSE AND ATTACHED BARN",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.78717659404902, 53.2364753944637]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROW OF FOUR LIME KILNS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.79094843315757, 53.25553105191825]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TADDINGTON FIELD FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7606116390605, 53.23179435605284]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDINGS TO THE EAST OF BROOKFIELD MANOR",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65351573678995, 53.3428935673177]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOUSE AT NETHER HURST", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66836851937867, 53.34210402702926]
          }
        },
        {
          type: "Feature",
          properties: { Name: "North Mill", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.48641303315606, 53.02892836922973]
          }
        },
        {
          type: "Feature",
          properties: { Name: "21, BRIDGE STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48480720642566, 53.02354589028397]
          }
        },
        {
          type: "Feature",
          properties: { Name: "61, BRIDGE STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48533956379964, 53.02516624710248]
          }
        },
        {
          type: "Feature",
          properties: { Name: "REAR BUILDING AT NUMBER 67", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48563655626989, 53.02526641106518]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The George & Dragon", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48561997132482, 53.02665966703356]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SAVINGS BANK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48522934723847, 53.02658500163152]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FARMHOUSE AT BROADHOLME HOUSE FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47799702943017, 53.04427229829825]
          }
        },
        {
          type: "Feature",
          properties: { Name: "16 AND 18, NORTH END", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57127437245447, 53.0831656086609]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TEAPOT ROW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62778081618971, 53.22786814280653]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "DRONFIELD WOODHOUSE HALL FARMHOUSE AND ATTACHED BOUNDARY WALLS",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.50585404989064, 53.30282408907243]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDINGS TO THE SOUTH OF CHIVERTON HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.46877346499237, 53.30173020122103]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST JOHN THE BAPTIST", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.47197173128363, 53.3015578453937]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 226703", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66177492222763, 53.22946561949743]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DOWAGER HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66695909903144, 53.24630298227115]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GARDEN WALLS TO WEST OF FARM OUTBUILDING, TO THE WEST OF THE STABLES TO WINGFIELD HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.44191551788316, 53.09135950684196]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Eyre Arms Public House including flanking walls",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66468709326745, 53.24776771446263]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STEPS, GATES AND RAILINGS TO SOUTH EAST OF ST JAMES' CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48517908517458, 52.76850630951834]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HILLSIDE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48203640865559, 52.76840404975625]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE MIDDLE LODGE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.47144797406832, 52.8048746875854]
          }
        },
        {
          type: "Feature",
          properties: { Name: "23 West Bars", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43222576666545, 53.23562002521712]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LONGCROFT FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.38533857492281, 52.86241508185162]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "LYCHGATE AND ATTACHED CHURCHYARD WALLS TO ALL SAINTS CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.38509911141535, 52.8604361513008]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Chest Tomb 5 metres north of south porch to All Saints Church",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.38531194415659, 52.86021393022345]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "CHURCHYARD WALLS AND ATTACHED CURTAIN WALL BETWEEN COACH HOUSE AND ELVASTON CASTLE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39595807109877, 52.89287159215517]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THORPE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77050213431032, 53.0509477285974]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST LEONARD", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.76829639165396, 53.04852856236609]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "INFORMATION CENTRE AND SHOP AT ELVASTON CASTLE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39663517588892, 52.89297429378783]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STABLES TO WEST OF ELVASTON CASTLE COACH HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39697490880934, 52.89312883847068]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ST MARYS BRIDGE (WEST)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.78372432206276, 53.05137798040853]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BOAT HOUSE AT ELVASTON CASTLE TO EAST END OF THE LAKE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39161049079612, 52.89302061501264]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE VICARAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60065345574085, 52.88523151293964]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD SMITHY, LITTLE CUBLEY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.76186741246111, 52.93659723237373]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "COMMON FARMHOUSE AND ATTACHED GARDEN WALLS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42545141239416, 52.81214800096937]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CUBLEY LODGE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.75945525902872, 52.92313299617384]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST ANDREW", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.75604422189713, 52.93640063793072]
          }
        },
        {
          type: "Feature",
          properties: { Name: "43-57, BLANCH CROFT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43003908401733, 52.82328110201619]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1, 2, 2A, 3, 4, 5, THE ROW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.75653322417224, 52.94176023188961]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GARDEN WALL TO LANE NEXT TO CHURCH, ETWALL PARK, 5 METRES SW OF ETWALL ALMSHOUSES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60298739056491, 52.88514943830558]
          }
        },
        {
          type: "Feature",
          properties: { Name: "55-61, CASTLE STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42522973849032, 52.82336585574974]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GATES AND GATEPIERS TO EAST OF LONGFORD HALL",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68011945054436, 52.94123287274512]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "CASTLE FARMHOUSE AND RUINS OF MELBOURNE CASTLE AND OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42468977232654, 52.8232263567634]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST ANDREW", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.5760539015783, 52.92062069700029]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MELBOURNE HALL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.42306140999372, 52.82124282550451]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THATCHED FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57940746712104, 52.92373646875443]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GASWORKS TO NORTH OF BARN AT LONGFORD HALL FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6813221417944, 52.94361826608463]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD PARK FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57797356129339, 52.92186889010566]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "SET OF 8 GARDEN URNS AND ACCOMPANYING STEPS IN SUNKEN GARDEN TO WEST OF RADBOURNE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57594935269783, 52.91714531936527]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "THREE PAIRS OF VASES FLANKING CENTRAL PATH OF UPPER TERRACE IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42223223224424, 52.82110396144225]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PAIR OF METAL BASKET FLOWER BEDS IN MELBOURNE HALL GARDEN",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42253418552771, 52.82122641213186]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE COTTAGE AT DRAYCOTT HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.3497652391785, 52.91013997170514]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PEDESTAL WITH STATUE OF MERCURY IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42097689522374, 52.82102914149561]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "STONE FOUNTAIN TO NORTH OF LOWER TERRACE IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42095559535233, 52.82149064187072]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ALL SAINTS", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.29943217782728, 52.87770773784322]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SECTION OF HARRINGTON BRIDGE AT SK 472 312",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.30102998160808, 52.8758533125355]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "STONE FOUNTAIN TO SOUTH OF LOWER TERRACE IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42104021013748, 52.82056778786244]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NORBURY MILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.82230263201929, 52.97716324517376]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GRAVE 10 YARDS SOUTH OF NORBURY CHURCH TOWER",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.81456728799086, 52.97857176503503]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SPRINGFIELD MILL FACTORY AND CHIMNEY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.28705909193939, 52.9243868984779]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST GILES", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.28730895219002, 52.93067406685383]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DR BLAND'S ALMSHOUSES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.29460906781348, 52.92228512502338]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CANAL BRIDGE ON EREWASH CANAL AT SK 484 376",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.2828403197415, 52.93351099003466]
          }
        },
        {
          type: "Feature",
          properties: { Name: "25, TOWN STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.28788325084019, 52.92426769005959]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WATER CHANNEL AND THREE BRIDGES IN MELBOURNE HALL GARDENS",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42084563016997, 52.82047694608306]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TITHE BARN", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.42462297468623, 52.82096590091155]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Michael and St Mary", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.42418416315956, 52.82110245400971]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BOAT HOUSE AT TITHE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42396061081114, 52.82057296358887]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NUMBER 62 AND ATTACHED SMITHY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4249578932721, 52.82160266358741]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NUMBER 12 AND ATTACHED BREWERY BUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.427496618796, 52.82251378170315]
          }
        },
        {
          type: "Feature",
          properties: { Name: "35, DERBY ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42906969217821, 52.82446909399503]
          }
        },
        {
          type: "Feature",
          properties: { Name: "47, DERBY ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42921686558948, 52.82473368054153]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PARK FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41344602814102, 52.81345586529955]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LEISURE CENTRE AND LIBRARY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42950422910595, 52.82219080517036]
          }
        },
        {
          type: "Feature",
          properties: { Name: "23 High Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43019990034322, 52.82232897973941]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDINGS TO SOUTH EAST OF KINGS NEWTON HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42151901860367, 52.83165871622026]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FOUR GABLES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42580283824026, 52.83170196406076]
          }
        },
        {
          type: "Feature",
          properties: { Name: "58 Main Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42425077586972, 52.83181437630213]
          }
        },
        {
          type: "Feature",
          properties: { Name: "21 Market Place", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4282511746047, 52.82268820900097]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MARKET CROSS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42830130355835, 52.82283992626392]
          }
        },
        {
          type: "Feature",
          properties: { Name: "10, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42791996341746, 52.82287093963156]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Gates and Walls to West Side of Cemetery",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42721663336955, 52.82915573048719]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STYDD HALL AND ATTACHED GARDEN WALL",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.7454092092139, 52.9572924443908]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO NORTH EAST OF STYDD HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.74478184925985, 52.95765966096779]
          }
        },
        {
          type: "Feature",
          properties: { Name: "59, PENN LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42817724871315, 52.82154193308374]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PENNFIELD HOUSE AND ATTACHED OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42825327000624, 52.82139372431786]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO SOUTH OF THE OLD MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42174151891952, 52.8200587920992]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OVERFLOW SYSTEM FOR MELBOURNE POND",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42086186031112, 52.81841046098358]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Thatched Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4253857194143, 52.8229731301109]
          }
        },
        {
          type: "Feature",
          properties: { Name: "16 AND 18, POTTER STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42689716389949, 52.82296037490762]
          }
        },
        {
          type: "Feature",
          properties: { Name: "50-54, POTTER STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42586780277247, 52.82285469392092]
          }
        },
        {
          type: "Feature",
          properties: { Name: "58-60, POTTER STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42560792829991, 52.82281931883177]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STONE RUBBLE OUTBUILDINGS TO WEST OF SHAW HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.43939049028885, 52.81964877199759]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ELMS FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42236105567392, 52.83386235239374]
          }
        },
        {
          type: "Feature",
          properties: { Name: "32, TRENT LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42197834914089, 52.83373343335219]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCH OF ST MICHAEL AND ALL ANGELS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.69619536513578, 52.90097370586648]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SAPPERTON MANOR", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.72458759295761, 52.90746335332278]
          }
        },
        {
          type: "Feature",
          properties: { Name: "23, RECTORY LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45149384862895, 52.95425428703394]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CAT AND FIDDLE MILL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.34960565057839, 52.95362124238518]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDINGS TO NORTH OF CAT AND FIDDLE MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34967696588757, 52.95382839091469]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO WEST OF FORMER METHODIST CHAPEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.3522251911736, 52.94466401539697]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GATE PIERS AND GATE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45552803326023, 52.8410306169415]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOLLIES FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45041876592057, 52.84183261232889]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROSEDENE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44819577965014, 52.84151667837554]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ALL SAINTS", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.31877423088789, 52.96038914544044]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST MARY", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.4110465295202, 52.84443836552801]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE CROFT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41879215313276, 52.97789995855529]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST MATTHEW", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.41094205777915, 52.96434481500042]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "TRENT AND MERSEY CANAL WESTON LOCK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39524645144452, 52.84620407594194]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MAUSOLEUM WEST OF SAINT MATTHEWS CHURCH",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.41144016932535, 52.96437077409777]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "TRENT AND MERSEY CANAL SCOTCH BRIDGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.40440684136211, 52.84340617410295]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BARN TO NORTH OF THE RECREATION ROOM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.41045441899233, 52.96459961869392]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RECTORY FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.40601806204402, 52.84580849463132]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MORLEY ALMSHOUSES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42588240653322, 52.96770447558175]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PUMP", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73529769492253, 53.01756585791809]
          }
        },
        {
          type: "Feature",
          properties: { Name: "24-26, BUXTON ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73346901329638, 53.01960016073316]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1, BUXTON ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73280835420932, 53.01880671927252]
          }
        },
        {
          type: "Feature",
          properties: { Name: "7 AND 9, BUXTON ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73288965412185, 53.01892762517581]
          }
        },
        {
          type: "Feature",
          properties: { Name: "17, BUXTON ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73296353167242, 53.01907207229009]
          }
        },
        {
          type: "Feature",
          properties: { Name: "53-57, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73679332560237, 53.01598421139208]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD GRAMMAR SCHOOL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.7376423862944, 53.0157683652376]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HANSON MOUNT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73803765278221, 53.0156769322639]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Clergyman's Widows Almshouses", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7343135256429, 53.01656102535557]
          }
        },
        {
          type: "Feature",
          properties: { Name: "34, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73517999210425, 53.01624833336909]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OWLFIELDS ALMSHOUSES", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.73665839745655, 53.0158021513175]
          }
        },
        {
          type: "Feature",
          properties: { Name: "72, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73754715964765, 53.01552311969623]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PARISH CHURCH OF ST OSWALD", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.73868891732302, 53.01499139807134]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCHYARD WALLS TO THE PARISH CHURCH OF ST OSWALD",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73776822816841, 53.01519036252363]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "LLOYDS BANK WALL TO NORTH AND SOUTH OF GARDEN",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73299476165835, 53.01608260028365]
          }
        },
        {
          type: "Feature",
          properties: { Name: "15 AND 17, DIG STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73304874459047, 53.01665438755365]
          }
        },
        {
          type: "Feature",
          properties: { Name: "4, KING STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73268521538002, 53.01869383216409]
          }
        },
        {
          type: "Feature",
          properties: { Name: "2, LOVATTS YARD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73202095805673, 53.01848856176527]
          }
        },
        {
          type: "Feature",
          properties: { Name: "5, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7322775387351, 53.01797675610259]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PART OF ROYAL BRITISH LEGION HEADQUARTERS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73262094104461, 53.01788763563053]
          }
        },
        {
          type: "Feature",
          properties: { Name: "35, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.733097117713, 53.01802282714193]
          }
        },
        {
          type: "Feature",
          properties: { Name: "14, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73193335567815, 53.01819172217136]
          }
        },
        {
          type: "Feature",
          properties: { Name: "20 AND 22, MARKET PLACE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.7322305397315, 53.01834520633285]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "2, KING STREET (See details for further address information)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73275823644308, 53.01861634756462]
          }
        },
        {
          type: "Feature",
          properties: { Name: "24, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73220588835792, 53.01743561885151]
          }
        },
        {
          type: "Feature",
          properties: { Name: "32-34 St John Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73196341265315, 53.01754740310441]
          }
        },
        {
          type: "Feature",
          properties: { Name: "42 and 44 St John Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73150326228268, 53.01770554982367]
          }
        },
        {
          type: "Feature",
          properties: { Name: "56, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73066708908196, 53.01806301785716]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SPALDEN'S ALMSHOUSES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7377375919611, 53.01481572256304]
          }
        },
        {
          type: "Feature",
          properties: { Name: "13, Sturston Road", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73012499976572, 53.01413642756873]
          }
        },
        {
          type: "Feature",
          properties: { Name: "4, VICTORIA SQUARE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7332274019001, 53.01754627238433]
          }
        },
        {
          type: "Feature",
          properties: { Name: "14, VICTORIA SQUARE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73277255734327, 53.01747447409528]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BUSHYHEATH FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.78206064152673, 53.30327758152549]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77329338066586, 53.27853339776828]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST JOHN THE BAPTIST", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.77266236352981, 53.27874793126052]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PREMISES OCCUPIED BY 'YESTERDAY ANTIQUES'",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77275209209113, 53.2782176293892]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PREMISES OCCUPIED BY THE MEDEIRA HOUSE RESTAURANT",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77281987986749, 53.27819390459086]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Shambles", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77320610890137, 53.27802087735996]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "LEE FARMHOUSE AND ATTACHED OUTBUILDING",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.80566071555385, 53.30415410933523]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE SOUTH WEST OF THE VICARAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77352955998607, 53.27920374782884]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD GRAMMAR SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77289988828767, 53.27920680461997]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ST JOHNS INSTITUTE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7725852804419, 53.27914328735495]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WHITE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77483427165795, 53.28018569217237]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE FLAT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77472621301374, 53.27980067264568]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE NORTH EAST OF FOXLOWE HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77575989164581, 53.27812448795553]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BARN TO THE NORTH EAST OF BUSHYHEATH FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.78181864311417, 53.30346732048029]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD BULLS HEAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77307099494649, 53.2780475877294]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE VICARAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77334165743302, 53.27935987496789]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Blake House", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77415785554575, 53.27955075139279]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BUILDING OCCUPIED BY THE COUNTY LIBRARY SERVICE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77250008278169, 53.27915388245473]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PREMISES OCCUPIED BY HIGH PEAK PLASTICS LIMITED",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77180269925885, 53.27965415532048]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE PICTURE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77480217466153, 53.27965982779645]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING ATTACHED TO AND TO THE NORTH WEST OF THE FLAT",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77483851741005, 53.27982332030169]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FOXLOWE HOUSE, GATE PIERS AND BOUNDARY WALLS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77605554903322, 53.27801724553974]
          }
        },
        {
          type: "Feature",
          properties: { Name: "AMBER LODGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48432627298526, 53.15601407006267]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GOSS HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49643723468016, 53.1610233269747]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OVERTON HALL AND ATTACHED OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48326265207836, 53.15633571761665]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RANGE OF OUTBUILDINGS TO WEST OF OVERTON HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4836712492574, 53.15633753148474]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FARM OUTBUILDING AT GREENFIELD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47265950405361, 53.14551134617789]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE MINERS ARMS PUBLIC HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47101617517758, 53.15149979706452]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ROAD BRIDGE SOUTH OF WASH FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47001385571212, 53.15168182709963]
          }
        },
        {
          type: "Feature",
          properties: { Name: "COMMON BANK COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4718164521487, 53.15511018304995]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TOLL BAR COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47079630043311, 53.18863425217615]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STABLE BLOCK TO NORTH OF BUTTS GRANGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48367103601361, 53.16475259659893]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WHITE LION HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48100367705723, 53.16300561616891]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WEAVERS COTTAGES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48070887367724, 53.17045774974786]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GROUP OF 4 TOMB CHESTS APPROXIMATELY 20 METRES NORTH EAST OF CHURCH OF ALL SAINTS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4794858449056, 53.16432217725521]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD POST OFFICE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4802929565004, 53.16337874222059]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4803239218078, 53.16331638511122]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Crispin Inn", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47945135463491, 53.16446319104519]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD RECTORY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47950685572154, 53.16372699518755]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "WEST BANK, ATTACHED WALL AND GATE PIERS, AND ATTACHED OUTBUILDING TO SOUTH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47999336958843, 53.16318149350746]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Cottage attached to the west end of Buntingfield",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51943080112333, 53.18707924805089]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DALEBANK FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46163269611352, 53.15129499898372]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HARDWICK FARMHOUSE (EAST)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4953014733022, 53.17943508705719]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HARDWICK FARMHOUSE (WEST)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4964951458219, 53.17951570555722]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ASHOVER HAY PRIMITIVE METHODIST CHAPEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.46701767919838, 53.14594471888561]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO WEST OF HIGH ASHES FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4814391796247, 53.18994674428454]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROSE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47806075409907, 53.16927086013597]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HILLSIDE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47726123483372, 53.16919084601904]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "APPLETREE FARMHOUSE AND ATTACHED BOUNDARY WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47674211783403, 53.17031542243112]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FOOTBRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48101415083628, 53.16149530133283]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SPANN CARR WINDMILL TOWER", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48952518040777, 53.19085349532154]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CEMETERY CHAPEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48003523658786, 53.16525229731013]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILLTOWN FARMHOUSE AND ATTACHED OUTBUILDING",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.46983108976915, 53.14762519985935]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WEST VIEW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46391419602606, 53.14543641405178]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ASHGATE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47993736025532, 53.24013817000715]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "HOLLINS HOUSE, ATTACHED BOUNDARY WALL TO SOUTH, AND ENTRANCE GATEPIERS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51703631101539, 53.24263577187971]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "OUTBUILDING TO NORTH WEST OF PRATT HALL AND ATTACHED OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51126987807652, 53.2546227081242]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CRUCK BARN AT THE BUNGALOW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.52831476664112, 53.23489648972163]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WIGLEY HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.52745188744124, 53.24388193152643]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RANGE OF OUTBUILDINGS TO THE NORTH OF THE BIRCHES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51068886716648, 53.23765634242307]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RUFFORD FARMHOUSE, INCLUDING ATTACHED BOUNDARY WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51502062684349, 53.23137355608533]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FARM OUTBUILDING TO THE WEST OF RUFFORD FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.5155025825389, 53.23140650533947]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARN AT FRITH HALL FARM", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.50516378909819, 53.23473234772516]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "OUTBUILDING IMMEDIATELY WEST OF REAR WING OF FRITH HALL FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.50480705240533, 53.23476763288641]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN WALLS AND GATEPIERS TO SOUTH EAST OF CUTTHORPE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48466422642512, 53.25314560562803]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FARM OUTBUILDING TO THE SOUTH OF HALL FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48369324802199, 53.25279754340086]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE DOWER HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48441576041915, 53.25294420522697]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OUTBUILDING AT HALLCLIFF FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.52630373894498, 53.23052117373698]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD HALL COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4884172541988, 53.25634149629261]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WOODTHORPE GRANGE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44183109584588, 53.18040303369416]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HUNLOKE ARMS INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42114313920481, 53.20528354799926]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1, HOCKLEY LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43052536938302, 53.2028863927092]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Pair of gate piers and linking wall to the west of Estate House, Cedar End and North Side (remaining south wing of Wingerworth Hall)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42729807373393, 53.20203723335201]
          }
        },
        {
          type: "Feature",
          properties: { Name: "37, NEW ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44011922709771, 53.19861241782911]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PAIR OF GATE PIERS TO THE EAST OF HARPER HILL HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.46723507018796, 53.20693394364244]
          }
        },
        {
          type: "Feature",
          properties: { Name: "K6 TELEPHONE KIOSK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47759736416126, 53.00286148774139]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "IRON SCREEN OPPSITE NORTH LODGE TO KEDLESTON PARK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.52222299109624, 52.9674850653919]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 287 438", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57371617593216, 52.99177054193473]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5794148205771, 52.98213537397345]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD RECTORY FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57915473749783, 52.98284460621314]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SAW MILL AND ATTACHED ENGINE HOUSE IN KEDLESTON PARK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.53171006210021, 52.96767743822276]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "IRETON FARMHOUSE AND ATTACHED OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.53494247132306, 52.9708770141709]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE OLD SCHOOL AND ATTACHED BOUNDARY WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.52923237313906, 52.93583197303533]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Petworth", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.83239661469315, 52.90477807360472]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STABLE BLOCK AND ATTACHED GATES TO EAST OF PETWORTH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.83209981364464, 52.90463382595259]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BROCKSFORD HALL AND ATTACHED STABLE BLOCK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.80110993826748, 52.89604625232506]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FLACKETS COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.78635834480051, 52.89718936343424]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LOWERSTREET FARMHOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.82554301792848, 52.90094775392325]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Old Vicarage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.83201442321054, 52.90364487122071]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCHYARD CROSS AT CHURCH OF ST CUTHBERT",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.83202748686601, 52.90411233869786]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LODGE TO BROCKSFORD HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.79810207777209, 52.89715588780041]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Eatonhall Farmhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.84237788561371, 52.92393006910271]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE GABLES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.82445863721479, 52.90073041792399]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MANOR HOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.81979946395163, 52.90217076704938]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HEATH HOUSE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.78781039087808, 52.90121022736128]
          }
        },
        {
          type: "Feature",
          properties: { Name: "EATON DOVEDALE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.83947381543369, 52.932942524915]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCHYARD CROSS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.79887338161581, 52.9135898289794]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDINGS TO NORTH EAST OF THE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.79772686734171, 52.91390251893606]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARN TO REAR OF MONTGOMERY HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.79454390293851, 52.91402292958895]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ICE HOUSE AT THE CAVE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7534593480997, 52.90241410054527]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of St Peter", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.79905133230405, 52.91369800169267]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LYCHGATE TO CHURCH OF ST PETER", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.79863457457687, 52.91377820336878]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GATE PIERS AND ATTACHED WALLS AT THE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.79827709021246, 52.91390345082894]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MONTGOMERY HOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.79442570083076, 52.91386091677754]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.79927260955946, 52.91408491836005]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FOLLY OR DEERCOTE IN PARK", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.76028464155957, 52.8917910864574]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STABLING AT HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.76418107352415, 52.88590178340624]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ESTATE OFFICE AND ATTACHED WALLS AND OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.76339318179647, 52.88594516942065]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FOOTBRIDGE AT EAST END OF LAKE IN SUDBURY PARK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.76574653693931, 52.88406315441028]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GATEWAY AND ATTACHED WALLS BETWEEN SUDBURY HALL AND CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.76647720218784, 52.88669142931037]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN WALLS TO FORMER KITCHEN GARDENS AT SUDBURY HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.76626590112981, 52.88775106791794]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PARK COTTAGE\r\nPARK HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.76646849968822, 52.88889977228499]
          }
        },
        {
          type: "Feature",
          properties: { Name: "K6 TELEPHONE KIOSK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.79769691637067, 52.91394741511738]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GARDENERS COTTAGES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.766263760688, 52.88827909929377]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD GAS WORKS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7636991000974, 52.88434565414626]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CRICH WESLEYAN CHAPEL AND ATTACHED WALLS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47828872208842, 53.07938523482905]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Common Bank House", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47131026919437, 53.15497728483827]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RANGE OF OUTBUILDINGS TO NORTH WEST OF SHEEPLEA HOUSE FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48070357428858, 53.18374956896683]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Butts Grange", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48354207742616, 53.16436409788112]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BUTTS HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48367690222855, 53.16434670317155]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SPRING COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48176110805356, 53.1706666987035]
          }
        },
        {
          type: "Feature",
          properties: { Name: "K6 TELEPHONE KIOSK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57329672028959, 53.08262584392989]
          }
        },
        {
          type: "Feature",
          properties: { Name: "33 AND 35, COLDWELL STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57138448517812, 53.08272825287017]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TABLE TOMB APPROXIMATELY 12 METRES SOUTH OF CHURCH OF ALL SAINTS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47967697015948, 53.16396782682438]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PEAR TREE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47874101389578, 53.16497240405594]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "K6 TELEPHONE KIOSK NORTH OF WEST BANK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48004968497572, 53.16326929237299]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "EASTWOOD HALL AND EASTWOOD HALL COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.46559924356994, 53.16129831110892]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FARM OUTBUILDING TO THE NORTH OF HARDWICK FARMHOUSE (EAST)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49530068903574, 53.17962836522342]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FALLGATE MILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47188218186277, 53.15648358197761]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CLATTERCOTES FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46650663023606, 53.13888926817893]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO EAST OF SPANN WINDMILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4893692635007, 53.19085938220212]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SLACK LANE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.50417434719341, 53.16160188100675]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "DURHAM HOUSE AND ATTACHED FORMER SHOP",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.5711648113424, 53.08442095686814]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SOUTHERN WAREHOUSE AT CROMFORD WHARF",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.55384730874572, 53.10952846464694]
          }
        },
        {
          type: "Feature",
          properties: { Name: "COUNTING HOUSE AT CROMFORD WHARF", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55411092559512, 53.10957600581444]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NORTHERN WAREHOUSE AT CROMFORD WHARF",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.55374506943976, 53.10976853958043]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "SIDE WALLS AND CURBS TO CROMFORD CANAL BASIN AND FEEDER CHANNEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.553482342608, 53.10963632384441]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WHARF COTTAGE (NOW ROSE COTTAGE AND MEADOW CLOSE)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.55321011347964, 53.10991142984937]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NORTHERN RETAINING WALL WITH LOADING BAYS AT CROMFORD WHARF",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.55350938340733, 53.10972129103629]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE UNITED REFORMED CHURCH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73121565943707, 53.01374046593645]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SUMMER HOUSE IN GARDEN OF NUMBER 7",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73457617082148, 53.01723821032667]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "STILE BETWEEN BRIDGE OVER MILL TAILRACE AND MILFORD HOUSE HOTEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67708325564197, 53.21568131187085]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GREEN COWDEN FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70807365115498, 53.20759684719111]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PINFOLD COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68331085978148, 53.21152863012041]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67753268304114, 53.2132533353571]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NUMBERS 25 AND 26 INCLUDING ATTACHED FRONT GARDEN WALLS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67798825673037, 53.21328379475172]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "35, 36 AND 37, NORTH CHURCH STREET",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67863887833342, 53.21350799978028]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "1820 COTTAGE SPIRE AND HILLSIDE COTTAGE AND RAILINGS TO HILLSIDE COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67717357667602, 53.21321641112046]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHANTRY HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67895332591523, 53.21330380042931]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCH HOUSE INCLUDING ATTACHED HOUSE TO REAR AND RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6769949697341, 53.2130721081331]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "CHURCH OF ALL SAINTS WALLS AND ENTRANCES INCLUDING ATTACHED RAILINGS AT WEST END",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67819866540586, 53.21321164376658]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "IMSWORTH COTTAGE GRITSTON COTTAGE AND WAINSTONES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67739805182525, 53.2132349945925]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "JASMINE COTTAGE, GREEN LEA, BRYN COTT, CLAVERLEY HOUSE AND FRONT GARDEN WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67777199775045, 53.21328993572164]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE LIMES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67832552551026, 53.2133441544714]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN WALL AND GATE POSTS AT THE LIMES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67833380659604, 53.21328651278381]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MEERBROOK SOUGH ENGINE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57086456740505, 53.08759302867687]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD KINGS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67674675444217, 53.21459719023937]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Victoria Mill", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67766273263587, 53.21587841126659]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE VICTORIA MILL WATERWHEEL AND SLUICE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67750531171613, 53.21584804781055]
          }
        },
        {
          type: "Feature",
          properties: { Name: "VICTORIA COTTAGES NUMBERS 1-8", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67797767792394, 53.21581633847246]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WYE BANK (NUMBER 6)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6737222073182, 53.2148629560996]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PERIMETER WALL TO GARDENS AT ENDS AND REAR OF NUMBERS 1-6 (CONSECUTIVE)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67336163666626, 53.21491880760513]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BEECH COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67445454830359, 53.2150257887926]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILFORD BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67430632563797, 53.21541108482013]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RIVERSDALE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67381318037562, 53.21455714521563]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FRIENDS MEETING HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6754537011448, 53.21094658011756]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "WALL ALONG SOUTH SIDE OF LITTLE HILL\r\nWALL TO REAR OF ST JOHNS HOSPITAL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67716299255022, 53.21263211135759]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PARSONAGE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68004999159261, 53.21271857140364]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "CROFT COTTAGES NUMBERS 1 AND 2 INCLUDING ATTACHED OUTBUILDING",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67084332440318, 53.21466432258057]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ELLIOTTHOLME LODGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65720338420044, 53.20312925419884]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OUTRAKE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66613950300304, 53.21488497696364]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RAILWAY BRIDGE AT NGR SK 2305 6788",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65636358602325, 53.20756882065078]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE BROOKLANDS INCLUDING SERVICE RANGE AND LINKING WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66436945509503, 53.21335191771049]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PERIMETER WALL OF GARDEN TO EAST OF HOLME GRANGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67753771233101, 53.21825408468726]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "STABLE BUILDING AT WEST END OF WATER MEADOW TO SOUTH OF HOLME GRANGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6777790449834, 53.21771101982082]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOLME HALL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.67876555261189, 53.21859598965499]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GATE PIERS AND ATTACHED GATE AT WEST END OF MAIN AVENUE APPROACH TO HOLME HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67786632549282, 53.21868345801487]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GAZEBO AT HOLME HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67868333670475, 53.21935479391313]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "SECTION OF WEST BOUNDARY WALL OF HOLME HALL GROUNDS WITH ATTACHED GATE PIERS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67884750898747, 53.21834755436956]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SUMMERHOUSE AT HOLME HALL WITH ATTACHED WALLED ENCLOSURE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67776264061059, 53.21853036952005]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TERRACE WALLS WITH ASSOCIATED STEPS AND GATEWAYS TO EAST OF HOLME HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67844917472395, 53.2188468247821]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "THE COTTAGE\r\nTHE EAST LODGE AND ATTACHED REAR GARDEN WALL FACING DRIVE TO HOLME HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67581808602699, 53.21821949461197]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE LODGE\r\nTHE WEST LODGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67605803697777, 53.21817520112616]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "ENTRANCE GATE PIERS AND ATTACHED WALLS AT EAST AND WEST LODGES TO HOLME HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67588137004732, 53.21814174072408]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LUMFORD HOUSE NUMBERS 1, 2 AND 3", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67894956360156, 53.21802120259397]
          }
        },
        {
          type: "Feature",
          properties: { Name: "AVENEL COURT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67641355776097, 53.21272896204064]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CATCLIFFE HOUSE INCLUDING RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67658057032274, 53.21242379515238]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OLD TOWN HALL\r\nTHE BUTTERMARKET",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67683417730046, 53.21255032394487]
          }
        },
        {
          type: "Feature",
          properties: { Name: "3 King Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67607010821901, 53.21260218897363]
          }
        },
        {
          type: "Feature",
          properties: { Name: "5 King Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67622052346943, 53.21251270853054]
          }
        },
        {
          type: "Feature",
          properties: { Name: "7 King Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67637026108501, 53.21251311394246]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PREMISES OF THE DERBYSHIRE SHOP AND MICHAEL GOLDSTONE AT SK 2169 6845",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67666838355239, 53.21269369630129]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LITTLE HILL COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67695248075806, 53.21274839698837]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE NOOK AND ROSE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67677313271194, 53.21270296832181]
          }
        },
        {
          type: "Feature",
          properties: { Name: "UPPER BURBAGE BRIDGE (WEST)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60993916781022, 53.34337959647915]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE PEACOCK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67353065937845, 53.21376382388154]
          }
        },
        {
          type: "Feature",
          properties: { Name: "30 Matlock Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67496846995093, 53.21213935520411]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PREMISES OCCUPIED BY DERBYSHIRE BUILDING SOCIETY AND FLAT ABOVE AT SK 2175 6845",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67576995411088, 53.21269126324358]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "BAKEWELL BEAUTY SALON AND SYLVIAS ABOVE LADY FAIR\r\nBAKEWELL FABRIC SHOP (NUMBER 34) AT SK 2181 6837\r\nBAKEWELL FACTORY SHOP AT SK 2180 6838\r\nPREMISES OCCUPIED BY LADY FAIR AT SK 2182 6837 AND FOUR OTHER COMPANYS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67480349888694, 53.21201631749913]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "C FARMER LTD WITH THE SHOELACES FLAT AT SK 2177 6843\r\nINTERIOR DESIGN AT SK 2177 6843\r\nPREMISES OCCUPIED BY TEMPTATIONS AT SK 2178 6842 AND FOUR OTHER COMPANIES\r\nSKIDMORES AT SK 2176 6844\r\nTHE COUNTRY LIFE SHOP AND COUNTRY BOOKSTORE WITH FLAT AND STORERO",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67552004564408, 53.21251151242363]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PREMISES OCCUPIED BY WARDS SHOE SHOP AT SK 2179 6840 AND FOUR OTHER COMPANIES\r\nTHE GINGERBREAD SHOP WITH FLAT AND STOREROOMS OVER AT SK 2178 6841\r\nTHE SUIT SHOP (NUMBER 22) AT SK 2179 6841\r\nWESTCOURT INSURANCE SERVICES (WESTCOURT HOUSE) AT SK 2178 6841\r\n",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67518283405124, 53.21226174305827]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "2-4 Matlock Street including 1 and 1A King Street",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67588350619108, 53.21271981390149]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE BEECHES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67483517412241, 53.21155613720607]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FRONT GATEPIERS AND ROADSIDE WALL AT THE BEECHES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67445961271361, 53.21171691339448]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "ARKWRIGHT SQUARE\r\nARKWRIGHT SQUARE (ARKWRIGHT COTTAGE AND TWO UNNAMED COTTAGES)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67711352386176, 53.21522973690413]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BRIDGE OVER MILL TAILRACE WITH ATTACHED OBELISK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67715439535478, 53.21576917429006]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILFORD HOUSE HOTEL INCLUDING ORMONDE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67685379015746, 53.21546202984277]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN WALL AND GATE PIERS AT MILFORD HOUSE HOTEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67664619596919, 53.21564195795039]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RIVERMEADE AND ATTACHED FRONT GARDEN WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67724627051266, 53.21549975884416]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ENTRANCE GATEWAY AND ATTACHED GARDEN WALL AT THE BROOKLANDS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66495239479747, 53.21348838778742]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "KITCHEN GARDEN WALLS WITH ATTACHED POTTING SHEDS AT THE BROOKLANDS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66472623894767, 53.2136855058791]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66823727554842, 53.21472004046581]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GUIDE PILLAR AT NGR SK 20315 68254",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.69728165881656, 53.21097474259741]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OLD HOUSE MUSEUM INCLUDING MOUNTING BLOCK",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67983674041768, 53.21352020218951]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "HADDON HOUSE FARMHOUSE WITH ATTACHED OUTBUILDINGS AND GATEWAYS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66647435276233, 53.20348789743169]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Haddon House with attached wall and archway",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66638813088179, 53.20309850096358]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ENTRANCE GATEWAY TO HADDON HOUSE AND HADDON HOUSE FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66508681104302, 53.20368501490635]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BURRE HOUSE (EXCLUDING C20 GARAGES AT REAR OF EASTERN WING)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67547051960285, 53.21863203520208]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "MAIN ENTRANCE GATEWAY TO BURRE HOUSE WITH ATTACHED WING WALLS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67379458542371, 53.21844769890194]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOLME BRIDGE", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.67877975396152, 53.21752821757043]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "HOLME GRANGE THE MEWS COTTAGE AND LINKING WALL WITH ATTACHED MOUNTING BLOCK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67854535470351, 53.21800213899073]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ENTRANCE WALLS AND GATE PIERS TO HOLME GRANGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67826739129299, 53.21789362046779]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HIGH PEAK PUMP HOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.53060579987466, 53.09743434663714]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRIDGE HOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.55245137311776, 53.1118081716486]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CROMFORD STATION (MAIN BUILIDNG ON WEST PLATFORM)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.54921778949318, 53.11292596020438]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ALISON HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55856674551633, 53.10682444414627]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FOOTBRIDGE AT CROMFORD STATION", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54896791183366, 53.11282014878823]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STATION MASTER'S HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54883808866178, 53.11300731355571]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GREYHOUND HOTEL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.5606612126886, 53.108698210968]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROCK HOUSE (FLATS NUMBERS 1-9)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55429500116635, 53.10891128708036]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CROMFORD MILL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.55553260344807, 53.1092171697471]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE SHRUBBERY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55606521402345, 53.10849167811563]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PARISH CHURCH OF ST MARY", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.55380187353549, 53.11041660394631]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FISHING PAVILION", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55289825391485, 53.11076155247843]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SCHOOL HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56076616347813, 53.10673148920646]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ENGLAND SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56049787270483, 53.10687403773732]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE ARKWRIGHT HOUSES", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.5616080078758, 53.10702320189939]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SNITTERTON HALL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.5851771632567, 53.13951958830097]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GARDEN WALLS OF SNITTERTON HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.58503595841297, 53.13924879727207]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILE STONE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.58302324626889, 53.13980024543658]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WATERWHEEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56292397050099, 53.10909175903083]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST MARY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6011657371181, 53.14994743404777]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WILLERSLEY CASTLE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.55854203420182, 53.11142305752998]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LODGE OF WILLERSLEY CASTLE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55363433812177, 53.11155496406303]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GATE PIERS AND GATES OF WILLERSLEY CASTLE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.55357908948425, 53.11144417351224]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOME FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55396544543552, 53.11183678883955]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THREE STAGS HEADS PUBLIC HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.59813727741651, 53.15418614473938]
          }
        },
        {
          type: "Feature",
          properties: { Name: "78 and 80 The Hill", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5646698231474, 53.10540913625077]
          }
        },
        {
          type: "Feature",
          properties: { Name: "114, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56538009658216, 53.10465135049576]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1,2 AND 3, LEA ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5268748842674, 53.10313798657106]
          }
        },
        {
          type: "Feature",
          properties: { Name: "142-148, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56572480555247, 53.10383307149819]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE OLD VILLAGE LOCK UP TO REAR OF NUMBER 21 SWIFT'S HOLLOW",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56116465604466, 53.10766632126722]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56208974876269, 53.10776860445435]
          }
        },
        {
          type: "Feature",
          properties: { Name: "9-13, BARNWELL LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56413680657406, 53.10411448449661]
          }
        },
        {
          type: "Feature",
          properties: { Name: "30, BEDEHOUSE LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56288716312273, 53.1046240115018]
          }
        },
        {
          type: "Feature",
          properties: { Name: "41, BEDEHOUSE LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56253365212734, 53.10421061834433]
          }
        },
        {
          type: "Feature",
          properties: { Name: "3-13 (odd) and buildings to rear", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56110360867289, 53.10790405552535]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CONDUIT TO THE REAR OF NUMBERS 3-13 CROMFORD HILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56081670022734, 53.10781015915433]
          }
        },
        {
          type: "Feature",
          properties: { Name: "43, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56196174303996, 53.10742617112756]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE BACK SHOP (ON PASSAGE ADJACENT TO THE BELL INN)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.5621482830602, 53.10712131761195]
          }
        },
        {
          type: "Feature",
          properties: { Name: "73-91, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56254015032703, 53.10646846805852]
          }
        },
        {
          type: "Feature",
          properties: { Name: "25-39, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56157223217249, 53.1075923941176]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "THE BELL INN (INCORPORATING 47 CROMFORD HILL AND 31 NORTH STREET)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56224486283801, 53.1072028618857]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DENE TOP COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56541705768897, 53.1038123803569]
          }
        },
        {
          type: "Feature",
          properties: { Name: "20-24 Cromford Hill", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56255498426729, 53.10755457515621]
          }
        },
        {
          type: "Feature",
          properties: { Name: "54-76, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56411279361044, 53.10551028583193]
          }
        },
        {
          type: "Feature",
          properties: { Name: "82 AND 84, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56482946711885, 53.1053321704473]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE REAR OF NUMBERS 112-114",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56566131566993, 53.10465347246953]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE REAR OF NUMBER 138",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56598660005026, 53.10406416402979]
          }
        },
        {
          type: "Feature",
          properties: { Name: "13, NORTH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56123262466253, 53.10681082843465]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "STRUCTURE 20 METRES SOUTH WEST OF THE COTTAGE AND WEAVER COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56180867832679, 53.10679642616631]
          }
        },
        {
          type: "Feature",
          properties: { Name: "100-110, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56529202935308, 53.10490952951477]
          }
        },
        {
          type: "Feature",
          properties: { Name: "124-128, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5653771328004, 53.10435086126391]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "138, CROMFORD HILL (See details for further address information)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56565180701298, 53.10411409219429]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BELSTONE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56583175446793, 53.1037018878116]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "STRUCTURES 20 METRES WEST OF STRUCTURE OF UNCERTAIN FUNCTION (1/139)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56206277451529, 53.10679515793837]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Cotton spinning mill, office block and remains of engine house etc at Draycott Mills",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34437469594277, 52.89426883147966]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "LEAVERS MACHINE SHED AT DRAYCOTT MILLS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34372445857225, 52.89415658805945]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "COTTON WAREHOUSE, ATTACHED CHIMNEY AND OUTBUILDING AT DRAYCOTT MILLS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34496286874733, 52.89429209858665]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PEVERIL CASTLE CURTAIN WALLS AND FRAGMENTARY FOUNDATIONS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77717904874411, 53.34044028255511]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MARKET LAMP", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42504297734268, 52.82289749776839]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FORMER MALTHOUSE TO REAR OF 23 CHURCH STREET",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73513126019036, 53.016904434565]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ALL SAINTS", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.66659941372695, 53.24747259864974]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE WEST SOUTH WEST OF HATHERSAGE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65144775182619, 53.33125615458386]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Methodist Chapel", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.36397158574476, 53.30808588853369]
          }
        },
        {
          type: "Feature",
          properties: { Name: "4, SUNNY HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48148184050515, 53.00236188763414]
          }
        },
        {
          type: "Feature",
          properties: { Name: "8-12, 12A and 14, WELL LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48093813844008, 53.00297078498257]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARAGE AND STORAGE BUILDING (ORIGINALLY LISTED AS NO 31)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48130696135709, 53.02700053385594]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN FOUNTAIN 40 METRES SOUTH EAST OF RENISHAW HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34413217914783, 53.30216319366857]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WAR MEMORIAL ON THE SLOPES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.91375152358699, 53.25824075045634]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ST ANNS WELL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.91453036560841, 53.25856489681072]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "12 STONE URNS AND LINKING WALLS AND STEPS",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.91381033399775, 53.25882504156264]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Crescent", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.91442431190807, 53.25914008373017]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NATURAL MINERAL BATHS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.91517505613771, 53.25850244087195]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PUMP ROOM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.9142902799208, 53.25869056186467]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT SK 388 674", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41915029269319, 53.20219307450323]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARN SOUTH OF MILLTOWN FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46987141550859, 53.14744638812117]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RAVEN HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47433625243482, 53.14655249261143]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LIME TREE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47856038783791, 53.165575347341]
          }
        },
        {
          type: "Feature",
          properties: { Name: "KNOTCROSS FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46920756478454, 53.14051607411442]
          }
        },
        {
          type: "Feature",
          properties: { Name: "REDFERN HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47992732649627, 53.16271624637392]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RAVENSNEST AND ATTACHED FARM BUILDINGS\r\nRAVENSNEST AND THE BEECHES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48224572055394, 53.15110796455662]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DALE COTTAGE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46325915608512, 53.15052468969757]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GATEPIERS TO EAST OF CHURCH OF ALL SAINTS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47945639612042, 53.164333132317]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "AMBER HOUSE, INCLUDING ATTACHED OUTBUILDINGS FRONT BOUNDARY WALL AND GATEPOSTS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4799981393529, 53.16304529402595]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE OLD BANK HOUSE AND ATTACHED BOUNDARY WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48055130234796, 53.16292896670164]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Stubben Edge Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46088430586356, 53.15285255606828]
          }
        },
        {
          type: "Feature",
          properties: { Name: "2, BUTTS ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48040304830078, 53.16291668940834]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Quoit Green House", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46671690337318, 53.29817945717218]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "COVERED SEAT TO WEST OF FOUNTAIN POND IN MELBOURNE HALL GARDEN",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42086982549638, 52.82013248830636]
          }
        },
        {
          type: "Feature",
          properties: { Name: "K6 TELEPHONE KIOSK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77624354010019, 53.34303433394197]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "THE ARKWRIGHT HOUSES AND UNNUMBERED HOUSE TO LEFT OF NUMBER 1",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56129928213795, 53.10714226779681]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CROMFORD STATION (BUILDING ON EAST PLATFORM)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.54880765630269, 53.11281872451346]
          }
        },
        {
          type: "Feature",
          properties: { Name: "33-43, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56070340441095, 53.10813098449497]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CROMFORD BRIDGE (OVER RIVER DERWENT)",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.55308069805033, 53.11099257293482]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE AGENT'S HOUSE\r\nTHE LOCO", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.53383457668002, 53.09990896006866]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD RECTORY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55841137926837, 53.10751254034452]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE CROMFORD ALMSHOUSES OR BEDEHOUSES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56286719331025, 53.1047994952122]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PENFOLD POST BOX AT THE NATIONAL TRAMWAY MUSEUM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48580636208544, 53.08999220902756]
          }
        },
        {
          type: "Feature",
          properties: { Name: "20-26, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56022239816697, 53.1088856505249]
          }
        },
        {
          type: "Feature",
          properties: { Name: "28-36, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56044889728302, 53.10882607964418]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GUIDE POST AT SK 307 718", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5399023126677, 53.24285968714203]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FORMER TARGET WALL AND FIRING BUTTS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49237005461165, 53.00915968420707]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE SOUTH EAST OF CHIVERTON HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.46842691044933, 53.30184551451884]
          }
        },
        {
          type: "Feature",
          properties: { Name: "UPPER BURBAGE BRIDGE (EAST)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60851281642777, 53.34332100260565]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "NUMBER 22 WITH FORMER COTTAGE AND STABLE ADJOINING TO THE EAST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56690278878794, 53.08244525092289]
          }
        },
        {
          type: "Feature",
          properties: { Name: "14, 15 AND 15A, THE CAUSEWAY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57369854804039, 53.08162131034587]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "FORMER WATER POWERED CORN MILL ATTACHED COTTAGE ANCILLARY BUILDING BOUNDARY WALLING AND ASSOCIATED SPILLWAY AND SHUTTLES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.564722899807, 53.10963571973485]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE BOTHY, BEHIND PARK HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.76710854133303, 52.88872123551813]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ALL SAINTS", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.76710388312306, 52.88681546371004]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE HALL AND ATTACHED STABLE BLOCK",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.76562077618667, 52.8862462217748]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PAIR OF LODGES, GATES AND WALLS TO NORTH OF SUDBURY HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.76368845395286, 52.88630533305936]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Brookside Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.82178511930881, 52.90013315429852]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NORTH LODGE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.82959066328838, 52.91132737032326]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HALL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.79795289707885, 52.9134931581706]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Old Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7951406465947, 52.91361943333651]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HILL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.79459412546048, 52.91598270395371]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WOODHOUSE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.8159440007804, 52.91475073619688]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Willows", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.82245530663116, 52.8998375032258]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "LEY HILL FARMHOUSE AND ATTACHED BARN",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.80743091264459, 52.89863658875502]
          }
        },
        {
          type: "Feature",
          properties: { Name: "IVY HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.82300251566789, 52.90418918787825]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST CUTHBERT", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.83217113293857, 52.90426019356061]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOME FARMHOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.78347565172198, 52.89098145802254]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE CAVENDISH ARMS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.82731845736453, 52.90684738523745]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SLADE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.82230569209648, 52.90007100488137]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.82720491987959, 52.90174123973659]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GOTHIC TEMPLE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.52676907890664, 52.97253432744995]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "The Cottage and Weaver Cottage (to the rear of Nos 18 and 19)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56150190886186, 53.10686870260134]
          }
        },
        {
          type: "Feature",
          properties: { Name: "93-101, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56279315217373, 53.10616214051396]
          }
        },
        {
          type: "Feature",
          properties: { Name: "171-173, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56553390936194, 53.10342753382866]
          }
        },
        {
          type: "Feature",
          properties: { Name: "46-52, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56370596940512, 53.10573382995376]
          }
        },
        {
          type: "Feature",
          properties: { Name: "86-94, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56504386673473, 53.10515460960652]
          }
        },
        {
          type: "Feature",
          properties: { Name: "132-136, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56549834341207, 53.10416674818774]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "UNNUMBERED PREMISES BETWEEN 45 CROMFORD HILL AND THE ARKWRIGHT HOUSES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56174099048302, 53.1072840689683]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NUMBERS 30 AND 31 THE LATTER FORMING PART OF THE BELL INN",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56213668883707, 53.10720110709772]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NUMBERS 49-69 (ODD) WITH BUILDING ADJACENT TO NUMBER 49",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56236797087208, 53.10689409843155]
          }
        },
        {
          type: "Feature",
          properties: { Name: "3, BARNWELL LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56492404915963, 53.10406202439178]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NUMBERS 36 AND 38 WITH OUTBUILDING ATTACHED TO NORTH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56291921743526, 53.10436729273417]
          }
        },
        {
          type: "Feature",
          properties: { Name: "43, BEDEHOUSE LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56268493703216, 53.10422152904936]
          }
        },
        {
          type: "Feature",
          properties: { Name: "21 AND 23, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56132795267762, 53.10777078243081]
          }
        },
        {
          type: "Feature",
          properties: { Name: "45 Cromford Hill", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56192624209505, 53.10735056824481]
          }
        },
        {
          type: "Feature",
          properties: { Name: "116-122, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56539816776483, 53.1045061796228]
          }
        },
        {
          type: "Feature",
          properties: { Name: "130, CROMFORD HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56567274139683, 53.10431956928959]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "K6 TELEPHONE KIOSK (OPPOSITE CROWN INN)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60739397339555, 53.1463684168905]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WENSLEY HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60639793380433, 53.14679169190838]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Potters Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5980785572183, 53.15442815491947]
          }
        },
        {
          type: "Feature",
          properties: { Name: "30-46, WATER LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56426422154271, 53.1098664559057]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SNITTERTON MANOR FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.58250402483527, 53.14078669888968]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE COACH HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55489761187261, 53.10846108327316]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SURFACE OF MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73296306652234, 53.01800526215461]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GAZEBO AT DOVE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73488905256005, 53.01829587115915]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LAMP POST, VICTORIA SQUARE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73314374377839, 53.01736663426485]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HULLAND HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7361208637734, 53.01595377804406]
          }
        },
        {
          type: "Feature",
          properties: { Name: "45 AND 47, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73629306631007, 53.01614694644482]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Church of St John with street railings, gates, piers and front steps",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.7327736459181, 53.01971277895729]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GATES TO THE LAURELS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.74067000242327, 53.01547835024392]
          }
        },
        {
          type: "Feature",
          properties: { Name: "12 AND 14, BUXTON ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73327975714157, 53.01914669856191]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TRENT AND MERSEY CANAL, CANAL MILEPOST TO EAST OF WESTON GRANGE AT SK 420 286",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.37715356466026, 52.85356945480146]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MORLEY HOUSE FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41539400699577, 52.96595441287591]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MORLEYMOOR FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41972394245526, 52.97616056895899]
          }
        },
        {
          type: "Feature",
          properties: { Name: "QUARRY FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42531035009942, 52.97827321302788]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "TRENT AND MERSEY CANAL, CANAL MILEPOST AT SK 392 274",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.41847376058276, 52.84311101548361]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Swarkestone Old Hall and attached walls",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.44586409646878, 52.85243245785274]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ST BRIDE'S FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45368744466142, 52.82284536930891]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65054279420562, 52.86289721145101]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CROMWELL HOUSE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.69907427257178, 52.89869085135125]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO NORTH OF THE OLD MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42182733724121, 52.82030192655515]
          }
        },
        {
          type: "Feature",
          properties: { Name: "YEAVELEY HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.72389639135587, 52.96009409463653]
          }
        },
        {
          type: "Feature",
          properties: { Name: "VALE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42518941621846, 52.82132347858172]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Wheatsheaf Farmhouse and attached cowshed",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.72410142944064, 52.96062493607348]
          }
        },
        {
          type: "Feature",
          properties: { Name: "4 AND 6, HIGH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42875601910016, 52.82277854107144]
          }
        },
        {
          type: "Feature",
          properties: { Name: "65, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42415888536194, 52.82185085962256]
          }
        },
        {
          type: "Feature",
          properties: { Name: "49, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42531915821158, 52.82181767495357]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PEDESTAL AND FOUR SEASONS VASE IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42049147835412, 52.81920769723261]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "ICEHOUSE TO SOUTH EAST OF FOUR SEASONS VASE IN MELBOURNE HALL GARDENS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42011141992684, 52.81892419807949]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE OLD MANOR AND ATTACHED GARDEN WALL",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.8149104049397, 52.9784374597179]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Chapel House Farmhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65990523742289, 52.92979242460747]
          }
        },
        {
          type: "Feature",
          properties: { Name: "VICTORIA MILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.33830024836617, 52.89514591473575]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST CHAD", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.33430538445002, 52.88223871642998]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MUNIMENT ROOM IN MELBOURNE HALL GARDEN",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42246382806928, 52.82154557269052]
          }
        },
        {
          type: "Feature",
          properties: { Name: "POTLOCKS FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56113975385808, 52.91623360373188]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDENER'S COTTAGE AT LONGFORD HALL FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68362952473602, 52.94350756368717]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "AISLED BARN ATTACHED TO NORTH OF STABLES AT MELBOURNE HALL",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42364997430542, 52.8216232369393]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Stableblock and coach house at Longford Hall Farm",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68189702506755, 52.94233433468722]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PAIR OF CHEST TOMBS AT SK 3394 2513",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42375967615707, 52.82230697320383]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ETWALL LODGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.59653267871129, 52.88248481561526]
          }
        },
        {
          type: "Feature",
          properties: { Name: "80 Main Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.59911850788971, 52.88569379283599]
          }
        },
        {
          type: "Feature",
          properties: { Name: "58, MAIN STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.59991356570677, 52.88488742702131]
          }
        },
        {
          type: "Feature",
          properties: { Name: "48 and 50 Main Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60034568704361, 52.88469232091836]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GRAVESTONE 22 YARDS SOUTH EAST OF SOUTH PORCH OF ST ANDREWS CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.75587295318541, 52.93629744070682]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE WHITE SWAN INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42514483422808, 52.82261655219852]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD RED HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.59853628437756, 52.88597948775995]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GREEN CROFT\r\nGREEN GABLES\r\nGREEN LEA",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.76864177269198, 53.05012612688886]
          }
        },
        {
          type: "Feature",
          properties: { Name: "16 Weston Road", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.38578326557281, 52.86130876710415]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILESTONE AT NGR 150 497", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77787357975167, 53.04488111806312]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of All Saints", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.38521845380694, 52.86005159443548]
          }
        },
        {
          type: "Feature",
          properties: { Name: "6, THE GREEN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.38432469904146, 52.86123702332788]
          }
        },
        {
          type: "Feature",
          properties: { Name: "5 and 7 South Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42724926997959, 53.2346865327472]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SMISBY MANOR", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4866320001347, 52.76833410530561]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE LOCK UP (ROUND HOUSE)", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.48461233468777, 52.76825161676396]
          }
        },
        {
          type: "Feature",
          properties: { Name: "12 AND 13, THE SHAMBLES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42755240554519, 53.23551670250981]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ICE HOUSE NORTH EAST OF CONSERVATORY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.44960358799359, 52.80005243850101]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE 'ANGLERS REST' PUBLIC HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.78803247587805, 53.25702393547584]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HARDY HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77589697348095, 53.27679448710924]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE GEORGE HOTEL AND OUTBUILDINGS TO EAST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77180671798046, 53.27889911316897]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TOP HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77329233504188, 53.27873114695864]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MARKEYGATE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77328161574654, 53.27792214459411]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST ANNE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.78955721926567, 53.25679730350844]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Goldstraw Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77342335800774, 53.2784737662535]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ECCLES HALL, BOUNDARY WALL AND GATE PIERS TO SOUTH EAST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77327225194005, 53.2796928986522]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD COLLEGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77388662347205, 53.27979293466515]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RANGE OF OUTBUILDINGS TO THE NORTH OF BIRDHOLME FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42612088363226, 53.21221207336477]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of All Saints", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.42775011704268, 53.2028045166586]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STUBBING COURT", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.46700561937586, 53.20020814436947]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GATEPIERS AND STEPS TO THE SOUTH OF CHURCH OF ALL SAINTS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48005940186048, 53.16381507868262]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHIMNEY AT RAVENSNEST", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4852583668254, 53.15157432812745]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO SOUTH WEST OF HARDWICK FARMHOUSE (WEST)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49673578394959, 53.17936901274779]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HIGH ASHES FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4810168718482, 53.19001534737347]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HILL COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47867998483929, 53.16938582203258]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OVER ASHER", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47744117030639, 53.16915567773089]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOCKLEY COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47790486964128, 53.16087447179972]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE SOUTH OF CLATTERCOTES FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.46640518183944, 53.13861087126266]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HOUSE ADJOINING LIME TREE HOUSE TO THE SOUTH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47853911459404, 53.16553607106916]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BIRLEY GRANGE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.52974383767348, 53.2549023060181]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE NORTH WEST OF HOLLINS HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51735913935745, 53.24268648109452]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PRATTHALL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.51050369370831, 53.25441154524848]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RANGE OF FARM OUTBUILDINGS TO THE NORTH AND NORTH WEST OF CUTTHORPE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48459819958342, 53.2535744925831]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD BARRACKS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48419700621723, 53.25348988372079]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CUTTHORPE OLD HALL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.48828192752243, 53.25637687207848]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GUIDE POST AT SK303 720", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54892545015637, 53.2453389324243]
          }
        },
        {
          type: "Feature",
          properties: { Name: "EDLESTOW HALL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.51098878409528, 53.16421510900069]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HASLEHURST FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48060555061039, 53.19397498838011]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SUMMERHOUSE APPROXIMATELY 40 METRES NORTH OF OVERTON HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48305403706764, 53.15679303177158]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "POUND TO THE SOUTH OF THE MINERS ARMS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47098614624808, 53.1511321903048]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WASH HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47028656911982, 53.15229854752268]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SHEEPLEA HOUSE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48045600995396, 53.1835720916738]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ASHCROFT\r\nASHCROFT COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48072798602627, 53.16295394322443]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROSE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48087705780839, 53.1631478926171]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ALL SAINTS", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.47992529522591, 53.16412366410747]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SURFACE OF VICTORIA SQUARE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73305577556352, 53.01747510903715]
          }
        },
        {
          type: "Feature",
          properties: { Name: "52, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73108552990642, 53.01789316891954]
          }
        },
        {
          type: "Feature",
          properties: { Name: "18 AND 20, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73242761372799, 53.0173206035382]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "THE GREEN MAN AND BLACK'S HEAD HOTEL, ATTACHED INN SIGN BRIDGING ROAD",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73298142619385, 53.01714340931176]
          }
        },
        {
          type: "Feature",
          properties: { Name: "2-6, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73167394759294, 53.01787703869932]
          }
        },
        {
          type: "Feature",
          properties: { Name: "YE OLDE VAULTS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73303976060826, 53.01765485650729]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NORTH LODGE TO HASSOP HALL AND ATTACHED WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66663790558083, 53.24713803905681]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Hovel to the south of the stables to Wingfield Hall",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4413930540595, 53.09109240471799]
          }
        },
        {
          type: "Feature",
          properties: { Name: "18 AND 20, BRIDGE FOOT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48719065523665, 53.02999244533292]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHRISTCHURCH VICARAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48595571010718, 53.02726339333208]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GATE PIERS AND GATES AT NORTH AND SOUTH ENTRANCES TO CHRIST CHURCH FROM BRIDGE STREET",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48587806277345, 53.02752374529078]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ALMSHOUSES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47623349874152, 53.02364333657248]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARNS AT NORTH LEES HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64800676612055, 53.34788726629082]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.78240530031619, 53.23600442876148]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Padley Manor Farmhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63015781154914, 53.30667991872411]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 158 714", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.76490921706649, 53.23941041070302]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN PAVILION AND GARDEN WALLS TO HATHERSAGE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65229865057078, 53.33131570607652]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PRESBYTARY TO ST MICHAEL'S ROMAN CATHOLIC CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65660144290519, 53.33083960298162]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "OUTBUILDING NORTH WEST OF OUTBUILDING TO THE WEST SOUTH WEST OF HATHERSAGE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65173951722274, 53.33124688138889]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STABLE BLOCK TO WEST OF MEYNELL ARMS HOTEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57366724233372, 52.94755820993178]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD SCHOOL HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.51952850648629, 52.93344687870604]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HATHERSAGE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65590310593746, 53.32992074547383]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GRINDLEFORD BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63418952915156, 53.29674179426532]
          }
        },
        {
          type: "Feature",
          properties: { Name: "EASTWOOD COTTAGES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64840912015249, 53.33228685864083]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE MANOR HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70451840031451, 53.24342633238793]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BULL'S HEAD CHAMBERS\r\nBULL'S HEAD HOTEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68607586839351, 53.17523520365348]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STORES COTTAGES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68621260626978, 53.17494791560966]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LOMBERDALE HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70487323587173, 53.17213696478354]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BARN TO EAST OF OLD HALL FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68765970133733, 53.17551801202429]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE SOUTH LODGES", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.54672180059251, 52.9671445041795]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CRISPIN INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70411647926448, 53.24303882292973]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "TURRET HOUSE AND ATTACHED RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68544319182107, 53.17582681202104]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BEECH COTTAGE AND ATTACHED COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6856552637229, 53.17546781123192]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CONDUIT HEAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6865900774419, 53.17523687252078]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LOWER STABLES AT THE HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70442428479975, 53.24403733479792]
          }
        },
        {
          type: "Feature",
          properties: { Name: "KEDLESTON HALL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.53593701379763, 52.95915353504073]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CONKSBURY HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68765259369574, 53.18719357105533]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE HOLLIES AND ATTACHED GATE PIERS AND GARDEN WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.70257370061321, 53.24294511018563]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "LEACH HOUSE, ATTACHED COTTAGE AND OUTBUILDING",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65003315930378, 53.32291741521763]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GATE PIERS, ATTACHED BOUNDARY WALLS, PUMP AND TROUGH AT THE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.70409796379812, 53.24355113583842]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ALL SAINTS SCHOOL AND SCHOOL HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68328445195053, 53.17641438255763]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILL COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66946182504183, 53.17812979742838]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROSE COTTAGE\r\nSUNNY VIEW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67013874745191, 53.17765525272027]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "MONKS HALL AND COTTAGE AND ATTACHED GARDEN WALLS AND GATEPIERS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67120403725165, 53.17726267409501]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILL HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49124885056986, 52.98782329470899]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GREYSTONES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48753908600084, 52.985353307792]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILE POST AT OS 239 419", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64506335467559, 52.97384348264875]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GATE PIERS AT NORTH WEST ENTRANCE TO CHURCHYARD",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48147980291208, 52.98135379334678]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 226 427", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66538127508529, 52.98146127087897]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CROW TREES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48628601540646, 52.98166786545694]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BOWLING GREEN FARMHOUSE AND ATTACHED GARDEN WALLS AND STEPS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64619067727782, 53.19709331809345]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ICE HOUSE 25 YARDS NORTH WEST OF HALL FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34491467577471, 53.21591961563774]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STABLEBLOCK AND TEA ROOM TO HADDON HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65067597497395, 53.19412890275895]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "HALL FARM COTTAGES\r\nSTABLES AND COACH HOUSES\r\nSUTTON HALL STABLES\r\nTHE STABLES\r\nWILLOW COURT",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34260069134007, 53.21513193991877]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN WALLS AND ATTACHED HA HA AT SUTTON SCARSDALE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.33877153578732, 53.21620419879206]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MANOR FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.3352413802154, 53.23684429414908]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE MANOR HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.39561242607702, 53.17573580777496]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRIGHT STREET FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.39027753413151, 53.18057176167127]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD HALL (NOW POST OFFICE)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.69207477109297, 53.04726515356231]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WELL BANKS (AT THE JUNCTION OF WELL BANKS AND NETHER LANE)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60119439076087, 53.04651020118327]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARN AT WOODHEAD FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67653738676103, 53.03168764781246]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FORMER WESLEYAN CHAPEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6905017955062, 53.04820493659687]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GREEN FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60067873479921, 53.04855389434207]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BAKEWELL POST OFFICE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67384975716808, 53.21315345733834]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "WALL ON WEST SIDE OF BATH GARDENS LINKING RUTLAND BUILDINGS TO HAIG HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67591148879206, 53.21377929019891]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Rutland Arms Hotel", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67611498793006, 53.21296541173632]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RUTLAND BUILDINGS\r\nRUTLAND BUILDINGS INCLUDING MOUNTING BLOCK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67615358276001, 53.21344736110639]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE OLD ORIGINAL BAKEWELL PUDDING SHOP",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67476126498449, 53.21340762648339]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Former Royal Bank Of Scotland", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67528365183133, 53.21342867793036]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "STEPS RAILINGS WALLS AND GATEWAYS TO FRONT OF THE ROYAL BANK OF SCOTLAND",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67512043880713, 53.21343556938506]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WAR MEMORIAL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67568141717489, 53.21305165146117]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SAXON COTTAGE AND DIAL COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67747452631917, 53.21261369906974]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH VIEW (NUMBER 9)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67804074713127, 53.2124349586048]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NUMBER 1 AND BUTTS COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67834713438797, 53.21247350471107]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ALL SAINTS", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.67867265818603, 53.21299572970673]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "CHURCH OF ALL SAINTS WALLS AND STEPS INCLUDING ENTRANCES AND WALL FACING CHURCH LANE\r\nENTRANCE AND WALL TO CHURCHYARD OF ALL SAINTS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67815321877824, 53.21260526367262]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "CROSS SITUATED 12 METRES TO SOUTH OF PORCH OF CHURCH OF ALL SAINTS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67884056808268, 53.21274860447178]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE GREAT CROSS AND RAILED ENCLOSURE",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67845815285705, 53.21282256650358]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOLLY COTTAGE\r\nHOLLY HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67882629443415, 53.21247479281475]
          }
        },
        {
          type: "Feature",
          properties: { Name: "IVY HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6778983935467, 53.21240937511716]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FRONT RAILINGS AND GARDEN WALL TO EAST SIDE OF IVY HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67746442534161, 53.21237225005083]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ST JOHNS HOSPITAL AND ATTACHED FRONT WALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67708873148743, 53.21255101172306]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67773240164106, 53.21257971478913]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "ROADSIDE WALL WITH GATEWAYS FORMING NORTHERN BOUNDARY TO THE OLD VICARAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68008631665817, 53.21213582117939]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1 AND 2, STANEDGE ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67915768708936, 53.21431123328897]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "DRINKING FOUNTAIN AT JUNCTION WITH BASLOW ROAD AND COOMBS ROAD\r\nDRINKING FOUNTAIN AT JUNCTION WITH COOMBS ROAD AND STATION ROAD",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67216632615239, 53.21480281652441]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FORMER BAKEWELL RAILWAY STATION", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66812611191925, 53.21747928764246]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "EAST PLATFORM WALL AT FORMER BAKEWELL RAILWAY STATION",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66778111740045, 53.21755023792357]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "FORMER COAL MERCHANTS OFICE AT FORMER BAKEWELL RAILWAY STATION",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66865316610041, 53.21710322115025]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NATIONAL WESTMINSTER BANK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67458157613397, 53.21340713752893]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GRANBY HOUSE NUMBERS 1-5 (CONSECUTIVE)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67394402017375, 53.21299364213313]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WYE COTTAGE AND GRANBY COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67438813933982, 53.21324481270258]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN WALL AT WYE COTTAGE AND GRANBY COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67443374246074, 53.21315504902546]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MAYFIELD COTTAGE AND WESTFIELD COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68061358302259, 53.21175148859871]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "STEPS RAILINGS AND RETAINING WALLS TO MAYFIELD COTTAGE AND WESTFIELD COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68052084895099, 53.21176173705729]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD VICARAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67990135948899, 53.21196786681127]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TWO TREES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68076224956405, 53.21189570625999]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RAILINGS, GATES AND GATEPIERS TO WIRKSWORTH BAPTIST CEMETERY CHAPEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57153010953553, 53.08470560745153]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BIRLEY GRANGE COTTAGE FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.52965037425627, 53.2543193616753]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Brampton Manor, attached boundary walls, gatepiers and railings",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49815512838954, 53.24268379161648]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "L-SHAPED RANGE OF OUTBUILDINGS TO WEST OF HOLLINS HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51756206076286, 53.24252104088168]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WIGLEY FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.52832966547331, 53.24309438145979]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PRATT HALL AND ATTACHED OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51079491389166, 53.25443711406277]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RANGE OF OUTBUILDINGS TO THE NORTH OF RUFFORD FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51528275587296, 53.23164470742942]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TEMPERANCE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.52944967731611, 53.23386724682877]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FRITH HALL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.50462083138743, 53.23476302426218]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41699875351163, 53.18760126212311]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BIRDHOLME FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42580037294059, 53.21197586737344]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WINGERWORTH METHODIST CHURCH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45905005282252, 53.19864680137434]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "ENTRANCE GATEPIERS AND ATTACHED WALLS ADJACENT TO NOS 35 AND 37",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.44014283390292, 53.19865496567342]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDINGS TO THE REAR OF NUMBER 1",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56155529917896, 53.10733590912015]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ROSE COTTAGE\r\n AND SHAMROCK COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.45100629437736, 52.95338011434983]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Church of All Saints", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.44909522872687, 52.95431582371464]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILLERS HOUSE TO SOUTH OF CAT AND FIDDLE MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34935438331701, 52.95350300513771]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41297637599644, 52.96417160591633]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE VILLAGE CROSS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41201174759451, 52.96394210949897]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 389 401", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42127950543104, 52.95668249680643]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BOYAH GRANGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.34125000884701, 52.9382751658836]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ABBEY FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35114935599176, 52.94495480646106]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FRIARS HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35221688287123, 52.94422348524701]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "KITCHEN GARDENS TO THE EAST OF FOREMARK HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.50474326851796, 52.83529727370927]
          }
        },
        {
          type: "Feature",
          properties: { Name: "40, HIGH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42991326966151, 52.82268718955304]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "SIGNAL BOX TO THE NORTH OF TRACK 480 METRES WEST OF BUTTERLEY STATION, AND 30 METRES EAST OF ASHER LANE RAILWAY CROSSING",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4070074131878, 53.06312304110384]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "COTTON PROCESSING AND STORAGE BUILDINGS AT DRAYCOTT MILLS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34405268884921, 52.89452080988542]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Range of barns to north of Eccles House Farmhouse",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.74073318742982, 53.3407141431531]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Gatepiers to St Peter's Churchyard",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.74260054572707, 53.34810822790271]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WAR MEMORIAL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7409385793804, 53.34764633655467]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "HOPE CROSS AT OS 162 874 APPROXIMATELY 1 MILE OFF EDALE ROAD",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.75935772572931, 53.3834481371676]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BRIDGE TO 10 METRES SOUTH OF PORCH TO ST ANDREWS CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57601628687895, 52.92022707803933]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RADBOURNE HALL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.57547609827859, 52.9173549618906]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILE POST AT SK 176 834", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73838976969841, 53.34682618407597]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BARN TO SOUTH EAST OF BROUGH HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73059252991195, 53.33878618126255]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SPRING HOUSE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.76645333270171, 53.35309043321227]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LOOSEHILL HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77094063754, 53.35114855442608]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "TOLL BAR COTTAGE AND SHOP AND ATTACHED WALL AND RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77610015300481, 53.34306477163774]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SPITAL BUILDINGS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.76876239508039, 53.34557141106647]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CASTLE CLOSE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77678195513633, 53.34182993045889]
          }
        },
        {
          type: "Feature",
          properties: { Name: "3 AND 5, THE CROSS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55102158491322, 52.84014282536053]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOMELANDS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54740872425955, 52.83643533730847]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST MARY", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.65514565906417, 52.86370216316524]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LODGE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4766359103757, 52.85315202351057]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ST WILFRIDS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47828194720481, 52.85210747161192]
          }
        },
        {
          type: "Feature",
          properties: { Name: "2-18 Twyford Road", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4771673792598, 52.85341506118485]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LITTLECROFT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47863773797619, 52.85375569228603]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GATES, GATEPIERS, AND RAILINGS TO SOUTH OF THE ETWALL ALMSHOUSES",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60194706818568, 52.88515494843048]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WELL HEAD TO 6 METRES SOUTH WEST OF ST HELEN'S CHURCH PORCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60215573784409, 52.88450376321121]
          }
        },
        {
          type: "Feature",
          properties: { Name: "27-29, HIGH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5489645266396, 52.83839082269856]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HAYES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54378097285598, 52.81988877478624]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ENTRANCE GATE TO NUMBER 16", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5454175565113, 52.83483581930639]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST WYSTAN", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.55162132078293, 52.84118979115708]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GATE PIERS TO REPTON SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55120427115572, 52.8417348675007]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Thatched House", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55198346967692, 52.84044311404829]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WALL AND ATTACHED OUTBUILDING SOUTH OF TWYFORD CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51571042597374, 52.85288617709671]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STENSON LOCK AND ATTACHED BRIDGE TO EAST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51768934961881, 52.86616429649212]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST WILFRID", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.60417652401253, 52.84750564786239]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HIGH BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5967447722224, 52.84351625616299]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MONKS FLOOD BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60062003612351, 52.84024818730115]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ICE HOUSE AT OS 331 262", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.51010604598815, 52.83287363286045]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TWO SETS OF GATEPIERS AND WALLS ENCLOSING CHURCHYARD OF ST SAVIOURS CHURCH",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.51197576505611, 52.83492767188132]
          }
        },
        {
          type: "Feature",
          properties: { Name: "10 Burton Road", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55169471345444, 52.8389456534175]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PITT'S FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48442260522374, 52.76841443026009]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHOP HOUSE AND CART SHED NORTH OF OUTER STABLE RANGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.45758741104912, 52.80113516022828]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "DEER FENCE EAST OF GROTTO IN CALKE PARK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.45236196295229, 52.80051654663918]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PAIR OF CHERUBS TO NORTH OF STATUE OF MERCURY IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42099126008332, 52.82143514669006]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Chest Tomb 20 metres south of Lychgate to All Saints Church",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.3850502055111, 52.86026304988223]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "TRENT AND MERSEY CANAL ASTON LOCK AND ASTON LOCK BRIDGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.37082709488563, 52.85846931038603]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ELVASTON CASTLE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.39522319387158, 52.89296712285468]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SHEEP DIP IN SERVICE COURT AT ELVASTON CASTLE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39660536848209, 52.89322199618606]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "TWO PAIRS OF CHERUBS TO SOUTH WEST OF THE GRAND BASIN IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42057639541443, 52.82063744787528]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PEDESTAL WITH STATUE OF ANDROMEDA IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.41993150453649, 52.82136487685774]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GROTTO TO SOUTH EAST OF THE OLD MILL IN MELBOURNE HALL GARDENS",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42119893382273, 52.81974739806697]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CLOSE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42428383717967, 52.82135161828789]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ST MICHAELS VICARAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42377792847805, 52.82092267184953]
          }
        },
        {
          type: "Feature",
          properties: { Name: "19 Church Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42694838909296, 52.82239597828461]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NUMBER 33 AND ATTACHED BUILDING TO SOUTH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42898183934582, 52.8243690972846]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NEW BRIDGE AT SK 396 260", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.41243642166046, 52.83024496405594]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "11, 15 (The Thatched Cottage) and 19, High Street",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42985696235101, 52.82245319169363]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BROADWAYS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4268136371193, 52.83158997052214]
          }
        },
        {
          type: "Feature",
          properties: { Name: "54 and 56 Main Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42447351960533, 52.83178099268558]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Kennels", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.39926101953513, 52.89263869175727]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "FARMBUILDINGS TO WEST OF ST BARTHOLOMEW'S CHURCH AT ELVASTON CASTLE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39762060707765, 52.89265566581784]
          }
        },
        {
          type: "Feature",
          properties: { Name: "COTTAGE TO EAST OF TUTHOLME", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43112553499347, 52.81506087179975]
          }
        },
        {
          type: "Feature",
          properties: { Name: "21, BLANCH CROFT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42961506507594, 52.82368540875454]
          }
        },
        {
          type: "Feature",
          properties: { Name: "63, CASTLE STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42515028322143, 52.82343618387159]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MELBOURNE BAPTIST CHURCH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42816782364462, 52.82452167576369]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "TEA ROOMS TO NORTH OF MELBOURNE HALL AND ATTACHED WALLS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42278286072949, 52.82171961927728]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PAIR OF PEDESTALS WITH LEAD SLAVES IN MELBOURNE HALL GARDENS",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42206722537401, 52.82123800372687]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "KINGS NEWTON HOUSE AND ATTACHED GATES AND OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42195480147289, 52.83197999766064]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO EAST OF KINGS NEWTON HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42494277429924, 52.83187781560499]
          }
        },
        {
          type: "Feature",
          properties: { Name: "22-24, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42838519666056, 52.8226528943438]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MELBOURNE CEMETERY CHAPELS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42639953700398, 52.82921472349166]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "DOWER HOUSE COTTAGE AND ATTACHED OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4252335604026, 52.82117412364097]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GARDEN WALLS ATTACHED TO SOUTH FRONT OF MELBOURNE HALL WITH ATTACHED RAILINGS AND WALL TO EAST",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42291197591915, 52.8209119782776]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "POOL HOUSE AND ATTACHED GARDEN RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42146839881125, 52.81939223902179]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE ROEBUCK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42661890634578, 52.82293568390796]
          }
        },
        {
          type: "Feature",
          properties: { Name: "56 Potter Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42571109339534, 52.82287375376662]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CROFTON HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42168249221494, 52.83225921316451]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE SPREAD EAGLE PUBLIC HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42702913547283, 53.23411745734511]
          }
        },
        {
          type: "Feature",
          properties: { Name: "11, BEETWELL STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42669175213479, 53.2341007605059]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GATES, PIERS AND RAILINGS AT ENTRANCE TO QUEEN'S PARK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.43494405140791, 53.23176509081142]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BARN AT ST BRIDES FARM TO NORTH WEST OF FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.45418707862052, 52.82304366571782]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "TRENT AND MERSEY CANAL BRIDGE AT WESTON LOCK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.39498257006404, 52.84628347056678]
          }
        },
        {
          type: "Feature",
          properties: { Name: "41 Main Street", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.40260501396862, 52.84801930409851]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "TRENT AND MERSEY CANAL SARSON'S BRIDGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42306863720453, 52.84600255195233]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1 AND 1A, LOW PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4279936040502, 53.23501547201114]
          }
        },
        {
          type: "Feature",
          properties: { Name: "9, LOW PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42757470885172, 53.23496851149592]
          }
        },
        {
          type: "Feature",
          properties: { Name: "41, LOW PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42879872117875, 53.23510924927666]
          }
        },
        {
          type: "Feature",
          properties: { Name: "47 AND 47A, LOW PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42920589344044, 53.23512188309102]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE PEACOCK INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43025301585811, 53.23524205419023]
          }
        },
        {
          type: "Feature",
          properties: { Name: "73 AND 75, LOW PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43055660203598, 53.23526796748021]
          }
        },
        {
          type: "Feature",
          properties: { Name: "87, NEW SQUARE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43089697757024, 53.23579866848105]
          }
        },
        {
          type: "Feature",
          properties: { Name: "UNITED REFORMED CHURCH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43029538356342, 53.23656356028756]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST MARY AND ALL SAINTS", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.42444284024869, 53.23620086613454]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCHYARD WALLS AND PIERS TO ST MARY'S CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4240104409949, 53.2367225161855]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Monument 10 metres South East of St Annes Church",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62384433538542, 53.24721823520451]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Greystone Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61747083904095, 53.25080070128541]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE EMPEROR FOUNTAIN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61168865051367, 53.22501236536174]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TOLL BAR COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63362541429045, 53.29707724424958]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TYTHE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64301946092895, 53.2813797451498]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PARK LODGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61111210049453, 53.24619056908013]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE ROYAL OAK INN", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.42773375112981, 53.23540072573027]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "WALL AND RAILINGS ENCLOSING NORTHERN END OF EDENSOR VILLAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62457523541607, 53.22615023444582]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PARK RANGERS HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62682775476426, 53.22894381970151]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Tudor Lodge", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.62669140305615, 53.22739732380214]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STABLE BLOCK AT HASSOP HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66780660005018, 53.24716826267947]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ROW OF ELEVEN STATUES ALONG THE BROADWALK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.61080550586987, 53.22715010390507]
          }
        },
        {
          type: "Feature",
          properties: { Name: "URN TO BLANCHE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61092493967687, 53.22333796267014]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE FIRST DUKES GREENHOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.60985161121396, 53.22799392975221]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Egyptian Statue behind the Dukes Greenhouse 9 metres from the corner",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60989346854154, 53.22806269594827]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Series of Herms and Altars laid out in a Y to the east of the Ring Pond",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60947954903409, 53.22557935918645]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FOUNDATION WALLS OF PAXTONS GREAT CONSERVATORY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60848177484706, 53.22402817490255]
          }
        },
        {
          type: "Feature",
          properties: { Name: "QUEEN MARYS BOWER", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.61560461798739, 53.22919791537555]
          }
        },
        {
          type: "Feature",
          properties: { Name: "AQUEDUCT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60343092141808, 53.22690582136067]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Norman Villa and attached garden walls",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62717089395497, 53.22565499960728]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BUBNELL HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62888060109298, 53.24966932034076]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BASLOW HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62585981765341, 53.25234752564153]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "BASLOW LODGES GATES PIERS AND RAILINGS AT NORTH ENTRANCE TO CHATSWORTH PARK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.61008443420704, 53.24601981995328]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 276721", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.58731263513901, 53.24567837242382]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "K6 TELEPHONE KIOSK NEAR TOLL BAR COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62495708946958, 53.24782872774212]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Top House", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63086531153774, 53.22453389796687]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Shepherds Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62769880013633, 53.22523417495663]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PARK VIEW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62469679225923, 53.22595286361772]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ORNAMENTAL FOUNTAIN ATTACHED WALL AND RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62513132483377, 53.22593625171833]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "School House and attached garden walls",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62614899955652, 53.22603832046353]
          }
        },
        {
          type: "Feature",
          properties: { Name: "6, CHURCH VIEW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.31830091755053, 52.89682116177878]
          }
        },
        {
          type: "Feature",
          properties: { Name: "39, MAIN STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.31896853563966, 52.89690589110551]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "DRAYCOTT HALL AND ATTACHED OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.34529418632358, 52.89301741415842]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DRAYCOTT MILLS FRONT RANGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.34349099807968, 52.89431095288148]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DRAYCOTT HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.34967978914078, 52.90988779825206]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SAWLEY RECTORY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.29929137471726, 52.87814739455999]
          }
        },
        {
          type: "Feature",
          properties: { Name: "VILLAGE LOCK-UP AND POUND", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.28825220960145, 52.9289893859655]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CANAL BRIDGE AT SK 481 367", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.28654416602657, 52.92585309105372]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BAPTIST CHURCH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.30112832869531, 52.87941672814848]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SUNDIAL IN ST EDMUND'S CHURCHYARD 15 YARDS SOUTH OF CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.77568760953841, 53.34256437505938]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILEPOST AT OS 134 837", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.79985178336378, 53.34954335150221]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GOOSEHILL HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.78037207186264, 53.34116079848229]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GATE PIERS AT GOOSEHILL HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.78072086188294, 53.34267318613905]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NORTH VIADUCT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.79198452896445, 53.2559067754876]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCH COTTAGE, CHURCH VIEW AND ATTACHED HOUSE TO EAST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67464727506775, 53.28378910041849]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE BRICK HOUSE AND RAILINGS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67685049139889, 53.28444395801549]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Tomb of Catherine Mompesson, 7 metres East of Church Porch",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67461441304791, 53.2841665365276]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PLAGUE COTTAGE AND ROSE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67579836798466, 53.28429559352043]
          }
        },
        {
          type: "Feature",
          properties: { Name: "EYAM HALL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.67664298353872, 53.28491271707414]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HALL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67730650939824, 53.28541640222537]
          }
        },
        {
          type: "Feature",
          properties: { Name: "EYAM HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68748313087274, 53.28857954990217]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GATEPIERS BETWEEN EYAM HOUSE AND EYAM VIEW FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68783939473492, 53.28869889200294]
          }
        },
        {
          type: "Feature",
          properties: { Name: "RUINS OF BRADSHAW HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67804495812527, 53.28713897855285]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WAYSIDE AND ROSELYN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6714054888126, 53.28435068954221]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Foresters House", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67119254796913, 53.28443582775067]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FOLD FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.78311672971888, 53.23505638851545]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE VICARAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7013861793832, 53.24348147772415]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCHYARD CROSS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70127035973409, 53.24373744577008]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCHLADY HOUSE AND ATTACHED GARDEN WALL AND GATE PIERS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.70296211470051, 53.24311686138407]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LABURNUM HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70169099229999, 53.24274516001987]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WAR MEMORIAL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70302385571537, 53.2428563408798]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "EASTERN GATES, STEPS AND WALLS TO ALL SAINTS CHURCHYARD",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68375008563968, 53.17642751344809]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OBELISK TO 15 METRES NORTH OF CHANCEL OF ALL SAINTS CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68215386579177, 53.17570103739438]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MEADOW PLACE GRANGE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70041132615164, 53.18908653498858]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HADDON HALL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.64965778385286, 53.19385610278658]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD FILLYFORD BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64060070871139, 53.18952871851592]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WOODSIDE VIEW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68162324495546, 53.17373146500519]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NO 1 AND ATTACHED RAILINGS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68476810793265, 53.17607672431713]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE VICARAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68532928576981, 53.1753752603718]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "COAL PIT BRIDGE OVER THE RIVER LATHKILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68038118423837, 53.18332369799935]
          }
        },
        {
          type: "Feature",
          properties: { Name: "YHA HOSTEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68642179543417, 53.17498442064799]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MEDWAY COTTAGE AND ATTACHED COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68841468857948, 53.17455816304774]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD HALL FARMHOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.68785122564416, 53.17545098734015]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LEAM COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65194929672628, 53.31390035310658]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MILEPOST 300 YARDS TO THE WEST OF HARPER LEES",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64751593222063, 53.31796252127294]
          }
        },
        {
          type: "Feature",
          properties: { Name: "KIMBER COURT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.64383484626626, 53.33846964701979]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FORMER GAMEKEEPERS LODGE AT BROOKFIELD MANOR",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65262601862962, 53.34333143443691]
          }
        },
        {
          type: "Feature",
          properties: { Name: "UPPER HURST", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66685674361227, 53.34822580054144]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GARDEN HOUSE AT LONGFORD HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68225915096365, 52.94165211534663]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "KITCHEN GARDEN WALLS 10 YARDS NORTH WEST OF BARN AT LONGFORD HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.68270218788898, 52.94415232348769]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OVERSTONES FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62833495322182, 53.34228105102297]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CROSS SHAFT IN ST MICHAEL'S CHURCHYARD",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64991530880232, 53.3329985033641]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD BELL HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6499934223982, 53.33282493492365]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1-3, BANK TOP", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.649467501587, 53.33286833819687]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HOUSE TO THE NORTH EAST OF ROCK HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64897441350689, 53.3325702638051]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE NORTH WEST OF NETHER HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.66135346189571, 53.32614305644558]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "VALERIAN COTTAGE AND ATTACHED COTTAGES TO WEST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.65526893716831, 53.33035936719176]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PADLEY CHAPEL", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.63112296269288, 53.30697889920383]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOLY TRINITY CHURCH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.72392862383095, 52.95970763135026]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MALT HOUSE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.72276725914707, 52.95974088954183]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TOP STYDD FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.74916325154728, 52.9656021497724]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCHYARD CROSS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.63669967424309, 52.96818315888997]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SCHOOL HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62145484479187, 52.96926907835289]
          }
        },
        {
          type: "Feature",
          properties: { Name: "EDNASTON HOME FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65958567755161, 52.97905669672454]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TOWNS WELL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62082924735389, 52.9692940538895]
          }
        },
        {
          type: "Feature",
          properties: { Name: "COACH HOUSE AT THE OAKLANDS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.61694095850124, 52.96783432270478]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "PAIR OF TABLE TOMBS 20 YARDS SOUTH EAST OF ST CHAD'S CHURCH PORCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.6817527640987, 52.94171368686408]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE LONGFORD ALMSHOUSES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67789890933502, 52.93968071900966]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LONGFORD MILL AND ATTACHED WEIR", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67433775791371, 52.93437631159073]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LONGFORD CHEESE FACTORY", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67464492665541, 52.93408484377372]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GROUP OF THREE GRAVESTONES 9 YARDS SOUTH EAST OF NORBURY CHURCH TOWER",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.81423960134823, 52.97858024439937]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RANGE OF OUTBUILDINGS AT EDNASTON HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.64551779574916, 52.96901972959588]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HALL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62490743782459, 52.96948676804878]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NORTH FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62802345314604, 52.98611224789504]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BRAILSFORD MILL FARMHOUSE AND ATTACHED OUTBUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.63896164842287, 52.97509460673475]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "RAILWAY OVERBRIDGE 250 METRES SOUTH WEST OF BIRLEY FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.3387795165355, 53.30579233639925]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STABLE COURT AT RENISHAW HALL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.34646313971909, 53.30281409425059]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE GARDENER'S HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.34790397016555, 53.30279495087429]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GARDEN WALLS, PERGOLAS AND GATE TO LANDSCAPE GARDEN AND TO WATER GARDEN AT THE GREEN",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.35238781711061, 53.3063472910339]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST MARY", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.57227509487461, 53.08195718453677]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCHYARD WALL AND RAILINGS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57176644538759, 53.08188171883651]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "2 BOLLARDS ON RIGHT HAND SIDE OF GATE PIERS TO WEST OF ST MARY'S",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57328850423129, 53.08207018837045]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "A GROUP OF 8 BOLLARDS AT SOUTH END OF CHURCH STREET",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57204988401528, 53.08226120583071]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GELL'S BEDEHOUSES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57162038492832, 53.08187551272254]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1, COLDWELL STREET", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.57313726042832, 53.08284529037317]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD MANOR HOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.57068925518617, 53.08265786437683]
          }
        },
        {
          type: "Feature",
          properties: { Name: "31 Station Road", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.33696490532841, 53.30000094755901]
          }
        },
        {
          type: "Feature",
          properties: { Name: "COLDWELL COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.3528719095698, 53.30571622378163]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TROWAY HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42116855685242, 53.31330229970202]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MARSH LANE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.38526150544667, 53.30737945490878]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PITTYWOOD FARMHOUSE AND BARN ATTACHED",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.58581452636818, 53.0731195237965]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Railings, Gates and Gate Piers to Catholic Presbytery, Catholic Church and Nos 25 to 29 (odd)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73709994371209, 53.01672901096064]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GABLED BUILDING AT REAR OF NUMBERS 12 AND 14",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73341947023656, 53.01910430912908]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE GABLES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73479056724433, 53.02385229964381]
          }
        },
        {
          type: "Feature",
          properties: { Name: "11, BUXTON ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73290463100679, 53.0189730594339]
          }
        },
        {
          type: "Feature",
          properties: { Name: "19, BUXTON ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73298544741285, 53.01911565054487]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GARDEN WALL AND GATE PIERS OF VICARAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57239837934671, 53.08270793043344]
          }
        },
        {
          type: "Feature",
          properties: { Name: "12 AND 14, COLDWELL STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57123952189652, 53.08253451932482]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HAARLEM MILL", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.57785360165955, 53.07002604546829]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "HAARLEM HOUSE AT THE SOUTH SIDE OF HAARLEM MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57766530015375, 53.06987141398171]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BABINGTON HOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.57444179911212, 53.08366863065949]
          }
        },
        {
          type: "Feature",
          properties: { Name: "19, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57335596706787, 53.08253577839728]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PREMISES OCCUPIED BY WESTMINSTER BANK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57347052253289, 53.0822448782702]
          }
        },
        {
          type: "Feature",
          properties: { Name: "10 AND 12, NORTH END", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57152038808698, 53.08301075711186]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LIME KILN INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57257416515784, 53.08542869194535]
          }
        },
        {
          type: "Feature",
          properties: { Name: "31, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57290225148505, 53.08132890151653]
          }
        },
        {
          type: "Feature",
          properties: { Name: "29, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7331222967078, 53.01788956880564]
          }
        },
        {
          type: "Feature",
          properties: { Name: "37-39 and 41 Market Place", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73311096668616, 53.01819436607892]
          }
        },
        {
          type: "Feature",
          properties: { Name: "16, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73208253162521, 53.01817407940356]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILESTONE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73231882138399, 53.01828260640071]
          }
        },
        {
          type: "Feature",
          properties: { Name: "3 AND 5, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73381881196812, 53.01701836875288]
          }
        },
        {
          type: "Feature",
          properties: { Name: "9 AND 11, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73413255702991, 53.01690221012884]
          }
        },
        {
          type: "Feature",
          properties: { Name: "VINE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7345715907856, 53.01673776766813]
          }
        },
        {
          type: "Feature",
          properties: { Name: "25, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73498677967354, 53.01658433164322]
          }
        },
        {
          type: "Feature",
          properties: { Name: "29, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.7352377461286, 53.0165540935466]
          }
        },
        {
          type: "Feature",
          properties: { Name: "12 AND 14, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73408246542436, 53.01668027256724]
          }
        },
        {
          type: "Feature",
          properties: { Name: "38, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.736001563594, 53.01596250295685]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE MANSION INCLUDING COACH HOUSE WALL",
            Grade: "I"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73718124009428, 53.01561453307429]
          }
        },
        {
          type: "Feature",
          properties: { Name: "COBBLED PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73760401374917, 53.01559260625897]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Frank Wright's Corn and Provender Mill",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73874877560897, 53.01274144468874]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BUST OF CATHERINE MUMFORD, WAR MEMORIAL PARK",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.72909075910311, 53.01870968688915]
          }
        },
        {
          type: "Feature",
          properties: { Name: "33, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57290066180593, 53.08128131642754]
          }
        },
        {
          type: "Feature",
          properties: { Name: "37, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57291613732129, 53.08114746103109]
          }
        },
        {
          type: "Feature",
          properties: { Name: "6, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57337462612073, 53.08147782640412]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NUMBERS 10 (TIGER INN), 12 AND 14",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57335163584672, 53.08124204947818]
          }
        },
        {
          type: "Feature",
          properties: { Name: "32, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57350354549128, 53.08038641590884]
          }
        },
        {
          type: "Feature",
          properties: { Name: "25 AND 25A, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73215298906653, 53.01778267238937]
          }
        },
        {
          type: "Feature",
          properties: { Name: "33, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73130133900059, 53.01800736883078]
          }
        },
        {
          type: "Feature",
          properties: { Name: "37-39 St John's Street", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.73116765889563, 53.01808619260303]
          }
        },
        {
          type: "Feature",
          properties: { Name: "51, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73047385437246, 53.01840777477806]
          }
        },
        {
          type: "Feature",
          properties: { Name: "38 AND 40, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73172374359943, 53.01764170655465]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOUSE ADJOINING NUMBER 52", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73101541080203, 53.01792004914201]
          }
        },
        {
          type: "Feature",
          properties: { Name: "58, ST JOHN'S STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73042836242608, 53.01809843458866]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SURFACE OF TIGER YARD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73345033825521, 53.0175588735009]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1 AND 2, VICTORIA SQUARE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73335434298839, 53.01740386431701]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HORNS PUBLIC HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73295187564553, 53.01740296283997]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WALTON BANK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73002376946297, 53.01365686860984]
          }
        },
        {
          type: "Feature",
          properties: { Name: "6, DIG STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73325716953198, 53.01690796695353]
          }
        },
        {
          type: "Feature",
          properties: { Name: "10, DIG STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73312314649545, 53.01684841828163]
          }
        },
        {
          type: "Feature",
          properties: { Name: "14, DIG STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73292600336956, 53.01678092627385]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BOUNDARY WALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73203648676791, 53.01864478975742]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ROYAL BRITISH LEGION HEAD QUARTERS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73260575704417, 53.01793254738891]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOLY TRINITY CHURCH", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.60020636213429, 53.04851147221849]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SUMMER HOUSE ON SITE OF FORMER SWIMMING POOL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.73696666410594, 53.01658489010196]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Ashbourne Methodist Church", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73534246916254, 53.01614584654702]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRADBOURNE MILL HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70089006525216, 53.06644541594959]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WHITEMEADOW FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.70460592840252, 53.07452624052182]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Bank", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67541629485552, 53.06856090200746]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SUNDIAL (10 METRES SOUTH OF CHURCH)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.69089903927117, 53.07152764419956]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILL FIELDS FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6331273190718, 53.04335874843419]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MOORSIDE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60223404787189, 53.05349825075889]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "UPPERFIELD FARMHOUSE AND ADJOINING BARN TO THE WEST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62246475876004, 53.05555842834211]
          }
        },
        {
          type: "Feature",
          properties: { Name: "JAMES COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.69260269317235, 53.04854297336296]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PROSPECT HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6020067623454, 53.04738486661235]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROSE BANK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60124231057789, 53.04778682248273]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE MANOR HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60225332672804, 53.04814976865092]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Barley Mow Inn", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.60422510175074, 53.04785070397877]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Redhill Farmhouse and Redhill Cottage",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47597676270065, 52.99517270605136]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE FOUNTAIN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47857740790006, 53.02337495481244]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "MILEPOST 20 METRES SOUTH EAST OF THE FORMER RISING SUN PUBLIC HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47855382161737, 53.08266426449916]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "VILLAGE CROSS TO THE NORTH EAST OF THE JOVIAL DUTCHMAN PUBLIC HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47885100191795, 53.08635411774053]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FRAMEWORK KNITTING WORKSHOP", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49736098782973, 53.0874949853581]
          }
        },
        {
          type: "Feature",
          properties: { Name: "37-40, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47919446796477, 53.02289223726622]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD POLICE STATION", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48491433809236, 53.02831962164917]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "NUMBERS 1-14 WEST TERRACE AND 15-23 EAST TERRACE, \r\nHOPPING HILL TERRACE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47832439221642, 53.00526709792265]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LAWN COTTAGE\r\nTHE LAWN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46781766145454, 53.02666236773729]
          }
        },
        {
          type: "Feature",
          properties: { Name: "7 AND 9, SUNNY HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4816357642704, 53.00194905420931]
          }
        },
        {
          type: "Feature",
          properties: { Name: "17-27 Wyver Lane", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48596572287823, 53.03143442794553]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Congregational Church", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47992021543591, 53.02577195438825]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE NAG'S HEAD PUBLIC HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47794791793898, 53.02365086295273]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ZION METHODIST CHURCH", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48083292903909, 53.01554621919853]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HOLLY BUSH INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47710684019713, 52.9982272282456]
          }
        },
        {
          type: "Feature",
          properties: { Name: "1-28 Hopping Hill", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48017443657071, 53.00578107477337]
          }
        },
        {
          type: "Feature",
          properties: { Name: "31-52, HOPPING HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48122615420031, 53.00631602420799]
          }
        },
        {
          type: "Feature",
          properties: { Name: "40-53, LONG ROW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48276579527797, 53.02719565038769]
          }
        },
        {
          type: "Feature",
          properties: { Name: "58-63, LONG ROW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48366013147933, 53.02721750856774]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FORGE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47882262605796, 53.00039692852418]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STABLES AND COACH HOUSE TO WINGFIELD HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.44044997050602, 53.09511769165487]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PROSPECT HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44133471690523, 53.0926475376512]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "K1 TELEPHONE BOX AT THE NATIONAL TRAMWAY MUSEUM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48616072501001, 53.08958641274477]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Metropolitan Police Public Call Post at the National Tramway Museum",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48671858592401, 53.0911349387865]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE DERWENT HOTEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.50613296877059, 53.0855895236353]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GLEBE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48412326209586, 53.10457120805352]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WHATSTANDWELL BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.50706741364441, 53.08549558721947]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RANGES OF FARM BUILDINGS INCLUDING CONNECTING WALLS AND GATE PIERS TO SOUTH WEST OF FOLDYARD AT WYVER FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49462234686471, 53.04221353575328]
          }
        },
        {
          type: "Feature",
          properties: { Name: "10 AND 12, BOWNS HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47812627164219, 53.08541624608532]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "THE BARNS AND ATTACHED OUTBUILDINGS TO THE NORTH AND NORTH EAST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47879624217331, 53.08557199346073]
          }
        },
        {
          type: "Feature",
          properties: { Name: "TRAMWAY BRIDGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48121441250312, 53.08446780954605]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GERVASE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4875978147974, 52.98542547520944]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "DUFFIELD BAPTIST CHURCH AND ATTACHED HOUSE, WALLS AND RAILINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48647669783881, 52.98198670878897]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE FORGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48732715930395, 52.98564005669278]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ALL SAINTS", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.53669744965241, 52.95925291038912]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OLD POST BOX OPPOSITE HORSLEY SCHOOL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.43842752891196, 52.99610632876461]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE PEACOCK HOTEL AND ATTACHED COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42029905764004, 53.09900127743159]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE WEST OF THE STABLES TO WINGFIELD HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.44177146855305, 53.09121628208135]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE SOUTH OF MALTHOUSE FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.43992370989932, 53.09594028735704]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STATIONMASTER'S HOUSE AT WINGFIELD STATION",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42639582672142, 53.09731394957473]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDINGS TO THE SOUTH OF MANOR COTTAGE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.44105194665088, 53.09257429870687]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE BRIDGE AND CASCADE", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.53593508477294, 52.96292185680106]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Sulphur Bath", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.52787137987891, 52.96122869749086]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HILLTOP FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.58798331124077, 52.95659980373492]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE RED HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57840444097181, 52.94663303958097]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Langley Hall", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57492568143382, 52.95233787094978]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE PASTURES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.58486122480188, 52.93906875036939]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOME FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.53841774990335, 52.93810637979338]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "TOMB, SEVEN METRES WEST OF TOWER OF ALL SAINTS CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.52539126151256, 52.93606838706536]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BURLEY HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48054909175989, 52.97368809494611]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SOUTH CHAPEL AT DUFFIELD CEMETERY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49450790761303, 52.99278605184823]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "NORTH CHAPEL AT DUFFIELD CEMETERY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49502832005476, 52.99329591034027]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "ROAD BRIDGE OVER RAILWAY BY DUFFIELD CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48276178982403, 52.982510006372]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DUFFIELD BANK COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4767548839545, 52.98634955146769]
          }
        },
        {
          type: "Feature",
          properties: { Name: "36, TAMWORTH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49126015914675, 52.98812898164344]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOLLYBUSH COTTAGES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55507990919826, 52.9891843762465]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILE POST AT OS 293 425", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56468227983702, 52.97906719079661]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "JOINER'S SHOP TO NORTH OF SAW MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.30993679381579, 53.1658671784964]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "CHEST TOMB 10 METRES SOUTH WEST OF CHURCH OF ST JOHN THE BAPTIST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.30228560108525, 53.18202064126934]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Stable block at Barlborough Hall", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.28537683337664, 53.2990588024776]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD GEORGE INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.21067936510868, 53.28540209744467]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STEETLEY FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.18474597075819, 53.30348377935021]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CART HOVEL AT STEETLEY FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.18439203045718, 53.30315775998077]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HOMESTEAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.38965155310243, 53.18039776974672]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST LAWRENCE", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.39610586370604, 53.17575628369747]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BLUE BELL INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.3959489166696, 53.17627896021731]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "7, 7A, 7B, 8, 10 AND 12, CHURCH STREET",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47151325370904, 53.30119837178825]
          }
        },
        {
          type: "Feature",
          properties: { Name: "14 and 16 Eckington Road", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46002411915894, 53.31133594154205]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GAZEBO TO THE SOUTH EAST HALLOWES GOLF CLUBHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.46153427469849, 53.29270000842087]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE MONUMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47523903388369, 53.3021477544539]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47487171811596, 53.30245827659827]
          }
        },
        {
          type: "Feature",
          properties: { Name: "VALE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47051954726444, 53.30128851037509]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "ENTRANCE GATEPIERS AND ATTACHED BOUNDARY WALL TO ECKINGTON RECTORY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.35260582382106, 53.31281256498861]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HOLLIES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35421586291181, 53.31098180571248]
          }
        },
        {
          type: "Feature",
          properties: { Name: "74, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35545013714359, 53.31111905222622]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RANGE OF OUTBUILDINGS TO THE SOUTH WEST OF DRONFIELD WOODHOUSE HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.50624697782886, 53.30258301585643]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD GRAMMAR SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47387589266633, 53.30168086165478]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE GREEN DRAGON INN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47303707696814, 53.30156031193152]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "PREMISES OCCUPIED BY THE SLINN COMPUTER GROUP",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47337952756017, 53.30177755217986]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILL CHIMNEY AT EAST MILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48572868680847, 53.02879956798852]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BRIDGE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48733218202986, 53.03063128788702]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHEVIN VIEW", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48573753706574, 53.02429601383036]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Devonshire", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48532155443253, 53.02542685614504]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ST JOHN THE BAPTIST", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47602109087437, 53.02394803552502]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GATE PIERS, GATES AND EASTERN BOUNDARY WALL TO CHURCHYARD OF CENTRAL METHODIST CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48457024858839, 53.02216052835775]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Walls of Railway Cutting extending from approximately 35 yards north of Long Row to Field Lane Bridge and from approximately 45 yards north of King Street to New Road Bridge",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.4830992420943, 53.02641786699773]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "SOUTHERN RANGE OF FARM BUILDINGS IN SOUTH WESTERN FARMYARD AT CROSSROADS FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49915141613446, 53.02722072252566]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PUMP", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49922246696847, 53.02903195883224]
          }
        },
        {
          type: "Feature",
          properties: { Name: "5-11, BELPER LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48734367886609, 53.03091899183859]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Unity Mill", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48586523343668, 53.02358641842756]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "GIBFIELD LANE BRIDGE OVER RAILWAY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48304247875767, 53.01792398141095]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "THREE MONUMENTS TO BOURNE FAMILY ON SOUTH SIDE OF ENTRANCE GATES IN CHURCHYARD OF CENTRAL METHODIST CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48458643999758, 53.02205272800934]
          }
        },
        {
          type: "Feature",
          properties: { Name: "11-21, CHEAPSIDE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48021650059867, 53.02220453278359]
          }
        },
        {
          type: "Feature",
          properties: { Name: "171 AND 173, FAR LAUND", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.46415003611815, 53.03627337080831]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "THREE IRON POSTS AT TOP OF WEST STEPS TO FOOTPATH IN FRONT OF CHEVIN ALLEY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48024534838876, 53.0025471544612]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STONE STILE AND GATE PIERS AT CHEVIN MILL (TO EAST OF MILL)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49606762174938, 53.02572449906508]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILFORD BAPTIST CHAPEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48095916183557, 53.00370799156399]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "EAST RANGE OF FARM BUILDINGS IN FARM YARD AT CHEVIN HOUSE FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49199792745474, 53.01422800583134]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHEVIN FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49058132299675, 53.01555235661984]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCHYARD WALLS, PIERS AND GATES AT CHURCH OF ST PETER",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47988294846958, 53.02515153602426]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD KING'S HEAD PUBLIC HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48041342528922, 53.0219447049956]
          }
        },
        {
          type: "Feature",
          properties: { Name: "47, DERBY ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48270084495513, 53.01640832137967]
          }
        },
        {
          type: "Feature",
          properties: { Name: "15 BELPER LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48724856214473, 53.03139501019145]
          }
        },
        {
          type: "Feature",
          properties: { Name: "23, BELPER LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48698718403025, 53.03205908582568]
          }
        },
        {
          type: "Feature",
          properties: { Name: "54 and 56 Belper Lane", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48866796444299, 53.03367537810095]
          }
        },
        {
          type: "Feature",
          properties: { Name: "82 AND 84, BELPER LANE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48894787549041, 53.0339642332418]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Dalley House", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.50330820738896, 53.0391577804938]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "BELPER RIVER WEIRS, RETAINING WALLS AND SLUICES TO BELPER RIVER WEIRS",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48643334251068, 53.02972849605693]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "NORTHERN PREMISES OF BILL LOMAS (MOTOR CYCLES) LIMITED AND A PAIR OF COTTAGES ADJOINING TO THE NORTH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47761999473742, 53.00256074968486]
          }
        },
        {
          type: "Feature",
          properties: { Name: "QUARRY COTTAGES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47756738145617, 53.0027806465953]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WAR MEMORIAL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47860461959096, 53.00447654710628]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHIMNEY AT MILFORD DYEHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47967216595723, 53.00267925022987]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MILFORD HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4817992769648, 53.00108536354112]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MOSCOW FARMHOUSE", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.48488890417928, 52.99653363652357]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STONE RAMP AND WALLS TO FOLDYARD AT MOSCOW FARM",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48548955583781, 52.99614086389301]
          }
        },
        {
          type: "Feature",
          properties: { Name: "10, MARKET PLACE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57386774415865, 53.08260005879801]
          }
        },
        {
          type: "Feature",
          properties: { Name: "8, NORTH END", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57157350092379, 53.0829706049337]
          }
        },
        {
          type: "Feature",
          properties: { Name: "EAST MILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48552466593281, 53.0289194453604]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "EBENEZER HOUSE AND ATTACHED OUTBUILDING",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.74297873089998, 53.34944697082745]
          }
        },
        {
          type: "Feature",
          properties: { Name: "OLD HALL HOTEL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.742250065496, 53.34821396115192]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SUNDIAL 6 METRES SOUTH OF ST ANNES CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62398639658347, 53.24725858213569]
          }
        },
        {
          type: "Feature",
          properties: { Name: "LAMP STANDARD OUTSIDE NUMBER 63", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4299895149545, 53.23526497351498]
          }
        },
        {
          type: "Feature",
          properties: { Name: "57, LOW PAVEMENT", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.42965229902856, 53.23516344360694]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Wyver Farmhouse", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.49505796070051, 53.04262457754717]
          }
        },
        {
          type: "Feature",
          properties: { Name: "38-47, SHORT ROWS", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48042862050576, 53.0268888355869]
          }
        },
        {
          type: "Feature",
          properties: { Name: "47, SUNNY HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48473676415509, 53.00181868562735]
          }
        },
        {
          type: "Feature",
          properties: { Name: "NEW ENGINE MINE ENGINE HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6651713095284, 53.29295838761065]
          }
        },
        {
          type: "Feature",
          properties: { Name: "5-8, THE SCOTCHES", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4863695374929, 53.03258678739897]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GATEPIERS TO EYAM HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.68752646669718, 53.28876635016194]
          }
        },
        {
          type: "Feature",
          properties: { Name: "43 AND 45, PARK SIDE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47398697562264, 53.02325588983725]
          }
        },
        {
          type: "Feature",
          properties: { Name: "The Firs", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67388226096915, 53.28774204482337]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MAKENEY YARD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47702052515172, 52.99666114774869]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BARN NORTH WEST OF EYAM HALL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.67717621583672, 53.28526139283404]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MOMPESSONS WELL AT SK 223 772", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.66722007224298, 53.29125166536957]
          }
        },
        {
          type: "Feature",
          properties: { Name: "65, HOPPING HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47960056494569, 53.00516730237486]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "CHURCHYARD TOMB 12 METRES SOUTH EAST OF CHURCH PORCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.67459995991348, 53.28409458758715]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "UNITARIAN CHAPEL AND CHAPEL COTTAGE",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48017722041934, 53.02671694375102]
          }
        },
        {
          type: "Feature",
          properties: { Name: "45, WASH GREEN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56521681158382, 53.08301735373558]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HERBERT STRUTT SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48432468416845, 53.01899526571678]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "STONE ARCH TO SOUTHERN ENTRANCE OF MILFORD RAILWAY TUNNEL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48774252066354, 52.99838875121871]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BENTHILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4942468648046, 53.08510687062824]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WOODBANK HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47711589006814, 53.07561532565097]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WELL AT REAR OF NUMBER 11", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4267496608749, 53.23392186483562]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SUMMERHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60636205312162, 53.22814613673052]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCHSIDE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4802621452362, 53.16347791919269]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Milford Tunnel North Portal (SPC 8 21)",
            Grade: "II*"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48576518939666, 53.0053141964318]
          }
        },
        {
          type: "Feature",
          properties: { Name: "GIPSYHILL FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.23670256237334, 53.29486163537361]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHURCH OF ALL SAINTS", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.185797067439, 53.30273749015163]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD MANOR HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.21140307218177, 53.2852001332539]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "LYCHGATE AND CHURCHYARD WALL AT ST WYSTAN'S CHURCH",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.55129014725327, 52.84068948975618]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE GREEN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35322568505082, 53.30614061127253]
          }
        },
        {
          type: "Feature",
          properties: { Name: "131, 133 AND 135, HIGH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.36422098394285, 53.30745799062515]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "THE CROFT, BURSAR'S OFFICE AND ATTACHED GATE PIERS TO WEST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.55095560819079, 52.83995707241673]
          }
        },
        {
          type: "Feature",
          properties: { Name: "No 11, The Cross", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55110963730763, 52.84024204312039]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "ENTRANCE GATEWAY, RAILINGS AND BOUNDARY WALLING TO RENISHAW HALL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.35096579860697, 53.30692673525462]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Cavendish Flats", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62606956665953, 53.22655942079121]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Gazebo at Barlborough Hall", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.28646938010208, 53.29922712485602]
          }
        },
        {
          type: "Feature",
          properties: { Name: "POST OFFICE AND ATTACHED COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.62520747255392, 53.22579267040162]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE OLD VICARAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.6253807838846, 53.22481343778814]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Pair of cottages at Nether Birchitt",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47669315149466, 53.31058312970424]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SILKSTONE FARMHOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45734176478328, 53.31100019387238]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE RECTORY", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.35233656895878, 53.31255744107592]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Manor Cottage", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44097496131641, 53.09275372037655]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTBUILDING TO THE WEST OF WINGFIELD HOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.44067579034205, 53.09504990387288]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BARN TO NORTH WEST OF MALTHOUSE FARMHOUSE",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.35294475752859, 53.31184698233439]
          }
        },
        {
          type: "Feature",
          properties: { Name: "35, CHURCH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35498677937292, 53.31078835421678]
          }
        },
        {
          type: "Feature",
          properties: { Name: "PARK HILL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60616118365853, 52.86121220917128]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "MALTHOUSE FARMHOUSE AND BOUNDARY WALL TO EAST",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.43975900511445, 53.09605317183686]
          }
        },
        {
          type: "Feature",
          properties: { Name: "22-26, HIGH STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47529405505946, 53.30228035584827]
          }
        },
        {
          type: "Feature",
          properties: { Name: "SWISS COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.59183521198647, 53.22731015804756]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE WILLOW TREE FOUNTAIN", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.60859058987843, 53.22616931066489]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "SHED TO NORTH OF ENGINE HOUSE AND SAW MILL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.30977179367933, 53.16563957666609]
          }
        },
        {
          type: "Feature",
          properties: { Name: "THE HUNTING TOWER", Grade: "II*" },
          geometry: {
            type: "Point",
            coordinates: [-1.60446406788602, 53.23205088796808]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "RETAINING WALLS AND STEPS SURROUNDING THE SITE OF THE GREAT CONSERVATORY",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.60877169995936, 53.22467012553654]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CHATSWORTH HOUSE", Grade: "I" },
          geometry: {
            type: "Point",
            coordinates: [-1.61166054394508, 53.22736984295627]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STENSON LOCK COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.5174023111252, 52.8658943893078]
          }
        },
        {
          type: "Feature",
          properties: { Name: "STENSON HOUSE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.51710658254437, 52.86711297986002]
          }
        },
        {
          type: "Feature",
          properties: { Name: "7, ST JOHNS STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57323003348036, 53.08188832694407]
          }
        },
        {
          type: "Feature",
          properties: { Name: "MASONS YARD AND OFFICE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45653913967312, 52.80049598475192]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "OUTER STABLE BLOCK, BARN AND ATTACHED BUILDINGS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.457355893477, 52.80089001418514]
          }
        },
        {
          type: "Feature",
          properties: { Name: "POLYGONAL ANIMAL SHELTER", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.45737753160464, 52.80153735809883]
          }
        },
        {
          type: "Feature",
          properties: { Name: "ROSE COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.31734378384365, 52.89781513452079]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "FORMER WELL HOUSE TO NORTH OF NO 14",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.48093212977131, 53.00313108759069]
          }
        },
        {
          type: "Feature",
          properties: { Name: "24, UNION STREET", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73459315998131, 53.01770444886451]
          }
        },
        {
          type: "Feature",
          properties: { Name: "7, 9, 11 and 15, Sturston Road", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.73021680797287, 53.01414039116584]
          }
        },
        {
          type: "Feature",
          properties: { Name: "BROOK COTTAGE", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48346381354445, 53.02056829399162]
          }
        },
        {
          type: "Feature",
          properties: { Name: "20, 22 & 24, DERBY ROAD", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48218404466407, 53.01342683290137]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "WIRKSWORTH COUNTY INFANTS SCHOOL AND ATTACHED RAILINGS AND WALLS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.57186507864572, 53.0852800447179]
          }
        },
        {
          type: "Feature",
          properties: { Name: "K6 TELEPHONE KIOSK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.52549677182422, 52.83481778205299]
          }
        },
        {
          type: "Feature",
          properties: { Name: "K6 TELEPHONE KIOSK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.57850913226865, 52.98302021180928]
          }
        },
        {
          type: "Feature",
          properties: { Name: "K6 TELEPHONE KIOSK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48583665722272, 53.02773265197251]
          }
        },
        {
          type: "Feature",
          properties: { Name: "K6 TELEPHONE KIOSK", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48000311611277, 53.03855671487455]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "BOLEHILL AND STEEPLE GRANGE WAR MEMORIAL",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.56936717439827, 53.09226490481498]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HARDHURST FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55783352793725, 53.07291310173601]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WAR MEMORIAL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.77580726641739, 53.3419129387079]
          }
        },
        {
          type: "Feature",
          properties: { Name: "FORMER MINERS STANDARD PUB", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56465888350123, 53.09222358451682]
          }
        },
        {
          type: "Feature",
          properties: { Name: "DOVECOTE AT RIDGEWAY FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.53692598464478, 52.83113682042688]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WIRKSWORTH JUNIOR SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56767431387354, 53.082672010384]
          }
        },
        {
          type: "Feature",
          properties: { Name: "HOPE PRIMARY SCHOOL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.74357170173774, 53.35015408749038]
          }
        },
        {
          type: "Feature",
          properties: { Name: "VILLAGE PUMP", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.75507191005593, 52.94041405771656]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Torr Farm", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.65774395022704, 53.31593289695813]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "GABLES AND ASSOCIATED TERRACES, WALLS AND STEPS\r\nTHE GABLES AND ASSOCIATED TERRACES, WALLS AND STEPS",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.62340208713385, 53.30076816258388]
          }
        },
        {
          type: "Feature",
          properties: { Name: "WAR MEMORIAL", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.20679601506689, 53.28454593974129]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Portal to Stephenson's Tunnel, Crich",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47959855770067, 53.08218692429534]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Weir and Associated Water Management System",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.53721065839096, 52.82291445334752]
          }
        },
        {
          type: "Feature",
          properties: { Name: "CRUCK BARN AT WOODSEATS FARM", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.54351924847132, 53.11580313736821]
          }
        },
        {
          type: "Feature",
          properties: { Name: "New Road Bridge (SPC8 27)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48247717719483, 53.02172125787013]
          }
        },
        {
          type: "Feature",
          properties: { Name: "King Street Bridge (SPC8 28)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48247830173045, 53.02343441164382]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Nooning Lane Bridge (SPC6 12)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.35939242324684, 52.899025127562]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Matlock Road Bridge (SPC8 35)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48311052408525, 53.03085334356936]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Beatties Bridge (SPC8 55)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.43052538873382, 53.08594365109616]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Amber River Bridge (SPC8 54)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4349916271218, 53.07985845339085]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Chevin Road Bridge (SPC8 22)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48556158035218, 53.00598167988769]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Strutts Bridge (SPC8 23)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48474245760561, 53.00896444530972]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Potters Bridge (SPC8 52)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.44107351306086, 53.07561603699397]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "South Wingfield Footpath Bridge (SPC8 56)",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42786811215295, 53.09498535553943]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Derby Road Bridge (SPC8 25)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48333371428267, 53.01655734456331]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Lea Road Bridge (TJC1 26)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.47064189130309, 53.30205643656834]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Arched Stone Structures and Ice House to the rear of No 34A Lodge Drive",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.49036336137499, 53.03104174110983]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Ault Hucknall War Memorial", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.32025433182956, 53.183343544926]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Curved Reclining Form (Rosewall)", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.4330102986845, 53.23470638132814]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Cromford War Memorial", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.55918126857116, 53.10887057347367]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Scarthin War Memorial", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.56148160186528, 53.10909091294265]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "War Memorial at Twyford Road, Barrow-upon-Trent",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.47833493914318, 52.85319707637191]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Duffield War Memorial", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48169367232665, 52.98140433814107]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Mount St Mary's College Memorial Chapel",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.31777073242136, 53.30427234398488]
          }
        },
        {
          type: "Feature",
          properties: { Name: "Smisby War Memorial", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48504259529924, 52.76850350268835]
          }
        },
        {
          type: "Feature",
          properties: { Name: "St Elizabeth House", Grade: "II" },
          geometry: {
            type: "Point",
            coordinates: [-1.48189302004243, 53.03118914772318]
          }
        },
        {
          type: "Feature",
          properties: {
            Name:
              "Milestone approximately 25m south of the Rod Moor Road and Barnes Lane junction, Dronfield",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.50781691828951, 53.31239197102332]
          }
        },
        {
          type: "Feature",
          properties: {
            Name: "Lamp post outside 35 Low Pavement",
            Grade: "II"
          },
          geometry: {
            type: "Point",
            coordinates: [-1.42835201614728, 53.2351038393082]
          }
        }
      ]
    }
  });

  map.addLayer({
    id: "listedbuildings",
    type: "circle",
    source: "listedbuildings",
    paint: {
      "circle-radius": {
        base: 1.75,
        stops: [
          [12, 2],
          [22, 180]
        ]
      },
      // Color circles by ethnicity, using a `match` expression.
      "circle-color": [
        "match",
        ["get", "Grade"],
        "I",
        "#fbb03b",
        "II",
        "#e55e5e",
        "II*",
        "#3bb2d0",
        /* other */ "#ccc"
      ]
    }
  });

  const menu = document.getElementById("menu");
  const inputs = menu.getElementsByTagName("input");
  var grades = ["I", "II", "II*"];

  function switchRenderOption(option) {
    switch (option.target.id) {
      case "c1":
        if (option.target.checked) {
          grades.push("I");
        } else {
          let idx = grades.indexOf("I");
          if (idx > -1) {
            grades.splice(idx, 1);
          }
        }
        map.setFilter("listedbuildings", [
          "in",
          ["get", "Grade"],
          ["literal", grades]
        ]);
        break;
      case "c2":
        if (option.target.checked) {
          grades.push("II");
        } else {
          let idx = grades.indexOf("II");
          if (idx > -1) {
            grades.splice(idx, 1);
          }
        }
        map.setFilter("listedbuildings", [
          "in",
          ["get", "Grade"],
          ["literal", grades]
        ]);
        break;
      case "c3":
        if (option.target.checked) {
          grades.push("II*");
        } else {
          let idx = grades.indexOf("II*");
          if (idx > -1) {
            grades.splice(idx, 1);
          }
        }
        map.setFilter("listedbuildings", [
          "in",
          ["get", "Grade"],
          ["literal", grades]
        ]);
        break;
    }
  }

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchRenderOption;
  }
});

map.addControl(new mapboxgl.GeolocateControl());
 map.addControl(new mapboxgl.NavigationControl());
map.on("click", (event) => {
  const features = map.queryRenderedFeatures(event.point, {
    layers: ["listedbuildings"] 
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];
  
  const popup = new mapboxgl.Popup({ offset: [0, -15], className: "my-popup" })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      `<h3>Name: ${feature.properties.Name}</h3>
    <p>Grade: ${feature.properties.Grade}</p>
    <p>Location: ${feature.properties.Location}</p>`
    )
    .addTo(map);
});