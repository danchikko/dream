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
				<select>
					<option>Apple</option>
					<option>banana</option>
					<option>cherry</option>
					<option>lime</option>
				</select>
			</div>
		</div>
	)
}

export default TestGame
