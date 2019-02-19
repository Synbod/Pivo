#[macro_use]
extern crate stdweb;

use stdweb::js_export;

fn test_alert() {
    stdweb::initialize();

    let message = "Hello, 世界!";
    js! {
        alert( @{message} );
    }

    stdweb::event_loop();
}

#[js_export]
pub fn test() -> String {
    "Hello from Rust, WebAssembly, and Webpack!".to_string()
}
