function func(str) {
  let start = "";
  let i;
  for (i = 0; i < str.length; i++) {
    if(str[i]!=" ")
    {
        start = start + str[i];
    }
    else
    {

        break;
    }

    // if (str[i] != " ") {
    //   start = start + str[i];
    // } else {
    //   if (str[i] == " " && start != "") {
    //     break;
    //   }
    //   continue;
    // }
  }
  if (i == str.length) {
    return start;
  }
  let rem = "";
  let j;
  for (j = i + 1; j < str.length; j++) {
    rem = rem + str[j];
  }

  return func(rem) + " " + start;
}
console.log(func("one two three"));
