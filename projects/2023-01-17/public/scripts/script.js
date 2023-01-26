const body = document.querySelector('body');
const makeHeader = (text, type) => { // strings
  const t = document.createElement(type)
  t.append(document.createTextNode(text))
  return t
}

const makeParagraph = (text) => { // string
  const t = document.createElement('p')
  t.append(document.createTextNode(text))
  return t
}

const makeImage = (source, description) =>{
  const img = document.createElement('img');
  img.setAttribute('src', source)
  img.setAttribute('alt', description)
  return img
}

const makeList = (elements, type) => { // elements is an array of strings
  const returnList = document.createElement(type)
  for (const element of elements) {
    returnList.append(element)
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

const mergeItems = (elements, type) => {
  const r = document.createElement(type)
  for (const element of elements) {
    r.append(element)
  }
  return r
}

body.append(makeHeader('Can you tell me why HTML was developed?', 'h1'))

body.append(makeParagraph(`
 HTML (Hypertext Markup Language) was developed to create a standard way to
 create and structure documents on the World Wide Web. It allows developers to
 create structured documents, including headings, paragraphs, images and links,
 that can be displayed in a web browser. It was created to simplify the process
 of creating and sharing documents online, so that anyone can create and view
 web pages with a consistent look and feel.
`))

body.append(makeHeader('What about using HTML for GUIs?', 'h1'));

body.append(
  makeParagraph(`
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

body.append(makeParagraph('Some of the main elements of HTML include: '))

body.append(makeList([
  mergeItems([makeCode('<html>'), document.createTextNode(': This is the root element of an HTML document, and it contains all of the other elements.')], 'li'),
  mergeItems([makeCode('<head>'), document.createTextNode(": This element contains information about the document, such as the title of the page, which is displayed in the browser's title bar or tab.")], 'li'),
  mergeItems([makeCode('<body>'), document.createTextNode(': This element contains the content of the document that is displayed in the browser window.')], 'li'),
  mergeItems([makeCode('<h1>'), document.createTextNode(' to '), makeCode('<h6>'), document.createTextNode(': These elements are used for headings and subheadings. '), 
    makeCode('<h1>'), document.createTextNode(' is the highest level heading, while '), makeCode('<h6>'), document.createTextNode(' is the lowest.')], 'li'),
  mergeItems([makeCode('<p>'), document.createTextNode(': This element is used for paragraphs of text.')], 'li'),
  mergeItems([makeCode('<a>'), document.createTextNode(': This element is used for hyperlinks, which allow users to navigate between pages on the web.')], 'li'),
  mergeItems([makeCode('<img>'), document.createTextNode(': This element is used to embed images in a web page.')], 'li'),
  mergeItems([makeCode('<ul>'), document.createTextNode(' and '), makeCode('<ol>'), document.createTextNode(': These elements are used for unordered and ordered lists, respectively.')], 'li'),
  mergeItems([makeCode('<li>'), document.createTextNode(': This element is used for list items.')], 'li'),
  mergeItems([makeCode('<div> and <span>'), document.createTextNode(': These elements are used for grouping and applying styles to elements on a web page.')], 'li'),
], 'ol'));

body.append(mergeItems([
  document.createTextNode(`These are some of the main elements, but there are many more available, like `),
  makeCode("<header>, <nav>, <main>, <footer>, <form>, <input>, <select>,"), document.createTextNode(' etc.')
], 'p'))

body.append(makeHeader('Can you find a picture of the inventor of the web?', 'h1'));

body.append(makeImage("/images/tim-berners-lee.jpg", "A young Tim Berners-Lee"))

body.append(makeParagraph(`
I'm sorry, I am a text based model and I am not able to find or show images. However, I can tell you that
 the inventor of the World Wide Web (WWW) is Sir Tim Berners-Lee. He is a British computer scientist and 
 is considered to be the inventor of the World Wide Web. He proposed and developed the first successful 
 communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet in 1989. 
 He also created the first web browser, called WorldWideWeb, and the first web server, called httpd. He 
 also wrote the first version of the HTML language, which provided the structure for web pages. He is currently 
 working on a decentralized web project called Solid.`
));

body.append(makeHeader("What else has Lee done recently?", 'h1'))
body.append(makeParagraph('(this story is AI-generated & satirical.)'))

body.append(makeImage("/images/saviour.png", "The terrorists' 'Stronghold' (ruined childrens' hospital)"))

body.append(makeParagraph(`
Once upon a time, in a bustling metropolis, the city was thrown into chaos as a group of heavily armed terrorists 
launched a surprise attack on the city's main square. The city's residents were caught off guard and panicked as the 
terrorists began to indiscriminately open fire on civilians. The police were quick to respond, but were outmatched by 
the terrorists' superior firepower. The city's mayor, desperate to protect his citizens, reached out to a retired 
special forces soldier named Sir Tim Burners-Lee. Sir Tim Burners-Lee had left the military after a mission went awry 
and had been living a quiet life, but the mayor knew that Sir Tim Burners-Lee was the city's only hope. Sir Tim 
Burners-Lee reluctantly agreed to help and quickly assembled a team of former military comrades. Together, they devised 
a plan to infiltrate the terrorist's stronghold and take out the leaders of the group. The team successfully infiltrated 
the stronghold, taking out the terrorists one by one. As they closed in on the leader of the group, they were ambushed 
by a group of suicide bombers. Sir Tim Burners-Lee and his team were able to neutralize the bombers but not before one 
of them managed to detonate their explosives, causing significant damage to the stronghold. Despite the setback, Sir Tim
Burners-Lee and his team were able to take out the leader of the group and end the attack. The city's residents were 
relieved and grateful to Sir Tim Burners-Lee and his team for their bravery and quick thinking. In the aftermath of the 
attack, the city came together to rebuild and heal. Sir Tim Burners-Lee returned to his quiet life, but the memory of 
the attack and the lives lost stayed with him. He knew that there would always be those who sought to do harm, but he
also knew that there would always be those willing to stand up and protect their fellow citizens.
`))
const credits = document.createElement('div')
credits.setAttribute('class', 'credits')

const c1 = mergeItems([
  document.createTextNode('Text from 2023-01-14 conversation with '),
  makeLink('ChatGPT.', "https://chat.openai.com/chat"),
], 'p')


const c2 = mergeItems([
  document.createTextNode('Photo of a young Tim Berners-Lee from '),
  makeLink('Flickr', "https://www.flickr.com/photos/itupictures/16662336315"),
  document.createTextNode(' no thanks to ChatGPT. ('),
  makeLink(('CC BY 2.0'), 'https://creativecommons.org/licenses/by/2.0/'),
  document.createTextNode(').'),
], 'p')

const c3 = mergeItems([
  document.createTextNode('Image accompanying '),
  makeLink("ChatGPT", 'https://chat.openai.com/chat'),
  document.createTextNode("'s Berners-Lee fantasy generated at "),
  makeLink('Hotpot.ai', 'https://hotpot.ai/s/art-generator/8-4muDQ5qd4t2YiR5'),
  document.createTextNode('.')
], 'p')

credits.append(c1, c2, c3)
body.append(credits)

