<?php
	//print html
	print"<html>
		<head>
		<title>K.Y.B.A.</title>
		<link rel='stylesheet' type='text/css' href='style.css'>
		<link rel='icon' type='image/ico' href='images/favicon.ico'/>
		<link rel='stylesheet' href='font-awesome-4.0.3/css/font-awesome.min.css'>

	 	<meta http-equiv='refresh' content='4;url=index.html'>

		</head>
		<body id='cBody'>

		<!-- Page Borders -->
		<div id='top'></div>
		<div id='bottom'></div>
		<div id='right'></div>
		<div id='left'></div>";


// echo $Name." ".$Email." ".$Message;
if (isset($_POST["Name"]))
{
	// $EmailFrom = "karlissa.ablay@gmail.com";
	$EmailTo = "karlissa.ablay@gmail.com";
	$Subject = "Contacted from Personal Website";
	$Name = Trim(stripslashes($_POST['Name'])); 
	$Email = Trim(stripslashes($_POST['Email'])); 
	$Message = Trim(stripslashes($_POST['Message']));

	// prepare email body text
	$Body = "";
	$Body .= "Name: ";
	$Body .= $Name;
	$Body .= "\n";
	$Body .= "Email: ";
	$Body .= $Email;
	$Body .= "\n";
	$Body .= "Message: ";
	$Body .= $Message;
	$Body .= "\n";

	// send email 
	$success = mail($EmailTo, $Subject, $Body, "From: <$Name>");

	// redirect to success page 
	if($success)  
	{
		print "<header>Mailed it</header>";
	}
	else
	{
		print "<header>Oh no!</header>";
		print "<h1>Mailing error occurred... Please try again</h1>";
	}
}
	print "<i class='fa fa-spinner fa-spin fa-3x'></i>";
	print "<h1>Redirecting to home page...</h1>";
	print"</body>
			</html>";
?>


