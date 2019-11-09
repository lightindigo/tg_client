import { SimpleButton } from "../../atoms/simpleButton/simpleButton";
import { Divider } from "../../atoms/divider/divider";
import { Dropdown } from "../../atoms/dropdown/dropdown";
import { Label } from "../../atoms/label/label";
import { TgLogo } from "../../atoms/tgLogo/tgLogo";
import { CenterContainer } from "../../atoms/centerContainer/centerContainer";
import { InlineContainer } from "../../atoms/inlineContainer/inlineContainer";
import { SimpleInput } from "../../atoms/simpleInput/simpleInput";
import { _n } from "../../../services/localization/localization";

export default (data: any) => {
    return /*html*/`
<div class="login-phone-form" style="">
    ${CenterContainer.render({
        children: InlineContainer.render({
            children: TgLogo.render({ size: 200 })
        })
    })}
    ${Divider.render()}
    ${CenterContainer.render({
        children: Label.render({ text: _n('login_screen.sign_to_tlg') })
    })}
    ${Divider.render()}
    ${CenterContainer.render({
        children: Label.render({ text: _n("login_screen.please_confirm") })
    })}
    ${Divider.render()}
    ${Dropdown.render({
        placeholder: _n("login_screen.country_placholder"),
        options: [
            {
                text: 'test',
                value: 'test'
            }
        ]
    })}
    ${Divider.render({ height: 10 })}
    ${SimpleInput.render({placeholder: _n("login_screen.pho")})}
    ${Divider.render({ height: 10 })}
    <div>
        ${SimpleButton.render({ text: 'Далее', width: '100%' })}
    </div>
</div>
`;
};