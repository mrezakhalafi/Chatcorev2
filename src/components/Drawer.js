import React, { useRef } from 'react';

function Drawer({ isOpen, toggleDrawer }) {
    const drawerRef = useRef(null);

    return (
        <>
            <div
                ref={drawerRef}
                className={`fixed w-80 bg-white h-full shadow-lg z-20 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="p-4 absolute">
                    <button onClick={toggleDrawer} className="mb-4 text-red-500">
                        Close
                    </button>
                    <p>Drawer Content Here</p>
                </div>
            </div>
        </>
    );
}

export default Drawer;
