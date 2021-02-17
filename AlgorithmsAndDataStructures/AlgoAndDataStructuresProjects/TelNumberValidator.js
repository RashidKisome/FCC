function telephoneCheck(str) {
    var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
    return re.test(str);
  }
  telephoneCheck("555-555-5555");



/*

Return true if the passed string looks like a valid US phone number.

For this challenge you will be presented with a string,
 such as 800-692-7753 or 8oo-six427676;laskdjf.
Your job is to validate or reject the US phone number,
based on any combination of the formats provided above. 
The area code is required.
If the country code is provided,
you must confirm that the country code is 1.
Return true if the string is a valid US phone number;
otherwise return false.

*/