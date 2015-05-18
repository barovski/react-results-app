<?php
$resConsts = array(
	"RESULTS_ENG" => array(
		"filename" => "premierLeagueFixtures.json",
		"url" => "http://api.football-data.org/alpha/soccerseasons/354/fixtures"
	),
	"LT_ENG" =>  array(
		"filename" => "leagueTable354.json",
		"url" => "http://www.football-data.org/alpha/soccerseasons/354/leagueTable"
	),
	"LT_IT" =>  array(
		"filename" => "leagueTable357.json",
		"url" => "http://www.football-data.org/alpha/soccerseasons/357/leagueTable"
	),
	"LT_ESP" =>  array(
		"filename" => "leagueTable358.json",
		"url" => "http://www.football-data.org/alpha/soccerseasons/358/leagueTable"
	),
	"LT_D" =>  array(
		"filename" => "leagueTable351.json",
		"url" => "http://www.football-data.org/alpha/soccerseasons/351/leagueTable"
	)
);

function getResponse($url){
	$result; 

	try {
		// Initializing curl
		$ch = curl_init($url);

		// Configuring curl options
		$options = array(
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_HTTPHEADER => array('Content-type: application/json')
		);

		// Setting curl options
		curl_setopt_array($ch, $options);

		// Getting results
		$result = curl_exec($ch); // Getting jSON result string

		return $result;

	} catch(Exception $e) {

	    trigger_error(sprintf(
	        'Curl failed with error #%d: %s',
	        $e->getCode(), $e->getMessage()),
	        E_USER_ERROR);

	    return false;
	}
}

function writeDataToFile($filename, $data){
	file_put_contents($filename, $data);
}

function writeResponse($league){
	global $resConsts;

	$res = getResponse($resConsts[$league]["url"]);
	$filename = $resConsts[$league]["filename"];
	writeDataToFile($filename, $res);
}

function writeAllResponses() {
	global $resConsts;

	foreach ($resConsts as $k => $val) {
		writeResponse($k);

		echo "$k done! <br>";
	}
}

writeAllResponses();


