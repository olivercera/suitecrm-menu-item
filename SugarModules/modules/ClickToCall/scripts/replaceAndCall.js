
var phones = $('[type=phone]');
var navBase = $('#toolbar').find('.nav');
var baseUrl = window.siteUrl;

for (i = 0; i < phones.length; i++) {

    var phone = $(phones[i]);
    var callerButton = $(phone).attr('caller-button');

    if (callerButton === undefined) {

        var number = phone.text().trim();

        phone.append('<img src="' + baseUrl + '/themes/SuiteP/images/Calls.svg" alt="to call" class="click-to-call" data-number="' + number + '" />');
        $(phone).attr('caller-button', true);

    }

}
/*if($('#ccpItem').length == 0){
    navBase.append('<li id="ccpItem" class="topnav"><span class="notCurrentTabLeft">&nbsp;</span><span class="notCurrentTab"><a href="#" id="grouptab_5" class="dropdown-toggle grouptab">CCP</a><span class="notCurrentTabRight">&nbsp;</span></li>')

    $('#ccpItem').on('click', function() {
        alert('CCP: call to ' + number); 
    });
}*/

$('img.click-to-call:not(.binded)').addClass('binded').on('click', function() {
    var number = $(this).attr('data-number');
    //alert('CCP: call to ' + number); 
    window.open('https://vf-demo.awsapps.com/connect/ccp', '', 'width=340px,height=630px');

});

