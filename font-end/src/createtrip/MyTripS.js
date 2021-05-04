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

    //   var province_th_map = {
    //     'krabi': 'กระบี่',
    //     'bangkok': 'กรุงเทพมหานคร',
    //     'kanchanaburi': 'กาญจนบุรี',
    //     'kalasin': 'กาฬสินธุ์',
    //     'kamphaengphet': 'กำแพงเพชร',
    //     'khonkaen': 'ขอนแก่น',
    //     'chanthaburi': 'จันทบุรี',
    //     'chachoengsao': 'ฉะเชิงเทรา',
    //     'chonburi': 'ชลบุรี',
    //     'chainat': 'ชัยนาท',
    //     'chaiyaphum': 'ชัยภูมิ',
    //     'chumphon': 'ชุมพร',
    //     'chiangrai': 'เชียงราย',
    //     'chiangmai': 'เชียงใหม่',
    //     'trang': 'ตรัง',
    //     'trat': 'ตราด',
    //     'tak': 'ตาก',
    //     'nakhonnayok': 'นครนายก',
    //     'nakhonpathom': 'นครปฐม',
    //     'nakhonphanom': 'นครพนม',
    //     'nakhonratchasima': 'นครราชสีมา',
    //     'nakhonsithammarat': 'นครศรีธรรมราช',
    //     'nakhonsawan': 'นครสวรรค์',
    //     'nonthaburi': 'นนทบุรี',
    //     'narathiwat': 'นราธิวาส',
    //     'nan': 'น่าน',
    //     'buriram': 'บุรีรัมย์',
    //     'pathumthani': 'ปทุมธานี',
    //     'prachuapkhirikhan': 'ประจวบคีรีขันธ์',
    //     'prachinburi': 'ปราจีนบุรี',
    //     'pattani': 'ปัตตานี',
    //     'ayutthaya': 'พระนครศรีอยุธยา',
    //     'phayao': 'พะเยา',
    //     'phangnga': 'พังงา',
    //     'phatthalung': 'พัทลุง',
    //     'phichit': 'พิจิตร',
    //     'phitsanulok': 'พิษณุโลก',
    //     'phetchaburi': 'เพชรบุรี',
    //     'phetchabun': 'เพชรบูรณ์',
    //     'phrae': 'แพร่',
    //     'phuket': 'ภูเก็ต',
    //     'mahasarakham': 'มหาสารคาม',
    //     'mukdahan': 'มุกดาหาร',
    //     'maehongson': 'แม่ฮ่องสอน',
    //     'yasothon': 'ยโสธร',
    //     'yala': 'ยะลา',
    //     'roiet': 'ร้อยเอ็ด',
    //     'ranong': 'ระนอง',
    //     'rayong': 'ระยอง',
    //     'ratchaburi': 'ราชบุรี',
    //     'lopburi': 'ลพบุรี',
    //     'loei': 'เลย',
    //     'lampang': 'ลำปาง',
    //     'lamphun': 'ลำพูน',
    //     'sisaket': 'ศรีสะเกษ',
    //     'sakonnakhon': 'สกลนคร',
    //     'songkhla': 'สงขลา',
    //     'satun': 'สตูล',
    //     'samutprakan': 'สมุทรปราการ',
    //     'samutsongkhram': 'สมุทรสงคราม',
    //     'samutsakhon': 'สมุทรสาคร',
    //     'sakaeo': 'สระแก้ว',
    //     'saraburi': 'สระบุรี',
    //     'singburi': 'สิงห์บุรี',
    //     'sukhothai': 'สุโขทัย',
    //     'suphanburi': 'สุพรรณบุรี',
    //     'suratthani': 'สุราษฎร์ธานี',
    //     'surin': 'สุรินทร์',
    //     'nongkhai': 'หนองคาย',
    //     'nongbualamphu': 'หนองบัวลำภู',
    //     'angthong': 'อ่างทอง',
    //     'amnatcharoen': 'อำนาจเจริญ',
    //     'udonthani': 'อุดรธานี',
    //     'uttaradit': 'อุตรดิตถ์',
    //     'uthaithani': 'อุทัยธานี',
    //     'ubonratchathani': 'อุบลราชธานี',
    //     'betong': 'เบตง'
    //   }

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
    const { where, rooms } = travel;
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

                                            {/* <input name="destination" type="text" class="form-control" id="inputCity" placeholder="Type your destination..." onChange = {(ev) => setCreateYourTrip({...createYourTrip, from: ev.target.value})} value ={createYourTrip.from} /> */}
                                            <Select
                                                //style={{width: `${(8*this.state.selectedOption2.length) + 100}px`}}
                                                value={from}
                                                onChange={handleChange('from')}
                                                options={province_th}

                                            />

                                        </div>
                                        <div class="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                                            <label for="inputCity">To</label>
                                            {/* <input name="destination" type="text" class="form-control" id="inputCity" placeholder="Type your destination..."  onChange = {(ev) => setCreateYourTrip({...createYourTrip, to: ev.target.value})} value ={createYourTrip.to} /> */}
                                            <Select
                                                //style={{width: `${(8*this.state.selectedOption2.length) + 100}px`}}
                                                value={to}
                                                onChange={handleChange('to')}
                                                options={province_th}

                                            />

                                        </div>

                                        <div class="form-group tm-form-group tm-form-group-1">
                                            <div class="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                                                <label for="inputAdult">Adult</label>
                                                <input name="adult" type="number" min="1" class="form-control" id="inputCity" placeholder="Type your destination..." onChange={(ev) => setCreateYourTrip({ ...createYourTrip, adult: ev.target.value })} value={createYourTrip.adult} />
                                                {/* <select name="adult" class="form-control tm-select" id="inputAdult" onChange = {(ev) => setCreateYourTrip({...createYourTrip, adult: ev.target.value})} value ={createYourTrip.adult} >
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
                                            </select>                                         */}
                                            </div>

                                            <div class="form-group tm-form-group tm-form-group-pad tm-form-group-3">

                                                <label for="inputChildren">Children</label>
                                                <input name="child" type="number" min="0" class="form-control" id="inputCity" placeholder="Type your destination..." onChange={(ev) => setCreateYourTrip({ ...createYourTrip, child: ev.target.value })} value={createYourTrip.child} />
                                                {/* <select name="children" class="form-control tm-select" id="inputChildren" onChange = {(ev) => setCreateYourTrip({...createYourTrip, child: ev.target.value})} value ={createYourTrip.child}>
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
                                            </select>                                         */}
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

                                        <div class="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                                            <label for="btnSubmit">&nbsp;</label>
                                            <button type="submit" class="btn btn-primary tm-btn tm-btn-search text-uppercase" id="btnSubmit" onClick={checkAvailable1}>Check Availability</button>

                                        </div>

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
                                                {/* <select name="vehicle" class="form-control tm-select" id="inputChildren" onChange = {(ev) => setTravel({...travel, vehicle: ev.target.value})} value ={travel.vehicle}>
                                            	<option value="0" >0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>                                         */}
                                                <Select
                                                    //style={{width: `${(8*this.state.selectedOption2.length) + 100}px`}}
                                                    value={vehicle}
                                                    onChange={handleChange('vehicle')}
                                                    options={vehicleChoice}

                                                />
                                            </div>
                                            <div class="form-group tm-group-group tm-form-group-pad tm-form-group-3">
                                                <label for="inputChildren">Company</label>
                                                <select name="company" class="form-control tm-select" id="inputChildren" onChange={(ev) => setTravel({ ...travel, company: ev.target.value })} value={travel.company}>
                                                    <option value="0" >0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                                {/* <Select 
                                                //style={{width: `${(8*this.state.selectedOption2.length) + 100}px`}}
                                                value={vehicle}
                                                onChange={handleChange('vehicle')}
                                                options={vehicleChoice}
                                                
                                            />  */}
                                            </div>

                                            <div class="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                                                <label for="inputChildren">Time to Arrive</label>
                                                <div>
                                                <input name="time" type="text"  class="form-control" id="inputCity" placeholder="Type your destination..." onChange={(ev) => setTravel({ ...travel, child: ev.target.value })} value={travel.timeToArrive} />
                                                </div>
                                                {/* <select name="timeToArrive" class="form-control tm-select" id="inputChildren" onChange = {(ev) => setTravel({...travel, timeToArrive: ev.target.value})} value ={travel.timeToArrive}>
                                            	<option value="0" selected>0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>    */}
                                                {/* <Select 
                                                //style={{width: `${(8*this.state.selectedOption2.length) + 100}px`}}
                                                value={vehicle}
                                                onChange={handleChange('vehicle')}
                                                options={vehicleChoice}
                                                
                                            />  */}
                                            </div>
                                            <div class="tm-banner-header">
                                                <label for="btnSubmit">&nbsp;</label>
                                                <button type="submit" class="btn btn-primary tm-btn tm-btn-search text-uppercase" id="btnSubmit" onClick={checkAvailable2}>Check Availability</button>
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
                                                <select name="children" class="form-control tm-select" id="inputChildren" onChange={(ev) => setChooseHotel({ ...chooseHotel, where: ev.target.value })} value={chooseHotel.where} >
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
                                                <input name="child" type="number" min="0" class="form-control" id="inputCity" placeholder="Type your destination..." onChange={(ev) => setChooseHotel({ ...chooseHotel, rooms: ev.target.value })} value={chooseHotel.rooms} />
                                                {/* <select name="children" class="form-control tm-select" id="inputChildren" onChange={(ev) => setChooseHotel({ ...chooseHotel, rooms: ev.target.value })} value={chooseHotel.rooms}>
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
                                                </select> */}
                                            </div>

                                            <div class="tm-banner-header">
                                                <label for="btnSubmit">&nbsp;</label>
                                                <button type="submit" class="btn btn-primary tm-btn tm-btn-search text-uppercase" id="btnSubmit"
                                                 onClick = {confirmHotel}
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
