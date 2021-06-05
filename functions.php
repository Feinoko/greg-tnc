<?php 

/* child style */

function childtheme_enqueue_styles() {

  wp_enqueue_style('parent_style', get_template_directory_uri() . '/style.css');

  wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css' , false, filemtime(get_stylesheet_directory() . '/style.css'), 'all' );

}

add_action('wp_enqueue_scripts', 'childtheme_enqueue_styles', 999);

function js_assets() {
  wp_enqueue_script('app', get_stylesheet_directory_uri() . '/js/app.js', NULL, '1.0', true );
}

add_action('wp_enqueue_scripts', 'js_assets');



/* adding module type to app script to enable modularity */
/* see https://stackoverflow.com/questions/56603862/how-does-the-script-loader-tag-function-works */

function add_module_tag($tag, $handle) {

  if('app' !== $handle) {
      return $tag;
  }
  return str_replace(' src', ' type="module" src', $tag);
}
add_filter('script_loader_tag', 'add_module_tag', 10, 2);