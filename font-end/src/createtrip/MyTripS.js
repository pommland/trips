import React, { useState, Component } from 'react'
import $ from "jquery";
import Header from '../Component/Header';
import Select from 'react-select';
import TimePicker from 'react-time-picker';


const vehicleChoice = [
    { value: 'train', label: 'Train' },
    { value: 'car', label: 'Car' },
    { value: 'airplane', label: 'Airplane' },
];

const companyChoice = [
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' },
    { value: 'c', label: 'C' },
];

const hotelChoice = [
    { value: 'ahotel', label: 'A Hotel' },
    { value: 'bhotel', label: 'B Hotel' },
    { value: 'chotel', label: 'C Hotel' },
    { value: 'dhotel', label: 'D Hotel' },
    { value: 'ehotel', label: 'E Hotel' },
    { value: 'fhotel', label: 'F Hotel' },
];

const province_th_map = {
    'Krabi': 'กระบี่',
    'Bangkok': 'กรุงเทพมหานคร',
    'Kanchanaburi': 'กาญจนบุรี',
    'Kalasin': 'กาฬสินธุ์',
    'Kamphaengphet': 'กำแพงเพชร',
    'Khonkaen': 'ขอนแก่น',
    'Chanthaburi': 'จันทบุรี',
    'Chachoengsao': 'ฉะเชิงเทรา',
    'Chonburi': 'ชลบุรี',
    'Chainat': 'ชัยนาท',
    'Chaiyaphum': 'ชัยภูมิ',
    'Chumphon': 'ชุมพร',
    'chiangrai': 'เชียงราย',
    'chiangmai': 'เชียงใหม่',
    'Trang': 'ตรัง',
    'Trat': 'ตราด',
    'Tak': 'ตาก',
    'Nakhonnayok': 'นครนายก',
    'Nakhonpathom': 'นครปฐม',
    'Nakhonphanom': 'นครพนม',
    'Nakhonratchasima': 'นครราชสีมา',
    'Nakhonsithammarat': 'นครศรีธรรมราช',
    'Nakhonsawan': 'นครสวรรค์',
    'Nonthaburi': 'นนทบุรี',
    'Narathiwat': 'นราธิวาส',
    'Nan': 'น่าน',
    'Buriram': 'บุรีรัมย์',
    'Pathumthani': 'ปทุมธานี',
    'Prachuapkhirikhan': 'ประจวบคีรีขันธ์',
    'Prachinburi': 'ปราจีนบุรี',
    'Pattani': 'ปัตตานี',
    'Ayutthaya': 'พระนครศรีอยุธยา',
    'Phayao': 'พะเยา',
    'Phangnga': 'พังงา',
    'Phatthalung': 'พัทลุง',
    'Phichit': 'พิจิตร',
    'Phitsanulok': 'พิษณุโลก',
    'Phetchaburi': 'เพชรบุรี',
    'Phetchabun': 'เพชรบูรณ์',
    'Phrae': 'แพร่',
    'Phuket': 'ภูเก็ต',
    'Mahasarakham': 'มหาสารคาม',
    'Mukdahan': 'มุกดาหาร',
    'Maehongson': 'แม่ฮ่องสอน',
    'Yasothon': 'ยโสธร',
    'Yala': 'ยะลา',
    'Roiet': 'ร้อยเอ็ด',
    'Ranong': 'ระนอง',
    'Rayong': 'ระยอง',
    'Ratchaburi': 'ราชบุรี',
    'Lopburi': 'ลพบุรี',
    'Loei': 'เลย',
    'Lampang': 'ลำปาง',
    'Lamphun': 'ลำพูน',
    'Sisaket': 'ศรีสะเกษ',
    'Sakonnakhon': 'สกลนคร',
    'Songkhla': 'สงขลา',
    'Satun': 'สตูล',
    'Samutprakan': 'สมุทรปราการ',
    'Samutsongkhram': 'สมุทรสงคราม',
    'Samutsakhon': 'สมุทรสาคร',
    'Sakaeo': 'สระแก้ว',
    'Saraburi': 'สระบุรี',
    'Singburi': 'สิงห์บุรี',
    'Sukhothai': 'สุโขทัย',
    'Suphanburi': 'สุพรรณบุรี',
    'Suratthani': 'สุราษฎร์ธานี',
    'Surin': 'สุรินทร์',
    'Nongkhai': 'หนองคาย',
    'Nongbualamphu': 'หนองบัวลำภู',
    'Angthong': 'อ่างทอง',
    'Amnatcharoen': 'อำนาจเจริญ',
    'Udonthani': 'อุดรธานี',
    'Uttaradit': 'อุตรดิตถ์',
    'Uthaithani': 'อุทัยธานี',
    'Ubonratchathani': 'อุบลราชธานี',
    'Betong': 'เบตง'
  }

const province_th = [
    { value: 'กรุงเทพฯ', label: 'กรุงเทพฯ' },
    { value: 'กระบี่', label: 'กระบี่' },
    { value: 'กาญจนบุรี', label: 'กาญจนบุรี' },
    { value: 'กาฬสินธุ์', label: 'กาฬสินธุ์' },
    { value: 'กำแพงเพชร', label: 'กำแพงเพชร' },
    { value: 'ขอนแก่น', label: 'ขอนแก่น' },
    { value: 'จันทบุรี', label: 'จันทบุรี' },
    { value: 'ฉะเชิงเทรา', label: 'ฉะเชิงเทรา' },
    { value: 'ชลบุรี', label: 'ชลบุรี' },
    { value: 'ชัยนาท', label: 'ชัยนาท' },
    { value: 'ชัยภูมิ', label: 'ชัยภูมิ' },
    { value: 'ชุมพร', label: 'ชุมพร' },
    { value: 'เชียงใหม่', label: 'เชียงใหม่' },
    { value: 'เชียงราย', label: 'เชียงราย' },
    { value: 'ตรัง', label: 'ตรัง' },
    { value: 'ตราด', label: 'ตราด' },
    { value: 'ตาก', label: 'ตาก' },
    { value: 'นครนายก', label: 'นครนายก' },
    { value: 'นครปฐม', label: 'นครปฐม' },
    { value: 'นครพนม', label: 'นครพนม' },
    { value: 'นครราชสีมา', label: 'นครราชสีมา' },
    { value: 'นครศรีธรรมราช', label: 'นครศรีธรรมราช' },
    { value: 'นครสวรรค์', label: 'นครสวรรค์' },
    { value: 'นนทบุรี', label: 'นนทบุรี' },
    { value: 'นราธิวาส', label: 'นราธิวาส' },
    { value: 'น่าน', label: 'น่าน' },
    { value: 'บึงกาฬ', label: 'บึงกาฬ' },
    { value: 'บุรีรัมย์', label: 'บุรีรัมย์' },
    { value: 'ปทุมธานี', label: 'ปทุมธานี' },
    { value: 'ประจวบคีรีขันธ์', label: 'ประจวบคีรีขันธ์' },
    { value: 'ปราจีนบุรี', label: 'ปราจีนบุรี' },
    { value: 'ปัตตานี', label: 'ปัตตานี' },
    { value: 'พระนครศรีอยุธยา', label: 'พระนครศรีอยุธยา' },
    { value: 'พะเยา', label: 'พะเยา' },
    { value: 'พังงา', label: 'พังงา' },
    { value: 'พัทลุง', label: 'พัทลุง' },
    { value: 'พิจิตร', label: 'พิจิตร' },
    { value: 'พิษณุโลก', label: 'พิษณุโลก' },
    { value: 'เพชรบุรี', label: 'เพชรบุรี' },
    { value: 'เพชรบูรณ์', label: 'เพชรบูรณ์' },
    { value: 'แพร่', label: 'แพร่' },
    { value: 'ภูเก็ต', label: 'ภูเก็ต' },
    { value: 'มหาสารคาม', label: 'มหาสารคาม' },
    { value: 'มุกดาหาร', label: 'มุกดาหาร' },
    { value: 'แม่ฮ่องสอน', label: 'แม่ฮ่องสอน' },
    { value: 'ยโสธร', label: 'ยโสธร' },
    { value: 'ยะลา', label: 'ยะลา' },
    { value: 'ร้อยเอ็ด', label: 'ร้อยเอ็ด' },
    { value: 'ระนอง', label: 'ระนอง' },
    { value: 'ระยอง', label: 'ระยอง' },
    { value: 'ราชบุรี', label: 'ราชบุรี' },
    { value: 'ลพบุรี', label: 'ลพบุรี' },
    { value: 'ลำปาง', label: 'ลำปาง' },
    { value: 'ลำพูน', label: 'ลำพูน' },
    { value: 'เลย', label: 'เลย' },
    { value: 'ศรีสะเกษ', label: 'ศรีสะเกษ' },
    { value: 'สกลนคร', label: 'สกลนคร' },
    { value: 'สงขลา', label: 'สงขลา' },
    { value: 'สตูล', label: 'สตูล' },
    { value: 'สมุทรปราการ', label: 'สมุทรปราการ' },
    { value: 'สมุทรสงคราม', label: 'สมุทรสงคราม' },
    { value: 'สมุทรสาคร', label: 'สมุทรสาคร' },
    { value: 'สระแก้ว', label: 'สระแก้ว' },
    { value: 'สระบุรี', label: 'สระบุรี' },
    { value: 'สิงห์บุรี', label: 'สิงห์บุรี' },
    { value: 'สุโขทัย', label: 'สุโขทัย' },
    { value: 'สุพรรณบุรี', label: 'สุพรรณบุรี' },
    { value: 'สุราษฎร์ธานี', label: 'สุราษฎร์ธานี' },
    { value: 'สุรินทร์', label: 'สุรินทร์' },
    { value: 'หนองคาย', label: 'หนองคาย' },
    { value: 'หนองบัวลำภู', label: 'หนองบัวลำภู' },
    { value: 'อ่างทอง', label: 'อ่างทอง' },
    { value: 'อำนาจเจริญ', label: 'อำนาจเจริญ', },
    { value: 'อุดรธานี', label: 'อุดรธานี' },
    { value: 'อุตรดิตถ์', label: 'อุตรดิตถ์' },
    { value: 'อุทัยธานี', label: 'อุทัยธานี' },
    { value: 'อุบลราชธานี', label: 'อุบลราชธานี' },
];

function MyTripS() {

    const [createYourTrip, setCreateYourTrip] = useState([{
        from: '',
        to: '',
        adult: 0,
        child: 0,
        checkinDate: '',
        checkoutDate: '',
    }]
    );

    const [travel, setTravel] = useState([{
        vehicle: '',
        company: '',
        timeToArrive: '',
    }]);

    const [chooseHotel, setChooseHotel] = useState([{
        where: '',
        rooms: 0
    }]);
    const checkAvailable1 = () => {

    }



    const checkAvailable2 = () => {

    }

    const confirmHotel = () => {


    }

    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();
    var maxDate = year + '-' + month + '-' + day;
    $('#txtDate').attr('min', maxDate);
    const handleChange = selectedOption => e => {
        setCreateYourTrip({ ...createYourTrip, [selectedOption]: e });
    };
    const { from, to, adult, child, checkinDate, checkoutDate } = createYourTrip;
    const { vehicle, company, timeToArrive } = travel;
    const { hotel, rooms } = chooseHotel;

    return (
        <>
            <Header />
            <div id="MyTripTop" class="tm-page-wrap mx-auto">
                <section class="tm-banner">
                    <div class="tm-container-outer tm-banner-bg">
                        <div class="container">
                            <div class="row tm-banner-row tm-banner-row-header">
                                <div class="col-xs-12">
                                    <div  class="tm-banner-header">
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

                                            <Select
                                                value={from}
                                                onChange={handleChange('from')}
                                                options={province_th}
                                            />

                                        </div>
                                        <div class="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                                            <label for="inputCity">To</label>
                                            
                                            <Select
                                                value={to}
                                                onChange={handleChange('to')}
                                                options={province_th}
                                            />

                                        </div>

                                        <div class="form-group tm-form-group tm-form-group-1">
                                        
                                            <div class="form-group tm-form-group tm-form-group-pad tm-form-group-2">
                                           
                                                <label for="inputAdult">Adult</label>
                                                <input name="adult" type="number" min="1" class="form-control" id="inputCity" placeholder="Type your destination..." 
                                                        onChange={(ev) => setCreateYourTrip({ ...createYourTrip, adult: ev.target.value })} value={createYourTrip.adult} />
                                           
                                            </div>

                                            <div class="form-group tm-form-group tm-form-group-pad tm-form-group-2">
                                            
                                                <label for="inputChildren">Children</label>
                                                <input name="child" type="number" min="0" class="form-control" id="inputCity" placeholder="Type your destination..." 
                                                        onChange={(ev) => setCreateYourTrip({ ...createYourTrip, child: ev.target.value })} value={createYourTrip.child} />
                                           
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row tm-search-form-row">
                                        <div class="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                                            <label for="inputCheckIn">Check In Date</label>
                                            <input name="check-in" type="date" class="form-control" id="form-control" placeholder="Check In" value={createYourTrip.checkinDate}
                                                min={new Date().toISOString().split('T')[0]} onChange={(ev) => setCreateYourTrip({ ...createYourTrip, checkinDate: ev.target.value })} />

                                        </div>

                                        <div class="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                                            <label for="inputCheckOut">Check Out Date</label>
                                            <input name="check-out" type="date" class="form-control" id="form-control" placeholder="Check Out" value={createYourTrip.checkoutDate}
                                                min={new Date().toISOString().split('T')[0]} onChange={(ev) => setCreateYourTrip({ ...createYourTrip, checkoutDate: ev.target.value })} />
                                        </div>

                                        {/* <div class="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                                            <label for="btnSubmit">&nbsp;</label>
                                            <button type="submit" class="btn btn-primary tm-btn tm-btn-search text-uppercase" id="btnSubmit" onClick={checkAvailable1}>Check Weather</button>
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* <!--------------- Part2 ---------------> */}
                        <div class="container">
                            <div class="tm-container-outer tm-banner-bg2">
                                <div class="row tm-banner-row tm-banner-row-header">
                                        <div class="tm-banner-header">
                                            <p class="tm-banner-subtitle">Travel By</p>
                                        </div>

                                   
                                </div>
                                <div class="row tm-banner-row" id="tm-section-search">

                                    <form action="index.html" method="get" class="tm-search-form tm-section-pad-3" autocomplete="off">

                                        <div class="form-row tm-search-form-row">
                                            <div class="form-group tm-group-group tm-form-group-pad tm-form-group-2">
                                                <label for="inputChildren">Vehicle</label>
                                                <Select
                                                    value={vehicle}
                                                    onChange={handleChange('vehicle')}
                                                    options={vehicleChoice}
                                                />
                                            </div>

                                            <div class="form-group tm-group-group tm-form-group-pad tm-form-group-2">
                                                <label for="inputChildren">Company</label>
                                                <Select
                                                    value={company}
                                                    onChange={handleChange('company')}
                                                    options={companyChoice}
                                                />
                                            </div>

                                            <div class="form-group tm-form-group tm-form-group-pad tm-form-group-2">
                                                <label for="inputChildren">Time to Arrive</label>
                                                <div>
                                                <input name="time" type="time"  class="form-control" id="inputCity" placeholder="Type your destination..." onChange={(ev) => setTravel({ ...travel, child: ev.target.value })} value={travel.timeToArrive} />
                                                </div>
                                            </div><br/>
                                            <label></label>

                                    
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

                                    <form action="index.html" method="get" class="tm-search-form tm-section-pad-3" autocomplete="off">
                                        <div class="form-row tm-search-form-row">
                                            <div class="form-group tm-group-group tm-form-group-pad tm-form-group-2">
                                                <label for="inputChildren">Where?</label>
                                                <Select
                                                    value={hotel}
                                                    onChange={handleChange('hotel')}
                                                    options={hotelChoice}
                                                />
                                            </div>

                                            <div class="form-group tm-group-group tm-form-group-pad tm-form-group-2">
                                                <label for="inputChildren">How many rooms?</label>
                                                <input name="room" type="number" min="0" max="10" class="form-control" id="inputCity" placeholder="Type number..." 
                                                        onChange={(ev) => setChooseHotel({ ...chooseHotel, rooms: ev.target.value })} value={chooseHotel.rooms} />
                                            </div>

                          
                                                <label for="btnSubmit">&nbsp;</label>
                                                <button type="submit" class="btn btn-primary tm-btn tm-btn-search text-uppercase" id="btnSubmit"
                                                 onClick = {confirmHotel}>Confirm Your Hotel</button>
                                      
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
