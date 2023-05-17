import './Faculty.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Faculty = () => {
	return (
		<div className='Facultycontainer'>
			<h2 className='title'>Разница между ИВТ и ИСИТ</h2>
			<div className='FacultyInfoBlock'>
				<div className='IVT'>
					<h3>ИВТ</h3>
					<ul>
						<li>
							<AiOutlineCheckCircle />  Разработка программного обеспечения
						</li>
						<li>
                        <AiOutlineCheckCircle />  Сетевое администрирование
						</li>
						<li>
                        <AiOutlineCheckCircle />  Кибербезопасность
						</li>
						<li>
                        <AiOutlineCheckCircle />  Управление базой данных
						</li>
						<li>
							*  Веб-разработка
						</li>
						<li>
							*  Облачные вычисления
						</li>
						<li>
							*  Искусственный интеллект (ИИ) и машинное обучение
							(МО)
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
