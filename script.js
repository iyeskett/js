window.onload = (event) => {
  var e = document.getElementById("fOrder");
  var value = e.value;
  //console.log(value);
  var text = e.options[e.selectedIndex].text;
  console.log(text);
  if (text == 'Selecione a Forma de Cobrança'){
  
  }else {
        document.getElementById('btnPhone').removeAttribute('disabled');
    }
};


  function discar(){
      document.getElementById('check').value = '1';
  }

  function salvar(event){
    event.preventDefault();

    const form = document.getElementById('formulario');

    if (form.reportValidity()) {
      document.getElementById('check').value = '0';
      console.log('Formulário salvo com sucesso!');
    }

  
  }

  function btnConfig(value){
      
      if (value == ''){
        
        document.getElementById('btnPhone').disabled = true;
      } else {
        document.getElementById('btnPhone').removeAttribute('disabled');
      }
  }

  function get_details(){
    document.getElementById('formatacao').value = '';
    document.getElementById('numeroDigitos').value = '';
    
    var val = document.getElementById("ddi1").value;
          
    switch (val) {
      //Alemanha
      case '49':
        document.getElementById('formatacao').value = '49+CA+No';
        document.getElementById('numeroDigitos').value = '3 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;
      //Andorra
      case '376':
        document.getElementById('formatacao').value = '376+No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;
      

        case '49':
        document.getElementById('formatacao').value = '49+CA+No';
        document.getElementById('numeroDigitos').value = '3 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '376':
        document.getElementById('formatacao').value = '376+No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '244':
        document.getElementById('formatacao').value = '244+CA+No';
        document.getElementById('numeroDigitos').value = '5 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1264':
        document.getElementById('formatacao').value = '1+264+No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1268':
        document.getElementById('formatacao').value = '1+268+CA+No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '599':
        document.getElementById('formatacao').value = '599+CA+No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '966':
        document.getElementById('formatacao').value = '966+CA+No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '213':
        document.getElementById('formatacao').value = '213+CA+No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '54':
        document.getElementById('formatacao').value = '54+CA+No';
        document.getElementById('numeroDigitos').value = '6 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '374':
        document.getElementById('formatacao').value = '374+CA+No';
        document.getElementById('numeroDigitos').value = '3 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '297':
        document.getElementById('formatacao').value = '297+No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '247':
        document.getElementById('formatacao').value = '247+No';
        document.getElementById('numeroDigitos').value = '4';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '61':
        document.getElementById('formatacao').value = '61+CA+No';
        document.getElementById('numeroDigitos').value = '8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '43':
        document.getElementById('formatacao').value = '43+CA+No';
        document.getElementById('numeroDigitos').value = '3 a 9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '994':
        document.getElementById('formatacao').value = '994+CA+No';
        document.getElementById('numeroDigitos').value = '3 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1242':
        document.getElementById('formatacao').value = '1+242+No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '973':
        document.getElementById('formatacao').value = '973+No';
        document.getElementById('numeroDigitos').value = '6 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '880':
        document.getElementById('formatacao').value = '880+CA+No';
        document.getElementById('numeroDigitos').value = '3 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1246':
        document.getElementById('formatacao').value = '1+246+No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '32':
        document.getElementById('formatacao').value = '32+CA+No';
        document.getElementById('numeroDigitos').value = '';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '351':
        document.getElementById('formatacao').value = '351+No';
        document.getElementById('numeroDigitos').value = '9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '93':
        document.getElementById('formatacao').value = '93+No';
        document.getElementById('numeroDigitos').value = '5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '27':
        document.getElementById('formatacao').value = '27+CA+No';
        document.getElementById('numeroDigitos').value = '5 a 14';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1907':
        document.getElementById('formatacao').value = '0002+1+907+No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '355':
        document.getElementById('formatacao').value = '355+CA+No';
        document.getElementById('numeroDigitos').value = '4 a 5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '501':
        document.getElementById('formatacao').value = '501+CA+No';
        document.getElementById('numeroDigitos').value = '4 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '229':
        document.getElementById('formatacao').value = '229+No';
        document.getElementById('numeroDigitos').value = '8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1441':
        document.getElementById('formatacao').value = '1+441+No';
        document.getElementById('numeroDigitos').value = '5 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '375':
        document.getElementById('formatacao').value = '375+CA+No';
        document.getElementById('numeroDigitos').value = '5 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '591':
        document.getElementById('formatacao').value = '591+CA+No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '267':
        document.getElementById('formatacao').value = '267+No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '387':
        document.getElementById('formatacao').value = '387+CA+No';
        document.getElementById('numeroDigitos').value = '4 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '267':
        document.getElementById('formatacao').value = '267+No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '55':
        document.getElementById('formatacao').value = '55+CA+No';
        document.getElementById('numeroDigitos').value = '8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '673':
        document.getElementById('formatacao').value = '673+CA+No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '359':
        document.getElementById('formatacao').value = '359+CA+No';
        document.getElementById('numeroDigitos').value = '4 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '226':
        document.getElementById('formatacao').value = '226+No';
        document.getElementById('numeroDigitos').value = '8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '257':
        document.getElementById('formatacao').value = '257+CA+No';
        document.getElementById('numeroDigitos').value = '4 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '975':
        document.getElementById('formatacao').value = '975+No';
        document.getElementById('numeroDigitos').value = '5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '238':
        document.getElementById('formatacao').value = '238+No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '237':
        document.getElementById('formatacao').value = '237+No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1':
        document.getElementById('formatacao').value = '1+CA+No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '34':
        document.getElementById('formatacao').value = '34+No';
        document.getElementById('numeroDigitos').value = '9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1345':
        document.getElementById('formatacao').value = '1+345+No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '7':
        document.getElementById('formatacao').value = '7+CA+No';
        document.getElementById('numeroDigitos').value = '3 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '34':
        document.getElementById('formatacao').value = '34+No ';
        document.getElementById('numeroDigitos').value = '9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '235':
        document.getElementById('formatacao').value = '235+No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '56':
        document.getElementById('formatacao').value = '56+CA+No';
        document.getElementById('numeroDigitos').value = '8 a 9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '86':
        document.getElementById('formatacao').value = '86+CA+No';
        document.getElementById('numeroDigitos').value = '3 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '357':
        document.getElementById('formatacao').value = '357+CA+No';
        document.getElementById('numeroDigitos').value = '5 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '61':
        document.getElementById('formatacao').value = '61-89164-No';
        document.getElementById('numeroDigitos').value = '4';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '65':
        document.getElementById('formatacao').value = '65-No';
        document.getElementById('numeroDigitos').value = '8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '27':
        document.getElementById('formatacao').value = '27-Ca-No';
        document.getElementById('numeroDigitos').value = '5 a 14';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '61':
        document.getElementById('formatacao').value = '61-89162-No';
        document.getElementById('numeroDigitos').value = '4';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '57':
        document.getElementById('formatacao').value = '57-Ca-No';
        document.getElementById('numeroDigitos').value = '3 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '269':
        document.getElementById('formatacao').value = '269-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '242':
        document.getElementById('formatacao').value = '242-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '682':
        document.getElementById('formatacao').value = '682-No';
        document.getElementById('numeroDigitos').value = '5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '850':
        document.getElementById('formatacao').value = 'N/A';
        document.getElementById('numeroDigitos').value = '3 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '82':
        document.getElementById('formatacao').value = '82-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '225':
        document.getElementById('formatacao').value = '225-No';
        document.getElementById('numeroDigitos').value = '8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '506':
        document.getElementById('formatacao').value = '506-No';
        document.getElementById('numeroDigitos').value = '';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '385':
        document.getElementById('formatacao').value = '385-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '53':
        document.getElementById('formatacao').value = '53-Ca-No';
        document.getElementById('numeroDigitos').value = '4 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '246':
        document.getElementById('formatacao').value = 'N/A';
        document.getElementById('numeroDigitos').value = '4 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '45':
        document.getElementById('formatacao').value = '45-No';
        document.getElementById('numeroDigitos').value = '8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '253':
        document.getElementById('formatacao').value = '253-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1767':
        document.getElementById('formatacao').value = '1-767-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1809':
        document.getElementById('formatacao').value = '1-809-No  ';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1829':
        document.getElementById('formatacao').value = '1-829-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '20':
        document.getElementById('formatacao').value = '20-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '503':
        document.getElementById('formatacao').value = '503-No';
        document.getElementById('numeroDigitos').value = '8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '971':
        document.getElementById('formatacao').value = '971-Ca-No';
        document.getElementById('numeroDigitos').value = '5 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '593':
        document.getElementById('formatacao').value = '593-Ca-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '291':
        document.getElementById('formatacao').value = '291-Ca-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '421':
        document.getElementById('formatacao').value = '421-Ca-No';
        document.getElementById('numeroDigitos').value = '3 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '386':
        document.getElementById('formatacao').value = '386-Ca-No';
        document.getElementById('numeroDigitos').value = '4 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '34':
        document.getElementById('formatacao').value = '34-No';
        document.getElementById('numeroDigitos').value = '9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1':
        document.getElementById('formatacao').value = '0002-1-Ca-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '372':
        document.getElementById('formatacao').value = '372-Ca-No';
        document.getElementById('numeroDigitos').value = '5 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '251':
        document.getElementById('formatacao').value = '251-Ca-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '500':
        document.getElementById('formatacao').value = '500-No';
        document.getElementById('numeroDigitos').value = '4 a 5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '298':
        document.getElementById('formatacao').value = '298-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '679':
        document.getElementById('formatacao').value = '679-No';
        document.getElementById('numeroDigitos').value = '5 a 6 ';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '63':
        document.getElementById('formatacao').value = '63-Ca-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '590':
        document.getElementById('formatacao').value = '590-No';
        document.getElementById('numeroDigitos').value = '9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1671':
        document.getElementById('formatacao').value = '1-671-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '502':
        document.getElementById('formatacao').value = '592-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '592':
        document.getElementById('formatacao').value = '592-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '594':
        document.getElementById('formatacao').value = '594-No';
        document.getElementById('numeroDigitos').value = '9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '245':
        document.getElementById('formatacao').value = '245-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '240':
        document.getElementById('formatacao').value = '240-Ca-No';
        document.getElementById('numeroDigitos').value = '4';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '224':
        document.getElementById('formatacao').value = '224-Ca-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '509':
        document.getElementById('formatacao').value = '509-No';
        document.getElementById('numeroDigitos').value = '5 a 6 ';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1808':
        document.getElementById('formatacao').value = '1-808-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '358':
        document.getElementById('formatacao').value = '358-Ca-No';
        document.getElementById('numeroDigitos').value = '4 a 9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '886':
        document.getElementById('formatacao').value = '886-Ca-No';
        document.getElementById('numeroDigitos').value = '5 a 9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '33':
        document.getElementById('formatacao').value = '33-No';
        document.getElementById('numeroDigitos').value = '9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '241':
        document.getElementById('formatacao').value = '241-0No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '220':
        document.getElementById('formatacao').value = '220-No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '233':
        document.getElementById('formatacao').value = '233-CA-No';
        document.getElementById('numeroDigitos').value = '3 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '995':
        document.getElementById('formatacao').value = '995-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '350':
        document.getElementById('formatacao').value = '350-No';
        document.getElementById('numeroDigitos').value = '5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1':
        document.getElementById('formatacao').value = '1-473-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '30':
        document.getElementById('formatacao').value = '30-CA-No';
        document.getElementById('numeroDigitos').value = '6 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '299':
        document.getElementById('formatacao').value = '299-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '31':
        document.getElementById('formatacao').value = '31-CA-No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '504':
        document.getElementById('formatacao').value = '504-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '852':
        document.getElementById('formatacao').value = '852-No';
        document.getElementById('numeroDigitos').value = '8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '36':
        document.getElementById('formatacao').value = '36-CA-No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '967':
        document.getElementById('formatacao').value = '967-CA-No.';
        document.getElementById('numeroDigitos').value = '4 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '91':
        document.getElementById('formatacao').value = '91-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '62':
        document.getElementById('formatacao').value = '62-CA-No';
        document.getElementById('numeroDigitos').value = '4 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '871':
        document.getElementById('formatacao').value = '-';
        document.getElementById('numeroDigitos').value = '-';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '874':
        document.getElementById('formatacao').value = '-';
        document.getElementById('numeroDigitos').value = '-';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '873':
        document.getElementById('formatacao').value = '-';
        document.getElementById('numeroDigitos').value = '-';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '872':
        document.getElementById('formatacao').value = '-';
        document.getElementById('numeroDigitos').value = '-';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '98':
        document.getElementById('formatacao').value = '98-CA-No';
        document.getElementById('numeroDigitos').value = '3 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '964':
        document.getElementById('formatacao').value = '964-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '353':
        document.getElementById('formatacao').value = '353-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '354':
        document.getElementById('formatacao').value = '354-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '972':
        document.getElementById('formatacao').value = '972-CA-No';
        document.getElementById('numeroDigitos').value = '6 a 9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '39':
        document.getElementById('formatacao').value = '39-No';
        document.getElementById('numeroDigitos').value = '6 a 10';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '381':
        document.getElementById('formatacao').value = '381-CA-No';
        document.getElementById('numeroDigitos').value = '4 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1876':
        document.getElementById('formatacao').value = '1-876-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '81':
        document.getElementById('formatacao').value = '81-CA-No';
        document.getElementById('numeroDigitos').value = '4 a 10';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '962':
        document.getElementById('formatacao').value = '962-No';
        document.getElementById('numeroDigitos').value = '4 a 9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '686':
        document.getElementById('formatacao').value = '686-No';
        document.getElementById('numeroDigitos').value = '5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '965':
        document.getElementById('formatacao').value = '965-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '856':
        document.getElementById('formatacao').value = '856-CA-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '266':
        document.getElementById('formatacao').value = '266-No';
        document.getElementById('numeroDigitos').value = '8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '371':
        document.getElementById('formatacao').value = '371-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '961':
        document.getElementById('formatacao').value = '961-CA-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '231':
        document.getElementById('formatacao').value = '231-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '218':
        document.getElementById('formatacao').value = '218-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '423':
        document.getElementById('formatacao').value = '423-No';
        document.getElementById('numeroDigitos').value = '7 a 9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '370':
        document.getElementById('formatacao').value = '370-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '352':
        document.getElementById('formatacao').value = '352-No';
        document.getElementById('numeroDigitos').value = '4 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '853':
        document.getElementById('formatacao').value = '853-No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '389':
        document.getElementById('formatacao').value = '389-CA-No';
        document.getElementById('numeroDigitos').value = '4 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '261':
        document.getElementById('formatacao').value = '261-20-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '351':
        document.getElementById('formatacao').value = '351-No';
        document.getElementById('numeroDigitos').value = '9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '60':
        document.getElementById('formatacao').value = '60-CA-No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '265':
        document.getElementById('formatacao').value = '265-No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '960':
        document.getElementById('formatacao').value = '960-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '223':
        document.getElementById('formatacao').value = '223-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '356':
        document.getElementById('formatacao').value = '356-No';
        document.getElementById('numeroDigitos').value = '8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1670':
        document.getElementById('formatacao').value = '1-670-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '52':
        document.getElementById('formatacao').value = '52-CA-No / 52-1-CA-No (Celular)';
        document.getElementById('numeroDigitos').value = '7 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '691':
        document.getElementById('formatacao').value = '691-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '838':
        document.getElementById('formatacao').value = '-';
        document.getElementById('numeroDigitos').value = '3';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '258':
        document.getElementById('formatacao').value = '258-CA-No';
        document.getElementById('numeroDigitos').value = '8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '373':
        document.getElementById('formatacao').value = '373-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '377':
        document.getElementById('formatacao').value = '377-No';
        document.getElementById('numeroDigitos').value = '8 a 9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '976':
        document.getElementById('formatacao').value = '976-CA-No';
        document.getElementById('numeroDigitos').value = '3 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1664':
        document.getElementById('formatacao').value = '1-664-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '264':
        document.getElementById('formatacao').value = '264-CA-No';
        document.getElementById('numeroDigitos').value = '4 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '674':
        document.getElementById('formatacao').value = '674-No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '977':
        document.getElementById('formatacao').value = '977-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1869':
        document.getElementById('formatacao').value = '1-869-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '505':
        document.getElementById('formatacao').value = '505-No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '227':
        document.getElementById('formatacao').value = '227-CA-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '234':
        document.getElementById('formatacao').value = '234-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '683':
        document.getElementById('formatacao').value = '683-No';
        document.getElementById('numeroDigitos').value = '4';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '672':
        document.getElementById('formatacao').value = '672-3-No';
        document.getElementById('numeroDigitos').value = '5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '47':
        document.getElementById('formatacao').value = '47-No';
        document.getElementById('numeroDigitos').value = '8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '687':
        document.getElementById('formatacao').value = '687-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '64':
        document.getElementById('formatacao').value = '64-CA-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '968':
        document.getElementById('formatacao').value = '968-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '680':
        document.getElementById('formatacao').value = '680-No';
        document.getElementById('numeroDigitos').value = '5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '970':
        document.getElementById('formatacao').value = '970-CA-No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '507':
        document.getElementById('formatacao').value = '507-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '675':
        document.getElementById('formatacao').value = '675-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '92':
        document.getElementById('formatacao').value = '92-CA-No';
        document.getElementById('numeroDigitos').value = '3 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '595':
        document.getElementById('formatacao').value = '595-CA-No';
        document.getElementById('numeroDigitos').value = '4 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '51':
        document.getElementById('formatacao').value = '51-CA-No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        break;

        case '48':
        document.getElementById('formatacao').value = '48-CA-No';
        document.getElementById('numeroDigitos').value = '4 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1787':
        document.getElementById('formatacao').value = '1-787-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '351':
        document.getElementById('formatacao').value = '351-No';
        document.getElementById('numeroDigitos').value = '9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '974':
        document.getElementById('formatacao').value = '974-No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '254':
        document.getElementById('formatacao').value = '254-Ca-No';
        document.getElementById('numeroDigitos').value = '4 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '996':
        document.getElementById('formatacao').value = '996-Ca-No';
        document.getElementById('numeroDigitos').value = '5 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '44':
        document.getElementById('formatacao').value = '44-Ca-No';
        document.getElementById('numeroDigitos').value = '3 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '236':
        document.getElementById('formatacao').value = '236-Ca-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '262':
        document.getElementById('formatacao').value = '262-No';
        document.getElementById('numeroDigitos').value = '9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;
       
        case '230':
        document.getElementById('formatacao').value = '230-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '40':
        document.getElementById('formatacao').value = '40-Ca-No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '250':
        document.getElementById('formatacao').value = '250-Ca-No';
        document.getElementById('numeroDigitos').value = '5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '7':
        document.getElementById('formatacao').value = '7-Ca-No';
        document.getElementById('numeroDigitos').value = '3 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '833':
        document.getElementById('formatacao').value = '';
        document.getElementById('numeroDigitos').value = '5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '677':
        document.getElementById('formatacao').value = '677-No';
        document.getElementById('numeroDigitos').value = '5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '684':
        document.getElementById('formatacao').value = '684-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '685':
        document.getElementById('formatacao').value = '685-No';
        document.getElementById('numeroDigitos').value = '5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '378':
        document.getElementById('formatacao').value = '378-0549-No';
        document.getElementById('numeroDigitos').value = '10 a 12';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '290':
        document.getElementById('formatacao').value = '290-No';
        document.getElementById('numeroDigitos').value = '4';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1758':
        document.getElementById('formatacao').value = '1-758-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1869':
        document.getElementById('formatacao').value = '1-869-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '508':
        document.getElementById('formatacao').value = '508-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '239':
        document.getElementById('formatacao').value = '239-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1784':
        document.getElementById('formatacao').value = '1-784-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '221':
        document.getElementById('formatacao').value = '221-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '232':
        document.getElementById('formatacao').value = '232-CA-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';

        break;
        case '-':
        document.getElementById('formatacao').value = '';
        document.getElementById('numeroDigitos').value = '';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '248':
        document.getElementById('formatacao').value = '248-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '963':
        document.getElementById('formatacao').value = '963-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '252':
        document.getElementById('formatacao').value = '252-CA-No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '94':
        document.getElementById('formatacao').value = '94-CA-No';
        document.getElementById('numeroDigitos').value = '3 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '268':
        document.getElementById('formatacao').value = '268-No';
        document.getElementById('numeroDigitos').value = '5 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '249':
        document.getElementById('formatacao').value = '249-CA-No';
        document.getElementById('numeroDigitos').value = '4 a 5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '46':
        document.getElementById('formatacao').value = '46-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '41':
        document.getElementById('formatacao').value = '41-CA-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '597':
        document.getElementById('formatacao').value = '597-No';
        document.getElementById('numeroDigitos').value = '3 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '992':
        document.getElementById('formatacao').value = '992-CA-No';
        document.getElementById('numeroDigitos').value = '4 a 9';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '66':
        document.getElementById('formatacao').value = '66-CA-No';
        document.getElementById('numeroDigitos').value = '6 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '689':
        document.getElementById('formatacao').value = '689-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '255':
        document.getElementById('formatacao').value = '255-CA-No';
        document.getElementById('numeroDigitos').value = '4 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '420':
        document.getElementById('formatacao').value = '420-CA-No';
        document.getElementById('numeroDigitos').value = '6 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '672':
        document.getElementById('formatacao').value = '672-CA_No';
        document.getElementById('numeroDigitos').value = '5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '670':
        document.getElementById('formatacao').value = '670-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '228':
        document.getElementById('formatacao').value = '228-CA';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '676':
        document.getElementById('formatacao').value = '676-No';
        document.getElementById('numeroDigitos').value = '5 a 8';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '690':
        document.getElementById('formatacao').value = 'N/A';
        document.getElementById('numeroDigitos').value = '4';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1284':
        document.getElementById('formatacao').value = '1-284-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '27':
        document.getElementById('formatacao').value = '27-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 14';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1868':
        document.getElementById('formatacao').value = '1-868-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '216':
        document.getElementById('formatacao').value = '216-CA-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '993':
        document.getElementById('formatacao').value = '993-CA-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1649':
        document.getElementById('formatacao').value = '1-649-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '90':
        document.getElementById('formatacao').value = '90-CA-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';

        break;
        case '688':
        document.getElementById('formatacao').value = '688-CA-No';
        document.getElementById('numeroDigitos').value = '5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '380':
        document.getElementById('formatacao').value = '380-CA-No';
        document.getElementById('numeroDigitos').value = '4 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '256':
        document.getElementById('formatacao').value = '256-CA-No';
        document.getElementById('numeroDigitos').value = '4 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '95':
        document.getElementById('formatacao').value = '95-CA-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '598':
        document.getElementById('formatacao').value = '598-CA-No';
        document.getElementById('numeroDigitos').value = ' 4 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '998':
        document.getElementById('formatacao').value = '998-CA-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '678':
        document.getElementById('formatacao').value = '678-No';
        document.getElementById('numeroDigitos').value = '5';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '39':
        document.getElementById('formatacao').value = '39-No';
        document.getElementById('numeroDigitos').value = '6 a 10';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '27':
        document.getElementById('formatacao').value = '27-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 14';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '58':
        document.getElementById('formatacao').value = '58-CA-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '84':
        document.getElementById('formatacao').value = '84-CA-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '1340':
        document.getElementById('formatacao').value = '1-340-No';
        document.getElementById('numeroDigitos').value = '7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '839':
        document.getElementById('formatacao').value = 'N/A';
        document.getElementById('numeroDigitos').value = 'N/A';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '681':
        document.getElementById('formatacao').value = '681-No';
        document.getElementById('numeroDigitos').value = '6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '243':
        document.getElementById('formatacao').value = '243-CA-No';
        document.getElementById('numeroDigitos').value = '5 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '260':
        document.getElementById('formatacao').value = '260-CA-No';
        document.getElementById('numeroDigitos').value = '4 a 6';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '255':
        document.getElementById('formatacao').value = '255-CA-No';
        document.getElementById('numeroDigitos').value = '4 a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;

        case '263':
        document.getElementById('formatacao').value = '263-CA-No';
        document.getElementById('numeroDigitos').value = '3  a 7';
        document.getElementById('restricoes1').value = 'DTOUR';
        break;
      default:
        document.getElementById('formatacao').value = '';
        document.getElementById('numeroDigitos').value = '';
        document.getElementById('restricoes1').value = '';
    }
  }
