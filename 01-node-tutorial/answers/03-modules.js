const names = require("./04-names.js");
const displayValue = require("./05-utils.js")
const {mainPerson, lands} = require("./06-alternative-flavor.js")
require("./07-mind-grenade.js")


if (names.name1.name == mainPerson.name) {
    displayValue(names.name1, lands[0])
} else {
    displayValue(names.name2, lands[1])
}
