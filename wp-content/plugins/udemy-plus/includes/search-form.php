<?php

function up_search_form_render_cb() {
    echo 'hey';
    ob_start();
    ?>
        <h1>Search: Your search term here</h1>
        <form>
            <input type="text" placeholder="Search" />
            <div className="btn-wrapper">
                <button type="submit" style={{
                'background-color': bgColor,
                color: textColor
                }}>Search</button>
            </div>
        </form>
<?php
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}