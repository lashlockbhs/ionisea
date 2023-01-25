const body = document.querySelector('body');
const makeHeader = (text, type) => { // strings
  const t = document.createElement(type)
  t.append(document.createTextNode(text))
  return t
}

const makePgrph = (text) => { // string
  const t = document.createElement('p')
  t.append(document.createTextNode(text))
  return t
}

const makeList = (elements, type) => { // elements is an array of strings
  const returnList = document.createElement(type)
  for (const element of elements) {
    const e = document.createElement('li')
    e.append(document.createTextNode(element))
    returnList.append(e)
  }
  return returnList
}

const makeLink = (text, link) => { // strings
  const l = document.createElement('a')
  l.append(document.createTextNode(text))
  l.setAttribute('href', link)
  return l
}

const makeCode = (text) => {
  const t = document.createElement('code')
  t.append(document.createTextNode(text))
  return t
}

body.append(makeHeader('Can you tell me why HTML was developed?', 'h1'))

body.append(makePgrph(`
 HTML (Hypertext Markup Language) was developed to create a standard way to
 create and structure documents on the World Wide Web. It allows developers to
 create structured documents, including headings, paragraphs, images and links,
 that can be displayed in a web browser. It was created to simplify the process
 of creating and sharing documents online, so that anyone can create and view
 web pages with a consistent look and feel.
`))

body.append(makeHeader('What about using HTML for GUIs?', 'h1'));

body.append(
  makePgrph(`
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
body.append(makeHeader('What are some of the main elements of HTML?', 'h1'));

body.append(makeList([
  makeCode('<html>').append(createPgrph(': This is the root element of an HTML document, and it contains all of the other elements.')),
  makeCode('<head>').append(createPgrph(": This element contains information about the document, such as the title of the page, which is displayed in the browser's title bar or tab.")),
  makeCode('<body>').append(createPgrph(': This element contains the content of the document that is displayed in the browser window.')),
  makeCode('<h1>').append(createPgrph(' to ').append(makeCode('<h6>')).append(createPgrph(': These elements are used for headings and subheadings. <h1> is the highest level heading, while <h6> is the lowest.'))),
  makeCode('<p>') + ': This element is used for paragraphs of text.',
  makeCode('<a>') + ': This element is used for hyperlinks, which allow users to navigate between pages on the web.',
  makeCode('<img>') + ': This element is used to embed images in a web page.',
  makeCode('<ul> and <ol>') + ': These elements are used for unordered and ordered lists, respectively.',
  makeCode('<li>') + ': This element is used for list items.',
  makeCode('<div> and <span>') + ': These elements are used for grouping and applying styles to elements on a web page.',
], 'ol'));

body.append(makePgrph(
  `These are some of the main elements, but there are many more available, like <header>, <nav>, <main>, <footer>, 
  <form>, <input>, <select>, etc.`
))

body.append(makeHeader('Can you find a picture of the inventor of the web?', 'h1'));

// doesn't really deserve its' own function so I've left it here
const youngLee = document.createElement('img');
youngLee.setAttribute('src', "/images/tim-berners-lee.jpg")
body.append(youngLee)

body.append(makePgrph(`
I'm sorry, I am a text based model and I am not able to find or show images. However, I can tell you that
 the inventor of the World Wide Web (WWW) is Sir Tim Berners-Lee. He is a British computer scientist and 
 is considered to be the inventor of the World Wide Web. He proposed and developed the first successful 
 communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet in 1989. 
 He also created the first web browser, called WorldWideWeb, and the first web server, called httpd. He 
 also wrote the first version of the HTML language, which provided the structure for web pages. He is currently 
 working on a decentralized web project called Solid.`));


const credits = document.createElement('div')
credits.setAttribute('class', 'credits')

const c1 = makePgrph('Text from 2023-01-14 conversation with ') + makeLink('ChatGPT.', "https://chat.openai.com/chat")
credits.append(c1)

const c2 = makePgrph('Photo of a young Tim Berners-Lee from') + makeLink(' Flickr ', "https://www.flickr.com/photos/itupictures/16662336315") + 
makePgrph('no thanks to ChatGPT. (') + makeLink(('CC BY 2.0'), 'https://creativecommons.org/licenses/by/2.0/') + makePgrph(').')
credits.append(c2)

body.append(credits)

