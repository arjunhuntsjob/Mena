var pageIndex = 1;
var pageSize = 10;
var totalRowCounts = "";
$(document).ready(function () {
    //GetAllJobs(pageIndex, pageSize);
});

function BindGrid(data) {
    var defaultHtml = "";
    var innerHtml = "";
    defaultHtml += "<li class=\"hnameback jobsdetails\">";
    defaultHtml += "<span class=\"jobTitle\">Job Title</span>";
    defaultHtml += "<span class=\"qualification\">Qualification</span>";
    defaultHtml += "<span class=\"location\">Location</span>";
    //defaultHtml += "<span class=\"company\">Company</span>";
    defaultHtml += "<span class=\"experience\">Experience</span>";
    defaultHtml += "<span class=\"salary\">Salary</span>";
    defaultHtml += "<span class=\"apply\">Apply</span>";
    innerHtml += "</li>";
    if (data == '') {
        innerHtml += '<span class="encf">No Job found</span>';
        $('.csmpaging').hide();
    }
    else {
        $.each(data, function (index, value) {

            innerHtml += "<li style=\"cursor:auto;\" class=\"jobsrow\" key=\"" + value.Id + "\" Wlkey=\"" + value.JobLink + "\" Rckey=\"" + value.RecordCount + "\">";
            if (value.IsHotJob == true) {
                innerHtml += "<span class=\"jobTitle record\"><img class=\"hotjob cp\" src=\"./img/icon1.gif\" alt=\"Hot Job\" />&nbsp;" + value.JobTitel + "</span>";
            }
            else {
                innerHtml += "<span class=\"jobTitle record\">" + value.JobTitel + "</span>";
            }
            innerHtml += "<span class=\"qualification record\">" + value.Qualification + "</span>";
            innerHtml += "<span class=\"location record\">" + value.Location + "</span>";
            //innerHtml += "<span class=\"company record\">" + "Company Confidential" + "</span>";
            innerHtml += "<span class=\"experience record\">" + value.Experience + "</span>";
            innerHtml += "<span class=\"salary record\">" + value.Salary + "</span>";
            innerHtml += "<span class=\"apply record\"><img class=\"applyJobs cp\" src=\"./img/applynowgreen1.jpg\" alt=\"Apply\" /></span></tbody>";
            innerHtml += "</li>";
        });
        $('.csmpaging').show();
    }
    innerHtml = defaultHtml + innerHtml;
    $('.tskcontent').html(innerHtml);

    ApplyJobsFormBinding();
}

function ApplyJobsFormBinding() {
    $('.applyJobs').off('click');
    $(".applyJobs").click(function () {
        var WlkeyID = $(this).parent().parent().attr("Wlkey");
        $('.tskcontent li').removeClass('selectedrow');
        $(this).parent().parent().addClass('selectedrow');
        WlkeyID = WlkeyID.replace(/\(|\)/g, '');
        var wesiteLink = hdnWebsiteLink.val(WlkeyID);
        var wesiteLink = $(this).attr('href');
        window.open(hdnWebsiteLink.val(), '_blank');

    });
}


function JobsPagingBinding(pageIndex, pageSize, totalRowCounts) {
    $(".csmpaging").pagination(totalRowCounts, {
        items_per_page: pageSize,
        current_page: pageIndex,
        callback: PageSelectCallback
    });
}

function PageSelectCallback(page_index, jq) {
    GetAllJobs(page_index + 1, pageSize);
    ++page_index;
    pageIndex = page_index;
}

function GetAllJobs(pageIndex, pageSize) {
    $.ajax(
{
    crossDomain: true,
    contentType: "application/json; charset=utf-8",
    url: "http://www.jobs4hunt.com/WebServices/AgencyJobsService.asmx/GetAllExistingJobs",
    data: { paramPageIndex: pageIndex, paramPageSize: pageSize }, // example of parameter being passed
    dataType: "jsonp",
    success: function (data) {
        console.log(pageIndex, pageSize);
        BindGrid(data);
        totalRowCounts = $('.jobsrow').attr("Rckey");
        JobsPagingBinding(pageIndex - 1, pageSize, totalRowCounts);
        return true;
    },
    failure: function (data) {
        alert('There is problem in executing your request.');
        return false;
    },
});
}
