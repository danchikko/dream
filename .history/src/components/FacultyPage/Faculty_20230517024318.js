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
						<li>
							<AiOutlineCheckCircle /> Разработка программного
							обеспечения
						</li>
						<li className=''>
							Системный администратор - специалист, ответственный
							за установку, настройку, обслуживание и поддержку
							компьютерных систем и сетей.
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
						<li></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Faculty
