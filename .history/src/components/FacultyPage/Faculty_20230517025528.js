import './Faculty.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Faculty = () => {

	return (
		<div className='Facultycontainer'>
			<h2 className='title'>Разница между ИВТ и ИСИТ</h2>
			<div className='FacultyInfoBlock'>
				<div className='IVT'>
					<h3>ИВТ</h3>
					<ul>
						<li className='mouse-active'>
							<AiOutlineCheckCircle /> Разработка программного
							обеспечения
						</li>
						<li>
							<AiOutlineCheckCircle /> Сетевое администрирование
						</li>
						<li>
							<AiOutlineCheckCircle /> Кибербезопасность
						</li>
						<li>
							<AiOutlineCheckCircle /> Управление базой данных
						</li>
						<li>
							<AiOutlineCheckCircle /> Веб-разработка
						</li>
						<li>
							<AiOutlineCheckCircle /> Облачные вычисления
						</li>
						<li>
							<AiOutlineCheckCircle /> Искусственный интеллект
							(ИИ) и машинное обучение (МО)
						</li>
					</ul>
				</div>
				<div className='ISIT'>
					<h3>ИСИТ</h3>
					<ul>
						<li>Системный администратор</li>
                        <li>Программист</li>
                        <li>Специалист по информационной безопасности</li>
                        <li>Аналитик данных</li>
                        <li>Инженер по разработке программного обеспечения</li>
                        <li>Специалист по базам данных</li>
                        
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Faculty
