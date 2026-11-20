import { useState,useContext } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import FormInput from "../components/auth/FormInput";
import Button from "../components/ui/Button";
import { AuthContext } from "../context/AuthContext";

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError]=useState("");
    const [isLoading,setIsLoading]=useState(false);
/*Initially, error is an empty string, so nothing appears.
When the user submits the form and login fails, setError() updates the error state.
 React re-renders, and the error message appears above the button. */


    const { loginUser } = useContext(AuthContext);
    //We're using JavaScript destructuring 
    // to extract only the loginUser property from that object.
    //+Multiple pages can use the same context. For example, both 
    // LoginPage and ProfilePage can use AuthContext.


    /*
    (((This creates a state variable called email.)))
    email stores the current email value.
    setEmail updates that value.
    "" means the input starts empty.*/

   async function handleSubmit(e) {
    e.preventDefault();
  

    setError("");
    setIsLoading(true);//Start loading
    try {
        await loginUser({ email, password });
        console.log("Login successful!");
    } catch (error) {
       setError(error.response?.data?.message||"Login failed.please check you credntials.");
    }finally{
        setIsLoading(false);//isLoading only tracks whether the request is still processing.
    }

}


    return (
        <AuthLayout>
            <div>
                <h2 className="auth-title">Welcome Back</h2>

                <p className="auth-description">
                    Sign in to your account
                </p>

                <form className="auth-form" onSubmit={handleSubmit}>

                    <FormInput
                        label="Email"
                        type="email"
                        value={email}
                        onChange={setEmail}
                    />

                    <FormInput
                        label="Password"
                        type="password"
                        value={password}
                        onChange={setPassword}
                    />

                    <a href="#" className="auth-forgot">
                        Forgot password?
                    </a>
                     {error&&<p role="alert">{error}</p>}
                    <Button type="submit">
                        {isLoading?"Signing in...":"Sign In"}
                    </Button>

                </form>

                <p className="auth-footer">
                    Don't have an account? <a href="/register">Sign up</a>
                </p>
            </div>
        </AuthLayout>
    );
    
} export default LoginPage;

///////
// onChange:
// A React event handler that runs whenever the user changes the input.

// e:
// The event object that gives us information about the change.

// e.target.value:
// Gets the current value entered by the user.

// setEmail:
// A state-updating function that receives the new value and updates
// the email state in the parent component (LoginPage).

// We pass setEmail to FormInput through onChange so that FormInput
// can notify LoginPage whenever the user changes the email input.
///////



////
// Q: Why do we use a form?
// A: To tell the application that these elements belong together
// and that the data entered into them should be collected and
// submitted together when the user submits the form.
////

// Q: Why do we call AuthLayout inside the return?
// A: Because we want the Login page to use the shared authentication
// layout, including its background, header, card, and plaid design.

// Q: What are we passing to AuthLayout?
// A: We pass children, which are all the elements we put between
// its opening and closing tags.

// Q: Why did we create a div inside AuthLayout?
// A: To group all the Login-specific content together.

// Q: What do we put inside this div?
// A: The Login heading, its description, the form, and the
// additional text and links.

// Q: Why do we use a form?
// A: To group the email and password inputs and the Sign In button
// together so the user can submit them as one form.

// Q: What is the relationship between LoginPage and AuthLayout?
// A: LoginPage provides the content, while AuthLayout provides
// the shared structure and design around that content.


/*children is not necessarily an object of a component. It's a 
special React prop that contains whatever you place between the 
component's opening and closing tags 
(text, HTML elements, or other components).*/

/*FormInput) displays the value and tells the parent when it 
changes. 
This is called a controlled input.*/

// NOTE:
// href specifies a URL path, which determines how the user accesses
// a page. It is NOT a file path (the location where the page's code lives).





//remider for me :
/*- You cannot write ordinary JavaScript statements like if directly
 inside JSX.
So, we use curly brackets not because components require them, but because
 we're embedding JavaScript expressions inside JSX. */