import { LoginScreen } from "./screens/loginScreen/loginScreen";

function main(){
    const page = new LoginScreen();
    document.body.innerHTML = page.render();
}

main();