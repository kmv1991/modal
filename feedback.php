<?php
mail("kmv1991@bk.ru", "Ошибка на странице ".$_POST['hid_report']."", $_POST['report_error'],
    "From: kmv1991@bk.ru\r\n"
    ."Reply-To: kmv1991@bk.ru\r\n"
    ."X-Mailer: PHP/" . phpversion());
echo "Спасибо, что сообщили нам об ошибке";
?>