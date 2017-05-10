    <script>
var str="* Guest3 has joined.";
//str="I expect five hundred dollars ($500).";
var regExp = /Guest[0-9]+/;
//var n = regExp.exec("str");
//document.writeln(n[1]);
//var regExp = /\(([^)]+)\)/;
var matches = regExp.exec(str);

//matches[1] contains the value between the parentheses
document.write(matches[0]);
</script>
