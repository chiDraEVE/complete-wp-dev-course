<?php

function up_page_header_render_cb($atts) {
    $output = esc_attr($atts['content']);
    return $output;
}
