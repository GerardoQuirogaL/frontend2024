import Listitem from "./Listitem.jsx"
  
const link = [
  {
    name: 'Google',
    url: 'https://goolgle.com'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com'
  }
]

function App() {
  return(
    <div>
    <h1>
    Link
    </h1>
    <hr/>
    <ul>
      {
      link.map((Link)=>(
        <Listitem
        key={linl.name}
        name={link.name}
        url={link.url}/>
      ))
      //link.map((link)=>(
        //<li key={link.name}
        //<a href={link.url}>{link.name}</a>
        //</li>
      //))
      }
    </ul>
    </div>
  )
}

export default App
