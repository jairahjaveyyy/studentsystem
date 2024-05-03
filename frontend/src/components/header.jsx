import React from 'react';

function Header() {
    return (
        <header className="bg-green-500 text-white p-4 flex justify-between items-center">
            <div className='flex'> 
            <img src="https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/361285049_756300016505576_1065119465114803334_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zPPlKZuqI7gQ7kNvgFb11Bh&_nc_ht=scontent.fdvo1-1.fna&oh=00_AfDmQqa6BuSuE9Qx2uV0KqZy1QSGuivJERQUbSSqnBAjBQ&oe=6638FA80" 
                    alt="School Logo" className="h-16 rounded-full" />
              <h1 className='text-white font-bold text-3xl p-2'>Gingoog City Colleges</h1>
              </div>
            <h1 className="text-2xl">Dashboard</h1>
        </header>
    );
}

export default Header;
