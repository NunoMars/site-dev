var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  firstGrandPyMessage();
});


function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function grandPyMessage(message) {
  $('.message.loading').remove();
  $('<div class="message new"><figure class="avatar"><img src= "../static/img/voyante.jpg"/></figure>' + message + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  updateScrollbar();
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    $('<div class="checkmark-sent-delivered">&check;</div>').appendTo($('.message:last'));
    $('<div class="checkmark-read">&check;</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  escapeHtml(msg);
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  $('<div class="message loading new"><figure class="avatar"><img src="../static/img/voyante.jpg"/></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  getMessageGrandPy(msg);
};

function escapeHtml(msg) {
  return msg
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;");
};

function getMessageGrandPy(msg) {  
  $.ajax({
    type : 'POST',
    url : '/clairvoyante',
    dataType: "json",
    data : {
      csrfmiddlewaretoken: "{{ csrf_token }}",
      messageInput : msg,
    },
    success: function(data) {
      mapGrandPyMessages(data.messages, data.tag);
    },
  });
};

var id_tags = Array();
function mapGrandPyMessages(messages,tag) {
  if(tag==="ups") {
    grandPyMessage(messages[0]);
    grandPyMessage(messages[1]);
    grandPyMessage(messages[2]);
    grandPyMessage(messages[3]);
  } else {
    if(id_tags.includes(tag)){
      var message_ups = "Petit coquin, a faire des blagues a PaPy.., Cherche plus haut dans la conversation je te l'ai déja trouvé!! Ha les jeuneaux...Revenons a nos moutons.. Que veux-tu que je te trouve encore?"
      grandPyMessage(message_ups);
    } else{
      id_tags.push(tag);
      grandPyMessage(messages[0]);
      grandPyMessage(messages[1]);
      grandPyMessage(messages[2]);
      $('.message.loading').remove();
      $('<div class="message new"><figure class="avatar"><img src="../static/img/voyante.jpg" /></figure></div>').appendTo($('.mCSB_container')).addClass('new');
      setDate();
      updateScrollbar();
      grandPyMessage(messages[3]);
      lastGrandPyMessage();
    };
  };
};

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  };
});

last = "Voilà petit fou! Une autre Question a me soumettre ?"
function firstGrandPyMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  msg = "Bonjour, je suis votre voyante virtuelle,"+
  " je me propose de vous éclairer sur votre avenir,"+
  "Mais avant tout, on doit faire connaissance."+
  "Quel est votre prénom?"
  grandPyMessage(msg);
};

function lastGrandPyMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  last = "Voilà petit fou! Une autre question à me soumettre ? Profites je suis de bonne humeur!"
  grandPyMessage(last);
};

$('.button').click(function(){
  $('.menu .items span').toggleClass('active');
  $('.menu .button').toggleClass('active');
});
