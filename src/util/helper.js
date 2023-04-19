const printDate= function()
{
    console.log("Date is 19");
}
const printMonth =function()
{
    console.log("Month is April");
}
const printBatchInfo = function()
{
    console.log("Technetium, W5D1, the topic for today is Nodejs module system");
}
module.exports.printDate =printDate;
module.exports.printMonth = printMonth;
module.exports.printBatchInfo =printBatchInfo;