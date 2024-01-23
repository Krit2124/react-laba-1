import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Input from './components/input/input';
import Nav from './components/nav/nav';
import Title from './components/title/title';

function App() {
  let logoLink = "https://img.freepik.com/free-vector/fish-gradient-colorful-illustration-logo-design_343694-2564.jpg?w=826&t=st=1705481558~exp=1705482158~hmac=acfebd2f77d09b7614b69c136163cff6649ee9e9e1b19326657906f3dba005a5"
  let siteName = "Lorem Ipsum"

  let navigationList = [{title: 'Новости', link: '/news'}, {title: 'Квадраты', link: '/squares'}, {title: 'Блог', link: '/blog'}, {title: 'Сообщения', link: '/messages'}, {title: 'Обратная связь', link: '/form'}]

  return (
    <div className="App">
      <header>
        <div className='container'>
          <div className='flex-row-sb-c'>
            <Header logoLink={logoLink} siteName={siteName}/>
            <Nav navigationList={navigationList}/>
          </div>
        </div>
      </header>
      
      <main>
        <div className='container'>
          <Title text="Заголовок" size="28px"/>
        </div>
        
        <div className='container'>
          <Input type="text" placeholder="Поле для ввода текста"/>
        </div>
      </main>

      <footer>
        <div className='container'>
            <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
