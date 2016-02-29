<?php
$array_notes = array(
	'do'  => 'C',
	'ré'  => 'D',
	'mi'  => 'E',
	'fa'  => 'F',
	'sol' => 'G',
	'la'  => 'A',
	'si'  => 'B'
);
$result      = '';

if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
	if ( isset ( $_POST['note'] ) ) {
		$note   = $_POST['note'];
		$result = '<p> Le ' . $note . ' correspond à la notation américaine :  ' . $array_notes[ $note ] . '</p>';

	}
	else{
		$result='Il y a un problème';
	}
	echo $result;
	return;
}
