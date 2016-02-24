<!doctype html>

<?php
$array_notes = array(
	'Choix' => '',
	'DO'    => 'C',
	'RE'    => 'D',
	'MI'    => 'E',
	'FA'    => 'F',
	'SOL'   => 'G',
	'LA'    => 'A',
	'SI'    => 'B'
);
$result      = '';

if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
	if ( isset ( $_POST['note'] ) && $_POST['note'] != 'Choix' ) {
		$note   = $_POST['note'];
		$answer = '<p> Le ' . $note . ' correspond à la notation américaine :  ' . $array_notes[ $note ] . '</p>';

	} else {
		$answer = 'Veuillez choisir une note dans le menu déroulant';
	}
}
?>

<html lang="fr">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="../style.css">
	<title>Notes de musique</title>
</head>

<body>

<h1>Ma note de musique en américain</h1>

<form id="form">
	<fieldset>
		<legend>Correspondance des notes de musique</legend>
		<p>Je souhaite trouver la note américaine correspondante à la note suivante :</p>
		<br>
		<select name="note_french" id="select">
			<?php
			foreach ( $array_notes as $note_fr => $note_us ) {
				echo '<option value="' . $note_fr . '">' . $note_fr . '</option>';
			}
			?>
		</select>
	</fieldset>
</form>
<div id="answer">
	<?php echo $answer ?>
</div>

</body>