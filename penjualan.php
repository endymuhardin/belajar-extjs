<?php
    $data = array(
        array(
            "no" => 1, "bulan" => "Jan", "kecap" => 10, "permen" => 30
        ),
        array(
            "no" => 2, "bulan" => "Feb", "kecap" => 30, "permen" => 20
        ),
        array(
            "no" => 3, "bulan" => "Mar", "kecap" => 40, "permen" => 70
        ),
        array(
            "no" => 4, "bulan" => "Apr", "kecap" => 20, "permen" => 90
        ),
        array(
            "no" => 5, "bulan" => "May", "kecap" => 70, "permen" => 40
        ),
        array(
            "no" => 6, "bulan" => "Jun", "kecap" => 80, "permen" => 60
        )
    );

    $output = array("transaksi" => $data);

    echo(json_encode($output));

?>

