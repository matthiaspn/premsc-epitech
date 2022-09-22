<?php
require (__DIR__ . "/task02.php");
function dynamic_body() {
    return render_body($_GET["page"] ?: "test");
}