import Link from "next/link";
import styles from "./globals.css";

const Notfound = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Page introuvable !</h2>
			<img src="/images/vent-dans-arbre.gif" className={styles.backgroundImage} alt="Background"/>
				<p>Désolé, la page que vous recherchez n'existe pas !</p>
				<Link href="/">Retournez à la page d'accueil.</Link>
			</div>
		</div>
	)
}

export default Notfound
