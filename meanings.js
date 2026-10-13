var randomDiv = document.getElementById("myRandomDiv");
var randomDivSelections = [];
function randomizePhrase(){
  var randomStrings = [
"finding little reminders of you in everything that makes me smile",
"the quiet reassurance of being wrapped in your warm embrace",
"turning our little dreams into a life we can share",
"doing all i can to make our life together a beautiful one",
"being there for each other, especially when life feels difficult",
"finding my way home whenever i reach for your hand",
"being entirely myself with you, without fear or hesitation",
"knowing that no distance could ever keep our hearts apart",
"accepting each other wholeheartedly, just as we are",
"feeling my heart flutter at the simplest sight of you",
"the peaceful comfort of doing nothing at all by your side",
"knowing that wherever life takes us, i would never leave you behind",
"when even the most tiring day leaves me longing for your company",
"feeling the whole world become a little safer when you hold my hand",
"falling asleep beside you and waking up feeling wonderfully fortunate",
"finding as much happiness in your joy as i do in my own",
"thinking of you in the middle of a smile, without even realizing it",
"having a thousand things to talk about, and never enough hours",
"sharing our laughter, our tears, and everything life brings our way",
"finding my happiest moments in the simplest hours spent together",
"feeling so much tenderness that happiness spills over into tears",
"knowing in my heart that i could never wish for anyone but you",
"discovering that even the things i love most are lovelier with you",
"finding the courage to discover new things with you beside me",
"treasuring your smile as one of the loveliest things in my world",
"turning the most ordinary little moments into cherished memories",
"feeling a little happier simply because we are in the same room",
"finding every hardship worthwhile for the life we get to share",
"bringing out the gentlest and most wonderful parts of each other",
"looking forward to seeing you again, even after only a few hours apart",
"knowing that simply existing beside you is already enough",
"having a heart where i can place every thought without fear of being unheard",
"discovering that giving to you brings as much joy as receiving, and sometimes even more"];
    var randomIndex;
    var newText;
    if(randomDivSelections.length >= randomStrings.length){
        randomDivSelections = [];
    }
    do{
        randomIndex = Math.ceil((Math.random() * 33) % randomStrings.length - 1);
        newText = randomStrings[randomIndex];
    }while(randomDivSelections.includes(newText));
    randomDiv.innerHTML = newText;
    randomDivSelections.push(newText);
    $(randomDiv).removeClass('typewriter');
    var originalDisplay = randomDiv.style.display;
    randomDiv.style.display = 'none';
    setTimeout(function(){$(randomDiv).addClass('typewriter'); randomDiv.style.display = originalDisplay;}, 100);
}
randomizePhrase();