class Sobretxt extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>O <strong>{this.props.nomecampus}</strong> — é uma autarquia federal de ensino. <br></br><br></br>
      Fundada em 1909, como Escola de Aprendizes Artífices, é reconhecida pela sociedade paulista por sua excelência no ensino público gratuito de qualidade.<br></br><br></br>
      Com a mudança, o Instituto Federal de São Paulo passou a destinar 50% das vagas para os cursos técnicos e, no mínimo, 20% das vagas para os cursos de licenciatura, sobretudo nas áreas de Ciências e da Matemática.<br></br>
      Complementarmente, continuará oferecendo cursos de formação inicial e continuada, tecnologias, engenharias e pós-graduação.<br></br><br></br>
      Além dos cursos presenciais, o Instituto Federal de São Paulo oferece os cursos Técnicos em Administração e em Informática para Internet e, a partir de 2012, o superior de Formação de Professores na modalidade de Ensino a<br></br>
      Distância (EaD).<br></br><br></br>
      O IFSP é organizado em diversos câmpus e possui mais de 40 mil alunos matriculados nas 36 unidades distribuídas pelo estado de São Paulo;<br></br>
      Localizado em <strong>{this.props.endereco}</strong>
    </p>  
  }
}

ReactDOM.render(<Sobretxt nomecampus="Instituto Federal de Educação, Ciência e Tecnologia de São Paulo" endereco="Rua Pedro Vicente, 625 - Canindé - São Paulo - SP - Brasil - Cep: 01109-010" />, document.getElementById('about'));