//what's the Decorative plaid panel???(لوح بنقش مربعات.)
// : (This is just a visual design element
//It doesn't do anything when clicked; 
// it makes the page look nicer.

function AuthLayout({
  children,
  eyebrow = "New reader",
  heading = "Make yourself at home",
  text = "Save books, plan visits and keep a shelf that's all yours.",
}) {
  return (
    <main className="auth-page theme-rose">
      <div className="auth-content">

        <header className="auth-brand">
          <h1>The Night Shelf</h1>
          <p>Your little reading corner</p>
        </header>

        <section className="auth-card">
          {children}
        </section>

        <div className="auth-plaid-panel" aria-hidden="true">
          <div className="plaid-note">
            <span className="plaid-note-eyebrow">{eyebrow}</span>
            <h2 className="plaid-note-title">{heading}</h2>
            <p className="plaid-note-text">{text}</p>
          </div>
        </div>

      </div>
    </main>
  );
}
export default AuthLayout;
/////////////
//Note:This creates the decorative plaid design.
//aria-hidden="true" tells screen readers to ignore this element because it's purely decorative.
//<section className="auth-card"> element to represent the shared authentication card.
//////////////



/*
The overall layout
Imagine the login page like this:
┌──────────────────────────────────────────────┐
│                                              │
│              THE NIGHT SHELF                 │
│          Your little reading corner          │
│                                              │
│       ┌────────────────────────────┐         │
│       │                            │         │
│       │       WELCOME BACK         │         │
│       │                            │         │
│       │  Email                     │         │
│       │  [______________________]  │         │
│       │                            │         │
│       │  Password                  │         │
│       │  [______________________]  │         │
│       │                            │         │
│       │        Forgot password?    │         │
│       │                            │         │
│       │       [    SIGN IN    ]    │         │
│       │                            │         │
│       │   Don't have an account?   │         │
│       │          Sign up           │         │
│       │                            │         │
│       └────────────────────────────┘         │
│                                              │
│       ▒▒▒▒▒ DECORATIVE PLAID PANEL ▒▒▒▒      │
│                                              │
└──────────────────────────────────────────────┘
// This component contains the shared layout for authentication pages,
// such as Login and Register. It includes the common styling and the
// plaid book-inspired design. We can reuse it across different
// authentication pages instead of creating the layout again.+
//there is inside it too the 

//Shared authentication card: This is the main box containing the form. 
// Both Login and Register will use the same card design
*/ 



//the first div is the :   //The content container
//<div className="auth-content">-->Groups the elements together and controls their positioning.
/*// We created AuthLayout to have one shared layout for all authentication pages,
// such as Login and Register, instead of repeating the same structure.
// The main represents the overall page and its background.
// Inside it, we have a div that acts as a container for all the authentication content.
// Inside that container, we have three parts:
// 1. The header: displays the website name and description.
// 2. The section: contains the shared authentication card, where the Login or Register form will appear.
// 3. The plaid panel: adds the decorative books-inspired design.
// This way, all three parts stay grouped inside one container,
// and we can reuse the same layout on different authentication pages. */