import * as React from 'react'

const NavBar = () => (
		<nav class="navbar px-3 w-full flex items-center justify-between">
        <a class="items-center space-x-2">
            <svg className="logo" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  
			stroke-linecap="round"  stroke-linejoin="round">  <line x1="3" y1="12" x2="21" y2="12" />  <line x1="3" y1="6" x2="21" y2="6" />  
			<line x1="3" y1="18" x2="21" y2="18" /></svg>
            <div className="control-label">Панель управления</div></a>

            <div class="items-block">
                <div class="blocks">
					<div class="block">
						<div><i class="fa fa-inbox fa-lg"></i></div>
						<div class="label">12</div>
					</div>
					<div class="search-box">
                    <input
                      placeholder="Поиск..." />
                    <button class="bg-gray-200">
                        <img src="./icons/search.png" />
					</button>
                </div>
                </div>
                
				
                
            <div class="user-block">
                <div className="labels-block">
                    <div className="user-name">John Doe</div>
                    <div class="user-role">Администратор</div>
                </div>
            </div>
            <div className="user-avatar">
                <img width="30" src="./icons/user.png" />
            </div>
            </div>
    </nav>
	)

export default NavBar