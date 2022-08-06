var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

var myPix = new Array("./images/df1.jpg","./images/df2.jpg","./images/df3.jpg","./images/df4.jpg","./images/df5.jpg","./images/df6.jpg");
 var randomNum = Math.floor(Math.random() * myPix.length);

const alreadyDone = [];
const remoteArray =[];
let randomValueIndex;
let indexOfItemInMyArray;

const randomValueFromArray = (myArray) => {

  if (alreadyDone.length === 0) {
    for (let i = 0; i < myArray.length; i++) alreadyDone.push(i);
  }
   randomValueIndex = Math.floor(Math.random() * alreadyDone.length);
   indexOfItemInMyArray = alreadyDone[randomValueIndex];

 
  

  alreadyDone.splice(randomValueIndex, 1);

  return myArray[indexOfItemInMyArray];
  


};

$(window).load(function() {
  $messages.mCustomScrollbar();
  choosePic();
  setTimeout(function() {
    //fakeMessage();
  }, 100);
});

function choosePic() {
    
     document.getElementById("myPicture").src = myPix[randomNum];
}

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function insertMessage() {

  const inputField = document.getElementById("input");
      let input = inputField.value;
      

      let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

    //console.log(text);

  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  setTimeout(function() { $(window).scrollTop(0); }, 0);
  updateScrollbar();

let product;

if (compare(prompts, replies, text)) { 
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
    $('<div class="message loading new"><figure class="avatar"><img src=" ' + './images/df'+ (randomNum+1) +'.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
    setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src=" ' + './images/df'+ (randomNum+1) +'.jpg" /></figure>' + product + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
  }, 1000 + (Math.random() * 20) * 100);
  } else if (text.match(/thank/gi)) {
    product = "thanks sis!";
    $('<div class="message loading new"><figure class="avatar"><img src=" ' + './images/df'+ (randomNum+1) +'.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
    setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src=" ' + './images/df'+ (randomNum+1) +'.jpg" /></figure>' + product + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
  }, 1000 + (Math.random() * 20) * 100);

  }else if (text.match(/perform/gi)) {
    product = "Y'ALL SPOILERS !!!!";
    $('<div class="message loading new"><figure class="avatar"><img src=" ' + './images/df'+ (randomNum+1) +'.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
    setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src=" ' + './images/df'+ (randomNum+1) +'.jpg" /></figure>' + product + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
  }, 1000 + (Math.random() * 20) * 100);
  } 
   else {
    // If all else fails: random alternative
    setTimeout(function() {
    //fakeMessage();

    cloudMessage();
  }, 1000 + (Math.random() * 20) * 100);
  }




  
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Hi there, I\'m Fabio and you?',
  'Nice to meet you',
  'How are you?',
  'Not too bad, thanks',
  'What do you do?',
  'That\'s awesome',
  'Codepen is a nice place to stay',
  'I think you\'re a nice person',
  'Why do you think that?',
  'Can you explain?',
  'Anyway I\'ve gotta go now',
  'It was a pleasure chat with you',
  'Time to make a new codepen',
  'Bye',
  ':)'
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
$('<div class="message loading new"><figure class="avatar"><img src=" ' + './images/df'+ (randomNum+1) +'.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));  updateScrollbar();
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src=" ' + './images/df'+ (randomNum+1) +'.jpg" /></figure>' + product + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}

function cloudMessage() {



  if ($('.message-input').val() != '') {
    return false;
  }
$('<div class="message loading new"><figure class="avatar"><img src=" ' + './images/df'+ (randomNum+1) +'.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));  updateScrollbar();
  updateScrollbar();

  setTimeout(function() {
      let a;


function randomNumber(max) { 
  return Math.floor(Math.random() * max);
}

      

    $('.message.loading').remove();
/*    $.getJSON("https://mhr1235.github.io/gpt2_simple_data/chatbot4.json", function(data) {
    a = randomNumber((data.texts).length);
    //console.log((data.texts).length);
    //console.log(data.texts[a]);
    $('<div class="message new"><figure class="avatar"><img src=" ' + './images/df'+ (randomNum+1) +'.jpg" /></figure>' + data.texts[a] + '</div>').appendTo($('.mCSB_container')).addClass('new');



});*/

$.getJSON("https://mhr1235.github.io/gpt2_simple_data/chatbot4.json", function(data) {
  


    if (remoteArray.length == 0) {

      
      for (let i = 0; i < data.texts.length; i++) {

        remoteArray.push(data.texts[i]);
      }
  }

randomValueFromArray(remoteArray);
//console.log(JSON.stringify(alreadyDone));
//console.log(indexOfItemInMyArray);

$('<div class="message new"><figure class="avatar"><img src=" ' + './images/df'+ (randomNum+1) +'.jpg" /></figure>' + remoteArray[indexOfItemInMyArray] + '</div>').appendTo($('.mCSB_container')).addClass('new');

//document.getElementById("randomValue").innerHTML = remoteArray[indexOfItemInMyArray];
//document.getElementById("indexLeft").innerHTML = JSON.stringify(alreadyDone);



});
    
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}
