import Image from '../Atoms/Image'

const Card = ( ) => (
  <article id="open-overlay-button" className="card">
    <Image
      img='quiz2_web'
      alt='Quiz 2'
    />
    <div className="card-text">
      <div>
        <h3>Quiz 2 Web</h3>
        <p>Conceptos propios de: Computer Science, Arquitectura de computadoras, Sistema Operativos, Redes y Web</p>
      </div>
      <button id="open-quiz-tooltip" className="button">Ver la resolución del quiz</button>
    </div>
  </article>
)

export default Card