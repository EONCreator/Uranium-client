import * as React from 'react'

const NavBar = () => (
		<nav class="navbar shadow px-3 w-full flex items-center justify-between">
        <a class="items-center space-x-2">
            <svg className="logo" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  
			stroke-linecap="round"  stroke-linejoin="round">  <line x1="3" y1="12" x2="21" y2="12" />  <line x1="3" y1="6" x2="21" y2="6" />  
			<line x1="3" y1="18" x2="21" y2="18" /></svg>
            <div>Панель управления</div></a>

            <div class="items-block items-center space-x-2">
                <div class="blocks items-center space-x-4">
                <div class="block items-end cursor-pointer">
                    <img width="26" height="26" src="https://cdn-icons.flaticon.com/png/512/1601/premium/1601884.png?token=exp=1644756520~hmac=5228030cb7966be857c275562fc4f50b" />
                    <div class="bg-red-400 text-xs text-white rounded px-1 absolute">1</div>
                </div>
                <div class="block items-end cursor-pointer">
                    <img width="28" height="26" src="https://cdn-icons.flaticon.com/png/512/3686/premium/3686989.png?token=exp=1644756844~hmac=235c13fb12a2f254b755a6cc90c9ac32" />
                    <div class="bg-red-400 text-xs text-white rounded px-1 absolute">3</div>
                </div>
                <div class="block items-end cursor-pointer">
                    <img width="28" height="26" src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665680.png?token=exp=1644757256~hmac=80af6f79166acd711a3f9d32d44e137a" />
                </div>
                </div>
                
                <div class="flex px-4 mx-2">
                    <input class="outline-none rounded text-sm bg-gray-200 text-gray-500"
                      placeholder="Поиск..." />
                    <button class="bg-gray-200">
                        <img width="16" height="16" class="rounded" src="https://cdn-icons.flaticon.com/png/512/2811/premium/2811806.png?token=exp=1644755986~hmac=7cf8afb1d1a7f74267ab9a8332f97c6a" />
                    </button>
                </div>
            <div class="hidden lg:block text-gray-500 text-sm">
                <div>
                    <div>John Doe</div>
                    <div class="text-blue-500">Администратор</div>
                </div>
            </div>
            <div>
                <img width="28" src="https://cdn-icons.flaticon.com/png/512/3899/premium/3899618.png?token=exp=1644755510~hmac=cd5f00f82a62d78bb580f9f0499d7f0b" />
            </div>
            </div>
    </nav>
	)

export default NavBar