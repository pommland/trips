import React ,{useState , Component  }from 'react'
import $ from "jquery";


function MyTripS() {
   
    
    var province_th = [
        'กรุงเทพฯ',
        'กระบี่',
        'กาญจนบุรี',
        'กาฬสินธุ์',
        'กำแพงเพชร',
        'ขอนแก่น',
        'จันทบุรี',
        'ฉะเชิงเทรา',
        'ชลบุรี',
        'ชัยนาท',
        'ชัยภูมิ',
        'ชุมพร',
        'เชียงใหม่',
        'เชียงราย',
        'ตรัง',
        'ตราด',
        'ตาก',
        'นครนายก',
        'นครปฐม',
        'นครพนม',
        'นครราชสีมา',
        'นครศรีธรรมราช',
        'นครสวรรค์',
        'นนทบุรี',
        'นราธิวาส',
        'น่าน',
        'บึงกาฬ',
        'บุรีรัมย์',
        'ปทุมธานี',
        'ประจวบคีรีขันธ์',
        'ปราจีนบุรี',
        'ปัตตานี',
        'พระนครศรีอยุธยา',
        'พะเยา',
        'พังงา',
        'พัทลุง',
        'พิจิตร',
        'พิษณุโลก',
        'เพชรบุรี',
        'เพชรบูรณ์',
        'แพร่',
        'ภูเก็ต',
        'มหาสารคาม',
        'มุกดาหาร',
        'แม่ฮ่องสอน',
        'ยโสธร',
        'ยะลา',
        'ร้อยเอ็ด',
        'ระนอง',
        'ระยอง',
        'ราชบุรี',
        'ลพบุรี',
        'ลำปาง',
        'ลำพูน',
        'เลย',
        'ศรีสะเกษ',
        'สกลนคร',
        'สงขลา',
        'สตูล',
        'สมุทรปราการ',
        'สมุทรสงคราม',
        'สมุทรสาคร',
        'สระแก้ว',
        'สระบุรี',
        'สิงห์บุรี',
        'สุโขทัย',
        'สุพรรณบุรี',
        'สุราษฎร์ธานี',
        'สุรินทร์',
        'หนองคาย',
        'หนองบัวลำภู',
        'อ่างทอง',
        'อำนาจเจริญ',
        'อุดรธานี',
        'อุตรดิตถ์',
        'อุทัยธานี',
        'อุบลราชธานี',
      ];
      
      var province_th_map = {
        'krabi': 'กระบี่',
        'bangkok': 'กรุงเทพมหานคร',
        'kanchanaburi': 'กาญจนบุรี',
        'kalasin': 'กาฬสินธุ์',
        'kamphaengphet': 'กำแพงเพชร',
        'khonkaen': 'ขอนแก่น',
        'chanthaburi': 'จันทบุรี',
        'chachoengsao': 'ฉะเชิงเทรา',
        'chonburi': 'ชลบุรี',
        'chainat': 'ชัยนาท',
        'chaiyaphum': 'ชัยภูมิ',
        'chumphon': 'ชุมพร',
        'chiangrai': 'เชียงราย',
        'chiangmai': 'เชียงใหม่',
        'trang': 'ตรัง',
        'trat': 'ตราด',
        'tak': 'ตาก',
        'nakhonnayok': 'นครนายก',
        'nakhonpathom': 'นครปฐม',
        'nakhonphanom': 'นครพนม',
        'nakhonratchasima': 'นครราชสีมา',
        'nakhonsithammarat': 'นครศรีธรรมราช',
        'nakhonsawan': 'นครสวรรค์',
        'nonthaburi': 'นนทบุรี',
        'narathiwat': 'นราธิวาส',
        'nan': 'น่าน',
        'buriram': 'บุรีรัมย์',
        'pathumthani': 'ปทุมธานี',
        'prachuapkhirikhan': 'ประจวบคีรีขันธ์',
        'prachinburi': 'ปราจีนบุรี',
        'pattani': 'ปัตตานี',
        'ayutthaya': 'พระนครศรีอยุธยา',
        'phayao': 'พะเยา',
        'phangnga': 'พังงา',
        'phatthalung': 'พัทลุง',
        'phichit': 'พิจิตร',
        'phitsanulok': 'พิษณุโลก',
        'phetchaburi': 'เพชรบุรี',
        'phetchabun': 'เพชรบูรณ์',
        'phrae': 'แพร่',
        'phuket': 'ภูเก็ต',
        'mahasarakham': 'มหาสารคาม',
        'mukdahan': 'มุกดาหาร',
        'maehongson': 'แม่ฮ่องสอน',
        'yasothon': 'ยโสธร',
        'yala': 'ยะลา',
        'roiet': 'ร้อยเอ็ด',
        'ranong': 'ระนอง',
        'rayong': 'ระยอง',
        'ratchaburi': 'ราชบุรี',
        'lopburi': 'ลพบุรี',
        'loei': 'เลย',
        'lampang': 'ลำปาง',
        'lamphun': 'ลำพูน',
        'sisaket': 'ศรีสะเกษ',
        'sakonnakhon': 'สกลนคร',
        'songkhla': 'สงขลา',
        'satun': 'สตูล',
        'samutprakan': 'สมุทรปราการ',
        'samutsongkhram': 'สมุทรสงคราม',
        'samutsakhon': 'สมุทรสาคร',
        'sakaeo': 'สระแก้ว',
        'saraburi': 'สระบุรี',
        'singburi': 'สิงห์บุรี',
        'sukhothai': 'สุโขทัย',
        'suphanburi': 'สุพรรณบุรี',
        'suratthani': 'สุราษฎร์ธานี',
        'surin': 'สุรินทร์',
        'nongkhai': 'หนองคาย',
        'nongbualamphu': 'หนองบัวลำภู',
        'angthong': 'อ่างทอง',
        'amnatcharoen': 'อำนาจเจริญ',
        'udonthani': 'อุดรธานี',
        'uttaradit': 'อุตรดิตถ์',
        'uthaithani': 'อุทัยธานี',
        'ubonratchathani': 'อุบลราชธานี',
        'betong': 'เบตง'
      }

      const [createYourTrip,setCreateYourTrip] = useState([{ 

        from : '',
        to : '',
        adult : 0,
        child : 0,
        checkinDate : '',
        checkoutDate:'',
      
  
    }]
    );
    
   const [travel,setTravel] = useState([{ 

      vehicle : 0,
      company : 0,
      timeToArrive : 0,
  

  }]);
  const [chooseHotel,setChooseHotel] = useState([{
      where :'',
      rooms : 0

  }]);
   
  const checkAvailable1 =() =>{
      
       }
       

    
       const checkAvailable2= ()=>{
   
       }

    const confirmHotel=()=>{
    

} 
    
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    var maxDate = year + '-' + month + '-' + day;
    $('#txtDate').attr('min', maxDate);
 
    return (
        <>
            <div id="MyTripTop" class="tm-page-wrap mx-auto">
                <section class="tm-banner">
                <div class="tm-container-outer tm-banner-bg">
                    <div class="container">
                        <div class="row tm-banner-row tm-banner-row-header">
                            <div class="col-xs-12">
                                <div class="tm-banner-header">
                                    <h1 class="text-uppercase tm-banner-title">Let's begin</h1>
                                    <p class="tm-banner-subtitle">Create Yout Trip.</p>
                                </div>    
                                
                            </div>                 
                        </div> 
                        <div class="row tm-banner-row" id="tm-section-search">

                            <form action="index.html" method="get" class="tm-search-form tm-section-pad-2" autocomplete="off">
                                <div class="form-row tm-search-form-row">                                
                                    <div class="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                                        <label for="inputCity">From</label>
                                        <input name="destination" type="text" class="form-control" id="inputCity" placeholder="Type your destination..." onChange = {(ev) => setCreateYourTrip({...createYourTrip, from: ev.target.value})} value ={createYourTrip.from} />
                                    </div>
                                    <div class="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                                        <label for="inputCity">To</label>
                                        <input name="destination" type="text" class="form-control" id="inputCity" placeholder="Type your destination..."  onChange = {(ev) => setCreateYourTrip({...createYourTrip, to: ev.target.value})} value ={createYourTrip.to} />
                                    </div>
                
                                    <div class="form-group tm-form-group tm-form-group-1">                                    
                                        <div class="form-group tm-form-group tm-form-group-pad tm-form-group-3">                                       
                                            <label for="inputAdult">Adult</label>     
                                            <select name="adult" class="form-control tm-select" id="inputAdult" onChange = {(ev) => setCreateYourTrip({...createYourTrip, adult: ev.target.value})} value ={createYourTrip.adult} >
                                                <option value="1" selected>1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>                                        
                                        </div>
                                        <div class="form-group tm-form-group tm-form-group-pad tm-form-group-3">

                                            <label for="inputChildren">Children</label>                                            
                                            <select name="children" class="form-control tm-select" id="inputChildren" onChange = {(ev) => setCreateYourTrip({...createYourTrip, child: ev.target.value})} value ={createYourTrip.child}>
                                            	<option value="0" selected>0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>                                        
                                        </div>
                                    </div>
                                </div> 
                                
                                <div class="form-row tm-search-form-row">

                                    <div class="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                                        <label for="inputCheckIn">Check In Date</label>
                                        <input name="check-in" type="date" class="form-control" id="form-control" placeholder="Check In" value ={createYourTrip.checkinDate}
                                            min={new Date().toISOString().split('T')[0]} onChange = {(ev) => setCreateYourTrip({...createYourTrip, checkinDate: ev.target.value})}/>
                                            
                                    </div>
                                    
                                    <div class="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                                        <label for="inputCheckOut">Check Out Date</label>
                                        <input name="check-out" type="date" class="form-control" id="form-control" placeholder="Check Out" value ={createYourTrip.checkoutDate}
                                            min={new Date().toISOString().split('T')[0]} onChange = {(ev) => setCreateYourTrip({...createYourTrip, checkoutDate: ev.target.value})}/>
                                    </div>

                                    <div class="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                                        <label for="btnSubmit">&nbsp;</label>
                                        <button type="submit" class="btn btn-primary tm-btn tm-btn-search text-uppercase" id="btnSubmit" onClick = {checkAvailable1}>Check Availability</button>
                                        
                                    </div>
                                    <h2>{createYourTrip.from}</h2>
                                    <h2>{createYourTrip.to}</h2>
                                    <h2>{createYourTrip.checkoutDate}</h2>
                                </div>                          
                            </form>
                         </div> 
                    </div> 

                    {/* <!--------------- Part2 ---------------> */}


                
                    <div class="container">
                        <div class="tm-container-outer tm-banner-bg2">
                        <div class="row tm-banner-row tm-banner-row-header">
                            <div class="col-xs-12">
                                <div class="tm-banner-header">
                                    <p class="tm-banner-subtitle">Travel By</p>
                                </div>    
                                
                            </div>                 
                        </div> 
                        <div class="row tm-banner-row" id="tm-section-search">

                            <form action="index.html" method="get" class="tm-search-form tm-section-pad-2" autocomplete="off">
                                
                                <div class="form-row tm-search-form-row">
                                <div class="form-group tm-group-group tm-form-group-pad tm-form-group-3">
                                            <label for="inputChildren">Vehicle</label>                                            
                                            <select name="vehicle" class="form-control tm-select" id="inputChildren" onChange = {(ev) => setTravel({...travel, vehicle: ev.target.value})} value ={travel.vehicle}>
                                            	<option value="0" >0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>                                        
                                        </div>
                                <div class="form-group tm-group-group tm-form-group-pad tm-form-group-3">
                                            <label for="inputChildren">Company</label>                                            
                                            <select name="company" class="form-control tm-select" id="inputChildren" onChange = {(ev) => setTravel({...travel, company: ev.target.value})} value ={travel.company}>
                                            	<option value="0" >0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>                                        
                                        </div>

                                        <div class="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                                            <label for="inputChildren">Time to Arrive</label>                                            
                                            <select name="timeToArrive" class="form-control tm-select" id="inputChildren" onChange = {(ev) => setTravel({...travel, timeToArrive: ev.target.value})} value ={travel.timeToArrive}>
                                            	<option value="0" selected>0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>                                        
                                        </div>
                                        <div class="tm-banner-header">
                                        <label for="btnSubmit">&nbsp;</label>
                                        <button type="submit" class="btn btn-primary tm-btn tm-btn-search text-uppercase" id="btnSubmit" onClick = {checkAvailable2}>Check Availability</button>
                                    </div>
                                </div>                          
                            </form>
                           
                         </div>
                         </div> 
                    </div> 

                    {/* <!--------------- Part3Hotel ---------------> */}


                                    
                    <div class="container">
                        <div class="tm-container-outer tm-banner-bg3">
                        <div class="row tm-banner-row tm-banner-row-header">
                            <div class="col-xs-12">
                                <div class="tm-banner-header">
                                    <p class="tm-banner-subtitle">Choose Hotel</p>
                                </div>    
                                
                            </div>                 
                        </div> 
                        <div class="row tm-banner-row" id="tm-section-search">

                            <form action="index.html" method="get" class="tm-search-form tm-section-pad-2" autocomplete="off">
                                
                                <div class="form-row tm-search-form-row"> 
                                <div class="form-group tm-group-group tm-form-group-pad tm-form-group-3">
                                            <label for="inputChildren">Where?</label>                                            
                                            <select name="children" class="form-control tm-select" id="inputChildren"  onChange = {(ev) => setChooseHotel({...chooseHotel, where: ev.target.value})} value ={chooseHotel.where} >
                                            	<option value="0" >0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>                                        
                                        </div>
                                <div class="form-group tm-group-group tm-form-group-pad tm-form-group-3">
                                            <label for="inputChildren">How many rooms?</label>                                            
                                            <select name="children" class="form-control tm-select" id="inputChildren" onChange = {(ev) => setChooseHotel({...chooseHotel, rooms: ev.target.value})} value ={chooseHotel.rooms}>
                                            	<option value="0" >0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5" >5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>                                        
                                        </div>
                        
                                    <div class="tm-banner-header">
                                        <label for="btnSubmit">&nbsp;</label>
                                        <button type="submit" class="btn btn-primary tm-btn tm-btn-search text-uppercase" id="btnSubmit" 
                                        // onClick = {confirm}
                                        >Confirm Your Hotel</button>
                                    </div>
                                </div>                          
                            </form>
                         </div>
                         </div> 
                    </div> 




                </div>
                </section>
            </div>
        </>                        
    )
}

export default MyTripS;
