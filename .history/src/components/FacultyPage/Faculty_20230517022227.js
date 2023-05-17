import './Faculty.css'

const Faculty = () => {
	return (
		<div className='Facultycontainer'>
			<h2 className='title'>Разница между ИВТ и ИСИТ</h2>
			<div className='FacultyInfoBlock'>
				<div className='IVT'>
					<h3>ИВТ</h3>
					<ul>
						<li>
							Разработка программного обеспечения. Она включает в
							себя создание программ, которые позволяют
							компьютерным системам выполнять определенные задачи.
						</li>
						<li>
							Сетевое администрирование: оно включает в себя
							установку, настройку и обслуживание компьютерных
							систем и сетей.
						</li>
						<li>
							Кибербезопасность. Сюда входит защита компьютерных
							систем, сетей и конфиденциальной информации от
							несанкционированного доступа, кражи или повреждения.
						</li>
						<li>
							Управление базой данных: включает создание,
							проектирование и управление базами данных, в которых
							хранится информация для организаций.
						</li>
						<li>
							Веб-разработка: включает в себя создание
							динамических веб-сайтов и веб-приложений, работающих
							в Интернете.
						</li>
						<li>
							Облачные вычисления: это включает в себя
							предоставление вычислительных услуг через Интернет,
							таких как хранилище, программное обеспечение и
							вычислительная мощность.
						</li>
						<li>
							Искусственный интеллект (ИИ) и машинное обучение
							(МО): это передовые технологии, которые позволяют
							компьютерам учиться и принимать решения, как люди.
							Они используются в различных областях ИТ, включая
							автоматизацию, анализ данных и принятие решений.
						</li>
					</ul>
				</div>
				<div className='ISIT'>
					<h3>ИСИТ</h3>
				</div>
			</div>
		</div>
	)
}

export default Faculty
