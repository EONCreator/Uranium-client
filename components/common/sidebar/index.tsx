import * as React from 'react'

const SideBar = () => (
		<div className="sidebar ">
					<div className="header">
					<div>
						<div className="flex justify-center">
							<img src="./logo.png" width="128" />
						</div>
					</div>
				</div>
				<div class="body">
            <div class="items">
				<a href='#' className="item"><div><i class="fa fa-dashboard fa-lg"></i>Статистика</div></a>
				<div class="item w-full">
                    <div class="block w-full">
						<div class="flex justify-between">
							<div><i class="fa fa-users fa-lg"></i>Пользователи</div>
							<div class="arrow"><i class="fa fa-angle-down fa-lg"></i></div></div>
						</div>
					</div>
					<div class="sub-items" v-if="usersItems">
						<div class="item"><i class="fa fa-folder fa-lg"></i>Работники</div>
						<div class="item"><i class="fa fa-folder fa-lg"></i>Сотрудники</div>
						<div class="item"><i class="fa fa-folder fa-lg"></i>Кандидаты</div>
					</div>
					<a href='#' className="item"><div><i class="fa fa-envelope fa-lg"></i><div>Сообщения</div></div></a>
					
					<div class="item w-full">
                    <div class="block w-full">
						<div class="flex justify-between">
							<div><i class="fa fa-plus-square-o item-icon"></i>Добавленное</div>
							<div class="arrow"><i class="fa fa-angle-down fa-lg"></i></div></div>
						</div>
					</div>
					<div class="sub-items" v-if="usersItems">
						<div class="item"><i class="fa fa-folder fa-lg"></i>Таблицы</div>
						<div class="item"><i class="fa fa-folder fa-lg"></i>Страницы</div>
					</div>
					
					<a href='#' className="item"><div><i class="fa fa-cogs fa-lg"></i><div>Настройки</div></div></a>
			</div>
			</div>
		</div>
	)

export default SideBar