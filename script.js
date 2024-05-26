const getRandomNumber = (num) => Math.floor(Math.random()* (num));
//This will be used to randomly select an array position to assign to values in the prompt object

const mainCharacterOptions = ['hardboiled detective', 'princess living in exile', 'stranger with no memories', 'youth with unique abilities', 'single mother', 'scarred veteran', 'man with absolutely nothing special about him'];
// Potential protagonists

const settingOptions = ['a fantasy world rife with magic', 'a civilization spanning the galaxy, with technologies we can scarcely imagine', 'an isolated midwestern town with a dark secret', 'a bustling metropolis', 'a lawless frontier'];
// Potential settings for the story to take place in

const scaleOptions = ['child', 'home', 'nation', 'world'];
// Potential scales for the challenge the protagonist will face

const threatOptions = ['a deadly virus', 'an ancient enemy', 'creatures out of nightmare', 'a natural disaster of cataclysmic proportions', 'invaders from another world', 'a deranged killer with strange abilities', 'a mysterious organization with seemingly unlimited resources']; 
// Options for the threat directed at the previously defined scale which will drive the story

const selectRand = (arr) => arr[getRandomNumber(arr.length)];
//function to select random properties for a prompt object

const newStoryPromptFactory = () => {
    return {
        setting: selectRand(settingOptions),
        mainCharacter: selectRand(mainCharacterOptions),
        scale: selectRand(scaleOptions),
        threat: selectRand(threatOptions)
    }
};  

// Single storage object for the elements of the prompt.  Used Object instead of array to simplify future functionality to keep a particular value and reroll others
let storyPrompt = {};

// Function to return the string for the user to consume
const promptStatement = () => {
    storyPrompt = newStoryPromptFactory();
    return `In ${storyPrompt.setting}, a ${storyPrompt.mainCharacter} struggles to protect their ${storyPrompt.scale} from ${storyPrompt.threat}...`
};

//Not sure if this is necessary.  Will work on the interactive website unit to determine hot to pass the result to the HTML...  For now, good POC
console.log(promptStatement());
