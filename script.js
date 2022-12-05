// Solving problems using array functions on the rest countries' data.

// a) Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var a = request.response
    var b = JSON.parse(a)
    var result = b.filter((c)=>(c.region == "Asia"))
    var res = result.map((r)=>(r.name.common))
    console.log(res)
}

// output = (50) ['Maldives', 'Pakistan', 'Malaysia', 'Uzbekistan', 'Singapore', 'Qatar', 'Kazakhstan', 'Bahrain', 'India', 'Macau', 'Syria', 'Kyrgyzstan', 'Palestine', 'Timor-Leste', 'Taiwan', 'South Korea', 'Iraq', 'Cambodia', 'Sri Lanka', 'Israel', 'Tajikistan', 'Azerbaijan', 'Georgia', 'China', 'Thailand', 'Indonesia', 'Turkmenistan', 'Turkey', 'Iran', 'Lebanon', 'Philippines', 'Kuwait', 'Oman', 'Afghanistan', 'Armenia', 'Bangladesh', 'Laos', 'Nepal', 'Myanmar', 'United Arab Emirates', 'Bhutan', 'Jordan', 'Vietnam', 'Brunei', 'Japan', 'Hong Kong', 'Saudi Arabia', 'North Korea', 'Mongolia', 'Yemen']

//  -------------------------------------------------------------------------------------------------------------------------------------------------------
// b) Get all the countries with a population of less than 2 lakhs using Filter function


var request = new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var a = request.response
    var b = JSON.parse(a)
    var result = b.filter((c)=>(c.population < 200000 ))
    var e = result.map((d)=>d.name.common) 
    console.log(e)
}

// output = (62) ['Aruba', 'Wallis and Futuna', 'Åland Islands', 'Pitcairn Islands', 'Seychelles', 'French Southern and Antarctic Lands', 'Christmas Island', 'Saint Martin', 'Heard Island and McDonald Islands', 'Antarctica', 'Greenland', 'British Indian Ocean Territory', 'Saint Lucia', 'Niue', 'Saint Barthélemy', 'Grenada', 'Isle of Man', 'Curaçao', 'Dominica', 'Faroe Islands', 'Montserrat', 'Cook Islands', 'Bermuda', 'San Marino', 'Cayman Islands', 'Cocos (Keeling) Islands', 'United States Virgin Islands', 'Norfolk Island', 'Nauru', 'Bouvet Island', 'Micronesia', 'American Samoa', 'Anguilla', 'Marshall Islands', 'Kiribati', 'Northern Mariana Islands', 'Guam', 'Gibraltar', 'Vatican City', 'Jersey', 'Tuvalu', 'Saint Helena, Ascension and Tristan da Cunha', 'Samoa', 'Guernsey', 'Tonga', 'Saint Kitts and Nevis', 'Falkland Islands', 'Palau', 'Turks and Caicos Islands', 'British Virgin Islands', 'Liechtenstein', 'Andorra', 'Tokelau', 'Sint Maarten', 'United States Minor Outlying Islands', 'Antigua and Barbuda', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'South Georgia', 'Caribbean Netherlands', 'Monaco', 'Svalbard and Jan Mayen']

// -----------------------------------------------------------------------------------------------------------------------------------------------------


// c) Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var a = request.response
    var b = JSON.parse(a)
    var result = b.forEach(element => {console.log(`${element.name.common} : ${element.capital} : ${element.flags.png}`)})
   
}

// output = Mauritania : Nouakchott : https://flagcdn.com/w320/mr.png
// script.js:46 Aruba : Oranjestad : https://flagcdn.com/w320/aw.png
// script.js:46 Argentina : Buenos Aires : https://flagcdn.com/w320/ar.png
// script.js:46 Sweden : Stockholm : https://flagcdn.com/w320/se.png
// script.js:46 Maldives : Malé : https://flagcdn.com/w320/mv.png
// script.js:46 Mexico : Mexico City : https://flagcdn.com/w320/mx.png
// script.js:46 New Zealand : Wellington : https://flagcdn.com/w320/nz.png
// script.js:46 Ecuador : Quito : https://flagcdn.com/w320/ec.png
// script.js:46 Wallis and Futuna : Mata-Utu : https://flagcdn.com/w320/wf.png
// script.js:46 Åland Islands : Mariehamn : https://flagcdn.com/w320/ax.png
// script.js:46 Montenegro : Podgorica : https://flagcdn.com/w320/me.png
// script.js:46 Pakistan : Islamabad : https://flagcdn.com/w320/pk.png
// script.js:46 Pitcairn Islands : Adamstown : https://flagcdn.com/w320/pn.png
// script.js:46 Zambia : Lusaka : https://flagcdn.com/w320/zm.png
// script.js:46 Seychelles : Victoria : https://flagcdn.com/w320/sc.png
// script.js:46 Malaysia : Kuala Lumpur : https://flagcdn.com/w320/my.png
// script.js:46 Norway : Oslo : https://flagcdn.com/w320/no.png
// script.js:46 Uzbekistan : Tashkent : https://flagcdn.com/w320/uz.png
// script.js:46 Vanuatu : Port Vila : https://flagcdn.com/w320/vu.png
// script.js:46 French Southern and Antarctic Lands : Port-aux-Français : https://flagcdn.com/w320/tf.png
// script.js:46 Christmas Island : Flying Fish Cove : https://flagcdn.com/w320/cx.png
// script.js:46 Singapore : Singapore : https://flagcdn.com/w320/sg.png
// script.js:46 Suriname : Paramaribo : https://flagcdn.com/w320/sr.png
// script.js:46 Western Sahara : El Aaiún : https://flagcdn.com/w320/eh.png
// script.js:46 Saint Martin : Marigot : https://flagcdn.com/w320/mf.png
// script.js:46 Costa Rica : San José : https://flagcdn.com/w320/cr.png
// script.js:46 Heard Island and McDonald Islands : undefined : https://flagcdn.com/w320/hm.png
// script.js:46 Ireland : Dublin : https://flagcdn.com/w320/ie.png
// script.js:46 Antarctica : undefined : https://flagcdn.com/w320/aq.png
// script.js:46 Australia : Canberra : https://flagcdn.com/w320/au.png
// script.js:46 Libya : Tripoli : https://flagcdn.com/w320/ly.png
// script.js:46 Qatar : Doha : https://flagcdn.com/w320/qa.png
// script.js:46 Greenland : Nuuk : https://flagcdn.com/w320/gl.png
// script.js:46 Mauritius : Port Louis : https://flagcdn.com/w320/mu.png
// script.js:46 Kazakhstan : Nur-Sultan : https://flagcdn.com/w320/kz.png
// script.js:46 British Indian Ocean Territory : Diego Garcia : https://flagcdn.com/w320/io.png
// script.js:46 Albania : Tirana : https://flagcdn.com/w320/al.png
// script.js:46 Bahrain : Manama : https://flagcdn.com/w320/bh.png
// script.js:46 Papua New Guinea : Port Moresby : https://flagcdn.com/w320/pg.png
// script.js:46 Burundi : Gitega : https://flagcdn.com/w320/bi.png
// script.js:46 India : New Delhi : https://flagcdn.com/w320/in.png
// script.js:46 Uruguay : Montevideo : https://flagcdn.com/w320/uy.png
// script.js:46 Saint Lucia : Castries : https://flagcdn.com/w320/lc.png
// script.js:46 Barbados : Bridgetown : https://flagcdn.com/w320/bb.png
// script.js:46 New Caledonia : Nouméa : https://flagcdn.com/w320/nc.png
// script.js:46 Latvia : Riga : https://flagcdn.com/w320/lv.png
// script.js:46 Estonia : Tallinn : https://flagcdn.com/w320/ee.png
// script.js:46 Niue : Alofi : https://flagcdn.com/w320/nu.png
// script.js:46 Saint Barthélemy : Gustavia : https://flagcdn.com/w320/bl.png
// script.js:46 Puerto Rico : San Juan : https://flagcdn.com/w320/pr.png
// script.js:46 Grenada : St. George's : https://flagcdn.com/w320/gd.png
// script.js:46 Macau : undefined : https://flagcdn.com/w320/mo.png
// script.js:46 Cyprus : Nicosia : https://flagcdn.com/w320/cy.png
// script.js:46 Isle of Man : Douglas : https://flagcdn.com/w320/im.png
// script.js:46 Greece : Athens : https://flagcdn.com/w320/gr.png
// script.js:46 Syria : Damascus : https://flagcdn.com/w320/sy.png
// script.js:46 Lithuania : Vilnius : https://flagcdn.com/w320/lt.png
// script.js:46 Curaçao : Willemstad : https://flagcdn.com/w320/cw.png
// script.js:46 Dominica : Roseau : https://flagcdn.com/w320/dm.png
// script.js:46 Niger : Niamey : https://flagcdn.com/w320/ne.png
// script.js:46 Kyrgyzstan : Bishkek : https://flagcdn.com/w320/kg.png
// script.js:46 Trinidad and Tobago : Port of Spain : https://flagcdn.com/w320/tt.png
// script.js:46 Togo : Lomé : https://flagcdn.com/w320/tg.png
// script.js:46 Palestine : Ramallah,Jerusalem : https://flagcdn.com/w320/ps.png
// script.js:46 Madagascar : Antananarivo : https://flagcdn.com/w320/mg.png
// script.js:46 Croatia : Zagreb : https://flagcdn.com/w320/hr.png
// script.js:46 Faroe Islands : Tórshavn : https://flagcdn.com/w320/fo.png
// script.js:46 Haiti : Port-au-Prince : https://flagcdn.com/w320/ht.png
// script.js:46 Montserrat : Plymouth : https://flagcdn.com/w320/ms.png
// script.js:46 Cook Islands : Avarua : https://flagcdn.com/w320/ck.png
// script.js:46 Timor-Leste : Dili : https://flagcdn.com/w320/tl.png
// script.js:46 Martinique : Fort-de-France : https://flagcdn.com/w320/mq.png
// script.js:46 Cuba : Havana : https://flagcdn.com/w320/cu.png
// script.js:46 Taiwan : Taipei : https://flagcdn.com/w320/tw.png
// script.js:46 Eswatini : Mbabane : https://flagcdn.com/w320/sz.png
// script.js:46 Ukraine : Kyiv : https://flagcdn.com/w320/ua.png
// script.js:46 Bermuda : Hamilton : https://flagcdn.com/w320/bm.png
// script.js:46 South Korea : Seoul : https://flagcdn.com/w320/kr.png
// script.js:46 Peru : Lima : https://flagcdn.com/w320/pe.png
// script.js:46 Iraq : Baghdad : https://flagcdn.com/w320/iq.png
// script.js:46 Moldova : Chișinău : https://flagcdn.com/w320/md.png
// script.js:46 San Marino : City of San Marino : https://flagcdn.com/w320/sm.png
// script.js:46 Venezuela : Caracas : https://flagcdn.com/w320/ve.png
// script.js:46 Guyana : Georgetown : https://flagcdn.com/w320/gy.png
// script.js:46 Cayman Islands : George Town : https://flagcdn.com/w320/ky.png
// script.js:46 Cambodia : Phnom Penh : https://flagcdn.com/w320/kh.png
// script.js:46 Cocos (Keeling) Islands : West Island : https://flagcdn.com/w320/cc.png
// script.js:46 Malta : Valletta : https://flagcdn.com/w320/mt.png
// script.js:46 Sri Lanka : Sri Jayawardenepura Kotte : https://flagcdn.com/w320/lk.png
// script.js:46 Israel : Jerusalem : https://flagcdn.com/w320/il.png
// script.js:46 Sudan : Khartoum : https://flagcdn.com/w320/sd.png
// script.js:46 United States Virgin Islands : Charlotte Amalie : https://flagcdn.com/w320/vi.png
// script.js:46 Eritrea : Asmara : https://flagcdn.com/w320/er.png
// script.js:46 Mali : Bamako : https://flagcdn.com/w320/ml.png
// script.js:46 Somalia : Mogadishu : https://flagcdn.com/w320/so.png
// script.js:46 Norfolk Island : Kingston : https://flagcdn.com/w320/nf.png
// script.js:46 Comoros : Moroni : https://flagcdn.com/w320/km.png
// script.js:46 Nicaragua : Managua : https://flagcdn.com/w320/ni.png
// script.js:46 Russia : Moscow : https://flagcdn.com/w320/ru.png
// script.js:46 Uganda : Kampala : https://flagcdn.com/w320/ug.png
// script.js:46 Nauru : Yaren : https://flagcdn.com/w320/nr.png
// script.js:46 Switzerland : Bern : https://flagcdn.com/w320/ch.png
// script.js:46 Portugal : Lisbon : https://flagcdn.com/w320/pt.png
// script.js:46 Tajikistan : Dushanbe : https://flagcdn.com/w320/tj.png
// script.js:46 South Sudan : Juba : https://flagcdn.com/w320/ss.png
// script.js:46 Bouvet Island : undefined : https://flagcdn.com/w320/bv.png
// script.js:46 Micronesia : Palikir : https://flagcdn.com/w320/fm.png
// script.js:46 American Samoa : Pago Pago : https://flagcdn.com/w320/as.png
// script.js:46 Czechia : Prague : https://flagcdn.com/w320/cz.png
// script.js:46 Botswana : Gaborone : https://flagcdn.com/w320/bw.png
// script.js:46 Tunisia : Tunis : https://flagcdn.com/w320/tn.png
// script.js:46 Anguilla : The Valley : https://flagcdn.com/w320/ai.png
// script.js:46 Guinea-Bissau : Bissau : https://flagcdn.com/w320/gw.png
// script.js:46 Slovakia : Bratislava : https://flagcdn.com/w320/sk.png
// script.js:46 Marshall Islands : Majuro : https://flagcdn.com/w320/mh.png
// script.js:46 Algeria : Algiers : https://flagcdn.com/w320/dz.png
// script.js:46 Jamaica : Kingston : https://flagcdn.com/w320/jm.png
// script.js:46 Mozambique : Maputo : https://flagcdn.com/w320/mz.png
// script.js:46 Spain : Madrid : https://flagcdn.com/w320/es.png
// script.js:46 Honduras : Tegucigalpa : https://flagcdn.com/w320/hn.png
// script.js:46 Netherlands : Amsterdam : https://flagcdn.com/w320/nl.png
// script.js:46 South Africa : Pretoria,Bloemfontein,Cape Town : https://flagcdn.com/w320/za.png
// script.js:46 Azerbaijan : Baku : https://flagcdn.com/w320/az.png
// script.js:46 North Macedonia : Skopje : https://flagcdn.com/w320/mk.png
// script.js:46 Gambia : Banjul : https://flagcdn.com/w320/gm.png
// script.js:46 Liberia : Monrovia : https://flagcdn.com/w320/lr.png
// script.js:46 Luxembourg : Luxembourg : https://flagcdn.com/w320/lu.png
// script.js:46 Cape Verde : Praia : https://flagcdn.com/w320/cv.png
// script.js:46 Bahamas : Nassau : https://flagcdn.com/w320/bs.png
// script.js:46 Georgia : Tbilisi : https://flagcdn.com/w320/ge.png
// script.js:46 Kiribati : South Tarawa : https://flagcdn.com/w320/ki.png
// script.js:46 Tanzania : Dodoma : https://flagcdn.com/w320/tz.png
// script.js:46 China : Beijing : https://flagcdn.com/w320/cn.png
// script.js:46 Guatemala : Guatemala City : https://flagcdn.com/w320/gt.png
// script.js:46 São Tomé and Príncipe : São Tomé : https://flagcdn.com/w320/st.png
// script.js:46 Germany : Berlin : https://flagcdn.com/w320/de.png
// script.js:46 Sierra Leone : Freetown : https://flagcdn.com/w320/sl.png
// script.js:46 Chad : N'Djamena : https://flagcdn.com/w320/td.png
// script.js:46 United Kingdom : London : https://flagcdn.com/w320/gb.png
// script.js:46 Slovenia : Ljubljana : https://flagcdn.com/w320/si.png
// script.js:46 Thailand : Bangkok : https://flagcdn.com/w320/th.png
// script.js:46 Indonesia : Jakarta : https://flagcdn.com/w320/id.png
// script.js:46 Northern Mariana Islands : Saipan : https://flagcdn.com/w320/mp.png
// script.js:46 Guam : Hagåtña : https://flagcdn.com/w320/gu.png
// script.js:46 Finland : Helsinki : https://flagcdn.com/w320/fi.png
// script.js:46 Mayotte : Mamoudzou : https://flagcdn.com/w320/yt.png
// script.js:46 Gibraltar : Gibraltar : https://flagcdn.com/w320/gi.png
// script.js:46 Turkmenistan : Ashgabat : https://flagcdn.com/w320/tm.png
// script.js:46 Kosovo : Pristina : https://flagcdn.com/w320/xk.png
// script.js:46 Ivory Coast : Yamoussoukro : https://flagcdn.com/w320/ci.png
// script.js:46 Morocco : Rabat : https://flagcdn.com/w320/ma.png
// script.js:46 Dominican Republic : Santo Domingo : https://flagcdn.com/w320/do.png
// script.js:46 Ghana : Accra : https://flagcdn.com/w320/gh.png
// script.js:46 Vatican City : Vatican City : https://flagcdn.com/w320/va.png
// script.js:46 Jersey : Saint Helier : https://flagcdn.com/w320/je.png
// script.js:46 Turkey : Ankara : https://flagcdn.com/w320/tr.png
// script.js:46 Tuvalu : Funafuti : https://flagcdn.com/w320/tv.png
// script.js:46 Iran : Tehran : https://flagcdn.com/w320/ir.png
// script.js:46 Egypt : Cairo : https://flagcdn.com/w320/eg.png
// script.js:46 Denmark : Copenhagen : https://flagcdn.com/w320/dk.png
// script.js:46 Kenya : Nairobi : https://flagcdn.com/w320/ke.png
// script.js:46 Bulgaria : Sofia : https://flagcdn.com/w320/bg.png
// script.js:46 Zimbabwe : Harare : https://flagcdn.com/w320/zw.png
// script.js:46 Angola : Luanda : https://flagcdn.com/w320/ao.png
// script.js:46 Nigeria : Abuja : https://flagcdn.com/w320/ng.png
// script.js:46 Poland : Warsaw : https://flagcdn.com/w320/pl.png
// script.js:46 Senegal : Dakar : https://flagcdn.com/w320/sn.png
// script.js:46 Saint Helena, Ascension and Tristan da Cunha : Jamestown : https://flagcdn.com/w320/sh.png
// script.js:46 Lebanon : Beirut : https://flagcdn.com/w320/lb.png
// script.js:46 Samoa : Apia : https://flagcdn.com/w320/ws.png
// script.js:46 Philippines : Manila : https://flagcdn.com/w320/ph.png
// script.js:46 Guernsey : St. Peter Port : https://flagcdn.com/w320/gg.png
// script.js:46 El Salvador : San Salvador : https://flagcdn.com/w320/sv.png
// script.js:46 Kuwait : Kuwait City : https://flagcdn.com/w320/kw.png
// script.js:46 Tonga : Nuku'alofa : https://flagcdn.com/w320/to.png
// script.js:46 Oman : Muscat : https://flagcdn.com/w320/om.png
// script.js:46 Afghanistan : Kabul : https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png
// script.js:46 Saint Kitts and Nevis : Basseterre : https://flagcdn.com/w320/kn.png
// script.js:46 Central African Republic : Bangui : https://flagcdn.com/w320/cf.png
// script.js:46 Serbia : Belgrade : https://flagcdn.com/w320/rs.png
// script.js:46 Armenia : Yerevan : https://flagcdn.com/w320/am.png
// script.js:46 Bangladesh : Dhaka : https://flagcdn.com/w320/bd.png
// script.js:46 Laos : Vientiane : https://flagcdn.com/w320/la.png
// script.js:46 Chile : Santiago : https://flagcdn.com/w320/cl.png
// script.js:46 French Polynesia : Papeetē : https://flagcdn.com/w320/pf.png
// script.js:46 Panama : Panama City : https://flagcdn.com/w320/pa.png
// script.js:46 United States : Washington, D.C. : https://flagcdn.com/w320/us.png
// script.js:46 Nepal : Kathmandu : https://flagcdn.com/w320/np.png
// script.js:46 Myanmar : Naypyidaw : https://flagcdn.com/w320/mm.png
// script.js:46 Falkland Islands : Stanley : https://flagcdn.com/w320/fk.png
// script.js:46 Hungary : Budapest : https://flagcdn.com/w320/hu.png
// script.js:46 Palau : Ngerulmud : https://flagcdn.com/w320/pw.png
// script.js:46 Equatorial Guinea : Malabo : https://flagcdn.com/w320/gq.png
// script.js:46 Guinea : Conakry : https://flagcdn.com/w320/gn.png
// script.js:46 United Arab Emirates : Abu Dhabi : https://flagcdn.com/w320/ae.png
// script.js:46 Turks and Caicos Islands : Cockburn Town : https://flagcdn.com/w320/tc.png
// script.js:46 British Virgin Islands : Road Town : https://flagcdn.com/w320/vg.png
// script.js:46 Liechtenstein : Vaduz : https://flagcdn.com/w320/li.png
// script.js:46 Bosnia and Herzegovina : Sarajevo : https://flagcdn.com/w320/ba.png
// script.js:46 Malawi : Lilongwe : https://flagcdn.com/w320/mw.png
// script.js:46 Bhutan : Thimphu : https://flagcdn.com/w320/bt.png
// script.js:46 Cameroon : Yaoundé : https://flagcdn.com/w320/cm.png
// script.js:46 Andorra : Andorra la Vella : https://flagcdn.com/w320/ad.png
// script.js:46 Guadeloupe : Basse-Terre : https://flagcdn.com/w320/gp.png
// script.js:46 Republic of the Congo : Brazzaville : https://flagcdn.com/w320/cg.png
// script.js:46 Réunion : Saint-Denis : https://flagcdn.com/w320/re.png
// script.js:46 Burkina Faso : Ouagadougou : https://flagcdn.com/w320/bf.png
// script.js:46 Jordan : Amman : https://flagcdn.com/w320/jo.png
// script.js:46 DR Congo : Kinshasa : https://flagcdn.com/w320/cd.png
// script.js:46 Tokelau : Fakaofo : https://flagcdn.com/w320/tk.png
// script.js:46 Vietnam : Hanoi : https://flagcdn.com/w320/vn.png
// script.js:46 Sint Maarten : Philipsburg : https://flagcdn.com/w320/sx.png
// script.js:46 Belgium : Brussels : https://flagcdn.com/w320/be.png
// script.js:46 United States Minor Outlying Islands : Washington DC : https://flagcdn.com/w320/um.png
// script.js:46 Brazil : Brasília : https://flagcdn.com/w320/br.png
// script.js:46 Belize : Belmopan : https://flagcdn.com/w320/bz.png
// script.js:46 Antigua and Barbuda : Saint John's : https://flagcdn.com/w320/ag.png
// script.js:46 Paraguay : Asunción : https://flagcdn.com/w320/py.png
// script.js:46 Benin : Porto-Novo : https://flagcdn.com/w320/bj.png
// script.js:46 Brunei : Bandar Seri Begawan : https://flagcdn.com/w320/bn.png
// script.js:46 Bolivia : Sucre : https://flagcdn.com/w320/bo.png
// script.js:46 Djibouti : Djibouti : https://flagcdn.com/w320/dj.png
// script.js:46 French Guiana : Cayenne : https://flagcdn.com/w320/gf.png
// script.js:46 Canada : Ottawa : https://flagcdn.com/w320/ca.png
// script.js:46 Saint Pierre and Miquelon : Saint-Pierre : https://flagcdn.com/w320/pm.png
// script.js:46 Japan : Tokyo : https://flagcdn.com/w320/jp.png
// script.js:46 Rwanda : Kigali : https://flagcdn.com/w320/rw.png
// script.js:46 Saint Vincent and the Grenadines : Kingstown : https://flagcdn.com/w320/vc.png
// script.js:46 Iceland : Reykjavik : https://flagcdn.com/w320/is.png
// script.js:46 Belarus : Minsk : https://flagcdn.com/w320/by.png
// script.js:46 Hong Kong : City of Victoria : https://flagcdn.com/w320/hk.png
// script.js:46 Lesotho : Maseru : https://flagcdn.com/w320/ls.png
// script.js:46 Fiji : Suva : https://flagcdn.com/w320/fj.png
// script.js:46 Austria : Vienna : https://flagcdn.com/w320/at.png
// script.js:46 Colombia : Bogotá : https://flagcdn.com/w320/co.png
// script.js:46 Gabon : Libreville : https://flagcdn.com/w320/ga.png
// script.js:46 Saudi Arabia : Riyadh : https://flagcdn.com/w320/sa.png
// script.js:46 South Georgia : King Edward Point : https://flagcdn.com/w320/gs.png
// script.js:46 Ethiopia : Addis Ababa : https://flagcdn.com/w320/et.png
// script.js:46 Caribbean Netherlands : Kralendijk : https://flagcdn.com/w320/bq.png
// script.js:46 Monaco : Monaco : https://flagcdn.com/w320/mc.png
// script.js:46 North Korea : Pyongyang : https://flagcdn.com/w320/kp.png
// script.js:46 Italy : Rome : https://flagcdn.com/w320/it.png
// script.js:46 Namibia : Windhoek : https://flagcdn.com/w320/na.png
// script.js:46 Mongolia : Ulan Bator : https://flagcdn.com/w320/mn.png
// script.js:46 Solomon Islands : Honiara : https://flagcdn.com/w320/sb.png
// script.js:46 Yemen : Sana'a : https://flagcdn.com/w320/ye.png
// script.js:46 Romania : Bucharest : https://flagcdn.com/w320/ro.png
// script.js:46 Svalbard and Jan Mayen : Longyearbyen : https://flagcdn.com/w320/sj.png


// d) Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var a = request.response
    var b = JSON.parse(a)
    var result = b.reduce((acc,cv)=>acc+cv.population,0)
    console.log(result)
    
}

// output = 7777721563


// e) Print the country which uses US Dollars as currency.


var request = new XMLHttpRequest();
request.open("get","https://restcountries.com/v2/all")
request.send()
request.onload = function(){
    var a = request.response
    var b = JSON.parse(a)
    var result = b.filter((c)=> {
        for (var key in c.currencies)
        {
            if(c.currencies[key].code === "USD")
            {
                console.log(c.name)
            }
        }
    })
  
}

// output = American Samoa
// script.js:331 Bonaire, Sint Eustatius and Saba
// script.js:331 British Indian Ocean Territory
// script.js:331 Virgin Islands (British)
// script.js:331 Virgin Islands (U.S.)
// script.js:331 Cambodia
// script.js:331 Ecuador
// script.js:331 El Salvador
// script.js:331 Guam
// script.js:331 Marshall Islands
// script.js:331 Micronesia (Federated States of)
// script.js:331 Northern Mariana Islands
// script.js:331 Palau
// script.js:331 Panama
// script.js:331 Puerto Rico
// script.js:331 Timor-Leste
// script.js:331 Turks and Caicos Islands
// script.js:331 United States of America
