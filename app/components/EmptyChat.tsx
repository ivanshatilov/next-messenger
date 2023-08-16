const EmptyChat = () => {
    return ( 
        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-indigo-300 via-sky-300 via-40% to-emerald-300 to-90%">
            <span className="bg-gray-200 bg-opacity-50 py-2 px-6 rounded-full text-lg font-bold text-white select-none" >
                Select a chat to start messaging
            </span>
           
        </div>
     );
}
 //background: linear-gradient(225deg, rgba(238, 130, 238, 1) 0%, rgba(0, 209, 255, 1) 100%);
export default EmptyChat;