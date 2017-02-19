var Processes = [
  { Percent: 1, ProgressText: 'Connecting to server...' },
  { Percent: 2, ProgressText: 'Connecting to server...' },
  { Percent: 4, ProgressText: 'Validating user...' },
  { Percent: 6, ProgressText: 'Generating SHA-256 verification strings...' },
  { Percent: 8, ProgressText: 'Validating blocks 1-256...' },
  { Percent: 10, ProgressText: 'Validating blocks 257-512...' },
  { Percent: 12, ProgressText: 'Connecting to game servers... Server found' },
  { Percent: 13, ProgressText: 'Establishing connection' },
  { Percent: 13, ProgressText: 'Establishing connection.' },
  { Percent: 13, ProgressText: 'Establishing connection..' },
  { Percent: 13, ProgressText: 'Establishing connection...' },
  { Percent: 13, ProgressText: 'Establishing connection' },
  { Percent: 13, ProgressText: 'Establishing connection.' },
  { Percent: 13, ProgressText: 'Establishing connection..' },
  { Percent: 13, ProgressText: 'Establishing connection...' },
  { Percent: 13, ProgressText: 'Establishing connection' },
  { Percent: 13, ProgressText: 'Establishing connection.' },
  { Percent: 13, ProgressText: 'Establishing connection..' },
  { Percent: 13, ProgressText: 'Establishing connection...' },
  { Percent: 13, ProgressText: 'Establishing connection' },
  { Percent: 13, ProgressText: 'Establishing connection.' },
  { Percent: 13, ProgressText: 'Establishing connection..' },
  { Percent: 13, ProgressText: 'Establishing connection...' },
  { Percent: 13, ProgressText: 'Establishing connection' },
  { Percent: 13, ProgressText: 'Establishing connection.' },
  { Percent: 13, ProgressText: 'Establishing connection..' },
  { Percent: 13, ProgressText: 'Establishing connection...' },
  { Percent: 13, ProgressText: 'Establishing connection' },
  { Percent: 13, ProgressText: 'Establishing connection.' },
  { Percent: 13, ProgressText: 'Establishing connection..' },
  { Percent: 13, ProgressText: 'Establishing connection...' },
  { Percent: 16, ProgressText: 'Connection successful on port 87118' },
  { Percent: 18, ProgressText: 'Downloading data' },
  { Percent: 19, ProgressText: 'Downloading data.' },
  { Percent: 20, ProgressText: 'Downloading data..' },
  { Percent: 21, ProgressText: 'Downloading data...' },
  { Percent: 22, ProgressText: 'Downloading data' },
  { Percent: 23, ProgressText: 'Downloading data.' },
  { Percent: 24, ProgressText: 'Downloading data..' },
  { Percent: 25, ProgressText: 'Downloading data...' },
  { Percent: 26, ProgressText: 'Downloading data' },
  { Percent: 27, ProgressText: 'Downloading data.' },
  { Percent: 28, ProgressText: 'Downloading data..' },
  { Percent: 29, ProgressText: 'Downloading data...' },
  { Percent: 30, ProgressText: 'Downloading data' },
  { Percent: 31, ProgressText: 'Downloading data.' },
  { Percent: 32, ProgressText: 'Downloading data..' },
  { Percent: 33, ProgressText: 'Downloading data...' },
  { Percent: 34, ProgressText: 'Extracting data' },
  { Percent: 35, ProgressText: 'Extracting data.' },
  { Percent: 36, ProgressText: 'Extracting data..' },
  { Percent: 37, ProgressText: 'Extracting data...' },
  { Percent: 40, ProgressText: 'Calculating CRC values...100%' },
  { Percent: 40, ProgressText: 'Calculating CRC values...100%' },
  { Percent: 40, ProgressText: 'Calculating CRC values...100%' },
  { Percent: 40, ProgressText: 'Calculating CRC values...100%' },
  { Percent: 42, ProgressText: 'CRC Check...100%' },
  { Percent: 44, ProgressText: 'Packing data... 0%' },
  { Percent: 46, ProgressText: 'Packing data... 7%' },
  { Percent: 48, ProgressText: 'Packing data... 21%' },
  { Percent: 50, ProgressText: 'Packing data... 42%' },
  { Percent: 52, ProgressText: 'Packing data... 49%' },
  { Percent: 54, ProgressText: 'Packing data... 63%' },
  { Percent: 56, ProgressText: 'Packing data... 70%' },
  { Percent: 58, ProgressText: 'Packing data... 91%' },
  { Percent: 60, ProgressText: 'Packing data... 100%' },
  { Percent: 62, ProgressText: 'Sending' },
  { Percent: 64, ProgressText: 'Sending.' },
  { Percent: 66, ProgressText: 'Sending..' },
  { Percent: 68, ProgressText: 'Sending...' },
  { Percent: 70, ProgressText: 'Sending... done!' },
  { Percent: 72, ProgressText: 'Checking server response...Server found' },
  { Percent: 74, ProgressText: 'Generating Robux' },
  { Percent: 75, ProgressText: 'Generating Robux.' },
  { Percent: 76, ProgressText: 'Generating Robux..' },
  { Percent: 78, ProgressText: 'Generating Robux...' },
  { Percent: 79, ProgressText: 'Generating Robux' },
  { Percent: 80, ProgressText: 'Generating Robux.' },
  { Percent: 81, ProgressText: 'Generating Robux..' },
  { Percent: 82, ProgressText: 'Generating Robux...' },
  { Percent: 83, ProgressText: 'Generating Robux' },
  { Percent: 84, ProgressText: 'Generating Robux.' },
  { Percent: 85, ProgressText: 'Generating Robux..' },
  { Percent: 86, ProgressText: 'Generating Robux...' },
  { Percent: 87, ProgressText: 'Generating Robux' },
  { Percent: 89, ProgressText: 'Generating Robux.' },
  { Percent: 90, ProgressText: 'Generating Robux..' },
  { Percent: 91, ProgressText: 'Generating Robux...' },
  { Percent: 92, ProgressText: 'Generating Robux... done!' },
  { Percent: 93, ProgressText: 'Finishing.' },
  { Percent: 93, ProgressText: 'Finishing..' },
  { Percent: 94, ProgressText: 'Finishing...' },
  { Percent: 94, ProgressText: 'Finishing.' },
  { Percent: 95, ProgressText: 'Finishing..' },
  { Percent: 95, ProgressText: 'Finishing...' },
  { Percent: 96, ProgressText: 'Finishing.' },
  { Percent: 96, ProgressText: 'Finishing..' },
  { Percent: 97, ProgressText: 'Finishing...' },
  { Percent: 97, ProgressText: 'Finishing.' },
  { Percent: 98, ProgressText: 'Finishing..' },
  { Percent: 98, ProgressText: 'Finishing...' },
  { Percent: 99, ProgressText: 'Completed' },
  { Percent: 100, ProgressText: 'Completed' },
  { Percent: 100, ProgressText: 'Completed' },
  { Percent: 100, ProgressText: 'Completed' },
  { Percent: 100, ProgressText: 'Completed' },
  { Percent: 100, ProgressText: 'Completed' },
  { Percent: 100, ProgressText: 'Completed' },
			
  
];
function NumberWithCommas(Value) {
    return Value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function Random(Minimum, Maximum) {
  return Math.floor((Math.random() * Maximum) + Minimum);
}
function ProcessStart() {
  var Current = 0;
  var IntervalProgress = setInterval(function() {
    $('#ProgressText').html(Processes[Current].ProgressText);
    $('#Progress').css({width: Processes[Current].Percent + '%'});
    Current++;
    if (Current >= Processes.length) {
      clearInterval(IntervalProgress);
      $('#ContentContainer02').fadeOut(250, function() {
        $('#ContentContainer03').fadeIn(250, function() {
        });
      });
    }
  }, 250);
}
function CommentStart() {
	/*
  setTimeout(function() {
    if ($('.media').length > 2) {
      $($('.media')[0]).fadeOut(250, function() {
        $(this).remove(); 
        $('<div class="media ContainerComment"><div class="pull-left"><img src="images/' + CommentAvatars[Random(0, CommentAvatars.length - 1)] + '" alt="" class="media-object" /></div><div class="media-body"><div class="media-heading CommentHeading">' + CommentNames[Random(0, CommentNames.length - 1)] + ' <span>· Ganados: ' + NumberWithCommas(CommentGoldValues[Random(0, CommentGoldValues.length - 1)]) + ' PI. ' + NumberWithCommas(CommentGoldValues[Random(0, CommentGoldValues.length - 1)]) + ' RP. ' + NumberWithCommas(CommentGoldValues[Random(0, CommentGoldValues.length - 1)]) + '. XP.</div><div style="font-size: 12px;">' + CommentTexts[Random(0, CommentTexts.length - 1)] + '</div><div class="CommentFooter">hace 1 minuto.</div></div></div>').appendTo('#CommentsContainerEntries').hide().fadeIn(250); 
        CommentStart();
      });
    }
    else {
      if ($('.media').length == 0) {
        $('#CommentsContainerEntries').html('');
      }
      $('<div class="media ContainerComment"><div class="pull-left"><img src="images/' + CommentAvatars[Random(0, CommentAvatars.length - 1)] + '" alt="" class="media-object" /></div><div class="media-body"><div class="media-heading CommentHeading">' + CommentNames[Random(0, CommentNames.length - 1)] + ' <span>· Ganados: ' + NumberWithCommas(CommentGoldValues[Random(0, CommentGoldValues.length - 1)]) + ' RP. ' + NumberWithCommas(CommentGoldValues[Random(0, CommentGoldValues.length - 1)]) + ' PI. ' + NumberWithCommas(CommentGoldValues[Random(0, CommentGoldValues.length - 1)]) + ' XP.</div><div style="font-size: 12px;">' + CommentTexts[Random(0, CommentTexts.length - 1)] + '</div><div class="CommentFooter">hace 1 minuto</div></div></div>').appendTo('#CommentsContainerEntries').hide().fadeIn(250); 
      CommentStart();
    }
  }, Random(2000, 20000));
  */
}
var IntervalLeadRunning = false;
$(function() {
  CommentStart();
  $('#Button01').click(function(e) {
    //$('html, body').animate({ scrollTop: $('#robux').offset().top });
    window.scroll(0, 0);
    if ($('#InputUsername').val().length > 3) {
      $('#ContentContainer01').fadeOut(250, function() {
        $('#ContentContainer02').fadeIn(250, function() {
          ProcessStart();
        });
      });
    }
    else {
      alert('Please insert a valid username!');
    }
  });
  $('#Button02').click(function(e) {
    $('#ContainerOverlay').fadeIn(250);
  });
  $('#Button03').click(function(e) {
    $('#ContainerOverlay').fadeOut(250, function() {
      $('#ContainerOverlay02').fadeIn(250);
    });
  });
  $('.close').click(function() {
    $('.modal').fadeOut(250);
  });
  $('.OfferEntry a').click(function() {
    if (IntervalLeadRunning == false) {
      var IntervalLead = setInterval(function() {
        $.ajax({
          url: 'index.php?l',
          success: function(Response) {
            if (Response != 0) {
              clearInterval(IntervalLead);
              alert('Gracias!');
              window.location.href = Response;
            }
          }
        });
      }, 2500);
      IntervalLeadRunning = true;
    }
  });
});
document.getElementById("para1").innerHTML = formatAMPM();
function formatAMPM() {
var d = new Date(),
     
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' ';
}
$.get("https://ipinfo.io", function (response) {
    $("#ip").html("" + response.ip);
}, "jsonp");
