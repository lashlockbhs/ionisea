// Get a reference to the object representing the BODY element so we can append stuff to it.
const body = document.querySelector('body');

// Create a new H1 element.
const q1 = document.createElement('h1');

// Create a text node and add it to the H1
q1.append(document.createTextNode('Can you tell me why HTML was developed?'));

// Add the new H1 element to the body.
body.append(q1);

// Create a new P element.
const a1 = document.createElement('p');

// Create a text node and add it to the P element. Note the use of `` rather
// than '' which allows us to break the string across lines.
a1.append(
  document.createTextNode(`
 HTML (Hypertext Markup Language) was developed to create a standard way to
 create and structure documents on the World Wide Web. It allows developers to
 create structured documents, including headings, paragraphs, images and links,
 that can be displayed in a web browser. It was created to simplify the process
 of creating and sharing documents online, so that anyone can create and view
 web pages with a consistent look and feel.
`),
);

// Add the new P element to the body.
body.append(a1);

const q2 = document.createElement('h1');

q2.append(document.createTextNode('What about using HTML for GUIs?'));

body.append(q2)

const a2 = document.createElement('p');

a2.append(
  document.createTextNode(`
  HTML can be used to create user interfaces for web applications, but it is primarily designed
  as a markup language for creating structured documents to be displayed in web browsers. While
  it can be used to create basic user interfaces, it is not typically considered a good choice
  for creating complex, interactive user interfaces. Other technologies such as JavaScript and
  CSS are typically used in conjunction with HTML to create more advanced user interfaces for
  web applications. Additionally, there are other technologies such as Electron, React Native
  and NativeScript that allow to create cross-platform desktop and mobile apps using web
  technologies such as HTML, CSS, and JavaScript.
`),
);
body.append(a2)

const q4 = document.createElement('h1');

q4.append(document.createTextNode('What are some of the main elements of HTML?'));

body.append(q4)

const list1 = document.createElement('ol')

const l1 = document.createElement('li')
l1.append(document.createTextNode(`
  <html>: This is the root element of an HTML document, and it contains all of the other elements.
`));
list1.append(l1)

const l2 = document.createElement('li')
l2.append(document.createTextNode(`
<head>: This element contains information about the document, such as the title of the page, which is displayed in the browser's title bar or tab.
`));
list1.append(l2)

const l3 = document.createElement('li')
l3.append(document.createTextNode(`
  <body>: This element contains the content of the document that is displayed in the browser window.
`));
list1.append(l3)

const l4 = document.createElement('li')
l4.append(document.createTextNode(`
  <h1> to <h6>: These elements are used for headings and subheadings. <h1> is the highest level heading, while <h6> is the lowest.
`));
list1.append(l4)

const l5 = document.createElement('li')
l5.append(document.createTextNode(`
  <p>: This element is used for paragraphs of text.
`));
list1.append(l5)

const l6 = document.createElement('li')
l6.append(document.createTextNode(`
  <a>: This element is used for hyperlinks, which allow users to navigate between pages on the web.
`));
list1.append(l6)

const l7 = document.createElement('li')
l7.append(document.createTextNode(`
<img>: This element is used to embed images in a web page.
`));
list1.append(l7)

const l8 = document.createElement('li')
l8.append(document.createTextNode(`
<ul> and <ol>: These elements are used for unordered and ordered lists, respectively.
`));
list1.append(l8)

const l9 = document.createElement('li')
l9.append(document.createTextNode(`
  <li>: This element is used for list items.
`));
list1.append(l9)

const l10 = document.createElement('li')
l10.append(document.createTextNode(`
  <div> and <span>: These elements are used for grouping and applying styles to elements on a web page.
`));
list1.append(l10)

body.append(list1)

const a4 = document.createElement('p')

a4.append(document.createTextNode(
  `These are some of the main elements, but there are many more available, like <header>, <nav>, <main>, <footer>, 
  <form>, <input>, <select>, etc.`
  ))
body.append(a4)

const q5 = document.createElement('h1');

q5.append(document.createTextNode('Can you find a picture of the inventor of the web?'));

body.append(q5)


const youngLee = document.createElement('img');
youngLee.setAttribute(src /images/tim-berners-lee.jpg) // what the hell
body.append(youngLee)