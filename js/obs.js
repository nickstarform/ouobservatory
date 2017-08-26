$(document).ready(function() {
    $.simpleObs({
        success: function(obs) {
            //Don't forget to include the jquery.SimpleObs.js plugin.
            html += '<div class="flex-containerimg container"><ul>';
            html += '<li><a href="'+obs.star1[1]+'" target="_blank"> <img src="' + obs.star1[2]+'" alt="' + obs.star1[0] + '" width="142px" height="142px" </a></li>';
            html += '<li><a href="'+obs.star2[1]+'" target="_blank"> <img src="' + obs.star2[2]+'" alt="' + obs.star2[0] + '" width="142px" height="142px" </a></li>';
            html += '<li><a href="'+obs.star3[1]+'" target="_blank"> <img src="' + obs.star3[2]+'" alt="' + obs.star3[0] + '" width="142px" height="142px" </a></li>';
            html += '<li><a href="'+obs.star4[1]+'" target="_blank"> <img src="' + obs.star4[2]+'" alt="' + obs.star4[0] + '" width="142px" height="142px" </a></li>';
            html += '</ul></div>'
            $("#obs").html(html);
        },
        error: function(error) {
            $("#obs").html('<p>'+error+'</p>');
        }
    });
});
