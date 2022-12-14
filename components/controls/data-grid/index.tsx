import * as React from 'react'

const DataGrid = () => (
<div>
	<div className="data-grid-tools">
		<div className="tool-block">
				<div className="tool-left">
					<button className="tool-button"><img src="./icons/cogs.png" /></button> <span className="data-grid-name">Пользователи</span>
				</div>
		</div>
		<div className="tool-block">
			<div className="tool">
				<button className="tool-button"><img src="./icons/cogs.png" /></button>
			</div>
			<div className="tool">
				<button className="tool-button"><img src="./icons/refresh.png" /></button>
			</div>
			<div className="tool">
				<button className="tool-button"><img src="./icons/plus.png" /></button>
			</div>
		</div>
	</div>
	<table className="data-grid">
		<thead className="header">
			<tr>
				<td className="cell"></td>
				<td className="cell">Номер</td>
				<td className="cell">Название</td>
				<td className="cell">Пользователь</td>
				<td className="cell">Фото</td>
				<td className="cell">В наличии</td>
				<td className="cell actions-column">Действия</td>
			</tr>
		</thead>
		<tbody>
			<tr>
			<td className="cell">+</td>
				<td className="cell">Номер</td>
				<td className="cell">Новый пользователь</td>
				<td className="cell">Пользователь</td>
				<td className="cell">Фото</td>
				<td className="cell">В наличии</td>
				<td className="cell">
					<div className="actions">
						<i class="fa fa-eye fa-lg"></i>
						<i class="fa fa-pencil fa-lg"></i>
						<i class="fa fa-trash fa-lg"></i>
					</div>
				</td>
			</tr>
		
			<tr className="whitesmoke-row">
			<td className="cell">+</td>
				<td className="cell">Номер</td>
				<td className="cell">Название</td>
				<td className="cell">Пользователь</td>
				<td className="cell">Фото</td>
				<td className="cell">В наличии</td>
				<td className="cell">
					<div className="actions">
						<i class="fa fa-eye fa-lg"></i>
						<i class="fa fa-pencil fa-lg"></i>
						<i class="fa fa-trash fa-lg"></i>
					</div>
				</td>
			</tr>
		<tr>
		<td className="cell">+</td>
				<td className="cell">Номер</td>
				<td className="cell">Название</td>
				<td className="cell">Пользователь</td>
				<td className="cell">Фото</td>
				<td className="cell">В наличии</td>
				<td className="cell">
					<div className="actions">
						<i class="fa fa-eye fa-lg"></i>
						<i class="fa fa-pencil fa-lg"></i>
						<i class="fa fa-trash fa-lg"></i>
					</div>
				</td>
			</tr>
			<tr className="relationShip">
			<td colspan="6">
			<div className="content">
			<div>
			<div><b>Название</b></div>
			<div><b>Элементы:</b></div>
			</div>
			</div>
			</td>
		</tr>
		</tbody>
	</table>
	<div className="data-grid-footer">
			<div className="footer-tools">
				<div className="paginator">
					<button className="page-button"><img src="./icons/first.png" /></button>
					<button className="page-button"><img src="./icons/prev.png" /></button>
					<button className="page-button">1</button>
					<button className="page-button">2</button>
					<button className="page-button">...</button>
					<button className="page-button">8</button>
					<button className="page-button">10</button>
					<button className="page-button"><img src="./icons/next.png" /></button>
					<button className="page-button"><img src="./icons/last.png" /></button>
				</div>
			</div>
		</div>
	</div>
)

export default DataGrid