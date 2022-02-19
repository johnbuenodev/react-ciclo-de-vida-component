import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    //posts: []
    posts: [
      {
        id: 1,
        title: 'Blade runner',
        body: 'Filme ficção'
      } /*,
      {
        id: 2,
        title: 'Ghost in the Shell',
        body: 'Filme ficção'
      },
      {
        id: 3,
        title: 'Akira',
        body: 'Filme ficção'
      } */
    ],
  };

  //função executada quando tela acaba de ser renderizada carregada
  componentDidMount() {

    setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: 'Ghost in the Shell',
            body: 'Filme ficção'
          },
        ],
      });
    }, 2500);

    setTimeout(() => {
      alert("Ciclo de vida DidMount! Executado após tela ser renderizada.");
      
    }, 3000);

  }

  //Essa função recebe o valor antigo prevProps e o atual prevState 
  componentDidUpdate() {

    setTimeout(() => {
      alert("Ciclo de vida DidUpdate! Executado quando algo for atualizado na tela.");
    }, 5000);

  }

  //Essa função é executada quando o Componente está sendo desmontado tipo OnDestroy do Angular
  componentWillUnmount() {
    console.log("Componente Destruido!");
  }


  render() {

    const { posts } = this.state;

    // Sempre que utilizar Map adicionar key para evitar o warning no console.log

    return (
      <div className="App">
        
        <div className="container-card">
        <div className="margin-bottom-2rem">Olhar console.log() ou observar Alert()</div>
          {posts.map(post => (

            <div key={post.id} className="card-item">
              <h1>{post.id}</h1>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>

          ))}
        </div>
      </div>
    );
  }
}

export default App;

