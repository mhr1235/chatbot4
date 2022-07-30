// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
]

// Possible responses, in corresponding order

const replies = [
  [ "Hey bish, Im new to this... Where do you go from here?"],
  [
  
    "Exciting Update/News!!! My Facial Feminization Surgery was moved up to February 12th! In just two weeks... All the emotions and feels.... aaahhhhh lol my smile"
  ],
  [
    "Doing what I do best ! Show time 10pm. No cover !",
    "Getting ready for a fab brunch with my girls",
    "Gearing up for this Saturday night",
    "Swinging closer to the margaritas",
    "Attending Miss Gay California"
  ],
  ["Come have Sunday brunch with me and celebrate my birthday at hamburgermaryssf", "I'm getting old", "What day is this? Is it 2010 or 2021?","How old is Kronos in the Kessel Runestone Program?"],
  ["Wait... how do you say...", "Beautiful person, lovely person, warm and fuzzy", "I am a proud Trans Mexican and proud National. I am so proud of my culture and people. Thank you so much for sharing these with us."],
  ["They killing it @24 Hour Fitness", "Wow I really should've have tweezed my eyebrows"],
  ["They call me Quiet Girl But I'm a Riot", "AJ and I are rivals on the battlefield. I am a lot stronger for it."],
  ["now you know you'd be down too!!!", "it's been an incredible journey for us to get to this point, and we are forever grateful to have each other in our life. I love you so much, and I am so thankful for all of the love and support we have received."],
  ["Ugh Sofia is such a doll", "I'm happy to hear that!"],
  ["Time to WERQ", "Surround yourself with people that inspire you.", "Since day 1. I have felt blessed. Thank you"],
  ["I just need to close my eyes and shut out all the hate BUT that being said no one can take away", "I'm going to miss my  girls so bad. Like, really really bad. Like, really, really bad."],
  ["There's a reason they're called Strut watch them Sashay across the sky like a meteor", "lmao, love it", "Photo shoot for lipstick"],
  ["Bye", "Nothing beats spending time with other Trans Women who are about empowering eachother... thank you for this passed weekend", "I wish you all love and support"],
  ["lemony", "sometime this weekend, drink specials"],
  ["from the  club  @ 7-9pm  with my boys"],
  ["fantastic!"],
  ["you mean going French? hehe","You better make the most of it and feel your oats girl you are on vacation.... you're allowed to be as disgusting as you want","it gets better .."],
  ["Mystery man n mysterious package!"],
  ["Girl... the power of the breasts are  too real","Thank you  my love!","What was funny? i don't get it. Why would he/she leave the club early?", "Yassssssss"]
]

// Random for any other user input

const alternative = [
  "Yeah baby it's going down !!!!",
  "Thank you thank you for covering this piece on TransPanic.",
  "Wait... how do you say...Girrrrllllllaaaaaacccccckkkkkk...",
  "Thanks love!  Have a great weekend!",
  "When you have a dream it can happen",
  "Untold stories behind the Mascots, Plugs, and Prinny Paju.  Find us at San Francisco, California",
  "I hope no one sees this...",
  "@ Snob Hill",
  "Heading to my party gigante_sf  I used m unicorn pallet from @SeoulShack and pulled out a fresh pair of  lashes from sexybeautifullashes",
  "we need to have a representation of Dark-Skinned Black Women to empower young girls on both screen and tv.",
  "You are an inspiration to us all... So proud of you",
  "Yassssssss!!!!! This is becoming my telenovela!",
  "All roads lead to @ San Francisco, California",
  "I'm looking at you, beautiful...beautiful but flawed...like all the chips in my ocean.",
  "I was honored to be apart of the Transgender movement.",
  "I just can't",
  "The mug was on   I go to  meetings wearing",
  "I ain't no puta, I'm a lady",
  "Morning fun with my boy @ The Endup",
  "Mama is on Fire...",
  "A dream is a Person , an illusion is a Person , and a Person is a Collection of People",
  "To all my trans sisters, my sisters on the inside looking out! I love you! Kisses",
  "Us girls can use any 1 of these names... But we choose to be Cindi, Dee, or Justus.",
  "it's going down !!!! Come out and party with me",
  "Trans Beauties ",
  "I'm tryna mend things but ur just throwing nothing but shade",
  "Yes sis!!!",
  "I don't see your point",
  "Jk that's a good girl. The more I know about life the uglier the textures become",
  "Trans Beauties @ San Francisco, California",
  "Hey everyone, I would like you to meet one of our Trans Celebration Swim hosts",
  "We need more then just Trans models on screen... Why can't we have more then just Trans models on screen... Why can't we have more then just Trans models on screen...",
  "LIVE on : Transgender Day of Visibility",
  "Today marks my 9th Months post op from FFS! I decided to not post a typical picture of my face because it's really about my recovery and journey and how I'm continuing to thrive by my own standards through my transition.",
  "We need more Trans models", 
  "Wait... how do you call a transwoman a man when someone you call 'sister' is trans and you're drag queen? What a let down..."
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]