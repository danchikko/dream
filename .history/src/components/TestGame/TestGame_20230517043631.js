import styles from './TestGame.module.css'

const TestGame = () => {
	return (
		<div className={styles.container}>
			<h1>IT-квест</h1>
			<p>
				Ответьте на следующие вопросы, чтобы узнать, какие навыки и
				знания вам понадобятся для успешной карьеры в IT-индустрии.
			</p>
            <div>
                <label>What do eat</label>
                <option>Apple</option>
                <option></option>
            </div>
		</div>
	)
}

export default TestGame