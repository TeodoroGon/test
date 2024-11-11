import styles from './App.module.scss';
import LogotipoPng from './assets/logotipo.png';
import BotNDeRegistroPng from './assets/botón de registro.png';
import ImGenesPng from './assets/imágenes.png';

function App() {
    return (
        <div className={styles.App}>
            <span className={styles.span1}>
                Un proyecto que busca cerrar la brecha de género e incentivar la participación de
                las mujeres en la Ciencia, Tecnología, Ingeniería y Matemáticas.
            </span>
            <img src={LogotipoPng} alt="" className={styles.img1} />
            <img src={BotNDeRegistroPng} alt="" className={styles.button1} />
            <img src={ImGenesPng} alt="" className={styles.img2} />
        </div>
    );
}

export default App;
