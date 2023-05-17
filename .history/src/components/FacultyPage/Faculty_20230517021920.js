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
							1. Разработка программного обеспечения. Она включает
							в себя создание программ, которые позволяют
							компьютерным системам выполнять определенные задачи.
						</li>
                        <li>
                        2. Сетевое администрирование: оно включает в себя установку, настройку и обслуживание компьютерных систем и сетей.
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
