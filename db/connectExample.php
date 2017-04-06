// include connectStart before database sql transaction(s)
// include connectStop after database sql transaction(s)

$servername = "localhost";
$username ="db_user";
$password = "db_password";
$dbname = 'db_name';
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// Transaction will be here
