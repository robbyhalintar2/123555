exports.anilist = {
    "setProfile": [ //Activates upon a successful link of the user's AniList profile.
        "You're all set! I have your username in my systems now!",
        "✅ Username added. You're good to go!",
        "Okay! You're all set!"
    ],
    "removeProfile": [ //Successfully removed profile.
        "Okay! That username is no longer attached to you.",
        "✅ Username removed. You're good to go!",
        "Alright, your linked username is no more."
    ],
    "noUsername": [ //User has a profile but has not set their AniList profile.
        "Huh... that user appears to have not set their AniList profile in my systems yet.",
        "They haven't set their AniList profile yet! Try a general search for now.",
        "Try a general search, it looks like that person hasn't set their AniList username yet."
    ],
    "noTerm": [ //Missing search term
        "You forgot to include a search term!",
        "Here is your result for nothing: \" \". Give me a search term next time, baka!"
    ],
    "404Err": [ //Profile not found. Given a 404 error
        "Anilist profile by that user is not found!"
    ]
};

exports.mal = {
    "setProfile": [ //Activates upon a successful link of the user's MAL profile.
        "You're all set! I have your username in my systems now!",
        "✅ Username added. You're good to go!"
    ],
    "removeProfile": [ //Successfully removed profile.
        "Okay! That username is no longer attached to you!",
        "✅ Username removed. You're good to go!"
    ],
    "noUsername": [ //User has a profile but has not set their MAL profile.
        "Huh... that user appears to have not set their MAL profile in my systems yet.",
        "They haven't set their MAL profile yet! Try a general search for now."
    ],
    "noTerm": [ //Missing search term
        "You forgot to include a search term!",
        "Here is your result for nothing: \" \". Give me a search term next time, baka!"
    ],
    "404Err": [ //Profile not found. Given a 404 error
        "MAL profile by that user is not found!"
    ]
};

exports.anime = {
    "noSearch": [
        "You're missing a search term, baka!",
        "You need a search term for me to find something, baka!"
    ],
    "searchErr": [
        "Looks like AniList is having a bit of trouble right now. Come back and try again later.",
        "We're having a slight issue with AniList right now. Come back and try again later."
    ],
    "noResult": [
        "There's not an anime by that name!",
        "Looks like you have your next upcoming title for your new show! An anime does not exist with that title.",
        "Whoops! Looks like that term doesn't have any results. Try again with something else.",
        "Nope! No results with that term. Looks like you'll have to try something else."
    ],
    "nsfw" : [
        "You can't search for hentai in a SFW channel!",
        "Keep your porn out of the safe for work channels, baka!"
    ]
};

exports.manga = {
    "noSearch": [
        "You're missing a search term, baka!",
        "I need a title or something, baka! Come back with one!",
        "Searching for nothing... Oh wait. I don't have to. Give me a search term next time, baka!"
    ],
    "searchErr": [
        "Looks like AniList is having a bit of trouble right now. Come back and try again later.",
        "We're having a slight issue with AniList right now. Come back and try again later."
    ],
    "noResult": [
        "There's not a manga by that name!",
        "Good news! You can use that for your next upcoming book! There isn't a manga by that name.",
        "Whoops! Looks like that term doesn't have any results. Try again with something else.",
        "Nope! No results with that term. Looks like you'll have to try something else."
    ],
    "nsfw" : [
        "You can't search for hentai in a SFW channel!",
        "Porn belongs in the porn channels. Not in a safe for work channel."
    ]
};

exports.avatar = []; //Placeholder

exports.choose = {
    "lackChoice": [
        "There's not a lot of options here, is there?",
        "Choosing requires two or more options, baka!",
        "Just pick the option that's not competing with any others! You only have one choice there, baka!"
    ],
    "success": [
        "-user, I think that **-result** would be the best choice!",
        "Hmm... looks like **-result** is the best option",
        "**-result** looks rather tempting. I'd pick that one.",
        "Why was it so hard to choose? **-result** is obviously the best choice, -user!"
    ]
};

exports.emoji = {
    "noName": [
        "You need a name of an emote to search with, baka!",
        "Name! I need a name to search with!"
    ],
    "noID": [
        "You need to specify a message's ID so that I can find it!",
        "There's no ID so I have no idea where to find the message."
    ],
    "badName": [
        "Type the emote's name right and try again, baka!",
        "There's no emote by that name, baka! Try again."
    ]
};

exports.greet = {
    "me": [ //Parameter 1: Username
        "How rude, -param1! I'm not that lonely!",
        "Trying to make me seem lonely. Bad -param1!"
    ],
    "success": [ //Parameter 1 Username
        "Why hello there, -param1!",
        "Hello, -param1! I hope you are doing well.",
        "And good day to you, -param1!"
    ]
};

exports.help = [];

exports.info = {
    "role": [
        "Looks like I can't find the role. Be sure it is spelled correctly.",
        "Are you sure that exists? I don't think it does."
    ],
    "server": [
        "You can't ask information about a server with additional stuff!",
        "I don't need these extra words. Leave out the extra words and ask for the server info."
    ],
    "noTerm": [
        "You didn't give a correct search term. Do either server, user, or role.",
        "Looks like you provided me with an incorrect search term. I need either server, user, or role."
    ]
};

exports.giverole = {
    "noList": [
        "It doesn't look like there is anything to list out here.",
        "There's no assignable roles you can get. Ask your moderators to see if they could add some."
    ],
    "list": [
        "__Here's a list of assignable roles__\n-list",
        "__Behold! The list of assignable roles!__\n-list"
    ],
    "noAssign": [
        "Doesn't look like there's an assignable role by that name in my systems. Try again.",
        "Hmm... nope. I can't find a role by that name on my list.",
        "I can't see to find a role by the name of -name on my list. Maybe you spelt it wrong?"
    ],
    "added": [
        "Okay! I've assigned the role, -name, to you.",
        "✅ I've assigned you the role. You're all set."
    ],
    "remove": [
        "Okay! You no longer have the role, -name.",
        "Alright. I've removed the role from you."
    ]
}