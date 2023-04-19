const trim1 = function()
{
    let str= " functionUp  ";
    let str1=str.trim();
    console.log("The string before applying trim [",str,"] the string after applying trim :[",str1,"]");
}
const changetoLowerCase= function ()
{
    let str= "Kirti";
    let str1=str.toLowerCase(); 
    console.log("The string before applying LowerCase :",str," the string after applying Lowercase: ",str1);
}
const changetoUpperCase= function ()
{
    let str= "Kirti";
    let str1=str.toUpperCase(); 
    console.log("The string before applying UpperCase :",str," the string after applying Uppercase: ",str1);
}
module.exports.changetoLowerCase =changetoLowerCase;
module.exports.changetoUpperCase =changetoUpperCase;
module.exports.trim1 =trim1;