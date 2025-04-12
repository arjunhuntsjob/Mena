$(document).ready(function () {
   
    PopUpDilog();
    Minimize();
    ClearContent();
    SubmitClick();
    RequirementClick();
    SubscribeClick();
    ValidationForNumber();
});

function SubmitClick() {
    $('.btnSubmit').click(function () {
        $('.spnerr').removeClass("db");
        $('.spnerr').addClass("dn");
        $('.spnsuc').removeClass("db");
        $('.spnsuc').addClass("dn");
        var regName = /^([a-zA-Z\-.]+\s)*[a-zA-Z\-.]+$/;
        if ($.trim($(".txtName").val()) == "") {
            $('.spnerrr').html("Please enter name.");
            $('.spnerrr').removeClass("dn");
            $('.spnerrr').addClass("db");
            $('.spnsucc').removeClass("db");
            $('.spnsucc').addClass("dn");
            $(".txtName").focus();
            return false;
        }
        if ($.trim($(".txtName").val()) != "") {
            var name = $.trim($(".txtName").val());
            if (!regName.test(name)) {
                $('.spnerrr').html("Enter a valid name. Use only characters A-Z,</br>a-z, ' - ' and '.'");
                $('.spnerrr').removeClass("dn");
                $('.spnerrr').addClass("db");
                $('.spnsucc').removeClass("db");
                $('.spnsucc').addClass("dn");
                $(".txtName").focus();
                return false;
            }
        }
        if ($.trim($(".txtEmailId").val()) == "") {
            $('.spnerrr').html("Please enter email.");
            $('.spnerrr').removeClass("dn");
            $('.spnerrr').addClass("db");
            $('.spnsucc').removeClass("db");
            $('.spnsucc').addClass("dn");
            $(".txtEmailId").focus();
            return false;
        }
        if (($.trim($('.txtEmailId').val()) != "") && (!ValidateEmail($.trim($('.txtEmailId').val())))) {
            $('.spnerrr').html("Please enter valid email id.");
            $('.spnerrr').removeClass("dn");
            $('.spnerrr').addClass("db");
            $('.spnsucc').removeClass("db");
            $('.spnsucc').addClass("dn");
            $('.txtEmailId').focus();
            return false;
        }
        if ($.trim($('.txtPhone').val()) == "") {
            $('.spnerrr').html("Please enter phone number.");
            $('.spnerrr').removeClass("dn");
            $('.spnerrr').addClass("db");
            $('.spnsucc').removeClass("db");
            $('.spnsucc').addClass("dn");
            $(".txtPhone").focus();
            return false;
        }
        if ($.trim($(".txtPhone").val()) != "" && $.trim($('.txtPhone').val()).length != 10) {
            $('.spnerrr').html("Enter a valid 10 digit Phone number");
            $('.spnerrr').removeClass("dn");
            $('.spnerrr').addClass("db");
            $('.spnsucc').removeClass("db");
            $('.spnsucc').addClass("dn");
            $(".txtPhone").focus();
            return false;
        }
        if ($.trim($('.message').val()) == "" && $.trim($('.message').val()).length <= 2000) {
            $('.spnerrr').html("Please enter your message.");
            $('.spnerrr').removeClass("dn");
            $('.spnerrr').addClass("db");
            $('.spnsucc').removeClass("db");
            $('.spnsucc').addClass("dn");
            $(".message").focus();
            return false;
        }
        SendMail();
    });
}

function SendMail() {
    ClearContent();
    $('.spnsucc').html("Message has been successfully sent.");
    $('.spnerrr').removeClass("db");
    $('.spnerrr').addClass("dn");
    $('.spnsucc').removeClass("dn");
    $('.spnsucc').addClass("db");
    //var name = $(".txtName").val();
    //var email = $(".txtEmailId").val();
    //var phone = $(".txtPhone").val();
    //var message = $(".message").val();
    //$.ajax({
    //    url: "../Code/SendMailService.asmx/SendMail",
    //    dataType: 'json',
    //    contentType: "application/json",
    //    data: JSON.stringify({ paramName: name, paramEmail: email, paramPhone: phone, paramMessage: message }),
    //    type: 'POST',
    //    success: function (data) {
    //        ClearContent();
    //        $('.spnsucc').html("Message has been successfully sent.");
    //        $('.spnerrr').removeClass("db");
    //        $('.spnerrr').addClass("dn");
    //        $('.spnsucc').removeClass("dn");
    //        $('.spnsucc').addClass("db");
    //    }
    //});
}


function RequirementClick() {
    $('.btndSubmit').click(function () {
        $('.spnerr').removeClass("db");
        $('.spnerr').addClass("dn");
        $('.spnsuc').removeClass("db");
        $('.spnsuc').addClass("dn");
        $('.spnerrr').addClass("dn");
        $('.spnerrr').removeClass("db");
        $('.spnsucc').addClass("dn");
        $('.spnsucc').removeClass("db");

        if ($.trim($('.discribemessage').val()) == "") {
            $('.spnerror').html("Please enter your message.");
            $('.spnerror').removeClass("dn");
            $('.spnerror').addClass("db");
            $(".discribemessage").focus();
            return false;
        }
        var regName = /^([a-zA-Z\-.]+\s)*[a-zA-Z\-.]+$/;
        if ($.trim($(".txtdName").val()) == "") {
            $('.spnerror').html("Please enter name.");
            $('.spnerror').removeClass("dn");
            $('.spnerror').addClass("db");
            $(".txtdName").focus();
            return false;
        }
        if ($.trim($(".txtdName").val()) != "") {
            var name = $.trim($(".txtdName").val());
            if (!regName.test(name)) {
                $('.spnerror').html("Enter a valid name. Use only characters A-Z,</br>a-z, ' - ' and '.'");
                $('.spnerror').removeClass("dn");
                $('.spnerror').addClass("db");
                $(".txtdName").focus();
                return false;
            }
        }
        if ($.trim($(".txtdEmail").val()) == "") {
            $('.spnerror').html("Please enter email.");
            $('.spnerror').removeClass("dn");
            $('.spnerror').addClass("db");
            $(".txtdEmail").focus();
            return false;
        }
        if (($.trim($('.txtdEmail').val()) != "") && (!ValidateEmail($.trim($('.txtdEmail').val())))) {
            $('.spnerror').html("Please enter valid email id.");
            $('.spnerror').removeClass("dn");
            $('.spnerror').addClass("db");
            $('.txtdEmail').focus();
            return false;
        }
        if ($.trim($('.txtdPhone').val()) == "") {
            $('.spnerror').html("Please enter phone number.");
            $('.spnerror').removeClass("dn");
            $('.spnerror').addClass("db");
            $(".txtdPhone").focus();
            return false;
        }
        if ($.trim($(".txtdPhone").val()) != "" && $.trim($('.txtdPhone').val()).length != 10) {
            $('.spnerror').html("Enter a valid 10 digit Phone number");
            $('.spnerror').removeClass("dn");
            $('.spnerror').addClass("db");
            $(".txtdPhone").focus();
            return false;
        }

        RequirementMail();
    });
}

function RequirementMail() {
    var name = $(".txtdName").val();
    var phone = $(".txtdPhone").val();
    var message = $(".discribemessage").val();
    var mail = $(".txtdEmail").val();
    $.ajax({
        url: "../Code/SendMailService.asmx/sendRequirementMail",
        dataType: 'json',
        contentType: "application/json",
        data: JSON.stringify({ paramName: name,paramEmail:mail, paramPhone: phone, paramMessage: message }),
        type: 'POST',
        success: function (data) {
            ClearContent();
            $('.spnerror').removeClass("db");
            $('.spnerror').addClass("dn");
            $('.describediv').addClass("dn");
            $(".checkCircle").addClass("db");
            setTimeout(function () {
                $('#footerpopup').hide();
            }, 3000);
        }
    });
}
$(".ebrocher").hover(function () {
    $(".ebrocherhover").show();
    $(".ebrocher").hide();
});
$(".ebrocherhover").mouseleave(function () {
    $(".ebrocherhover").hide();
    $(".ebrocher").show();
});

function SubscribeClick() {
    $('.btnSubscribe').click(function () {
        $('.spnerrr').addClass("dn");
        $('.spnerrr').removeClass("db");
        $('.spnsucc').addClass("dn");
        $('.spnsucc').removeClass("db");
        if ($.trim($(".txtEmail").val()) == "") {
            $('.spnerr').html("Please enter email address.");
            $('.spnerr').removeClass("dn");
            $('.spnerr').addClass("db");
            $('.spnsuc').removeClass("db");
            $('.spnsuc').addClass("dn");
            $(".txtEmail").focus();
            return false;
        }
        if (($.trim($('.txtEmail').val()) != "") && (!ValidateEmail($.trim($('.txtEmail').val())))) {
            $('.spnerr').html("Please enter valid email address.");
            $('.spnerr').removeClass("dn");
            $('.spnerr').addClass("db");
            $('.spnsuc').removeClass("db");
            $('.spnsuc').addClass("dn");
            $('.txtEmail').focus();
            return false;
        }
        SendSubscribeMail();
    });
}
function ValidateEmail(emailid) {
    var filter = /^((\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*?)\s*;?\s*)+/;
    if (filter.test(emailid)) {
        return true;
    }
    else {
        return false;
    }
}
function ValidationForNumber() {
    $(".txtPhone").keydown(function (event) {
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
            ((event.keyCode == 65 || event.keyCode == 67 || event.keyCode == 86 || event.keyCode == 88) && event.ctrlKey === true) ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        }
        else {
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
}
function SendSubscribeMail() {
    $(".txtEmail").val("");
    $('.spnsuc').html("Email ID has been subscribed successfully.");
    $('.spnerr').removeClass("db");
    $('.spnerr').addClass("dn");
    $('.spnsuc').removeClass("dn");
    $('.spnsuc').addClass("db");
    //var email = $(".txtEmail").val();
    //$.ajax({
    //    url: "../Code/SendMailService.asmx/sendSubscribeMail",
    //    dataType: 'json',
    //    contentType: "application/json",
    //    data: JSON.stringify({ paramEmail: email }),
    //    type: 'POST',
    //    success: function (data) {
    //        $(".txtEmail").val("");
    //        $('.spnsuc').html("Email ID has been subscribed successfully.");
    //        $('.spnerr').removeClass("db");
    //        $('.spnerr').addClass("dn");
    //        $('.spnsuc').removeClass("dn");
    //        $('.spnsuc').addClass("db");

    //    }
    //});
}
function ClearContent() {
    $(".txtdName").val("");
    $(".txtdPhone").val("");
    $(".discribemessage").val("");
    $(".txtEmail").val("");
    $(".txtName").val("");
    $(".txtEmailId").val("");
    $(".txtdEmail").val("");
    $(".txtPhone").val("");
    $(".message").val("");
    $(".spnsuc").val("");
    $(".spnerr").val("");
    $(".spnsucc").val("");
    $(".spnerrr").val("");
}

function PopUpDilog() {
    var distanceTop = $(window).height();
    var didScroll;
    var triggered_times = 0;
    $(window).scroll(function (event) {
        if ($(window).scrollTop() > distanceTop && triggered_times == 0) {
            $("#footer").slideUp();
            didScroll = true;
        }
    });
    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 200);
    function hasScrolled() {
        $("#footerpopup").dialog({
            closeOnEscape: false,
            open: function (event, ui) {
                $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
                $('.minmaxCon').removeClass("db");
                $('.minmaxCon').addClass("dn");
                triggered_times = 1;
            }
        });

    }
}
function Minimize() {
    $(".modalMinimize").on("click", function () {
        $('#footerpopup').hide();
        $('.minmaxCon').removeClass("dn");
        $('.minmaxCon').addClass("db");
    });
    $(".maxico").on("click", function () {
        $('#footerpopup').show();
        $('.minmaxCon').removeClass("db");
        $('.minmaxCon').addClass("dn");
    });

}