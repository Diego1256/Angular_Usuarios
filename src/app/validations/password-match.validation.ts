import { AbstractControl } from "@angular/forms";
 
export class PasswordValidation {
 
    static MatchPassword(abstractControl: AbstractControl) {
 
        //capturar o valor do campo senha do formulário
        let senha = abstractControl.get('senha')?.value;
 
        //capturar o valor do campo de confirmação de senha
        let senhaConfirmacao = abstractControl.get('senhaConfirmacao')?.value;
 
        if (senha != senhaConfirmacao) {
            abstractControl.get('senhaConfirmacao')?.setErrors({
                matchPassword : true
            })
        }
 
        return null;
    }
}