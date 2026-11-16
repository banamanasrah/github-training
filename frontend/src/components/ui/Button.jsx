

function Button({children,type="button",onClick,disable=false,className=""}){
    //children represents whatever we put between the opening and closing component tags.<Button>Sign In</Button>
  
    return (
        <button 
        type={type}//type: determines the button's behavior (button, submit, or reset).This is a default value.
        //If we don't provide a type when using the component, React will use "button".
        onClick={onClick}
        disabled={disable}
        className={`auth-button ${className}`.trim()}
        >
              {children}
        </button>
  
);

}export default Button;




/*
{{{{{{{Notes for me :}}}}}}}
Why ${className}?
This is JavaScript template literal syntax.
It combines two CSS classes:
- auth-button: the default styling.
- ${className}: any additional class passed to the component.

You can have multiple CSS classes applied to the same HTML element.
For example:
<Button className="login-button rose-button">
  Sign In
</Button>


The resulting HTML will have:
<button class="auth-button login-button rose-button">

Why className = ""?
It's a default value, meaning an empty string if no className is provided.
*/ 