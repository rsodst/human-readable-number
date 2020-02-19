module.exports = function toReadable(number) {
    var groupOne = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var groupTwo = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var groupThree = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    function getHundreds(num) {
        if (num > 99) {
            return groupOne[Math.floor(num / 100)] + " hundred " + getTens(num % 100);
        } else {
            return getTens(num);
        }
    }

    function getTens(num) {
        if (num < 10) return groupOne[num];
        else if (num >= 10 && num < 20) return groupThree[num - 10];
        else {
            return groupTwo[Math.floor(num / 10)] + " " + groupOne[num % 10];
        }
    }

    function convert(num) {
        if (num == 0) return "zero";
        else return getHundreds(num);
    }

    return convert(number).trim();
};